(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],[,,function(e,t,a){},,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),s=a.n(o),c=(a(14),a(7)),l=a(4),i=a(5),u=a(8),g=a(6),d=(a(15),a(16),a(2),function(e){var t=e.doggiesOpts,a=t.order,n=t.headerTitle,o=t.doggies;switch(a){case"asc":o=r.a.createElement("ol",null,o.sort().map((function(e){return r.a.createElement("li",null,String(e))})));break;case"desc":o=r.a.createElement("ol",null,o.sort().reverse().map((function(e){return r.a.createElement("li",null,e)})));break;case null:o=r.a.createElement("ul",null,o.map((function(e){return r.a.createElement("li",null,e)})))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"..."),r.a.createElement("div",{className:"Doggies"},r.a.createElement("h1",null,n),o))}),m=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={doggiesOpts:{order:"asc",headerTitle:"Rescue Doggies",doggies:["Emilka","Karas","Anzelm","Pimpek","Hipek","Pan Pyrka"]}},n.changeDoggiesOrder=function(){var e=Object(c.a)({},n.state.doggiesOpts);switch(n.state.doggiesOpts.order){case"asc":e.order="desc";break;case"desc":e.order=null;break;case null:e.order="asc"}n.setState({doggiesOpts:e})},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{doggiesOpts:this.state.doggiesOpts}),r.a.createElement("button",{onClick:this.changeDoggiesOrder},"Change Doggies Order"))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.d469ca6a.chunk.js.map