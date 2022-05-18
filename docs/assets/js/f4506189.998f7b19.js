"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[4097],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(r),f=a,m=c["".concat(u,".").concat(f)]||c[f]||l[f]||i;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var d=2;d<i;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},43827:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return l}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),p=["components"],o={},u=void 0,d={unversionedId:"api/js/interfaces/updater.UpdateResult",id:"api/js/interfaces/updater.UpdateResult",title:"updater.UpdateResult",description:"@tauri-apps/api / updater / UpdateResult",source:"@site/docs/api/js/interfaces/updater.UpdateResult.md",sourceDirName:"api/js/interfaces",slug:"/api/js/interfaces/updater.UpdateResult",permalink:"/doc/v1/api/js/interfaces/updater.UpdateResult",draft:!1,editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/api/js/interfaces/updater.UpdateResult.md",tags:[],version:"current",lastUpdatedAt:1652246483,formattedLastUpdatedAt:"5/11/2022",frontMatter:{}},s={},l=[{value:"Properties",id:"properties",level:2},{value:"manifest",id:"manifest",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"shouldUpdate",id:"shouldupdate",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/doc/v1/api/js/"},"@tauri-apps/api")," / ",(0,i.kt)("a",{parentName:"p",href:"/doc/v1/api/js/modules/updater"},"updater")," / UpdateResult"),(0,i.kt)("h1",{id:"interface-updateresult"},"Interface: UpdateResult"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/doc/v1/api/js/modules/updater"},"updater"),".UpdateResult"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"manifest"},"manifest"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"manifest"),": ",(0,i.kt)("a",{parentName:"p",href:"/doc/v1/api/js/interfaces/updater.UpdateManifest"},(0,i.kt)("inlineCode",{parentName:"a"},"UpdateManifest"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/updater.ts#L28"},"updater.ts:28")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"shouldupdate"},"shouldUpdate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"shouldUpdate"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/updater.ts#L29"},"updater.ts:29")))}f.isMDXComponent=!0}}]);