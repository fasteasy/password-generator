(function(t){function e(e){for(var n,c,o=e[0],i=e[1],l=e[2],p=0,f=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0302":function(t,e,a){},"261b":function(t,e,a){"use strict";var n=a("e1ae"),r=a.n(n);r.a},"31e6":function(t,e,a){t.exports=a.p+"img/info-button.29bd90f9.svg"},"4a11":function(t,e,a){},5387:function(t,e,a){},"553b":function(t,e,a){t.exports=a.p+"img/copy.a7aa9c54.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("Logo"),a("div",{staticClass:"app"},[a("div",{staticClass:"app__type"},[a("TypeSwitcher",{attrs:{type:t.passwordType,callback:t.togglePasswordType}})],1),a("div",{staticClass:"app__password"},[a("Password",{attrs:{text:t.password}})],1),a("div",{staticClass:"app__strenght"},[a("Strenght",{attrs:{estimate:t.strenght}})],1),a("div",{staticClass:"app__length"},[a("Label",{attrs:{text:"Length"}}),a("Length",{attrs:{value:t.length},model:{value:t.length,callback:function(e){t.length=e},expression:"length"}})],1),a("div",{staticClass:"app__characters"},[a("Label",{attrs:{text:"Character type"}}),a("div",{staticClass:"checkbox-group"},[a("ToggleButton",{attrs:{text:"A-Z",name:"uppercaseLetters",active:t.uppercaseLetters,callback:t.toggleCharacterType}}),a("ToggleButton",{attrs:{text:"a-z",name:"lowercasLetters",active:t.lowercasLetters,callback:t.toggleCharacterType}}),a("ToggleButton",{attrs:{text:"0-9",name:"digits",active:t.digits,callback:t.toggleCharacterType}}),a("ToggleButton",{attrs:{text:"!”#$",name:"specialCharacters",active:t.specialCharacters,callback:t.toggleCharacterType}})],1)],1)]),a("InfoButton")],1)},s=[],c=a("580e"),o=a.n(c);function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:99,a=t+Math.random()*(e+1-t);return Math.floor(a)}function l(t,e){var a=i(t,e);return String.fromCharCode(a)}function u(){var t=65,e=90;return l(t,e)}function p(){var t=97,e=122;return l(t,e)}function f(){var t=48,e=57;return l(t,e)}function g(){var t=[[33,47],[58,64],[91,96],[123,126]],e=t[i(0,t.length-1)],a=e[0],n=e[1];return l(a,n)}var h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"logo",attrs:{src:a("9b19"),alt:"logo"}})},d=[],v={name:"Logo"},b=v,_=(a("c4ed"),a("2877")),m=Object(_["a"])(b,h,d,!1,null,null,null),y=m.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"type-switcher"},[a("button",{class:["type-switcher__item",{"type-switcher__item_active":"characters"===t.type}],on:{click:function(e){return t.callback("characters")}}},[t._v("Characters")]),a("button",{class:["type-switcher__item",{"type-switcher__item_active":"phrase"===t.type}],attrs:{disabled:""},on:{click:function(e){return t.callback("phrase")}}},[t._v("Phrase")])])},x=[],C={name:"TypeSwitcher",props:{type:String,callback:Function}},T=C,O=(a("a488"),Object(_["a"])(T,w,x,!1,null,null,null)),S=O.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"password"},[n("div",{staticClass:"password__field"},[t._v(t._s(t.text))]),n("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:function(){return t.text},expression:"() => text"}],staticClass:"password__button"},[n("img",{attrs:{src:a("553b"),alt:"copy"}})])])},P=[],j={name:"Password",props:{text:String}},k=j,$=(a("e2da"),Object(_["a"])(k,L,P,!1,null,null,null)),B=$.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"strenght"},[a("div",{class:["strenght__estimate","strenght__estimate_"+t.estimate]}),a("div",{staticClass:"strenght__label"},[t._v(t._s(t._f("capitalize")(t.estimate)))])])},M=[];a("fb6a");function z(t){return t.charAt(0).toUpperCase()+t.slice(1)}var A={name:"Strenght",props:{estimate:String},filters:{capitalize:z}},I=A,N=(a("d907"),Object(_["a"])(I,E,M,!1,null,null,null)),F=N.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"length"},[a("input",{staticClass:"length__range",attrs:{type:"range",min:"1",max:"100",step:"1"},domProps:{value:t.value},on:{change:function(e){t.$emit("input",Number(e.target.value))}}}),a("input",{staticClass:"length__count",attrs:{type:"text",readonly:""},domProps:{value:t.value}})])},U=[],Z=(a("a9e3"),{name:"Length",props:{value:Number}}),q=Z,D=(a("c8cc"),Object(_["a"])(q,J,U,!1,null,null,null)),G=D.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label"},[t._v(t._s(t.text))])},K=[],Q={name:"Label",props:{text:String}},R=Q,V=(a("a5ba"),Object(_["a"])(R,H,K,!1,null,null,null)),W=V.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:["toggle-button",{"toggle-button_active":t.active}],on:{click:function(e){return t.callback(t.name)}}},[t._v(t._s(t.text))])},Y=[],tt={name:"ToggleButton",props:{text:String,name:String,active:Boolean,callback:Function}},et=tt,at=(a("261b"),Object(_["a"])(et,X,Y,!1,null,null,null)),nt=at.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"info-button",attrs:{src:a("31e6"),alt:"information about this app"}})},st=[],ct={name:"InfoButton"},ot=ct,it=(a("a768"),Object(_["a"])(ot,rt,st,!1,null,null,null)),lt=it.exports,ut={name:"App",components:{Logo:y,TypeSwitcher:S,Password:B,Strenght:F,Length:G,Label:W,ToggleButton:nt,InfoButton:lt},data:function(){return{passwordType:"characters",length:15,uppercaseLetters:!0,lowercasLetters:!0,digits:!0,specialCharacters:!1}},methods:{togglePasswordType:function(t){this.passwordType=t},toggleCharacterType:function(t){this[t]=!this[t]},generatePassword:function(t,e,a,n,r){var s="",c=[];e||a||n||r?(e&&c.push(u),a&&c.push(p),n&&c.push(f),r&&c.push(g)):c=[u,p,f,g];for(var o=0;o<t;o++){var l=i(0,c.length-1);s+=c[l]()}return s},calculatePasswordStrength:function(t){var e=o()(t),a=e.score;return a<=2?"bad":3===a?"normal":"good"}},computed:{password:function(){return this.generatePassword(this.length,this.uppercaseLetters,this.lowercasLetters,this.digits,this.specialCharacters)},strenght:function(){return this.calculatePasswordStrength(this.password)}}},pt=ut,ft=(a("5c0b"),Object(_["a"])(pt,r,s,!1,null,null,null)),gt=ft.exports,ht=a("4ae6"),dt=a.n(ht);a("f5df1"),a("fb98");n["a"].config.productionTip=!1,n["a"].use(dt.a),new n["a"]({render:function(t){return t(gt)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5387"),r=a.n(n);r.a},"5ea1":function(t,e,a){},"92ec":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.0b1a7c34.svg"},a488:function(t,e,a){"use strict";var n=a("92ec"),r=a.n(n);r.a},a5ba:function(t,e,a){"use strict";var n=a("0302"),r=a.n(n);r.a},a768:function(t,e,a){"use strict";var n=a("b41f"),r=a.n(n);r.a},b3b7:function(t,e,a){},b41f:function(t,e,a){},b4dd:function(t,e,a){},c4ed:function(t,e,a){"use strict";var n=a("5ea1"),r=a.n(n);r.a},c8cc:function(t,e,a){"use strict";var n=a("b3b7"),r=a.n(n);r.a},d907:function(t,e,a){"use strict";var n=a("b4dd"),r=a.n(n);r.a},e1ae:function(t,e,a){},e2da:function(t,e,a){"use strict";var n=a("4a11"),r=a.n(n);r.a},fb98:function(t,e,a){}});
//# sourceMappingURL=app.8a123810.js.map