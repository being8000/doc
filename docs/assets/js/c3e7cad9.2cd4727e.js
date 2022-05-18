"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[7952],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(r),d=i,m=l["".concat(p,".").concat(d)]||l[d]||f[d]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},65006:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={},p=void 0,c={unversionedId:"api/js/interfaces/fs.FsDirOptions",id:"api/js/interfaces/fs.FsDirOptions",title:"fs.FsDirOptions",description:"@tauri-apps/api / fs / FsDirOptions",source:"@site/docs/api/js/interfaces/fs.FsDirOptions.md",sourceDirName:"api/js/interfaces",slug:"/api/js/interfaces/fs.FsDirOptions",permalink:"/doc/v1/api/js/interfaces/fs.FsDirOptions",draft:!1,editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/api/js/interfaces/fs.FsDirOptions.md",tags:[],version:"current",lastUpdatedAt:1652246483,formattedLastUpdatedAt:"5/11/2022",frontMatter:{}},u={},f=[{value:"Properties",id:"properties",level:2},{value:"dir",id:"dir",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"recursive",id:"recursive",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:f};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/doc/v1/api/js/"},"@tauri-apps/api")," / ",(0,a.kt)("a",{parentName:"p",href:"/doc/v1/api/js/modules/fs"},"fs")," / FsDirOptions"),(0,a.kt)("h1",{id:"interface-fsdiroptions"},"Interface: FsDirOptions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/doc/v1/api/js/modules/fs"},"fs"),".FsDirOptions"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"dir"},"dir"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"dir"),": ",(0,a.kt)("a",{parentName:"p",href:"/doc/v1/api/js/enums/fs.BaseDirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseDirectory"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/fs.ts#L102"},"fs.ts:102")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"recursive"},"recursive"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"recursive"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/c8667f9/tooling/api/src/fs.ts#L103"},"fs.ts:103")))}d.isMDXComponent=!0}}]);