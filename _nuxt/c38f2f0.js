(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{472:function(e,t,r){"use strict";r.r(t);var n=r(478),o=r(380),l=r(407),c=r(392),d=r(469),h=r(8),m=(r(49),{name:"LoginPage",components:{GlitchText:r(151).default},layout:"blank",validate:function(e){e.params,e.query,e.store;return!e.$fire.auth.currentUser},data:function(){return{username:"blackslash",password:"123456",errorText:""}},methods:{login:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.errorText="",r=e.$fire.firestore.collection("users"),t.next=5,r.where("name","==",e.username).get();case 5:if(!1!==t.sent.docs[0].data().is_login){t.next=14;break}return t.next=9,e.$fire.auth.signInWithEmailAndPassword(e.username+"@it.kmitl.ac.th",e.password);case 9:return t.next=11,r.doc(e.$fire.auth.currentUser.uid).update({is_login:!0});case 11:e.$route.query.redirect?window.location.href=e.$route.query.redirect:e.$router.push("/"),t.next=15;break;case 14:e.errorText="Wrong username or password";case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),e.errorText="Wrong username or password";case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))()}}}),w=r(54),component=Object(w.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"fill-height d-flex justify-center align-center px-5"},[t(l.a,{staticStyle:{background:"none"},attrs:{elevation:"0",width:"100%","max-width":"500"}},[t("GlitchText",{staticClass:"mb-8 text-center",attrs:{text:"LOGIN",size:"40px"}}),e._v(" "),t(d.a,{staticClass:"mb-5",attrs:{name:"username",label:"Username",color:"white",filled:"","hide-details":"",rounded:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),t(d.a,{staticClass:"mb-5",attrs:{type:"password",name:"password",label:"Password",color:"white",filled:"","hide-details":"",rounded:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),t(c.a,[""!==e.errorText?t(n.a,{attrs:{dense:"",type:"error",rounded:"xl"}},[e._v("\n        "+e._s(e.errorText)+"\n      ")]):e._e()],1),e._v(" "),t(o.a,{staticClass:"font-weight-black background--text",staticStyle:{opacity:"0.9"},attrs:{color:"white",light:"",rounded:"",large:"",block:""},on:{click:e.login}},[e._v("\n      Login\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GlitchText:r(151).default})}}]);