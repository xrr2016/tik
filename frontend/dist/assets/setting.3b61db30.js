/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css                *//* empty css              *//* empty css                *//* empty css                */import{k as N,a as U}from"./options.cdf8f011.js";import{d as P,J,e as K,f as L,ap as O,c as x,a as d,b as e,w as l,k as u,r as W,a1 as X,s as Q,o as f,a7 as S,a8 as T,j as $,n as s,K as p,i as Y,a9 as Z,F as ee,aa as le,a6 as ue,aq as te,R as ae,an as oe,ab as ne,ac as se,ad as de,p as ie,Q as pe,B as re}from"./index.1f476c61.js";import{c as j}from"./tools.efc60dd7.js";const ce={class:"w-full h-full flex"},me={class:"flex flex-col w-[82%] h-full !mr-1"},fe=d("div",{class:"text-base font-medium text-gray-500 !mb-4"},"\u53D1\u9001\u8BBE\u7F6E",-1),_e={class:"pl-3"},ge=s("\u6240\u6709\u4EBA\u53EF\u89C1 "),Ce=s(" \u4EC5\u81EA\u5DF1\u53EF\u89C1"),be=d("div",{class:"text-base font-medium text-gray-500 !mb-4"},"\u81EA\u5B9A\u5FEB\u6377\u952E",-1),Ee={class:"ml-4 text-gray-600"},Fe={class:"ml-4 text-gray-600"},he={class:"ml-4 text-gray-600"},xe={class:"ml-4 text-gray-600"},ye=d("div",{class:"text-base font-medium text-gray-500 !mb-4"},"\u81EA\u5B9A\u4E49\u79F0\u53F7",-1),Be=d("div",{class:"text-base font-medium text-gray-500 !mb-4"},"\u5E94\u7528\u8BBE\u7F6E",-1),ke=s("\u5173\u95ED\u6309\u94AE"),Ve=s("\u6700\u5C0F\u5316\u5230\u6258\u76D8"),ve=s("\u9000\u51FA\u5E94\u7528\u7A0B\u5E8F"),De=s("\u5F53\u524D\u7248\u672C"),Ae=s("\u68C0\u67E5\u66F4\u65B0"),we=s("\u8BBE\u5907\u7F16\u7801"),Ue=s("\u70B9\u51FB\u590D\u5236"),Se=s("\u4EA4\u6D41\u53CD\u9988"),Te=d("span",null,"914241626",-1),$e=s("\u70B9\u51FB\u52A0\u7FA4"),qe=s("\u65E5\u5FD7\u8DEF\u5F84"),Ne=s("\u6253\u5F00\u8DEF\u5F84"),We=s("\u914D\u7F6E\u6587\u4EF6"),je=s("\u6253\u5F00\u6587\u4EF6"),ul=P({__name:"setting",setup(Re){const o=J(),r=K(),y=window.appStore,q=window.electron.shell,R="https://qm.qq.com/cgi-bin/qm/qr?k=9HNfbMmM3ISfaX2YBjyJrD5r_Xgt8Bio&jump_from=webapi",E=L({spellsWin:"",order:"",chaos:"",muteAll:""});O(async()=>{_("spellsWin"),_("order"),_("chaos"),_("muteAll")});const H=()=>{Y.invoke("controller.common.checkUpdate",{})},_=B=>{o.changeConfig();let t;B=="spellsWin"?t=y.get("spellsWin.key"):t=y.get(`keys.${B}`),console.log(y.get("spellsWin.key")),console.log(y.get("keys.chaos"));let c="";if(t.length==0&&(c="\u65E0\u5FEB\u6377\u952E"),t.length==1&&(c=N[t]),t.length>1)for(let g=0;g<t.length;g++){const b=t[g];g!=t.length-1?c+=`${N[b]} + `:c+=`${N[b]}`}E[B]=c};return(B,t)=>{const c=W("icon-check"),g=W("icon-close"),b=Z,i=ee,n=le,m=ue,M=te,k=ae,z=oe,V=X,v=ne,D=se,A=W("icon-question-circle-fill"),w=de,F=ie,G=Q,I=pe,h=re;return f(),x("div",ce,[d("div",me,[e(G,{model:u(o)},{default:l(()=>[e(V,{hoverable:!0,"header-style":{border:"none"}},{default:l(()=>[fe,d("div",_e,[e(m,null,{default:l(()=>[e(n,{span:8},{default:l(()=>[e(i,{class:"","label-col-flex":"74px",label:"\u5FEB\u6377\u952E\u53D1\u9001"},{default:l(()=>[e(b,{modelValue:u(o).enableSendHourse,"onUpdate:modelValue":t[0]||(t[0]=a=>u(o).enableSendHourse=a),onChange:u(o).changeConfig},{"checked-icon":l(()=>[e(c)]),"unchecked-icon":l(()=>[e(g)]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1}),e(n,{span:8},{default:l(()=>[e(i,{class:"","label-col-flex":"84px",label:"\u53D1\u9001\u7EC4\u6392\u4FE1\u606F"},{default:l(()=>[e(b,{modelValue:u(o).sendTogetherGame,"onUpdate:modelValue":t[1]||(t[1]=a=>u(o).sendTogetherGame=a),onChange:u(o).changeConfig},{"checked-icon":l(()=>[e(c)]),"unchecked-icon":l(()=>[e(g)]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(n,{span:8},{default:l(()=>[e(i,{class:"","label-col-flex":"74px",label:"\u4EC5\u6392\u4F4D\u6570\u636E"},{default:l(()=>[e(b,{modelValue:u(o).onlyRankData,"onUpdate:modelValue":t[2]||(t[2]=a=>u(o).onlyRankData=a),onChange:u(o).changeConfig},{"checked-icon":l(()=>[e(c)]),"unchecked-icon":l(()=>[e(g)]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1}),e(n,{span:8},{default:l(()=>[e(i,{class:"","label-col-flex":"74px",label:"\u53D1\u9001\u5C40\u6570"},{default:l(()=>[e(M,{modelValue:u(o).matchCount,"onUpdate:modelValue":t[3]||(t[3]=a=>u(o).matchCount=a),class:"input-demo",min:1,max:10,onChange:u(o).changeConfig},null,8,["modelValue","onChange"])]),_:1})]),_:1})]),_:1}),e(i,{class:"!mb-0","label-col-flex":"74px",label:"\u9ED1\u540D\u5355\u63D0\u9192"},{default:l(()=>[e(z,{size:"large"},{default:l(()=>[e(k,{modelValue:u(o).blacklistNoticeAll,"onUpdate:modelValue":t[4]||(t[4]=a=>u(o).blacklistNoticeAll=a),value:!0,onChange:u(o).changeConfig},{default:l(()=>[ge]),_:1},8,["modelValue","onChange"]),e(k,{modelValue:u(o).blacklistNoticeAll,"onUpdate:modelValue":t[5]||(t[5]=a=>u(o).blacklistNoticeAll=a),value:!1,onChange:u(o).changeConfig},{default:l(()=>[Ce]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1})])]),_:1}),e(V,{class:"mt-2",hoverable:!0,"header-style":{border:"none"}},{default:l(()=>[be,e(i,{field:"settingsStore.app.spellsWin.key","label-col-flex":"74px",label:"\u6280\u80FD\u7A97\u53E3"},{default:l(()=>[e(D,{disabled:!u(o).spellsWin.enable,modelValue:u(o).spellsWin.key,"onUpdate:modelValue":t[6]||(t[6]=a=>u(o).spellsWin.key=a),placeholder:"\u8BF7\u9009\u62E9\u5FEB\u6377\u952E\u7EC4\u5408",multiple:"",limit:2,onChange:t[7]||(t[7]=a=>_("spellsWin"))},{default:l(()=>[(f(!0),x(S,null,T(u(U),(a,C)=>(f(),$(v,{key:C,value:a.value},{default:l(()=>[s(p(a.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["disabled","modelValue"]),e(w,null,{content:l(()=>[d("span",Ee,"\u8BBE\u7F6E\u4E3A\uFF1A"+p(E.spellsWin),1)]),default:l(()=>[e(A,{class:"mx-1",size:"20px"})]),_:1})]),_:1}),e(i,{"label-col-flex":"74px",label:"\u53D1\u9001\u53CB\u519B"},{default:l(()=>[e(D,{disabled:!u(o).enableSendHourse,modelValue:u(o).keys.order,"onUpdate:modelValue":t[8]||(t[8]=a=>u(o).keys.order=a),placeholder:"\u8BF7\u9009\u62E9\u5FEB\u6377\u952E\u7EC4\u5408",multiple:"",limit:2,onChange:t[9]||(t[9]=a=>_("order"))},{default:l(()=>[(f(!0),x(S,null,T(u(U),(a,C)=>(f(),$(v,{key:C,value:a.value},{default:l(()=>[s(p(a.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["disabled","modelValue"]),e(w,null,{content:l(()=>[d("span",Fe,"\u8BBE\u7F6E\u4E3A\uFF1A"+p(E.order),1)]),default:l(()=>[e(A,{class:"mx-1",size:"20px"})]),_:1})]),_:1}),e(i,{"label-col-flex":"74px",label:"\u53D1\u9001\u654C\u519B"},{default:l(()=>[e(D,{disabled:!u(o).enableSendHourse,modelValue:u(o).keys.chaos,"onUpdate:modelValue":t[10]||(t[10]=a=>u(o).keys.chaos=a),placeholder:"\u8BF7\u9009\u62E9\u5FEB\u6377\u952E\u7EC4\u5408",multiple:"",limit:2,onChange:t[11]||(t[11]=a=>_("chaos"))},{default:l(()=>[(f(!0),x(S,null,T(u(U),(a,C)=>(f(),$(v,{key:C,value:a.value},{default:l(()=>[s(p(a.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["disabled","modelValue"]),e(w,null,{content:l(()=>[d("span",he,"\u8BBE\u7F6E\u4E3A\uFF1A"+p(E.chaos),1)]),default:l(()=>[e(A,{class:"mx-1",size:"20px"})]),_:1})]),_:1}),e(i,{class:"!mb-0","label-col-flex":"74px",label:"\u5168\u4F53\u7981\u8A00"},{default:l(()=>[e(D,{disabled:!u(o).enableSendHourse,modelValue:u(o).keys.muteAll,"onUpdate:modelValue":t[12]||(t[12]=a=>u(o).keys.muteAll=a),placeholder:"\u8BF7\u9009\u62E9\u5FEB\u6377\u952E\u7EC4\u5408",multiple:"",limit:2,onChange:t[13]||(t[13]=a=>_("muteAll"))},{default:l(()=>[(f(!0),x(S,null,T(u(U),(a,C)=>(f(),$(v,{key:C,value:a.value},{default:l(()=>[s(p(a.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["disabled","modelValue"]),e(w,null,{content:l(()=>[d("span",xe,"\u8BBE\u7F6E\u4E3A\uFF1A"+p(E.muteAll),1)]),default:l(()=>[e(A,{class:"mx-1",size:"20px"})]),_:1})]),_:1})]),_:1}),e(V,{class:"mt-2",hoverable:!0,"header-style":{border:"none"}},{default:l(()=>[ye,e(m,{align:"center"},{default:l(()=>[e(n,{span:8},{default:l(()=>[e(i,{"label-col-flex":"50px",label:"\u7B2C\u4E00"},{default:l(()=>[e(F,{modelValue:u(o).typeTitle[0],"onUpdate:modelValue":t[14]||(t[14]=a=>u(o).typeTitle[0]=a),placeholder:"\u8BF7\u8F93\u5165\u8BE5\u6392\u540D\u79F0\u53F7","allow-clear":"",onChange:u(o).changeConfig},null,8,["modelValue","onChange"])]),_:1})]),_:1}),e(n,{span:8},{default:l(()=>[e(i,{"label-col-flex":"50px",label:"\u7B2C\u4E8C"},{default:l(()=>[e(F,{modelValue:u(o).typeTitle[1],"onUpdate:modelValue":t[15]||(t[15]=a=>u(o).typeTitle[1]=a),placeholder:"\u8BF7\u8F93\u5165\u8BE5\u6392\u540D\u79F0\u53F7","allow-clear":"",onChange:u(o).changeConfig},null,8,["modelValue","onChange"])]),_:1})]),_:1}),e(n,{span:8},{default:l(()=>[e(i,{"label-col-flex":"50px",label:"\u7B2C\u4E09"},{default:l(()=>[e(F,{modelValue:u(o).typeTitle[2],"onUpdate:modelValue":t[16]||(t[16]=a=>u(o).typeTitle[2]=a),placeholder:"\u8BF7\u8F93\u5165\u8BE5\u6392\u540D\u79F0\u53F7","allow-clear":"",onChange:u(o).changeConfig},null,8,["modelValue","onChange"])]),_:1})]),_:1}),e(n,{span:8},{default:l(()=>[e(i,{class:"!mb-0","label-col-flex":"50px",label:"\u7B2C\u56DB"},{default:l(()=>[e(F,{modelValue:u(o).typeTitle[3],"onUpdate:modelValue":t[17]||(t[17]=a=>u(o).typeTitle[3]=a),placeholder:"\u8BF7\u8F93\u5165\u8BE5\u6392\u540D\u79F0\u53F7","allow-clear":"",onChange:u(o).changeConfig},null,8,["modelValue","onChange"])]),_:1})]),_:1}),e(n,{span:8},{default:l(()=>[e(i,{class:"!mb-0","label-col-flex":"50px",label:"\u7B2C\u4E94"},{default:l(()=>[e(F,{modelValue:u(o).typeTitle[4],"onUpdate:modelValue":t[18]||(t[18]=a=>u(o).typeTitle[4]=a),placeholder:"\u8BF7\u8F93\u5165\u8BE5\u6392\u540D\u79F0\u53F7","allow-clear":"",onChange:u(o).changeConfig},null,8,["modelValue","onChange"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),e(V,{class:"flex flex-col flex-auto h-full !ml-1",hoverable:!0,"header-style":{border:"none"}},{default:l(()=>[Be,e(m,{class:"py-2",gutter:12,align:"center",justify:"center"},{default:l(()=>[e(n,{span:6,class:"font-medium"},{default:l(()=>[ke]),_:1}),e(n,{span:16},{default:l(()=>[e(I,{modelValue:u(o).quitMethod,"onUpdate:modelValue":t[19]||(t[19]=a=>u(o).quitMethod=a),type:"button",onChange:u(o).changeConfig},{default:l(()=>[e(k,{value:"1"},{default:l(()=>[Ve]),_:1}),e(k,{value:"0"},{default:l(()=>[ve]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1}),e(m,{class:"py-2",gutter:12,align:"center",justify:"center"},{default:l(()=>[e(n,{span:6,class:""},{default:l(()=>[De]),_:1}),e(n,{span:8},{default:l(()=>[d("span",null,p(u(r).version),1)]),_:1}),e(n,{span:8},{default:l(()=>[e(h,{type:"text",onClick:H},{default:l(()=>[Ae]),_:1})]),_:1})]),_:1}),e(m,{class:"py-2",gutter:12,align:"center",justify:"center"},{default:l(()=>[e(n,{span:6,class:""},{default:l(()=>[we]),_:1}),e(n,{span:8},{default:l(()=>[d("span",null,p(u(r).mac),1)]),_:1}),e(n,{span:8},{default:l(()=>[e(h,{type:"text",onClick:t[20]||(t[20]=a=>u(j)(u(r).mac))},{default:l(()=>[Ue]),_:1})]),_:1})]),_:1}),e(m,{class:"py-2",gutter:12,align:"center",justify:"center"},{default:l(()=>[e(n,{span:6,class:""},{default:l(()=>[Se]),_:1}),e(n,{span:8},{default:l(()=>[Te]),_:1}),e(n,{span:8},{default:l(()=>[e(h,{type:"text",onClick:t[21]||(t[21]=a=>u(q).openExternal(R))},{default:l(()=>[$e]),_:1})]),_:1})]),_:1}),e(m,{class:"py-2",gutter:12,align:"center",justify:"center"},{default:l(()=>[e(n,{span:6,class:""},{default:l(()=>[qe]),_:1}),e(n,{span:8},{default:l(()=>[d("div",{class:"truncate w-full cursor-pointer",onClick:t[22]||(t[22]=a=>u(j)(u(r).logDir))},p(u(r).logDir),1)]),_:1}),e(n,{span:8},{default:l(()=>[e(h,{type:"text",onClick:t[23]||(t[23]=a=>u(q).openPath(u(r).logDir))},{default:l(()=>[Ne]),_:1})]),_:1})]),_:1}),e(m,{class:"py-2",gutter:12,align:"center",justify:"center"},{default:l(()=>[e(n,{span:6,class:""},{default:l(()=>[We]),_:1}),e(n,{span:8},{default:l(()=>[d("div",{class:"truncate w-full cursor-pointer",onClick:t[24]||(t[24]=a=>u(j)(u(r).configDir))},p(u(r).configDir),1)]),_:1}),e(n,{span:8},{default:l(()=>[e(h,{type:"text",onClick:t[25]||(t[25]=a=>u(q).openPath(u(r).configDir))},{default:l(()=>[je]),_:1})]),_:1})]),_:1})]),_:1})])}}});export{ul as default};
