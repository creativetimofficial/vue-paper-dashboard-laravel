<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <notifications transition-name="notification-list" transition-mode="out-in">

    </notifications>
    <router-view name="header"></router-view>
    <transition name="fade"
                mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
  // Loading some plugin css asynchronously
  import 'sweetalert2/dist/sweetalert2.css'
  import 'vue-notifyjs/themes/default.css'
  export default {
  metaInfo() {
    return {
      title: "Vue Paper Dashboard Laravel by Creative Tim & UPDIVISION",
      script: (function () {
        if (process.env.VUE_APP_IS_DEMO == 1) {
          return [
            {
              hid: "gtm-script1",
              innerHTML: `
        (function (a, s, y, n, c, h, i, d, e) {
        s.className += " " + y;
        h.start = 1 * new Date();
        h.end = i = function() {
          s.className = s.className.replace(RegExp(" ?" + y), "");
        };
        (a[n] = a[n] || []).hide = h;
        setTimeout(function() {
          i();
          h.end = null;
        }, c);
        h.timeout = c;
      })(window, document.documentElement, "async-hide", "dataLayer", 4000, {
        "GTM-K9BGS8K": true
      });
        `,
              type: "text/javascript",
              charset: "utf-8",
            },
            {
              hid: "ga",
              innerHTML: `
             (function (i, s, o, g, r, a, m) {
            i["GoogleAnalyticsObject"] = r;
            (i[r] =
              i[r] ||
              function () {
                (i[r].q = i[r].q || []).push(arguments);
              }),
              (i[r].l = 1 * new Date());
            (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
          })(
            window,
            document,
            "script",
            "https://www.google-analytics.com/analytics.js",
            "ga"
          );
          ga("create", "UA-46172202-22", "auto", { allowLinker: true });
          ga("set", "anonymizeIp", true);
          ga("require", "GTM-K9BGS8K");
          ga("require", "displayfeatures");
          ga("require", "linker");
          ga("linker:autoLink", ["2checkout.com", "avangate.com"]);
              `,
              type: "text/javascript",
              charset: "utf-8",
            },
            {
              hid: "gtm-script2",
              innerHTML: `
             (function(w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-NKDMSK6");
              `,
              type: "text/javascript",
              charset: "utf-8",
            },
          ];
        }
      })(),
    };
  },
}
</script>
<style lang="scss">

</style>
