## Vue Frontend Setup

To start using this design system you will need to to install some dependencies or copy some files to your
project.

<hr>

#### Steps to install

1. Navigate to your Vue Paper Dashboard project folder: `cd your-vue-paper-dashbord-project`
2. Install project dependencies: `npm install`
3. Create a new .env file: `cp .env.example .env`
4. `VUE_APP_BASE_URL` should contain the URL of your Vue Paper Dashboard Project (eg. http://localhost:8080/)
5. `VUE_APP_API_BASE_URL` should contain the URL of your Laravel JSON:API Project. (eg. http://localhost:3000/api/v1)
6. Run `npm run dev` to start the application in a local development environment or `npm run build` to build release distributables.

## Important notes/gotchas

- For MAC Users, please make sure you have enabled [view hidden files](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/)
We've encountered some cases when developers copied over the dashboard files but because of hidden files, important files
such as **.babelrc** or **.eslintrc.json** were not copied.
Please make sure you copy all files in order to avoid unwanted issues.


