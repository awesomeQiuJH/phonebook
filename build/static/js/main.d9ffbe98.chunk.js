(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(39)},20:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),u=n.n(c),o=(n(20),n(4)),i=n(2),l=n(3),m=n.n(l),f="/api/persons",d=function(){return m.a.get(f).then((function(e){return e.data}))},s=function(e){return m.a.post(f,e).then((function(e){return e.data}))},p=function(e){return m.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},b=function(e,t){return m.a.put("".concat(f,"/").concat(e),t).then((function(e){return e.data}))},h=(n(38),function(e){var t=e.filterValue,n=e.changeFilterValue;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:t,onChange:n}))}),v=function(e){var t=e.addPerson,n=e.newName,a=e.addNewName,c=e.newNub,u=e.addNewNub;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:c,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){var t=e.persons,n=e.deletePerson;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("p",{key:e.id},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return n(e)}},"delete"))})))},g=function(e){var t=e.message;if(!t.type)return null;var n="message"===t.type?"message":"error";return r.a.createElement("div",{className:n},t.content)},w=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),m=l[0],f=l[1],w=Object(a.useState)(""),y=Object(i.a)(w,2),N=y[0],j=y[1],O=Object(a.useState)(""),k=Object(i.a)(O,2),S=k[0],C=k[1],P=Object(a.useState)({type:"",content:""}),V=Object(i.a)(P,2),F=V[0],J=V[1];Object(a.useEffect)((function(){d().then((function(e){return c(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:F}),r.a.createElement(h,{filterValue:S,changeFilterValue:function(e){C(e.target.value);var t=n.filter((function(t){return t.name.toLocaleUpperCase().includes(e.target.value.toLocaleUpperCase())}));c(t)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(v,{addPerson:function(e){if(e.preventDefault(),n.every((function(e){return e.name!==m})))s({name:m,number:N}).then((function(e){c(n.concat(e)),J({type:"message",content:"Add ".concat(m)}),setTimeout((function(){J({type:"",content:""})}),3e3)}));else if(window.confirm("".concat(m,"\u5df2\u7ecf\u5728\u7535\u8bdd\u7c3f\u91cc\u4e86, \u662f\u5426\u8981\u66f4\u65b0\u5176\u7535\u8bdd\u53f7\u7801?"))){var t=n.find((function(e){return e.name===m})),a=Object(o.a)(Object(o.a)({},t),{},{number:N});b(t.id,a).then((function(e){c(n.map((function(n){return n.id===t.id?e:n}))),J({type:"message",content:"".concat(t.name," is updated")}),setTimeout((function(){J({type:"",content:""})}),3e3)})).catch((function(e){J({type:"error",content:"".concat(t.name," update occur error")})}))}f(""),j("")},newName:m,addNewName:function(e){f(e.target.value)},newNub:N,addNewNub:function(e){j(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(E,{persons:n,deletePerson:function(e){window.confirm("\u786e\u8ba4\u5220\u9664".concat(e.name))&&p(e.id).then((function(){c(n.filter((function(t){return t.id!==e.id})))})).catch((function(t){J({type:"error",content:"Person ".concat(e.name," was already removed from server")}),c(n.filter((function(t){return t.id!==e.id})))}))}}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d9ffbe98.chunk.js.map