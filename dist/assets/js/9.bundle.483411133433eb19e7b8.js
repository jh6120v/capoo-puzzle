(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{643:function(e,t,a){"use strict";a.r(t),function(e){var n,o=a(678);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,r,c=o.a;t.default=c,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&l.register(c,"default","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/setting/index.js"),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)}.call(this,a(10)(e))},678:function(e,t,a){"use strict";(function(e){var n,o=a(11),l=a.n(o),r=a(0),c=a.n(r),u=a(14),i=a(644),s=a.n(i),d=a(233),b=a.n(d),f=a(139),p=a(56),g=a(181),m=a(144),E=a(112),j=a(37),C=a(78),h=a(21),O=a(54),k=a(35),y=a(118),v=a(196);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var G="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},w=function(){var e=Object(j.g)(),t=Object(u.d)(),a=Object(u.e)((function(e){return e.personal})).tips,n=Object(u.e)((function(e){return e.auth})),o=n.login,i=n.logout,d=n.loggedIn,G=Object(u.e)((function(e){return e.theme})).toggle,w=Object(r.useCallback)((function(t){return e.push(t)}),[]),L=Object(r.useCallback)((function(e){d&&"loading"!==d&&O.database().ref("/users/"+d.uid).child("tips").set(!e);t(Object(p.f)())}),[d]),H=Object(r.useCallback)((function(){navigator.share&&navigator.share({title:"Capoo Puzzle",text:"Capoo Puzzle Game",url:"https://capoo-puzzle.firebaseapp.com"}).then((function(){})).catch((function(e){}))}),[]),z=Object(E.a)("","Are you sure to reset?",Object(r.useCallback)((function(){(D(),t(Object(p.d)()),d&&"loading"!==d)&&O.database().ref("/users/"+d.uid).set(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},h.c));G("system"),t(Object(m.a)({colorMode:"system"}))}),[G]),"Confirm",Object(r.useCallback)((function(){D()}),[]),"Cancel"),M=z.ModelBox,P=z.isShown,A=z.showModal,D=z.hideModal,I=Object(r.useCallback)((function(){i(),t(Object(p.d)()),t(Object(C.b)(h.b))}),[]);return c.a.createElement(k.h,null,c.a.createElement(y.a,{title:"Setting",prev:c.a.createElement(v.a,null)}),c.a.createElement(f.a,null,d&&"loading"!==d?c.a.createElement(f.b,null,c.a.createElement(f.e,null,c.a.createElement(f.f,{avatar:d.photoURL}),c.a.createElement(f.g,null,d.displayName))):null,c.a.createElement(f.b,{isTitle:!0},"GAME SETTINGS"),c.a.createElement(f.b,{onClick:function(){return w("/setting/game-level")}},"Game level",c.a.createElement(s.a,null)),c.a.createElement(f.b,{onClick:function(){return w("/setting/puzzle-picture")}},"Puzzle picture",c.a.createElement(s.a,null)),c.a.createElement(f.b,{onClick:function(){return L(a)}},"Tips",a?c.a.createElement(b.a,null):null),c.a.createElement(f.b,{isTitle:!0},"GENERAL SETTINGS"),c.a.createElement(f.b,{onClick:function(){return w("/setting/dark-mode")}},"Dark mode",c.a.createElement(s.a,null)),c.a.createElement(f.b,{isSpace:!0}),c.a.createElement(f.b,{onClick:A},"Reset"),c.a.createElement(f.b,{onClick:H},"Share"),c.a.createElement(f.b,{onClick:function(){return w("/setting/about")}},"About",c.a.createElement(s.a,null)),c.a.createElement(f.b,{isSpace:!0}),"loading"!==d?c.a.createElement(c.a.Fragment,null,d?c.a.createElement(f.b,{alignItemsCenter:!0,justifyContentSpaceAround:!0,onClick:I},"Sign out"):c.a.createElement(c.a.Fragment,null,c.a.createElement(f.b,{alignItemsCenter:!0,justifyContentSpaceAround:!0,onClick:function(){return o("google")}},c.a.createElement(f.d,{provider:"google"},"Sign with Google")),c.a.createElement(f.b,{alignItemsCenter:!0,justifyContentSpaceAround:!0,onClick:function(){return o("facebook")}},c.a.createElement(f.d,{provider:"facebook"},"Sign with Facebook")))):c.a.createElement(f.b,{alignItemsCenter:!0,justifyContentSpaceAround:!0},"loading..."),c.a.createElement(f.h,null,"Version 1.0.0")),c.a.createElement(g.a,{isShow:P},c.a.createElement(M,null)))};G(w,"useHistory{history}\nuseDispatch{dispatch}\nuseSelector{{ tips }}\nuseSelector{{ login, logout, loggedIn }}\nuseSelector{{ toggle }}\nuseCallback{linkTo}\nuseCallback{tipsChange}\nuseCallback{share}\nuseModel{{\n        ModelBox, isShown, showModal, hideModal\n    }}\nuseCallback{}\nuseCallback{}\nuseCallback{logoutAndReset}",(function(){return[j.g,u.d,u.e,u.e,u.e,E.a]}));var L,H,z=w;t.a=z,(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(L.register(w,"Setting","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/setting/containers/setting.js"),L.register(z,"default","/Users/james/Documents/personal-project/capoo-puzzle/src/routes/setting/containers/setting.js")),(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&H(e)}).call(this,a(10)(e))}}]);