(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{16:function(e,t,c){e.exports={overview:"movieOverview_overview__2L8Ru",img:"movieOverview_img__1_tjc",details:"movieOverview_details__eeEPt",summary:"movieOverview_summary__1VDXK",langs:"movieOverview_langs__1WdTQ",btn:"movieOverview_btn__1MU4S",rate:"movieOverview_rate__3s_Zb"}},21:function(e,t,c){e.exports={card:"filmCard_card__1GYKs",text:"filmCard_text__3QY-t",rate:"filmCard_rate__32fyT",card2:"filmCard_card2__1U-hs",btns:"filmCard_btns__5nTHf"}},23:function(e,t,c){e.exports={nav:"navBar_nav__1yc8R",active:"navBar_active__10_oE",brand:"navBar_brand__1OCCo"}},28:function(e,t,c){e.exports={movies:"movies_movies__3mjNO",search:"movies_search__k0iO4",cards:"movies_cards__3YfpX"}},29:function(e,t,c){e.exports={box:"comments_box__arK8F",heading:"comments_heading__3uKBW",btn:"comments_btn__2Okah"}},35:function(e,t,c){e.exports={trending:"trending_trending__kAyVV",cards:"trending_cards__21EId"}},36:function(e,t,c){e.exports={favourite:"favourite_favourite__hFR2t",cards:"favourite_cards__1P3ai"}},37:function(e,t,c){e.exports={msg:"comment_msg__zo_Et",left:"comment_left__aKo5C"}},60:function(e,t,c){},61:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(18),i=c.n(s),r=(c(60),c(19)),o=c(5),l=(c(61),c(23)),d=c.n(l),j=c(92),b=c(91),h=c(93),u=c(20),O=c.n(u),m=c(1),v=function(){return O()(document).ready((function(){O()((function(){O()(document).click((function(e){var t=O()(e.target);!0!==O()(".navbar-collapse").hasClass("navbar-collapse collapse show")||t.hasClass("navbar-toggler")||O()("button.navbar-toggler").click()}))}))})),Object(m.jsx)("div",{children:Object(m.jsx)(j.a,{expand:"md",fixed:"top",className:d.a.nav,id:"nav",children:Object(m.jsxs)(b.a,{id:"container",children:[Object(m.jsxs)(j.a.Brand,{href:"/Movies-App",className:d.a.brand,style:{color:"#130f40"},children:["Top-Movies"," ",Object(m.jsx)("i",{className:"fas fa-film",style:{fontSize:"30px",color:"#d35400"}})]}),Object(m.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsxs)(h.a,{className:"ms-auto",children:[Object(m.jsx)(h.a.Link,{exact:!0,as:r.b,to:"/Movies-App",activeClassName:d.a.active,children:"Movies"}),Object(m.jsx)(h.a.Link,{as:r.b,to:"/trending",activeClassName:d.a.active,children:"Trending"}),Object(m.jsx)(h.a.Link,{as:r.b,to:"/favourite",activeClassName:d.a.active,children:"Favourite"})]})})]})})})},p=c(4),f=c(35),x=c.n(f),_=c(21),g=c.n(_),w=c(55),N=c(2),C=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCH_LIST":return Object(N.a)(Object(N.a)({},e),{},{watchList:[].concat(Object(w.a)(e.watchList),[t.payload])});case"REMOVE_MOVIE_TO_WATCH_LIST":return Object(N.a)(Object(N.a)({},e),{},{watchList:e.watchList.filter((function(e){return e.id!==t.payload}))});case"SET_ID":return Object(N.a)(Object(N.a)({},e),{},{id:t.payload});default:return e}},y={watchList:JSON.parse(localStorage.getItem("watchList"))||[],watched:JSON.parse(localStorage.getItem("watched"))||[],id:""},S=Object(a.createContext)(y),k=function(e){var t=Object(a.useReducer)(C,y),c=Object(p.a)(t,2),n=c[0],s=c[1];Object(a.useEffect)((function(){localStorage.setItem("watchList",JSON.stringify(n.watchList)),localStorage.setItem("watched",JSON.stringify(n.watched))}),[n]);return Object(m.jsx)(S.Provider,{value:{watchList:n.watchList,watched:n.watched,addMovieToWatchList:function(e){s({type:"ADD_MOVIE_TO_WATCH_LIST",payload:e})},removeMovieFromWatchList:function(e){s({type:"REMOVE_MOVIE_TO_WATCH_LIST",payload:e})},id:n.id,setID:function(e){s({type:"SET_ID",payload:e})}},children:e.children})},L=c(16),M=c.n(L),T=function(){var e=Object(a.useContext)(S),t=e.id,c=e.setID,n=Object(a.useState)({}),s=Object(p.a)(n,2),i=s[0],r=s[1];Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=8e1b4952140dfb6e08f859338eb922de&language=en-US\n")).then((function(e){return e.json()})).then((function(e){c(t),r(e)})).catch((function(e){console.log(e)}))}),[t]);var o=i.release_date;return console.log(i),Object(m.jsxs)("div",{className:M.a.overview,children:[Object(m.jsx)("div",{className:M.a.img,children:Object(m.jsx)("img",{src:i.poster_path?"https://image.tmdb.org/t/p/w300".concat(i.poster_path):"https://sd.keepcalms.com/i/keep-calm-poster-not-found.png",alt:"".concat(i.title," Poster")})}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:M.a.details,children:[Object(m.jsxs)("h3",{children:[i.title?i.title:"Unknown Title"," (",o||"Release year is not found ",")"]}),Object(m.jsxs)("h3",{children:[Object(m.jsx)("i",{className:"fas fa-info-circle"}),"Movie Overview :"]}),Object(m.jsx)("p",{children:i.overview}),Object(m.jsxs)("div",{className:M.a.summary,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"Status"})," ",Object(m.jsx)("span",{children:i.status})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"Duration"})," ",Object(m.jsxs)("span",{children:[i.runtime," minutes"]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"Languages"}),i.spoken_languages?i.spoken_languages.map((function(e,t){return Object(m.jsx)("span",{className:M.a.langs,children:e.english_name},t)})):null]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"Rate"})," ",Object(m.jsxs)("span",{children:[" ",i.vote_average]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"Budget"})," ",Object(m.jsx)("span",{children:0===i.budget||null==i.budget?"Budjet not found":i.budget+" $"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"Production countries"}),i.production_countries?i.production_countries.map((function(e,t){return Object(m.jsx)("span",{className:M.a.langs,children:e.name},t)})):null]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"Production companies"}),i.production_companies?i.production_companies.map((function(e,t){return Object(m.jsx)("span",{className:M.a.langs,children:e.name},t)})):null]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"Key words"}),i.genres?i.genres.map((function(e,t){return Object(m.jsx)("span",{className:M.a.langs,children:e.name},t)})):null]})]}),Object(m.jsx)("div",{className:M.a.btn,children:Object(m.jsx)("a",{href:i.homepage,target:"_blank",children:Object(m.jsxs)("button",{children:["Click here to watch ",Object(m.jsx)("i",{className:"far fa-play-circle"})]})})})]})]})},E=function(e){var t=e.movie,c=e.type,n=Object(a.useContext)(S),s=n.addMovieToWatchList,i=n.watchList,r=n.removeMovieFromWatchList,l=n.setID,d=n.id,j=Object(a.useState)(!1),b=Object(p.a)(j,2),h=b[0],u=b[1],O=function(){u(!h)},v=Object(o.g)(),f=function(){l(t.id),v.push("movies/movieOverview/id=".concat(t.id))},x=!!i.find((function(e){return e.id===t.id})),_=Object(m.jsxs)("div",{className:g.a.card,children:[Object(m.jsx)("img",{onClick:f,src:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path):"https://sd.keepcalms.com/i/keep-calm-poster-not-found.png",alt:"".concat(t.title," Poster")}),Object(m.jsxs)("div",{className:g.a.text,children:[Object(m.jsx)("h5",{children:t.title?t.title:"unknown Name"}),Object(m.jsxs)("p",{className:g.a.details,children:[h?t.overview:t.overview.split(" ").slice(0,12).join(" "),h?Object(m.jsx)("span",{onClick:O,children:" Show Less"}):Object(m.jsx)("span",{onClick:O,children:" Show More"})]})]}),Object(m.jsx)("div",{className:g.a.rate,children:Object(m.jsxs)("span",{children:[" ",t.vote_average," "]})}),Object(m.jsx)("abbr",{title:"Add to favourite",children:Object(m.jsx)("button",{onClick:function(){return function(e){s(e)}(t)},disabled:x,children:x?"Added!":"Add"})})]});return"favourite"===c&&(_=Object(m.jsxs)("div",{className:g.a.card2,children:[Object(m.jsx)("img",{onClick:f,src:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path):"https://sd.keepcalms.com/i/keep-calm-poster-not-found.png",alt:"".concat(t.title," Poster")}),Object(m.jsx)("div",{className:g.a.btns,children:Object(m.jsx)("button",{onClick:function(){return function(e){r(e)}(t.id)},children:Object(m.jsx)("i",{className:"fas fa-trash-alt"})})})]})),Object(m.jsxs)("div",{children:[Object(m.jsx)(o.b,{path:"movies/movieOverview/".concat(d),component:T}),_]})},A=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=8e1b4952140dfb6e08f859338eb922de&language=en-US&page=1").then((function(e){return e.json()})).then((function(e){e.errors?n([]):n(e.results),console.log("[Results] = ",c)})).catch((function(e){console.log("Error => ",e)}))}),[]),Object(m.jsxs)("div",{className:x.a.trending,children:[Object(m.jsx)("h2",{children:"Trending"}),Object(m.jsx)("div",{className:x.a.cards,children:c.length>0?c.map((function(e){return Object(m.jsx)(E,{movie:e},e.id)})):null})]})},I=c(28),D=c.n(I),R=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),i=Object(p.a)(s,2),r=i[0],o=i[1];return Object(m.jsxs)("div",{className:D.a.movies,children:[Object(m.jsxs)("div",{className:D.a.search,children:[Object(m.jsx)("i",{className:"fas fa-search"}),Object(m.jsx)("input",{type:"search",placeholder:"Search A Movie ",value:c,onChange:function(e){e.preventDefault(),n(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=8e1b4952140dfb6e08f859338eb922de&language=en-US&query=".concat(c,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){e.errors?o([]):o(e.results),console.log("[Results] = ",r)})).catch((function(e){console.log("Error => ",e)}))},autoFocus:!0})]}),Object(m.jsx)("div",{className:D.a.cards,children:r.length>0?r.map((function(e){return Object(m.jsx)(E,{movie:e},e.id)})):Object(m.jsx)("h4",{children:"Serach For A Movie!"})})]})},W=c(36),F=c.n(W),P=function(){var e=Object(a.useContext)(S).watchList;return Object(m.jsxs)("div",{className:F.a.favourite,children:[Object(m.jsxs)("h2",{children:["Watch List"," ",Object(m.jsxs)("span",{children:[e.length," ",1===e.length?"Movie":"Movies"]})]}),Object(m.jsx)("div",{className:F.a.cards,children:0!==e.length?e.map((function(e){return Object(m.jsx)(E,{movie:e,type:"favourite"})})):Object(m.jsx)("h4",{children:" Watch List is Empty, add some!"})})]})};function B(){var e=Object(o.h)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var V=c(29),H=c.n(V),J=c(37),K=c.n(J),U=function(e){var t=Object(a.useState)(""),c=Object(p.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){s(e.name)}),[]),Object(m.jsxs)("div",{className:K.a.msg,children:[Object(m.jsxs)("div",{className:K.a.left,children:[Object(m.jsx)("img",{src:"https://image.shutterstock.com/image-illustration/photo-silhouette-male-profile-white-260nw-1018631086.jpg",alt:"Avatar"}),Object(m.jsx)("h5",{children:n})]}),Object(m.jsx)("p",{children:e.msg}),Object(m.jsxs)("span",{children:[" ",e.date," "]})]})},Y=c(38),z=c.n(Y),Q=function(e){var t=["Harry","Ross","Bruce","Cook","Carolyn","Morgan","Albert","Walker","Randy","Reed","Larry","Barnes","Lois","Wilson","Jesse","Campbell","Ernest","Rogers","Theresa","Patterson","Henry","Simmons","Michelle","Perry","Frank","Butler","Shirley"],c=Object(a.useState)(""),n=Object(p.a)(c,2),s=n[0],i=n[1],r=Object(a.useState)("false"),o=Object(p.a)(r,2),l=o[0],d=o[1],j=Object(a.useState)([]),b=Object(p.a)(j,2),h=b[0],u=b[1],O=function(){i("")};Object(a.useEffect)((function(){z.a.get("https://portfolio-fc720-default-rtdb.firebaseio.com/Comments.json").then((function(e){var t=[];for(var c in e.data)t.unshift(e.data[c]);u(t),d(!1)})).catch((function(e){console.log(e),d(!1)}))}),[h]);var v=Object(m.jsx)(m.Fragment,{children:h.reverse().map((function(e){return Object(m.jsx)(U,{msg:e.comment,date:e.date,name:t[Math.floor(Math.random()*t.length)]+" "+t[Math.floor(Math.random()*t.length)]},e.date)}))});return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:H.a.heading,children:"Comments "}),Object(m.jsxs)("div",{className:H.a.box,children:[Object(m.jsx)("textarea",{placeholder:"Add Comment",rows:"4",value:s,onChange:function(e){return i(e.target.value)}}),Object(m.jsxs)("div",{className:H.a.btn,children:[Object(m.jsx)("button",{disabled:""===s.trim(),onClick:function(e){e.preventDefault(),O(),d(!0);var t=(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString(),c={comment:s,date:t};z.a.post("https://portfolio-fc720-default-rtdb.firebaseio.com/Comments.json",c).then((function(e){d(!1)})).catch((function(e){console.log(e),d(!1)}))},children:l?"Loading...":"Post"}),Object(m.jsx)("button",{onClick:O,children:"Cancel"})]}),v]})]})};var X=function(){var e=Object(a.useContext)(S).id;return Object(m.jsx)(k,{children:Object(m.jsx)("body",{"data-theme":"light",children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsx)("div",{className:"box",children:Object(m.jsx)(Q,{})})}),Object(m.jsx)("div",{className:"middle",children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(B,{}),Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{exact:!0,path:"/Movies-App",children:Object(m.jsx)(R,{})}),Object(m.jsx)(o.b,{path:"/trending",children:Object(m.jsx)(A,{})}),Object(m.jsx)(o.b,{path:"/favourite",children:Object(m.jsx)(P,{})}),Object(m.jsx)(o.b,{path:e,children:Object(m.jsx)(T,{})}),Object(m.jsx)(o.a,{exact:!0,to:"/Movies-App"})]}),Object(m.jsx)(v,{})]})})]})})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,94)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(X,{})}),document.getElementById("root")),q()}},[[88,1,2]]]);
//# sourceMappingURL=main.a74d7193.chunk.js.map