/* empty css              */import{d as S,J as W,u as L,g as D,r as u,o as m,c as N,a as c,k as h,b as e,w as t,K as q,i as E,n as i,L as z,N as J,B as K,O as P,P as G,R as X,Q as Y,D as Z,j as g,S as ee,U as te,e as oe,h as ne,M as se,H as ae,V as ue,W as ce,z as A,X as M,Y as ie,T as _e,Z as re,_ as le,$ as de}from"./index.1f476c61.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{_ as me}from"./logo.7fbeff0b.js";import{_ as pe}from"./lodash.d35405da.js";import{u as U,k as fe}from"./user.42c413bc.js";/* empty css                */import"./request.c7b83a79.js";const he={class:"p-2 h-16 flex justify-between items-center user-drag border-b"},ye={class:"flex items-center jusitify-between"},ve=c("div",{class:"font-youshe text-[1.8rem] text-black ml-2"},"\u82F1\u96C4\u8054\u76DF\u5BF9\u5C40\u52A9\u624B",-1),ge={class:"w-[200px] ml-[6rem] no-drag"},ke={class:"flex justify-between items-center no-drag"},Ee={class:"flex items-center justify-center"},Fe=["src"],we={class:"mx-2 text-gray-900"},xe=c("span",{class:"mx-2"},"\u8D26\u53F7\u4FE1\u606F",-1),Be=c("span",{class:"text-red-500 mx-2"},"\u9000\u51FA\u767B\u5165",-1),Se=i("\u5173\u95ED\u7A97\u53E3\u81F3\u7CFB\u7EDF\u6258\u76D8"),be=i("\u9000\u51FA\u5E94\u7528\u7A0B\u5E8F"),$e=S({__name:"Header",setup(b){const p=window.electron.shell,s=U(),a=W(),y=L(),r=D(!1),n=D(""),v=_=>{_=="0"&&y.push({name:"account"}),_=="1"&&s.logout()},l=()=>{f(n.value),y.push({path:"/search-content",query:{summonerName:n.value}})},f=_=>{let o=JSON.parse(localStorage.getItem("rencently:summoner:search"));pe.findIndex(o,x=>x==_)==-1&&(o.push(_),localStorage.setItem("rencently:summoner:search",JSON.stringify(o)))},F=()=>{a.rememberQuit?E.invoke("controller.common.mainWindowClose",{}):r.value=!0},w=()=>{a.rememberQuit=!0,a.changeConfig(),E.invoke("controller.common.mainWindowClose",{})};return(_,o)=>{const k=z,x=J,Q=u("icon-down"),B=K,$=P,R=G,j=u("icon-minus"),O=u("icon-close"),C=X,T=Y,H=Z;return m(),N("header",he,[c("div",ye,[c("img",{class:"w-10 no-drag cursor-pointer",src:me,onClick:o[0]||(o[0]=d=>h(p).openExternal("https://lol-tool.com"))}),ve,c("div",ge,[e(k,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=d=>n.value=d),placeholder:"\u5FEB\u901F\u641C\u7D22\u73A9\u5BB6\u6218\u7EE9",onSearch:l,onEnter:l},null,8,["modelValue"])])]),c("div",ke,[e(R,{class:"!mr-4",onSelect:v},{content:t(()=>[e($,{value:"0"},{default:t(()=>[xe]),_:1}),e($,{value:"1"},{default:t(()=>[Be]),_:1})]),default:t(()=>[e(B,{type:"text"},{default:t(()=>[c("div",Ee,[e(x,{size:26},{default:t(()=>[c("img",{src:h(s).avatarUrl},null,8,Fe)]),_:1}),c("span",we,q(h(s).nickName),1),e(Q,{class:"!text-gray-900"})])]),_:1})]),_:1}),e(B,{class:"!p-1 !mr-1 !ml-4",type:"text",onClick:o[2]||(o[2]=d=>h(E).invoke("controller.common.mainWindowMinisize",{}))},{icon:t(()=>[e(j)]),_:1}),e(B,{class:"!p-1 !mx-1",type:"text",onClick:F},{icon:t(()=>[e(O)]),_:1})]),e(H,{visible:r.value,"onUpdate:visible":o[4]||(o[4]=d=>r.value=d),width:"40%",title:"\u5173\u95ED\u7A97\u53E3\u65B9\u5F0F\uFF08\u8BBE\u7F6E\u4E2D\u53EF\u66F4\u6539\uFF09",draggable:"",okText:"\u786E\u5B9A\u5E76\u8BB0\u4F4F\u9009\u62E9",onOk:w},{default:t(()=>[e(T,{modelValue:h(a).quitMethod,"onUpdate:modelValue":o[3]||(o[3]=d=>h(a).quitMethod=d),direction:"vertical"},{default:t(()=>[e(C,{value:"1"},{default:t(()=>[Se]),_:1}),e(C,{value:"0"},{default:t(()=>[be]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["visible"])])}}});const Ce=i(" \u8D26\u53F7\u4FE1\u606F "),De=i(" \u5BF9\u5C40\u9762\u677F "),Ae=i(" \u6218\u7EE9\u67E5\u8BE2 "),Me=i(" \u5E38\u7528\u529F\u80FD "),Ve=i(" \u81EA\u52A8\u7981\u9009 "),Ie=i(" \u9ED1\u540D\u5355 "),Le=i(" \u82F1\u96C4\u6570\u636E "),Ne=i(" \u8BBE\u7F6E "),Ue=S({__name:"Menu",setup(b){const p=L(),s=a=>{p.push({name:a})};return(a,y)=>{const r=u("icon-dashboard"),n=ee,v=u("icon-list"),l=u("icon-search"),f=u("icon-apps"),F=u("icon-send"),w=u("icon-user-group"),_=u("icon-bar-chart"),o=u("icon-settings"),k=te;return m(),g(k,{style:{height:"100%","padding-top":"8px"},collapsed:!1,"default-selected-keys":"home",accordion:!0,onMenuItemClick:s},{default:t(()=>[e(n,{key:"home"},{default:t(()=>[e(r),Ce]),_:1}),e(n,{key:"panel"},{default:t(()=>[e(v),De]),_:1}),e(n,{key:"history"},{default:t(()=>[e(l),Ae]),_:1}),e(n,{key:"func"},{default:t(()=>[e(f),Me]),_:1}),e(n,{key:"autobp"},{default:t(()=>[e(F),Ve]),_:1}),e(n,{key:"blacklist"},{default:t(()=>[e(w),Ie]),_:1}),e(n,{key:"champdata"},{default:t(()=>[e(_),Le]),_:1}),e(n,{key:"setting"},{default:t(()=>[e(o),Ne]),_:1})]),_:1})}}}),V=oe(),I=U(),Qe=async()=>{I.username||I.myInfo({mac:V.mac,clientVersion:V.version})},Re={class:"h-full w-full main-container bg-white"},Ze=S({__name:"Layout",setup(b){let p;return ne(async()=>{await Qe(),E.ipc.on("listenUpdateInfo",(s,a)=>{se[a.type]({content:a.msg,duration:1500})}),p=window.setInterval(async()=>{ae()&&await fe()},1e3*60*5)}),ue(()=>{window.clearInterval(p)}),(s,a)=>{const y=re,r=le,n=u("router-view"),v=de,l=ce;return m(),N("div",Re,[e(l,{style:{height:"100%"}},{default:t(()=>[e(y,null,{default:t(()=>[e($e)]),_:1}),e(l,null,{default:t(()=>[e(r,{width:180},{default:t(()=>[e(Ue)]),_:1}),e(v,{class:"layout-content p-2"},{default:t(()=>[e(n,null,{default:t(({Component:f})=>[(m(),g(ie,null,[s.$route.meta.keepAlive?(m(),g(A(f),{key:s.$route.name})):M("",!0)],1024)),s.$route.meta.keepAlive?M("",!0):(m(),g(_e,{key:0,mode:"out-in",duration:300,"enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"},{default:t(()=>[(m(),g(A(f),{key:s.$route.name}))]),_:2},1024))]),_:1})]),_:1})]),_:1})]),_:1})])}}});export{Ze as default};
