(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,4],{291:function(e,t,r){"use strict";r.r(t);var n={props:{choice:{type:String,required:!1,default:""},dialog:{type:Boolean,required:!1,default:!1}},methods:{}},o=r(48),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return e.dialog?t("div",{staticClass:"w-screen h-screen fixed top-0 left-0 flex justify-center items-center transition-opacity",class:{fadeIn:e.dialog},staticStyle:{background:"rgba(0, 0, 0, 0.5)","backdrop-filter":"blur(3px)"}},[t("div",{staticClass:"w-4/5 text-center p-10 rounded-md bg-white"},[t("div",{staticClass:"text-2xl text-gray-600"},[e._v("Are you sure to answer")]),e._v(" "),t("div",{staticClass:"text-3xl font-normal mt-4 mb-6"},[e._v(e._s(e.choice))]),e._v(" "),t("div",[t("button",{staticClass:"greenBtn mb-1",staticStyle:{background:"#dc2626 !important"},on:{click:function(t){return e.$emit("no",!0)}}},[e._v("\n        No\n      ")]),e._v(" "),t("button",{staticClass:"greenBtn mb-1",on:{click:function(t){return e.$emit("yes",!0)}}},[e._v("Yes")])])])]):e._e()}),[],!1,null,null,null);t.default=component.exports},292:function(e,t,r){"use strict";r.r(t);var n=r(132);var o=r(139),c=r(104);function l(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||Object(o.a)(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=r(3),f=(r(26),r(81),{name:"ChoiceButton",props:{choice:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1}},methods:{choiceClick:function(e){var t=this;return Object(d.a)(regeneratorRuntime.mark((function r(){var n,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$fire.firestore.collection("quiz").doc(t.$route.query.id).update({submited_user:[].concat(l(t.$store.getters.getQuizById(t.$route.query.id).submited_user),[t.$store.state.user.id])});case 2:return n=t.$fire.firestore.collection("users").doc(t.$store.state.user.id),r.next=5,n.get();case 5:return o=r.sent,r.next=8,o.data();case 8:if(c=r.sent,console.log("medata",o),!e.status){r.next=16;break}return r.next=13,n.update({correct_aws:[].concat(l(c.correct_aws),[t.$store.getters.getQuizById(t.$route.query.id).id]),score:c.score+t.$store.getters.getQuizById(t.$route.query.id).point});case 13:t.$router.push("/"),r.next=19;break;case 16:return r.next=18,n.update({wrong_aws:[].concat(l(c.wrong_aws),[t.$store.getters.getQuizById(t.$route.query.id).id]),score:c.score+t.$store.getters.getQuizById(t.$route.query.id).del_point});case 18:t.$router.push("/");case 19:case"end":return r.stop()}}),r)})))()}}}),y=r(48),component=Object(y.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full mb-2"},[t("button",{staticClass:"greenBtn",staticStyle:{"max-width":"100%"},on:{click:function(t){e.dialog=!0}}},[e._v("\n    "+e._s(e.choice.value)+"\n  ")]),e._v(" "),t("ConfirmModal",{attrs:{choice:e.choice.value,dialog:e.dialog},on:{yes:function(t){return e.choiceClick(e.choice)},no:function(t){e.dialog=!1}}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ConfirmModal:r(291).default})},310:function(e,t,r){"use strict";r.r(t);r(30),r(51),r(37),r(36),r(11),r(49),r(31),r(50);var n=r(25),o=r(3),c=(r(26),r(67),r(68),r(32),r(194),r(79)),l=r(292);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={name:"QuizPage",validate:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l,d,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.params,r=e.query,n=e.store,o=e.redirect,c=e.$fire,!r.id){t.next=18;break}if(!c.auth.currentUser){t.next=17;break}return l=c.firestore.collection("quiz").doc(r.id),t.next=6,l.get();case 6:if(d=t.sent,!(f=d.data())){t.next=16;break}if(!f.submited_user.includes(n.state.user.id)){t.next=14;break}return console.log("already scanned"),t.abrupt("return",!1);case 14:return console.log(f),t.abrupt("return",!0);case 16:return t.abrupt("return",!1);case 17:o("/login?redirect=quiz?id="+r.id);case 18:return t.abrupt("return",!1);case 19:case"end":return t.stop()}}),t)})))()},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)(["getQuizById"])),methods:{removead:function(e){return e.split("@")[0]},choiceClick:function(e){e.status&&console.log("choiceClick")}},components:{ChoiceButton:l.default}},y=f,v=r(48),component=Object(v.a)(y,(function(){var e=this,t=e._self._c;return e.getQuizById(e.$route.query.id)?t("div",[t("div",{staticClass:"bg-gray-50 w-full h-auto text-2xl font-medium px-8 py-4"},[t("div",{staticClass:"text-gray-600"},[e._v("Quiz No.")]),e._v(" "),t("div",[e._v(e._s(e.getQuizById(e.$route.query.id).no))])]),e._v(" "),t("div",{staticClass:"p-8"},[t("div",{staticClass:"text-2xl text-gray-600"},[e._v("Describe")]),e._v(" "),t("div",{staticClass:"mt-4",domProps:{innerHTML:e._s(e.getQuizById(e.$route.query.id).description)}})]),e._v(" "),t("div",{staticClass:"px-8"},e._l(e.getQuizById(e.$route.query.id).choice,(function(e,r){return t("ChoiceButton",{key:r,attrs:{choice:e}})})),1)]):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ChoiceButton:r(292).default})}}]);