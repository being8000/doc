"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[3533],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3915:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],s={},l=void 0,p={unversionedId:"api/js/modules/notification",id:"api/js/modules/notification",title:"notification",description:"@tauri-apps/api / notification",source:"@site/docs/api/js/modules/notification.md",sourceDirName:"api/js/modules",slug:"/api/js/modules/notification",permalink:"/doc/v1/api/js/modules/notification",draft:!1,editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/api/js/modules/notification.md",tags:[],version:"current",lastUpdatedAt:1652246483,formattedLastUpdatedAt:"5/11/2022",frontMatter:{},sidebar:"api",previous:{title:"mocks",permalink:"/doc/v1/api/js/modules/mocks"},next:{title:"os",permalink:"/doc/v1/api/js/modules/os"}},u={},d=[{value:"Interfaces",id:"interfaces",level:2},{value:"Type aliases",id:"type-aliases",level:2},{value:"Permission",id:"permission",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions",level:2},{value:"isPermissionGranted",id:"ispermissiongranted",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"requestPermission",id:"requestpermission",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"sendNotification",id:"sendnotification",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/doc/v1/api/js/"},"@tauri-apps/api")," / notification"),(0,r.kt)("h1",{id:"module-notification"},"Module: notification"),(0,r.kt)("p",null,"Send toast notifications (brief auto-expiring OS window element) to your user.\nCan also be used with the Notification Web API."),(0,r.kt)("p",null,"This package is also accessible with ",(0,r.kt)("inlineCode",{parentName:"p"},"window.__TAURI__.notification")," when ",(0,r.kt)("inlineCode",{parentName:"p"},"tauri.conf.json > build > withGlobalTauri")," is set to true."),(0,r.kt)("p",null,"The APIs must be allowlisted on ",(0,r.kt)("inlineCode",{parentName:"p"},"tauri.conf.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tauri": {\n    "allowlist": {\n      "notification": {\n        "all": true // enable all notification APIs\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"It is recommended to allowlist only the APIs you use for optimal bundle size and security."),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/doc/v1/api/js/interfaces/notification.Options"},"Options"))),(0,r.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,r.kt)("h3",{id:"permission"},"Permission"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"Permission"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"granted"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"denied"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"default"')),(0,r.kt)("p",null,"Possible permission values."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/notification.ts#L42"},"notification.ts:42")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"ispermissiongranted"},"isPermissionGranted"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isPermissionGranted"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),">"),(0,r.kt)("p",null,"Checks if the permission to send notifications is granted."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/notification.ts#L49"},"notification.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"requestpermission"},"requestPermission"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"requestPermission"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/doc/v1/api/js/modules/notification#permission"},(0,r.kt)("inlineCode",{parentName:"a"},"Permission")),">"),(0,r.kt)("p",null,"Requests the permission to send notifications."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/doc/v1/api/js/modules/notification#permission"},(0,r.kt)("inlineCode",{parentName:"a"},"Permission")),">"),(0,r.kt)("p",null,"A promise resolving to whether the user granted the permission or not."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/notification.ts#L66"},"notification.ts:66")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sendnotification"},"sendNotification"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"sendNotification"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Sends a notification to the user."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/doc/v1/api/js/interfaces/notification.Options"},(0,r.kt)("inlineCode",{parentName:"a"},"Options"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Notification options.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/notification.ts#L75"},"notification.ts:75")))}f.isMDXComponent=!0}}]);