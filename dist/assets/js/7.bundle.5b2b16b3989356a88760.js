(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{655:function(e,t,o){"use strict";o.r(t),function(e){var r,n=o(42),a=o(720),s=o(32),c=o(662);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;Object(s.c)(n.a,n.c,[{key:"competition",reducer:c.a}]);var i,u,l=a.a;t.default=l,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&i.register(l,"default","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/routes/game/index.js"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}.call(this,o(10)(e))},662:function(e,t,o){"use strict";(function(e){o.d(t,"f",(function(){return f})),o.d(t,"b",(function(){return y})),o.d(t,"e",(function(){return g})),o.d(t,"d",(function(){return j})),o.d(t,"g",(function(){return v})),o.d(t,"c",(function(){return O}));var r,n,a=o(11),s=o.n(a),c=o(16),i=o(32);function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(o,!0).forEach((function(t){s()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,p,m=Object(c.b)("@@COMPETITION"),f=m("SET_ROOM_ID"),y=m("SET_COMPETITION"),b=m("REMOVE_ROOM_ID"),g=m("SET_PLAYER"),j=m("SET_LEVEL"),v=m("SET_TIPS"),O=m("SET_IMAGE"),w={roomId:null,player:2,level:"easy",image:"0",tips:!1,users:{},grids:[]},E=(r={},s()(r,f.type,(function(e,t){return l({},e,{roomId:t.payload.roomId})})),s()(r,y.type,(function(e,t){return l({},e,{},t.payload)})),s()(r,b.type,(function(e){return l({},e,{roomId:null})})),s()(r,g.type,(function(e,t){return l({},e,{player:t.payload})})),s()(r,j.type,(function(e,t){return l({},e,{level:t.payload})})),s()(r,v.type,(function(e,t){return l({},e,{tips:t.payload})})),s()(r,O.type,(function(e,t){return l({},e,{image:t.payload})})),r),h=Object(i.a)(w,E),z=h;t.a=z,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(m,"actionCreator","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(f,"setRoomId","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(y,"setCompetition","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(b,"removeRoomId","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(g,"setPlayer","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(j,"setLevel","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(v,"setTips","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(O,"setImage","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(w,"initialState","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(E,"handlers","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(h,"reducers","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(z,"default","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/modules/competition.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,o(10)(e))},720:function(e,t,o){"use strict";(function(e){var r,n=o(11),a=o.n(n),s=o(28),c=o.n(s),i=o(0),u=o.n(i),l=o(35),d=o(118),p=o(721),m=o(14),f=o(181),y=o(196),b=o(662),g=o(614),j=o(404),v=o(656),O=o.n(v),w=o(25),E=o(117),h=o(657),z=o.n(h),L=o(371),G=o(21),x=o(16),D=o(112),H=o(180),P=o(42);function S(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var M="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},I=function(){var e=Object(m.d)(),t=Object(m.e)((function(e){return e.competition})),o=t.roomId,r=t.player,n=t.level,s=t.image,v=t.tips,h=t.users,M=Object(m.e)((function(e){return e.auth})).loggedIn,I=Object(i.useState)(!0),U=c()(I,2),k=U[0],T=U[1],C=Object(E.a)(5,"backward",(function(){C.setTimerState("reset"),T(!1)})),_=Object(i.useState)(!0),R=c()(_,2),A=R[0],Y=R[1],B=Object(i.useState)(3),N=c()(B,2),F=N[0],J=N[1],V=Object(i.useState)([]),q=c()(V,2),K=q[0],Q=q[1],W=Object(i.useState)(null),X=c()(W,2),Z=X[0],$=X[1],ee=Object(i.useState)(""),te=c()(ee,2),oe=te[0],re=te[1],ne=Object(D.a)("Message",oe,Object(i.useCallback)((function(){ie(),P.a.push("/competition")}),[])),ae=ne.ModelBox,se=ne.isShown,ce=ne.showModal,ie=ne.hideModal;Object(i.useEffect)((function(){var e=G.a[n];J(e),Q(Object(x.e)(300,G.a[n]))}),[]),Object(i.useEffect)((function(){var t;return null!==o&&(t=f.database().ref("/competition/".concat(o))).on("value",(function(o){var r=o.val();if(void 0!==r.winner)return r.winner===M.uid?re("You are the winner."):re("You are the loser"),ce(),void t.off();$(r.users[M.uid].grids),e(Object(b.b)(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?S(o,!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):S(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},r))),r.allReady&&!0===A&&(C.setTimerState("started"),Y(!1))})),function(){null!==o&&t.off()}}),[A,M]);var ue=Object(i.useCallback)((function(){var e={};e["/competition/".concat(o,"/users/").concat(M.uid,"/ready")]=!0,f.database().ref().update(e)}),[o,M]);return u.a.createElement(l.h,null,u.a.createElement(d.a,{title:"Multi Player Game",prev:u.a.createElement(y.a,null)}),u.a.createElement(p.a,null,Object.keys(h).length>0?u.a.createElement(u.a.Fragment,null,u.a.createElement(p.e,null,Object.keys(h).map((function(e){return u.a.createElement(p.d,{key:e},u.a.createElement(p.b,{avatar:h[e].avatar,ready:h[e].ready}),u.a.createElement(p.f,null,h[e].name),u.a.createElement(p.c,null,h[e].percent,"%"))})),Object(g.a)(j.a,r-Object.keys(h).length).map((function(e){return u.a.createElement(p.d,{key:e},u.a.createElement(p.b,null,u.a.createElement(O.a,{color:"#cccccc"})),u.a.createElement(p.f,null,"wait..."),u.a.createElement(p.c,null,"-%"))}))),u.a.createElement(w.m,{active:"reset"===C.timerState,first:k,duration:400},u.a.createElement(w.n,null,u.a.createElement(z.a,{value:"cp::".concat(o),size:300,includeMargin:!0})),u.a.createElement(w.l,null,u.a.createElement(L.a,{prepared:A,width:300,grids:Z,cols:F,image:s,tips:v,layoutPositionList:K,moveHandler:function(e,t){if(A||t.label===F*F-1)return!1;var r=Object(x.f)(t.position,F),n=Object(x.g)(Z,F);if(r.x===n.x&&1===Math.abs(r.y-n.y)||r.y===n.y&&1===Math.abs(r.x-n.x)){Z[n.idx].position=Z[e].position,Z[e].position=n.position,f.database().ref("/competition/".concat(o,"/users/").concat(M.uid,"/grids")).set(Z);var a=Object(x.a)(Z);f.database().ref("/competition/".concat(o,"/users/").concat(M.uid,"/percent")).set(a),a>=100&&f.database().ref("/competition/".concat(o,"/winner")).set(M.uid)}}}))),u.a.createElement(w.c,null,h[M.uid].ready?null:u.a.createElement(w.b,{onClick:ue},"I AM READY"))):"Loading..."),"started"===C.timerState?u.a.createElement(w.a,null,0===C.seconds?"GO":C.seconds):null,u.a.createElement(H.a,{isShow:se},u.a.createElement(ae,null)))};M(I,"useDispatch{dispatch}\nuseSelector{{ roomId, player, level, image, tips, users }}\nuseSelector{{ loggedIn }}\nuseState{[first, setFirst](true)}\nuseTimer{countDownTimer}\nuseState{[prepared, setPrepared](true)}\nuseState{[cols, setCols](3)}\nuseState{[layoutPositionList, setLayoutPositionList]([])}\nuseState{[grids, setGrids](null)}\nuseState{[msg, setMsg]('')}\nuseModel{{\n        ModelBox, isShown, showModal, hideModal\n    }}\nuseCallback{}\nuseEffect{}\nuseEffect{}\nuseCallback{ready}",(function(){return[m.d,m.e,m.e,E.a,D.a]}));var U,k,T=I;t.a=T,(U="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(U.register(I,"Game","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/routes/game/containers/game.js"),U.register(T,"default","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/routes/game/containers/game.js")),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&k(e)}).call(this,o(10)(e))},721:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return b})),o.d(t,"e",(function(){return g})),o.d(t,"d",(function(){return j})),o.d(t,"b",(function(){return v})),o.d(t,"f",(function(){return O})),o.d(t,"c",(function(){return w}));var r,n=o(6),a=o.n(n),s=o(5),c=o(35);function i(){var e=a()(["\n  width: 30px;\n  text-align: right;\n  align-self: center;\n"]);return i=function(){return e},e}function u(){var e=a()(["\n  width: calc(100% - 60px);\n  align-self: center;\n  overflow:hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);return u=function(){return e},e}function l(){var e=a()(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-right: 5px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: ",";\n"]);return l=function(){return e},e}function d(){var e=a()(["\n  width: 45%;\n  display: flex;\n  flex-wrap: nowrap;\n  padding: 5px 0;\n  color: ",";\n"]);return d=function(){return e},e}function p(){var e=a()(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 30px 15px;\n  padding: 10px 20px;\n  justify-content: space-between;\n  background-color: ",";\n  border-radius: 10px;\n"]);return p=function(){return e},e}function m(){var e=a()(["\n  display: flex;\n  align-content: flex-start;\n  flex-wrap: wrap;\n"]);return m=function(){return e},e}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var f,y,b=Object(s.default)(c.a)(m()),g=s.default.div(p(),(function(e){return e.theme.competitionPlayerListBgColor})),j=s.default.div(d(),(function(e){return e.theme.competitionItemTextColor})),v=s.default.div(l(),(function(e){return e.avatar}),(function(e){return e.ready?"#23ff4f":"#cccccc"})),O=s.default.div(u()),w=s.default.div(i());(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(b,"GameInner","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/routes/game/styles/index.js"),f.register(g,"PlayerList","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/routes/game/styles/index.js"),f.register(j,"PlayerItem","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/routes/game/styles/index.js"),f.register(v,"PlayerAvatar","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/routes/game/styles/index.js"),f.register(O,"PlayerName","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/routes/game/styles/index.js"),f.register(w,"PlayerGamePercent","/Users/jamesyu/Documents/my-personal/capoo-puzzle/src/routes/competition/routes/game/styles/index.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,o(10)(e))}}]);