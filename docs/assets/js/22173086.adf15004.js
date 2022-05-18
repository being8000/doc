"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[3976],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),y=r,c=d["".concat(u,".").concat(y)]||d[y]||m[y]||i;return n?a.createElement(c,s(s({ref:t},p),{},{components:n})):a.createElement(c,s({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11604:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={},u="System Tray",l={unversionedId:"guides/features/system-tray",id:"guides/features/system-tray",title:"System Tray",description:"Native application system tray.",source:"@site/docs/guides/07-features/system-tray.md",sourceDirName:"guides/07-features",slug:"/guides/features/system-tray",permalink:"/doc/v1/guides/features/system-tray",draft:!1,editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/guides/07-features/system-tray.md",tags:[],version:"current",lastUpdatedAt:1652462994,formattedLastUpdatedAt:"5/14/2022",frontMatter:{},sidebar:"guides",previous:{title:"Splashscreen",permalink:"/doc/v1/guides/features/splashscreen"},next:{title:"Window Customization",permalink:"/doc/v1/guides/features/window-customization"}},p={},m=[{value:"Setup",id:"setup",level:3},{value:"Linux Setup",id:"linux-setup",level:4},{value:"Creating a system tray",id:"creating-a-system-tray",level:3},{value:"Configuring a system tray context menu",id:"configuring-a-system-tray-context-menu",level:3},{value:"Configure the app system tray",id:"configure-the-app-system-tray",level:3},{value:"Listening to system tray events",id:"listening-to-system-tray-events",level:3},{value:"Updating system tray",id:"updating-system-tray",level:3},{value:"Updating context menu items",id:"updating-context-menu-items",level:4},{value:"Updating tray icon",id:"updating-tray-icon",level:4}],d={toc:m};function y(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-tray"},"System Tray"),(0,i.kt)("p",null,"Native application system tray."),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"systemTray")," object on ",(0,i.kt)("inlineCode",{parentName:"p"},"tauri.conf.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tauri": {\n    "systemTray": {\n      "iconPath": "icons/icon.png",\n      "iconAsTemplate": true\n    }\n  }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"iconPath")," is pointed to a PNG file on macOS and Linux, and a ",(0,i.kt)("inlineCode",{parentName:"p"},".ico")," file must exist for Windows support."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"iconAsTemplate")," is a boolean value that determines whether the image represents a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/appkit/nsimage/1520017-template?language=objc"},"Template Image")," on macOS."),(0,i.kt)("h4",{id:"linux-setup"},"Linux Setup"),(0,i.kt)("p",null,"On Linux, you also need to enable one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ayatana-tray")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gtk-tray")," Cargo features:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'# Cargo.toml file\n[dependencies]\ntauri = { version = "1.0.0-rc.8", features = [ "ayatana-tray" ] }\n')),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},"gtk-tray")," feature, your application will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"libappindicator3")," package to render the system tray."),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},"ayatana-tray")," feature, your application will depend on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AyatanaIndicators/libayatana-appindicator"},"libayatana-appindicator"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"libappindicator3")," is unmaintained and does not exist on some distros like ",(0,i.kt)("inlineCode",{parentName:"p"},"debian11")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"fedora"),", but ",(0,i.kt)("inlineCode",{parentName:"p"},"libayatana-appindicator")," does not exist on older releases."))),(0,i.kt)("h3",{id:"creating-a-system-tray"},"Creating a system tray"),(0,i.kt)("p",null,"To create a native system tray, import the ",(0,i.kt)("inlineCode",{parentName:"p"},"SystemTray")," type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use tauri::SystemTray;\n")),(0,i.kt)("p",null,"Initialize a new tray instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let tray = SystemTray::new();\n")),(0,i.kt)("h3",{id:"configuring-a-system-tray-context-menu"},"Configuring a system tray context menu"),(0,i.kt)("p",null,"Optionally you can add a context menu that is visible when the tray icon is right clicked. Import the ",(0,i.kt)("inlineCode",{parentName:"p"},"SystemTrayMenu"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SystemTrayMenuItem")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomMenuItem")," types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use tauri::{CustomMenuItem, SystemTrayMenu, SystemTrayMenuItem};\n")),(0,i.kt)("p",null,"Create the ",(0,i.kt)("inlineCode",{parentName:"p"},"SystemTrayMenu"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// here `"quit".to_string()` defines the menu item id, and the second parameter is the menu item label.\nlet quit = CustomMenuItem::new("quit".to_string(), "Quit");\nlet hide = CustomMenuItem::new("hide".to_string(), "Hide");\nlet tray_menu = SystemTrayMenu::new()\n  .add_item(quit)\n  .add_native_item(SystemTrayMenuItem::Separator)\n  .add_item(hide);\n')),(0,i.kt)("p",null,"Add the tray menu to the ",(0,i.kt)("inlineCode",{parentName:"p"},"SystemTray")," instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let tray = SystemTray::new().with_menu(tray_menu);\n")),(0,i.kt)("h3",{id:"configure-the-app-system-tray"},"Configure the app system tray"),(0,i.kt)("p",null,"The created ",(0,i.kt)("inlineCode",{parentName:"p"},"SystemTray")," instance can be set using the ",(0,i.kt)("inlineCode",{parentName:"p"},"system_tray")," API on the ",(0,i.kt)("inlineCode",{parentName:"p"},"tauri::Builder")," struct:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu};\n\nfn main() {\n  let tray_menu = SystemTrayMenu::new(); // insert the menu items here\n  let system_tray = SystemTray::new()\n    .with_menu(tray_menu);\n  tauri::Builder::default()\n    .system_tray(system_tray)\n    .run(tauri::generate_context!())\n    .expect("error while running tauri application");\n}\n')),(0,i.kt)("h3",{id:"listening-to-system-tray-events"},"Listening to system tray events"),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomMenuItem")," triggers an event when clicked.\nAlso, Tauri emits tray icon click events.\nUse the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_system_tray_event")," API to handle them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu};\nuse tauri::Manager;\n\nfn main() {\n  let tray_menu = SystemTrayMenu::new(); // insert the menu items here\n  tauri::Builder::default()\n    .system_tray(SystemTray::new().with_menu(tray_menu))\n    .on_system_tray_event(|app, event| match event {\n      SystemTrayEvent::LeftClick {\n        position: _,\n        size: _,\n        ..\n      } => {\n        println!("system tray received a left click");\n      }\n      SystemTrayEvent::RightClick {\n        position: _,\n        size: _,\n        ..\n      } => {\n        println!("system tray received a right click");\n      }\n      SystemTrayEvent::DoubleClick {\n        position: _,\n        size: _,\n        ..\n      } => {\n        println!("system tray received a double click");\n      }\n      SystemTrayEvent::MenuItemClick { id, .. } => {\n        match id.as_str() {\n          "quit" => {\n            std::process::exit(0);\n          }\n          "hide" => {\n            let window = app.get_window("main").unwrap();\n            window.hide().unwrap();\n          }\n          _ => {}\n        }\n      }\n      _ => {}\n    })\n    .run(tauri::generate_context!())\n    .expect("error while running tauri application");\n}\n')),(0,i.kt)("h3",{id:"updating-system-tray"},"Updating system tray"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AppHandle")," struct has a ",(0,i.kt)("inlineCode",{parentName:"p"},"tray_handle")," method, which returns a handle to the system tray allowing updating tray icon and context menu items:"),(0,i.kt)("h4",{id:"updating-context-menu-items"},"Updating context menu items"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu};\nuse tauri::Manager;\n\nfn main() {\n  let tray_menu = SystemTrayMenu::new(); // insert the menu items here\n  tauri::Builder::default()\n    .system_tray(SystemTray::new().with_menu(tray_menu))\n    .on_system_tray_event(|app, event| match event {\n      SystemTrayEvent::MenuItemClick { id, .. } => {\n        // get a handle to the clicked menu item\n        // note that `tray_handle` can be called anywhere,\n        // just get a `AppHandle` instance with `app.handle()` on the setup hook\n        // and move it to another function or thread\n        let item_handle = app.tray_handle().get_item(&id);\n        match id.as_str() {\n          "hide" => {\n            let window = app.get_window("main").unwrap();\n            window.hide().unwrap();\n            // you can also `set_selected`, `set_enabled` and `set_native_image` (macOS only).\n            item_handle.set_title("Show").unwrap();\n          }\n          _ => {}\n        }\n      }\n      _ => {}\n    })\n    .run(tauri::generate_context!())\n    .expect("error while running tauri application");\n}\n')),(0,i.kt)("h4",{id:"updating-tray-icon"},"Updating tray icon"),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"tauri::Icon")," must be a ",(0,i.kt)("inlineCode",{parentName:"p"},"Path")," variant on Linux, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Raw")," variant on Windows and macOS."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'app.tray_handle().set_icon(tauri::Icon::Raw(include_bytes!("../path/to/myicon.ico"))).unwrap();\n')))}y.isMDXComponent=!0}}]);