"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[4195],{19294:function(e,t,o){o.r(t),o.d(t,{default:function(){return D}});var r=o(87462),a=o(67294),l=o(19470),n=o.n(l),i=o(94184),s=o.n(i),c=o(3460),g=o(39960),m=o(92949),d=o(52263),u=o(44996),p="heroBanner_qdFl",b="about_CzAF",h="buttons_AeoN",f="features_cAfv",k="featureImage_wMIZ",v="getStarted_D36F",_="heading_IFrj",E="container_bfhl",C="logoRow__Qu5",I="logo_Ukns",y=o(95999),w=o(91262),Q=o(65551),N=[[{imageUrl:"img/undraw_brownfield.svg",label:(0,y.I)({message:"Brownfield"}),description:(0,y.I)({message:"compatibility with any front-end framework means you don't have to change your stack"})},{imageUrl:"img/undraw_open_source.svg",label:(0,y.I)({message:"FLOSS"}),description:(0,y.I)({message:"relicensing is possible with Tauri"})},{imageUrl:"img/undraw_takeout_boxes.svg",label:(0,y.I)({message:"Bundle"}),description:(0,y.I)({message:"size of a Tauri App can be less than 600KB"})}],[{imageUrl:"img/undraw_security.svg",link:"/about/security",label:(0,y.I)({message:"Security"}),description:(0,y.I)({message:"is the Tauri-Team's biggest priority and drives our innovation"})},{imageUrl:"img/undraw_recipes.svg",link:"/guides/architecture/inter-process-communication",linkText:(0,y.I)({message:"Learn more"}),label:(0,y.I)({message:"Recipes"}),description:(0,y.I)({message:"Here to help you choose important features with simple configuration"})},{imageUrl:"img/undraw_cross_platform.svg",link:"/guides/building/cross-platform",linkText:(0,y.I)({message:"Compilation"}),label:(0,y.I)({message:"Cross-platform"}),description:(0,y.I)({message:"Bundle binaries for major desktop platforms (mobile & WASM coming soon)"})}]];function P(e){var t=e.imageUrl,o=e.link,r=e.label,l=e.description,n=(0,u.Z)(t),i=(0,Q.yW)();return a.createElement("div",{className:"col col--4 feature"},a.createElement("div",{className:"card"},a.createElement("div",{className:"card__body"},n&&a.createElement("div",{className:"text--center"},a.createElement("img",{className:k,src:n,alt:r})),a.createElement("h3",null,r),a.createElement("p",null,l)),o&&a.createElement("div",{className:"card__footer"},a.createElement(g.Z,{to:i.path+o},a.createElement("button",{className:"button button--secondary button--block"},a.createElement(y.Z,null,"See more"))))))}var S=function(){var e={green:"#48f9c7",blue:"#2945ff",sky:"#63daf7",red:"#ff8e13"},t=[{label:"CLI",description:(0,y.I)({message:"Generate, develop and build Tauri apps from the command line."}),icon:"ti-target",color:e.green,targetQuarter:"Q4 2019"},{label:"API",description:(0,y.I)({message:"Finalize, audit, write documentation and create examples for the smoke-tests."}),icon:"ti-crown",color:e.green,targetQuarter:"Q4 2019"},{label:"Testing & CI",description:(0,y.I)({message:"Implement CI with testing and bundle-pipeline validation."}),icon:"ti-pulse",color:e.green,targetQuarter:"Q4 2019"},{label:"Desktop Bundler",description:(0,y.I)({message:"Bundle for all major desktops from native systems."}),icon:"ti-desktop",color:e.green,targetQuarter:"Q4 2019"},{label:"Alpha Release",description:(0,y.I)({message:"Technical Release Candidate for desktop, edge cases and bugs acceptable."}),icon:"ti-flag-alt",color:e.green,targetQuarter:"Q4 2019"},{label:"Sidecar",description:(0,y.I)({message:"Integrate and instrument other binaries."}),icon:"ti-link",color:e.green,targetQuarter:"Q1 2020"},{label:"Splashscreen",description:(0,y.I)({message:"Use a splashscreen while the main content is loading."}),icon:"ti-blackboard",color:e.green,targetQuarter:"Q1 2020"},{label:"App Storage",description:(0,y.I)({message:"Use a canonical location to store userdata."}),icon:"ti-share",color:e.green,targetQuarter:"Q2 2020"},{label:"Native Notifications",description:(0,y.I)({message:"Cross-platform notifications using polyfilled WEB API."}),icon:"ti-comment-alt",color:e.green,targetQuarter:"Q2 2020"},{label:"GH Action for Building Apps",description:(0,y.I)({message:"Build your Web application as a Tauri binary for MacOS, Linux and Windows"}),icon:"ti-arrow-circle-right",color:e.green,targetQuarter:"Q3 2020"},{label:"VS Code Extension",description:(0,y.I)({message:"Commands and validate tauri.conf.json"}),icon:"ti-layout-tab",color:e.green,targetQuarter:"Q3 2020"},{label:"Core Plugin System",description:(0,y.I)({message:"Build reusable plugins to extend Tauri core."}),icon:"ti-control-eject",color:e.green,targetQuarter:"Q3 2020"},{label:"CLI Updater",description:(0,y.I)({message:"Update core dependencies automatically from the CLI."}),icon:"ti-download",color:e.green,targetQuarter:"Q3 2020"},{label:"Webview Bindings",description:(0,y.I)({message:"New pure Rust Webview bindings."}),icon:"ti-loop",color:e.green,targetQuarter:"Q1 2021"},{label:"Keyboard Shortcuts",description:(0,y.I)({message:"Hook and react to keypresses."}),icon:"ti-smallcap",color:e.green,targetQuarter:"Q1 2021"},{label:"Multi Window",description:(0,y.I)({message:"Run multiple window instances in Tauri."}),icon:"ti-layout-grid3-alt",color:e.green,targetQuarter:"Q1 2021"},{label:"Rust-based CLI",description:(0,y.I)({message:"Create Rust CLI."}),icon:"ti-cup",color:e.green,targetQuarter:"Q1 2021"},{label:"Transparent Window",description:(0,y.I)({message:"Have transparent windows."}),icon:"ti-layout-sidebar-none",color:e.green,targetQuarter:"Q1 2021"},{label:"Secure Context for Web APIs",description:(0,y.I)({message:"Setup secure context to enable access to restricted APIs."}),icon:"ti-lock",color:e.green,targetQuarter:"Q1 2021"},{label:"Self Updater",description:(0,y.I)({message:"Update Tauri Apps from within Tauri."}),icon:"ti-download",color:e.green,targetQuarter:"Q1 2021"},{label:"Window Menus",description:(0,y.I)({message:"Desktop Cross-platform Window Menus."}),icon:"ti-menu",color:e.green,targetQuarter:"Q2 2021"},{label:"App Tray",description:(0,y.I)({message:"Desktop Cross-platform Icon Tray."}),icon:"ti-panel",color:e.green,targetQuarter:"Q2 2021"},{label:"Beta Release",description:(0,y.I)({message:"Generally stable on Desktop, API locked down."}),icon:"ti-flag-alt",color:e.green,targetQuarter:"Q2 2021"},{label:"Clipboard",description:(0,y.I)({message:"Enable programmatic and keyboard access to clipboard."}),icon:"ti-clipboard",color:e.green,targetQuarter:"Q3 2021"},{label:"Security Audit",description:(0,y.I)({message:"3rd party security audit of core libraries."}),icon:"ti-magnet",color:e.green,targetQuarter:"Q1 2022"},{label:"Isolation pattern",description:(0,y.I)({message:"Mechanism to secure the IPC from malicious third-party code."}),icon:"ti-exchange-vertical",color:e.green,targetQuarter:"Q1 2022"},{label:"Scoped FileSystem",description:(0,y.I)({message:"For improved security of files interaction."}),icon:"ti-package",color:e.green,targetQuarter:"Q1 2022"},{label:"Stable Release",description:(0,y.I)({message:"Stable on On all Platforms."}),icon:"ti-flag-alt",color:e.red,targetQuarter:"April 2022"},{label:"Channel API",description:(0,y.I)({message:"Send messages through a channel."}),icon:"ti-rss-alt",color:e.blue,targetQuarter:"Planned"},{label:"One-Time Commands",description:(0,y.I)({message:"Run a command that is no longer available after first run."}),icon:"ti-upload",color:e.blue,targetQuarter:"Planned"},{label:"DENO Bindings",description:(0,y.I)({message:"Use Deno to build your App's backend."}),icon:"ti-loop",color:e.blue,targetQuarter:"Planned"},{label:"Mobile Bundler",description:(0,y.I)({message:"Bundle to all major mobile device operating systems."}),icon:"ti-mobile",color:e.blue,targetQuarter:"Planned"},{label:"Cross Compiler",description:(0,y.I)({message:"Generate bundled binaries from select operating system environments."}),icon:"ti-control-shuffle",color:e.blue,targetQuarter:"Planned"},{label:"PureOS App Store",description:(0,y.I)({message:"Verified builds for PureOS."}),icon:"ti-shine",color:e.blue,targetQuarter:"Planned"},{label:"Other Bindings",description:(0,y.I)({message:"Go, Nim, Python, C++ and other bindings are possible with the stable API."}),icon:"ti-world",color:e.blue,targetQuarter:"Planned"},{label:"Alternative Renderer",description:(0,y.I)({message:"Candidate presentation for Webview Alternatives, including GL windowing."}),icon:"ti-direction-alt",color:e.blue,targetQuarter:"Planned"},{label:"Tauri-Frida",description:(0,y.I)({message:"A decompiler and threat analyzer for Tauri Apps, using Frida."}),icon:"ti-slice",color:e.blue,targetQuarter:"Planned"},{label:"The Future",description:(0,y.I)({message:"Something missing? Got a great idea? We want you to help us make it happen."}),icon:"ti-infinite",color:e.blue,targetQuarter:(0,y.I)({message:"& BEYOND"})}].map((function(e){return a.createElement("li",{key:e.label},a.createElement(n(),{bottom:!0},a.createElement("div",{className:"icon",style:{backgroundColor:e.color}},a.createElement("span",{className:e.icon})),a.createElement("div",{className:"content"},a.createElement("div",{className:"title"},e.label),a.createElement("div",{className:"description"},e.description)),a.createElement("div",null,e.targetQuarter)))}));return a.createElement("div",{id:"roadmap",className:"container anchorify"},a.createElement("h2",{style:{textAlign:"center",position:"relative"}},a.createElement(y.Z,null,"Roadmap")),a.createElement("p",{style:{textAlign:"center",position:"relative"}},a.createElement(y.Z,null,"Notice: This roadmap is subject to change.")),a.createElement("ul",{className:"roadmap-legend"},a.createElement("li",null,a.createElement("span",{style:{backgroundColor:e.green}})," ",a.createElement(y.Z,null,"Released")),a.createElement("li",null,a.createElement("span",{style:{backgroundColor:e.sky}})," ",a.createElement(y.Z,null,"Ready")),a.createElement("li",null,a.createElement("span",{style:{backgroundColor:e.blue}})," ",a.createElement(y.Z,null,"To Do")),a.createElement("li",null,a.createElement("span",{style:{backgroundColor:e.red}})," ",a.createElement(y.Z,null,"Milestone"))),a.createElement("ul",{className:"roadmap"},t))};function M(){return a.createElement("div",null,a.createElement("h1",{className:_},"Premium Sponsors"),a.createElement("div",{className:s()("row",C)},[{name:"1Password",link:"https://1password.com",logoMonochrome:"1Password_monochrome.svg",logoColorDark:"1Password_color_dark.svg",logoColorLight:"1Password_color_light.svg"},{name:"PACKT",link:"https://www.packtpub.com",logoMonochrome:"packt_color_dark.svg",logoColorDark:"packt_color_dark.svg",logoColorLight:"packt_color_light.svg"},{name:"Cloudflare",link:"https://www.cloudflare.com",logoMonochrome:"Cloudflare_monochrome.svg",logoColorDark:"Cloudflare_color_dark.svg",logoColorLight:"Cloudflare_color_light.svg"},{name:"nlnet",link:"https://nlnet.nl",logoMonochrome:"nlnet_monochrome.svg",logoColorDark:"nlnet_color_dark.svg",logoColorLight:"nlnet_color_light.svg"}].map((function(e,t){return a.createElement(T,{brand:e,key:e.name+e.link})}))))}function A(){return a.createElement("div",null,a.createElement("h1",{className:_},"Sponsors"),a.createElement("div",{className:s()("row",C)},[{name:"DigitalOcean",link:"https://www.digitalocean.com",logoColorDark:"DigitalOcean_color.svg",logoColorLight:"DigitalOcean_color.svg",logoMonochrome:"DigitalOcean_monochrome.svg"},{name:"Netlify",link:"https://www.netlify.com",logoColorDark:"Netlify_color_dark.svg",logoColorLight:"Netlify_color_light.svg",logoMonochrome:"Netlify_monochrome.svg"},{name:"keygen",link:"https://keygen.sh",logoColorDark:"keygen_color_dark.svg",logoColorLight:"keygen_color_light.svg",logoMonochrome:"keygen_color_light.svg"},{name:"ClickUp",link:"https://clickup.com",logoColorDark:"ClickUp_color_dark.svg",logoColorLight:"ClickUp_color_light.svg",logoMonochrome:"ClickUp_monochrome.svg"},{name:"CoParse",link:"https://coparse.com",logoColorDark:"CoParse_color_dark.svg",logoColorLight:"CoParse_color_light.svg",logoMonochrome:"CoParse_color_light.svg"},{name:"Mintter",link:"https://mintter.com",logoColorDark:"Mintter_color_dark.svg",logoColorLight:"Mintter_color_light.svg",logoMonochrome:"Mintter_color_light.svg"},{name:"Leniolabs_",link:"https://www.leniolabs.com",logoColorDark:"leniolabs_color_dark.svg",logoColorLight:"leniolabs_color_light.svg",logoMonochrome:"leniolabs_monochrome.svg"},{name:"Meros",link:"https://meroscrypto.io",logoColorDark:"meros_color_dark.svg",logoColorLight:"meros_color_light.svg",logoMonochrome:"meros_monochrome.svg"},{name:"Tensor Programming",link:"https://www.youtube.com/c/tensorprogramming",logoColorDark:"tensor.png",logoColorLight:"tensor.png",logoMonochrome:"tensor.png"}].map((function(e,t){return a.createElement(T,{brand:e,key:e.name+e.link})}))))}function T(e){var t=(0,m.I)().colorMode,o="/img/index/partners/",r=(0,a.useState)("light"),l=r[0],n=r[1];return(0,a.useEffect)((function(){n(t)}),[t]),a.createElement(g.Z,{className:s()("col col--3",I),href:e.brand.link,style:"Tensor Programming"===e.brand.name?{maxWidth:"150px"}:{}},a.createElement("img",{className:I,src:"dark"===l?(0,u.Z)(o+e.brand.logoColorDark):(0,u.Z)(o+e.brand.logoColorLight),alt:e.brand.name}))}var D=function(){var e=(0,d.Z)(),t=(0,Q.yW)();return a.createElement(c.Z,{title:""+e.siteConfig.tagline,description:(0,y.I)({message:"Tauri is a framework for building tiny, blazing fast binaries for all major desktop platforms. Developers can integrate any front-end framework that compiles to HTML, JS and CSS for building their user interface."})},a.createElement("header",{className:s()("hero hero--dark",p)},a.createElement("div",{className:"container"},a.createElement(w.Z,null,(function(){return o(70886),a.createElement("Lottie-Player",{src:"tauri-splash.json",background:"transparent",speed:"1",style:{height:"40vh",margin:"auto"},autoplay:!0})})),a.createElement("p",{className:"hero__subtitle",dangerouslySetInnerHTML:{__html:(0,y.I)({message:"Build smaller, faster, and more secure <br />desktop applications with a web frontend"})}}),a.createElement("div",{className:h},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--4 col--offset-2"},a.createElement(g.Z,{className:s()("button button--outline button--secondary button--lg",b),to:t.path+"/about/intro"},a.createElement("span",null,a.createElement(y.Z,null,"Learn More")))),a.createElement("div",{className:"col col--4"},a.createElement(g.Z,{className:s()("button button--outline button--secondary button--lg",v),to:t.path+"/guides/getting-started/prerequisites"},a.createElement("span",null,a.createElement(y.Z,null,"Get started")))),a.createElement("div",{className:"col col--2"})))))),a.createElement("main",null,N&&N.length&&a.createElement("section",{className:s()("features",f)},a.createElement("div",{className:"container"},N.map((function(t,o){return a.createElement("div",{className:"row",key:o},t.map((function(l,n){return a.createElement(P,(0,r.Z)({key:n},l,{siteConfig:e.siteConfig,index:n+t.length*o}))})))})))),a.createElement("div",{className:s()("container",E)},a.createElement("section",null,a.createElement(S,{siteConfig:e.siteConfig})),a.createElement("section",{id:"sponsors"},a.createElement(M,null)),a.createElement("section",null,a.createElement(A,null)))))}}}]);