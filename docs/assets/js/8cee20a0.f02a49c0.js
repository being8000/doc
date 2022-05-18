"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[5878],{72360:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),i=n(86010),r="tabItem_OmH5";function u(e){var t=e.children,n=e.hidden,u=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,u),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),i=n(67294),r=n(72389),u=n(67392),l=n(7094),o=n(12466),s=n(86010),d="tabList_uSqn",c="tabItem_LplD";function p(e){var t,n,r,p=e.lazy,m=e.block,b=e.defaultValue,v=e.values,h=e.groupId,f=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===b?b:null!=(t=null!=b?b:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),E=N.tabGroupChoices,T=N.setTabGroupChoices,Z=(0,i.useState)(w),x=Z[0],C=Z[1],_=[],A=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var D=E[h];null!=D&&D!==x&&k.some((function(e){return e.value===D}))&&C(D)}var I=function(e){var t=e.currentTarget,n=_.indexOf(t),a=k[n].value;a!==x&&(A(t),C(a),null!=h&&T(h,a))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;n=_[a]||_[0];break;case"ArrowLeft":var i=_.indexOf(e.currentTarget)-1;n=_[i]||_[_.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,s.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},f)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return _.push(e)},onKeyDown:M,onFocus:I,onClick:I},r,{className:(0,s.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),p?(0,i.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}},34088:function(e,t,n){var a=n(67294),i=n(32258),r=n(9877),u=n(72360),l=[{label:"Yarn",value:"yarn tauri "},{label:"npm",value:"npm run tauri "},{label:"cargo",value:"cargo tauri "},{label:"Global",value:"tauri "}];t.Z=function(e){var t=e.name;return a.createElement(r.Z,{groupId:"installMode",defaultValue:"yarn tauri ",values:l},l.map((function(e){return a.createElement(u.Z,{value:e.value},a.createElement(i.Z,{className:"language-sh"},"npm"!==e.label?e.value+t:function(e,t){var n=t.indexOf("--");return-1===n?e+t:e+t.slice(0,n)+"-- "+t.slice(n)}(e.value,t)))})))}},49866:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),u=n(34088),l=["components"],o={sidebar_position:1},s="App Publishing",d={unversionedId:"guides/distribution/publishing",id:"guides/distribution/publishing",title:"App Publishing",description:"",source:"@site/docs/guides/06-distribution/publishing.md",sourceDirName:"guides/06-distribution",slug:"/guides/distribution/publishing",permalink:"/doc/v1/guides/distribution/publishing",draft:!1,editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/guides/06-distribution/publishing.md",tags:[],version:"current",lastUpdatedAt:1652462994,formattedLastUpdatedAt:"5/14/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guides",previous:{title:"Debian packages",permalink:"/doc/v1/guides/building/debian"},next:{title:"Windows",permalink:"/doc/v1/guides/distribution/windows"}},c={},p=[{value:"1. Build Your Web App",id:"1-build-your-web-app",level:3},{value:"2. Bundle your application with Tauri",id:"2-bundle-your-application-with-tauri",level:3}],m={toc:p};function b(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"app-publishing"},"App Publishing"),(0,r.kt)("h3",{id:"1-build-your-web-app"},"1. Build Your Web App"),(0,r.kt)("p",null,"Now that you are ready to package your project, you need to run your framework's or bundler's build command (assuming you're using one, of course)."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Every framework has its publishing tooling. It is outside of the scope of this document to treat them all or keep them up to date."))),(0,r.kt)("h3",{id:"2-bundle-your-application-with-tauri"},"2. Bundle your application with Tauri"),(0,r.kt)(u.Z,{name:"build",mdxType:"Command"}),(0,r.kt)("p",null,"This command embeds your web assets into a single binary with your Rust code. The binary itself will be located in ",(0,r.kt)("inlineCode",{parentName:"p"},"src-tauri/target/release/[app name]"),", and installers will be located in ",(0,r.kt)("inlineCode",{parentName:"p"},"src-tauri/target/release/bundle/"),"."),(0,r.kt)("p",null,"Like the ",(0,r.kt)("inlineCode",{parentName:"p"},"tauri dev")," command, the first time you run this, it takes some time to collect the Rust crates and build everything - but on subsequent runs, it only needs to rebuild your app's code, which is much quicker."))}b.isMDXComponent=!0}}]);