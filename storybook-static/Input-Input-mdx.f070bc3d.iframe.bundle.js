/*! For license information please see Input-Input-mdx.f070bc3d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[614],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./components/Input/Input.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),C_Users_Aluno_manh_Desktop_Design_System_node_modules_storybook_addon_essentials_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Input/Input.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h3:"h3",h2:"h2"},(0,C_Users_Aluno_manh_Desktop_Design_System_node_modules_storybook_addon_essentials_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"entrada-de-texto",children:"Entrada de Texto"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Este é o componente de input, utilizado para receber dados do usuário via texto."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primário",children:"Primário"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.Primary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primário-desabilitado",children:"Primário Desabilitado"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.PrimaryDisabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"multilinhas",children:"Multilinhas"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.Multiline}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"multilinhas-desabilitado",children:"Multilinhas Desabilitado"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.MultilineDisabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primário-com-label",children:"Primário com Label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.PrimaryLabel}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primário-desabilitado-com-label",children:"Primário Desabilitado com Label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.PrimaryLabelDisabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"multilinhas-com-label",children:"Multilinhas com Label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.MultilineLabel}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"multilinhas-desabilitado-com-label",children:"Multilinhas Desabilitado com Label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Input_stories_ts__WEBPACK_IMPORTED_MODULE_2__.MultilineLabelDisabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"documentação-interativa",children:"Documentação Interativa"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,C_Users_Aluno_manh_Desktop_Design_System_node_modules_storybook_addon_essentials_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./components/Input/Input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Multiline:()=>Multiline,MultilineDisabled:()=>MultilineDisabled,MultilineLabel:()=>MultilineLabel,MultilineLabelDisabled:()=>MultilineLabelDisabled,Primary:()=>Primary,PrimaryDisabled:()=>PrimaryDisabled,PrimaryLabel:()=>PrimaryLabel,PrimaryLabelDisabled:()=>PrimaryLabelDisabled,default:()=>Input_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_excluded=["label","className"],__jsx=react.createElement,InputOrTextarea=function InputOrTextarea(props){return props.multiline?__jsx("textarea",props):__jsx("input",props)},Input=function Input(_ref){var label=_ref.label,className=_ref.className,rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx("div",{className:"relative"},label&&__jsx("label",{className:"absolute pt-1 pl-3 text-xs"},label),__jsx(InputOrTextarea,(0,esm_extends.Z)({className:"\n               bg-dark text-gray-primary rounded-md p-3\n               disabled: bg-disabled disabled:border-2 disabled:border-disabled  \n               ".concat(label&&"pt-5","\n               ").concat(className,"\n            ")},rest)))};Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},multiline:{required:!1,tsType:{name:"boolean"},description:""}}};const Input_Input=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_Multiline$parameters,_Multiline$parameters2,_PrimaryDisabled$para,_PrimaryDisabled$para2,_MultilineDisabled$pa,_MultilineDisabled$pa2,_PrimaryLabel$paramet,_PrimaryLabel$paramet2,_PrimaryLabelDisabled,_PrimaryLabelDisabled2,_MultilineLabel$param,_MultilineLabel$param2,_MultilineLabelDisabl,_MultilineLabelDisabl2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Input_stories={title:"Design System/Molecules/Input",component:Input_Input,argTypes:{}};var Primary={args:{value:"Input"}},Multiline={args:{value:"Input",multiline:!0}},PrimaryDisabled={args:{value:"Input",disabled:!0}},MultilineDisabled={args:{value:"Input",disabled:!0,multiline:!0}},PrimaryLabel={args:{value:"Input",label:"Label"}},PrimaryLabelDisabled={args:{value:"Input",label:"Label",disabled:!0}},MultilineLabel={args:{value:"Input",multiline:!0,label:"Label"}},MultilineLabelDisabled={args:{value:"Input",multiline:!0,label:"Label",disabled:!0}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    value: 'Input'\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),Multiline.parameters=_objectSpread(_objectSpread({},Multiline.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Multiline$parameters=Multiline.parameters)||void 0===_Multiline$parameters?void 0:_Multiline$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    value: 'Input',\n    multiline: true\n  }\n}"},null===(_Multiline$parameters2=Multiline.parameters)||void 0===_Multiline$parameters2||null===(_Multiline$parameters2=_Multiline$parameters2.docs)||void 0===_Multiline$parameters2?void 0:_Multiline$parameters2.source)})}),PrimaryDisabled.parameters=_objectSpread(_objectSpread({},PrimaryDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PrimaryDisabled$para=PrimaryDisabled.parameters)||void 0===_PrimaryDisabled$para?void 0:_PrimaryDisabled$para.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    value: 'Input',\n    disabled: true\n  }\n}"},null===(_PrimaryDisabled$para2=PrimaryDisabled.parameters)||void 0===_PrimaryDisabled$para2||null===(_PrimaryDisabled$para2=_PrimaryDisabled$para2.docs)||void 0===_PrimaryDisabled$para2?void 0:_PrimaryDisabled$para2.source)})}),MultilineDisabled.parameters=_objectSpread(_objectSpread({},MultilineDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MultilineDisabled$pa=MultilineDisabled.parameters)||void 0===_MultilineDisabled$pa?void 0:_MultilineDisabled$pa.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    value: 'Input',\n    disabled: true,\n    multiline: true\n  }\n}"},null===(_MultilineDisabled$pa2=MultilineDisabled.parameters)||void 0===_MultilineDisabled$pa2||null===(_MultilineDisabled$pa2=_MultilineDisabled$pa2.docs)||void 0===_MultilineDisabled$pa2?void 0:_MultilineDisabled$pa2.source)})}),PrimaryLabel.parameters=_objectSpread(_objectSpread({},PrimaryLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PrimaryLabel$paramet=PrimaryLabel.parameters)||void 0===_PrimaryLabel$paramet?void 0:_PrimaryLabel$paramet.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    value: 'Input',\n    label: 'Label'\n  }\n}"},null===(_PrimaryLabel$paramet2=PrimaryLabel.parameters)||void 0===_PrimaryLabel$paramet2||null===(_PrimaryLabel$paramet2=_PrimaryLabel$paramet2.docs)||void 0===_PrimaryLabel$paramet2?void 0:_PrimaryLabel$paramet2.source)})}),PrimaryLabelDisabled.parameters=_objectSpread(_objectSpread({},PrimaryLabelDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PrimaryLabelDisabled=PrimaryLabelDisabled.parameters)||void 0===_PrimaryLabelDisabled?void 0:_PrimaryLabelDisabled.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    value: 'Input',\n    label: 'Label',\n    disabled: true\n  }\n}"},null===(_PrimaryLabelDisabled2=PrimaryLabelDisabled.parameters)||void 0===_PrimaryLabelDisabled2||null===(_PrimaryLabelDisabled2=_PrimaryLabelDisabled2.docs)||void 0===_PrimaryLabelDisabled2?void 0:_PrimaryLabelDisabled2.source)})}),MultilineLabel.parameters=_objectSpread(_objectSpread({},MultilineLabel.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MultilineLabel$param=MultilineLabel.parameters)||void 0===_MultilineLabel$param?void 0:_MultilineLabel$param.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    value: 'Input',\n    multiline: true,\n    label: 'Label'\n  }\n}"},null===(_MultilineLabel$param2=MultilineLabel.parameters)||void 0===_MultilineLabel$param2||null===(_MultilineLabel$param2=_MultilineLabel$param2.docs)||void 0===_MultilineLabel$param2?void 0:_MultilineLabel$param2.source)})}),MultilineLabelDisabled.parameters=_objectSpread(_objectSpread({},MultilineLabelDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MultilineLabelDisabl=MultilineLabelDisabled.parameters)||void 0===_MultilineLabelDisabl?void 0:_MultilineLabelDisabl.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    value: 'Input',\n    multiline: true,\n    label: 'Label',\n    disabled: true\n  }\n}"},null===(_MultilineLabelDisabl2=MultilineLabelDisabled.parameters)||void 0===_MultilineLabelDisabl2||null===(_MultilineLabelDisabl2=_MultilineLabelDisabl2.docs)||void 0===_MultilineLabelDisabl2?void 0:_MultilineLabelDisabl2.source)})})},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);