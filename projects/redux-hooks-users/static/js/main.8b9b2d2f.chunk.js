(this["webpackJsonpredux-hooks"]=this["webpackJsonpredux-hooks"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),s=c(8),r=c.n(s),i=(c(21),c(22),c(5)),d=c(4),l=c(10);var o=function(e){var t=e.user_id,c=Object(l.a)(),a=c.handleSubmit,s=c.register,r=Object(d.c)((function(e){return e})),i=Object(d.b)();return r.forEach((function(e){e.id===t&&(document.getElementById("edit_name").value=e.name,document.getElementById("edit_age").value=e.age,document.getElementById("edit_place").value=e.place)})),Object(n.jsx)("div",{id:"edit-popup",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("span",{onClick:function(){document.getElementById("edit-popup").style.display="none"},className:"close-edit text-primary",children:"\xd7"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("form",{onSubmit:a((function(e){e.id=t,i({type:"updateUser",payload:e}),document.getElementById("edit-popup").style.display="none"})),children:Object(n.jsxs)("div",{className:"form-row",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{ref:s,type:"text",name:"name",className:"form-control edit-name",id:"edit_name",placeholder:"anonymous"})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{ref:s,type:"number",name:"age",className:"form-control edit-age",id:"edit_age",placeholder:"99"})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{ref:s,type:"text",name:"place",className:"form-control edit-place",id:"edit_place",placeholder:"somewhere else"})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("button",{className:"btn btn-success btn-add",type:"submit",children:"Update"})})]})})})]})})};var j=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(d.c)((function(e){return e})),l=Object(d.b)(),j=r.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.age}),Object(n.jsx)("td",{children:e.place}),Object(n.jsxs)("td",{className:"btns-user",children:[Object(n.jsx)("button",{className:"btn btn-edit btn-primary",onClick:function(){return t=e.id,s(t),void(document.getElementById("edit-popup").style.display="block");var t},children:"Edit"}),Object(n.jsx)("button",{className:"btn btn-remove btn-danger",onClick:function(){return t=e.id,void l(function(e){return{type:"removeUser",payload:e}}(t));var t},children:"Remove"})]})]},e.id)}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("section",{children:[Object(n.jsx)("div",{className:"section-title",children:"Users List"}),Object(n.jsx)("table",{className:"users",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{className:"table-head",children:[Object(n.jsx)("td",{children:"Name"}),Object(n.jsx)("td",{children:"Age"}),Object(n.jsx)("td",{children:"Location"}),Object(n.jsx)("td",{children:"settings"})]}),j]})})]}),Object(n.jsx)(o,{user_id:c})]})},m=function(){var e=Object(l.a)(),t=e.handleSubmit,c=e.register,a=Object(d.b)();return Object(n.jsxs)("section",{children:[Object(n.jsx)("div",{className:"section-title",children:"Add New User"}),Object(n.jsx)("form",{onSubmit:t((function(e){e.id=Math.floor(999*Math.random()),a(function(e){return{type:"addUser",payload:e}}(e))})),children:Object(n.jsxs)("div",{className:"form-row",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{ref:c,type:"text",name:"name",required:!0,className:"form-control",id:"formGroupExampleInput",placeholder:"anonymous"})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{ref:c,type:"number",name:"age",className:"form-control",id:"formGroupExampleInput2",placeholder:"99"})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("input",{ref:c,type:"text",name:"place",className:"form-control",id:"formGroupExampleInput2",placeholder:"somewhere else"})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("button",{className:"btn btn-success btn-add",type:"submit",children:"Add New User"})})]})})]})};var b=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container",style:{minHeight:"100vh"},children:[Object(n.jsxs)("div",{className:"main",children:[Object(n.jsx)("div",{className:"title title1",children:"simple redux app with react framework"}),Object(n.jsx)("div",{className:"title title2",children:"user app with add, update and remove"})]}),Object(n.jsx)(j,{}),Object(n.jsx)(m,{})]})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},p=c(9),h=c(2),O={users:[{id:111,name:"Praveen",age:24,place:"Karimnagar"},{id:222,name:"Dan Abramov",age:55,place:"America"}]};var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O.users,t=arguments.length>1?arguments[1]:void 0,c=Object(h.a)(e);switch(t.type){case"addUser":var n=t.payload,a=[].concat(Object(h.a)(e),[n]);return a;case"removeUser":var s=c.filter((function(e){return e.id!==t.payload}));return s;case"updateUser":var r=t.payload,i=c.map((function(e){return e.id===r.id&&(e.name=r.name,e.age=r.age,e.place=r.place),e}));return i;default:return e}},v=Object(p.b)(x);r.a.render(Object(n.jsx)(d.a,{store:v,children:Object(n.jsx)(b,{})}),document.getElementById("root")),u()}},[[30,1,2]]]);
//# sourceMappingURL=main.8b9b2d2f.chunk.js.map