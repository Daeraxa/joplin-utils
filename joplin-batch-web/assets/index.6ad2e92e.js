import{C as e,k as t,j as r,B as s,l as o,m as i}from"./vendor.33de8da3.js";import{f as n,n as a}from"./index.esm.84052b48.js";import{s as c,j as l,a as m,i as p}from"./joplinApiGenerator.193dcce8.js";import{P as d}from"./PromiseUtil.a7bff535.js";import{f as u}from"./immer.esm.6f40434d.js";import{u as f}from"./useAsyncFn.fc0513d1.js";import"./index.5d30d163.js";const g=new class{constructor(e){this.config=e}getUnusedResource(){return d.warpOnEvent((async e=>{const t=await c.pageToAllList(this.config.resourceApi.list.bind(this.config.resourceApi),{fields:["id","title","mime"]});let r=0;return await n.filter(t,a((async s=>{const o=!(await this.checkUsed(s.id));return e.process({title:s.title,all:t.length,rate:r++}),o}),10))}))}async checkUsed(e){return(await this.config.searchApi.search({query:`"](:/${e})"`})).items.length>0}}(l);const h=function(e){const t=e();return e=>`http://localhost:${null==t?void 0:t.port}/resources/${e}/file?token=${null==t?void 0:t.token}`}((()=>m(localStorage).settings));export default()=>{const[n,a]=e.exports.useState([]),[c,m]=e.exports.useState(""),[d,x]=f((async()=>{try{const e=await g.getUnusedResource().on("process",(e=>{m(`[${e.rate}/${e.all}] 正在检查资源 ${e.title}`)}));console.log("list: ",e),a(e)}catch(e){t.error("请检查 joplin token/port 配置")}}));return e.exports.createElement(r,{title:"检查未使用的资源",extra:e.exports.createElement(s,{onClick:x},"检查")},e.exports.createElement(o,{dataSource:n,locale:{emptyText:"没有找到任何未使用的附件资源"},renderItem:t=>e.exports.createElement(o.Item,{key:t.id,actions:[e.exports.createElement(s,{onClick:()=>async function(e){a(u((t=>t.filter((t=>t.id!==e))))),await l.resourceApi.remove(e)}(t.id)},"删除"),e.exports.createElement(s,{onClick:()=>async function(e){await p(h(e))}(t.id)},"下载")],extra:t.mime.startsWith("image/")&&e.exports.createElement(i,{src:h(t.id),width:300})},e.exports.createElement(o.Item.Meta,{title:t.title})),loading:{spinning:d.loading,tip:c}}))};
