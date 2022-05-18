"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[1536],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),k=i,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||r;return a?n.createElement(c,l(l({ref:t},d),{},{components:a})):n.createElement(c,l({ref:t},d))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99936:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),l=["components"],o={},p=void 0,s={unversionedId:"api/js/modules/dialog",id:"api/js/modules/dialog",title:"dialog",description:"@tauri-apps/api / dialog",source:"@site/docs/api/js/modules/dialog.md",sourceDirName:"api/js/modules",slug:"/api/js/modules/dialog",permalink:"/doc/v1/api/js/modules/dialog",draft:!1,editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/api/js/modules/dialog.md",tags:[],version:"current",lastUpdatedAt:1652246483,formattedLastUpdatedAt:"5/11/2022",frontMatter:{},sidebar:"api",previous:{title:"clipboard",permalink:"/doc/v1/api/js/modules/clipboard"},next:{title:"event",permalink:"/doc/v1/api/js/modules/event"}},d={},m=[{value:"Interfaces",id:"interfaces",level:2},{value:"Functions",id:"functions",level:2},{value:"ask",id:"ask",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"confirm",id:"confirm",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"message",id:"message",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"open",id:"open",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"save",id:"save",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4}],u={toc:m};function k(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/doc/v1/api/js/"},"@tauri-apps/api")," / dialog"),(0,r.kt)("h1",{id:"module-dialog"},"Module: dialog"),(0,r.kt)("p",null,"Native system dialogs for opening and saving files."),(0,r.kt)("p",null,"This package is also accessible with ",(0,r.kt)("inlineCode",{parentName:"p"},"window.__TAURI__.dialog")," when ",(0,r.kt)("inlineCode",{parentName:"p"},"tauri.conf.json > build > withGlobalTauri")," is set to true."),(0,r.kt)("p",null,"The APIs must be allowlisted on ",(0,r.kt)("inlineCode",{parentName:"p"},"tauri.conf.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tauri": {\n    "allowlist": {\n      "dialog": {\n        "all": true, // enable all dialog APIs\n        "open": true, // enable file open API\n        "save": true // enable file save API\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"It is recommended to allowlist only the APIs you use for optimal bundle size and security."),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/doc/v1/api/js/interfaces/dialog.DialogFilter"},"DialogFilter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/doc/v1/api/js/interfaces/dialog.OpenDialogOptions"},"OpenDialogOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/doc/v1/api/js/interfaces/dialog.SaveDialogOptions"},"SaveDialogOptions"))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"ask"},"ask"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"ask"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"title?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"Shows a question dialog with ",(0,r.kt)("inlineCode",{parentName:"p"},"Yes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"No")," buttons."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message to show.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"title?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The dialog's title. Defaults to the application name.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"A promise resolving to a boolean indicating whether ",(0,r.kt)("inlineCode",{parentName:"p"},"Yes")," was clicked or not."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/dialog.ts#L156"},"dialog.ts:156")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"confirm"},"confirm"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"confirm"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"title?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"Shows a question dialog with ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Cancel")," buttons."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message to show.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"title?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The dialog's title. Defaults to the application name.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"A promise resolving to a boolean indicating whether ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," was clicked or not."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/dialog.ts#L175"},"dialog.ts:175")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"message"},"message"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"message"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Shows a message dialog with an ",(0,r.kt)("inlineCode",{parentName:"p"},"Ok")," button."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message to show.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"A promise indicating the success or failure of the operation."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/dialog.ts#L138"},"dialog.ts:138")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"open"},"open"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"open"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,r.kt)("p",null,"Open a file/directory selection dialog."),(0,r.kt)("p",null,"The selected paths are added to the filesystem and asset protocol allowlist scopes.\nWhen security is more important than the easy of use of this API,\nprefer writing a dedicated command instead."),(0,r.kt)("p",null,"Note that the allowlist scope change is not persisted, so the values are cleared when the application is restarted.\nYou can save it to the filesystem using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri-plugin-persisted-scope"},"tauri-plugin-persisted-scope"),"."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/doc/v1/api/js/interfaces/dialog.OpenDialogOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"OpenDialogOptions")))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,r.kt)("p",null,"A promise resolving to the selected path(s)"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/dialog.ts#L89"},"dialog.ts:89")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"save"},"save"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"save"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Open a file/directory save dialog."),(0,r.kt)("p",null,"The selected path is added to the filesystem and asset protocol allowlist scopes.\nWhen security is more important than the easy of use of this API,\nprefer writing a dedicated command instead."),(0,r.kt)("p",null,"Note that the allowlist scope change is not persisted, so the values are cleared when the application is restarted.\nYou can save it to the filesystem using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri-plugin-persisted-scope"},"tauri-plugin-persisted-scope"),"."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/doc/v1/api/js/interfaces/dialog.SaveDialogOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"SaveDialogOptions")))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"A promise resolving to the selected path."),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/dialog.ts#L117"},"dialog.ts:117")))}k.isMDXComponent=!0}}]);