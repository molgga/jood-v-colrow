(function(t){function e(e){for(var o,r,c=e[0],u=e[1],s=e[2],l=0,p=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a={app:0},i=[];function c(t){return u.p+"js/"+({GettingStarted:"GettingStarted",demo:"demo"}[t]||t)+"."+{GettingStarted:"e23cc7e9","chunk-736c724b":"ebe65ea7",demo:"3c199901"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={GettingStarted:1,"chunk-736c724b":1,demo:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({GettingStarted:"GettingStarted",demo:"demo"}[t]||t)+"."+{GettingStarted:"ff2fa136","chunk-736c724b":"d1987774",demo:"7965485e"}[t]+".css",a=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===o||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var p=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}a[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="https://molgga.github.io/jood-v-colrow/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var o=n("1080"),r=n.n(o);r.a},"0e53":function(t,e,n){},1080:function(t,e,n){},3549:function(t,e,n){"use strict";var o=n("0e53"),r=n.n(o);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("9531"),n("26d3"),n("2007"),n("41ab"),n("de2a"),n("0b92");var o=n("9869"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{to:"/"}},[n("v-list-item-title",[t._v("Getting started")])],1),n("v-list-group",{attrs:{value:"true"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v("Demo")])]},proxy:!0}])},t._l(t.demoLinks,(function(e,o){return n("v-list-item",{key:o,attrs:{link:"",to:e.to}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.label))]),e.description?n("v-list-item-subtitle",[t._v(" "+t._s(e.description)+" ")]):t._e()],1)],1)})),1)],1)],1),n("v-app-bar",{staticClass:"app-bar",attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"app-title"},[t._v("@jood/v-colrow")]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.onGoGithub}},"v-btn",r,!1),o),[n("v-icon",[t._v("code")])],1)]}}])},[n("span",[t._v("Github")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.onGoNpm}},"v-btn",r,!1),o),[n("v-icon",[t._v("move_to_inbox")])],1)]}}])},[n("span",[t._v("NPM")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.onGoDocument}},"v-btn",r,!1),o),[n("v-icon",[t._v("library_books")])],1)]}}])},[n("span",[t._v("Document")])])],1),n("v-main",[n("v-container",{staticClass:"fill-height app-body-container"},[n("router-view",{staticClass:"app-body"})],1)],1)],1)},a=[],i=n("c465"),c=n.n(i),u=n("e1c9"),s=Object(i["defineComponent"])({setup:function(){var t=null,e=function(){r("https://molgga.github.io/jood-v-colrow/documents")},n=function(){r("https://github.com/molgga/jood-v-colrow")},o=function(){r("https://www.npmjs.com/package/@jood/v-colrow")},r=function(t){window.open(t)};return{drawer:t,demoLinks:u["c"],onGoGithub:n,onGoNpm:o,onGoDocument:e}}}),l=s,p=(n("034f"),n("3549"),n("2be6")),d=Object(p["a"])(l,r,a,!1,null,"7592c54e",null),f=d.exports,v=(n("ef1f"),n("5f2b")),m=!0,b=m?"/jood-v-colrow":"";o["default"].use(v["a"]);var h=[{path:"/",name:"GettingStarted",props:!0,component:function(){return n.e("GettingStarted").then(n.bind(null,"e575"))}},{path:"/demo/:demo",name:"DemoView",props:!0,component:function(){return n.e("demo").then(n.bind(null,"30df"))}},{path:"*",name:"GettingStarted",props:!0,component:function(){return n.e("GettingStarted").then(n.bind(null,"e575"))}}],g=new v["a"]({mode:"history",base:b,routes:h}),y=g,_=n("4afd"),w=n.n(_);o["default"].config.productionTip=!1,o["default"].use(c.a),o["default"].use(w.a),new o["default"]({router:y,vuetify:new w.a({icons:{iconfont:"md"}}),render:function(t){return t(f)}}).$mount("#app")},e1c9:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a}));n("8f0b"),n("ef1f"),n("fa8c");var o=[{key:"sample1",label:"sample1",component:function(){return n.e("chunk-736c724b").then(n.bind(null,"139e"))}}],r=function(){var t={};return o.forEach((function(e){t[e.key]=e})),t}(),a=function(){var t=[];for(var e in r){var n=r[e];t.push({to:"/demo/".concat(e),label:n.label})}return t}()}});