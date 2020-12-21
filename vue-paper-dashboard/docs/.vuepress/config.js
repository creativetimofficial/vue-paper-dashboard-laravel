const markdownParser = require('./markdownParser')
const path = require('path');

module.exports = {
  base: '/documentation/',
  title: "Vue Paper Dashboard Laravel",
  markdown: {
    config: markdownParser
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../../src')
    config.resolve.alias['src'] = path.resolve(__dirname, '../../src')
    config.resolve.alias['assets'] = path.resolve(__dirname, '../../src/assets')
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
          options.optimizeSSR = false
          return options;
        }
      )
  },
  head: [
    ['link', { rel: 'stylesheet', href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" }],
    ['link', { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css" }],
    ['meta', {
      name: "keywords",
      content:
        "creative tim, updivision, html dashboard, vue, vuejs, laravel, json:api, json, api, html css dashboard laravel, vue paper dashboard laravel, vue paper dashboard laravel, vue paper dashboard, vue paper dashboard, paper vue admin, vue dashboard, vue dashboard, vue admin, web dashboard, bootstrap 4 dashboard laravel, bootstrap 4, css3 dashboard, bootstrap 4 admin laravel, paper ui dashboard bootstrap 4 laravel, frontend, responsive bootstrap 4 dashboard, paper design, paper laravel bootstrap 4 dashboard",
    }],
    ['meta', {
      name: "description",
      content:
        "Fullstack tool for building web & mobile apps, complete with UI elements, a Vue frontend and an API-powered Laravel backend",
    }],
    ['meta',{
      itemprop: "name",
      content:
        "Vue Paper Dashboard Laravel by Creative Tim & UPDIVISION",
    }],
    ['meta', {
      itemprop: "description",
      content:
        "Fullstack tool for building web & mobile apps, complete with UI elements, a Vue frontend and an API-powered Laravel backend",
    }],
    ['meta', {
      itemprop: "image",
      content:
        "https://s3.amazonaws.com/creativetim_bucket/products/404/original/opt_pd_vuelaravel_thumbnail.jpg",
    }],
    ['meta', {
      name: "twitter:card",
      content: "product",
    }],
    ['meta', {
      name: "twitter:site",
      content: "@creativetim",
    }],
    ['meta', {
      name: "twitter:title",
      content:
        "Vue Paper Dashboard Laravel by Creative Tim & UPDIVISION",
    }],
    ['meta', {
      name: "twitter:description",
      content:
        "Fullstack tool for building web & mobile apps, complete with UI elements, a Vue frontend and an API-powered Laravel backend",
    }],
    ['meta', {
      name: "twitter:creator",
      content: "@creativetim",
    }],
    ['meta', {
      name: "twitter:image",
      content:
        "https://s3.amazonaws.com/creativetim_bucket/products/404/original/opt_pd_vuelaravel_thumbnail.jpg",
    }],
    ['meta', {
      property: "fb:app_id",
      content: "655968634437471",
    }],
    ['meta', {
      property: "og:title",
      content:
        "Vue Paper Dashboard Laravel by Creative Tim & UPDIVISION",
    }],
    ['meta', {
      property: "og:type",
      content: "article",
    }],
    ['meta', {
      property: "og:url",
      content:
        "https://www.creative-tim.com/live/vue-paper-dashboard-laravel",
    }],
    ['meta', {
      property: "og:image",
      content:
        "https://s3.amazonaws.com/creativetim_bucket/products/353/original/opt_adp_vue_laravel_thumbnail.jpg",
    }],
    ['meta', {
      property: "og:description",
      content:
        "Want to build an API-powered Laravel app using Vue and Creative Tim`s signature design system, Paper?",
    }],
    ['meta', {
      property: "og:site_name",
      content: "Creative Tim",
    }],
      ['script', {}, `
      (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
      h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
      (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
      })(window,document.documentElement,'async-hide','dataLayer',4000,
      {'GTM-K9BGS8K':true});
  `],
    ['script', {}, `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-46172202-22', 'auto', {allowLinker: true});
        ga('set', 'anonymizeIp', true);
        ga('require', 'GTM-K9BGS8K');
        ga('require', 'displayfeatures');
        ga('require', 'linker');
        ga('linker:autoLink', ["2checkout.com","avangate.com"]);
    `],
    ['script', {}, `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NKDMSK6');
    `],
  ],
  themeConfig: {
    sidebarDepth: 1,

    sidebar: [
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          '/',
          '/examples/api-instalation',
          '/folder-structure',
          '/general-tips',
          '/licence'
        ],
      },
      {
        title: 'Vue Laravel Examples',
        collapsable: false,
        children: [
          '/examples/login',
          '/examples/register',
          '/examples/profile',
        ]
      },
    ],
    nav: [
      { text: 'API Docs', link: 'https://explore.postman.com/api/6357/laravel-jsonapi' },
      { text: 'Upgrade to PRO', link: 'https://www.creative-tim.com/product/vue-paper-dashboard-pro-laravel' },
      { text: 'Live Preview', link: 'https://demos.creative-tim.com/vue-paper-dashboard-laravel' },
      { text: 'Download now', link: 'https://www.creative-tim.com/product/vue-paper-dashboard-laravel' },
    ],
  }
};
