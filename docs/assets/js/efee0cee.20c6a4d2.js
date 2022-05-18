"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[2436],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72360:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(86010),i="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),i=n(72389),o=n(67392),s=n(7094),l=n(12466),p=n(86010),u="tabList_uSqn",c="tabItem_LplD";function d(e){var t,n,i,d=e.lazy,m=e.block,h=e.defaultValue,f=e.values,v=e.groupId,b=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(w,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=g[0])?void 0:i.props.value;if(null!==y&&!w.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,s.U)(),N=x.tabGroupChoices,T=x.setTabGroupChoices,j=(0,a.useState)(y),C=j[0],I=j[1],O=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var S=N[v];null!=S&&S!==C&&w.some((function(e){return e.value===S}))&&I(S)}var D=function(e){var t=e.currentTarget,n=O.indexOf(t),r=w[n].value;r!==C&&(E(t),I(r),null!=v&&T(v,r))},W=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,p.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":m},b)},w.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:W,onFocus:D,onClick:D},i,{className:(0,p.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},71898:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(9877),s=n(72360),l=["components"],p={},u="WebdriverIO",c={unversionedId:"guides/testing/webdriver/example/webdriverio",id:"guides/testing/webdriver/example/webdriverio",title:"WebdriverIO",description:"",source:"@site/docs/guides/04-testing/webdriver/example/webdriverio.md",sourceDirName:"guides/04-testing/webdriver/example",slug:"/guides/testing/webdriver/example/webdriverio",permalink:"/doc/v1/guides/testing/webdriver/example/webdriverio",draft:!1,editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/guides/04-testing/webdriver/example/webdriverio.md",tags:[],version:"current",lastUpdatedAt:1652462994,formattedLastUpdatedAt:"5/14/2022",frontMatter:{},sidebar:"guides",previous:{title:"Setup Example",permalink:"/doc/v1/guides/testing/webdriver/example/setup"},next:{title:"Continuous Integration",permalink:"/doc/v1/guides/testing/webdriver/ci"}},d={},m=[{value:"Create a Directory for the Tests",id:"create-a-directory-for-the-tests",level:2},{value:"Initializing a WebdriverIO Project",id:"initializing-a-webdriverio-project",level:2},{value:"Config",id:"config",level:2},{value:"Spec",id:"spec",level:2},{value:"Running the Test Suite",id:"running-the-test-suite",level:2}],h={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"webdriverio"},"WebdriverIO"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Example Application")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," guide expects you to have already gone through the ",(0,i.kt)("a",{parentName:"p",href:"setup"},"example Application setup")," to follow\nstep-by-step. The general information may still be helpful otherwise."))),(0,i.kt)("p",null,"This WebDriver testing example will use ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO"),", and its testing suite. It is expected to have Node.js already\ninstalled, along with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," although the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chippers/hello_tauri"},"finished example project")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),"."),(0,i.kt)("h2",{id:"create-a-directory-for-the-tests"},"Create a Directory for the Tests"),(0,i.kt)("p",null,"Let's create a space to write these tests in our project. We will be using a nested directory for\nthis example project as we will later also go over other frameworks, but typically you only need to use one. Create\nthe directory we will use with ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir -p webdriver/webdriverio"),". The rest of this guide assumes you are inside the\n",(0,i.kt)("inlineCode",{parentName:"p"},"webdriver/webdriverio")," directory."),(0,i.kt)("h2",{id:"initializing-a-webdriverio-project"},"Initializing a WebdriverIO Project"),(0,i.kt)("p",null,"We will be using a pre-existing ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," to bootstrap this test suite because we have already chosen specific\n",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," config options and want to showcase a simple working solution. The bottom of this section has a collapsed\nguide on setting it up from scratch."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "webdriverio",\n  "version": "1.0.0",\n  "private": true,\n  "scripts": {\n    "test": "wdio run wdio.conf.js"\n  },\n  "dependencies": {\n    "@wdio/cli": "^7.9.1"\n  },\n  "devDependencies": {\n    "@wdio/local-runner": "^7.9.1",\n    "@wdio/mocha-framework": "^7.9.1",\n    "@wdio/spec-reporter": "^7.9.0"\n  }\n}\n')),(0,i.kt)("p",null,"We have a script that runs a ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," config as a test suite exposed as the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," command. We also have various\ndependencies added by the ",(0,i.kt)("inlineCode",{parentName:"p"},"@wdio/cli")," command when we first set it up. In short, these dependencies are for\nthe most simple setup using a local WebDriver runner, ",(0,i.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," as the test framework, and a simple Spec Reporter."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click me if you want to see how to set a project up from scratch"),(0,i.kt)("p",null,"The CLI is interactive, and you may choose the tools to work with yourself. Note that you will likely diverge from\nthe rest of the guide, and you need to set up the differences yourself."),(0,i.kt)("p",null,"Let's add the ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," CLI to this npm project."),(0,i.kt)(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @wdio/cli\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @wdio/cli\n")))),(0,i.kt)("p",null,"To then run the interactive config command to set up a ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," test suite, you can then run:"),(0,i.kt)(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx wdio config\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn wdio config\n"))))),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("p",null,"You may have noticed that the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," script in our ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," mentions a file ",(0,i.kt)("inlineCode",{parentName:"p"},"wdio.conf.js"),". That's the ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO"),"\nconfig file which controls most aspects of our testing suite."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wdio.conf.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const os = require("os");\nconst path = require("path");\nconst { spawn, spawnSync } = require("child_process");\n\n// keep track of the `tauri-driver` child process\nlet tauriDriver;\n\nexports.config = {\n  specs: ["./test/specs/**/*.js"],\n  maxInstances: 1,\n  capabilities: [\n    {\n      maxInstances: 1,\n      "tauri:options": {\n        application: "../../target/release/hello-tauri-webdriver",\n      },\n    },\n  ],\n  reporters: ["spec"],\n  framework: "mocha",\n  mochaOpts: {\n    ui: "bdd",\n    timeout: 60000,\n  },\n\n  // ensure the rust project is built since we expect this binary to exist for the webdriver sessions\n  onPrepare: () => spawnSync("cargo", ["build", "--release"]),\n\n  // ensure we are running `tauri-driver` before the session starts so that we can proxy the webdriver requests\n  beforeSession: () =>\n    (tauriDriver = spawn(\n      path.resolve(os.homedir(), ".cargo", "bin", "tauri-driver"),\n      [],\n      { stdio: [null, process.stdout, process.stderr] }\n    )),\n\n  // clean up the `tauri-driver` process we spawned at the start of the session\n  afterSession: () => tauriDriver.kill(),\n};\n')),(0,i.kt)("p",null,"If you are interested in the properties on the ",(0,i.kt)("inlineCode",{parentName:"p"},"exports.config")," object, I ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/configurationfile"},"suggest reading the documentation"),".\nFor non-WDIO specific items, there are comments explaining why we are running commands in ",(0,i.kt)("inlineCode",{parentName:"p"},"onPrepare"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeSession"),",\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"afterSession"),". We also have our specs set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"./test/specs/**/*.js"'),", so let's create a spec now."),(0,i.kt)("h2",{id:"spec"},"Spec"),(0,i.kt)("p",null,"A spec contains the code that is testing your actual application. The test runner will load these specs and automatically\nrun them as it sees fit. Let's create our spec now in the directory we specified."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"test/specs/example.e2e.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// calculates the luma from a hex color `#abcdef`\nfunction luma(hex) {\n  if (hex.startsWith("#")) {\n    hex = hex.substring(1);\n  }\n\n  const rgb = parseInt(hex, 16);\n  const r = (rgb >> 16) & 0xff;\n  const g = (rgb >> 8) & 0xff;\n  const b = (rgb >> 0) & 0xff;\n  return  0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\ndescribe("Hello Tauri", () => {\n  it("should be cordial", async () => {\n    const header = await $("body > h1");\n    const text = await header.getText();\n    expect(text).toMatch(/^[hH]ello/);\n  });\n\n  it("should be excited", async () => {\n    const header = await $("body > h1");\n    const text = await header.getText();\n    expect(text).toMatch(/!$/);\n  });\n\n  it("should be easy on the eyes", async () => {\n    const body = await $("body");\n    const backgroundColor = await body.getCSSProperty("background-color");\n    expect(luma(backgroundColor.parsed.hex)).toBeLessThan(100);\n  });\n});\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"luma")," function on top is just a helper function for one of our tests and is not related to the actual testing of\nthe application. If you are familiar with other testing frameworks, you may notice similar functions being exposed that\nare used, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"describe"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"it"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"expect"),". The other APIs, such as items like ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," and its exposed methods, are\ncovered by the ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/api"},"WebdriverIO API docs"),"."),(0,i.kt)("h2",{id:"running-the-test-suite"},"Running the Test Suite"),(0,i.kt)("p",null,"Now that we are all set up with config and a spec let's run it!"),(0,i.kt)(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm test\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn test\n")))),(0,i.kt)("p",null,"We should see output the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'\u279c  webdriverio git:(main) \u2717 yarn test\nyarn run v1.22.11\n$ wdio run wdio.conf.js\n\nExecution of 1 workers started at 2021-08-17T08:06:10.279Z\n\n[0-0] RUNNING in undefined - /test/specs/example.e2e.js\n[0-0] PASSED in undefined - /test/specs/example.e2e.js\n\n "spec" Reporter:\n------------------------------------------------------------------\n[wry 0.12.1 linux #0-0] Running: wry (v0.12.1) on linux\n[wry 0.12.1 linux #0-0] Session ID: 81e0107b-4d38-4eed-9b10-ee80ca47bb83\n[wry 0.12.1 linux #0-0]\n[wry 0.12.1 linux #0-0] \xbb /test/specs/example.e2e.js\n[wry 0.12.1 linux #0-0] Hello Tauri\n[wry 0.12.1 linux #0-0]    \u2713 should be cordial\n[wry 0.12.1 linux #0-0]    \u2713 should be excited\n[wry 0.12.1 linux #0-0]    \u2713 should be easy on the eyes\n[wry 0.12.1 linux #0-0]\n[wry 0.12.1 linux #0-0] 3 passing (244ms)\n\n\nSpec Files:  1 passed, 1 total (100% completed) in 00:00:01\n\nDone in 1.98s.\n')),(0,i.kt)("p",null,"We see the Spec Reporter tell us that all 3 tests from the ",(0,i.kt)("inlineCode",{parentName:"p"},"test/specs/example.e2e.js")," file, along with the final report\n",(0,i.kt)("inlineCode",{parentName:"p"},"Spec Files:\t 1 passed, 1 total (100% completed) in 00:00:01"),"."),(0,i.kt)("p",null,"Using the ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," test suite, we just easily enabled e2e testing for our Tauri application from just a few lines\nof configuration and a single command to run it! Even better, we didn't have to modify the application at all."))}f.isMDXComponent=!0}}]);