"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[7633],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return p}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),m=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(a),p=r,g=d["".concat(l,".").concat(p)]||d[p]||c[p]||o;return a?t.createElement(g,i(i({ref:n},u),{},{components:a})):t.createElement(g,i({ref:n},u))}));function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=a[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},59466:function(e,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var t=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={},l="Calling Rust from the frontend",m={unversionedId:"guides/features/command",id:"guides/features/command",title:"Calling Rust from the frontend",description:"Tauri provides a simple yet powerful command system for calling Rust functions from your web app.",source:"@site/docs/guides/07-features/command.md",sourceDirName:"guides/07-features",slug:"/guides/features/command",permalink:"/doc/v1/guides/features/command",draft:!1,editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/guides/07-features/command.md",tags:[],version:"current",lastUpdatedAt:1652462994,formattedLastUpdatedAt:"5/14/2022",frontMatter:{},sidebar:"guides",previous:{title:"Making Your Own CLI",permalink:"/doc/v1/guides/features/cli"},next:{title:"Events",permalink:"/doc/v1/guides/features/events"}},u={},c=[{value:"Basic Example",id:"basic-example",level:2},{value:"Passing Arguments",id:"passing-arguments",level:2},{value:"Returning Data",id:"returning-data",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Async Commands",id:"async-commands",level:2},{value:"Accessing the Window in Commands",id:"accessing-the-window-in-commands",level:2},{value:"Accessing an AppHandle in Commands",id:"accessing-an-apphandle-in-commands",level:2},{value:"Accessing managed state",id:"accessing-managed-state",level:2},{value:"Creating Multiple Commands",id:"creating-multiple-commands",level:2},{value:"Complete Example",id:"complete-example",level:2}],d={toc:c};function p(e){var n=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"calling-rust-from-the-frontend"},"Calling Rust from the frontend"),(0,o.kt)("p",null,"Tauri provides a simple yet powerful ",(0,o.kt)("inlineCode",{parentName:"p"},"command")," system for calling Rust functions from your web app.\nCommands can accept arguments and return values. They can also return errors and be ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),"."),(0,o.kt)("h2",{id:"basic-example"},"Basic Example"),(0,o.kt)("p",null,"Commands are defined in your ",(0,o.kt)("inlineCode",{parentName:"p"},"src-tauri/src/main.rs")," file. To create a command, just add a function and annotate it with ",(0,o.kt)("inlineCode",{parentName:"p"},"#[tauri::command]"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[tauri::command]\nfn my_custom_command() {\n  println!("I was invoked from JS!");\n}\n')),(0,o.kt)("p",null,"You will have to provide a list of your commands to the builder function like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// Also in main.rs\nfn main() {\n  tauri::Builder::default()\n    // This is where you pass in your commands\n    .invoke_handler(tauri::generate_handler![my_custom_command])\n    .run(tauri::generate_context!())\n    .expect("failed to run app");\n}\n')),(0,o.kt)("p",null,"Now, you can invoke the command from your JS code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// With the Tauri API npm package:\nimport { invoke } from '@tauri-apps/api/tauri'\n// With the Tauri global script, enabled when `tauri.conf.json > build > withGlobalTauri` is set to true:\nconst invoke = window.__TAURI__.invoke\n\n// Invoke the command\ninvoke('my_custom_command')\n")),(0,o.kt)("h2",{id:"passing-arguments"},"Passing Arguments"),(0,o.kt)("p",null,"Your command handlers can take arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[tauri::command]\nfn my_custom_command(invoke_message: String) {\n  println!("I was invoked from JS, with this message: {}", invoke_message);\n}\n')),(0,o.kt)("p",null,"Arguments should be passed as a JSON object with camelCase keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"invoke('my_custom_command', { invokeMessage: 'Hello!' })\n")),(0,o.kt)("p",null,"Arguments can be of any type, as long as they implement ",(0,o.kt)("a",{parentName:"p",href:"https://docs.serde.rs/serde/trait.Deserialize.html"},(0,o.kt)("inlineCode",{parentName:"a"},"serde::Deserialize")),"."),(0,o.kt)("h2",{id:"returning-data"},"Returning Data"),(0,o.kt)("p",null,"Command handlers can return data as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[tauri::command]\nfn my_custom_command() -> String {\n  "Hello from Rust!".into()\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"invoke")," function returns a promise that resolves with the returned value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"invoke('my_custom_command').then((message) => console.log(message))\n")),(0,o.kt)("p",null,"Returned data can be of any type, as long as it implements ",(0,o.kt)("a",{parentName:"p",href:"https://docs.serde.rs/serde/trait.Serialize.html"},(0,o.kt)("inlineCode",{parentName:"a"},"serde::Serialize")),"."),(0,o.kt)("h2",{id:"error-handling"},"Error Handling"),(0,o.kt)("p",null,"If your handler could fail and needs to be able to return an error, have the function return a ",(0,o.kt)("inlineCode",{parentName:"p"},"Result"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[tauri::command]\nfn my_custom_command() -> Result<String, String> {\n  // If something fails\n  Err("This failed!".into())\n  // If it worked\n  Ok("This worked!".into())\n}\n')),(0,o.kt)("p",null,"If the command returns an error, the promise will reject, otherwise it resolves:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"invoke('my_custom_command')\n  .then((message) => console.log(message))\n  .catch((error) => console.error(error))\n")),(0,o.kt)("h2",{id:"async-commands"},"Async Commands"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Async commands are executed on a separate thread using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/tauri/1.0.0-rc.0/tauri/async_runtime/fn.spawn.html"},(0,o.kt)("inlineCode",{parentName:"a"},"async_runtime::spawn")),".\nCommands without the ",(0,o.kt)("em",{parentName:"p"},"async")," keyword are executed on the main thread, unless defined with ",(0,o.kt)("em",{parentName:"p"},"#","[tauri::command(async)]"),"."))),(0,o.kt)("p",null,"If your command needs to run asynchronously, simply declare it as ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[tauri::command]\nasync fn my_custom_command() {\n  // Call another async function and wait for it to finish\n  let result = some_async_function().await;\n  println!("Result: {}", result);\n}\n')),(0,o.kt)("p",null,"Since invoking the command from JS already returns a promise, it works just like any other command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"invoke('my_custom_command').then(() => console.log('Completed!'))\n")),(0,o.kt)("h2",{id:"accessing-the-window-in-commands"},"Accessing the Window in Commands"),(0,o.kt)("p",null,"Commands can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"Window")," instance that invoked the message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[tauri::command]\nasync fn my_custom_command(window: tauri::Window) {\n  println!("Window: {}", window.label());\n}\n')),(0,o.kt)("h2",{id:"accessing-an-apphandle-in-commands"},"Accessing an AppHandle in Commands"),(0,o.kt)("p",null,"Commands can access an ",(0,o.kt)("inlineCode",{parentName:"p"},"AppHandle")," instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[tauri::command]\nasync fn my_custom_command(app_handle: tauri::AppHandle) {\n  let app_dir = app_handle.path_resolver().app_dir();\n  use tauri::GlobalShortcutManager;\n  app_handle.global_shortcut_manager().register("CTRL + U", move || {});\n}\n')),(0,o.kt)("h2",{id:"accessing-managed-state"},"Accessing managed state"),(0,o.kt)("p",null,"Tauri can manage state using the ",(0,o.kt)("inlineCode",{parentName:"p"},"manage")," function on ",(0,o.kt)("inlineCode",{parentName:"p"},"tauri::Builder"),".\nThe state can be accessed on a command using ",(0,o.kt)("inlineCode",{parentName:"p"},"tauri::State"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'struct MyState(String);\n\n#[tauri::command]\nfn my_custom_command(state: tauri::State<MyState>) {\n  assert_eq!(state.0 == "some state value", true);\n}\n\nfn main() {\n  tauri::Builder::default()\n    .manage(MyState("some state value".into()))\n    .invoke_handler(tauri::generate_handler![my_custom_command])\n    .run(tauri::generate_context!())\n    .expect("error while running tauri application");\n}\n')),(0,o.kt)("h2",{id:"creating-multiple-commands"},"Creating Multiple Commands"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tauri::generate_handler!")," macro takes an array of commands. To register\nmultiple commands, you cannot call invoke_handler multiple times. Only the last\ncall will be used. You must pass each command to a single call of\n",(0,o.kt)("inlineCode",{parentName:"p"},"tauri::generate_handler!"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[tauri::command]\nfn cmd_a() -> String {\n    "Command a"\n}\n#[tauri::command]\nfn cmd_b() -> String {\n    "Command b"\n}\n\nfn main() {\n  tauri::Builder::default()\n    .invoke_handler(tauri::generate_handler![cmd_a, cmd_b])\n    .run(tauri::generate_context!())\n    .expect("error while running tauri application");\n}\n')),(0,o.kt)("h2",{id:"complete-example"},"Complete Example"),(0,o.kt)("p",null,"Any or all of the above features can be combined:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"title=main.rs",title:"main.rs"},'// Definition in main.rs\n\nstruct Database;\n\n#[derive(serde::Serialize)]\nstruct CustomResponse {\n  message: String,\n  other_val: usize,\n}\n\nasync fn some_other_function() -> Option<String> {\n  Some("response".into())\n}\n\n#[tauri::command]\nasync fn my_custom_command(\n  window: tauri::Window,\n  number: usize,\n  database: tauri::State<\'_, Database>,\n) -> Result<CustomResponse, String> {\n  println!("Called from {}", window.label());\n  let result: Option<String> = some_other_function().await;\n  if let Some(message) = result {\n    Ok(CustomResponse {\n      message,\n      other_val: 42 + number,\n    })\n  } else {\n    Err("No result".into())\n  }\n}\n\nfn main() {\n  tauri::Builder::default()\n    .manage(Database {})\n    .invoke_handler(tauri::generate_handler![my_custom_command])\n    .run(tauri::generate_context!())\n    .expect("error while running tauri application");\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Invocation from JS\n\ninvoke('my_custom_command', {\n  number: 42,\n})\n  .then((res) =>\n    console.log(`Message: ${res.message}, Other Val: ${res.other_val}`)\n  )\n  .catch((e) => console.error(e))\n")))}p.isMDXComponent=!0}}]);