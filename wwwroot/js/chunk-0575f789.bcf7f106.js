(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0575f789"],{"02f4":function(t,e,r){var n=r("4588"),i=r("be13");t.exports=function(t){return function(e,r){var c,a,s=String(i(e)),o=n(r),u=s.length;return o<0||o>=u?t?"":void 0:(c=s.charCodeAt(o),c<55296||c>56319||o+1===u||(a=s.charCodeAt(o+1))<56320||a>57343?t?s.charAt(o):c:t?s.slice(o,o+2):a-56320+(c-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var n=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,r){var n=r("52a7"),i=r("4630"),c=r("6821"),a=r("6a99"),s=r("69a8"),o=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=c(t),e=a(e,!0),o)try{return u(t,e)}catch(r){}if(s(t,e))return i(!n.f.call(t,e),t[e])}},"214f":function(t,e,r){"use strict";r("b0c5");var n=r("2aba"),i=r("32e9"),c=r("79e5"),a=r("be13"),s=r("2b4c"),o=r("520a"),u=s("species"),l=!c(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var h=s(t),p=!c(function(){var e={};return e[h]=function(){return 7},7!=""[t](e)}),v=p?!c(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[u]=function(){return r}),r[h](""),!e}):void 0;if(!p||!v||"replace"===t&&!l||"split"===t&&!f){var d=/./[h],g=r(a,h,""[t],function(t,e,r,n,i){return e.exec===o?p&&!i?{done:!0,value:d.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),b=g[0],x=g[1];n(String.prototype,t,b),i(RegExp.prototype,h,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}}},"226a":function(t,e,r){"use strict";var n=r("b367"),i=r.n(n);i.a},"386b":function(t,e,r){var n=r("5ca1"),i=r("79e5"),c=r("be13"),a=/"/g,s=function(t,e,r,n){var i=String(c(t)),s="<"+e;return""!==r&&(s+=" "+r+'="'+String(n).replace(a,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(s),n(n.P+n.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}},"3ad6":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article"},[r("Header",{attrs:{title:t.tit,isLeft:!0}}),r("div",{staticClass:"article-wrap"},[r("Loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]}),r("v-touch",{attrs:{"swipe-options":{direction:"horizontal"}},on:{swipeleft:t.next,swiperight:t.prev}},[r("ArticleCon",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],attrs:{data:t.article}})],1)],1),t.isLoading?t._e():r("div",{staticClass:"article-btn"},[r("v-touch",{staticClass:"article-prev",class:{disabled:t.isPrev},attrs:{tag:"a"},on:{tap:t.prev}},[t._v("上一页")]),r("v-touch",{staticClass:"article-next",class:{disabled:t.isNext},attrs:{tag:"a"},on:{tap:t.next}},[t._v("下一页")])],1)],1)},i=[],c=r("bd86"),a=(r("a481"),r("3b2b"),r("e7e5"),r("d399")),s=(r("b54a"),r("96cf"),r("3b8d")),o=r("cebc"),u=r("06d0"),l=r("0e17"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-con",domProps:{innerHTML:t._s(t.data)}})},h=[],p={name:"ArticleCon",props:["data"]},v=p,d=(r("8c02"),r("2877")),g=Object(d["a"])(v,f,h,!1,null,"07988954",null),b=g.exports,x=r("2f62"),w={name:"Article",components:{Header:u["a"],ArticleCon:b,Loading:l["a"]},data:function(){return{currentN:0,link:"",chapterlist:[],tit:"",article:"",isLoading:!0,off:!1,isPrev:!1,isNext:!1}},created:function(){this.pageInit()},computed:Object(o["a"])({},Object(x["c"])({list:"list",n:"n",sourceId:"sourceId",listN:"listN"})),deactivated:function(){this.$destroy()},watch:{n:function(){this.isLoading=!0,this.pageInit()},list:function(){this.chapterlist=this.list.chapters}},methods:Object(o["a"])({},Object(x["b"])({upN:"updateN",upListN:"updateListN"}),{getArticle:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,r,n,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.off){t.next=2;break}return t.abrupt("return");case 2:return this.off=!0,e=this.chapterlist[this.currentN].link,r=this.chapterlist[this.currentN].title,t.next=7,this.axios.get("/article",{params:{link:e}});case 7:n=t.sent,0===n.flag?(a["a"].clear(),Object(a["a"])(n.msg),this.tit="出错了...",this.article=""):(this.tit=r,this.article=this.toHtml(n.chapter.body)),setTimeout(function(){i.off=!1,i.isLoading=!1},500);case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),pageInit:function(){this.chapterlist.length<=0&&(this.chapterlist=this.list.chapters),this.listN&&this.listN[this.sourceId]>0?this.currentN=this.listN[this.sourceId]:this.currentN=0,0===this.n&&this.listN[this.sourceId]>0?(this.listN[this.sourceId]>=this.list.chapters.length-1?this.isNext=!0:this.isNext=!1,this.listN[this.sourceId]<=0?this.isPrev=!0:this.isPrev=!1):(this.n>=this.list.chapters.length-1?this.isNext=!0:this.isNext=!1,this.n<=0?this.isPrev=!0:this.isPrev=!1),this.getArticle()},toHtml:function(t){var e=new RegExp("([^\n])+\n","g");return t.replace(e,function(t){return"<p>".concat(t,"</p>")})},next:function(){if(!this.isNext){var t=this.currentN;t++,this.upListN(Object(c["a"])({},this.sourceId,t)),this.upN(t)}},prev:function(){if(!this.isPrev){var t=this.currentN;t--,this.upListN(Object(c["a"])({},this.sourceId,t)),this.upN(t)}}})},N=w,y=(r("226a"),Object(d["a"])(N,n,i,!1,null,"309ed4d0",null));e["default"]=y.exports},"3b2b":function(t,e,r){var n=r("7726"),i=r("5dbc"),c=r("86cc").f,a=r("9093").f,s=r("aae3"),o=r("0bfb"),u=n.RegExp,l=u,f=u.prototype,h=/a/g,p=/a/g,v=new u(h)!==h;if(r("9e1e")&&(!v||r("79e5")(function(){return p[r("2b4c")("match")]=!1,u(h)!=h||u(p)==p||"/a/i"!=u(h,"i")}))){u=function(t,e){var r=this instanceof u,n=s(t),c=void 0===e;return!r&&n&&t.constructor===u&&c?t:i(v?new l(n&&!c?t.source:t,e):l((n=t instanceof u)?t.source:t,n&&c?o.call(t):e),r?this:f,u)};for(var d=function(t){t in u||c(u,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=a(l),b=0;g.length>b;)d(g[b++]);f.constructor=u,u.prototype=f,r("2aba")(n,"RegExp",u)}r("7a56")("RegExp")},"520a":function(t,e,r){"use strict";var n=r("0bfb"),i=RegExp.prototype.exec,c=String.prototype.replace,a=i,s="lastIndex",o=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[s]||0!==e[s]}(),u=void 0!==/()??/.exec("")[1],l=o||u;l&&(a=function(t){var e,r,a,l,f=this;return u&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),o&&(e=f[s]),a=i.call(f,t),o&&a&&(f[s]=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&c.call(a[0],r,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),t.exports=a},"5dbc":function(t,e,r){var n=r("d3f4"),i=r("8b97").set;t.exports=function(t,e,r){var c,a=e.constructor;return a!==r&&"function"==typeof a&&(c=a.prototype)!==r.prototype&&n(c)&&i&&i(t,c),t}},"5f1b":function(t,e,r){"use strict";var n=r("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var c=r.call(t,e);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"8b97":function(t,e,r){var n=r("d3f4"),i=r("cb7c"),c=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,r){return c(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:c}},"8c02":function(t,e,r){"use strict";var n=r("93b3"),i=r.n(n);i.a},9093:function(t,e,r){var n=r("ce10"),i=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},"93b3":function(t,e,r){},a481:function(t,e,r){"use strict";var n=r("cb7c"),i=r("4bf8"),c=r("9def"),a=r("4588"),s=r("0390"),o=r("5f1b"),u=Math.max,l=Math.min,f=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,function(t,e,r,d){return[function(n,i){var c=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,c,i):r.call(String(c),n,i)},function(t,e){var i=d(r,t,this,e);if(i.done)return i.value;var f=n(t),h=String(this),p="function"===typeof e;p||(e=String(e));var b=f.global;if(b){var x=f.unicode;f.lastIndex=0}var w=[];while(1){var N=o(f,h);if(null===N)break;if(w.push(N),!b)break;var y=String(N[0]);""===y&&(f.lastIndex=s(h,c(f.lastIndex),x))}for(var m="",_=0,E=0;E<w.length;E++){N=w[E];for(var O=String(N[0]),L=u(l(a(N.index),h.length),0),j=[],I=1;I<N.length;I++)j.push(v(N[I]));var R=N.groups;if(p){var k=[O].concat(j,L,h);void 0!==R&&k.push(R);var A=String(e.apply(void 0,k))}else A=g(O,h,L,j,R,e);L>=_&&(m+=h.slice(_,L)+A,_=L+O.length)}return m+h.slice(_)}];function g(t,e,n,c,a,s){var o=n+t.length,u=c.length,l=p;return void 0!==a&&(a=i(a),l=h),r.call(s,l,function(r,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(o);case"<":s=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return r;if(l>u){var h=f(l/10);return 0===h?r:h<=u?void 0===c[h-1]?i.charAt(1):c[h-1]+i.charAt(1):r}s=c[l-1]}return void 0===s?"":s})}})},aae3:function(t,e,r){var n=r("d3f4"),i=r("2d95"),c=r("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},b367:function(t,e,r){},b54a:function(t,e,r){"use strict";r("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})}}]);
//# sourceMappingURL=chunk-0575f789.bcf7f106.js.map