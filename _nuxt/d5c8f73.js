(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{344:function(t,n,e){var content=e(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(41).default)("1593f3e4",content,!0,{sourceMap:!1})},351:function(t,n,e){"use strict";e.r(n);var r={name:"Header",components:{},data:function(){return{titleBarIcons:[{title:"minimise"},{title:"maximise"},{title:"close"}]}},methods:{titleBarIconClick:function(t){console.log("TODO implement ".concat(t.toUpperCase()," function"))}}},o=(e(354),e(49)),c=e(63),l=e.n(c),f=e(378),d=e(332),v=e(335),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-row",{staticClass:"title_bar"},[e("v-spacer"),t._v(" "),t._l(t.titleBarIcons,(function(n,i){return e("v-tooltip",{key:i,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[e("img",t._g(t._b({staticClass:"mr-4 title_bar__img",attrs:{alt:n.title,src:"/nuxtjs/"+n.title+".svg"},on:{click:function(e){return t.titleBarIconClick(n.title)}}},"img",c,!1),o))]}}],null,!0)},[t._v(" "),e("span",[t._v(t._s(n.title))])])}))],2)}),[],!1,null,"5ddd91a0",null);n.default=component.exports;l()(component,{VRow:f.a,VSpacer:d.a,VTooltip:v.a})},354:function(t,n,e){"use strict";e(344)},355:function(t,n,e){var r=e(40)(!1);r.push([t.i,'#app[data-v-5ddd91a0]{font-family:"Roboto",sans-serif}.title_bar[data-v-5ddd91a0]{position:absolute;width:1280px;height:32px;top:12px;background:#757575}.title_bar__img[data-v-5ddd91a0]{cursor:pointer}',""]),t.exports=r},378:function(t,n,e){"use strict";e(16),e(22),e(32),e(33);var r=e(5),o=(e(8),e(46),e(54),e(34),e(15),e(25),e(55),e(233),e(43),e(234),e(235),e(236),e(237),e(238),e(239),e(240),e(241),e(242),e(243),e(244),e(245),e(246),e(47),e(17),e(175),e(0)),c=e(110),l=e(2);function f(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function j(t,n){return v.reduce((function(e,r){return e[t+Object(l.s)(r)]=n(),e}),{})}var O=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},m=j("align",(function(){return{type:String,default:null,validator:O}})),w=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},_=j("justify",(function(){return{type:String,default:null,validator:w}})),h=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},C=j("alignContent",(function(){return{type:String,default:null,validator:h}})),k={align:Object.keys(m),justify:Object.keys(_),alignContent:Object.keys(C)},S={align:"align",justify:"justify",alignContent:"align-content"};function x(t,n,e){var r=S[t];if(null!=e){if(n){var o=n.replace(t,"");r+="-".concat(o)}return(r+="-".concat(e)).toLowerCase()}}var P=new Map;n.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},m),{},{justify:{type:String,default:null,validator:w}},_),{},{alignContent:{type:String,default:null,validator:h}},C),render:function(t,n){var e=n.props,data=n.data,o=n.children,l="";for(var f in e)l+=String(e[f]);var d=P.get(l);return d||function(){var t,n;for(n in d=[],k)k[n].forEach((function(t){var r=e[t],o=x(n,t,r);o&&d.push(o)}));d.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(t,"align-".concat(e.align),e.align),Object(r.a)(t,"justify-".concat(e.justify),e.justify),Object(r.a)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),P.set(l,d)}(),t(e.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})}}]);