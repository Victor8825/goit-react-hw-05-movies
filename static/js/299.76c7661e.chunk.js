"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[299],{2568:function(t,n,e){e.d(n,{a:function(){return l}});var r,a,c=e(6871),u=e(168),o=e(6444),s=e(501),i=(0,o.ZP)(s.OL)(r||(r=(0,u.Z)(["\n  text-decoration: none;\n  color: ",";\n"])),(function(t){return t.theme.colors.text})),p=o.ZP.ul(a||(a=(0,u.Z)(["\n  list-style: none;\n\n  li {\n    font-size: ",";\n    margin-bottom: 5px;\n  }\n"])),(function(t){return t.theme.fontSizes.l})),f=e(184),l=function(t){var n=t.movies,e=(0,c.TH)();return(0,f.jsx)(p,{children:n.map((function(t){var n=t.id,r=t.title;return(0,f.jsx)("li",{children:(0,f.jsx)(i,{to:"/movies/".concat(n),state:{from:e},children:r})},n)}))})}},9261:function(t,n,e){e.d(n,{Bt:function(){return x},Dl:function(){return m},LC:function(){return w},Mc:function(){return g},YQ:function(){return p},wr:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),o=e.n(u),s=e(1362),i="03358da3f30e688045791f6e219334d0",p="https://image.tmdb.org/t/p/w500",f="https://api.themoviedb.org/3",l="".concat(f,"/trending/movie/week?api_key=").concat(i,"&language=en-US"),v="".concat(f,"/movie/"),d="".concat(f,"/search/movie?api_key=").concat(i,"&language=en-US&page=1&include_adult=false"),h=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("".concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",(0,s.t)(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("".concat(v).concat(n,"?api_key=").concat(i,"&language=en-US"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",(0,s.t)(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("".concat(d,"&query=").concat(n));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",(0,s.t)(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),x=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("".concat(v).concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",(0,s.t)(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),w=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("".concat(v).concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return e=t.sent,t.abrupt("return",e.data.cast);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",(0,s.t)(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()},1362:function(t,n,e){e.d(n,{t:function(){return a}});var r=e(6066),a=(e(5462),function(t){r.Am.warn(t,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})},2299:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r,a=e(885),c=e(2791),u=e(9261),o=e(2568),s=e(168),i=e(6444).ZP.main(r||(r=(0,s.Z)(["\n  padding: ","px;\n  h1 {\n    padding-bottom: ","px;\n  }\n"])),(function(t){return t.theme.space[3]}),(function(t){return t.theme.space[3]})),p=e(184),f=function(){var t=(0,c.useState)([]),n=(0,a.Z)(t,2),e=n[0],r=n[1];return(0,c.useEffect)((function(){(0,u.wr)().then(r)}),[]),(0,p.jsxs)(i,{children:[(0,p.jsx)("h1",{children:"Trending today"}),e&&(0,p.jsx)(o.a,{movies:e})]})}}}]);
//# sourceMappingURL=299.76c7661e.chunk.js.map