/*! For license information please see Divider-Divider-mdx.25f9711b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[650,61],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./components/Divider/Divider.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),C_Users_Aluno_manh_Desktop_Design_System_node_modules_storybook_addon_essentials_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Divider_stories_ts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Divider/Divider.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h3:"h3",h2:"h2"},(0,C_Users_Aluno_manh_Desktop_Design_System_node_modules_storybook_addon_essentials_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Divider_stories_ts__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"divisor",children:"Divisor"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Este é um componente divisor de seções."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"divisor-default",children:"Divisor Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Divider_stories_ts__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"divisor-com-texto",children:"Divisor com Texto"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Divider_stories_ts__WEBPACK_IMPORTED_MODULE_2__.DivisorWithProps}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"documentação-interativa",children:"Documentação Interativa"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,C_Users_Aluno_manh_Desktop_Design_System_node_modules_storybook_addon_essentials_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./components/Divider/Divider.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DivisorWithProps:()=>DivisorWithProps,Primary:()=>Primary,default:()=>Divider_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),_excluded=["width","height","children","bgColor"],__jsx=react.createElement,colorClassMap={light:"bg-light",dark:"bg-dark",black:"bg-black"},Divider=function Divider(_ref){var width=_ref.width,_ref$height=_ref.height,height=void 0===_ref$height?"h-[1px]":_ref$height,children=_ref.children,_ref$bgColor=_ref.bgColor,bgColor=void 0===_ref$bgColor?"black":_ref$bgColor,colorClass=((0,objectWithoutProperties.Z)(_ref,_excluded),colorClassMap[bgColor]),barClass=classnames_default()(children?"w-1/3":"w-1/2",height,colorClass);return __jsx("div",{className:classnames_default()(width,"flex items-center justify-center")},__jsx("div",{className:barClass}),children&&__jsx("div",{className:"px-3"},children),__jsx("div",{className:barClass}))};Divider.displayName="Divider",Divider.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{height:{defaultValue:{value:"'h-[1px]'",computed:!1},required:!1,tsType:{name:"string"},description:""},bgColor:{defaultValue:{value:"'black'",computed:!1},required:!1,tsType:{name:"union",raw:"'light' | 'dark' | 'black'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'black'"}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Divider_Divider=Divider;try{Divider.displayName="Divider",Divider.__docgenInfo={description:"",displayName:"Divider",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:{value:"h-[1px]"},description:"",name:"height",required:!1,type:{name:"string"}},bgColor:{defaultValue:{value:"black"},description:"",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"black"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Divider/Divider.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"components/Divider/Divider.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_Default$parameters,_Default$parameters2,_DivisorWithProps$par,_DivisorWithProps$par2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Divider_stories={title:"Design System/Atoms/Divider",component:Divider_Divider,argTypes:{children:{type:"string"}}};var Primary={args:{}},Default={args:{}},DivisorWithProps={args:{children:"Olá mundo"}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),DivisorWithProps.parameters=_objectSpread(_objectSpread({},DivisorWithProps.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DivisorWithProps$par=DivisorWithProps.parameters)||void 0===_DivisorWithProps$par?void 0:_DivisorWithProps$par.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    children: "Olá mundo"\n  }\n}'},null===(_DivisorWithProps$par2=DivisorWithProps.parameters)||void 0===_DivisorWithProps$par2||null===(_DivisorWithProps$par2=_DivisorWithProps$par2.docs)||void 0===_DivisorWithProps$par2?void 0:_DivisorWithProps$par2.source)})})},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);