(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an home page")]),t._v(" "),n("span",[t._v("以下是服务端渲染的数据")]),t._v(" "),n("div",{staticClass:"item"},[t._v(t._s(t.item))]),t._v(" "),n("ul",t._l(t.item,function(e,i){return n("li",{key:i,on:{click:function(n){t.handleItemClick(e)}}},[t._v("\n      "+t._s(i)+":"+t._s(e)+"\n    ")])})),t._v(" "),n("span",[t._v("以下是客户端端渲染的数据")]),t._v(" "),n("ul",t._l(t.list,function(e,i){return n("li",{key:i,on:{click:function(n){t.handleItemClick(e)}}},[t._v("\n      "+t._s(i)+":"+t._s(e)+"\n    ")])}))])},o=[],s=(n("3a0f"),n("a3a3"),n("4d0b"),n("7f43")),a=n.n(s),c=n("329b"),u={namespaced:!0,state:function(){},actions:{fetchItem:function(t,e){var n=t.commit;return a()({method:"post",url:"http://127.0.0.1:3000/list.do",data:e}).then(function(t){n("setItem",t.data.data)}).catch(function(t){console.error(t)})}},mutations:{setItem:function(t,e){c["a"].set(t,"items",e)}}},r={asyncData:function(t){var e=t.store,n=t.route;return e.registerModule("home",u),e.dispatch("home/fetchItem",n.query)},data:function(){return{list:{}}},computed:{item:function(){return this.$store.state.home.items}},destroyed:function(){this.$store.unregisterModule("home")},created:function(){},methods:{handleItemClick:function(t){alert(t)}}},l=r,m=n("048f"),f=Object(m["a"])(l,i,o,!1,null,null,"a3304876");f.options.__file="Home.vue";e["default"]=f.exports}}]);
//# sourceMappingURL=Home.2501cdcd.js.map