(this["webpackJsonpkiddies-helper"]=this["webpackJsonpkiddies-helper"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),i=n(19),r=n.n(i),a=(n(26),n(11)),j=n(2),o=n(7),h=n(8),l=n(10),u=n(9),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"Home"})})}}]),n}(s.Component),b=(n(27),n(28),function(e){return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{alt:"minions",src:"https://robohash.org/".concat(e.minions.id,"?set=set2&size=180x180")}),Object(c.jsx)("h2",{children:e.minions.name}),Object(c.jsxs)("p",{children:[" ",e.minions.email,"  "]})]})}),O=(n(29),function(e){return Object(c.jsx)("div",{className:"card-list",children:e.minions.map((function(e){return Object(c.jsx)(b,{minions:e},e.id)}))})}),m=(n(30),function(e){var t=e.placeholder,n=e.handleChange;return Object(c.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={minions:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({minions:t})}))}},{key:"handleChange",value:function(e){this.setState({searchField:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.minions,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(c.jsxs)("div",{className:"Mentors",children:[Object(c.jsx)("h2",{children:"Kiddies Helper"}),Object(c.jsx)("h1",{children:"Mentors"}),Object(c.jsx)(m,{placeholder:"search minions",handleChange:this.handleChange}),Object(c.jsx)(O,{minions:s})]})}}]),n}(s.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"Rooms"})})}}]),n}(s.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"MyStuff"})})}}]),n}(s.Component);n(31);function v(){return Object(c.jsx)(a.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("nav",{className:"top-nav",children:Object(c.jsxs)("ul",{className:"nav-titles",children:[Object(c.jsxs)("li",{className:"nav-item",children:[" ",Object(c.jsx)(a.b,{to:"/",children:" Home"})]}),Object(c.jsxs)("li",{className:"nav-item",children:[" ",Object(c.jsx)(a.b,{to:"/mentors",children:"Mentors"})]}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(a.b,{to:"/rooms",children:"Rooms"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(a.b,{to:"/mystuff",children:"MyStuff"})})]})}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/mystuff",children:Object(c.jsx)(p,{})}),Object(c.jsx)(j.a,{path:"/rooms",children:Object(c.jsx)(x,{})}),Object(c.jsx)(j.a,{path:"/mentors",children:Object(c.jsx)(f,{})}),Object(c.jsx)(j.a,{path:"/",children:Object(c.jsx)(d,{})})]})]})})}var y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(c.jsx)(a.a,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),y()}},[[37,1,2]]]);
//# sourceMappingURL=main.10ac93d2.chunk.js.map