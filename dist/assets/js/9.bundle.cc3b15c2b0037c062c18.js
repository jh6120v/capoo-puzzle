(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{639:function(e,t,a){"use strict";a.r(t),function(e){var n,o=a(666);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,r,c=o.a;t.default=c,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&l.register(c,"default","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/setting/index.js"),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)}.call(this,a(11)(e))},666:function(e,t,a){"use strict";(function(e){var n,o=a(7),l=a.n(o),r=a(0),c=a.n(r),u=a(21),i=a(640),s=a.n(i),d=a(232),b=a.n(d),f=a(230),p=a(139),g=a(56),m=a(183),j=a(143),E=a(116),O=a(38),h=a(77),C=a(16),y=a(54),k=a(35),v=a(130),G=a(195);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},L=function(){var e=Object(O.g)(),t=Object(u.d)(),a=Object(u.e)((function(e){return e.personal})).tips,n=Object(u.e)((function(e){return e.auth})),o=n.login,i=n.logout,d=n.loggedIn,w=Object(u.e)((function(e){return e.theme})).toggle;Object(r.useEffect)((function(){t(Object(f.b)({title:"Setting"})),t(Object(f.e)())}),[]);var L=Object(r.useCallback)((function(t){return e.push(t)}),[]),H=Object(r.useCallback)((function(e){d&&"loading"!==d&&y.database().ref("/users/"+d.uid).child("tips").set(!e);t(Object(g.f)())}),[d]),z=Object(r.useCallback)((function(){navigator.share&&navigator.share({title:"Capoo Puzzle",text:"Capoo Puzzle Game",url:"https://capoo-puzzle.dailyofjames.com"}).then((function(){})).catch((function(e){}))}),[]),M=Object(E.a)("","Are you sure to reset?",Object(r.useCallback)((function(){(T(),t(Object(g.d)()),d&&"loading"!==d)&&y.database().ref("/users/"+d.uid).set(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},C.f));w("system"),t(Object(j.a)({colorMode:"system"}))}),[w]),"Confirm",Object(r.useCallback)((function(){T()}),[]),"Cancel"),P=M.ModelBox,D=M.isShown,A=M.showModal,T=M.hideModal,I=Object(r.useCallback)((function(){i(),t(Object(g.d)()),t(Object(h.b)(C.e))}),[]);return c.a.createElement(k.h,null,c.a.createElement(v.a,{title:"Setting",prev:c.a.createElement(G.a,null)}),c.a.createElement(p.a,null,d&&"loading"!==d?c.a.createElement(p.b,null,c.a.createElement(p.d,null,c.a.createElement(p.e,{avatar:d.photoURL}),c.a.createElement(p.f,null,d.displayName))):null,c.a.createElement(p.b,{isTitle:!0},"GAME SETTINGS"),c.a.createElement(p.b,{onClick:function(){return L("/setting/game-level")}},"Game level",c.a.createElement(s.a,null)),c.a.createElement(p.b,{onClick:function(){return L("/setting/puzzle-picture")}},"Puzzle picture",c.a.createElement(s.a,null)),c.a.createElement(p.b,{onClick:function(){return H(a)}},"Tips",a?c.a.createElement(b.a,null):null),c.a.createElement(p.b,{isTitle:!0},"GENERAL SETTINGS"),c.a.createElement(p.b,{onClick:function(){return L("/setting/dark-mode")}},"Dark mode",c.a.createElement(s.a,null)),c.a.createElement(p.b,{isSpace:!0}),c.a.createElement(p.b,{onClick:A},"Reset"),c.a.createElement(p.b,{onClick:z},"Share"),c.a.createElement(p.b,{onClick:function(){return L("/setting/about")}},"About",c.a.createElement(s.a,null)),c.a.createElement(p.b,{isSpace:!0}),"loading"!==d?c.a.createElement(c.a.Fragment,null,d?c.a.createElement(p.b,{alignItemsCenter:!0,justifyContentSpaceAround:!0,onClick:I},"Sign out"):c.a.createElement(p.b,{alignItemsCenter:!0,justifyContentSpaceAround:!0,onClick:o},"Sign with Google")):c.a.createElement(p.b,{alignItemsCenter:!0,justifyContentSpaceAround:!0},"loading..."),c.a.createElement(p.g,null,"Version 1.0.0")),c.a.createElement(m.a,{isShow:D},c.a.createElement(P,null)))};w(L,"useHistory{history}\nuseDispatch{dispatch}\nuseSelector{{ tips }}\nuseSelector{{ login, logout, loggedIn }}\nuseSelector{{ toggle }}\nuseEffect{}\nuseCallback{linkTo}\nuseCallback{tipsChange}\nuseCallback{share}\nuseModel{{\n        ModelBox, isShown, showModal, hideModal\n    }}\nuseCallback{}\nuseCallback{}\nuseCallback{logoutAndReset}",(function(){return[O.g,u.d,u.e,u.e,u.e,E.a]}));var H,z,M=L;t.a=M,(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(L,"Setting","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/setting/containers/setting.js"),H.register(M,"default","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/setting/containers/setting.js")),(z="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&z(e)}).call(this,a(11)(e))}}]);