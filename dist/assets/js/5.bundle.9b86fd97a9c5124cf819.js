(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{648:function(e,t,o){"use strict";o.r(t),function(e){var n,r=o(42),a=o(32),c=o(662),i=o(685);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;Object(a.c)(r.a,r.c,[{key:"competition",reducer:c.a}]);var l,s,u=i.a;t.default=u,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&l.register(u,"default","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/index.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}.call(this,o(10)(e))},662:function(e,t,o){"use strict";(function(e){o.d(t,"f",(function(){return m})),o.d(t,"b",(function(){return b})),o.d(t,"e",(function(){return v})),o.d(t,"d",(function(){return g})),o.d(t,"g",(function(){return y})),o.d(t,"c",(function(){return L}));var n,r,a=o(11),c=o.n(a),i=o(16),l=o(32);function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(o,!0).forEach((function(t){c()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,p,f=Object(i.b)("@@COMPETITION"),m=f("SET_ROOM_ID"),b=f("SET_COMPETITION"),j=f("REMOVE_ROOM_ID"),v=f("SET_PLAYER"),g=f("SET_LEVEL"),y=f("SET_TIPS"),L=f("SET_IMAGE"),h={roomId:null,player:2,level:"easy",image:"0",tips:!1,users:{},grids:[]},x=(n={},c()(n,m.type,(function(e,t){return u({},e,{roomId:t.payload.roomId})})),c()(n,b.type,(function(e,t){return u({},e,{},t.payload)})),c()(n,j.type,(function(e){return u({},e,{roomId:null})})),c()(n,v.type,(function(e,t){return u({},e,{player:t.payload})})),c()(n,g.type,(function(e,t){return u({},e,{level:t.payload})})),c()(n,y.type,(function(e,t){return u({},e,{tips:t.payload})})),c()(n,L.type,(function(e,t){return u({},e,{image:t.payload})})),n),G=Object(l.a)(h,x),H=G;t.a=H,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(f,"actionCreator","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(m,"setRoomId","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(b,"setCompetition","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(j,"removeRoomId","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(v,"setPlayer","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(g,"setLevel","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(y,"setTips","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(L,"setImage","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(h,"initialState","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(x,"handlers","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(G,"reducers","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/modules/competition.js"),d.register(H,"default","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/modules/competition.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,o(10)(e))},663:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return G})),o.d(t,"e",(function(){return H})),o.d(t,"h",(function(){return z})),o.d(t,"d",(function(){return O})),o.d(t,"f",(function(){return E})),o.d(t,"g",(function(){return k})),o.d(t,"b",(function(){return D})),o.d(t,"c",(function(){return w})),o.d(t,"i",(function(){return C}));var n,r=o(6),a=o.n(r),c=o(5),i=o(35);function l(){var e=a()(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  color: #fff;\n  padding: 20px 10px;\n  line-height: 1.2rem;\n  flex: 1 1 auto;\n  align-items: center;\n"]);return l=function(){return e},e}function s(){var e=a()(["\n            &:before {\n              content: 'Click to open the camera and take a QR code.';\n              position: absolute;\n            }\n          "]);return s=function(){return e},e}function u(){var e=a()(["\n  display: flex;\n  flex: 1 1 auto;\n  flex-wrap: wrap;\n  flex-direction: column;\n  width: 100%;\n  background-color: rgba(0,0,0);\n  overflow: auto;\n  align-content: flex-start;\n  .reader {\n    & > section {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 66vh !important;\n      padding-top: 0 !important;\n      & > div {\n        border-top: calc((66vh - calc(100vw - 100px)) / 2) solid rgba(0, 0, 0, 0.3) !important;\n        border-bottom: calc((66vh - calc(100vw - 100px)) / 2) solid rgba(0, 0, 0, 0.3) !important;\n        box-shadow: inset 0 0 0 5px rgba(255,255,255,.5) !important;\n      }\n      ",";\n      img {\n        max-width: 100% !important;\n        height: auto !important;\n      }\n    }\n  }\n"]);return u=function(){return e},e}function d(){var e=a()(["\n  width: 100%;\n  font-size: 1.5rem;\n  padding: 10px 20px;\n  text-align: center;\n  color: ",";\n"]);return d=function(){return e},e}function p(){var e=a()(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 60px;\n  height: 60px;\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: ",";\n"]);return p=function(){return e},e}function f(){var e=a()(["\n          background-color: #fff;\n          color: #121212;\n        "]);return f=function(){return e},e}function m(){var e=a()(["\n  border-right: 1px solid #fff;\n  text-align: center;\n  ",";\n  &:last-child {\n    border-right: 0;\n  } \n"]);return m=function(){return e},e}function b(){var e=a()(["\n          scroll-snap-align: start;\n        "]);return b=function(){return e},e}function j(){var e=a()(["\n            scroll-snap-type: x mandatory;\n            white-space: nowrap;\n            overflow: auto;\n            -webkit-overflow-scrolling: touch;\n          "]);return j=function(){return e},e}function v(){var e=a()(["\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  border-radius: 4px;\n  overflow: hidden;\n  margin: 0 20px;\n  border: 1px solid #fff;\n  line-height: 2rem;\n  ","\n  > div {\n    width: ",";\n    ",";\n  }\n"]);return v=function(){return e},e}function g(){var e=a()(["\n  width: 100%;\n  padding: 10px 20px;\n"]);return g=function(){return e},e}function y(){var e=a()(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n"]);return y=function(){return e},e}function L(){var e=a()(["\n  display: flex;\n  align-content: flex-start;\n  flex-wrap: wrap;\n  background-color: ",";\n"]);return L=function(){return e},e}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var h,x,G=Object(c.default)(i.a)(L(),(function(e){return e.theme.rankingBg})),H=c.default.div(y()),z=c.default.div(g()),O=c.default.div(v(),(function(e){if(e.scroll)return Object(c.css)(j())}),(function(e){return e.total?100/e.total+"%":"auto"}),(function(e){if(e.scroll)return Object(c.css)(b())})),E=c.default.div(m(),(function(e){if(e.selected)return Object(c.css)(f())})),k=c.default.div(p(),(function(e){return"url(/assets/images/picture/".concat(e.image,".jpg)")}),(function(e){return e.selected?"1":".6"})),D=c.default.div(d(),(function(e){return e.theme.functionBtnTextColor})),w=c.default.div(u(),(function(e){if(e.legacyMode)return Object(c.css)(s())})),C=c.default.div(l());(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(G,"CompetitionInner","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/styles/index.js"),h.register(H,"RadioBoxGroup","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/styles/index.js"),h.register(z,"RadioBoxTitle","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/styles/index.js"),h.register(O,"RadioBoxContent","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/styles/index.js"),h.register(E,"RadioBoxItem","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/styles/index.js"),h.register(k,"RadioBoxItemImg","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/styles/index.js"),h.register(D,"FunctionButton","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/styles/index.js"),h.register(w,"QRCodeReaderContent","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/styles/index.js"),h.register(C,"ReaderDescription","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/styles/index.js")),(x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&x(e)}).call(this,o(10)(e))},664:function(e,t,o){"use strict";(function(e){var n,r=o(0),a=o.n(r),c=o(639),i=o.n(c),l=o(35);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,u,d=function(e){var t=e.func;return a.a.createElement(l.f,null,a.a.createElement("a",{onClick:function(){return t()}},a.a.createElement(i.a,{fontSize:"25px",color:"#fff"})))},p=d;t.a=p,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(d,"LinkClose","/Users/james/Documents/personal-project/capoo-puzzle/src/components/navigation-items/link-close.js"),s.register(p,"default","/Users/james/Documents/personal-project/capoo-puzzle/src/components/navigation-items/link-close.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,o(10)(e))},685:function(e,t,o){"use strict";(function(e){var n,r=o(15),a=o.n(r),c=o(11),i=o.n(c),l=o(668),s=o.n(l),u=o(28),d=o.n(u),p=o(0),f=o.n(p),m=o(14),b=o(663),j=o(54),v=o(662),g=o(42),y=o(686),L=o(35),h=o(118),x=o(664),G=o(715),H=o(716),z=o(717),O=o(718),E=o(719);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},D=function(){var e=Object(m.d)(),t=Object(p.useState)(!1),o=d()(t,2),n=o[0],r=o[1],c=Object(p.useState)(!0),l=d()(c,2),u=l[0],k=l[1],D=Object(m.e)((function(e){return e.auth})).loggedIn,w=Object(m.e)((function(e){return e.competition})),C=w.player,U=w.level,R=w.tips,S=w.image;Object(p.useEffect)((function(){e(Object(v.f)({roomId:null}))}),[]);var I=Object(p.useCallback)(function(){var t=s()(a.a.mark((function t(o,n,r,c,l){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=j.database().ref().push().key,t.next=3,j.database().ref("/competition/".concat(s)).set({player:n,level:r,image:c,tips:l,users:i()({},o.uid,{name:o.displayName,avatar:o.photoURL,ready:!1,percent:0}),allReady:!1}).then((function(){e(Object(v.f)({roomId:s}))}));case 3:return t.next=5,g.a.replace("/competition/game");case 5:case"end":return t.stop()}}),t)})));return function(e,o,n,r,a){return t.apply(this,arguments)}}(),[]),M=Object(p.useCallback)((function(){r(!0),k(!0)}),[]);return f.a.createElement(L.h,null,f.a.createElement(h.a,{title:"Competition",prev:f.a.createElement(x.a,{func:function(){return g.a.push("/")}}),next:f.a.createElement(G.a,{func:function(){return M()}})}),f.a.createElement(b.a,null,f.a.createElement(H.a,null),f.a.createElement(z.a,null),f.a.createElement(O.a,null),f.a.createElement(E.a,null),f.a.createElement(b.b,{onClick:function(){return I(D,C,U,S,R)}},"New Game"),n?f.a.createElement(y.a,{isVisible:u,toggle:k}):null))};k(D,"useDispatch{dispatch}\nuseState{[isLoaded, setIsLoaded](false)}\nuseState{[scannerShow, setScannerShow](true)}\nuseSelector{{ loggedIn }}\nuseSelector{{ player, level, tips, image }}\nuseEffect{}\nuseCallback{newGame}\nuseCallback{openScanner}",(function(){return[m.d,m.e,m.e]}));var w,C,U=D;t.a=U,(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(w.register(D,"Competition","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/containers/competition.js"),w.register(U,"default","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/containers/competition.js")),(C="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&C(e)}).call(this,o(10)(e))},686:function(e,t,o){"use strict";(function(e){var n,r=o(15),a=o.n(r),c=o(668),i=o.n(c),l=o(28),s=o.n(l),u=o(0),d=o.n(u),p=o(663),f=o(649),m=o(653),b=o.n(m),j=o(14),v=o(118),g=o(664),y=o(181),L=o(662),h=o(42);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},G=function(e){var t=e.isVisible,o=e.toggle,n=Object(j.d)(),r=Object(u.useState)(!0),c=s()(r,2),l=c[0],m=c[1],x=Object(u.useState)("You can scan QR code to join multi player games"),G=s()(x,2),H=G[0],z=G[1],O=Object(j.e)((function(e){return e.auth})).loggedIn;Object(u.useEffect)((function(){void 0===navigator.mediaDevices&&m(!1)}),[]);var E=Object(u.useCallback)((function(e){return z("Please scan the QR Code.")}),[]),k=Object(u.useCallback)((function(e){if(null===e)return!1;var t=e.split("::");if("cp"!==t[0]&&2!==t.length)return!1;var o=t[1];y.database().ref("/competition/".concat(o)).once("value",function(){var e=i()(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.val();case 2:if(null!==(r=e.sent)){e.next=6;break}return e.abrupt("return",!1);case 6:if(void 0!==r.users[O.uid]){e.next=11;break}if(!(Object.keys(r.users).length<r.player)){e.next=11;break}return r.users[O.uid]={name:O.displayName,avatar:O.photoURL,ready:!1,percent:0,grids:r.grids},e.next=11,y.database().ref("/competition/".concat(o,"/users")).update(r.users);case 11:return e.next=13,n(Object(L.f)({roomId:o}));case 13:return e.next=16,h.a.replace("/competition/game");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){}))}),[]),D=Object(u.useCallback)((function(){return o(!1)}),[]),w=Object(u.useRef)();return d.a.createElement(f.Animated,{animationIn:"fadeInUp",animationOut:"fadeOutDownBig",isVisible:t,animationInDuration:150,style:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:3,display:"flex",flexDirection:"column"}},d.a.createElement(p.c,{legacyMode:!l},d.a.createElement(v.a,{prev:d.a.createElement(g.a,{func:D}),bgHide:!0}),d.a.createElement("div",{style:{width:"100%"},onClick:function(){l||w.current.openImageDialog()}},d.a.createElement(b.a,{ref:w,onError:E,onScan:k,facingMode:"environment",style:{width:"100%"},className:"reader",legacyMode:!l})),d.a.createElement(p.i,null,H)))};x(G,"useDispatch{dispatch}\nuseState{[webRTCEnabled, setWebRTCEnabled](true)}\nuseState{[description, setDescription]('You can scan QR code to join multi player games')}\nuseSelector{{ loggedIn }}\nuseEffect{}\nuseCallback{handleError}\nuseCallback{handleScan}\nuseCallback{hideScanner}\nuseRef{ref}",(function(){return[j.d,j.e]}));var H,z,O=G;t.a=O,(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(G,"CodeReader","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/containers/code-reader.js"),H.register(O,"default","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/containers/code-reader.js")),(z="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&z(e)}).call(this,o(10)(e))},715:function(e,t,o){"use strict";(function(e){var n,r=o(0),a=o.n(r),c=o(654),i=o.n(c),l=o(35);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,u,d=function(e){var t=e.func;return a.a.createElement(l.f,null,a.a.createElement("a",{onClick:function(){return t()}},a.a.createElement(i.a,{fontSize:"25px",color:"#fff"})))},p=d;t.a=p,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(d,"LinkScanner","/Users/james/Documents/personal-project/capoo-puzzle/src/components/navigation-items/link-scanner.js"),s.register(p,"default","/Users/james/Documents/personal-project/capoo-puzzle/src/components/navigation-items/link-scanner.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,o(10)(e))},716:function(e,t,o){"use strict";(function(e){var n,r=o(0),a=o.n(r),c=o(663),i=o(662),l=o(14);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},u=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.competition})).player,o=[2,3,4],n=Object(r.useCallback)((function(t){e(Object(i.e)(t))}),[]);return a.a.createElement(c.e,null,a.a.createElement(c.h,null,"Players"),a.a.createElement(c.d,{total:o.length},o.map((function(e){return a.a.createElement(c.f,{key:e,selected:e===t,onClick:function(){return n(e)}},e," players")}))))};s(u,"useDispatch{dispatch}\nuseSelector{{ player }}\nuseCallback{selectPlayers}",(function(){return[l.d,l.e]}));var d,p,f=u;t.a=f,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(u,"RadioBoxPlayer","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/containers/radio-box/RadioBoxPlayer.js"),d.register(f,"default","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/containers/radio-box/RadioBoxPlayer.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,o(10)(e))},717:function(e,t,o){"use strict";(function(e){var n,r=o(0),a=o.n(r),c=o(663),i=o(662),l=o(14);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},u=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.competition})).level,o=["easy","medium","hard"],n=Object(r.useCallback)((function(t){e(Object(i.d)(t))}),[]);return a.a.createElement(c.e,null,a.a.createElement(c.h,null,"Level"),a.a.createElement(c.d,{total:o.length},o.map((function(e){return a.a.createElement(c.f,{key:e,selected:e===t,onClick:function(){return n(e)}},e)}))))};s(u,"useDispatch{dispatch}\nuseSelector{{ level }}\nuseCallback{selectLevel}",(function(){return[l.d,l.e]}));var d,p,f=u;t.a=f,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(u,"RadioBoxLevel","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/containers/radio-box/RadioBoxLevel.js"),d.register(f,"default","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/containers/radio-box/RadioBoxLevel.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,o(10)(e))},718:function(e,t,o){"use strict";(function(e){var n,r=o(0),a=o.n(r),c=o(663),i=o(662),l=o(14);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},u=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.competition})).tips,o=["yes","no"],n=Object(r.useCallback)((function(t){e(Object(i.g)("yes"===t))}),[]);return a.a.createElement(c.e,null,a.a.createElement(c.h,null,"Tips"),a.a.createElement(c.d,{total:o.length},o.map((function(e){return a.a.createElement(c.f,{key:e,selected:e===(t?"yes":"no"),onClick:function(){return n(e)}},e)}))))};s(u,"useDispatch{dispatch}\nuseSelector{{ tips }}\nuseCallback{selectTips}",(function(){return[l.d,l.e]}));var d,p,f=u;t.a=f,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(u,"RadioBoxTips","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/containers/radio-box/RadioBoxTips.js"),d.register(f,"default","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/containers/radio-box/RadioBoxTips.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,o(10)(e))},719:function(e,t,o){"use strict";(function(e){var n,r=o(0),a=o.n(r),c=o(663),i=o(614),l=o(404),s=o(662),u=o(14);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=function(){var e=Object(u.d)(),t=Object(u.e)((function(e){return e.competition})).image,o=Object(i.a)(l.a,10),n=Object(r.useCallback)((function(t){e(Object(s.c)(t.toString()))}),[]);return a.a.createElement(c.e,null,a.a.createElement(c.h,null,"Picture"),a.a.createElement(c.d,{scroll:!0},o.map((function(e){return a.a.createElement(c.f,{key:"i_".concat(e),onClick:function(){return n(e)}},a.a.createElement(c.g,{image:e,selected:t===e.toString()}))}))))};d(p,"useDispatch{dispatch}\nuseSelector{{ image }}\nuseCallback{selectImage}",(function(){return[u.d,u.e]}));var f,m,b=p;t.a=b,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(p,"RadioBoxImage","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/containers/radio-box/RadioBoxImage.js"),f.register(b,"default","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/competition/containers/radio-box/RadioBoxImage.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,o(10)(e))}}]);