"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[753],{685:function(n,t,r){r.d(t,{O:function(){return g}});var e,a,o,u,c,s=r(739),i=r(168),p=r(444),f=r(731),l=p.ZP.li(e||(e=(0,i.Z)(["\n  width: 210px;\n  background-color: #496785;\n  border-radius: 5px;\n  transition: 0.4s;\n\n  &:hover {\n    transform: scale(1.02);\n    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);\n  }\n"]))),d=p.ZP.img(a||(a=(0,i.Z)(["\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n"]))),x=p.ZP.p(o||(o=(0,i.Z)(["\n  padding: 10px;\n  color: #fff;\n"]))),h=(0,p.ZP)(f.rU)(u||(u=(0,i.Z)(["\n  display: block;\n  text-align: center;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n"]))),v=r(184),b=function(n){var t=n.title,r=n.id,e=n.poster,a=(0,s.TH)();return(0,v.jsx)(l,{children:(0,v.jsxs)(h,{to:"/movies/".concat(r),state:{from:a},children:[(0,v.jsx)(d,{src:"https://image.tmdb.org/t/p/w500".concat(e),alt:t}),(0,v.jsx)(x,{children:t})]})})},m=p.ZP.ul(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 20px;\n"]))),g=function(n){var t=n.movies;return(0,v.jsx)(m,{children:t.map((function(n){return(0,v.jsx)(b,{title:n.title,id:n.id,poster:n.poster_path},n.id)}))})}},753:function(n,t,r){r.r(t),r.d(t,{default:function(){return y}});var e,a,o,u=r(861),c=r(885),s=r(757),i=r.n(s),p=r(791),f=r(731),l=r(739),d=r(273),x=r(168),h=r(444),v=h.ZP.form(e||(e=(0,x.Z)(["\n  width: 500px;\n  height: 40px;\n  margin: 0 auto 20px auto;\n  background: #496785;\n  border: 1px solid rgba(0, 255, 117, 0.3);\n  border-radius: 5px;\n\n  &:hover {\n    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);\n  }\n"]))),b=h.ZP.input(a||(a=(0,x.Z)(["\n  width: 370px;\n  padding: 12px 10px;\n  float: left;\n  color: #333;\n  border: 0;\n  background: transparent;\n  border-radius: 3px 0 0 3px;\n  &:focus {\n    outline: 0;\n    background: transparent;\n  }\n"]))),m=h.ZP.button(o||(o=(0,x.Z)(["\n  position: relative;\n  float: right;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n  height: 40px;\n  width: 120px;\n  font-size: 1.1em;\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  background: transparent;\n  border-left: 1px solid #fff;\n  border-radius: 0 3px 3px 0;\n  &:hover {\n    background: #fff;\n    color: #333;\n  }\n  &:active {\n    box-shadow: 0px 0px 12px 0px rgba(225, 225, 225, 1);\n  }\n  &:focus {\n    outline: 0;\n  }\n"]))),g=r(184),w=function(n){var t=n.onSubmit,r=(0,p.useState)(""),e=(0,c.Z)(r,2),a=e[0],o=e[1];return(0,g.jsxs)(v,{onSubmit:function(n){n.preventDefault(),t(a),o("")},children:[(0,g.jsx)(b,{value:a,onChange:function(n){o(n.target.value)},type:"text",autoComplete:"off",placeholder:"Search for movies..."}),(0,g.jsx)(m,{type:"submit",children:"Search"})]})},Z=r(685),k=r(523),y=function(){var n=(0,p.useState)(1),t=(0,c.Z)(n,2),r=t[0],e=t[1],a=(0,p.useState)([]),o=(0,c.Z)(a,2),s=o[0],x=o[1],h=(0,f.lr)(),v=(0,c.Z)(h,2),b=v[0],m=v[1],y=b.get("query");(0,p.useEffect)((function(){if(y){var n=function(){var n=(0,u.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,d.wR)(y,r);case 2:t=n.sent,x(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[y,r]);return(0,g.jsxs)(k.W,{children:[(0,g.jsx)(w,{onSubmit:function(n){m({query:n}),e(1),x([])}}),s&&(0,g.jsx)(Z.O,{movies:s}),(0,g.jsx)(l.j3,{})]})}},273:function(n,t,r){r.d(t,{Mc:function(){return l},hC:function(){return x},oJ:function(){return v},wR:function(){return p},wr:function(){return s}});var e=r(861),a=r(757),o=r.n(a),u=r(388),c="d929b7a4b435aa22496bb0793b172bfc";function s(){return i.apply(this,arguments)}function i(){return(i=(0,e.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.Z)("trending/movie/day",{params:{api_key:c}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n,t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(o().mark((function n(t,r){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.Z)("search/movie",{params:{api_key:c,query:t,page:r}});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.Z)("movie/".concat(t),{params:{api_key:c,id:t}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.Z)("movie/".concat(t,"/credits"),{params:{api_key:c,id:t}});case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return(b=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.Z)("movie/".concat(t,"/reviews"),{params:{api_key:c,id:t}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=753.7c07565d.chunk.js.map