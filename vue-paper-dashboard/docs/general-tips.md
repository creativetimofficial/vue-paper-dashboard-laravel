## General tips

For deployment tips, please follow [vue cli docs](https://cli.vuejs.org/guide/deployment.html#cors)

## Custom Components

 Writing custom components should be fairly easy with Vue Paper Dashboard PRO.
 You can either write your own components with the help of our provided cssor even customize Element-UI components.

 If you want to write your own re-usable component, simply go to `src/components/UIComponents` and create a new `.vue` file.
 Usually all the css you need is already present in `assets` folder. If you need small customizations, you can directly add your custom styles inside
 your `.vue` component.

### Override element-ui components

 Vue Paper Dashboard PRO uses [element-ui](http://element.eleme.io/#/en-US/component/installation) for more complex components such as tables, selects etc.
 In order to give these components a `Paper` look, we recommend creating a new `scss` file inside `src/assets/paper` folder named with the component you want to customize.
 Element-UI uses BEM under the hood which should make the css customization pretty easy. You can take a look at

 - `_plugin-tags.scss`
 - `_plugin-selects.scss`

 to see how these components are customized. The easiest way to customize a new component, is to inspect the output html in Chrome dev tools and write your css/scss based on
 the class names or ids you find there.

### Override element-ui variables

We have defined a separate file `src/assets/sass/element_variables.scss` where you can override certain element-ui variables
as presented in [Element-Ui docs](http://element.eleme.io/#/en-US/component/custom-theme#update-scss-variables-in-your-project)
We set the main colors from Element to be the same as our custom color palette. This way, new components from Element, when imported,
will have the same colors as the theme.

### Handling requests

This template doesn't include the request handling part simply because people have different opinions regarding
this part. If you need to get started quickly, we recommend [axios](https://github.com/axios/axios) which is a library
for handling requests. Here's a small example on how you could integrate it with Vue

<iframe src="https://codesandbox.io/embed/lm71pox0z?module=%2Fsrc%2FaxiosPlugin.js&view=editor" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### Handling authentication

Authentication is a rather complex topic and can be implemented differently depending on your server architecture.
A very common authentication pattern is using tokens. Below is a code snippet on how you could write a small authentication 
middleware for handling authentication with json web tokens.

1. In your `routes.js` file, go to the route you want to restrict for authenticated users and add this
`meta: { requiresAuth: true, role: 'admin' }`

2. Define a new `js` file for handling authentication. 

```js
import jwtDecode from 'jwt-decode';

function redirectToMainPage(next) {
  // You can display a notification here if needed
  return next({path: '/'});
}

/**
 * Middleware to check if user has the correct right to access a certain page.
 * Checks are performed based on route meta fields `meta: { requiresAuth: true }`.
 * @param {object} router Vue router instance
 */
export default function authMiddleware(router) {
  router.beforeEach((to, from, next) => {
    // check for the routes that have `requiresAuth: true`
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (!requiresAuth) {
      return next();
    }
    let token = localStorage.getItem('token');
    if (!token) {
      return next({path: '/login'});
    }
    try {
      let decodedToken = jwtDecode(token);
      let { user, role } = decodedToken;
      let { role: metaRole } = to.meta;
      let userId = localStorage.getItem('userId');
      if (user === userId) {
        if(role && metaRole && role !== metaRole){
          return redirectToMainPage(next);
        }
        return next()
      } else {
        redirectToMainPage(next);
      }
    } catch (err) {
      redirectToMainPage(next);
    }
  })
}
```

:::tip 
In order to make everything work you will have to store `token` and `userId` inside `localStorage`
upon login.
:::

If you need something more complex, like handling refresh tokens, automatically logout, or check 
if user has the correct access rights before accessing each page, you could use [Vue Auth](https://github.com/websanova/vue-auth)
and follow [this issue](https://github.com/creativetimofficial/ct-vue-paper-dashboard-pro/issues/15) for more details.


