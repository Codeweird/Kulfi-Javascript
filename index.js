!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Kulfi=n():e.Kulfi=n()}("undefined"!=typeof self?self:this,function(){return function(e){var n=window.webpackHotUpdateKulfi;window.webpackHotUpdateKulfi=function(e,t){!function(e,n){if(!g[e]||!m[e])return;for(var t in m[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--v&&0===b&&E()}(e,t),n&&n(e,t)};var t,r=!0,o="a8f9fe5b390973efacd3",i=1e4,c={},d=[],a=[];function s(e){var n=x[e];if(!n)return P;var r=function(r){return n.hot.active?(x[r]?x[r].parents.indexOf(e)<0&&x[r].parents.push(e):(d=[e],t=r),n.children.indexOf(r)<0&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),d=[]),P(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(n){P[e]=n}}};for(var i in P)Object.prototype.hasOwnProperty.call(P,i)&&"e"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===u&&f("prepare"),b++,P.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===u&&(w[e]||j(e),0===b&&0===v&&E())}},r}var l=[],u="idle";function f(e){u=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var p,h,y,v=0,b=0,w={},m={},g={};function O(e){return+e+""===e?+e:e}function _(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,f("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=P.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(i).then(function(e){if(!e)return f("idle"),null;m={},w={},g=e.c,y=e.h,f("prepare");var n=new Promise(function(e,n){p={resolve:e,reject:n}});h={};return j(0),"prepare"===u&&0===b&&0===v&&E(),n})}function j(e){g[e]?(m[e]=!0,v++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.charset="utf-8",t.src=P.p+""+e+"."+o+".hot-update.js",n.appendChild(t)}(e)):w[e]=!0}function E(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then(function(){return D(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(O(t));e.resolve(n)}}function D(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var t,r,i,a,s;function l(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=x[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<a.parents.length;d++){var s=a.parents[d],l=x[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};n.indexOf(s)>=0||(l.hot._acceptedDependencies[i]?(t[s]||(t[s]=[]),p(t[s],[i])):(delete t[s],n.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];e.indexOf(r)<0&&e.push(r)}}n=n||{};var v={},b=[],w={},m=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var _ in h)if(Object.prototype.hasOwnProperty.call(h,_)){var j;s=O(_);var E=!1,D=!1,k=!1,H="";switch((j=h[_]?l(s):{type:"disposed",moduleId:_}).chain&&(H="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(E=new Error("Aborted because of self decline: "+j.moduleId+H));break;case"declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+H));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(j),n.ignoreUnaccepted||(E=new Error("Aborted because "+s+" is not accepted"+H));break;case"accepted":n.onAccepted&&n.onAccepted(j),D=!0;break;case"disposed":n.onDisposed&&n.onDisposed(j),k=!0;break;default:throw new Error("Unexception type "+j.type)}if(E)return f("abort"),Promise.reject(E);if(D)for(s in w[s]=h[s],p(b,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,s)&&(v[s]||(v[s]=[]),p(v[s],j.outdatedDependencies[s]));k&&(p(b,[j.moduleId]),w[s]=m)}var I,M=[];for(r=0;r<b.length;r++)s=b[r],x[s]&&x[s].hot._selfAccepted&&M.push({module:s,errorHandler:x[s].hot._selfAccepted});f("dispose"),Object.keys(g).forEach(function(e){!1===g[e]&&function(e){delete installedChunks[e]}(e)});for(var A,K,S=b.slice();S.length>0;)if(s=S.pop(),a=x[s]){var U={},q=a.hot._disposeHandlers;for(i=0;i<q.length;i++)(t=q[i])(U);for(c[s]=U,a.hot.active=!1,delete x[s],delete v[s],i=0;i<a.children.length;i++){var C=x[a.children[i]];C&&((I=C.parents.indexOf(s))>=0&&C.parents.splice(I,1))}}for(s in v)if(Object.prototype.hasOwnProperty.call(v,s)&&(a=x[s]))for(K=v[s],i=0;i<K.length;i++)A=K[i],(I=a.children.indexOf(A))>=0&&a.children.splice(I,1);for(s in f("apply"),o=y,w)Object.prototype.hasOwnProperty.call(w,s)&&(e[s]=w[s]);var T=null;for(s in v)if(Object.prototype.hasOwnProperty.call(v,s)&&(a=x[s])){K=v[s];var R=[];for(r=0;r<K.length;r++)if(A=K[r],t=a.hot._acceptedDependencies[A]){if(R.indexOf(t)>=0)continue;R.push(t)}for(r=0;r<R.length;r++){t=R[r];try{t(K)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:K[r],error:e}),n.ignoreErrored||T||(T=e)}}}for(r=0;r<M.length;r++){var L=M[r];s=L.module,d=[s];try{P(s)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:t,orginalError:e,originalError:e}),n.ignoreErrored||T||(T=t),T||(T=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||T||(T=e)}}return T?(f("fail"),Promise.reject(T)):(f("idle"),new Promise(function(e){e(b)}))}var x={};function P(n){if(x[n])return x[n].exports;var r=x[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:_,apply:D,status:function(e){if(!e)return u;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:c[e]};return t=void 0,n}(n),parents:(a=d,d=[],a),children:[]};return e[n].call(r.exports,r,r.exports,s(n)),r.l=!0,r.exports}return P.m=e,P.c=x,P.d=function(e,n,t){P.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},P.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(n,"a",n),n},P.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},P.p="",P.h=function(){return o},s(0)(P.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1);n.default=r.Kulfi},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Kulfi=void 0;var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();t(2);n.Kulfi=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.apikey=n,this.url=t,this.initialized=!1,this.ws,this.hasMessages=!1,this.connected=!1}return r(e,[{key:"init",value:function(){this.url.trim()&&(console.log("Connecting..."),ws=new WebSocket(this.url),initWebSocketsEvents(),this.initialized=!0)}},{key:"initWebSocketsEvents",value:function(){ws.onopen=function(){console.log("Connection is opened (connected...)"),connected=!0},ws.onmessage=function(e){var n=e.data;addMessageToList(n)},ws.onclose=function(){connected=!1,console.log("Connection is closed...")},ws.onerror=function(e){console.error(e),console.log("Error occurred, check the console!")}}}]),e}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.concat=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.join(" ")}}]).default});