(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5],{287:function(e,t,r){"use strict";r.r(t);var n={name:"NavBar",props:{title:{type:String,default:"Navbar"}}},o=r(48),component=Object(o.a)(n,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"w-full h-14 bg-gray-50 flex justify-center items-center text-2xl font-medium text-gray-600"},[e._v("\n  "+e._s(e.title)+"\n")])}),[],!1,null,null,null);t.default=component.exports},308:function(e,t,r){"use strict";r.r(t);var n=r(3),o=(r(26),{name:"LoginPage",components:{NavBar:r(287).default},validate:function(e){e.params,e.query;return!e.store.state.user},data:function(){return{username:"blackslash",password:"123456",errorText:""}},methods:{login:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.errorText="",r=e.$fire.firestore.collection("users"),t.next=5,r.where("name","==",e.username).get();case 5:if(!1!==t.sent.docs[0].data().is_login){t.next=14;break}return t.next=9,e.$fire.auth.signInWithEmailAndPassword(e.username+"@it.kmitl.ac.th",e.password);case 9:return t.next=11,r.doc(e.$fire.auth.currentUser.uid).update({is_login:!0});case 11:e.$route.query.redirect?window.location.href=e.$route.query.redirect:e.$router.push("/"),t.next=15;break;case 14:alert("This user is already login or password is wrong");case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),console.log(t.t0),e.errorText="Wrong username or password";case 21:case"end":return t.stop()}}),t,null,[[0,17]])})))()}}}),l=r(48),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("NavBar",{attrs:{title:"Login"}}),e._v(" "),t("div",{staticClass:"container mx-auto mt-10 w-full"},[t("div",{staticClass:"mb-6"},[t("div",{staticClass:"text-xl my-1 text-gray-600"},[e._v("Username")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"w-full h-14 border-2 border-slate-500 rounded-md px-2",staticStyle:{outline:"none"},attrs:{type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-6"},[t("div",{staticClass:"text-xl my-1 text-gray-600"},[e._v("Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"w-full h-14 border-2 border-slate-500 rounded-md px-2",staticStyle:{outline:"none"},attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),""!==e.errorText?t("div",{staticClass:"w-full h-14 px-5 bg-red-600 flex items-center font-medium text-white rounded-md mb-6"},[e._v("\n      "+e._s(e.errorText)+"\n    ")]):e._e(),e._v(" "),t("button",{staticClass:"w-full greenBtn",on:{click:e.login}},[e._v("Login")])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NavBar:r(287).default})}}]);