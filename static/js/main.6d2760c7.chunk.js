(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{20:function(e,t,a){e.exports={card:"filmCard_card__1GYKs",text:"filmCard_text__3QY-t",rate:"filmCard_rate__32fyT",card2:"filmCard_card2__1U-hs",btns:"filmCard_btns__5nTHf"}},22:function(e,t,a){e.exports={nav:"navBar_nav__1yc8R",active:"navBar_active__10_oE",brand:"navBar_brand__1OCCo"}},27:function(e,t,a){e.exports={movies:"movies_movies__3mjNO",search:"movies_search__k0iO4",cards:"movies_cards__3YfpX"}},28:function(e,t,a){e.exports={box:"comments_box__arK8F",heading:"comments_heading__3uKBW",btn:"comments_btn__2Okah"}},34:function(e,t,a){e.exports={trending:"trending_trending__kAyVV",cards:"trending_cards__21EId"}},35:function(e,t,a){e.exports={favourite:"favourite_favourite__hFR2t",cards:"favourite_cards__1P3ai"}},36:function(e,t,a){e.exports={msg:"comment_msg__zo_Et",left:"comment_left__aKo5C"}},54:function(e,t,a){e.exports={overview:"movieOverview_overview__2L8Ru"}},60:function(e,t,a){},61:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(17),i=a.n(s),r=(a(60),a(18)),o=a(5),l=(a(61),a(22)),d=a.n(l),j=a(92),h=a(91),b=a(93),u=a(19),O=a.n(u),m=a(1),v=function(){return O()(document).ready((function(){O()((function(){O()(document).click((function(e){var t=O()(e.target);!0!==O()(".navbar-collapse").hasClass("navbar-collapse collapse show")||t.hasClass("navbar-toggler")||O()("button.navbar-toggler").click()}))}))})),Object(m.jsx)("div",{children:Object(m.jsx)(j.a,{expand:"md",fixed:"top",className:d.a.nav,id:"nav",children:Object(m.jsxs)(h.a,{id:"container",children:[Object(m.jsxs)(j.a.Brand,{href:"/Movies-App",className:d.a.brand,style:{color:"#130f40"},children:["Top-Movies"," ",Object(m.jsx)("i",{className:"fas fa-film",style:{fontSize:"30px",color:"#d35400"}})]}),Object(m.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsxs)(b.a,{className:"ms-auto",children:[Object(m.jsx)(b.a.Link,{exact:!0,as:r.b,to:"/Movies-App",activeClassName:d.a.active,children:"Movies"}),Object(m.jsx)(b.a.Link,{as:r.b,to:"/trending",activeClassName:d.a.active,children:"Trending"}),Object(m.jsx)(b.a.Link,{as:r.b,to:"/favourite",activeClassName:d.a.active,children:"Favourite"})]})})]})})})},f=a(4),p=a(34),x=a.n(p),_=a(20),g=a.n(_),w=a(55),C=a(2),N=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCH_LIST":return Object(C.a)(Object(C.a)({},e),{},{watchList:[].concat(Object(w.a)(e.watchList),[t.payload])});case"REMOVE_MOVIE_TO_WATCH_LIST":return Object(C.a)(Object(C.a)({},e),{},{watchList:e.watchList.filter((function(e){return e.id!==t.payload}))});case"SET_ID":return Object(C.a)(Object(C.a)({},e),{},{id:t.payload});default:return e}},S={watchList:JSON.parse(localStorage.getItem("watchList"))||[],watched:JSON.parse(localStorage.getItem("watched"))||[],id:""},y=Object(c.createContext)(S),L=function(e){var t=Object(c.useReducer)(N,S),a=Object(f.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){localStorage.setItem("watchList",JSON.stringify(n.watchList)),localStorage.setItem("watched",JSON.stringify(n.watched))}),[n]);return Object(m.jsx)(y.Provider,{value:{watchList:n.watchList,watched:n.watched,addMovieToWatchList:function(e){s({type:"ADD_MOVIE_TO_WATCH_LIST",payload:e})},removeMovieFromWatchList:function(e){s({type:"REMOVE_MOVIE_TO_WATCH_LIST",payload:e})},setID:function(e){s({type:"SET_ID",payload:e})}},children:e.children})},M=a(54),T=a.n(M),k=function(){return Object(m.jsx)("div",{className:T.a.overview,children:"This IS Movie Overview !"})},E=function(e){var t=e.movie,a=e.type,n=Object(c.useContext)(y),s=n.addMovieToWatchList,i=n.watchList,r=n.removeMovieFromWatchList,o=(n.setID,n.id,Object(c.useState)(!1)),l=Object(f.a)(o,2),d=l[0],j=l[1],h=function(){j(!d)},b=!!i.find((function(e){return e.id===t.id})),u=Object(m.jsxs)("div",{className:g.a.card,children:[Object(m.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path):"https://sd.keepcalms.com/i/keep-calm-poster-not-found.png",alt:"".concat(t.title," Poster")}),Object(m.jsxs)("div",{className:g.a.text,children:[Object(m.jsx)("h5",{children:t.title?t.title:"unknown Name"}),Object(m.jsxs)("p",{className:g.a.details,children:[d?t.overview:t.overview.split(" ").slice(0,12).join(" "),d?Object(m.jsx)("span",{onClick:h,children:" Show Less"}):Object(m.jsx)("span",{onClick:h,children:" Show More"})]})]}),Object(m.jsx)("div",{className:g.a.rate,children:Object(m.jsxs)("span",{children:[" ",t.vote_average," "]})}),Object(m.jsx)("abbr",{title:"Add to favourite",children:Object(m.jsx)("button",{onClick:function(){return function(e){s(e)}(t)},disabled:b,children:b?"Added!":"Add"})})]});return"favourite"===a&&(u=Object(m.jsxs)("div",{className:g.a.card2,children:[Object(m.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path):"https://sd.keepcalms.com/i/keep-calm-poster-not-found.png",alt:"".concat(t.title," Poster")}),Object(m.jsx)("div",{className:g.a.btns,children:Object(m.jsx)("button",{onClick:function(){return function(e){r(e)}(t.id)},children:Object(m.jsx)("i",{className:"fas fa-trash-alt"})})})]})),Object(m.jsx)("div",{children:u})},A=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=8e1b4952140dfb6e08f859338eb922de&language=en-US&page=1").then((function(e){return e.json()})).then((function(e){e.errors?n([]):n(e.results),console.log("[Results] = ",a)})).catch((function(e){console.log("Error => ",e)}))}),[]),Object(m.jsxs)("div",{className:x.a.trending,children:[Object(m.jsx)("h2",{children:"Trending"}),Object(m.jsx)("div",{className:x.a.cards,children:a.length>0?a.map((function(e){return Object(m.jsx)(E,{movie:e},e.id)})):null})]})},I=a(27),D=a.n(I),F=function(e){var t=Object(c.useState)(""),a=Object(f.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)([]),r=Object(f.a)(i,2),o=r[0],l=r[1];return Object(m.jsxs)("div",{className:D.a.movies,children:[Object(m.jsxs)("div",{className:D.a.search,children:[Object(m.jsx)("i",{className:"fas fa-search"}),Object(m.jsx)("input",{type:"search",placeholder:"Search A Movie ",value:n,onChange:function(e){e.preventDefault(),s(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=8e1b4952140dfb6e08f859338eb922de&language=en-US&query=".concat(n,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){e.errors?l([]):l(e.results),console.log("[Results] = ",o)})).catch((function(e){console.log("Error => ",e)}))},autoFocus:!0})]}),Object(m.jsx)("div",{className:D.a.cards,children:o.length>0?o.map((function(e){return Object(m.jsx)(E,{movie:e},e.id)})):Object(m.jsx)("h4",{children:"Serach For A Movie!"})})]})},W=a(35),R=a.n(W),B=function(e){var t=Object(c.useContext)(y).watchList;return Object(m.jsxs)("div",{className:R.a.favourite,children:[Object(m.jsxs)("h2",{children:["Watch List"," ",Object(m.jsxs)("span",{children:[t.length," ",1===t.length?"Movie":"Movies"]})]}),Object(m.jsx)("div",{className:R.a.cards,children:0!==t.length?t.map((function(e){return Object(m.jsx)(E,{movie:e,type:"favourite"})})):Object(m.jsx)("h4",{children:" Watch List is Empty, add some!"})})]})};function P(){var e=Object(o.g)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var V=a(28),H=a.n(V),J=a(36),K=a.n(J),U=function(e){var t=Object(c.useState)(""),a=Object(f.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){s(e.name)}),[]),Object(m.jsxs)("div",{className:K.a.msg,children:[Object(m.jsxs)("div",{className:K.a.left,children:[Object(m.jsx)("img",{src:"https://image.shutterstock.com/image-illustration/photo-silhouette-male-profile-white-260nw-1018631086.jpg",alt:"Avatar"}),Object(m.jsx)("h5",{children:n})]}),Object(m.jsx)("p",{children:e.msg}),Object(m.jsxs)("span",{children:[" ",e.date," "]})]})},Y=a(37),z=a.n(Y),q=function(e){var t=["Harry","Ross","Bruce","Cook","Carolyn","Morgan","Albert","Walker","Randy","Reed","Larry","Barnes","Lois","Wilson","Jesse","Campbell","Ernest","Rogers","Theresa","Patterson","Henry","Simmons","Michelle","Perry","Frank","Butler","Shirley"],a=Object(c.useState)(""),n=Object(f.a)(a,2),s=n[0],i=n[1],r=Object(c.useState)("false"),o=Object(f.a)(r,2),l=o[0],d=o[1],j=Object(c.useState)([]),h=Object(f.a)(j,2),b=h[0],u=h[1],O=function(){i("")};Object(c.useEffect)((function(){z.a.get("https://portfolio-fc720-default-rtdb.firebaseio.com/Comments.json").then((function(e){var t=[];for(var a in e.data)t.unshift(e.data[a]);u(t),d(!1)})).catch((function(e){console.log(e),d(!1)}))}),[b]);var v=Object(m.jsx)(m.Fragment,{children:b.reverse().map((function(e){return Object(m.jsx)(U,{msg:e.comment,date:e.date,name:t[Math.floor(Math.random()*t.length)]+" "+t[Math.floor(Math.random()*t.length)]},e.date)}))});return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:H.a.heading,children:"Comments "}),Object(m.jsxs)("div",{className:H.a.box,children:[Object(m.jsx)("textarea",{placeholder:"Add Comment",rows:"4",value:s,onChange:function(e){return i(e.target.value)}}),Object(m.jsxs)("div",{className:H.a.btn,children:[Object(m.jsx)("button",{disabled:""===s.trim(),onClick:function(e){e.preventDefault(),O(),d(!0);var t=(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString(),a={comment:s,date:t};z.a.post("https://portfolio-fc720-default-rtdb.firebaseio.com/Comments.json",a).then((function(e){d(!1)})).catch((function(e){console.log(e),d(!1)}))},children:l?"Loading...":"Post"}),Object(m.jsx)("button",{onClick:O,children:"Cancel"})]}),v]})]})};var G=function(){var e=Object(c.useContext)(y).id;return Object(m.jsx)(L,{children:Object(m.jsx)("body",{"data-theme":"light",children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsx)("div",{className:"box",children:Object(m.jsx)(q,{})})}),Object(m.jsx)("div",{className:"middle",children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(P,{}),Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{exact:!0,path:"/Movies-App",children:Object(m.jsx)(F,{})}),Object(m.jsx)(o.b,{path:"/trending",children:Object(m.jsx)(A,{})}),Object(m.jsx)(o.b,{path:"/favourite",children:Object(m.jsx)(B,{})}),Object(m.jsx)(o.b,{path:e,children:Object(m.jsx)(k,{})}),Object(m.jsx)(o.a,{exact:!0,to:"/Movies-App"})]}),Object(m.jsx)(v,{})]})})]})})})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,94)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(G,{})}),document.getElementById("root")),Q()}},[[88,1,2]]]);
//# sourceMappingURL=main.6d2760c7.chunk.js.map