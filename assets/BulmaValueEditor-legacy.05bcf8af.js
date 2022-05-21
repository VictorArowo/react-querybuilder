!function(){var e=["fieldData","operator","value","handleOnChange","title","className","type","inputType","values","disabled"];function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./constants-legacy.c822b535.js"],(function(t){"use strict";var r,i,c;return{setters:[function(e){r=e.d,i=e.j,c=e.r}],execute:function(){t("B",(function(e){var t=e.className,n=e.handleOnClick,a=e.label,l=e.title,i=e.disabled,c=e.disabledTranslation;return r("button",{type:"button",className:"button is-small ".concat(t),title:c&&i?c.title:l,onClick:function(e){return n(e)},disabled:i&&!c,children:c&&i?c.label:a})})).displayName="BulmaActionElement",t("a",(function(e){var t=e.className,n=e.handleOnChange,a=e.label,l=e.checked,c=e.title,o=e.disabled;return i("label",{className:"".concat(t," checkbox"),title:c,children:[r("input",{type:"checkbox",disabled:o,checked:l,onChange:function(e){return n(e.target.checked)}}),a]})})).displayName="BulmaNotToggle";var o=function(e){return function(e){return Array.isArray(e)&&e.length>0&&"options"in e[0]}(e)?e.map((function(e){return r("optgroup",{label:e.label,children:e.options.map((function(e){return r("option",{value:e.name,children:e.label},e.name)}))},e.label)})):Array.isArray(e)?e.map((function(e){return r("option",{value:e.name,children:e.label},e.name)})):null},u=t("c",(function(e){var t=e.className,n=e.handleOnChange,a=e.options,i=e.value,u=e.title,s=e.disabled,d=e.multiple,p=c.exports.useMemo((function(){return d?function(e){return n(l(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value})).join(","))}:function(e){return n(e.target.value)}}),[n,d]);return r("div",{title:u,className:"".concat(t," select is-small"),children:r("select",{value:d&&i?i.split(","):i,multiple:!!d,disabled:s,onChange:p,children:o(a)})})}));u.displayName="BulmaValueSelector",t("b",(function(t){var l,o=t.fieldData,s=t.operator,d=t.value,p=t.handleOnChange,f=t.title,b=t.className,m=t.type,h=t.inputType,y=t.values,v=t.disabled,g=a(t,e);if(c.exports.useEffect((function(){"number"===h&&!["between","notBetween","in","notIn"].includes(s)&&"string"==typeof d&&d.includes(",")&&p("")}),[h,s,d,p]),"null"===s||"notNull"===s)return null;var O=null!==(l=null==o?void 0:o.placeholder)&&void 0!==l?l:"",j=["between","notBetween","in","notIn"].includes(s)?"text":h||"text";switch(m){case"select":case"multiselect":return r(u,n(n({},g),{},{title:f,className:b,handleOnChange:p,options:y,value:d,disabled:v,multiple:"multiselect"===m}));case"textarea":return r("div",{className:"".concat(b," control"),children:r("textarea",{value:d,title:f,disabled:v,className:"textarea",placeholder:O,onChange:function(e){return p(e.target.value)}})});case"switch":case"checkbox":return r("label",{title:f,className:"".concat(b," checkbox"),children:r("input",{type:"checkbox",checked:!!d,disabled:v,onChange:function(e){return p(e.target.checked)}})});case"radio":return r("div",{className:"".concat(b," control"),title:f,children:y.map((function(e){return i("label",{className:"radio",children:[r("input",{type:"radio",value:e.name,checked:d===e.name,onChange:function(){return p(e.name)},disabled:v}),e.label]},e.name)}))})}return r("div",{className:"".concat(b," control"),children:r("input",{type:j,value:d,title:f,disabled:v,className:"input is-small",placeholder:O,onChange:function(e){return p(e.target.value)}})})})).displayName="BulmaValueEditor"}}}))}();
//# sourceMappingURL=BulmaValueEditor-legacy.05bcf8af.js.map
