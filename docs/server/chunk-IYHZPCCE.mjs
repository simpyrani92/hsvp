import './polyfills.server.mjs';
import{e as _t}from"./chunk-KRLCULJA.mjs";var kt=_t(($e,me)=>{(function(j){"use strict";var ze=":not(:disabled):not(.ajs-reset)",L={ENTER:13,ESC:27,F1:112,F12:123,LEFT:37,RIGHT:39,TAB:9},Y={autoReset:!0,basic:!1,closable:!0,closableByDimmer:!0,invokeOnCloseOff:!1,frameless:!1,defaultFocusOff:!1,maintainFocus:!0,maximizable:!0,modal:!0,movable:!0,moveBounded:!1,overflow:!0,padding:!0,pinnable:!0,pinned:!0,preventBodyShift:!1,resizable:!0,startMaximized:!1,transition:"pulse",transitionOff:!1,tabbable:["button","[href]","input","select","textarea",'[tabindex]:not([tabindex^="-"])'+ze].join(ze+","),notifier:{delay:5,position:"bottom-right",closeButton:!1,classes:{base:"alertify-notifier",prefix:"ajs-",message:"ajs-message",top:"ajs-top",right:"ajs-right",bottom:"ajs-bottom",left:"ajs-left",center:"ajs-center",visible:"ajs-visible",hidden:"ajs-hidden",close:"ajs-close"}},glossary:{title:"AlertifyJS",ok:"OK",cancel:"Cancel",acccpt:"Accept",deny:"Deny",confirm:"Confirm",decline:"Decline",close:"Close",maximize:"Maximize",restore:"Restore"},theme:{input:"ajs-input",ok:"ajs-ok",cancel:"ajs-cancel"},hooks:{preinit:function(){},postinit:function(){}}},x=[];function g(o,a){o.className+=" "+a}function k(o,a){for(var d=o.className.split(" "),r=a.split(" "),s=0;s<r.length;s+=1){var i=d.indexOf(r[s]);i>-1&&d.splice(i,1)}o.className=d.join(" ")}function Me(){return j.getComputedStyle(document.body).direction==="rtl"}function he(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function ce(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function W(o){for(;o.lastChild;)o.removeChild(o.lastChild)}function $(o){if(o===null)return o;var a;if(Array.isArray(o)){a=[];for(var d=0;d<o.length;d+=1)a.push($(o[d]));return a}if(o instanceof Date)return new Date(o.getTime());if(o instanceof RegExp)return a=new RegExp(o.source),a.global=o.global,a.ignoreCase=o.ignoreCase,a.multiline=o.multiline,a.lastIndex=o.lastIndex,a;if(typeof o=="object"){a={};for(var r in o)o.hasOwnProperty(r)&&(a[r]=$(o[r]));return a}return o}function Ee(o,a){if(o.elements){var d=o.elements.root;d.parentNode.removeChild(d),delete o.elements,o.settings=$(o.__settings),o.__init=a,delete o.__internal}}var pe=!1;try{var K=Object.defineProperty({},"passive",{get:function(){pe=!0}});j.addEventListener("test",K,K),j.removeEventListener("test",K,K)}catch{}var H=function(o,a,d,r,s){o.addEventListener(a,d,pe?{capture:r,passive:s}:r===!0)},T=function(o,a,d,r,s){o.removeEventListener(a,d,pe?{capture:r,passive:s}:r===!0)},B=function(){var o,a,d=!1,r={animation:"animationend",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(o in r)if(document.documentElement.style[o]!==void 0){a=r[o],d=!0;break}return{type:a,supported:d}}();function A(o,a){return function(){if(arguments.length>0){for(var d=[],r=0;r<arguments.length;r+=1)d.push(arguments[r]);return d.push(o),a.apply(o,d)}return a.apply(o,[null,o])}}function je(o,a){return{index:o,button:a,cancel:!1}}function M(o,a){if(typeof a.get(o)=="function")return a.get(o).call(a)}var Ne=function(){var o=[],a=null,d=!1,r=j.navigator.userAgent.indexOf("Safari")>-1&&j.navigator.userAgent.indexOf("Chrome")<0,s={dimmer:'<div class="ajs-dimmer"></div>',modal:'<div class="ajs-modal" tabindex="0"></div>',dialog:'<div class="ajs-dialog" tabindex="0"></div>',reset:'<button class="ajs-reset"></button>',commands:'<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',header:'<div class="ajs-header"></div>',body:'<div class="ajs-body"></div>',content:'<div class="ajs-content"></div>',footer:'<div class="ajs-footer"></div>',buttons:{primary:'<div class="ajs-primary ajs-buttons"></div>',auxiliary:'<div class="ajs-auxiliary ajs-buttons"></div>'},button:'<button class="ajs-button"></button>',resizeHandle:'<div class="ajs-handle"></div>'},i={animationIn:"ajs-in",animationOut:"ajs-out",base:"alertify",basic:"ajs-basic",capture:"ajs-capture",closable:"ajs-closable",fixed:"ajs-fixed",frameless:"ajs-frameless",hidden:"ajs-hidden",maximize:"ajs-maximize",maximized:"ajs-maximized",maximizable:"ajs-maximizable",modeless:"ajs-modeless",movable:"ajs-movable",noSelection:"ajs-no-selection",noOverflow:"ajs-no-overflow",noPadding:"ajs-no-padding",pin:"ajs-pin",pinnable:"ajs-pinnable",prefix:"ajs-",resizable:"ajs-resizable",restore:"ajs-restore",shake:"ajs-shake",unpinned:"ajs-unpinned",noTransition:"ajs-no-transition"};function h(e){if(!e.__internal){v.defaults.hooks.preinit(e),delete e.__init,e.__settings||(e.__settings=$(e.settings));var t;typeof e.setup=="function"?(t=e.setup(),t.options=t.options||{},t.focus=t.focus||{}):t={buttons:[],focus:{element:null,select:!1},options:{}},typeof e.hooks!="object"&&(e.hooks={});var l=[];if(Array.isArray(t.buttons))for(var n=0;n<t.buttons.length;n+=1){var u=t.buttons[n],m={};for(var _ in u)u.hasOwnProperty(_)&&(m[_]=u[_]);l.push(m)}var b=e.__internal={isOpen:!1,activeElement:document.body,timerIn:void 0,timerOut:void 0,buttons:l,focus:t.focus,options:{title:void 0,modal:void 0,basic:void 0,frameless:void 0,defaultFocusOff:void 0,pinned:void 0,movable:void 0,moveBounded:void 0,resizable:void 0,autoReset:void 0,closable:void 0,closableByDimmer:void 0,invokeOnCloseOff:void 0,maximizable:void 0,startMaximized:void 0,pinnable:void 0,transition:void 0,transitionOff:void 0,padding:void 0,overflow:void 0,onshow:void 0,onclosing:void 0,onclose:void 0,onfocus:void 0,onmove:void 0,onmoved:void 0,onresize:void 0,onresized:void 0,onmaximize:void 0,onmaximized:void 0,onrestore:void 0,onrestored:void 0},resetHandler:void 0,beginMoveHandler:void 0,beginResizeHandler:void 0,bringToFrontHandler:void 0,modalClickHandler:void 0,buttonsClickHandler:void 0,commandsClickHandler:void 0,transitionInHandler:void 0,transitionOutHandler:void 0,destroy:void 0},f={};f.root=document.createElement("div"),f.root.style.display="none",f.root.className=i.base+" "+i.hidden+" ",f.root.innerHTML=s.dimmer+s.modal,f.dimmer=f.root.firstChild,f.modal=f.root.lastChild,f.modal.innerHTML=s.dialog,f.dialog=f.modal.firstChild,f.dialog.innerHTML=s.reset+s.commands+s.header+s.body+s.footer+s.resizeHandle+s.reset,f.reset=[],f.reset.push(f.dialog.firstChild),f.reset.push(f.dialog.lastChild),f.commands={},f.commands.container=f.reset[0].nextSibling,f.commands.pin=f.commands.container.firstChild,f.commands.maximize=f.commands.pin.nextSibling,f.commands.close=f.commands.maximize.nextSibling,f.header=f.commands.container.nextSibling,f.body=f.header.nextSibling,f.body.innerHTML=s.content,f.content=f.body.firstChild,f.footer=f.body.nextSibling,f.footer.innerHTML=s.buttons.auxiliary+s.buttons.primary,f.resizeHandle=f.footer.nextSibling,f.buttons={},f.buttons.auxiliary=f.footer.firstChild,f.buttons.primary=f.buttons.auxiliary.nextSibling,f.buttons.primary.innerHTML=s.button,f.buttonTemplate=f.buttons.primary.firstChild,f.buttons.primary.removeChild(f.buttonTemplate);for(var S=0;S<e.__internal.buttons.length;S+=1){var E=e.__internal.buttons[S];o.indexOf(E.key)<0&&o.push(E.key),E.element=f.buttonTemplate.cloneNode(),E.element.innerHTML=E.text,typeof E.className=="string"&&E.className!==""&&g(E.element,E.className);for(var ue in E.attrs)ue!=="className"&&E.attrs.hasOwnProperty(ue)&&E.element.setAttribute(ue,E.attrs[ue]);E.scope==="auxiliary"?f.buttons.auxiliary.appendChild(E.element):f.buttons.primary.appendChild(E.element)}e.elements=f,b.resetHandler=A(e,ke),b.beginMoveHandler=A(e,ut),b.beginResizeHandler=A(e,ct),b.bringToFrontHandler=A(e,Le),b.modalClickHandler=A(e,st),b.buttonsClickHandler=A(e,lt),b.commandsClickHandler=A(e,et),b.transitionInHandler=A(e,rt),b.transitionOutHandler=A(e,at);for(var R in b.options)t.options[R]!==void 0?e.set(R,t.options[R]):v.defaults.hasOwnProperty(R)?e.set(R,v.defaults[R]):R==="title"&&e.set(R,v.defaults.glossary[R]);typeof e.build=="function"&&e.build(),v.defaults.hooks.postinit(e)}document.body.appendChild(e.elements.root)}var z,p;function O(){z=ce(),p=he()}function c(){j.scrollTo(z,p)}function C(){for(var e=0,t=0;t<x.length;t+=1){var l=x[t];(l.isModal()||l.isMaximized())&&(e+=1)}e===0&&document.body.className.indexOf(i.noOverflow)>=0?(k(document.body,i.noOverflow),V(!1)):e>0&&document.body.className.indexOf(i.noOverflow)<0&&(V(!0),g(document.body,i.noOverflow))}var P="",F=0;function V(e){v.defaults.preventBodyShift&&(e&&document.documentElement.scrollHeight>document.documentElement.clientHeight?(F=p,P=j.getComputedStyle(document.body).top,g(document.body,i.fixed),document.body.style.top=-p+"px"):e||(p=F,document.body.style.top=P,k(document.body,i.fixed),c()))}function J(e,t,l){typeof l=="string"&&k(e.elements.root,i.prefix+l),g(e.elements.root,i.prefix+t),a=e.elements.root.offsetWidth}function y(e){e.get("transitionOff")?g(e.elements.root,i.noTransition):k(e.elements.root,i.noTransition)}function N(e){e.get("modal")?(k(e.elements.root,i.modeless),e.isOpen()&&(qe(e),ye(e),C())):(g(e.elements.root,i.modeless),e.isOpen()&&(Ye(e),ye(e),C()))}function q(e){e.get("basic")?g(e.elements.root,i.basic):k(e.elements.root,i.basic)}function U(e){e.get("frameless")?g(e.elements.root,i.frameless):k(e.elements.root,i.frameless)}function Le(e,t){for(var l=x.indexOf(t),n=l+1;n<x.length;n+=1)if(x[n].isModal())return;return document.body.lastChild!==t.elements.root&&(document.body.appendChild(t.elements.root),x.splice(x.indexOf(t),1),x.push(t),_e(t)),!1}function Ve(e,t,l,n){switch(t){case"title":e.setHeader(n);break;case"modal":N(e);break;case"basic":q(e);break;case"frameless":U(e);break;case"pinned":it(e);break;case"closable":ot(e);break;case"maximizable":nt(e);break;case"pinnable":tt(e);break;case"movable":mt(e);break;case"resizable":pt(e);break;case"padding":n?k(e.elements.root,i.noPadding):e.elements.root.className.indexOf(i.noPadding)<0&&g(e.elements.root,i.noPadding);break;case"overflow":n?k(e.elements.root,i.noOverflow):e.elements.root.className.indexOf(i.noOverflow)<0&&g(e.elements.root,i.noOverflow);break;case"transition":J(e,n,l);break;case"transitionOff":y(e);break}typeof e.hooks.onupdate=="function"&&e.hooks.onupdate.call(e,t,l,n)}function be(e,t,l,n,u){var m={op:void 0,items:[]};if(typeof u>"u"&&typeof n=="string")m.op="get",t.hasOwnProperty(n)?(m.found=!0,m.value=t[n]):(m.found=!1,m.value=void 0);else{var _;if(m.op="set",typeof n=="object"){var b=n;for(var f in b)t.hasOwnProperty(f)?(t[f]!==b[f]&&(_=t[f],t[f]=b[f],l.call(e,f,_,b[f])),m.items.push({key:f,value:b[f],found:!0})):m.items.push({key:f,value:b[f],found:!1})}else if(typeof n=="string")t.hasOwnProperty(n)?(t[n]!==u&&(_=t[n],t[n]=u,l.call(e,n,_,u)),m.items.push({key:n,value:u,found:!0})):m.items.push({key:n,value:u,found:!1});else throw new Error("args must be a string or object")}return m}function ge(e){var t;te(e,function(l){return t=e.get("invokeOnCloseOff")!==!0&&l.invokeOnClose===!0}),!t&&e.isOpen()&&e.close()}function et(e,t){var l=e.srcElement||e.target;switch(l){case t.elements.commands.pin:t.isPinned()?Pe(t):Ae(t);break;case t.elements.commands.maximize:t.isMaximized()?ee(t):Ie(t);break;case t.elements.commands.close:ge(t);break}return!1}function Ae(e){e.set("pinned",!0)}function Pe(e){e.set("pinned",!1)}function Ie(e){M("onmaximize",e),g(e.elements.root,i.maximized),e.isOpen()&&C(),M("onmaximized",e)}function ee(e){M("onrestore",e),k(e.elements.root,i.maximized),e.isOpen()&&C(),M("onrestored",e)}function tt(e){e.get("pinnable")?g(e.elements.root,i.pinnable):k(e.elements.root,i.pinnable)}function we(e){var t=ce();e.elements.modal.style.marginTop=he()+"px",e.elements.modal.style.marginLeft=t+"px",e.elements.modal.style.marginRight=-t+"px"}function Se(e){var t=parseInt(e.elements.modal.style.marginTop,10),l=parseInt(e.elements.modal.style.marginLeft,10);if(e.elements.modal.style.marginTop="",e.elements.modal.style.marginLeft="",e.elements.modal.style.marginRight="",e.isOpen()){var n=0,u=0;e.elements.dialog.style.top!==""&&(n=parseInt(e.elements.dialog.style.top,10)),e.elements.dialog.style.top=n+(t-he())+"px",e.elements.dialog.style.left!==""&&(u=parseInt(e.elements.dialog.style.left,10)),e.elements.dialog.style.left=u+(l-ce())+"px"}}function ye(e){!e.get("modal")&&!e.get("pinned")?we(e):Se(e)}function it(e){e.get("pinned")?(k(e.elements.root,i.unpinned),e.isOpen()&&Se(e)):(g(e.elements.root,i.unpinned),e.isOpen()&&!e.isModal()&&we(e))}function nt(e){e.get("maximizable")?g(e.elements.root,i.maximizable):k(e.elements.root,i.maximizable)}function ot(e){e.get("closable")?(g(e.elements.root,i.closable),yt(e)):(k(e.elements.root,i.closable),vt(e))}var ve=!1,Re=0;function st(e,t){if(e.timeStamp-Re>200&&(Re=e.timeStamp)&&!ve){var l=e.srcElement||e.target;t.get("closableByDimmer")===!0&&l===t.elements.modal&&ge(t)}ve=!1}var We=0,Q=!1;function te(e,t){if(Date.now()-We>200&&(We=Date.now()))for(var l=0;l<e.__internal.buttons.length;l+=1){var n=e.__internal.buttons[l];if(!n.element.disabled&&t(n)){var u=je(l,n);typeof e.callback=="function"&&e.callback.apply(e,[u]),u.cancel===!1&&e.close();break}}}function lt(e,t){var l=e.srcElement||e.target;te(t,function(n){return n.element===l&&(Q=!0)})}function Be(e){if(Q){Q=!1;return}var t=x[x.length-1],l=e.keyCode;if(t.__internal.buttons.length===0&&l===L.ESC&&t.get("closable")===!0)return ge(t),!1;if(o.indexOf(l)>-1)return te(t,function(n){return n.key===l}),!1}function Fe(e){var t=x[x.length-1],l=e.keyCode;if(l===L.LEFT||l===L.RIGHT){for(var n=t.__internal.buttons,u=0;u<n.length;u+=1)if(document.activeElement===n[u].element)switch(l){case L.LEFT:n[(u||n.length)-1].element.focus();return;case L.RIGHT:n[(u+1)%n.length].element.focus();return}}else if(l<L.F12+1&&l>L.F1-1&&o.indexOf(l)>-1)return e.preventDefault(),e.stopPropagation(),te(t,function(m){return m.key===l}),!1}function _e(e,t){if(t)t.focus();else{var l=e.__internal.focus,n=l.element;switch(typeof l.element){case"number":e.__internal.buttons.length>l.element&&(e.get("basic")===!0?n=e.elements.reset[0]:n=e.__internal.buttons[l.element].element);break;case"string":n=e.elements.body.querySelector(l.element);break;case"function":n=l.element.call(e);break}(e.get("defaultFocusOff")===!0||(typeof n>"u"||n===null)&&e.__internal.buttons.length===0)&&(n=e.elements.reset[0]),n&&n.focus&&(n.focus(),l.select&&n.select&&n.select())}}function ke(e,t){if(!t){for(var l=x.length-1;l>-1;l-=1)if(x[l].isModal()){t=x[l];break}}if(t&&t.isModal()){var n=t.elements.reset[0],u=t.elements.reset[1],m=e.relatedTarget,_=t.elements.root.contains(m),b=e.srcElement||e.target,f;if(b===n&&!_||b===u&&m===n)return;b===u||b===document.body?f=n:b===n&&m===u?f=De(t):b===n&&_&&(f=De(t,!0)),_e(t,f)}}function De(e,t){var l=[].slice.call(e.elements.dialog.querySelectorAll(Y.tabbable));t&&l.reverse();for(var n=0;n<l.length;n+=1){var u=l[n];if(u.offsetParent||u.offsetWidth||u.offsetHeight||u.getClientRects().length)return u}}function Ue(e){var t=x[x.length-1];t&&e.shiftKey&&e.keyCode===L.TAB&&t.elements.reset[1].focus()}function rt(e,t){clearTimeout(t.__internal.timerIn),_e(t),Q=!1,M("onfocus",t),T(t.elements.dialog,B.type,t.__internal.transitionInHandler),k(t.elements.root,i.animationIn)}function at(e,t){clearTimeout(t.__internal.timerOut),T(t.elements.dialog,B.type,t.__internal.transitionOutHandler),le(t),de(t),t.isMaximized()&&!t.get("startMaximized")&&ee(t),typeof t.__internal.destroy=="function"&&t.__internal.destroy.apply(t)}var X=null,xe=0,Z=0,ie="pageX",ne="pageY",D=null,oe=!1,se=null;function ft(e,t){var l=e[ie]-xe,n=e[ne]-Z;oe&&(n-=document.body.scrollTop),t.style.left=l+"px",t.style.top=n+"px"}function dt(e,t){var l=e[ie]-xe,n=e[ne]-Z;oe&&(n-=document.body.scrollTop),t.style.left=Math.min(D.maxLeft,Math.max(D.minLeft,l))+"px",oe?t.style.top=Math.min(D.maxTop,Math.max(D.minTop,n))+"px":t.style.top=Math.max(D.minTop,n)+"px"}function ut(e,t){if(w===null&&!t.isMaximized()&&t.get("movable")){var l,n=0,u=0;if(e.type==="touchstart"?(e.preventDefault(),l=e.targetTouches[0],ie="clientX",ne="clientY"):e.button===0&&(l=e),l){var m=t.elements.dialog;if(g(m,i.capture),m.style.left&&(n=parseInt(m.style.left,10)),m.style.top&&(u=parseInt(m.style.top,10)),xe=l[ie]-n,Z=l[ne]-u,t.isModal()?Z+=t.elements.modal.scrollTop:t.isPinned()&&(Z-=document.body.scrollTop),t.get("moveBounded")){var _=m,b=-n,f=-u;do b+=_.offsetLeft,f+=_.offsetTop;while(_=_.offsetParent);D={maxLeft:b,minLeft:-b,maxTop:document.documentElement.clientHeight-m.clientHeight-f,minTop:-f},se=dt}else D=null,se=ft;return M("onmove",t),oe=!t.isModal()&&t.isPinned(),X=t,se(l,m),g(document.body,i.noSelection),!1}}}function He(e){if(X){var t;e.type==="touchmove"?(e.preventDefault(),t=e.targetTouches[0]):e.button===0&&(t=e),t&&se(t,X.elements.dialog)}}function Oe(){if(X){var e=X;X=D=null,k(document.body,i.noSelection),k(e.elements.dialog,i.capture),M("onmoved",e)}}function le(e){X=null;var t=e.elements.dialog;t.style.left=t.style.top=""}function mt(e){e.get("movable")?(g(e.elements.root,i.movable),e.isOpen()&&Ge(e)):(le(e),k(e.elements.root,i.movable),e.isOpen()&&Je(e))}var w=null,G=Number.Nan,re=0,ae=0,fe=0;function ht(e,t,l){var n=t,u=0,m=0;do u+=n.offsetLeft,m+=n.offsetTop;while(n=n.offsetParent);var _,b;l===!0?(_=e.pageX,b=e.pageY):(_=e.clientX,b=e.clientY);var f=Me();if(f&&(_=document.body.offsetWidth-_,isNaN(G)||(u=document.body.offsetWidth-u-t.offsetWidth)),t.style.height=b-m+fe+"px",t.style.width=_-u+fe+"px",!isNaN(G)){var S=Math.abs(t.offsetWidth-re)*.5;f&&(S*=-1),t.offsetWidth>re?t.style.left=G+S+"px":t.offsetWidth>=ae&&(t.style.left=G-S+"px")}}function ct(e,t){if(!t.isMaximized()){var l;if(e.type==="touchstart"?(e.preventDefault(),l=e.targetTouches[0]):e.button===0&&(l=e),l){M("onresize",t),w=t,fe=t.elements.resizeHandle.offsetHeight/2;var n=t.elements.dialog;return g(n,i.capture),G=parseInt(n.style.left,10),n.style.height=n.offsetHeight+"px",n.style.minHeight=t.elements.header.offsetHeight+t.elements.footer.offsetHeight+"px",n.style.width=(re=n.offsetWidth)+"px",n.style.maxWidth!=="none"&&(n.style.minWidth=(ae=n.offsetWidth)+"px"),n.style.maxWidth="none",g(document.body,i.noSelection),!1}}}function Ce(e){if(w){var t;e.type==="touchmove"?(e.preventDefault(),t=e.targetTouches[0]):e.button===0&&(t=e),t&&ht(t,w.elements.dialog,!w.get("modal")&&!w.get("pinned"))}}function Te(){if(w){var e=w;w=null,k(document.body,i.noSelection),k(e.elements.dialog,i.capture),ve=!0,M("onresized",e)}}function de(e){w=null;var t=e.elements.dialog;t.style.maxWidth==="none"&&(t.style.maxWidth=t.style.minWidth=t.style.width=t.style.height=t.style.minHeight=t.style.left="",G=Number.Nan,re=ae=fe=0)}function pt(e){e.get("resizable")?(g(e.elements.root,i.resizable),e.isOpen()&&Qe(e)):(de(e),k(e.elements.root,i.resizable),e.isOpen()&&Ze(e))}function Xe(){for(var e=0;e<x.length;e+=1){var t=x[e];t.get("autoReset")&&(le(t),de(t))}}function bt(e){x.length===1&&(H(j,"resize",Xe),H(document.body,"keyup",Be),H(document.body,"keydown",Fe),H(document.body,"focus",ke),H(document.documentElement,"mousemove",He),H(document.documentElement,"touchmove",He,!1,!1),H(document.documentElement,"mouseup",Oe),H(document.documentElement,"touchend",Oe),H(document.documentElement,"mousemove",Ce),H(document.documentElement,"touchmove",Ce,!1,!1),H(document.documentElement,"mouseup",Te),H(document.documentElement,"touchend",Te)),H(e.elements.commands.container,"click",e.__internal.commandsClickHandler),H(e.elements.footer,"click",e.__internal.buttonsClickHandler),H(e.elements.reset[0],"focusin",e.__internal.resetHandler),H(e.elements.reset[0],"keydown",Ue),H(e.elements.reset[1],"focusin",e.__internal.resetHandler),Q=!0,H(e.elements.dialog,B.type,e.__internal.transitionInHandler),e.get("modal")||Ye(e),e.get("resizable")&&Qe(e),e.get("movable")&&Ge(e)}function gt(e){x.length===1&&(T(j,"resize",Xe),T(document.body,"keyup",Be),T(document.body,"keydown",Fe),T(document.body,"focus",ke),T(document.documentElement,"mousemove",He),T(document.documentElement,"mouseup",Oe),T(document.documentElement,"mousemove",Ce),T(document.documentElement,"mouseup",Te)),T(e.elements.commands.container,"click",e.__internal.commandsClickHandler),T(e.elements.footer,"click",e.__internal.buttonsClickHandler),T(e.elements.reset[0],"focusin",e.__internal.resetHandler),T(e.elements.reset[0],"keydown",Ue),T(e.elements.reset[1],"focusin",e.__internal.resetHandler),H(e.elements.dialog,B.type,e.__internal.transitionOutHandler),e.get("modal")||qe(e),e.get("movable")&&Je(e),e.get("resizable")&&Ze(e)}function Ye(e){H(e.elements.dialog,"focus",e.__internal.bringToFrontHandler,!0)}function qe(e){T(e.elements.dialog,"focus",e.__internal.bringToFrontHandler,!0)}function Ge(e){H(e.elements.header,"mousedown",e.__internal.beginMoveHandler),H(e.elements.header,"touchstart",e.__internal.beginMoveHandler,!1,!1)}function Je(e){T(e.elements.header,"mousedown",e.__internal.beginMoveHandler),T(e.elements.header,"touchstart",e.__internal.beginMoveHandler,!1,!1)}function Qe(e){H(e.elements.resizeHandle,"mousedown",e.__internal.beginResizeHandler),H(e.elements.resizeHandle,"touchstart",e.__internal.beginResizeHandler,!1,!1)}function Ze(e){T(e.elements.resizeHandle,"mousedown",e.__internal.beginResizeHandler),T(e.elements.resizeHandle,"touchstart",e.__internal.beginResizeHandler,!1,!1)}function yt(e){H(e.elements.modal,"click",e.__internal.modalClickHandler)}function vt(e){T(e.elements.modal,"click",e.__internal.modalClickHandler)}return{__init:h,isOpen:function(){return this.__internal.isOpen},isModal:function(){return this.elements.root.className.indexOf(i.modeless)<0},isMaximized:function(){return this.elements.root.className.indexOf(i.maximized)>-1},isPinned:function(){return this.elements.root.className.indexOf(i.unpinned)<0},maximize:function(){return this.isMaximized()||Ie(this),this},restore:function(){return this.isMaximized()&&ee(this),this},pin:function(){return this.isPinned()||Ae(this),this},unpin:function(){return this.isPinned()&&Pe(this),this},bringToFront:function(){return Le(null,this),this},moveTo:function(e,t){if(!isNaN(e)&&!isNaN(t)){M("onmove",this);var l=this.elements.dialog,n=l,u=0,m=0;l.style.left&&(u-=parseInt(l.style.left,10)),l.style.top&&(m-=parseInt(l.style.top,10));do u+=n.offsetLeft,m+=n.offsetTop;while(n=n.offsetParent);var _=e-u,b=t-m;Me()&&(_*=-1),l.style.left=_+"px",l.style.top=b+"px",M("onmoved",this)}return this},resizeTo:function(e,t){var l=parseFloat(e),n=parseFloat(t),u=/(\d*\.\d+|\d+)%/;if(!isNaN(l)&&!isNaN(n)&&this.get("resizable")===!0){M("onresize",this),(""+e).match(u)&&(l=l/100*document.documentElement.clientWidth),(""+t).match(u)&&(n=n/100*document.documentElement.clientHeight);var m=this.elements.dialog;m.style.maxWidth!=="none"&&(m.style.minWidth=(ae=m.offsetWidth)+"px"),m.style.maxWidth="none",m.style.minHeight=this.elements.header.offsetHeight+this.elements.footer.offsetHeight+"px",m.style.width=l+"px",m.style.height=n+"px",M("onresized",this)}return this},setting:function(e,t){var l=this,n=be(this,this.__internal.options,function(b,f,S){Ve(l,b,f,S)},e,t);if(n.op==="get")return n.found?n.value:typeof this.settings<"u"?be(this,this.settings,this.settingUpdated||function(){},e,t).value:void 0;if(n.op==="set"){if(n.items.length>0)for(var u=this.settingUpdated||function(){},m=0;m<n.items.length;m+=1){var _=n.items[m];!_.found&&typeof this.settings<"u"&&be(this,this.settings,u,_.key,_.value)}return this}},set:function(e,t){return this.setting(e,t),this},get:function(e){return this.setting(e)},setHeader:function(e){return typeof e=="string"?(W(this.elements.header),this.elements.header.innerHTML=e):e instanceof j.HTMLElement&&this.elements.header.firstChild!==e&&(W(this.elements.header),this.elements.header.appendChild(e)),this},setContent:function(e){return typeof e=="string"?(W(this.elements.content),this.elements.content.innerHTML=e):e instanceof j.HTMLElement&&this.elements.content.firstChild!==e&&(W(this.elements.content),this.elements.content.appendChild(e)),this},showModal:function(e){return this.show(!0,e)},show:function(e,t){if(h(this),this.__internal.isOpen){le(this),de(this),g(this.elements.dialog,i.shake);var n=this;setTimeout(function(){k(n.elements.dialog,i.shake)},200)}else{if(this.__internal.isOpen=!0,x.push(this),v.defaults.maintainFocus&&(this.__internal.activeElement=document.activeElement),document.body.hasAttribute("tabindex")||document.body.setAttribute("tabindex",d="0"),typeof this.prepare=="function"&&this.prepare(),bt(this),e!==void 0&&this.set("modal",e),O(),C(),typeof t=="string"&&t!==""&&(this.__internal.className=t,g(this.elements.root,t)),this.get("startMaximized")?this.maximize():this.isMaximized()&&ee(this),ye(this),this.elements.root.removeAttribute("style"),k(this.elements.root,i.animationOut),g(this.elements.root,i.animationIn),clearTimeout(this.__internal.timerIn),this.__internal.timerIn=setTimeout(this.__internal.transitionInHandler,B.supported?1e3:100),r){var l=this.elements.root;l.style.display="none",setTimeout(function(){l.style.display="block"},0)}a=this.elements.root.offsetWidth,k(this.elements.root,i.hidden),c(),typeof this.hooks.onshow=="function"&&this.hooks.onshow.call(this),M("onshow",this)}return this},close:function(){return this.__internal.isOpen&&M("onclosing",this)!==!1&&(gt(this),k(this.elements.root,i.animationIn),g(this.elements.root,i.animationOut),clearTimeout(this.__internal.timerOut),this.__internal.timerOut=setTimeout(this.__internal.transitionOutHandler,B.supported?1e3:100),g(this.elements.root,i.hidden),a=this.elements.modal.offsetWidth,v.defaults.maintainFocus&&this.__internal.activeElement&&(this.__internal.activeElement.focus(),this.__internal.activeElement=null),typeof this.__internal.className<"u"&&this.__internal.className!==""&&k(this.elements.root,this.__internal.className),typeof this.hooks.onclose=="function"&&this.hooks.onclose.call(this),M("onclose",this),x.splice(x.indexOf(this),1),this.__internal.isOpen=!1,C()),!x.length&&d==="0"&&document.body.removeAttribute("tabindex"),this},closeOthers:function(){return v.closeAll(this),this},destroy:function(){return this.__internal&&(this.__internal.isOpen?(this.__internal.destroy=function(){Ee(this,h)},this.close()):this.__internal.destroy||Ee(this,h)),this}}}(),I=function(){var o,a,d=[],r=Y.notifier.classes,s=r.base;function i(c){if(!c.__internal){c.__internal={position:v.defaults.notifier.position,delay:v.defaults.notifier.delay},a=document.createElement("DIV");var C="transitionOff"in Y.notifier?Y.notifier.transitionOff:Y.transitionOff;C&&(s=r.base+" ajs-no-transition"),p(c)}a.parentNode!==document.body&&document.body.appendChild(a)}function h(c){c.__internal.pushed=!0,d.push(c)}function z(c){d.splice(d.indexOf(c),1),c.__internal.pushed=!1}function p(c){switch(a.className=s,c.__internal.position){case"top-right":g(a,r.top+" "+r.right);break;case"top-left":g(a,r.top+" "+r.left);break;case"top-center":g(a,r.top+" "+r.center);break;case"bottom-left":g(a,r.bottom+" "+r.left);break;case"bottom-center":g(a,r.bottom+" "+r.center);break;default:case"bottom-right":g(a,r.bottom+" "+r.right);break}}function O(c,C){function P(y,N){(!N.__internal.closeButton||y.target.getAttribute("data-close")==="true")&&N.dismiss(!0)}function F(y,N){T(N.element,B.type,F),a.removeChild(N.element)}function V(y){return y.__internal||(y.__internal={pushed:!1,delay:void 0,timer:void 0,clickHandler:void 0,transitionEndHandler:void 0,transitionTimeout:void 0},y.__internal.clickHandler=A(y,P),y.__internal.transitionEndHandler=A(y,F)),y}function J(y){clearTimeout(y.__internal.timer),clearTimeout(y.__internal.transitionTimeout)}return V({element:c,push:function(y,N){if(!this.__internal.pushed){h(this),J(this);var q,U;switch(arguments.length){case 0:U=this.__internal.delay;break;case 1:typeof y=="number"?U=y:(q=y,U=this.__internal.delay);break;case 2:q=y,U=N;break}return this.__internal.closeButton=v.defaults.notifier.closeButton,typeof q<"u"&&this.setContent(q),I.__internal.position.indexOf("top")<0?a.appendChild(this.element):a.insertBefore(this.element,a.firstChild),o=this.element.offsetWidth,g(this.element,r.visible),H(this.element,"click",this.__internal.clickHandler),this.delay(U)}return this},ondismiss:function(){},callback:C,dismiss:function(y){return this.__internal.pushed&&(J(this),typeof this.ondismiss=="function"&&this.ondismiss.call(this)===!1||(T(this.element,"click",this.__internal.clickHandler),typeof this.element<"u"&&this.element.parentNode===a&&(this.__internal.transitionTimeout=setTimeout(this.__internal.transitionEndHandler,B.supported?1e3:100),k(this.element,r.visible),typeof this.callback=="function"&&this.callback.call(this,y)),z(this))),this},delay:function(y){if(J(this),this.__internal.delay=typeof y<"u"&&!isNaN(+y)?+y:I.__internal.delay,this.__internal.delay>0){var N=this;this.__internal.timer=setTimeout(function(){N.dismiss()},this.__internal.delay*1e3)}return this},setContent:function(y){if(typeof y=="string"?(W(this.element),this.element.innerHTML=y):y instanceof j.HTMLElement&&this.element.firstChild!==y&&(W(this.element),this.element.appendChild(y)),this.__internal.closeButton){var N=document.createElement("span");g(N,r.close),N.setAttribute("data-close",!0),this.element.appendChild(N)}return this},dismissOthers:function(){return I.dismissAll(this),this}})}return{setting:function(c,C){if(i(this),typeof C>"u")return this.__internal[c];switch(c){case"position":this.__internal.position=C,p(this);break;case"delay":this.__internal.delay=C;break}return this},set:function(c,C){return this.setting(c,C),this},get:function(c){return this.setting(c)},create:function(c,C){i(this);var P=document.createElement("div");return P.className=r.message+(typeof c=="string"&&c!==""?" "+r.prefix+c:""),O(P,C)},dismissAll:function(c){for(var C=d.slice(0),P=0;P<C.length;P+=1){var F=C[P];(c===void 0||c!==F)&&F.dismiss()}}}}();function Ke(){var o={};function a(s,i){for(var h in i)i.hasOwnProperty(h)&&(s[h]=i[h]);return s}function d(s){var i=o[s].dialog;return i&&typeof i.__init=="function"&&i.__init(i),i}function r(s,i,h,z){var p={dialog:null,factory:i};return z!==void 0&&(p.factory=function(){return a(new o[z].factory,new i)}),h||(p.dialog=a(new p.factory,Ne)),o[s]=p}return{defaults:Y,dialog:function(s,i,h,z){if(typeof i!="function")return d(s);if(this.hasOwnProperty(s))throw new Error("alertify.dialog: name already exists");var p=r(s,i,h,z);h?this[s]=function(){if(arguments.length===0)return p.dialog;var O=a(new p.factory,Ne);return O&&typeof O.__init=="function"&&O.__init(O),O.main.apply(O,arguments),O.show.apply(O)}:this[s]=function(){if(p.dialog&&typeof p.dialog.__init=="function"&&p.dialog.__init(p.dialog),arguments.length===0)return p.dialog;var O=p.dialog;return O.main.apply(p.dialog,arguments),O.show.apply(p.dialog)}},closeAll:function(s){for(var i=x.slice(0),h=0;h<i.length;h+=1){var z=i[h];(s===void 0||s!==z)&&z.close()}},setting:function(s,i,h){if(s==="notifier")return I.setting(i,h);var z=d(s);if(z)return z.setting(i,h)},set:function(s,i,h){return this.setting(s,i,h)},get:function(s,i){return this.setting(s,i)},notify:function(s,i,h,z){return I.create(i,z).push(s,h)},message:function(s,i,h){return I.create(null,h).push(s,i)},success:function(s,i,h){return I.create("success",h).push(s,i)},error:function(s,i,h){return I.create("error",h).push(s,i)},warning:function(s,i,h){return I.create("warning",h).push(s,i)},dismissAll:function(){I.dismissAll()}}}var v=new Ke;v.dialog("alert",function(){return{main:function(o,a,d){var r,s,i;switch(arguments.length){case 1:s=o;break;case 2:typeof a=="function"?(s=o,i=a):(r=o,s=a);break;case 3:r=o,s=a,i=d;break}return this.set("title",r),this.set("message",s),this.set("onok",i),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:L.ESC,invokeOnClose:!0,className:v.defaults.theme.ok}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(o){this.setContent(o)},settings:{message:void 0,onok:void 0,label:void 0},settingUpdated:function(o,a,d){switch(o){case"message":this.setMessage(d);break;case"label":this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=d);break}},callback:function(o){if(typeof this.get("onok")=="function"){var a=this.get("onok").call(this,o);typeof a<"u"&&(o.cancel=!a)}}}}),v.dialog("confirm",function(){var o={timer:null,index:null,text:null,duration:null,task:function(r,s){if(s.isOpen()){if(s.__internal.buttons[o.index].element.innerHTML=o.text+" (&#8207;"+o.duration+"&#8207;) ",o.duration-=1,o.duration===-1){a(s);var i=s.__internal.buttons[o.index],h=je(o.index,i);typeof s.callback=="function"&&s.callback.apply(s,[h]),h.close!==!1&&s.close()}}else a(s)}};function a(r){o.timer!==null&&(clearInterval(o.timer),o.timer=null,r.__internal.buttons[o.index].element.innerHTML=o.text)}function d(r,s,i){a(r),o.duration=i,o.index=s,o.text=r.__internal.buttons[s].element.innerHTML,o.timer=setInterval(A(r,o.task),1e3),o.task(null,r)}return{main:function(r,s,i,h){var z,p,O,c;switch(arguments.length){case 1:p=r;break;case 2:p=r,O=s;break;case 3:p=r,O=s,c=i;break;case 4:z=r,p=s,O=i,c=h;break}return this.set("title",z),this.set("message",p),this.set("onok",O),this.set("oncancel",c),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:L.ENTER,className:v.defaults.theme.ok},{text:v.defaults.glossary.cancel,key:L.ESC,invokeOnClose:!0,className:v.defaults.theme.cancel}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(r){this.setContent(r)},settings:{message:null,labels:null,onok:null,oncancel:null,defaultFocus:null,reverseButtons:null},settingUpdated:function(r,s,i){switch(r){case"message":this.setMessage(i);break;case"labels":"ok"in i&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].text=i.ok,this.__internal.buttons[0].element.innerHTML=i.ok),"cancel"in i&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].text=i.cancel,this.__internal.buttons[1].element.innerHTML=i.cancel);break;case"reverseButtons":i===!0?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);break;case"defaultFocus":this.__internal.focus.element=i==="ok"?0:1;break}},callback:function(r){a(this);var s;switch(r.index){case 0:typeof this.get("onok")=="function"&&(s=this.get("onok").call(this,r),typeof s<"u"&&(r.cancel=!s));break;case 1:typeof this.get("oncancel")=="function"&&(s=this.get("oncancel").call(this,r),typeof s<"u"&&(r.cancel=!s));break}},autoOk:function(r){return d(this,0,r),this},autoCancel:function(r){return d(this,1,r),this}}}),v.dialog("prompt",function(){var o=document.createElement("INPUT"),a=document.createElement("P");return{main:function(d,r,s,i,h){var z,p,O,c,C;switch(arguments.length){case 1:p=d;break;case 2:p=d,O=r;break;case 3:p=d,O=r,c=s;break;case 4:p=d,O=r,c=s,C=i;break;case 5:z=d,p=r,O=s,c=i,C=h;break}return this.set("title",z),this.set("message",p),this.set("value",O),this.set("onok",c),this.set("oncancel",C),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:L.ENTER,className:v.defaults.theme.ok},{text:v.defaults.glossary.cancel,key:L.ESC,invokeOnClose:!0,className:v.defaults.theme.cancel}],focus:{element:o,select:!0},options:{maximizable:!1,resizable:!1}}},build:function(){o.className=v.defaults.theme.input,o.setAttribute("type","text"),o.value=this.get("value"),this.elements.content.appendChild(a),this.elements.content.appendChild(o)},prepare:function(){},setMessage:function(d){typeof d=="string"?(W(a),a.innerHTML=d):d instanceof j.HTMLElement&&a.firstChild!==d&&(W(a),a.appendChild(d))},settings:{message:void 0,labels:void 0,onok:void 0,oncancel:void 0,value:"",type:"text",reverseButtons:void 0},settingUpdated:function(d,r,s){switch(d){case"message":this.setMessage(s);break;case"value":o.value=s;break;case"type":switch(s){case"text":case"color":case"date":case"datetime-local":case"email":case"month":case"number":case"password":case"search":case"tel":case"time":case"week":o.type=s;break;default:o.type="text";break}break;case"labels":s.ok&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=s.ok),s.cancel&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].element.innerHTML=s.cancel);break;case"reverseButtons":s===!0?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);break}},callback:function(d){var r;switch(d.index){case 0:this.settings.value=o.value,typeof this.get("onok")=="function"&&(r=this.get("onok").call(this,d,this.settings.value),typeof r<"u"&&(d.cancel=!r));break;case 1:typeof this.get("oncancel")=="function"&&(r=this.get("oncancel").call(this,d),typeof r<"u"&&(d.cancel=!r)),d.cancel||(o.value=this.settings.value);break}}}}),typeof me=="object"&&typeof me.exports=="object"?me.exports=v:typeof define=="function"&&define.amd?define([],function(){return v}):j.alertify||(j.alertify=v)})(typeof window<"u"?window:$e)});export default kt();
