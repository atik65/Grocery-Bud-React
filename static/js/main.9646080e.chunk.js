(this["webpackJsonpgrocery-bud"]=this["webpackJsonpgrocery-bud"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(7),r=n.n(a),s=(n(13),n(8)),l=n(6),o=n(2),d=(n(14),n(0)),j=function(e){var t=e.item,n=e.handleRemove,c=e.handleEdit;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"singleItem my-2",children:[Object(d.jsx)("div",{className:"me-5",children:t.text}),Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)("button",{onClick:function(){return c(t.id)},children:Object(d.jsx)("i",{class:"fas fa-edit    "})}),Object(d.jsx)("button",{onClick:function(){return n(t.id)},children:Object(d.jsx)("i",{class:"fas fa-trash    "})})]})]})})},u=function(e){var t=e.list,n=e.handleRemove,c=e.handleEdit,i=e.removeAll;return Object(d.jsxs)(d.Fragment,{children:[" ",Object(d.jsx)("div",{className:"mt-3",children:t.map((function(e){return Object(d.jsx)(j,{item:e,handleRemove:n,handleEdit:c})}))}),Object(d.jsx)("div",{className:"text-center mt-4",children:Object(d.jsx)("button",{onClick:i,className:"btn btn-sm btn-outline-danger",children:"Clear All"})})]})},b=function(e){var t=e.alert,n=e.alertShow,i=e.list,a=t.title,r=t.color;return Object(c.useEffect)((function(){var e=setTimeout((function(){n()}),2e3);return function(){clearTimeout(e)}}),[i]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{class:"alertStyle alert-".concat(r),children:Object(d.jsx)("p",{children:a})})})};var m=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),r=Object(o.a)(a,2),j=r[0],m=r[1],h=Object(c.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[{id:123456,text:"Grocery Item one"},{id:789456,text:"Grocery Item two"}]),f=Object(o.a)(h,2),O=f[0],x=f[1],v=Object(c.useState)(!1),g=Object(o.a)(v,2),p=g[0],S=g[1],N=Object(c.useState)({show:!1,title:"",color:""}),y=Object(o.a)(N,2),I=y[0],w=y[1];Object(c.useEffect)((function(){localStorage.setItem("list",JSON.stringify(O))}),[O]);var E=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";w({show:e,title:t,color:n})};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container section",children:Object(d.jsxs)("div",{className:"main",children:[Object(d.jsxs)("div",{className:"form-design",children:[Object(d.jsx)("h1",{className:"my-4",children:"Grocery Bud"}),I.show?Object(d.jsx)(b,{alert:I,alertShow:E,list:O}):null,Object(d.jsxs)("form",{className:"d-flex",onSubmit:function(e){if(e.preventDefault(),n)if(n&&p)E(!0,"Item Edited","success"),x(O.map((function(e){return e.id==j?Object(l.a)(Object(l.a)({},e),{},{text:n}):e}))),S(!1);else{var t={id:"".concat((new Date).getTime().toString()),text:n};x([].concat(Object(s.a)(O),[t])),E(!0,"Item Added ","success")}else E(!0,"name can't be empty","danger");i("")},children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"text",className:"form-control","aria-describedby":"helpId",placeholder:"Add item",value:n,onChange:function(e){i(e.target.value)}})}),Object(d.jsx)("button",{type:"submit",className:" mx-2 btn btn-outline-primary",children:p?"Edit":"Add"})]})]}),Object(d.jsx)(u,{list:O,handleRemove:function(e){var t=O.filter((function(t){return t.id!==e}));x(t),E(!0,"Item Removed ","danger")},handleEdit:function(e){var t=O.find((function(t){return t.id===e}));S(!0),m(e),i(t.text)},removeAll:function(){x([])}})]})})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.9646080e.chunk.js.map