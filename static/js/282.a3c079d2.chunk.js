"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[282],{282:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r,a,c,u=n(885),s=n(791),o=n(273),i=n(739),p=n(168),l=n(444),f=(l.ZP.ul(r||(r=(0,p.Z)([""]))),l.ZP.li(a||(a=(0,p.Z)(["\n  font-size: 1.1em;\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"])))),h=l.ZP.p(c||(c=(0,p.Z)(["\n  margin-bottom: 5px;\n  font-weight: 500;\n"]))),d=n(184),v=function(){var t=(0,s.useState)([]),e=(0,u.Z)(t,2),n=e[0],r=e[1],a=(0,i.UO)().movieId;return(0,s.useEffect)((function(){(0,o.oJ)(a).then(r)}),[a]),(0,d.jsx)(d.Fragment,{children:0===n.length?(0,d.jsx)("p",{children:"There are no reviews yet"}):(0,d.jsx)("ul",{children:n.map((function(t){return(0,d.jsxs)(f,{children:[(0,d.jsxs)(h,{children:["Written by ",t.author,","," ",t.created_at.substring(0,10)]}),(0,d.jsx)("p",{children:t.content})]},t.id)}))})})}},273:function(t,e,n){n.d(e,{Mc:function(){return f},hC:function(){return d},oJ:function(){return m},wR:function(){return p},wr:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(388),s="d929b7a4b435aa22496bb0793b172bfc";function o(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Z)("trending/movie/day",{params:{api_key:s}});case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(t,e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e,n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Z)("search/movie",{params:{api_key:s,query:e,page:n}});case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Z)("movie/".concat(e),{params:{api_key:s,id:e}});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Z)("movie/".concat(e,"/credits"),{params:{api_key:s,id:e}});case 3:return n=t.sent,t.abrupt("return",n.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Z)("movie/".concat(e,"/reviews"),{params:{api_key:s,id:e}});case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=282.a3c079d2.chunk.js.map