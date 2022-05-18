"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[117],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return n?i.createElement(g,o(o({ref:t},m),{},{components:n})):i.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96663:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={sidebar_label:"macOS",sidebar_position:6},p="macOS Application Distribution",s={unversionedId:"guides/distribution/macos",id:"guides/distribution/macos",title:"macOS Application Distribution",description:"Tauri applications for macOS are distributed either with an [Application Bundle] (.app files) or an Apple Disk Image (.dmg files). The Tauri CLI automatically bundles your application code in these formats, providing options to codesign and notarize your application.",source:"@site/docs/guides/06-distribution/macos.md",sourceDirName:"guides/06-distribution",slug:"/guides/distribution/macos",permalink:"/doc/v1/guides/distribution/macos",draft:!1,editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/guides/06-distribution/macos.md",tags:[],version:"current",lastUpdatedAt:1652522612,formattedLastUpdatedAt:"5/14/2022",sidebarPosition:6,frontMatter:{sidebar_label:"macOS",sidebar_position:6},sidebar:"guides",previous:{title:"Linux Code Signing",permalink:"/doc/v1/guides/distribution/sign-linux"},next:{title:"macOS Code Signing",permalink:"/doc/v1/guides/distribution/sign-macos"}},m={},u=[{value:"Minimum system version",id:"minimum-system-version",level:2},{value:"Binary targets",id:"binary-targets",level:2},{value:"Code signing and notarization",id:"code-signing-and-notarization",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"macos-application-distribution"},"macOS Application Distribution"),(0,r.kt)("p",null,"Tauri applications for macOS are distributed either with an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/BundleTypes/BundleTypes.html"},"Application Bundle")," (",(0,r.kt)("inlineCode",{parentName:"p"},".app")," files) or an Apple Disk Image (",(0,r.kt)("inlineCode",{parentName:"p"},".dmg")," files). The Tauri CLI automatically bundles your application code in these formats, providing options to codesign and notarize your application."),(0,r.kt)("h2",{id:"minimum-system-version"},"Minimum system version"),(0,r.kt)("p",null,"The minimum version of the operating system required for a Tauri app to run in macOS is ",(0,r.kt)("inlineCode",{parentName:"p"},"10.13"),". You can change that value on the ",(0,r.kt)("a",{parentName:"p",href:"../../api/config#tauri.bundle.macOS.minimumSystemVersion"},(0,r.kt)("inlineCode",{parentName:"a"},"tauri.bundle.macOS.minimumSystemVersion"))," property. The value is set to the Info.plist key ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/bundleresources/information_property_list/lsminimumsystemversion"},"LSMinimumSystemVersion")," and the MACOSX_DEPLOYMENT_TARGET environment variable."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"macOS High Sierra (10.13) no longer receives security updates from Apple. You should target macOS Catalina (10.15) if possible."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.print")," API requires macOS version ",(0,r.kt)("inlineCode",{parentName:"p"},"11.0+"),"."))),(0,r.kt)("h2",{id:"binary-targets"},"Binary targets"),(0,r.kt)("p",null,"You can compile your application targeting Apple Silicon, Intel-based Mac computers, or universal macOS binaries. By default, the CLI builds a binary targetting your machine's architecture. If you are using an Apple Silicon macOS, you can compile Intel and universal binaries using the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," option:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tauri build --target aarch64-apple-darwin"),": targets Apple Silicon for your application;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tauri build --target x86_64-apple-darwin"),": targets Intel-based Mac computers;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tauri build --target universal-apple-darwin"),": targets ",(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary"},"universal macOS binaries"),".")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Apple Silicon binaries only run on Mac computers with Apple Silicon."),(0,r.kt)("li",{parentName:"ul"},"Intel-based binaries only run on Intel-based Mac computers and Apple Silicon computers under the Rosetta translation."),(0,r.kt)("li",{parentName:"ul"},"Universal macOS binaries run on both architectures.\n:::")),(0,r.kt)("h2",{parentName:"div",id:"application-bundle-customization"},"Application bundle customization"),(0,r.kt)("p",{parentName:"div"},"The Tauri configuration file provides the following options to customize your application bundle:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bundle name"),": ",(0,r.kt)("a",{parentName:"li",href:"../../api/config/#package.productName"},(0,r.kt)("inlineCode",{parentName:"a"},"package.productName")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bundle version"),": ",(0,r.kt)("a",{parentName:"li",href:"../../api/config/#package.version"},(0,r.kt)("inlineCode",{parentName:"a"},"package.version")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Application category"),": ",(0,r.kt)("a",{parentName:"li",href:"../../api/config/#tauri.bundle.category"},(0,r.kt)("inlineCode",{parentName:"a"},"tauri.bundle.category")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Copyright"),": ",(0,r.kt)("a",{parentName:"li",href:"../../api/config/#tauri.bundle.copyright"},(0,r.kt)("inlineCode",{parentName:"a"},"tauri.bundle.copyright")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bundle icon"),": first ",(0,r.kt)("inlineCode",{parentName:"li"},".icns")," file listed on the ",(0,r.kt)("a",{parentName:"li",href:"../../api/config/#tauri.bundle.icon"},(0,r.kt)("inlineCode",{parentName:"a"},"tauri.bundle.icon"))," array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Minimum system version"),": ",(0,r.kt)("a",{parentName:"li",href:"../../api/config#tauri.bundle.macOS.minimumSystemVersion"},(0,r.kt)("inlineCode",{parentName:"a"},"tauri.bundle.macOS.minimumSystemVersion")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DMG license file"),": ",(0,r.kt)("a",{parentName:"li",href:"../../api/config/#tauri.bundle.macOS.license"},(0,r.kt)("inlineCode",{parentName:"a"},"tauri.bundle.macOS.license")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://developer.apple.com/documentation/bundleresources/entitlements"},"Entitlements.plist file")),": ",(0,r.kt)("a",{parentName:"li",href:"../../api/config/#tauri.bundle.macOS.entitlements"},(0,r.kt)("inlineCode",{parentName:"a"},"tauri.bundle.macOS.entitlements")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Exception domain"),": an insecure domain that your application can access such as a ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost")," or a remote ",(0,r.kt)("inlineCode",{parentName:"li"},"http")," domain. It is a convenience configuration around ",(0,r.kt)("inlineCode",{parentName:"li"},"NSAppTransportSecurity > NSExceptionDomains")," setting ",(0,r.kt)("inlineCode",{parentName:"li"},"NSExceptionAllowsInsecureHTTPLoads")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"NSIncludesSubdomains")," to true. See ",(0,r.kt)("a",{parentName:"li",href:"../../api/config/#tauri.bundle.macOS.exceptionDomain"},(0,r.kt)("inlineCode",{parentName:"a"},"tauri.bundle.macOS.exceptionDomain")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bootstrapper"),": Instead of launching the app directly, you can configure the bundled app to run a script that tries to expose the environment variables to the app; without that, you'll have trouble using system programs because the ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," environment variable isn't correct. Enable it with ",(0,r.kt)("a",{parentName:"li",href:"../../api/config#tauri.bundle.deb.useBootstrapper"},(0,r.kt)("inlineCode",{parentName:"a"},"tauri.bundle.macOS.useBootstrapper")),".")))),(0,r.kt)("p",null,"These options generate the application bundle ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Introduction/Introduction.html"},"Info.plist file"),". You can extend the generated file with your own ",(0,r.kt)("inlineCode",{parentName:"p"},"Info.plist")," file stored on the Tauri folder (",(0,r.kt)("inlineCode",{parentName:"p"},"src-tauri")," by default). The CLI merges both ",(0,r.kt)("inlineCode",{parentName:"p"},".plist")," files on production, and the core layer embeds it on the binary on development.\n:::"),(0,r.kt)("h2",{id:"code-signing-and-notarization"},"Code signing and notarization"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/doc/v1/guides/distribution/sign-macos"},"Code signing guide"),"."))}d.isMDXComponent=!0}}]);