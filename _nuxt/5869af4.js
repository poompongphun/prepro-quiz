(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{290:function(t,e,n){"use strict";n.r(e);var r={props:{choice:{type:String,required:!1,default:""},dialog:{type:Boolean,required:!1,default:!1}},methods:{}},c=n(47),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return t.dialog?e("div",{staticClass:"w-screen h-screen fixed top-0 left-0 flex justify-center items-center transition-opacity",class:{fadeIn:t.dialog},staticStyle:{background:"rgba(0, 0, 0, 0.5)","backdrop-filter":"blur(3px)"}},[e("div",{staticClass:"w-4/5 text-center p-10 rounded-md bg-white"},[e("div",{staticClass:"text-2xl text-gray-600"},[t._v("Are you sure to answer")]),t._v(" "),e("div",{staticClass:"text-3xl font-normal mt-4 mb-6"},[t._v(t._s(t.choice))]),t._v(" "),e("div",[e("button",{staticClass:"greenBtn mb-1",staticStyle:{background:"#dc2626 !important"},on:{click:function(e){return t.$emit("no",!0)}}},[t._v("\n        No\n      ")]),t._v(" "),e("button",{staticClass:"greenBtn mb-1",on:{click:function(e){return t.$emit("yes",!0)}}},[t._v("Yes")])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);