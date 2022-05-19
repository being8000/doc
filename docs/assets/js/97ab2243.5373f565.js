"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[7792],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43473:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={toc_max_heading_level:2},p="JSBridge \u65b9\u6cd5\u5217\u8868",s={unversionedId:"JSBridge/methods",id:"JSBridge/methods",title:"JSBridge \u65b9\u6cd5\u5217\u8868",description:"sysInfo \u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f",source:"@site/docs/JSBridge/methods.md",sourceDirName:"JSBridge",slug:"/JSBridge/methods",permalink:"/doc/v1/JSBridge/methods",draft:!1,editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/JSBridge/methods.md",tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"JSBridge",previous:{title:"\u524d\u7f6e\u5907\u6ce8",permalink:"/doc/v1/JSBridge/e-pon"}},u={},c=[{value:"sysInfo \u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f",id:"sysinfo-\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f",level:2},{value:"\u4f20\u5165\u53c2\u6570",id:"\u4f20\u5165\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u683c\u5f0f",id:"\u8fd4\u56de\u683c\u5f0f",level:4},{value:"statusBarHeight \u83b7\u53d6\u72b6\u6001\u680f\u9ad8\u5ea6",id:"statusbarheight-\u83b7\u53d6\u72b6\u6001\u680f\u9ad8\u5ea6",level:2},{value:"\u4f20\u5165\u53c2\u6570",id:"\u4f20\u5165\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u683c\u5f0f",id:"\u8fd4\u56de\u683c\u5f0f-1",level:4},{value:"closeH5 \u9000\u51fa\u5f53\u524d H5",id:"closeh5-\u9000\u51fa\u5f53\u524d-h5",level:2},{value:"\u4f20\u5165\u53c2\u6570",id:"\u4f20\u5165\u53c2\u6570-2",level:4},{value:"\u8fd4\u56de\u683c\u5f0f",id:"\u8fd4\u56de\u683c\u5f0f-2",level:4},{value:"logout \u9000\u51fa\u767b\u5f55",id:"logout-\u9000\u51fa\u767b\u5f55",level:2},{value:"\u4f20\u5165\u53c2\u6570",id:"\u4f20\u5165\u53c2\u6570-3",level:4},{value:"\u8fd4\u56de\u683c\u5f0f",id:"\u8fd4\u56de\u683c\u5f0f-3",level:4},{value:"toClient \u8df3\u8f6c\u5ba2\u6237\u7aef\u9875\u9762",id:"toclient-\u8df3\u8f6c\u5ba2\u6237\u7aef\u9875\u9762",level:2},{value:"\u4f20\u5165\u53c2\u6570",id:"\u4f20\u5165\u53c2\u6570-4",level:4},{value:"\u8fd4\u56de\u683c\u5f0f",id:"\u8fd4\u56de\u683c\u5f0f-4",level:4},{value:"webview \u8df3\u8f6c webview",id:"webview-\u8df3\u8f6c-webview",level:2},{value:"\u4f20\u5165\u53c2\u6570",id:"\u4f20\u5165\u53c2\u6570-5",level:4},{value:"\u8fd4\u56de\u683c\u5f0f",id:"\u8fd4\u56de\u683c\u5f0f-5",level:4},{value:"toMini \u8df3\u8f6c mpaas \u5c0f\u7a0b\u5e8f",id:"tomini-\u8df3\u8f6c-mpaas-\u5c0f\u7a0b\u5e8f",level:2},{value:"\u4f20\u5165\u53c2\u6570",id:"\u4f20\u5165\u53c2\u6570-6",level:4},{value:"\u8fd4\u56de\u683c\u5f0f",id:"\u8fd4\u56de\u683c\u5f0f-6",level:4},{value:"screenshot \u5c4f\u5e55\u622a\u56fe",id:"screenshot-\u5c4f\u5e55\u622a\u56fe",level:2},{value:"\u4f20\u5165\u53c2\u6570",id:"\u4f20\u5165\u53c2\u6570-7",level:4},{value:"\u8fd4\u56de\u683c\u5f0f",id:"\u8fd4\u56de\u683c\u5f0f-7",level:4}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jsbridge-\u65b9\u6cd5\u5217\u8868"},"JSBridge \u65b9\u6cd5\u5217\u8868"),(0,l.kt)("h2",{id:"sysinfo-\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f"},"sysInfo \u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u540d")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"sysInfo")),(0,l.kt)("h4",{id:"\u4f20\u5165\u53c2\u6570"},"\u4f20\u5165\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n}\n")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u683c\u5f0f"},"\u8fd4\u56de\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  {\n    "env": "prod", // \u5ba2\u6237\u7aef\u73af\u5883\n    "token": "82dd66bb458e4d50bf52c4bf58xxxxx", // token\n    "userInfo": {\n        "avatar": "null", // \u7528\u6237\u5934\u50cf\n        "bill": false, // bill\n        "comm": false,\n        "countryCode": "63", // \u624b\u673a\u533a\u53f7\n        "createTime": "2022-05-11 11:06:46", // \u6ce8\u518c\u65f6\u95f4\n        "frozenStatus": 1, //\n        "id": "101851", // \u7528\u6237id wtUserId\n        "isOpen": 3,\n        "kycActual": 0,\n        "kycActualType": 0,\n        "lastCount": 0,\n        "nickname": "906\\*\\*\\*\\*084", // \u6635\u79f0\n        "parentId": 0,\n        "phone": "9063009084", // \u624b\u673a\u53f7\n        "realStatus": 0,\n        "status": 1,\n        "voice": false\n    }\n}\n')),(0,l.kt)("h2",{id:"statusbarheight-\u83b7\u53d6\u72b6\u6001\u680f\u9ad8\u5ea6"},"statusBarHeight \u83b7\u53d6\u72b6\u6001\u680f\u9ad8\u5ea6"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u540d")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"statusBarHeight")),(0,l.kt)("h4",{id:"\u4f20\u5165\u53c2\u6570-1"},"\u4f20\u5165\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n}\n")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u683c\u5f0f-1"},"\u8fd4\u56de\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  height: 0 // \u7cfb\u7edf\u72b6\u6001\u680f\u9ad8\u5ea6\n}\n")),(0,l.kt)("h2",{id:"closeh5-\u9000\u51fa\u5f53\u524d-h5"},"closeH5 \u9000\u51fa\u5f53\u524d H5"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u540d")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"closeH5")),(0,l.kt)("h4",{id:"\u4f20\u5165\u53c2\u6570-2"},"\u4f20\u5165\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n}\n")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u683c\u5f0f-2"},"\u8fd4\u56de\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n}\n")),(0,l.kt)("h2",{id:"logout-\u9000\u51fa\u767b\u5f55"},"logout \u9000\u51fa\u767b\u5f55"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u540d")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"logout")),(0,l.kt)("h4",{id:"\u4f20\u5165\u53c2\u6570-3"},"\u4f20\u5165\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n}\n")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u683c\u5f0f-3"},"\u8fd4\u56de\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n}\n")),(0,l.kt)("h2",{id:"toclient-\u8df3\u8f6c\u5ba2\u6237\u7aef\u9875\u9762"},"toClient \u8df3\u8f6c\u5ba2\u6237\u7aef\u9875\u9762"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u540d")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"toClient")),(0,l.kt)("h4",{id:"\u4f20\u5165\u53c2\u6570-4"},"\u4f20\u5165\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  url: 'xxx' // \u5ba2\u6237\u7aef\u9875\u9762\u8def\u5f84\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"url \u503c\u5982\u4e0b",(0,l.kt)("br",{parentName:"li"}),"\u2022 ",(0,l.kt)("strong",{parentName:"li"},"\u8df3\u8f6c\u7528\u6237\u5206\u4eab\u4e8c\u7ef4\u7801")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"recommendQr"),(0,l.kt)("br",{parentName:"li"}),"\u2022 ",(0,l.kt)("strong",{parentName:"li"},"\u8df3\u8f6c\u7f51\u70b9")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"serviceCenter"),(0,l.kt)("br",{parentName:"li"}),"\u2022 ",(0,l.kt)("strong",{parentName:"li"},"\u8df3\u8f6c\u5fd8\u8bb0\u5bc6\u7801")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"forgotPass"),(0,l.kt)("br",{parentName:"li"}),"\u2022 ",(0,l.kt)("strong",{parentName:"li"},"\u8df3\u8f6c\u5ba2\u670d\u9875\u9762")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"customerService"),(0,l.kt)("br",{parentName:"li"}),"\u2022 ",(0,l.kt)("strong",{parentName:"li"},"\u8df3\u8f6c ekyc \u8ba4\u8bc1\u7b49\u7ea7")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"ekyc"))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u683c\u5f0f-4"},"\u8fd4\u56de\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n}\n")),(0,l.kt)("h2",{id:"webview-\u8df3\u8f6c-webview"},"webview \u8df3\u8f6c webview"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u540d")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"webview")),(0,l.kt)("h4",{id:"\u4f20\u5165\u53c2\u6570-5"},"\u4f20\u5165\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  {\n    url: '' // webview url\n    showNavBar: '0',  // 0/1   0\u9690\u85cf  1\u663e\u793a\n    title: ' ' , // \u6807\u9898\n    navbarColor : '' , //  16\u8fdb\u5236\u989c\u8272 0x\u2026\n    navBarStyle: ' ',  // 0/1   0 \u6587\u5b57/\u7bad\u5934\u767d\u8272   1 \u6587\u5b57/\u7bad\u5934\u9ed1\u8272\n    backBtnAction: '',  //  0/1   0\u8df3\u4e0a\u4e00\u7ea7H5\u9875\u9762  1\u79fb\u9664webview\u63a7\u4ef6\n\n    //\u6682\u65f6\u7528\u4e0d\u5230\n    showRightBtn:'',        // 0/1   0\u9690\u85cf  1\u663e\u793a\n    rightBtnContentType:'',  // 0  \u6807\u9898  1\u56fe\u7247\n    rightBtnTitle: ' ' ,     // \u6807\u9898\n    rightBtnImageUrl: '' ,   // \u56fe\u7247\u5730\u5740\n    rightBtnAction: ' ' ,    // \u5f85\u5b9a\n  }\n")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u683c\u5f0f-5"},"\u8fd4\u56de\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n}\n")),(0,l.kt)("h2",{id:"tomini-\u8df3\u8f6c-mpaas-\u5c0f\u7a0b\u5e8f"},"toMini \u8df3\u8f6c mpaas \u5c0f\u7a0b\u5e8f"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u540d")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"toMini")),(0,l.kt)("h4",{id:"\u4f20\u5165\u53c2\u6570-6"},"\u4f20\u5165\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  url: '' // webview url\n}\n")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u683c\u5f0f-6"},"\u8fd4\u56de\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  {\n    page: 'pages/da5/xxx', // \u5c0f\u7a0b\u5e8f\u9875\u9762\u8def\u5f84\n    id: '888888888888888',  // \u5c0f\u7a0b\u5e8f ID\n    query: 'a=1&b=2...' // \u9875\u9762\u8df3\u8f6c\u4f20\u53c2\n  }\n")),(0,l.kt)("h2",{id:"screenshot-\u5c4f\u5e55\u622a\u56fe"},"screenshot \u5c4f\u5e55\u622a\u56fe"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u540d")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"screenshot")),(0,l.kt)("h4",{id:"\u4f20\u5165\u53c2\u6570-7"},"\u4f20\u5165\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n}\n")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u683c\u5f0f-7"},"\u8fd4\u56de\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n}\n")))}m.isMDXComponent=!0}}]);