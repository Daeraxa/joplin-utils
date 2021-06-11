import{C as e,F as t,j as r,I as n,B as o,k as a}from"./vendor.928fc7d7.js";import{j as i}from"./joplinApiGenerator.d1689ad6.js";import"./index.397f8a3c.js";var s=function(){},l="undefined"!=typeof window;export default()=>{var u;const[c]=t.useForm();const[p,f]=function(t,r,n){if(!l)return[r,s,s];if(!t)throw new Error("useLocalStorage key may not be falsy");var o=n?n.raw?function(e){return e}:n.deserializer:JSON.parse,a=e.exports.useRef((function(e){try{var t=n?n.raw?String:n.serializer:JSON.stringify,a=localStorage.getItem(e);return null!==a?o(a):(r&&localStorage.setItem(e,t(r)),r)}catch(i){return r}})),i=e.exports.useState((function(){return a.current(t)})),u=i[0],c=i[1];e.exports.useLayoutEffect((function(){return c(a.current(t))}),[t]);var p=e.exports.useCallback((function(e){try{var r="function"==typeof e?e(u):e;if(void 0===r)return;var a=void 0;a=n?n.raw?"string"==typeof r?r:JSON.stringify(r):n.serializer?n.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(t,a),c(o(a))}catch(i){}}),[t,c]),f=e.exports.useCallback((function(){try{localStorage.removeItem(t),c(void 0)}catch(e){}}),[t,c]);return[u,p,f]}("settings");return e.exports.createElement(r,null,e.exports.createElement("h2",null,"安全设置"),e.exports.createElement(t,{form:c,onFinish:async function(){if(!(await c.validateFields()))return;const e=c.getFieldsValue();console.log("onFinish: ",e);try{await i.noteApi.list({limit:1}),f(e),a.success("设置成功")}catch(t){a.error("无法访问 joplin web clipper api")}},initialValues:{token:null==p?void 0:p.token,port:null!=(u=null==p?void 0:p.port)?u:41184}},e.exports.createElement(t.Item,{name:"token",label:"Token",rules:[{required:!0}]},e.exports.createElement(n,{type:"password"})),e.exports.createElement(t.Item,{name:"port",label:"Port",rules:[{required:!0}]},e.exports.createElement(n,{type:"number"})),e.exports.createElement(t.Item,null,e.exports.createElement(o,{type:"primary",htmlType:"submit"},"提交"))))};
