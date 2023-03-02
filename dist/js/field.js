(()=>{"use strict";var e={744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={"#":{pattern:/[0-9]/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,uppercase:!0},a:{pattern:/[a-zA-Z]/,lowercase:!0},"!":{escape:!0},"*":{repeat:!0}};function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return l(t).length>1?u(t)(e,t,n,r):c(e,t,n,r)}function l(e){try{return JSON.parse(e)}catch(t){return[e]}}function u(e){var t=l(e).sort((function(e,t){return e.length-t.length}));return function(e,r,a){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=t.map((function(t){return c(e,t,a,!1)})),s=i.pop();for(var l in t)if(n(s,t[l],a))return c(e,t[l],a,o);return""};function n(e,t,n){for(var r in n)n[r].escape&&(t=t.replace(new RegExp(r+".{1}","g"),""));return t.split("").filter((function(e){return n[e]&&n[e].pattern})).length>=e.length}}function c(e,t,n){for(var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=0,o=0,i="",s="";a<t.length&&o<e.length;){var l=t[a],u=e[o],c=n[l];if(c&&c.pattern)c.pattern.test(u)&&(i+=p(u,c),a++,r&&t[a]&&(n[t[a]]?n[t[a]]&&n[t[a]].escape&&(i+=t[a+1],a+=2):(i+=t[a],a++))),o++;else if(c&&c.repeat){var f=n[t[a-1]];f&&!f.pattern.test(u)?a++:a--}else c&&c.escape&&(l=t[++a]),r&&(i+=l),u===l&&o++,a++}for(;r&&a<t.length;){var d=t[a];if(n[d]){s="";break}s+=d,a++}return i+s}function p(e,t){return t.transform&&(e=t.transform(e)),t.uppercase?e.toLocaleUpperCase():t.lowercase?e.toLocaleLowerCase():e}function f(e){return e instanceof HTMLInputElement?e:e.querySelector("input")||e}function d(e){return"[object String]"===Object.prototype.toString.call(e)}var v,h=function(){function n(t){var r=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e(this,n),!t)throw new Error("Maska: no element for mask");if(null!=a.preprocessor&&"function"!=typeof a.preprocessor)throw new Error("Maska: preprocessor must be a function");if(a.tokens)for(var s in a.tokens)a.tokens[s]=o({},a.tokens[s]),a.tokens[s].pattern&&d(a.tokens[s].pattern)&&(a.tokens[s].pattern=new RegExp(a.tokens[s].pattern));this._opts={mask:a.mask,tokens:o(o({},i),a.tokens),preprocessor:a.preprocessor},this._el=d(t)?document.querySelectorAll(t):t.length?t:[t],this.inputEvent=function(e){return r.updateValue(e.target,e)},this.init()}var r,a;return r=n,(a=[{key:"init",value:function(){for(var e=this,t=function(t){var n=f(e._el[t]);!e._opts.mask||n.dataset.mask&&n.dataset.mask===e._opts.mask||(n.dataset.mask=e._opts.mask),setTimeout((function(){return e.updateValue(n)}),0),n.dataset.maskInited||(n.dataset.maskInited=!0,n.addEventListener("input",e.inputEvent),n.addEventListener("beforeinput",e.beforeInput))},n=0;n<this._el.length;n++)t(n)}},{key:"destroy",value:function(){for(var e=0;e<this._el.length;e++){var t=f(this._el[e]);t.removeEventListener("input",this.inputEvent),t.removeEventListener("beforeinput",this.beforeInput),delete t.dataset.mask,delete t.dataset.maskInited}}},{key:"updateValue",value:function(e,t){if(e&&e.type){var n=e.type.match(/^number$/i)&&e.validity.badInput;if(!e.value&&!n||!e.dataset.mask)return e.dataset.maskRawValue="",void this.dispatch("maska",e,t);var r=e.selectionEnd,a=e.value,o=a[r-1];e.dataset.maskRawValue=s(e.value,e.dataset.mask,this._opts.tokens,!1);var i=e.value;this._opts.preprocessor&&(i=this._opts.preprocessor(i)),e.value=s(i,e.dataset.mask,this._opts.tokens),t&&"insertText"===t.inputType&&r===a.length&&(r=e.value.length),function(e,t,n){for(;t&&t<e.value.length&&e.value.charAt(t-1)!==n;)t++;(e.type?e.type.match(/^(text|search|password|tel|url)$/i):!e.type)&&e===document.activeElement&&(e.setSelectionRange(t,t),setTimeout((function(){e.setSelectionRange(t,t)}),0))}(e,r,o),this.dispatch("maska",e,t),e.value!==a&&this.dispatch("input",e,t)}}},{key:"beforeInput",value:function(e){e&&e.target&&e.target.type&&e.target.type.match(/^number$/i)&&e.data&&isNaN(e.target.value+e.data)&&e.preventDefault()}},{key:"dispatch",value:function(e,t,n){t.dispatchEvent(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=document.createEvent("Event");return n.initEvent(e,!0,!0),t&&(n.inputType=t),n}(e,n&&n.inputType||null))}}])&&t(r.prototype,a),n}(),m=(v=new WeakMap,function(e,t){t.value&&(v.has(e)&&!function(e){return!(d(e.value)&&e.value===e.oldValue||Array.isArray(e.value)&&JSON.stringify(e.value)===JSON.stringify(e.oldValue)||e.value&&e.value.mask&&e.oldValue&&e.oldValue.mask&&e.value.mask===e.oldValue.mask)}(t)||v.set(e,new h(e,function(e){var t={};return e.mask?(t.mask=Array.isArray(e.mask)?JSON.stringify(e.mask):e.mask,t.tokens=e.tokens?o({},e.tokens):{},t.preprocessor=e.preprocessor):t.mask=Array.isArray(e)?JSON.stringify(e):e,t}(t.value))))});function k(e){e.directive("maska",m)}"undefined"!=typeof window&&window.Vue&&window.Vue.use&&window.Vue.use(k);const y=k,g=Vue;var b=["innerHTML"];const w={props:["resourceName","field"],beforeMount:function(){this.field.linkOnIndex&&(this.field.value='<a href="tel:'.concat(this.field.value,'" class="text-primary">').concat(this.field.value,"</a>"))}};var O=n(744);const E=(0,O.Z)(w,[["render",function(e,t,n,r,a,o){return(0,g.openBlock)(),(0,g.createElementBlock)("span",{innerHTML:n.field.value},null,8,b)}]]);const x={props:["index","resource","resourceName","resourceId","field"],beforeMount:function(){this.field.linkOnDetail&&this.field.value&&(this.field.asHtml=!0,this.field.value='<a href="tel:'.concat(this.field.value,'" class="text-primary">').concat(this.field.value,"</a>"))}},V=(0,O.Z)(x,[["render",function(e,t,n,r,a,o){var i=(0,g.resolveComponent)("PanelItem");return(0,g.openBlock)(),(0,g.createBlock)(i,{index:n.index,field:n.field},null,8,["index","field"])}]]);var _=["id","placeholder"];const j=LaravelNova;const S={mixins:[j.FormField,j.HandlesValidationErrors],props:["resourceName","resourceId","field"],computed:{placeholder:function(){var e=this.field.useMaskPlaceholder,t=this.field.placeholder;return e?this.mask:t||this.field.name},mask:function(){return this.field.format?this.field.format:"(###) ###-####"}},methods:{setInitialValue:function(){this.value=this.field.value||""},fill:function(e){e.append(this.field.attribute,this.value||"")},handleChange:function(e){this.value=e}}},A=(0,O.Z)(S,[["render",function(e,t,n,r,a,o){var i=(0,g.resolveComponent)("DefaultField"),s=(0,g.resolveDirective)("maska");return(0,g.openBlock)(),(0,g.createBlock)(i,{field:n.field,errors:e.errors,"show-help-text":e.showHelpText},{field:(0,g.withCtx)((function(){return[(0,g.withDirectives)((0,g.createElementVNode)("input",{id:n.field.name,type:"tel",class:(0,g.normalizeClass)(["w-full form-control form-input form-input-bordered",e.errorClasses]),placeholder:o.placeholder,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.value=t})},null,10,_),[[s,o.mask],[g.vModelText,e.value]])]})),_:1},8,["field","errors","show-help-text"])}]]);Nova.booting((function(e,t){e.use(y),e.component("index-phone-number",E),e.component("detail-phone-number",V),e.component("form-phone-number",A)}))})()})();