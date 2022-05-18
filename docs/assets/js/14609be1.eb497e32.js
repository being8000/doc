"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[7307],{73554:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return k},metadata:function(){return y},toc:function(){return T}});var r=a(87462),u=a(63366),n=a(67294),s=a(3905),l=a(9877),i=a(72360),o=a(2615),p=a(91262),c=a(94184),m=a.n(c),d="summary_iyAs";function h(e){var t=(0,n.useState)(),a=t[0],r=t[1];return(0,n.useEffect)((function(){fetch(e.url).then((function(e){return e.text()})).then((function(e){e=e.split("## ").filter((function(e){return!e.includes("# Changelog")})).map((function(e){var t=e.split("\n"),a=t[0],r=t.slice(1);return r=r.join("\n"),{number:a.replace("\\[","").replace("]",""),notes:r}})).filter((function(e){return!e.number.includes("Not Published")})),r(e)}))}),[]),n.createElement(p.Z,{fallback:n.createElement("div",null,"Release notes not supported")},(function(){return a?n.createElement("div",null,a.map((function(e,t){return n.createElement("details",{open:0==t,key:t},n.createElement("summary",{className:m()(d)},n.createElement("h3",null,e.number)),n.createElement(o.D,null,e.notes))}))):n.createElement("h2",null,"Loading release notes...")}))}var b=["components"],k={},f="Release Notes",y={type:"mdx",permalink:"/doc/release-notes",source:"@site/src/pages/release-notes.md",title:"Release Notes",frontMatter:{}},T=[],g={toc:T};function v(e){var t=e.components,a=(0,u.Z)(e,b);return(0,s.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"release-notes"},"Release Notes"),(0,s.kt)(l.Z,{lazy:!0,mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"core",label:"Core",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/tauri-apps/tauri/releases"},"View releases on GitHub")),(0,s.kt)(h,{url:"https://raw.githubusercontent.com/tauri-apps/tauri/dev/core/tauri/CHANGELOG.md",mdxType:"ReleaseNotes"})),(0,s.kt)(i.Z,{value:"api",label:"API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/tauri-apps/tauri/releases"},"View releases on GitHub")),(0,s.kt)(h,{url:"https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/api/CHANGELOG.md",mdxType:"ReleaseNotes"})),(0,s.kt)(i.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/tauri-apps/tauri/releases"},"View releases on GitHub")),(0,s.kt)(h,{url:"https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/cli/CHANGELOG.md",mdxType:"ReleaseNotes"})),(0,s.kt)(i.Z,{value:"bundler",label:"Bundler",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/tauri-apps/tauri/releases"},"View releases on GitHub")),(0,s.kt)(h,{url:"https://raw.githubusercontent.com/tauri-apps/tauri/dev/tooling/bundler/CHANGELOG.md",mdxType:"ReleaseNotes"})),(0,s.kt)(i.Z,{value:"tao",label:"Tao",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/tauri-apps/tao/releases"},"View releases on GitHub")),(0,s.kt)(h,{url:"https://raw.githubusercontent.com/tauri-apps/tao/dev/CHANGELOG.md",mdxType:"ReleaseNotes"})),(0,s.kt)(i.Z,{value:"wry",label:"Wry",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/tauri-apps/wry/releases"},"View releases on GitHub")),(0,s.kt)(h,{url:"https://raw.githubusercontent.com/tauri-apps/wry/dev/CHANGELOG.md",mdxType:"ReleaseNotes"})),(0,s.kt)(i.Z,{value:"create-tauri-app",label:"create-tauri-app",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{href:"https://github.com/tauri-apps/create-tauri-app/releases"},"View releases on GitHub")),(0,s.kt)(h,{url:"https://raw.githubusercontent.com/tauri-apps/create-tauri-app/dev/CHANGELOG.md",mdxType:"ReleaseNotes"}))))}v.isMDXComponent=!0}}]);