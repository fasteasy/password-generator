(function(t){function e(e){for(var n,c,l=e[0],i=e[1],o=e[2],p=0,f=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0302":function(t,e,a){},"261b":function(t,e,a){"use strict";var n=a("e1ae"),r=a.n(n);r.a},"4a11":function(t,e,a){},5387:function(t,e,a){},"553b":function(t,e,a){t.exports=a.p+"img/copy.a4cb34de.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("4ae6"),s=a.n(r),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("Logo"),a("div",{staticClass:"app"},[a("div",{staticClass:"app__type"},[a("TypeSwitcher",{attrs:{type:t.passwordType,callback:t.togglePasswordType}})],1),a("div",{staticClass:"app__password"},[a("Password",{attrs:{text:t.password}})],1),a("div",{staticClass:"app__strenght"},[a("Strenght",{attrs:{estimate:t.strenght}})],1),a("div",{staticClass:"app__length"},[a("Label",{attrs:{text:"Length"}}),a("Length",{attrs:{value:t.length,callback:t.setLength}})],1),a("div",{staticClass:"app__characters"},[a("Label",{attrs:{text:"Character type"}}),a("div",{staticClass:"checkbox-group"},[a("ToggleButton",{attrs:{text:"A-Z",name:"uppercaseLetters",active:t.uppercaseLetters,callback:t.toggleCharacterType}}),a("ToggleButton",{attrs:{text:"a-z",name:"lowercasLetters",active:t.lowercasLetters,callback:t.toggleCharacterType}}),a("ToggleButton",{attrs:{text:"0-9",name:"digits",active:t.digits,callback:t.toggleCharacterType}}),a("ToggleButton",{attrs:{text:"!”#$",name:"specialCharacters",active:t.specialCharacters,callback:t.toggleCharacterType}})],1)],1)]),a("Help")],1)},l=[],i=(a("a9e3"),a("580e")),o=a.n(i);function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:99,a=t+Math.random()*(e+1-t);return Math.floor(a)}function p(t,e){var a=u(t,e);return String.fromCharCode(a)}function f(){var t=65,e=90;return p(t,e)}function h(){var t=97,e=122;return p(t,e)}function g(){var t=48,e=57;return p(t,e)}function d(){var t=[[33,47],[58,64],[91,96],[123,126]],e=t[u(0,t.length-1)],a=e[0],n=e[1];return p(a,n)}var v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"logo",attrs:{src:a("9b19"),alt:"logo"}})},b=[],_={name:"Logo"},m=_,y=(a("c4ed"),a("2877")),w=Object(y["a"])(m,v,b,!1,null,null,null),x=w.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"type-switcher"},[a("button",{class:["type-switcher__item",{"type-switcher__item_active":"characters"===t.type}],on:{click:function(e){return t.callback("characters")}}},[t._v("Characters")]),a("button",{class:["type-switcher__item",{"type-switcher__item_active":"phrase"===t.type}],attrs:{disabled:""},on:{click:function(e){return t.callback("phrase")}}},[t._v("Phrase")])])},T=[],k={name:"TypeSwitcher",props:{type:String,callback:Function}},L=k,O=(a("a488"),Object(y["a"])(L,C,T,!1,null,null,null)),S=O.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"password"},[n("div",{staticClass:"password__field"},[t._v(t._s(t.text))]),n("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:function(){return t.text},expression:"() => text"}],staticClass:"password__button"},[n("img",{attrs:{src:a("553b"),alt:"copy"}})])])},j=[],$={name:"Password",props:{text:String}},E=$,B=(a("e2da"),Object(y["a"])(E,P,j,!1,null,null,null)),M=B.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"strenght"},[a("div",{class:["strenght__estimate","strenght__estimate_"+t.estimate]}),a("div",{staticClass:"strenght__label"},[t._v(t._s(t._f("capitalize")(t.estimate)))])])},z=[];a("fb6a");function A(t){return t.charAt(0).toUpperCase()+t.slice(1)}var F={name:"Strenght",props:{estimate:String},filters:{capitalize:A}},H=F,J=(a("d907"),Object(y["a"])(H,N,z,!1,null,null,null)),U=J.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"length"},[a("input",{staticClass:"length__range",attrs:{type:"range",min:"1",max:"100",step:"1"},domProps:{value:t.value},on:{change:function(e){return t.callback(e.target.value)}}}),a("input",{staticClass:"length__count",attrs:{type:"text"},domProps:{value:t.value},on:{input:function(e){return t.callback(e.target.value)}}})])},q=[],D={name:"Length",props:{value:Number,callback:Function}},G=D,I=(a("c8cc"),Object(y["a"])(G,Z,q,!1,null,null,null)),K=I.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label"},[t._v(t._s(t.text))])},R=[],V={name:"Label",props:{text:String}},W=V,X=(a("a5ba"),Object(y["a"])(W,Q,R,!1,null,null,null)),Y=X.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:["toggle-button",{"toggle-button_active":t.active}],on:{click:function(e){return t.callback(t.name)}}},[t._v(" "+t._s(t.text)+" ")])},et=[],at={name:"ToggleButton",props:{text:String,name:String,active:Boolean,callback:Function}},nt=at,rt=(a("261b"),Object(y["a"])(nt,tt,et,!1,null,null,null)),st=rt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"help"},[t._v(" help: password length can be from 1 to 100 characters ")])},lt=[],it={name:"Help"},ot=it,ut=(a("5b1a"),Object(y["a"])(ot,ct,lt,!1,null,null,null)),pt=ut.exports,ft={name:"App",components:{Logo:x,TypeSwitcher:S,Password:M,Strenght:U,Length:K,Label:Y,ToggleButton:st,Help:pt},data:function(){return{passwordType:"characters",length:10,uppercaseLetters:!0,lowercasLetters:!0,digits:!0,specialCharacters:!1}},methods:{togglePasswordType:function(t){this.passwordType=t},toggleCharacterType:function(t){this[t]=!this[t]},generatePassword:function(t,e,a,n,r){var s="",c=[];e||a||n||r?(e&&c.push(f),a&&c.push(h),n&&c.push(g),r&&c.push(d)):c=[f,h,g,d];for(var l=0;l<t;l++){var i=u(0,c.length-1);s+=c[i]()}return s},calculatePasswordStrength:function(t){var e=o()(t),a=e.score;switch(a){case 0:return"deadly";case 1:return"bad";case 2:return"normal";case 3:return"good";default:return"excellent"}},setLength:function(t){var e=Number(t);if(isNaN(e)||e<1||e>100)return!1;this.length=e}},computed:{password:function(){return this.generatePassword(this.length,this.uppercaseLetters,this.lowercasLetters,this.digits,this.specialCharacters)},strenght:function(){return this.calculatePasswordStrength(this.password)}}},ht=ft,gt=(a("5c0b"),Object(y["a"])(ht,c,l,!1,null,null,null)),dt=gt.exports;a("f5df1"),a("fb98");n["a"].config.productionTip=!1,n["a"].use(s.a),new n["a"]({render:function(t){return t(dt)}}).$mount("#app")},"5b1a":function(t,e,a){"use strict";var n=a("6c19"),r=a.n(n);r.a},"5c0b":function(t,e,a){"use strict";var n=a("5387"),r=a.n(n);r.a},"5ea1":function(t,e,a){},"6c19":function(t,e,a){},"92ec":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.e7dbb911.svg"},a488:function(t,e,a){"use strict";var n=a("92ec"),r=a.n(n);r.a},a5ba:function(t,e,a){"use strict";var n=a("0302"),r=a.n(n);r.a},b3b7:function(t,e,a){},b4dd:function(t,e,a){},c4ed:function(t,e,a){"use strict";var n=a("5ea1"),r=a.n(n);r.a},c8cc:function(t,e,a){"use strict";var n=a("b3b7"),r=a.n(n);r.a},d907:function(t,e,a){"use strict";var n=a("b4dd"),r=a.n(n);r.a},e1ae:function(t,e,a){},e2da:function(t,e,a){"use strict";var n=a("4a11"),r=a.n(n);r.a},fb98:function(t,e,a){}});
//# sourceMappingURL=app.347d861a.js.map