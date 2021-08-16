!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.$=t():e.$=t()}(self,(function(){return(()=>{"use strict";var e={996:e=>{var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===n}(e)}(e)},n="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function a(e,t,n){return e.concat(t).map((function(e){return o(e,n)}))}function r(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function i(e,t){try{return t in e}catch(e){return!1}}function c(e,n,l){(l=l||{}).arrayMerge=l.arrayMerge||a,l.isMergeableObject=l.isMergeableObject||t,l.cloneUnlessOtherwiseSpecified=o;var s=Array.isArray(n);return s===Array.isArray(e)?s?l.arrayMerge(e,n,l):function(e,t,n){var a={};return n.isMergeableObject(e)&&r(e).forEach((function(t){a[t]=o(e[t],n)})),r(t).forEach((function(r){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,r)||(i(e,r)&&n.isMergeableObject(t[r])?a[r]=function(e,t){if(!t.customMerge)return c;var n=t.customMerge(e);return"function"==typeof n?n:c}(r,n)(e[r],t[r],n):a[r]=o(t[r],n))})),a}(e,n,l):o(n,l)}c.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return c(e,n,t)}),{})};var l=c;e.exports=l}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{jEditor:()=>U});var e={};function t(e){var t=document.querySelector(".helper"),n=_jeditor.getOptions(),o=n.locale,r=n.sizeUnit,i=parseInt(e.getAttribute("data-element")),c=a(r,n.sizeDecimals,n.dpi,e.offsetHeight)+r,l=a(r,n.sizeDecimals,n.dpi,e.offsetWidth)+r,s=a(r,n.sizeDecimals,n.dpi,e.offsetTop)+r,u=a(r,n.sizeDecimals,n.dpi,e.offsetLeft)+r,d='<div class="content">';t.innerHTML='<div class="header">'.concat(n.elements[i].text,"</div>"),d+="<div><strong>".concat(o.height,"</strong>").concat(c,"</div>"),d+="<div><strong>".concat(o.width,"</strong>").concat(l,"</div>"),d+="<div><strong>".concat(o.topMargin,"</strong>").concat(s,"</div>"),d+="<div><strong>".concat(o.leftMargin,"</strong>").concat(u,"</div>"),t.innerHTML+="".concat(d,"</div>")}function a(e,t,n,o){switch(e){case"mm":return r(25.4*o/n,t);case"cm":return r(25.4*o/n/10,t);case"inch":return r(o/n,t);default:return r(o,t)}}function r(e,t){return e.toFixed(t)}n.r(e),n.d(e,{addElement:()=>p,cancelModifyElement:()=>b,changePaper:()=>w,exitConfirmation:()=>E,getElementData:()=>v,modifyElement:()=>g,removeElement:()=>h,renderObjects:()=>T,saveData:()=>z,setPageBackground:()=>k,setPaper:()=>j,toast:()=>_,toggleRender:()=>L,unsaved:()=>A,zoomIn:()=>y,zoomOut:()=>S,zoomReset:()=>O});var i=n(996),c=function(){return _jeditor.getOptions()},l=function(e){return _jeditor.setOptions(e)},s=function(){return _jeditor.getData()},u=function(e){return _jeditor.setData(e)};function d(e){var t=document.querySelector(".page");l({zoom:e}),t.style.zoom=e}function f(e,t){document.querySelectorAll('[data-element="'.concat(t,'"].btn')).forEach((function(e){e.classList.toggle("d-none")})),e.classList.toggle("active")}function m(e){var t=s(),n=function(e,t,n){for(var o=0;o<e.length;o+=1)if(e[o].element===n)return o;return-1}(t,0,parseInt(e.getAttribute("data-element")));t[n].width=e.offsetWidth,t[n].height=e.offsetHeight,t[n].top=e.offsetTop,t[n].left=e.offsetLeft,u(t),A()}function v(e,t){var n,o,a,r,i,c=t.settings;return{element:e,fontSize:c.fontSize?t.fontSize:20,width:null!==(n=t.width)&&void 0!==n?n:100,height:null!==(o=t.height)&&void 0!==o?o:20,top:null!==(a=t.top)&&void 0!==a?a:0,left:null!==(r=t.left)&&void 0!==r?r:0,align:c.align?t.align:"initial",placeholder:c.placeholder?t.placeholder:"",value:null!==(i=t.value)&&void 0!==i?i:""}}function p(e){var t;e.stopPropagation();var n=e.target.closest("li"),o=parseInt(n.getAttribute("data-element")),a=i(P,null===(t=c())||void 0===t?void 0:t.elements[o]);if(n.classList.contains("active"))return!1;f(n,o);var r=s();r.push(v(o,a));var l=u(r);return T(),l}function h(e){e.stopPropagation();var t=e.target.closest("li"),n=parseInt(t.getAttribute("data-element")),o=document.querySelector('.object[data-element="'.concat(n,'"]'));if(!t.classList.contains("active"))return!1;f(t,n);var a=s().filter((function(e){return e.element!==n}));return o.remove(),u(a)}function g(e){var t,n,o,a,r,l,s,u=e.target.getAttribute("data-element"),d=document.querySelector(".detail .content"),f=document.querySelector(".detail .actions"),m=c(),v=i(P,null==m?void 0:m.elements[u]);document.querySelector(".detail").classList.remove("d-none"),document.querySelector(".elements-wrapper").classList.add("d-none"),document.querySelector(".detail .header").innerHTML=v.text;var p="";v.settings.fontSize&&(p+="<h4>".concat(null==m||null===(t=m.locale)||void 0===t?void 0:t.fontSize,"</h4>\n        <input type='number' value='").concat(v.fontSize,"' onchange='_jeditor.modifyElement(").concat(u,', "fs", this)\'>')),v.settings.placeholder&&(p+="<h4>".concat(null==m||null===(n=m.locale)||void 0===n?void 0:n.placeholder,"</h4>\n        <input type='text' value='").concat(v.placeholder,"' onchange='_jeditor.modifyElement(").concat(u,', "ph", this)\'>')),v.settings.align&&(p+="<h4>".concat(null==m||null===(o=m.locale)||void 0===o?void 0:o.textAlign,'</h4>\n        <div class="btn-group">\n            <button class="btn primary" onclick=\'_jeditor.modifyElement(').concat(u,', "ta", "left")\'><span class="fa fa-align-left"></span></button>\n            <button class="btn primary" onclick=\'_jeditor.modifyElement(').concat(u,', "ta", "center")\'><span class="fa fa-align-center"></span></button>\n            <button class="btn primary" onclick=\'_jeditor.modifyElement(').concat(u,', "ta", "right")\'><span class="fa fa-align-right"></span></button>                \n            <button class="btn primary" onclick=\'_jeditor.modifyElement(').concat(u,', "ta", "justify")\'><span class="fa fa-align-justify"></span></button> \n        </div>')),p+="\n            <h4>".concat(null==m||null===(a=m.locale)||void 0===a?void 0:a.hPosition,'</h4>\n            <div class="btn-group">\n                <button class="btn primary" onclick=\'_jeditor.modifyElement(').concat(u,', "pos", "h-left")\'><span class="fa fa-angle-double-left"></span></button>\n                <button class="btn primary" onclick=\'_jeditor.modifyElement(').concat(u,', "pos", "h-center")\'><span class="fa fa-align-center"></span></button>\n                <button class="btn primary" onclick=\'_jeditor.modifyElement(').concat(u,', "pos", "h-right")\'><span class="fa fa-angle-double-right"></span></button>                \n            </div>\n            <h4>').concat(null==m||null===(r=m.locale)||void 0===r?void 0:r.vPosition,'</h4>\n            <div class="btn-group">\n                <button class="btn primary" onclick=\'_jeditor.modifyElement(').concat(u,', "pos", "v-top")\'><span class="fa fa-sort-amount-up"></span></button>\n                <button class="btn primary" onclick=\'_jeditor.modifyElement(').concat(u,', "pos", "v-center")\'><span class="fa fa-align-center"></span></button>\n                <button class="btn primary" onclick=\'_jeditor.modifyElement(').concat(u,', "pos", "v-bottom")\'><span class="fa fa-sort-amount-down"></span></button>\n            </div>\n            '),d.innerHTML=p,f.innerHTML='<button class="btn warning">'.concat(null==m||null===(l=m.locale)||void 0===l?void 0:l.return,"</button>"),document.querySelector(".detail .actions button.warning").addEventListener("click",null==m||null===(s=m.events)||void 0===s?void 0:s.cancelModifyElement)}function b(e){var t=document.querySelector(".detail .content");document.querySelector(".detail").classList.add("d-none"),document.querySelector(".elements-wrapper").classList.remove("d-none"),t.innerHTML=""}function y(){d(c().zoom+c().zoomIncrement)}function S(){d(c().zoom-c().zoomIncrement)}function O(){var e=document.querySelector(".document").offsetWidth,t=document.querySelector(".page").offsetWidth;d(Math.round(e/t*10)/10-.13)}function w(e){var t=Object.keys(c().paperSizes),n=t.indexOf(c().paperSize)+1;j(e,t[n===t.length?0:n])}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"a4",n=c().paperSizes[t],o=document.querySelector(".page");return n&&(o.style.width="".concat(n.width,"px"),o.style.height="".concat(n.height,"px"),l({paperSize:t}),O(),_(c().locale.paperChange.replace(":size",n.name),"bg-success")),!1}function T(){document.querySelector(".page").innerHTML="",s().forEach((function(e){!function(e){var t,n,o,a=document.querySelector(".page"),r=i(P,null===(t=c())||void 0===t?void 0:t.elements[e.element]),l=r.settings,s="".concat(l.placeholder?e.placeholder||r.placeholder:""," ").concat(e.value||r.value);a.innerHTML+='<div class="object" data-element="'.concat(e.element,'">').concat(s,"</div>");var u=document.querySelector('[data-element="'.concat(e.element,'"].object'));u.style.width=e.width+"px",u.style.height=e.height+"px",u.style.top=e.top+"px",u.style.left=e.left+"px",u.style.textAlign=null!==(n=e.align)&&void 0!==n?n:"initial",u.style.fontSize=(null!==(o=e.fontSize)&&void 0!==o?o:20)+"px";var d=document.querySelector('li[data-element="'.concat(e.element,'"]'));c().rendered&&u.classList.add("rendered"),d.classList.contains("active")||f(d,e.element)}(i(M,e))}));var e=c().helper,n=document.querySelectorAll(".object:not(.rendered)");!function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},o=arguments.length>2?arguments[2]:void 0,a=0,r=0,i=0,c=0,l=null,s=100,u=document.querySelector(".helper");function d(e){if(e.target.classList.contains("resizer"))return!1;(l=this).style.zIndex=""+ ++s,e=e||window.event,i=e.clientX,c=e.clientY,document.onmouseup=m,document.onmousemove=f}function f(e){if(l){e=e||window.event,a=i-e.clientX,r=c-e.clientY,i=e.clientX,c=e.clientY;var s=l.parentNode.offsetHeight-l.offsetHeight,u=l.parentNode.offsetWidth-l.offsetWidth+1,d=l.offsetTop-r;d=d<0?0:d>s?s:d,l.style.top=d+"px";var f=l.offsetLeft-a;f=f<0?0:f>u?u:f,l.style.left=f+"px",n(l),o&&t(l)}}function m(){document.onmouseup=null,document.onmousemove=null,o&&(u.innerHTML="")}e.forEach((function(e){e.onmousedown=d}))}(n,m,e),function(e){var n,o,a,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},c=arguments.length>2?arguments[2]:void 0,l=null,s=document.querySelector(".helper");function u(e){l=this.parentObject,n=e.clientX,o=e.clientY,a=parseInt(document.defaultView.getComputedStyle(l).width,10),r=parseInt(document.defaultView.getComputedStyle(l).height,10),document.documentElement.addEventListener("mousemove",d,!1),document.documentElement.addEventListener("mouseup",f,!1)}function d(e){var s=a+e.clientX-n;l.style.width=(s<10?10:s)+"px";var u=r+e.clientY-o;l.style.height=(u<10?10:u)+"px",i(l),c&&t(l)}function f(){document.documentElement.removeEventListener("mousemove",d,!1),document.documentElement.removeEventListener("mouseup",f,!1),c&&(s.innerHTML="")}e.forEach((function(e){var t=document.createElement("div");t.className="resizer resizer-right",e.appendChild(t),t.addEventListener("mousedown",u,!1),t.parentObject=e;var n=document.createElement("div");n.className="resizer resizer-bottom",e.appendChild(n),n.addEventListener("mousedown",u,!1),n.parentObject=e;var o=document.createElement("div");o.className="resizer resizer-both",e.appendChild(o),o.addEventListener("mousedown",u,!1),o.parentObject=e}))}(n,m,e)}function L(){l({rendered:!c().rendered}),T()}function _(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3,o=document.querySelector(".toasts-wrapper"),a=document.createElement("div");a.className="toast ".concat(t),a.innerHTML=e,o.appendChild(a),setTimeout((function(){a.remove()}),n)}function A(){window.addEventListener("beforeunload",E),c().saveButton&&(document.querySelector(".btn[data-action=saveData]").className="btn primary")}function E(e){return(e||window.event).returnValue="Changes you made may not be saved.","Changes you made may not be saved."}function z(){window.removeEventListener("beforeunload",E),_(c().locale.saved,"bg-success"),c().saveButton&&(document.querySelector(".btn[data-action=saveData]").className="btn")}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;document.querySelector(".page").style.backgroundImage=""!==e&&null!==e?"url(".concat(e,")"):""}var x={background:null,container:".jEditor",data:[],dpi:150,elements:[],elementAction:"addElement",elementFunctions:[{action:"modifyElement",content:'<span class="fa fa-edit"></span>',class:"btn info",show:!1},{action:"removeElement",content:'<span class="fa fa-times"></span>',class:"btn danger",show:!1}],events:e,extraFunctions:[],helper:!0,locale:{width:"Width",height:"Height",topMargin:"Top margin",leftMargin:"Left margin",return:"Return",paperChange:"The paper has been set to :size",saved:"Changes saved",hPosition:"Horizontal position",vPosition:"Vertical position",textAlign:"Text align",fontSize:"Font size",placeholder:"Placeholder"},paperSize:"a4",paperSizes:{letter:{name:"Letter",width:1276,height:1648},a4:{name:"A4",width:1240,height:1754},a5:{name:"A5",width:1240,height:874}},rendered:!1,saveButton:!1,settings:[{action:"toggleRender",content:'<span class="fa fa-edit"></span>',class:"btn",show:!0},{action:"changePaper",content:'<span class="fa fa-file"></span>',class:"btn",show:!0},{action:"zoomOut",content:'<span class="fa fa-minus"></span>',class:"btn",show:!0},{action:"zoomIn",content:'<span class="fa fa-plus"></span>',class:"btn",show:!0},{action:"zoomReset",content:'<span class="fa fa-expand-arrows-alt"></span>',class:"btn",show:!0}],sizeDecimals:1,sizeUnit:"cm",title:"jEditor",zoom:1,zoomIncrement:.1},P={align:"initial",fontSize:16,height:20,left:0,placeholder:"",settings:{align:!0,fontSize:!0,placeholder:!0},top:0,value:"",width:100},M={element:null,fontSize:16,width:100,height:20,top:0,left:0,align:"initial",placeholder:"",value:""};function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=n(996),H=!1;const N=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),q(this,"getOptions",(function(){return n._ACTUAL_OPTIONS})),q(this,"setOptions",(function(e){return n._ACTUAL_OPTIONS=C(n._ACTUAL_OPTIONS,e)})),q(this,"getData",(function(){return n._ACTUAL_OPTIONS.data.map((function(e){return C(M,e)}))})),q(this,"setData",(function(e){return n._ACTUAL_OPTIONS.data=e.map((function(e){return C(M,e)}))})),this._ACTUAL_OPTIONS=C(x,t)}var t,n;return t=e,(n=[{key:"render",value:function(){if(H)return console.error("jEditor already rendered, try using _jeditor.renderObjects() to redraw");this.createStructure(),this.renderElements(),this.renderSettings(),this.renderExtraSettings(),this.renderObjects(),this.setBackground(),H=!0}},{key:"createStructure",value:function(){var e=document.querySelector(this._ACTUAL_OPTIONS.container);e.innerHTML+='<div class="panel"></div><div class="document"></div><div class="toasts-wrapper"></div>';var t=e.querySelector(".panel");t.innerHTML+='<div class="title">'.concat(this._ACTUAL_OPTIONS.title,"</div>"),t.innerHTML+='<div class="elements-wrapper"><ul class="elements"></ul></div>',t.innerHTML+='<div class="detail d-none"><div class="header"></div><div class="content"></div><div class="actions"></div></div>',t.innerHTML+='<div class="settings"><div class="extra"></div><div class="base"></div></div>',t.innerHTML+='<div class="helper"></div>',e.querySelector(".document").innerHTML+='<div class="page-wrapper"><div class="page"></div></div>'}},{key:"renderElements",value:function(){var e,t=this._ACTUAL_OPTIONS,n=document.querySelector(".elements");null===(e=t.elements)||void 0===e||e.forEach((function(e,o){var a,r="";null===(a=t.elementFunctions)||void 0===a||a.forEach((function(e){r+='<button class="'.concat(e.class," ").concat(e.show?"":"d-none",'" data-action="').concat(e.action,'" data-element="').concat(o,'">').concat(e.content,"</button>")})),n.innerHTML+='<li class="element" id="element_'.concat(o,'" data-action="').concat(t.elementAction,'" data-element="').concat(o,'">            \n            <div class="text">').concat(e.text,'</div>\n            <div class="actions" data-id="').concat(o,'">').concat(r,"</div>            \n            </li>")}))}},{key:"renderSettings",value:function(){var e,t=document.querySelector(".settings .base");null===(e=this._ACTUAL_OPTIONS.settings)||void 0===e||e.forEach((function(e,n){t.innerHTML+='<button class="'.concat(e.class," ").concat(e.show?"":"d-none",'" data-action="').concat(e.action,'" data-setting="').concat(n,'">').concat(e.content,"</button>")}))}},{key:"renderExtraSettings",value:function(){var e,t=document.querySelector(".settings .extra");null===(e=this._ACTUAL_OPTIONS.extraFunctions)||void 0===e||e.forEach((function(e,n){t.innerHTML+='<button class="'.concat(e.class," ").concat(e.show?"":"d-none",'" data-action="').concat(e.action,'" data-setting="').concat(n,'">').concat(e.content,"</button>")}))}},{key:"renderObjects",value:function(){this._ACTUAL_OPTIONS.events.renderObjects()}},{key:"setPaper",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._ACTUAL_OPTIONS.paperSize;this._ACTUAL_OPTIONS.events.setPaper(void 0,e)}},{key:"setBackground",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._ACTUAL_OPTIONS.background;this._ACTUAL_OPTIONS.background=e,this._ACTUAL_OPTIONS.events.setPageBackground(e)}},{key:"clearBackground",value:function(){this._ACTUAL_OPTIONS.background=null,this._ACTUAL_OPTIONS.events.setPageBackground()}},{key:"modifyElement",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(null===e||""===t)return console.log("textAlign","Element not defined");var o=this.getData(),a=o.map((function(e){return e.element})).indexOf(e),r=this.getObject(e),i=document.querySelector(".page");switch(t){case"ta":o[a].align=n;break;case"fs":o[a].fontSize=parseInt(n.value);break;case"ph":o[a].placeholder=n.value;break;case"pos":var c=-1!==n.indexOf("v-")?"top":"left";if(null===r)break;if("v-top"===n||"h-left"===n){o[a][c]=0;break}var l="top"===c?i.offsetHeight-r.height:i.offsetWidth-r.width;if("v-center"===n||"h-center"===n){o[a][c]=l/2;break}if("v-bottom"===n||"h-right"===n){o[a][c]=l-1;break}}this.setData(o),this.renderObjects()}},{key:"getObject",value:function(e){var t=this.getData().map((function(e){return e.element})).indexOf(e);return-1===t?null:this.getData()[t]}},{key:"triggers",value:function(){var e=this._ACTUAL_OPTIONS;document.querySelectorAll("[data-action]").forEach((function(t){var n=t.getAttribute("data-action"),o="function"==typeof window[n]?window[n]:e.events[n];t.addEventListener("click",o)}))}}])&&I(t.prototype,n),e}(),U=function(e){return window._jeditor?console.error("A variable _jeditor has already been created"):(window._jeditor=new N(e),_jeditor.render(),_jeditor.triggers(),_jeditor.setPaper(),_jeditor)}})(),o})()}));