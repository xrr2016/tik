/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css              *//* empty css                *//* empty css              *//* empty css                */import{r as Y,s as Z}from"./options.cdf8f011.js";import{d as ee,g as S,J as ue,f as H,c as F,b as e,w as u,k as o,i as _,M as N,r as I,s as te,D as ae,o as d,a7 as b,a8 as A,j as w,n as f,K as v,a as D,a9 as ne,F as oe,aa as le,a6 as se,a1 as ce,ab as re,ac as ie,L as de,B as me,p as pe,ad as _e,ae as fe}from"./index.1f476c61.js";import{_ as Fe}from"./lodash.d35405da.js";const R=""+new URL("QrCode.cc08f117.jpg",import.meta.url).href,ge={class:"w-full h-full flex"},Ce=f("\u70B9\u51FB\u521B\u5EFA"),he=f("\u70B9\u51FB\u9009\u62E9"),Be=D("img",{width:"200",src:R,alt:""},null,-1),ke=D("img",{width:"200",src:R,alt:""},null,-1),Ee=f("\u751F\u6DAF\u80CC\u666F\u4FEE\u6539"),be={class:"flex flex-col items-center justify-center"},Ae={class:"mb-2 flex w-full justify-center"},Re=ee({__name:"func",setup(we){const z=window.ddragonStore.get("champions"),P=S(z),l=ue(),g=H({ranked:"",status:"",spectator:""}),y=S(!1),V=S([]),s=H({curChampionId:null,curSkins:"",skinImg:"some-error.png",imgTitle:"",imgDesc:""}),x=async(n,t)=>{let c;console.log(t),console.log(n),n=="ranked"?c=await _.invoke("controller.lcuHandle.changeTiger",{tiger:t}):n=="status"&&(c=await _.invoke("controller.lcuHandle.changeStatus",{status:t})),C(c,"\u64CD\u4F5C\u6210\u529F","\u64CD\u4F5C\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u5DF2\u6B63\u5E38\u542F\u52A8")},$=async n=>{const t=await _.invoke("controller.lcuHandle.spectatorLaunchByName",{summonerName:n,mode:"RANKED_SOLO_5x5"});C(t,"\u62C9\u8D77\u89C2\u6218\u6210\u529F\uFF0C\u7B49\u5F85\u5BA2\u6237\u7AEF\u54CD\u5E94","\u62C9\u8D77\u89C2\u6218\u53D1\u751F\u5F02\u5E38\uFF0C\u5BA2\u6237\u7AEF\u672A\u542F\u52A8\u6216\u5BF9\u65B9\u4E0D\u5728\u53EC\u5524\u5E08\u5CE1\u8C37\u5730\u56FE\u6E38\u620F\u4E2D")},q=async()=>{const n=await _.invoke("controller.lcuHandle.createCustomLobby",{gameMode:"PRACTICETOOL",mapId:11,lobbyName:"Tik \u82F1\u96C4\u8054\u76DF\u5BF9\u5C40\u52A9\u624B5V5\u8BAD\u7EC3\u6A21\u5F0F"+Math.random()*100});C(n,"\u521B\u5EFA\u6210\u529F","\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u542F\u52A8")},j=async n=>{if(n==="champions"){const t=await _.invoke("controller.lcuHandle.getChampionSkinListById",{skinId:s.curChampionId});V.value=t.skins,s.imgTitle=t.title,s.imgDesc=t.shortBio}n==="skins"&&Fe.forEach(V.value,async t=>{if(t.id===s.curSkins){const c=await _.invoke("controller.lcuHandle.getLcuImgBase64",{imgUrl:t.splashPath});s.skinImg=c;return}})},K=async()=>{const n=await _.invoke("controller.lcuHandle.setBackgroundSkinId",{key:"backgroundSkinId",value:s.curSkins});C(n,"\u751F\u6DAF\u80CC\u666F\u4FEE\u6539\u6210\u529F","\u4FEE\u6539\u5931\u8D25")},C=(n,t,c)=>{n?N.success({content:t,duration:2e3}):N.error({content:c,duration:2e3})};return(n,t)=>{const c=I("icon-check"),h=I("icon-close"),B=ne,r=oe,i=le,m=se,U=ce,k=re,E=ie,W=de,L=me,M=pe,T=I("icon-question-circle-fill"),O=_e,J=te,Q=fe,G=ae;return d(),F("div",ge,[e(J,{class:"flex flex-col h-full",model:o(l),"auto-label-width":""},{default:u(()=>[e(U,{hoverable:!0,"header-style":{border:"none"}},{default:u(()=>[e(m,{gutter:12,align:"center","justify-content":"space-between"},{default:u(()=>[e(i,{span:6},{default:u(()=>[e(r,{class:"!mb-0",label:"\u81EA\u52A8\u63A5\u6536\u5BF9\u5C40"},{default:u(()=>[e(B,{modelValue:o(l).autoAccept,"onUpdate:modelValue":t[0]||(t[0]=a=>o(l).autoAccept=a),onChange:o(l).changeConfig},{"checked-icon":u(()=>[e(c)]),"unchecked-icon":u(()=>[e(h)]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1}),e(i,{span:6},{default:u(()=>[e(r,{class:"!mb-0",label:"\u624B\u52A8\u6280\u80FD\u8BA1\u65F6"},{default:u(()=>[e(B,{modelValue:o(l).spellsWin.enable,"onUpdate:modelValue":t[1]||(t[1]=a=>o(l).spellsWin.enable=a),onChange:o(l).changeConfig},{"checked-icon":u(()=>[e(c)]),"unchecked-icon":u(()=>[e(h)]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1}),e(i,{span:6},{default:u(()=>[e(r,{class:"!mb-0",label:"\u81EA\u52A8\u9501\u5B9A\u82F1\u96C4"},{default:u(()=>[e(B,{modelValue:o(l).confirmSelect,"onUpdate:modelValue":t[2]||(t[2]=a=>o(l).confirmSelect=a),onChange:o(l).changeConfig},{"checked-icon":u(()=>[e(c)]),"unchecked-icon":u(()=>[e(h)]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1}),e(i,{span:6},{default:u(()=>[e(r,{class:"!mb-0",label:"\u5F00\u5C40\u7981\u8A00"},{default:u(()=>[e(B,{modelValue:o(l).autoMuteAll,"onUpdate:modelValue":t[3]||(t[3]=a=>o(l).autoMuteAll=a),onChange:o(l).changeConfig},{"checked-icon":u(()=>[e(c)]),"unchecked-icon":u(()=>[e(h)]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1})]),_:1})]),_:1}),e(U,{class:"mt-2 flex-auto",hoverable:!0,"header-style":{border:"none"}},{default:u(()=>[e(m,{gutter:42,align:"center","justify-content":"space-between"},{default:u(()=>[e(i,{span:12},{default:u(()=>[e(r,{class:"",label:"\u6BB5\u4F4D\u4F2A\u9020"},{default:u(()=>[e(E,{modelValue:g.ranked,"onUpdate:modelValue":t[4]||(t[4]=a=>g.ranked=a),onChange:t[5]||(t[5]=a=>x("ranked",a)),placeholder:"\u8BF7\u9009\u62E9\u9700\u8981\u66F4\u6539\u7684\u6BB5\u4F4D","allow-clear":"","allow-search":""},{default:u(()=>[(d(!0),F(b,null,A(o(Y),(a,p)=>(d(),w(k,{key:p,value:a.value},{default:u(()=>[f(v(a.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,{gutter:42,align:"center","justify-content":"space-between"},{default:u(()=>[e(i,{span:12},{default:u(()=>[e(r,{class:"",label:"\u72B6\u6001\u66F4\u6539"},{default:u(()=>[e(E,{modelValue:g.status,"onUpdate:modelValue":t[6]||(t[6]=a=>g.status=a),onChange:t[7]||(t[7]=a=>x("status",a)),placeholder:"\u8BF7\u9009\u62E9\u9700\u8981\u66F4\u6539\u7684\u72B6\u6001","allow-clear":"","allow-search":""},{default:u(()=>[(d(!0),F(b,null,A(o(Z),(a,p)=>(d(),w(k,{key:p,value:a.value},{default:u(()=>[f(v(a.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,{gutter:42,align:"center","justify-content":"space-between"},{default:u(()=>[e(i,{span:12},{default:u(()=>[e(r,{class:"",label:"\u62C9\u8D77\u89C2\u6218"},{default:u(()=>[e(W,{onSearch:$,"search-button":"",placeholder:"\u8BF7\u8F93\u5165\u9700\u8981\u89C2\u6218\u7684\u73A9\u5BB6\u6E38\u620F\u540D"})]),_:1})]),_:1})]),_:1}),e(m,{gutter:42,align:"center","justify-content":"space-between"},{default:u(()=>[e(i,{span:12},{default:u(()=>[e(r,{class:"",label:"5v5\u8BAD\u7EC3\u6A21\u5F0F"},{default:u(()=>[e(L,{type:"primary",long:"",size:"large",onClick:q},{default:u(()=>[Ce]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{gutter:42,align:"center","justify-content":"space-between"},{default:u(()=>[e(i,{span:12},{default:u(()=>[e(r,{label:"\u751F\u6DAF\u80CC\u666F\u4FEE\u6539"},{default:u(()=>[e(L,{type:"primary",long:"",size:"large",onClick:t[8]||(t[8]=a=>y.value=!0)},{default:u(()=>[he]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{gutter:42,align:"center","justify-content":"space-between"},{default:u(()=>[e(i,{span:12},{default:u(()=>[e(r,{label:"\u9690\u85CF\u5206\u67E5\u8BE2"},{default:u(()=>[e(M,{placeholder:"\u8BF7\u524D\u5F80\u5C0F\u7A0B\u5E8F\u67E5\u770B",disabled:!0}),e(O,null,{content:u(()=>[Be]),default:u(()=>[e(T,{class:"mx-1",size:"20px"})]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{gutter:42,align:"center","justify-content":"space-between"},{default:u(()=>[e(i,{span:12},{default:u(()=>[e(r,{class:"!mb-0",label:"\u672C\u547D\u82F1\u96C4\u67E5\u8BE2"},{default:u(()=>[e(M,{placeholder:"\u8BF7\u524D\u5F80\u5C0F\u7A0B\u5E8F\u67E5\u770B",disabled:!0}),e(O,null,{content:u(()=>[ke]),default:u(()=>[e(T,{class:"mx-1",size:"20px"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),e(G,{visible:y.value,"onUpdate:visible":t[13]||(t[13]=a=>y.value=a),width:"70%",simple:!0,draggable:!0,onOk:K},{title:u(()=>[Ee]),default:u(()=>[D("div",be,[D("div",Ae,[e(E,{class:"!w-[40%]",modelValue:s.curChampionId,"onUpdate:modelValue":t[9]||(t[9]=a=>s.curChampionId=a),onChange:t[10]||(t[10]=a=>j("champions")),placeholder:"\u8BF7\u9009\u62E9\u82F1\u96C4 \u53EF\u641C\u7D22","allow-clear":"","allow-search":""},{default:u(()=>[(d(!0),F(b,null,A(P.value,(a,p,X)=>(d(),w(k,{key:X,value:a.championId},{default:u(()=>[f(v(p),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(E,{class:"!w-[40%] ml-2",modelValue:s.curSkins,"onUpdate:modelValue":t[11]||(t[11]=a=>s.curSkins=a),onChange:t[12]||(t[12]=a=>j("skins")),placeholder:"\u8BF7\u9009\u62E9\u76AE\u80A4 \u53EF\u641C\u7D22","allow-clear":"","allow-search":""},{default:u(()=>[(d(!0),F(b,null,A(V.value,(a,p)=>(d(),w(k,{key:p,value:a.id},{default:u(()=>[f(v(a.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),e(Q,{width:"640",height:"360",src:s.skinImg,title:s.imgTitle,description:s.imgDesc},null,8,["src","title","description"])])]),_:1},8,["visible"])])}}});export{Re as default};
