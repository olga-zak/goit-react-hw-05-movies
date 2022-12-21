"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[436],{735:function(n,t,r){r.d(t,{T:function(){return c}});var e,a=r(243),i=r(168),o=r(444).ZP.div(e||(e=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n"]))),s=r(184),c=function(){return(0,s.jsx)(o,{children:(0,s.jsx)(a.Z1,{height:"100",width:"100",color:"#3f51b5",wrapperStyle:{},visible:!0,ariaLabel:"three-circles-rotating"})})}},436:function(n,t,r){r.r(t),r.d(t,{default:function(){return G}});var e,a,i,o,s,c,p,u,l,d,h,x,f,v=r(791),g=r(739),m=r(885),b=r(273),Z=r(168),w=r(444),k=r(731),j=w.ZP.div(e||(e=(0,Z.Z)(["\n  position: relative;\n  width: 800px;\n  min-height: 250px;\n  margin: 20px auto;\n  border-radius: 10px;\n  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);\n"]))),y=w.ZP.div(a||(a=(0,Z.Z)(["\n  padding: 25px;\n  height: 40%;\n"]))),P=w.ZP.h1(i||(i=(0,Z.Z)(["\n  margin-bottom: 10px;\n  color: black;\n  font-weight: 600;\n"]))),_=w.ZP.span(o||(o=(0,Z.Z)(["\n  font-weight: 500;\n  font-size: 1.1em;\n"]))),C=w.ZP.img(s||(s=(0,Z.Z)(["\n  float: left;\n  margin-right: 20px;\n  height: 120px;\n  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);\n"]))),U=w.ZP.ul(c||(c=(0,Z.Z)(["\n  display: flex;\n  margin-top: 30px;\n  font-weight: 500;\n  color: #141313;\n"]))),z=w.ZP.li(p||(p=(0,Z.Z)(["\n  margin-right: 5px;\n  &:not(:last-child):after {\n    content: ',';\n  }\n"]))),S=w.ZP.p(u||(u=(0,Z.Z)(["\n  padding: 25px;\n  height: 50%;\n"]))),T=(0,w.ZP)(k.rU)(l||(l=(0,Z.Z)(["\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #fff;\n  font-weight: 500;\n  transition: 0.4s;\n  &:hover {\n    color: #333;\n  }\n"]))),M=w.ZP.div(d||(d=(0,Z.Z)(["\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  right: 0;\n  background-size: cover;\n  border-radius: 11px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  opacity: 0.3;\n  background-position: 50% 50%;\n"])),(function(n){return n.someUrl})),R=w.ZP.ul(h||(h=(0,Z.Z)(["\n  position: relative;\n  z-index: 5;\n\n  height: 10%;\n  padding: 25px;\n"]))),D=w.ZP.li(x||(x=(0,Z.Z)(["\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.3);\n  transition: color 0.3s;\n  transition-delay: 0.15s;\n  margin: 0 10px;\n  &:hover {\n    transition: color 0.3s;\n    color: rgba(0, 0, 0, 0.7);\n  }\n"]))),F=r(184),H=function(n){var t=n.movieData,r=t.title,e=t.release_date,a=t.poster_path,i=t.overview,o=t.genres,s=t.vote_average,c=t.backdrop_path,p=o.map((function(n){return(0,F.jsx)(z,{children:n.name},n.id)})),u=Math.round(10*s),l=e.split("-")[0],d=(0,g.TH)();return(0,F.jsxs)(j,{children:[(0,F.jsxs)(y,{children:[(0,F.jsx)(C,{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:r}),(0,F.jsxs)(P,{children:[r," (",l,")"]}),(0,F.jsxs)(_,{children:["Score ",u,"%"]}),(0,F.jsx)(U,{children:p})]}),(0,F.jsx)(S,{children:i}),(0,F.jsxs)(R,{children:[(0,F.jsx)(D,{children:(0,F.jsx)(T,{to:"cast",state:d.state,children:"Cast"})}),(0,F.jsx)(D,{children:(0,F.jsx)(T,{to:"reviews",state:d.state,children:"Reviews"})})]}),(0,F.jsx)(M,{someUrl:"https://image.tmdb.org/t/p/w500".concat(c)})]})},L=r(523),q=w.ZP.button(f||(f=(0,Z.Z)(["\n  border: 0;\n  padding: 5px;\n  cursor: pointer;\n  height: 40px;\n  min-width: 120px;\n  font-size: 1.1em;\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  background: #496785;\n  border-radius: 5px;\n  transition: all 0.4s;\n  &:hover {\n    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);\n    transform: scale(1.02);\n  }\n  &:active {\n    box-shadow: 0px 0px 12px 0px rgba(225, 225, 225, 1);\n  }\n  &:focus {\n    outline: 0;\n    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);\n  }\n"]))),E=r(735),G=function(){var n=function(){var n=(0,v.useState)(null),t=(0,m.Z)(n,2),r=t[0],e=t[1],a=(0,g.UO)().movieId;return(0,v.useEffect)((function(){(0,b.Mc)(a).then(e)}),[a]),r}(),t=(0,g.s0)(),r=(0,g.TH)();return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(L.W,{children:[n&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(q,{onClick:function(){var n,e;t(null!==(n=null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:"Go back"}),(0,F.jsx)(H,{movieData:n})]}),(0,F.jsx)(v.Suspense,{fallback:(0,F.jsx)(E.T,{}),children:(0,F.jsx)(g.j3,{})})]})})}},273:function(n,t,r){r.d(t,{Mc:function(){return d},hC:function(){return x},oJ:function(){return v},wR:function(){return u},wr:function(){return c}});var e=r(861),a=r(757),i=r.n(a),o=r(388),s="d929b7a4b435aa22496bb0793b172bfc";function c(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Z)("trending/movie/day",{params:{api_key:s}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function u(n,t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(i().mark((function n(t,r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Z)("search/movie",{params:{api_key:s,query:t,page:r}});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Z)("movie/".concat(t),{params:{api_key:s,id:t}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Z)("movie/".concat(t,"/credits"),{params:{api_key:s,id:t}});case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Z)("movie/".concat(t,"/reviews"),{params:{api_key:s,id:t}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=436.8b2f9cb9.chunk.js.map