(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{19:function(e,t,a){e.exports={card:"filmCard_card__1GYKs",text:"filmCard_text__3QY-t",rate:"filmCard_rate__32fyT",card2:"filmCard_card2__1U-hs",btns:"filmCard_btns__5nTHf"}},21:function(e,t,a){e.exports={nav:"navBar_nav__1yc8R",active:"navBar_active__10_oE",brand:"navBar_brand__1OCCo"}},26:function(e,t,a){e.exports={movies:"movies_movies__3mjNO",search:"movies_search__k0iO4",cards:"movies_cards__3YfpX"}},27:function(e,t,a){e.exports={box:"comments_box__arK8F",heading:"comments_heading__3uKBW",btn:"comments_btn__2Okah"}},33:function(e,t,a){e.exports={trending:"trending_trending__kAyVV",cards:"trending_cards__21EId"}},34:function(e,t,a){e.exports={favourite:"favourite_favourite__hFR2t",cards:"favourite_cards__1P3ai"}},35:function(e,t,a){e.exports={msg:"comment_msg__zo_Et",left:"comment_left__aKo5C"}},58:function(e,t,a){},59:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(17),i=a.n(s),r=(a(58),a(18)),o=a(5),l=(a(59),a(21)),d=a.n(l),j=a(90),h=a(89),b=a(91),u=a(1),m=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(j.a,{expand:"md",fixed:"top",className:d.a.nav,id:"nav",children:Object(u.jsxs)(h.a,{id:"container",children:[Object(u.jsxs)(j.a.Brand,{href:"/",className:d.a.brand,style:{color:"#130f40"},children:["Top-Movies"," ",Object(u.jsx)("i",{className:"fas fa-film",style:{fontSize:"30px",color:"#d35400"}})]}),Object(u.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(b.a,{className:"ms-auto",children:[Object(u.jsx)(b.a.Link,{exact:!0,as:r.b,to:"/",activeClassName:d.a.active,children:"Movies"}),Object(u.jsx)(b.a.Link,{as:r.b,to:"/trending",activeClassName:d.a.active,children:"Trending"}),Object(u.jsx)(b.a.Link,{as:r.b,to:"/favourite",activeClassName:d.a.active,children:"Favourite"})]})})]})})})},O=a(4),f=a(33),v=a.n(f),p=a(19),x=a.n(p),_=a(53),g=a(2),w=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCH_LIST":return Object(g.a)(Object(g.a)({},e),{},{watchList:[].concat(Object(_.a)(e.watchList),[t.payload])});case"REMOVE_MOVIE_TO_WATCH_LIST":return Object(g.a)(Object(g.a)({},e),{},{watchList:e.watchList.filter((function(e){return e.id!==t.payload}))});default:return e}},C={watchList:JSON.parse(localStorage.getItem("watchList"))||[],watched:JSON.parse(localStorage.getItem("watched"))||[]},N=Object(c.createContext)(C),L=function(e){var t=Object(c.useReducer)(w,C),a=Object(O.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){localStorage.setItem("watchList",JSON.stringify(n.watchList)),localStorage.setItem("watched",JSON.stringify(n.watched))}),[n]);return Object(u.jsx)(N.Provider,{value:{watchList:n.watchList,watched:n.watched,addMovieToWatchList:function(e){s({type:"ADD_MOVIE_TO_WATCH_LIST",payload:e})},removeMovieFromWatchList:function(e){s({type:"REMOVE_MOVIE_TO_WATCH_LIST",payload:e})}},children:e.children})},S=function(e){var t=e.movie,a=e.type,n=Object(c.useContext)(N),s=n.addMovieToWatchList,i=n.watchList,r=n.removeMovieFromWatchList,o=Object(c.useState)(!1),l=Object(O.a)(o,2),d=l[0],j=l[1],h=function(){j(!d)},b=!!i.find((function(e){return e.id===t.id})),m=Object(u.jsxs)("div",{className:x.a.card,children:[Object(u.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path):"https://sd.keepcalms.com/i/keep-calm-poster-not-found.png",alt:"".concat(t.title," Poster")}),Object(u.jsxs)("div",{className:x.a.text,children:[Object(u.jsx)("h5",{children:t.title?t.title:"unknown Name"}),Object(u.jsxs)("p",{className:x.a.details,children:[d?t.overview:t.overview.split(" ").slice(0,12).join(" "),d?Object(u.jsx)("span",{onClick:h,children:" Show Less"}):Object(u.jsx)("span",{onClick:h,children:" Show More"})]})]}),Object(u.jsx)("div",{className:x.a.rate,children:Object(u.jsxs)("span",{children:[" ",t.vote_average," "]})}),Object(u.jsx)("abbr",{title:"Add to favourite",children:Object(u.jsx)("button",{onClick:function(){return function(e){s(e),window.location.reload("/")}(t)},disabled:b,children:b?"Added!":"Add"})})]});return"favourite"===a&&(m=Object(u.jsxs)("div",{className:x.a.card2,children:[Object(u.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path):"https://sd.keepcalms.com/i/keep-calm-poster-not-found.png",alt:"".concat(t.title," Poster")}),Object(u.jsx)("div",{className:x.a.btns,children:Object(u.jsxs)("button",{onClick:function(){return e=t.id,r(e),void window.location.reload("/");var e},children:[Object(u.jsx)("i",{className:"fas fa-trash-alt"})," "]})})]})),Object(u.jsxs)("div",{children:[" ",m," "]})},y=function(e){e.movie;var t=Object(c.useState)([]),a=Object(O.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=8e1b4952140dfb6e08f859338eb922de&language=en-US&page=1").then((function(e){return e.json()})).then((function(e){e.errors?s([]):s(e.results),console.log("[Results] = ",n)})).catch((function(e){console.log("Error => ",e)}))}),[]),Object(u.jsx)(L,{children:Object(u.jsxs)("div",{className:v.a.trending,children:[Object(u.jsx)("h2",{children:"Trending"}),Object(u.jsx)("div",{className:v.a.cards,children:n.length>0?n.map((function(e){return Object(u.jsx)(S,{movie:e},e.id)})):null})]})})},k=a(26),T=a.n(k),M=function(e){var t=Object(c.useState)(""),a=Object(O.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)([]),r=Object(O.a)(i,2),o=r[0],l=r[1];return Object(u.jsx)(L,{children:Object(u.jsxs)("div",{className:T.a.movies,children:[Object(u.jsxs)("div",{className:T.a.search,children:[Object(u.jsx)("i",{className:"fas fa-search"}),Object(u.jsx)("input",{type:"search",placeholder:"Search A Movie ",value:n,onChange:function(e){e.preventDefault(),s(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=8e1b4952140dfb6e08f859338eb922de&language=en-US&query=".concat(n,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){e.errors?l([]):l(e.results),console.log("[Results] = ",o)})).catch((function(e){console.log("Error => ",e)}))},autoFocus:!0})]}),Object(u.jsx)("div",{className:T.a.cards,children:o.length>0?o.map((function(e){return Object(u.jsx)(S,{movie:e},e.id)})):Object(u.jsx)("h4",{children:"Serach For A Movie!"})})]})})},E=a(34),A=a.n(E),I=function(e){var t=Object(c.useContext)(N).watchList;return Object(u.jsx)(L,{children:Object(u.jsxs)("div",{className:A.a.favourite,children:[Object(u.jsx)("h2",{children:"Watch List"}),Object(u.jsx)("div",{className:A.a.cards,children:t?t.map((function(e){return Object(u.jsx)(S,{movie:e,type:"favourite"})})):Object(u.jsx)("div",{children:" Watch List is Empty."})})]})})};function F(){var e=Object(o.g)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var W=a(27),R=a.n(W),B=a(35),D=a.n(B),P=function(e){var t=Object(c.useState)(""),a=Object(O.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){s(e.name)}),[]),Object(u.jsxs)("div",{className:D.a.msg,children:[Object(u.jsxs)("div",{className:D.a.left,children:[Object(u.jsx)("img",{src:"https://image.shutterstock.com/image-illustration/photo-silhouette-male-profile-white-260nw-1018631086.jpg",alt:"Avatar"}),Object(u.jsx)("h5",{children:n})]}),Object(u.jsx)("p",{children:e.msg}),Object(u.jsxs)("span",{children:[" ",e.date," "]})]})},V=a(36),H=a.n(V),J=function(e){var t=["Harry","Ross","Bruce","Cook","Carolyn","Morgan","Albert","Walker","Randy","Reed","Larry","Barnes","Lois","Wilson","Jesse","Campbell","Ernest","Rogers","Theresa","Patterson","Henry","Simmons","Michelle","Perry","Frank","Butler","Shirley"],a=Object(c.useState)(""),n=Object(O.a)(a,2),s=n[0],i=n[1],r=Object(c.useState)("false"),o=Object(O.a)(r,2),l=o[0],d=o[1],j=Object(c.useState)([]),h=Object(O.a)(j,2),b=h[0],m=h[1],f=function(){i("")};Object(c.useEffect)((function(){H.a.get("https://portfolio-fc720-default-rtdb.firebaseio.com/Comments.json").then((function(e){var t=[];for(var a in e.data)t.unshift(e.data[a]);m(t),d(!1)})).catch((function(e){console.log(e),d(!1)}))}),[b]);var v=Object(u.jsx)(u.Fragment,{children:b.reverse().map((function(e){return Object(u.jsx)(P,{msg:e.comment,date:e.date,name:t[Math.floor(Math.random()*t.length)]+" "+t[Math.floor(Math.random()*t.length)]},e.date)}))});return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:R.a.heading,children:"Comments "}),Object(u.jsxs)("div",{className:R.a.box,children:[Object(u.jsx)("textarea",{placeholder:"Add Comment",rows:"4",value:s,onChange:function(e){return i(e.target.value)}}),Object(u.jsxs)("div",{className:R.a.btn,children:[Object(u.jsx)("button",{disabled:""===s.trim(),onClick:function(e){e.preventDefault(),f(),d(!0);var t=(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString(),a={comment:s,date:t};H.a.post("https://portfolio-fc720-default-rtdb.firebaseio.com/Comments.json",a).then((function(e){d(!1)})).catch((function(e){console.log(e),d(!1)}))},children:l?"Loading...":"Post"}),Object(u.jsx)("button",{onClick:f,children:"Cancel"})]}),v]})]})};var K=function(){return Object(u.jsx)("body",{"data-theme":"light",children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)("div",{className:"box",children:Object(u.jsx)(J,{})})}),Object(u.jsx)("div",{className:"middle",children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(F,{}),Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",component:M}),Object(u.jsx)(o.b,{path:"/trending",component:y}),Object(u.jsx)(o.b,{path:"/favourite",component:I}),Object(u.jsx)(o.a,{to:"/"})]}),Object(u.jsx)(m,{})]})})]})})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,92)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(K,{})}),document.getElementById("root")),U()}},[[86,1,2]]]);
//# sourceMappingURL=main.7865c463.chunk.js.map