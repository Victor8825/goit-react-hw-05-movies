"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[734],{2568:function(n,t,e){e.d(t,{a:function(){return l}});var r,u,a=e(6871),c=e(168),o=e(6444),i=e(501),s=(0,o.ZP)(i.OL)(r||(r=(0,c.Z)(["\n  text-decoration: none;\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),p=o.ZP.ul(u||(u=(0,c.Z)(["\n  list-style: none;\n\n  li {\n    font-size: ",";\n    margin-bottom: 5px;\n  }\n"])),(function(n){return n.theme.fontSizes.l})),f=e(184),l=function(n){var t=n.movies,e=(0,a.TH)();return(0,f.jsx)(p,{children:t.map((function(n){var t=n.id,r=n.title;return(0,f.jsx)("li",{children:(0,f.jsx)(s,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})}},9261:function(n,t,e){e.d(t,{Bt:function(){return b},Dl:function(){return v},LC:function(){return x},Mc:function(){return g},YQ:function(){return p},wr:function(){return m}});var r=e(5861),u=e(7757),a=e.n(u),c=e(4569),o=e.n(c),i=e(1362),s="03358da3f30e688045791f6e219334d0",p="https://image.tmdb.org/t/p/w500",f="https://api.themoviedb.org/3",l="".concat(f,"/trending/movie/week?api_key=").concat(s,"&language=en-US"),h="".concat(f,"/movie/"),d="".concat(f,"/search/movie?api_key=").concat(s,"&language=en-US&page=1&include_adult=false"),m=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(l));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,i.t)(n.t0.message));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(h).concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,i.t)(n.t0.message));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(d,"&query=").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,i.t)(n.t0.message));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),b=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(h).concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,i.t)(n.t0.message));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("".concat(h).concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,i.t)(n.t0.message));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},1362:function(n,t,e){e.d(t,{t:function(){return u}});var r=e(6066),u=(e(5462),function(n){r.Am.warn(n,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})},6734:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,u=e(885),a=e(2791),c=e(501),o=e(9261),i=e(1362),s=e(2568),p=e(168),f=e(6444).ZP.div(r||(r=(0,p.Z)(["\n  form {\n    width: 100%;\n    max-width: 400px;\n    height: 150px;\n    font-size: ",";\n    display: flex;\n    gap: ","px;\n    margin-left: ","px;\n    width: 100%;\n    height: auto;\n    border-radius: ",";\n  }\n\n  input {\n    border-radius: ",";\n    font-size: ",";\n    outline: none;\n    border: none;\n    padding: ","px;\n    width: 100%;\n    height: auto;\n    background-color: #bdf2bb;\n  }\n\n  button {\n    display: inline-block;\n    font-size: ",";\n    height: ","px;\n    border: ",";\n    border-radius: ",";\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n\n    &:hover {\n      color: white;\n      background-color: orangered;\n    }\n  }\n"])),(function(n){return n.theme.fontSizes.sm}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[7]}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.fontSizes.sm}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.sm}),(function(n){return n.theme.space[8]}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.sm})),l=e(184),h=function(){var n,t=(0,c.lr)(),e=(0,u.Z)(t,2),r=e[0],p=e[1],h=(0,a.useState)(null!==(n=r.get("query"))&&void 0!==n?n:""),d=(0,u.Z)(h,2),m=d[0],g=d[1],v=(0,a.useState)(""),b=(0,u.Z)(v,2),x=b[0],w=b[1],k=(0,a.useState)(null),y=(0,u.Z)(k,2),Z=y[0],S=y[1];return(0,a.useEffect)((function(){""!==m&&(0,o.Dl)(m).then((function(n){0===n.length?((0,i.t)("Try another query"),S(null)):S(n)})).catch((function(n){return console.log(n.message)}))}),[m]),(0,l.jsxs)(f,{children:[(0,l.jsxs)("form",{children:[(0,l.jsx)("input",{type:"text",onChange:function(n){return w(n.target.value)},placeholder:"Search movies"}),(0,l.jsx)("button",{type:"submit",onClick:function(n){n.preventDefault(),""===x?(console.log(x),(0,i.t)("Enter text for searching!")):(p({query:x}),g(x)),n.target.form.reset()},children:"Search"})]}),Z&&(0,l.jsx)(s.a,{movies:Z})]})}}}]);
//# sourceMappingURL=734.c8bf693c.chunk.js.map