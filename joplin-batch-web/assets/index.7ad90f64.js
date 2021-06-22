import{C as e,n as t,m as s,k as r,S as o,B as n,o as i,p as a}from"./vendor.8d5b4c2e.js";import{f as c,n as l}from"./index.esm.84052b48.js";import{s as u,j as m,a as d,i as p}from"./joplinApiGenerator.248dab40.js";import{P as f}from"./PromiseUtil.a7bff535.js";import{f as g}from"./immer.esm.6f40434d.js";import{i as h}from"./index.43f7b04f.js";const x=new class{constructor(e){this.config=e}getUnusedResource(){return f.warpOnEvent((async e=>{const t=await u.pageToAllList(this.config.resourceApi.list.bind(this.config.resourceApi),{fields:["id","title","mime"]});let s=0;return await c.filter(t,l((async r=>{const o=!(await this.checkUsed(r.id));return e.process({title:r.title,all:t.length,rate:s++}),o}),10))}))}async checkUsed(e){return(await this.config.searchApi.search({query:`"](:/${e})"`})).items.length>0}}(m);const w=function(e){const t=e();return e=>`http://localhost:${null==t?void 0:t.port}/resources/${e}/file?token=${null==t?void 0:t.token}`}((()=>d(localStorage).settings));export default()=>{const[l,u]=e.exports.useState([]),[d,f]=e.exports.useState(""),[y,E]=t((async()=>{try{const e=await x.getUnusedResource().on("process",(e=>{f(h.t("unusedResource.msg.process",e))}));console.log("list: ",e),u(e)}catch(e){s.error(h.t("unusedResource.msg.error"))}}));const[k,R]=t((async()=>{await c.forEach(l,(async e=>{await m.resourceApi.remove(e.id)})),u([])}),[l]);return e.exports.createElement(r,{title:h.t("unusedResource.title"),extra:e.exports.createElement(o,null,e.exports.createElement(n,{onClick:E},h.t("unusedResource.action.check")),e.exports.createElement(n,{disabled:0===l.length,danger:!0,loading:k.loading,onClick:R},h.t("unusedResource.action.removeAll")))},e.exports.createElement(i,{dataSource:l,locale:{emptyText:h.t("unusedResource.listEmptyText")},renderItem:t=>e.exports.createElement(i.Item,{key:t.id,actions:[e.exports.createElement(n,{onClick:()=>async function(e){u(g((t=>t.filter((t=>t.id!==e))))),await m.resourceApi.remove(e)}(t.id)},h.t("unusedResource.action.remove")),e.exports.createElement(n,{onClick:()=>async function(e){await p(w(e))}(t.id)},h.t("unusedResource.action.download"))],extra:t.mime.startsWith("image/")&&e.exports.createElement(a,{src:w(t.id),width:300})},e.exports.createElement(i.Item.Meta,{title:t.title})),loading:{spinning:y.loading,tip:d}}))};
