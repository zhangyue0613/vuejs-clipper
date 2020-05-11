(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d91d87a2"],{"09b5":function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"e",(function(){return s})),i.d(t,"d",(function(){return a})),i.d(t,"f",(function(){return c})),i.d(t,"c",(function(){return r})),i.d(t,"b",(function(){return l}));var n={initapp:{}};n.initapp.html='<div id="app">\n  <clipper-basic class="my-clipper" src="example.jpg" />\n</div>',n.initapp.js="new Vue({\n  el: '#app'\n})",n.initapp.css=".my-clipper {\n  width: 100%;\n  max-width: 700px;\n}",n.upload={},n.upload.html='<div id="app">\n  <input type="file" @change="upload($event)">\n  <clipper-basic class="my-clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n  </clipper-basic>\n</div>',n.upload.js="new Vue({\n  el: '#app',\n  data: {\n    imgURL: ''\n  },\n  methods: {\n    upload: function(e){\n      if (e.target.files.length !== 0) {\n        if(this.imgURL) URL.revokeObjectURL(this.imgURL)\n        this.imgURL = window.URL.createObjectURL(e.target.files[0]);\n      }\n    }\n  }\n})",n.upload.css=".placeholder {\n  text-align: center;\n  padding: 20px;\n  background-color: lightgray;\n}",n.upload2={},n.upload2.html='<div id="app">\n  <clipper-upload v-model="imgURL">upload image</clipper-upload>\n  <clipper-basic class="my-clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n  </clipper-basic>\n</div>',n.upload2.js="new Vue({\n    el: '#app',\n    data: {\n      imgURL: ''\n    }\n})",n.result={},n.result.html='<button @click="getResult">clip image</button>\n<clipper-basic class="my-clipper" ref="clipper" :src="imgURL">\n    <div class="placeholder" slot="placeholder">No image</div>\n</clipper-basic>\n<div>\n    <div>result:</div>\n    <img class="result" :src="resultURL" alt="">\n</div>',n.result.js1="data: {\n  imgURL: '',\n  resultURL: ''\n}",n.result.js='getResult: function () {\n  const canvas = this.$refs.clipper.clip();//call component\'s clip method\n  this.resultURL = canvas.toDataURL("image/jpeg", 1);//canvas->image\n}',n.preview={},n.preview.html='<clipper-basic \n  class="my-clipper" \n  ref="clipper" \n  :src="imgURL" \n  preview="my-preview" >\n  <div class="placeholder" slot="placeholder">No image</div>\n</clipper-basic>\n<div>\n  <div>preview:</div>\n  <clipper-preview name="my-preview" class="my-clipper">\n    <div class="placeholder" slot="placeholder">preview area</div>\n  </clipper-preview>\n</div>',n.full='<meta charset="utf-8">\n<title>vuejs-clipper demo</title>\n<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"><\/script>\n<script src="./vuejs-clipper.umd.js"><\/script>\n<link rel="stylesheet" href="./vuejs-clipper.css">\n<div id="app">\n    <button>\n      <clipper-upload v-model="imgURL">upload image</clipper-upload>\n    </button>\n    <button @click="getResult">clip image</button>\n    <clipper-basic class="my-clipper" ref="clipper" :src="imgURL" preview="my-preview">\n        <div class="placeholder" slot="placeholder">No image</div>\n    </clipper-basic>\n    <div>\n        <div>preview:</div>\n        <clipper-preview name="my-preview" class="my-clipper">\n            <div class="placeholder" slot="placeholder">preview area</div>\n        </clipper-preview>\n    </div>\n    <div>\n        <div>result:</div>\n        <img class="result" :src="resultURL" alt="">\n    </div>\n</div>\n<script>\n    new Vue({\n        el: \'#app\',\n        data: {\n            imgURL: \'\',\n            resultURL: \'\'\n        },\n        methods: {\n            getResult: function () {\n                const canvas = this.$refs.clipper.clip();//call component\'s clip method\n                this.resultURL = canvas.toDataURL("image/jpeg", 1);//canvas->image\n            }\n        }\n    })\n<\/script>\n<style>\n    .my-clipper {\n        width: 100%;\n        max-width: 700px;\n    }\n\n    .placeholder {\n        text-align: center;\n        padding: 20px;\n        background-color: lightgray;\n    }\n</style>';var s={html:'<clipper-basicref="clipper" \n  ref="clipper"\n  :style="basicStyle" \n  src="long.jpg"\n  @load="imgLoad" \n/>',js:"data: () => {\n  return {\n      maxWidth: 700,\n      maxHeight: 500,\n      based: 850\n  };\n},\nmethods: {\n  imgLoad: function() {\n      const imgRatio = this.$refs.clipper.imgRatio;\n      if(imgRatio < 1) this.based =  this.maxHeight*imgRatio;\n      else this.based = this.maxWidth;\n  },\n},\ncomputed: {\n  basicStyle : function() {\n      return {\n          maxWidth: this.based + 'px'\n      }\n  }\n}",html2:'<clipper-basic\n  src="long.jpg"\n  :wrapRatio="1"\n/>'},a={const:"const canvas = this.$refs.clipper.clip();",durl:'const jpgURL = canvas.toDataURL("image/jpeg")//to jpg\nconst pngURL = canvas.toDataURL("image/png", 1)//to png',blob:"canvas.toBlob(function(blob) {\n  //...\n});",url:"const vm = this;\nconst canvas = this.$refs.clipper.clip();\ncanvas.toBlob(function(blob){\n    if(vm.resultURL)\n      URL.revokeObjectURL(vm.resultURL)\n    vm.resultURL = URL.createObjectURL(blob)\n})",urles6:"this.$refs.clipper.clip().toBlob(blob=>{\n  if(this.resultURL) URL.revokeObjectURL(this.resultURL)\n  this.resultURL = URL.createObjectURL(blob)\n})",reader:"const vm = this;\nconst canvas = this.$refs.clipper.clip();\ncanvas.toBlob(function(blob){\n    const reader = new FileReader()\n    reader.addEventListener('load' ,function(){\n        vm.resultURL = this.result;\n    })\n    reader.readAsDataURL(blob);\n})"},c={ex1:'<clipper-fixed \n  src="ex2.jpg" \n  shadow="transparent" \n  border-color="transparent"\n  :grid="false"\n/>'},r={basicHtml:'<clipper-basic ref="clipper" src="ex2.jpg" />',basic:"//click buttons",fixed:"//click buttons"},l={script:"const canvas = this.$refs.clipper.clip({ wPixel: <pixel> })"}},1148:function(e,t,i){"use strict";var n=i("a691"),s=i("1d80");e.exports="".repeat||function(e){var t=String(s(this)),i="",a=n(e);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(i+=t);return i}},"3c77":function(e,t,i){"use strict";var n=i("df0f"),s=i.n(n);s.a},"408a":function(e,t,i){var n=i("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},"60da":function(e,t,i){"use strict";var n=i("83ab"),s=i("d039"),a=i("df75"),c=i("7418"),r=i("d1e7"),l=i("7b0b"),o=i("44ad"),p=Object.assign,d=Object.defineProperty;e.exports=!p||s((function(){if(n&&1!==p({b:1},p(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},i=Symbol(),s="abcdefghijklmnopqrst";return e[i]=7,s.split("").forEach((function(e){t[e]=e})),7!=p({},e)[i]||a(p({},t)).join("")!=s}))?function(e,t){var i=l(e),s=arguments.length,p=1,d=c.f,h=r.f;while(s>p){var u,f=o(arguments[p++]),v=d?a(f).concat(d(f)):a(f),g=v.length,m=0;while(g>m)u=v[m++],n&&!h.call(f,u)||(i[u]=f[u])}return i}:p},"857a":function(e,t,i){var n=i("1d80"),s=/"/g;e.exports=function(e,t,i,a){var c=String(n(e)),r="<"+t;return""!==i&&(r+=" "+i+'="'+String(a).replace(s,"&quot;")+'"'),r+">"+c+"</"+t+">"}},af03:function(e,t,i){var n=i("d039");e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},b680:function(e,t,i){"use strict";var n=i("23e7"),s=i("a691"),a=i("408a"),c=i("1148"),r=i("d039"),l=1..toFixed,o=Math.floor,p=function(e,t,i){return 0===t?i:t%2===1?p(e,t-1,i*e):p(e*e,t/2,i)},d=function(e){var t=0,i=e;while(i>=4096)t+=12,i/=4096;while(i>=2)t+=1,i/=2;return t},h=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){l.call({})}));n({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,i,n,r,l=a(this),h=s(e),u=[0,0,0,0,0,0],f="",v="0",g=function(e,t){var i=-1,n=t;while(++i<6)n+=e*u[i],u[i]=n%1e7,n=o(n/1e7)},m=function(e){var t=6,i=0;while(--t>=0)i+=u[t],u[t]=o(i/e),i=i%e*1e7},b=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==u[e]){var i=String(u[e]);t=""===t?i:t+c.call("0",7-i.length)+i}return t};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(f="-",l=-l),l>1e-21)if(t=d(l*p(2,69,1))-69,i=t<0?l*p(2,-t,1):l/p(2,t,1),i*=4503599627370496,t=52-t,t>0){g(0,i),n=h;while(n>=7)g(1e7,0),n-=7;g(p(10,n,1),0),n=t-1;while(n>=23)m(1<<23),n-=23;m(1<<n),g(1,1),m(2),v=b()}else g(0,i),g(1<<-t,0),v=b()+c.call("0",h);return h>0?(r=v.length,v=f+(r<=h?"0."+c.call("0",h-r)+v:v.slice(0,r-h)+"."+v.slice(r-h))):v=f+v,v}})},c5fd:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"list-content content"},[i("div",{staticClass:"area"},[i("h2",[e._v("Set clipping components zooming position")]),i("p",[e._v("You can programmatically set the position and size of the scalable/movable area in clipping components.")]),i("h4",[e._v("clipper-basic")]),i("p",[e._v("These rxjs subjects are merged after operations that calculate the valid positions(top, left, width, height), so you need to make sure that your positions are valid by yourself. For example, setting width 100 to (%) and left to 10 (%) is not a valid position because the clipping area will flow over the component.")]),i("h5",[e._v("click buttons to set the position and sizing of the clipping area")]),i("div",{staticClass:"flex"},e._l(e.pos,(function(t,n){return i("div",{key:"btn-"+n,staticClass:"flex pd"},[i("span",{staticClass:"label"},[i("button",{on:{click:function(i){return e.setBasicPos(t)}}},[e._v("pos: "+e._s(t.tl)+" size: "+e._s(t.wh))])])])})),0),i("div",{staticClass:"basic"},[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.basicHtml,expression:"code.basicHtml"}]},[i("code",{staticClass:"html"})]),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.basic,expression:"code.basic"}]},[i("code",{staticClass:"javascript"})]),i("clipper-basic",{ref:"basic",attrs:{src:"ex2.jpg",grid:!1}})],1)]),i("div",{staticClass:"area"},[i("h4",[e._v("clipper-fixed")]),i("p",[e._v("You can also adjust clipper-fixed's images position and sizing.")]),i("div",{staticClass:"flex"},e._l(e.posFixed,(function(t,n){return i("div",{key:"btn-"+n,staticClass:"flex pd"},[i("span",{staticClass:"label"},[i("button",{on:{click:function(i){return e.setFixedPos(t)}}},[e._v("translate("+e._s(t.tl.left)+"%, "+e._s(t.tl.top)+"%), scale("+e._s(t.wh)+")")])])])})),0),i("div",{staticClass:"basic"},[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.basicHtml,expression:"code.basicHtml"}]},[i("code",{staticClass:"html"})]),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.fixed,expression:"code.fixed"}]},[i("code",{staticClass:"javascript"})]),i("clipper-fixed",{ref:"fixed",attrs:{src:"ex2.jpg"}})],1)])])},s=[],a=(i("99af"),i("b680"),i("cca6"),i("c7cd"),i("09b5")),c={data:function(){return{src:"ex1.jpg",clipResult:"",code:a["c"],pos:[{tl:{top:25,left:25},wh:{width:50,height:50}},{tl:{top:0,left:0},wh:{width:100,height:100}},{tl:{right:0,bottom:0},wh:{width:40,height:30}},{tl:{leftt:0,bottom:20},wh:{width:40,height:30}}],posFixed:[{tl:{top:0,left:0},wh:1},{tl:{top:50,left:50},wh:.6},{tl:{left:10,top:10},wh:2}]}},methods:{clip:function(){this.clipToURL()},setBasicPos:function(e){var t=this.$refs.basic;t&&(t.setTL$.next(e.tl),t.setWH$.next(e.wh),this.$set(this.code,"basic","this.$refs.clipper.setTL$.next(".concat(JSON.stringify(e.tl),")\nthis.$refs.clipper.setWH$.next(").concat(JSON.stringify(e.wh),")")))},setFixedPos:function(e){var t=this.$refs.fixed;t&&(t.setTL$.next(e.tl),t.setWH$.next(e.wh),this.$set(this.code,"fixed","this.$refs.clipper.setTL$.next(".concat(JSON.stringify(e.tl),")\nthis.$refs.clipper.setWH$.next(").concat(JSON.stringify(e.wh),")")))}},computed:{position:function(){return Object.assign(this.pos,{right:100-this.pos.width-this.pos.left,bottom:100-this.pos.height-this.pos.top})},posBasic:function(){this.$refs.basic;var e=2,t={top:this.position.top.toFixed(e),left:this.position.left.toFixed(e),width:this.position.width.toFixed(e),height:this.position.height.toFixed(e)};return this.setBasicPos(),t}}},r=c,l=(i("3c77"),i("2877")),o=Object(l["a"])(r,n,s,!1,null,"4a53be12",null);t["default"]=o.exports},c7cd:function(e,t,i){"use strict";var n=i("23e7"),s=i("857a"),a=i("af03");n({target:"String",proto:!0,forced:a("fixed")},{fixed:function(){return s(this,"tt","","")}})},cca6:function(e,t,i){var n=i("23e7"),s=i("60da");n({target:"Object",stat:!0,forced:Object.assign!==s},{assign:s})},df0f:function(e,t,i){}}]);
//# sourceMappingURL=chunk-d91d87a2.ce71b894.js.map