(function(){"use strict";var t={9003:function(t,e,n){var o=n(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),e("router-view")],1)},i=[],a=n(1001),u={},s=(0,a.Z)(u,r,i,!1,null,null,null),c=s.exports,f=n(2631),l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("h2",[t._v("type success")]),e("van-button",{attrs:{type:"primary"},on:{click:t.test1}},[t._v("toast and go")]),e("van-button",{attrs:{type:"info"},on:{click:t.test2}},[t._v("toast and delay")]),e("h2",[t._v("自定义icon")]),e("van-button",{attrs:{type:"primary"},on:{click:t.test3}},[t._v("toast and go")]),e("van-button",{attrs:{type:"info"},on:{click:t.test4}},[t._v("toast and delay")])],1)},d=[],p={name:"HomeView",methods:{test1(){this.$toast({type:"success",message:"icon消失"}),window.location.replace("https://www.baidu.com")},test2(){this.$toast({type:"success",message:"看得见icon"}),setTimeout((()=>{window.location.replace("https://www.baidu.com")}),500)},test3(){this.$toast({message:"icon消失",icon:n(8698)}),window.location.replace("https://www.baidu.com")},test4(){this.$toast({message:"看得见icon",icon:n(8698)}),setTimeout((()=>{window.location.replace("https://www.baidu.com")}),500)}}},v=p,A=(0,a.Z)(v,l,d,!1,null,null,null),h=A.exports;o.ZP.use(f.ZP);const b=[{path:"/",name:"home",component:h},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,5399))}],w=new f.ZP({mode:"history",base:"/vant2-toast-test/",routes:b});var m=w,g=n(3713);n(5110);o.ZP.use(g.ZP),o.ZP.config.productionTip=!1,new o.ZP({router:m,render:t=>t(c)}).$mount("#app")},8698:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABECAYAAAAIn4KTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKZSURBVHgB7dxhcdtAEMXxNYNCEIRAMAQzqBk0DGoGhWAxaBkEQiEchJbBy91IN8kkVqzb3fOd7Peb0fRbLf0n9nNVtTuhagB8i78c4vF/t9v9EaovRh/i8RdvfgrVFSM/xSPgM8avJcb9Ho9/WMb43lJUrLMXsksjGo8z1tsL2eDziF5zErLB8ogyei24PqKM7g3rR5TRPaB8RBndCuUjyuhWKB9RRreKAQ8oG1FGt0L5iDK6VQz4C+VOQjrQjWhyFNKZoweUOwrpQDeijG4B3YgyugV0I8roWtCPKKNrQT+ijK4F/Ygyuhb0I8roWtCPaHp3PAmVwXQPXTuijK4B24gyukaMtod+RBldI0b7Ab020eeflFM8Btkg6Ee0afThw0kcZSMwjegL9JpFTyceLpxQ9w9Zwjai7aLPJ//VWzR9HRukQ7CNaPPoxxUnGNDZw5awjWi+pkFawPQ2LfmJ6eKjB7YRbRt9voATyv1uddKwj2j76POF7KETbn3ysI9ok/NehHWf8Uue5QZgH9G+omfG+GdM/7Sw1rlZRxRdRs/iiT1DL9S4MNhHtNq5uYJubDO3P+3CZ0SxiegZbPET01dO+IwosKXoGezxg+ai4TOi6tfvAnziHwpez2NE8+sOsmWwx0+ufvTAZ0STgK1Hz+AT/+VSEPiNaBJwL9GzeEEj7ALe3QmE34jm33uQewSf+MkZ0zMuHiOaBNxr9Ax+8b0E3Hv0DNPdyR4EPEr0BLaHhLx0+7diVaFt/PS61W7Kda9R/MeOnmH56QRGrw2+38cZvUTl+Iz+lUrxGX0N5/iMXsIpPqNrGOOPjG6A6T/YKb0RNgrZFcYfhfysjD8K+ZvjM3oLuPy02ihU34f4o9DtYPqquZcH9gpZQcx6MBvOoQAAAABJRU5ErkJggg=="}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(f=0;f<t.length;f++){o=t[f][0],r=t[f][1],i=t[f][2];for(var u=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(u=!1,i<a&&(a=i));if(u){t.splice(f--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.1513fcf0.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vant2-toast-test:";n.l=function(o,r,i,a){if(t[o])t[o].push(r);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==e+i){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=o),t[o]=[r];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(p);var r=t[o];if(delete t[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/vant2-toast-test/"}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(e),u=new Error,s=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],u=o[1],s=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(s)var f=s(n)}for(e&&e(o);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},o=self["webpackChunkvant2_toast_test"]=self["webpackChunkvant2_toast_test"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9003)}));o=n.O(o)})();
//# sourceMappingURL=app.3ef52f4c.js.map