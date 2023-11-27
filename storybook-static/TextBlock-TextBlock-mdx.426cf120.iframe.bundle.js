/*! For license information please see TextBlock-TextBlock-mdx.426cf120.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[438],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./components/TextBlock/TextBlock.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),C_Users_Aluno_manh_Desktop_Design_System_node_modules_storybook_addon_essentials_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_TextBlock_stories_ts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/TextBlock/TextBlock.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h3:"h3",h2:"h2"},(0,C_Users_Aluno_manh_Desktop_Design_System_node_modules_storybook_addon_essentials_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_TextBlock_stories_ts__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"textblock",children:"TextBlock"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Este é um componente de Bloco de texto."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"bloco-de-texto-primário",children:"Bloco de Texto Primário"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_TextBlock_stories_ts__WEBPACK_IMPORTED_MODULE_2__.TextBlockPrimary,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"bloco-de-texto-secundário",children:"Bloco de Texto Secundário"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_TextBlock_stories_ts__WEBPACK_IMPORTED_MODULE_2__.TextBlockSecondary,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"bloco-de-texto-terciário",children:"Bloco de Texto Terciário"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_TextBlock_stories_ts__WEBPACK_IMPORTED_MODULE_2__.TextBlockTertiary,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"documentação-interativa",children:"Documentação Interativa"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,C_Users_Aluno_manh_Desktop_Design_System_node_modules_storybook_addon_essentials_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./components/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var C_Users_Aluno_manh_Desktop_Design_System_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),C_Users_Aluno_manh_Desktop_Design_System_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),C_Users_Aluno_manh_Desktop_Design_System_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_excluded=["rounded","border","filledBackground","type","children","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,BoxClassMap={primary:"bg-primary",secondary:"bg-tertiary",dark:"bg-dark",alert:"bg-yellow-100 text-yellow-100",success:"bbg-green-100 text-green-100",error:"bg-error text-error"},Box=function Box(_ref){var _ref$rounded=_ref.rounded,rounded=void 0!==_ref$rounded&&_ref$rounded,_ref$border=_ref.border,border=void 0!==_ref$border&&_ref$border,_ref$filledBackground=_ref.filledBackground,filledBackground=void 0!==_ref$filledBackground&&_ref$filledBackground,_ref$type=_ref.type,type=void 0===_ref$type?"primary":_ref$type,children=_ref.children,rest=(_ref.className,(0,C_Users_Aluno_manh_Desktop_Design_System_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded)),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,C_Users_Aluno_manh_Desktop_Design_System_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.Z)({"rounded-md":rounded,"border border-gray-100":border,"bg-dark":filledBackground},BoxClassMap[type],type));return __jsx("div",(0,C_Users_Aluno_manh_Desktop_Design_System_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:classes},rest),children)};Box.displayName="Box",Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{rounded:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},border:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},filledBackground:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},type:{defaultValue:{value:"'primary'",computed:!1},required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'dark' | 'alert' | 'success' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'alert'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Box;try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},border:{defaultValue:{value:"false"},description:"",name:"border",required:!1,type:{name:"boolean"}},filledBackground:{defaultValue:{value:"false"},description:"",name:"filledBackground",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'},{value:'"success"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Box/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"components/Box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var C_Users_Aluno_manh_Desktop_Design_System_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),C_Users_Aluno_manh_Desktop_Design_System_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_excluded=["children","element","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,textVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)("text-gray-primary text-sm font-normal",{variants:{variant:{primary:"text-gray-primary",secondary:"text-gray-secondary",tertiary:"text-gray-tertiary"},size:{xs:"text-xs",sm:"text-sm",md:"text-md",xl:"text-xl",title1:"text-txl",title2:"text-tlg",title3:"text-tmd"},defaultVariants:{variant:"primary",size:"md"}}}),Typography=function Typography(_ref){var children=_ref.children,_ref$element=_ref.element,element=void 0===_ref$element?"p":_ref$element,className=_ref.className,rest=(0,C_Users_Aluno_manh_Desktop_Design_System_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(element,(0,C_Users_Aluno_manh_Desktop_Design_System_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:"".concat(textVariants(rest)," ").concat(className," ")},rest),children)};Typography.displayName="Typography",Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{element:{defaultValue:{value:"'p'",computed:!1},required:!1,tsType:{name:"unknown"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Typography;try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "tertiary" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "xl" | "title1" | "title2" | "title3" | null'}},defaultVariants:{defaultValue:null,description:"",name:"defaultVariants",required:!1,type:{name:'"variant" | "size" | null'}},element:{defaultValue:{value:"p"},description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"components/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./components/TextBlock/TextBlock.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,TextBlockPrimary:()=>TextBlockPrimary,TextBlockSecondary:()=>TextBlockSecondary,TextBlockTertiary:()=>TextBlockTertiary,default:()=>TextBlock_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Box=__webpack_require__("./components/Box/Box.tsx"),Typography=__webpack_require__("./components/Typography/Typography.tsx"),_excluded=["title","type","children","className"],__jsx=react.createElement,TextBlock=function TextBlock(_ref){var title=_ref.title,_ref$type=_ref.type,type=void 0===_ref$type?"dark":_ref$type,children=_ref.children,className=_ref.className,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),textClass="primary"===type?"text-white":"text-gray-primary";return __jsx(Box.Z,(0,esm_extends.Z)({className:"flex flex-col gap-2 p-5  ",type,rounded:!0},rest),__jsx("div",{className},__jsx(Typography.Z,{className:"font-bold ".concat(textClass),size:"xl"},title),__jsx(Typography.Z,{className:textClass},children)))};TextBlock.displayName="TextBlock",TextBlock.__docgenInfo={description:"",methods:[],displayName:"TextBlock",props:{type:{defaultValue:{value:'"dark"',computed:!1},required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "dark"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"dark"'}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const TextBlock_TextBlock=TextBlock;try{TextBlock.displayName="TextBlock",TextBlock.__docgenInfo={description:"",displayName:"TextBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},type:{defaultValue:{value:"dark"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextBlock/TextBlock.tsx#TextBlock"]={docgenInfo:TextBlock.__docgenInfo,name:"TextBlock",path:"components/TextBlock/TextBlock.tsx#TextBlock"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_TextBlockPrimary$par,_TextBlockPrimary$par2,_TextBlockSecondary$p,_TextBlockSecondary$p2,_TextBlockTertiary$pa,_TextBlockTertiary$pa2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TextBlock_stories={title:"Design System/Molecules/TextBlock",component:TextBlock_TextBlock,argTypes:{type:{type:"string"},title:{type:"string"},children:{type:"string"}}};var Primary={args:{title:"Título",children:"Olá eu sou uma bloco de Texto padrão"}},TextBlockPrimary={args:{title:"Título",children:"Olá eu sou uma bloco de Texto Primário",type:"primary"}},TextBlockSecondary={args:{title:"Título",children:"Olá eu sou uma bloco de Texto Secundário",type:"secondary"}},TextBlockTertiary={args:{title:"Título",children:"Olá eu sou uma bloco de Texto Terciário",type:"dark"}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Título",\n    children: "Olá eu sou uma bloco de Texto padrão"\n  }\n}'},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),TextBlockPrimary.parameters=_objectSpread(_objectSpread({},TextBlockPrimary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TextBlockPrimary$par=TextBlockPrimary.parameters)||void 0===_TextBlockPrimary$par?void 0:_TextBlockPrimary$par.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Título",\n    children: "Olá eu sou uma bloco de Texto Primário",\n    type: "primary"\n  }\n}'},null===(_TextBlockPrimary$par2=TextBlockPrimary.parameters)||void 0===_TextBlockPrimary$par2||null===(_TextBlockPrimary$par2=_TextBlockPrimary$par2.docs)||void 0===_TextBlockPrimary$par2?void 0:_TextBlockPrimary$par2.source)})}),TextBlockSecondary.parameters=_objectSpread(_objectSpread({},TextBlockSecondary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TextBlockSecondary$p=TextBlockSecondary.parameters)||void 0===_TextBlockSecondary$p?void 0:_TextBlockSecondary$p.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Título",\n    children: "Olá eu sou uma bloco de Texto Secundário",\n    type: "secondary"\n  }\n}'},null===(_TextBlockSecondary$p2=TextBlockSecondary.parameters)||void 0===_TextBlockSecondary$p2||null===(_TextBlockSecondary$p2=_TextBlockSecondary$p2.docs)||void 0===_TextBlockSecondary$p2?void 0:_TextBlockSecondary$p2.source)})}),TextBlockTertiary.parameters=_objectSpread(_objectSpread({},TextBlockTertiary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TextBlockTertiary$pa=TextBlockTertiary.parameters)||void 0===_TextBlockTertiary$pa?void 0:_TextBlockTertiary$pa.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    title: "Título",\n    children: "Olá eu sou uma bloco de Texto Terciário",\n    type: "dark"\n  }\n}'},null===(_TextBlockTertiary$pa2=TextBlockTertiary.parameters)||void 0===_TextBlockTertiary$pa2||null===(_TextBlockTertiary$pa2=_TextBlockTertiary$pa2.docs)||void 0===_TextBlockTertiary$pa2?void 0:_TextBlockTertiary$pa2.source)})})},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);