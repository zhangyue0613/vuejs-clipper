(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39324414"],{"312a":function(t,e,x){},"3bdd":function(t,e,x){"use strict";x.r(e);var n=function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",{staticClass:"list-content content"},[x("div",{staticClass:"area"},[x("h2",[t._v("Transparent Background")]),x("p",[t._v("To get an image with a transparent background,")]),x("p",[t._v("upload a png which has a transparent background,")]),x("p",[t._v('set clipper component\'s "bgColor" to transparent color.')]),x("clipper-fixed",{ref:"clipper",staticClass:"sample",attrs:{src:t.src,bgColor:"rgba(0,0,0,0)"}}),x("button",{on:{click:t.clipToURL}},[t._v("clip to see the result.")]),x("p",[t._v("clip result will be put above here, you can see this is a transparent image.")]),x("div",{staticClass:"imgCon"},[t._m(0),x("img",{staticClass:"imgResult",attrs:{src:t.clipResult}})])],1)])},a=[function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("div",{staticClass:"text"},[x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")]),x("p",[t._v("text,text,text,text,text,text,text,text,text,")])])}],r=x("ab2a"),i={extends:{mixins:[r["a"]]},data:function(){return{src:"icon/smile.png",clipResult:""}},methods:{}},s=i,c=(x("a6c2"),x("2877")),o=Object(c["a"])(s,n,a,!1,null,"21155425",null);e["default"]=o.exports},"857a":function(t,e,x){var n=x("1d80"),a=/"/g;t.exports=function(t,e,x,r){var i=String(n(t)),s="<"+e;return""!==x&&(s+=" "+x+'="'+String(r).replace(a,"&quot;")+'"'),s+">"+i+"</"+e+">"}},9911:function(t,e,x){"use strict";var n=x("23e7"),a=x("857a"),r=x("af03");n({target:"String",proto:!0,forced:r("link")},{link:function(t){return a(this,"a","href",t)}})},a6c2:function(t,e,x){"use strict";var n=x("312a"),a=x.n(n);a.a},ab2a:function(t,e,x){"use strict";x("e260"),x("d3b7"),x("e6cf"),x("3ca3"),x("9911"),x("ddb0"),x("2b3d");e["a"]={methods:{clipToURL:function(){var t=this,e="image/jpeg",x=1;return new Promise((function(n,a){var r=t.$refs.clipper.clip({maxWPixel:1920});r.toBlob?r.toBlob((function(e){t.clipResult&&URL.revokeObjectURL(t.clipResult),t.clipResult=URL.createObjectURL(e),t.link=t.clipResult,t.resultDone(),n()}),e,x):(t.clipResult=r.toDataURL(e,x),t.link=t.clipResult,t.resultDone(),n())}))},resultDone:function(){this.done=!0}}}},af03:function(t,e,x){var n=x("d039");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}}}]);
//# sourceMappingURL=chunk-39324414.d1845225.js.map