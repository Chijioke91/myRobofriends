(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{28:function(e,t,r){e.exports=r(60)},29:function(e,t,r){},59:function(e,t,r){},60:function(e,t,r){"use strict";r.r(t);r(29);var n=r(0),a=r.n(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=r(4),c=r.n(o),s=r(5),i=r(2),l=r(20),u=(r(40),function(e){var t=e.robot,r=t.name,n=t.email,o=t.id;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(o,"?size=200x200"),alt:"robots"}),a.a.createElement("div",null,a.a.createElement("h2",null,r),a.a.createElement("p",null,n)))}),h=function(e){return e.robots.map((function(e){return a.a.createElement(u,{key:e.id,robot:e})}))},b=function(e){var t=e.onSearchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search Robots",onChange:function(e){return t(e)},className:"pa3 ba b--green bg-lightest-green",type:"text",placeholder:"search robots"}))},d=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"900px"}},e.children)},m=r(21),E=r(22),f=r(26),p=r(23),g=r(27),v=function(e){function t(){var e,r;Object(m.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},r}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"This is bad"):this.props.children}}]),t}(n.Component),O=r(9),S=r.n(O),_=r(24),y=r(25),C=r.n(y),w=(r(59),function(){return a.a.createElement("h1",{className:"f1"},"RoboFriends")}),R=Object(s.b)((function(e){return{term:e.searchRobots.term,robots:e.fetchRobots.robots,isLoading:e.fetchRobots.isLoading}}),{setSearchTerm:function(e){return{type:"CHANGE_SEARCH_TERM",payload:e}},fetchRobots:function(){return function(){var e=Object(_.a)(S.a.mark((function e(t){var r,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_ROBOTS_PENDING"}),e.prev=1,e.next=4,C.a.get("https://jsonplaceholder.typicode.com/users");case 4:r=e.sent,n=r.data,t({type:"FETCH_ROBOTS_SUCCESS",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"FETCH_ROBOTS_FAILED",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.term,r=e.setSearchTerm,o=e.fetchRobots,c=e.robots,s=e.isLoading;Object(n.useEffect)((function(){o()}),[o]);var i=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return s?a.a.createElement("h1",null,"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement(w,null),a.a.createElement(b,{onSearchChange:function(e){r(e.target.value)}}),a.a.createElement(d,null,a.a.createElement(v,null,a.a.createElement(h,{robots:i}))))})),T=r(3),j={term:""},L={robots:[],isLoading:!1,error:""},N=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case"CHANGE_SEARCH_TERM":return Object(T.a)({},e,{term:n});default:return e}},fetchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case"FETCH_ROBOTS_PENDING":return Object(T.a)({},e,{isLoading:!0});case"FETCH_ROBOTS_SUCCESS":return Object(T.a)({},e,{isLoading:!1,robots:n});case"FETCH_ROBOTS_FAILED":return Object(T.a)({},e,{isLoading:!1,error:n});default:return e}}}),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,H=Object(i.e)(N,k(Object(i.a)(l.a)));c.a.render(a.a.createElement(s.a,{store:H},a.a.createElement(R,null)),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.4758c298.chunk.js.map