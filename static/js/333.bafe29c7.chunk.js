"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[333],{25:function(e,r,t){t.d(r,{Hg:function(){return o},TP:function(){return f},tx:function(){return v},z1:function(){return i},zv:function(){return p}});var n=t(861),a=t(757),c=t.n(a),u=t(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="a8ee29bfb9bbeb066f9027b41e5a7445",o=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("trending/movie/day?api_key=".concat(s));case 3:return r=e.sent,e.abrupt("return",new Promise((function(e){setTimeout((function(){e(r.data.results)}),500)})));case 7:e.prev=7,e.t0=e.catch(0),console.log("getTrending error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(r));case 3:return t=e.sent,e.abrupt("return",new Promise((function(e){setTimeout((function(){e(t.data.results)}),500)})));case 7:e.prev=7,e.t0=e.catch(0),console.log("searchMovies error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",new Promise((function(e){setTimeout((function(){e(t.data)}),1e3)})));case 7:e.prev=7,e.t0=e.catch(0),console.error("getMovieDetails error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"/credits?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",new Promise((function(e){setTimeout((function(){e(t.data.cast)}),500)})));case 7:e.prev=7,e.t0=e.catch(0),console.error("getMovieCredits error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"/reviews?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",new Promise((function(e){setTimeout((function(){e(t.data.results)}),500)})));case 7:e.prev=7,e.t0=e.catch(0),console.error("getMovieReviews error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},333:function(e,r,t){t.r(r),t.d(r,{default:function(){return Z}});var n=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),o=t(25),i=t(87),f="SearchBarm_Searchbar__UEnJI",p="SearchBarm_SearchForm__WazH0",v="SearchBarm_SearchFormButton__2UmCx",l="SearchBarm_SearchFormButtonLabel__atcJf",h="SearchBarm_SearchFormInput__97oXR",m=t(184),_=function(e){var r=e.onSubmit,t=(0,i.lr)(),n=(0,a.Z)(t,2),c=n[0],u=n[1],o=c.get("query"),_=(0,s.useState)(o||""),d=(0,a.Z)(_,2),x=d[0],b=d[1];return(0,m.jsx)("div",{className:f,children:(0,m.jsxs)("form",{className:p,onSubmit:function(e){e.preventDefault(),r(x),u({query:x}),b("")},children:[(0,m.jsx)("input",{className:h,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",id:"searchInput",name:"searchInput",value:x,onChange:function(e){b(e.target.value)}}),(0,m.jsx)("button",{type:"submit",className:v,children:(0,m.jsx)("span",{className:l,children:"Search"})})]})})},d=t(686),x=t.n(d),b="MoviesList_MovieList__XVN8b",w="MoviesList_MovieListItem__RoK4C",g="MoviesList_MovieListLink__8tncu",y=t(689),S=function(e){var r=e.movies,t=(0,y.TH)();return(0,m.jsx)("div",{children:(0,m.jsx)("ul",{className:b,children:r.map((function(e){return(0,m.jsx)("li",{className:w,children:(0,m.jsxs)(i.rU,{to:"".concat(e.id),state:{from:t},className:g,children:[e.title," (",e.release_date.split("-")[0],")"]})},e.id)}))})})},k=t(793),Z=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],i=(0,s.useState)(!1),f=(0,a.Z)(i,2),p=f[0],v=f[1],l=(0,s.useState)(""),h=(0,a.Z)(l,2),d=h[0],b=h[1];(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(""!==d),e.prev=1,e.next=4,(0,o.z1)(d);case 4:if(0!==(r=e.sent).length||""===d){e.next=8;break}return x().Notify.warning("Sorry, there are no results for your query! Please try again."),e.abrupt("return");case 8:c(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("FetchSearchMovies error:",e.t0);case 14:return e.prev=14,v(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[d]);return(0,m.jsxs)("main",{children:[(0,m.jsx)(_,{onSubmit:function(e){c([]),b(e)}}),p&&(0,m.jsx)(k.Z,{}),(0,m.jsx)(S,{movies:t,query:d})]})}}}]);
//# sourceMappingURL=333.bafe29c7.chunk.js.map