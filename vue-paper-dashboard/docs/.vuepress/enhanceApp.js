import DemoBlock from './demo-block/demo-block'
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import * as Components from '@/components/UIComponents/index'
import GlobalDirectives from '@/globalDirectives'
import '@/assets/sass/paper-dashboard.scss'
import './doc_styles.scss'
import getElements from './utils/get-sidebar-elements';
import ElementUI from '../../node_modules/element-ui';
import '../../node_modules/element-ui/packages/theme-chalk/lib/index.css';
import './demo.css'

import VueNotify from '../../node_modules/vue-notifyjs';
import '../../node_modules/vue-notifyjs/themes/default.css'
import '../../node_modules/sweetalert2/dist/sweetalert2.css';

export default ({
                  Vue, // the version of Vue being used in the VuePress app
                  options, // the options for the root Vue instance
                  router, // the router instance for the app
                  siteData
                }) => {
  locale.use(lang);
  Vue.use(GlobalDirectives)
  Vue.component('demo-block', DemoBlock);
  Vue.use(ElementUI);

  Vue.use(VueNotify);
  let componentEntries = Object.entries(Components);
  for(let [name, component] of componentEntries) {
    Vue.component(component.name || name, component)
  }
  let swalLoaded = false
  Vue.mixin({
    async mounted() {
      if(!swalLoaded){
        swalLoaded = true;
        let swal = await import('../../node_modules/sweetalert2');
        window.swal = swal.default ? swal.default : swal;
      }
    }
  });
  Vue.prototype.$docs = Object.values(Components);
  let docComponents = getElements(componentEntries);
  siteData.themeConfig.sidebar = siteData.themeConfig.sidebar.concat(docComponents);
}
