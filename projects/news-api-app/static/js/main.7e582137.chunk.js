(this["webpackJsonpnews-api-app"]=this["webpackJsonpnews-api-app"]||[]).push([[0],{20:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAAilBMVEX///9VVVX/AABPT0+Ojo5RUVF+fn5fX19paWlHR0dMTEygoKCmpqb/Gxv/IyPu7u7n5+fZ2dn/b2//j4//+Pj/7OxCQkL/q6vh4eHGxsb09PTQ0NCtra27u7v/k5Obm5uAgIDAwMBwcHCIiIj/EBD/Pj7/Skr/UFD/YGC2trasrKxlZWVbW1t2dnac3dleAAAENUlEQVR4nO3d6WKaQBQFYOiAOqOp2qQUl8QtXdze//WaFNBB8SrMTJHr+fovJtPMyQEEWTwPAAAAAAAAAAAAAAAAAOCaxSxwpzuse3qG9lI4pKJe3RM0spa+W9Gg7ima2IeO41GvdU/RRNtxOr7q1j1FE4iHlMUT2scons68Zd0uiafRm64kHrVxMHQn5NIeJ39ixENK4+GwcKE9xRAPCQsXCe0hoT2k03henr6aef+eDcWxPS9fTJ3Gw6s91uNBe9AexPMPFq6cC/H8/Fber8eJ563CUD8eZ+F6rjDUhXg4tsdiPGhPAu0hIR4S33jEYQ6IJwfxkNzHw2DL5TAeX0TFxKpvZQZOuY/nIhHefz41xtOE1VKd8YQdK1Nwqc54/LaVKbhUz6pZIJ40HjEb90+NuwLxEO97egrxEO+aEQ/ac+KB2uP4WHPT4/n99lzW25/HaY+BR2gP4km4jwcLF+KpHg+vhev9yQzv9ljEsT0WoT0ktIeE9pDQHhLaQ0I8JMRDwrqHhPaQuLZnuJhkRkeLxGtifTRNbTaT3NBM29OK5Dl1C9kea+PwbE/X4J4soqUNzbM9RneskVp9eLYnMolHv1sPz/Ysje7oow3Nsz1xdnpJeSLSt1082+MNgm27miDWh+bZHmuYtscWtIeEeEhYuEiIh4SFi4T2kNAeEtpD4tqeweDz1PXBQXw0JOUvQOLZnn4nklFUdMTwupk+NM/27AwOaEg9C5btWRgdLdxpQ7OMZ6pM4lHnB1N5xTMxOZgabrWhea57Ogb1iUba0Czb443nN32mVUTo6TBtz4ezy/dulB+aZ3usYdseO9AeEtpDQntIaA8J7SGhPSS0h8S2PWP6oOBF+aGZxjMuPLnwFlHuWTJMF65l9V32aKqNwzOeockBn4KjhcwWrpHJ0VT2Rwu92KQ9+oR5tsfbG6x71to4PNvjeYGotumKdrmnSDJtj/f5OWkVxUcLGcZjRXZrtYKXZg27tVrRHEwl8YSrgpdWYUPiIeZgKn1g7rbgpeShkw2462UyBye/aJAsQQUPRY6Tt1Zhq+Cn7ku6FlAObn6bfhwtgrNXVsLdGs+uRTIHNb3+rWUN07ff8vSZ7NluixwV/tw96WdzGF//3rIOeyf5avazM2Tk/d+vObs+ycV6IN0++aGvX4oS+9mXl/b/S+uyPVB1voowNTnURx53NtbHL97/svVhmz36em99+TresVn5wSjux6PAP+zQhUVb/PtzOKEnDLvx9W8vI9Z2boWSH/+0K+miyfUB7sHsMAkld0ubjxyf+5cpF2/UnVhqf1MXT6wvIpqwXk6ZnBBWjWpQOp7XMjodtTw5r3vG5fSk0eXZ5YRyc/03ui/xUla+PrscIfeWN5D/xTD4vJGIcEopKYPTXbDGGK67s8ChWW/RxOIAAAAAAAAAAAAAAAAAQI3+AhotkPe5n+2NAAAAAElFTkSuQmCC"},21:function(e,a,t){e.exports=t(34)},26:function(e,a,t){},27:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),l=t.n(c),o=(t(26),t(27),t(4)),s=t(1),i=t(3),d=t(8),m=Object(n.createContext)(),u=function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)({name:"India",code:"in"}),s=Object(i.a)(o,2),d=s[0],u=s[1],p=Object(n.useState)("general"),E=Object(i.a)(p,2),b=E[0],v=E[1];return r.a.createElement(m.Provider,{value:{api_host:"https://saurav.tech/NewsAPI",categories_list:["general","entertainment","health","science","sports","technology"],countries:[d,u],categories:[b,v],news_list:[c,l]}},e.children)};var p=function(){var e=r.a.useContext(m),a=e.countries,t=e.categories,n=e.categories_list,c=Object(i.a)(a,2),l=c[0],s=(c[1],Object(i.a)(t,2)),u=s[0];return s[1],r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Home"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/top-headlines/".concat(l.code,"/").concat(u)},"Top Headlines")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement(o.b,{className:"nav-link dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("span",null,l.name)),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},d&&d.length>0&&d.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(o.b,{className:"dropdown-item",to:"/top-headlines/".concat(e.code,"/").concat(u)},e.name),r.a.createElement("div",{className:"dropdown-divider"}))})))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement(o.b,{className:"nav-link dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("span",{style:{textTransform:"capitalize"}},u)),r.a.createElement("div",{className:"dropdown-menu dropdown-categories","aria-labelledby":"navbarDropdown"},n&&n.length>0&&n.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(o.b,{className:"dropdown-item",to:"/top-headlines/".concat(l.code,"/").concat(e)},e),r.a.createElement("div",{className:"dropdown-divider"}))}))))),r.a.createElement("div",{className:"d-inline-flex my-2 my-lg-0"},r.a.createElement(o.b,{to:"#",style:{pointerEvents:"none"}},r.a.createElement("i",{className:"fa fa-cog","aria-hidden":"true"})))))))};var E=function(){var e=r.a.useContext(m),a=e.countries,t=e.categories,n=Object(i.a)(a,2),c=n[0],l=(n[1],Object(i.a)(t,2)),s=l[0];return l[1],r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home-bnr"},r.a.createElement(o.b,{className:"btn bnr-btn btn-success",to:"/top-headlines/".concat(c.code,"/").concat(s)},"Go to News Feed")))},b=function(e){var a=e.news_details;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"modal fade",id:"exampleModalLong",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle"},a.title),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("img",{src:a.urlToImage}),a.description,r.a.createElement("a",{href:a.url,target:"_blank",rel:"noreferrer"},"\xa0Read More..."))))))},v=t(14),g=t.n(v),h=t(19),A=t(20),N=t.n(A);var f=function(){var e,a,t=r.a.useContext(m),c=t.api_host,l=t.countries,o=t.categories,u=t.news_list,p=Object(i.a)(l,2),E=p[0],v=p[1],A=Object(i.a)(o,2),f=A[0],w=A[1],x=Object(i.a)(u,2),O=x[0],j=x[1],T=Object(s.f)();Object(n.useEffect)((function(){var e;w(T.category_id),d&&d.length>0&&d.map((function(a){a.code==T.country_id&&(e=a.name)})),v({name:e,code:T.country_id})}),[T]),Object(n.useEffect)((function(){(function(){var e=Object(h.a)(g.a.mark((function e(){var a,t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(c,"/top-headlines/category/").concat(f,"/").concat(E.code,".json"),e.next=3,fetch(a);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,j(n.articles);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[E,f]),e=O.slice(1,4),a=O.slice(4,10);var k=Object(n.useState)([]),y=Object(i.a)(k,2),P=y[0],I=y[1],M=function(e){I(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"headlines_title"},"Top Headlines from ",E.name," on\xa0",r.a.createElement("span",{style:{textTransform:"capitalize"}},f)),r.a.createElement("div",{className:"headlines row"},e&&e.length>0&&e.map((function(e,a){return r.a.createElement("div",{key:a,className:"hd-col col-lg-3 col-md-3 col-sm-6 col-xs-12"},r.a.createElement("div",{className:"hd-card card"},a<=2?r.a.createElement("img",{src:void 0==e.urlToImage?N.a:e.urlToImage,alt:e.source}):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},e.title),r.a.createElement("a",{href:"#",onClick:function(){return M(e)},"data-toggle":"modal","data-target":"#exampleModalLong"},"View More"))))}))),r.a.createElement("div",{className:"headlines2"},a&&a.length>0&&a.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("div",{className:"title"},r.a.createElement("a",{href:"#",onClick:function(){return M(e)},"data-toggle":"modal","data-target":"#exampleModalLong"},e.title)))}))),r.a.createElement(b,{news_details:P})))};var w=function(){return r.a.createElement(u,null,r.a.createElement(o.a,{basename:"/news-api-app"},r.a.createElement(p,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:E}),r.a.createElement(s.a,{path:"/index.html",exact:!0,component:E}),r.a.createElement(s.a,{path:"/top-headlines/:country_id/:category_id",exact:!0,component:f}),r.a.createElement(s.a,null,r.a.createElement("h1",{className:"my-5 mx-5"},"page not found")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('[{"name":"India","code":"in"},{"name":"USA","code":"us"},{"name":"Australia","code":"au"},{"name":"Russia","code":"ru"},{"name":"France","code":"fr"},{"name":"United Kingdom","code":"gb"}]')}},[[21,1,2]]]);
//# sourceMappingURL=main.7e582137.chunk.js.map