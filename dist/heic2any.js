/*Copyrights for code authored by Yahoo Inc. is licensed under the following terms:
MIT License
Copyright  2017 Yahoo Inc.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
!function(e,t,r,i){function n(){return C.isValid()}function o(){return C.isValid()}function a(){var e={getUserMedia:!0};return C.isValid(e)}function s(e){var t=!1;if(w.isArray(e)&&e.length){if(w.each(e,function(e,r){w.isSupported.videoCodecs[r]&&(t=!0);}),!t)return !1}else if(w.isString(e)&&e.length&&!w.isSupported.videoCodecs[e])return !1;return C.isValid({getUserMedia:!0})}function d(){function e(e,t,r){var i,n;for(u=e,m=t,g=r,f=new Array(h),i=0;h>i;i++)f[i]=new Array(4),n=f[i],n[0]=n[1]=n[2]=(i<<k+8)/h|0,D[i]=F/h|0,G[i]=0;}function t(){for(var e=[],t=new Array(h),r=0;h>r;r++)t[f[r][3]]=r;for(var i=0,n=0;h>n;n++){var o=t[n];e[i++]=f[o][0],e[i++]=f[o][1],e[i++]=f[o][2];}return e}function r(){var e,t,r,i,n,o,a,s;for(a=0,s=0,e=0;h>e;e++){for(n=f[e],r=e,i=n[1],t=e+1;h>t;t++)o=f[t],o[1]<i&&(r=t,i=o[1]);if(o=f[r],e!=r&&(t=o[0],o[0]=n[0],n[0]=t,t=o[1],o[1]=n[1],n[1]=t,t=o[2],o[2]=n[2],n[2]=t,t=o[3],o[3]=n[3],n[3]=t),i!=a){for(P[a]=s+e>>1,t=a+1;i>t;t++)P[t]=e;a=i,s=e;}}for(P[a]=s+C>>1,t=a+1;256>t;t++)P[t]=C;}function i(){var e,t,r,i,n,o,a,f,h,C,x,F,W,O;for(y>m&&(g=1),l=30+(g-1)/3,F=u,W=0,O=m,x=m/(3*g),C=x/S|0,f=V,o=T,a=o>>U,1>=a&&(a=0),e=0;a>e;e++)N[e]=f*((a*a-e*e)*z/(a*a));for(h=y>m?3:m%p!==0?3*p:m%v!==0?3*v:m%b!==0?3*b:3*w,e=0;x>e;)if(r=(255&F[W+0])<<k,i=(255&F[W+1])<<k,n=(255&F[W+2])<<k,t=c(r,i,n),d(f,t,r,i,n),0!==a&&s(a,t,r,i,n),W+=h,W>=O&&(W-=m),e++,0===C&&(C=1),e%C===0)for(f-=f/l,o-=o/I,a=o>>U,1>=a&&(a=0),t=0;a>t;t++)N[t]=f*((a*a-t*t)*z/(a*a));}function n(e,t,r){var i,n,o,a,s,d,c;for(s=1e3,c=-1,i=P[t],n=i-1;h>i||n>=0;)h>i&&(d=f[i],o=d[1]-t,o>=s?i=h:(i++,0>o&&(o=-o),a=d[0]-e,0>a&&(a=-a),o+=a,s>o&&(a=d[2]-r,0>a&&(a=-a),o+=a,s>o&&(s=o,c=d[3])))),n>=0&&(d=f[n],o=t-d[1],o>=s?n=-1:(n--,0>o&&(o=-o),a=d[0]-e,0>a&&(a=-a),o+=a,s>o&&(a=d[2]-r,0>a&&(a=-a),o+=a,s>o&&(s=o,c=d[3]))));return c}function o(){return i(),a(),r(),t()}function a(){var e;for(e=0;h>e;e++)f[e][0]>>=k,f[e][1]>>=k,f[e][2]>>=k,f[e][3]=e;}function s(e,t,r,i,n){var o,a,s,d,c,l,u;for(s=t-e,-1>s&&(s=-1),d=t+e,d>h&&(d=h),o=t+1,a=t-1,l=1;d>o||a>s;){if(c=N[l++],d>o){u=f[o++];try{u[0]-=c*(u[0]-r)/B|0,u[1]-=c*(u[1]-i)/B|0,u[2]-=c*(u[2]-n)/B|0;}catch(m){}}if(a>s){u=f[a--];try{u[0]-=c*(u[0]-r)/B|0,u[1]-=c*(u[1]-i)/B|0,u[2]-=c*(u[2]-n)/B|0;}catch(m){}}}}function d(e,t,r,i,n){var o=f[t],a=e/V;o[0]-=a*(o[0]-r)|0,o[1]-=a*(o[1]-i)|0,o[2]-=a*(o[2]-n)|0;}function c(e,t,r){var i,n,o,a,s,d,c,l,u,m;for(l=~(1<<31),u=l,d=-1,c=d,i=0;h>i;i++)m=f[i],n=m[0]-e,0>n&&(n=-n),o=m[1]-t,0>o&&(o=-o),n+=o,o=m[2]-r,0>o&&(o=-o),n+=o,l>n&&(l=n,d=i),a=n-(G[i]>>x-k),u>a&&(u=a,c=i),s=D[i]>>O,D[i]-=s,G[i]+=s<<W;return D[d]+=E,G[d]-=M,c}var l,u,m,g,f,h=256,p=499,v=491,b=487,w=503,y=3*w,C=h-1,k=4,S=100,x=16,F=1<<x,W=10,O=10,E=F>>O,M=F<<W-O,A=h>>3,U=6,R=1<<U,T=A*R,I=30,j=10,V=1<<j,H=8,z=1<<H,L=j+H,B=1<<L,P=[],G=[],D=[],N=[];e.apply(this,arguments);var q={};return q.map=n,q.process=o,q}function c(){var e=this;try{e.onmessage=function(e){var t,i=e.data||{};i.gifshot&&(t=r.run(i),postMessage(t));};}catch(t){}var r={dataToRGB:function(e,t,r){for(var i=t*r*4,n=0,o=[];i>n;)o.push(e[n++]),o.push(e[n++]),o.push(e[n++]),n++;return o},componentizedPaletteToArray:function(e){e=e||[];for(var t=[],r=0;r<e.length;r+=3){var i=e[r],n=e[r+1],o=e[r+2];t.push(i<<16|n<<8|o);}return t},processFrameWithQuantizer:function(e,t,r,i){for(var n=this.dataToRGB(e,t,r),o=new d(n,n.length,i),a=o.process(),s=new Uint32Array(this.componentizedPaletteToArray(a)),c=t*r,l=new Uint8Array(c),u=0,m=0;c>m;m++){var g=n[u++],f=n[u++],h=n[u++];l[m]=o.map(g,f,h);}return {pixels:l,palette:s}},run:function(e){e=e||{};var t=e,r=t.height,i=(t.palette,t.sampleInterval),n=t.width,o=e.data;return this.processFrameWithQuantizer(o,n,r,i)}};return r}function l(e,t,r,n){function o(e){var t=e.length;if(2>t||t>256||t&t-1)throw "Invalid code/color length, must be power of 2 and 2 .. 256.";return t}function a(e,t,r,n){function o(r){for(;g>=r;)e[t++]=255&f,f>>=8,g-=8,t===s+256&&(e[s]=255,s=t++);}function a(e){f|=e<<g,g+=m,o(8);}e[t++]=r;var s=t++,d=1<<r,c=d-1,l=d+1,u=l+1,m=r+1,g=0,f=0,h=n[0]&c,p={};a(d);for(var v=1,b=n.length;b>v;++v){var w=n[v]&c,y=h<<8|w,C=p[y];if(C===i){for(f|=h<<g,g+=m;g>=8;)e[t++]=255&f,f>>=8,g-=8,t===s+256&&(e[s]=255,s=t++);4096===u?(a(d),u=l+1,m=r+1,p={}):(u>=1<<m&&++m,p[y]=u++),h=w;}else h=C;}return a(h),a(l),o(1),s+1===t?e[s]=0:(e[s]=t-s-1,e[t++]=0),t}var s=0;n=n===i?{}:n;var d=n.loop===i?null:n.loop,c=n.palette===i?null:n.palette;if(0>=t||0>=r||t>65535||r>65535)throw "Width/Height invalid.";e[s++]=71,e[s++]=73,e[s++]=70,e[s++]=56,e[s++]=57,e[s++]=97;var l=0,u=0;if(e[s++]=255&t,e[s++]=t>>8&255,e[s++]=255&r,e[s++]=r>>8&255,e[s++]=(null!==c?128:0)|l,e[s++]=u,e[s++]=0,null!==d){if(0>d||d>65535)throw "Loop count invalid.";e[s++]=33,e[s++]=255,e[s++]=11,e[s++]=78,e[s++]=69,e[s++]=84,e[s++]=83,e[s++]=67,e[s++]=65,e[s++]=80,e[s++]=69,e[s++]=50,e[s++]=46,e[s++]=48,e[s++]=3,e[s++]=1,e[s++]=255&d,e[s++]=d>>8&255,e[s++]=0;}var m=!1;this.addFrame=function(t,r,n,d,l,u){if(m===!0&&(--s,m=!1),u=u===i?{}:u,0>t||0>r||t>65535||r>65535)throw "x/y invalid.";if(0>=n||0>=d||n>65535||d>65535)throw "Width/Height invalid.";if(l.length<n*d)throw "Not enough pixels for the frame size.";var g=!0,f=u.palette;if((f===i||null===f)&&(g=!1,f=c),f===i||null===f)throw "Must supply either a local or global palette.";for(var h=o(f),p=0;h>>=1;)++p;h=1<<p;var v=u.delay===i?0:u.delay,b=u.disposal===i?0:u.disposal;if(0>b||b>3)throw "Disposal out of range.";var w=!1,y=0;if(u.transparent!==i&&null!==u.transparent&&(w=!0,y=u.transparent,0>y||y>=h))throw "Transparent color index.";if((0!==b||w||0!==v)&&(e[s++]=33,e[s++]=249,e[s++]=4,e[s++]=b<<2|(w===!0?1:0),e[s++]=255&v,e[s++]=v>>8&255,e[s++]=y,e[s++]=0),e[s++]=44,e[s++]=255&t,e[s++]=t>>8&255,e[s++]=255&r,e[s++]=r>>8&255,e[s++]=255&n,e[s++]=n>>8&255,e[s++]=255&d,e[s++]=d>>8&255,e[s++]=g===!0?128|p-1:0,g===!0)for(var C=0,k=f.length;k>C;++C){var S=f[C];e[s++]=S>>16&255,e[s++]=S>>8&255,e[s++]=255&S;}s=a(e,s,2>p?2:p,l);},this.end=function(){return m===!1&&(e[s++]=59,m=!0),s};}function u(e,t){e.getBase64GIF(function(e){t({error:!1,errorCode:"",errorMsg:"",image:e});});}function m(){function e(){w.each(l,function(e,t){t&&(t.text?f.addFrame(t.img,a,t.text):f.addFrame(t,a));}),u(f,n);}var r=arguments.length>0&&arguments[0]!==i?arguments[0]:{},n=r.callback,o=r.images,a=r.options,s=r.imagesLength,d={getUserMedia:!0,"window.URL":!0},c=C.validate(d),l=[],m=0,g=void 0,f=void 0;return c.error?n(c):(f=new O(a),w.each(o,function(r,i){var o=i;i.src&&(o=o.src),w.isElement(o)?(a.crossOrigin&&(o.crossOrigin=a.crossOrigin),l[r]=o,m+=1,m===s&&e()):w.isString(o)&&(g=new Image,a.crossOrigin&&(g.crossOrigin=a.crossOrigin),function(t){i.text&&(t.text=i.text),t.onerror=function(){var e=void 0;return --s,0===s?(e={},e.error="None of the requested images was capable of being retrieved",n(e)):void 0},t.onload=function(){l[r]=i.text?{img:t,text:t.text}:t,m+=1,m===s&&e(),w.removeElement(t);},t.src=o;}(g),w.setCSSAttr(g,{position:"fixed",opacity:"0"}),t.body.appendChild(g));}),void 0)}function g(e){e=w.isObject(e)?e:{},A.stopVideoStreaming(e);}function f(e,r){var i=e.options||{},n=i.images,o=i.video,a=Number(i.gifWidth),s=Number(i.gifHeight),d=(Number(i.numFrames),e.cameraStream),c=e.videoElement,l=e.videoWidth,u=e.videoHeight,m=M.getCropDimensions({videoWidth:l,videoHeight:u,gifHeight:s,gifWidth:a}),f=r;i.crop=m,i.videoElement=c,i.videoWidth=l,i.videoHeight=u,i.cameraStream=d,w.isElement(c)&&(c.width=a+m.width,c.height=s+m.height,i.webcamVideoElement||(w.setCSSAttr(c,{position:"fixed",opacity:"0"}),t.body.appendChild(c)),c.play(),M.getGIF(i,function(e){n&&n.length||o&&o.length||g(e),f(e);}));}function h(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{},t=e.callback,r=e.existingVideo,n=e.options,o={getUserMedia:!0,"window.URL":!0},a=C.validate(o),s=void 0,d=void 0;if(a.error)return t(a);if(w.isElement(r)&&r.src){if(d=r.src,s=w.getExtension(d),!w.isSupported.videoCodecs[s])return t(C.messages.videoCodecs)}else w.isArray(r)&&w.each(r,function(e,t){return s=t instanceof Blob?t.type.substr(t.type.lastIndexOf("/")+1,t.length):t.substr(t.lastIndexOf(".")+1,t.length),w.isSupported.videoCodecs[s]?(r=t,!1):void 0});A.startStreaming({completed:function(e){e.options=n||{},f(e,t);},existingVideo:r,crossOrigin:n.crossOrigin,options:n});}function p(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{},t=e.callback,r=e.lastCameraStream,n=e.options,a=e.webcamVideoElement;return o()?n.savedRenderingContexts.length?(M.getGIF(n,function(e){t(e);}),void 0):(A.startVideoStreaming(function(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{};e.options=n||{},f(e,t);},{lastCameraStream:r,callback:t,webcamVideoElement:a,crossOrigin:n.crossOrigin}),void 0):t(C.validate())}function v(e,t){if(t=w.isFunction(e)?e:t,e=w.isObject(e)?e:{},w.isFunction(t)){var r=w.mergeOptions(x,e)||{},i=e.cameraStream,n=r.images,o=n?n.length:0,a=r.video,s=r.webcamVideoElement;r=w.mergeOptions(r,{gifWidth:Math.floor(r.gifWidth),gifHeight:Math.floor(r.gifHeight)}),o?m({images:n,imagesLength:o,callback:t,options:r}):a?h({existingVideo:a,callback:t,options:r}):p({lastCameraStream:i,callback:t,webcamVideoElement:s,options:r});}}function b(e,t){if(t=w.isFunction(e)?e:t,e=w.isObject(e)?e:{},w.isFunction(t)){var r=w.mergeOptions(x,e),i=w.mergeOptions(r,{interval:.1,numFrames:1,gifWidth:Math.floor(r.gifWidth),gifHeight:Math.floor(r.gifHeight)});v(i,t);}}var w={URL:e.URL||e.webkitURL||e.mozURL||e.msURL,getUserMedia:function(){var e=r.getUserMedia||r.webkitGetUserMedia||r.mozGetUserMedia||r.msGetUserMedia;return e?e.bind(r):e}(),requestAnimFrame:e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame,requestTimeout:function(e,t){if(e=e||w.noop,t=t||0,!w.requestAnimFrame)return setTimeout(e,t);var r=(new Date).getTime(),i=new Object,n=w.requestAnimFrame,o=function a(){var o=(new Date).getTime(),s=o-r;s>=t?e.call():i.value=n(a);};return i.value=n(o),i},Blob:e.Blob||e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,btoa:function(){var t=e.btoa||function(e){for(var t="",r=0,i=e.length,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=void 0,a=void 0,s=void 0,d=void 0,c=void 0,l=void 0,u=void 0;i>r;)o=e.charCodeAt(r++),a=e.charCodeAt(r++),s=e.charCodeAt(r++),d=o>>2,c=(3&o)<<4|a>>4,l=(15&a)<<2|s>>6,u=63&s,isNaN(a)?l=u=64:isNaN(s)&&(u=64),t=t+n.charAt(d)+n.charAt(c)+n.charAt(l)+n.charAt(u);return t};return t?t.bind(e):w.noop}(),isObject:function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},isEmptyObject:function(e){return w.isObject(e)&&!Object.keys(e).length},isArray:function(e){return e&&Array.isArray(e)},isFunction:function(e){return e&&"function"==typeof e},isElement:function(e){return e&&1===e.nodeType},isString:function(e){return "string"==typeof e||"[object String]"===Object.prototype.toString.call(e)},isSupported:{canvas:function(){var e=t.createElement("canvas");return e&&e.getContext&&e.getContext("2d")},webworkers:function(){return e.Worker},blob:function(){return w.Blob},Uint8Array:function(){return e.Uint8Array},Uint32Array:function(){return e.Uint32Array},videoCodecs:function(){var e=t.createElement("video"),r={mp4:!1,h264:!1,ogv:!1,ogg:!1,webm:!1};try{e&&e.canPlayType&&(r.mp4=""!==e.canPlayType('video/mp4; codecs="mp4v.20.8"'),r.h264=""!==(e.canPlayType('video/mp4; codecs="avc1.42E01E"')||e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')),r.ogv=""!==e.canPlayType('video/ogg; codecs="theora"'),r.ogg=""!==e.canPlayType('video/ogg; codecs="theora"'),r.webm=-1!==e.canPlayType('video/webm; codecs="vp8, vorbis"'));}catch(i){}return r}()},noop:function(){},each:function(e,t){var r=void 0,i=void 0;if(w.isArray(e))for(r=-1,i=e.length;++r<i&&t(r,e[r])!==!1;);else if(w.isObject(e))for(r in e)if(e.hasOwnProperty(r)&&t(r,e[r])===!1)break},mergeOptions:function(e,t){if(w.isObject(e)&&w.isObject(t)&&Object.keys){var r={};return w.each(e,function(t){r[t]=e[t];}),w.each(t,function(i){var n=t[i];r[i]=w.isObject(n)?e[i]?w.mergeOptions(e[i],n):n:n;}),r}},setCSSAttr:function(e,t,r){w.isElement(e)&&(w.isString(t)&&w.isString(r)?e.style[t]=r:w.isObject(t)&&w.each(t,function(t,r){e.style[t]=r;}));},removeElement:function(e){w.isElement(e)&&e.parentNode&&e.parentNode.removeChild(e);},createWebWorker:function(e){if(!w.isString(e))return {};try{var t=new w.Blob([e],{type:"text/javascript"}),r=w.URL.createObjectURL(t),i=new Worker(r);return {objectUrl:r,worker:i}}catch(n){return ""+n}},getExtension:function(e){return e.substr(e.lastIndexOf(".")+1,e.length)},getFontSize:function(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{};if(!t.body||e.resizeFont===!1)return e.fontSize;var r=e.text,n=e.gifWidth,o=parseInt(e.fontSize,10),a=parseInt(e.minFontSize,10),s=t.createElement("div"),d=t.createElement("span");for(s.setAttribute("width",n),s.appendChild(d),d.innerHTML=r,d.style.fontSize=o+"px",d.style.textIndent="-9999px",d.style.visibility="hidden",t.body.appendChild(d);d.offsetWidth>n&&o>=a;)d.style.fontSize=--o+"px";return t.body.removeChild(d),o+"px"},webWorkerError:!1},y=Object.freeze({"default":w}),C={validate:function(e){e=w.isObject(e)?e:{};var t={};return w.each(C.validators,function(r,i){var n=i.errorCode;return e[n]||i.condition?void 0:(t=i,t.error=!0,!1)}),delete t.condition,t},isValid:function R(e){var t=C.validate(e),R=t.error!==!0?!0:!1;return R},validators:[{condition:w.isFunction(w.getUserMedia),errorCode:"getUserMedia",errorMsg:"The getUserMedia API is not supported in your browser"},{condition:w.isSupported.canvas(),errorCode:"canvas",errorMsg:"Canvas elements are not supported in your browser"},{condition:w.isSupported.webworkers(),errorCode:"webworkers",errorMsg:"The Web Workers API is not supported in your browser"},{condition:w.isFunction(w.URL),errorCode:"window.URL",errorMsg:"The window.URL API is not supported in your browser"},{condition:w.isSupported.blob(),errorCode:"window.Blob",errorMsg:"The window.Blob File API is not supported in your browser"},{condition:w.isSupported.Uint8Array(),errorCode:"window.Uint8Array",errorMsg:"The window.Uint8Array function constructor is not supported in your browser"},{condition:w.isSupported.Uint32Array(),errorCode:"window.Uint32Array",errorMsg:"The window.Uint32Array function constructor is not supported in your browser"}],messages:{videoCodecs:{errorCode:"videocodec",errorMsg:"The video codec you are trying to use is not supported in your browser"}}},k=Object.freeze({"default":C}),S=function(){},x={sampleInterval:10,numWorkers:2,filter:"",gifWidth:200,gifHeight:200,interval:.1,numFrames:10,frameDuration:1,keepCameraOn:!1,images:[],video:null,webcamVideoElement:null,cameraStream:null,text:"",fontWeight:"normal",fontSize:"16px",minFontSize:"10px",resizeFont:!1,fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",textXCoordinate:null,textYCoordinate:null,progressCallback:S,completeCallback:S,saveRenderingContexts:!1,savedRenderingContexts:[],showFrameText:!0,crossOrigin:"Anonymous",waterMark:null,waterMarkHeight:null,waterMarkWidth:null,waterMarkXCoordinate:1,waterMarkYCoordinate:1},F=Object.freeze({"default":x}),W=function(){},O=function(e){this.canvas=null,this.ctx=null,this.repeat=0,this.frames=[],this.numRenderedFrames=0,this.onRenderCompleteCallback=W,this.onRenderProgressCallback=W,this.workers=[],this.availableWorkers=[],this.generatingGIF=!1,this.options=e,this.initializeWebWorkers(e);};O.prototype={workerMethods:c(),initializeWebWorkers:function(e){var r=this,i=d.toString()+"("+c.toString()+"());",n=void 0,o=void 0,a=void 0,s=void 0,l=-1,u="";for(s=e.numWorkers;++l<s;)n=w.createWebWorker(i),w.isObject(n)?(o=n.objectUrl,a=n.worker,r.workers.push({worker:a,objectUrl:o}),r.availableWorkers.push(a)):(u=n,w.webWorkerError=!!n);this.workerError=u,this.canvas=t.createElement("canvas"),this.canvas.width=e.gifWidth,this.canvas.height=e.gifHeight,this.ctx=this.canvas.getContext("2d"),this.frames=[];},getWorker:function(){return this.availableWorkers.pop()},freeWorker:function(e){this.availableWorkers.push(e);},byteMap:function(){for(var e=[],t=0;256>t;t++)e[t]=String.fromCharCode(t);return e}(),bufferToString:function(e){for(var t=e.length,r="",i=-1;++i<t;)r+=this.byteMap[e[i]];return r},onFrameFinished:function(e){var t=this,r=t.frames,i=t.options,n=!!(i.images||[]).length,o=r.every(function(e){return !e.beingProcessed&&e.done});t.numRenderedFrames++,n&&e(t.numRenderedFrames/r.length),t.onRenderProgressCallback(.75*t.numRenderedFrames/r.length),o?t.generatingGIF||t.generateGIF(r,t.onRenderCompleteCallback):w.requestTimeout(function(){t.processNextFrame();},1);},processFrame:function(e){var t=this,r=(this.options,this.options),n=r.progressCallback,o=r.sampleInterval,a=this.frames,s=void 0,d=void 0,c=function(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{},r=e.data;delete s.data,s.pixels=Array.prototype.slice.call(r.pixels),s.palette=Array.prototype.slice.call(r.palette),s.done=!0,s.beingProcessed=!1,t.freeWorker(d),t.onFrameFinished(n);};return s=a[e],s.beingProcessed||s.done?(this.onFrameFinished(),void 0):(s.sampleInterval=o,s.beingProcessed=!0,s.gifshot=!0,d=this.getWorker(),d?(d.onmessage=c,d.postMessage(s)):c({data:t.workerMethods.run(s)}),void 0)},startRendering:function(e){this.onRenderCompleteCallback=e;for(var t=0;t<this.options.numWorkers&&t<this.frames.length;t++)this.processFrame(t);},processNextFrame:function(){for(var e=-1,t=0;t<this.frames.length;t++){var r=this.frames[t];if(!r.done&&!r.beingProcessed){e=t;break}}e>=0&&this.processFrame(e);},generateGIF:function(e,t){var r=[],i={loop:this.repeat},n=this.options,o=n.interval,a=n.frameDuration,s=n.images,d=!!s.length,c=n.gifHeight,u=n.gifWidth,m=new l(r,u,c,i),g=this.onRenderProgressCallback,f=d?100*o:0,h=void 0,p=void 0;this.generatingGIF=!0,w.each(e,function(t,r){var i=r.palette;g(.75+.25*r.position*1/e.length);for(var n=0;a>n;n++)m.addFrame(0,0,u,c,r.pixels,{palette:i,delay:f});}),m.end(),g(1),this.frames=[],this.generatingGIF=!1,w.isFunction(t)&&(h=this.bufferToString(r),p="data:image/gif;base64,"+w.btoa(h),t(p));},setRepeat:function(e){this.repeat=e;},addFrame:function(e,t,r){t=w.isObject(t)?t:{};var i=this,n=i.ctx,o=i.options,a=o.gifWidth,s=o.gifHeight,d=w.getFontSize(t),c=t,l=c.filter,u=c.fontColor,m=c.fontFamily,g=c.fontWeight,f=(c.gifHeight,c.gifWidth,c.text),h=c.textAlign,p=c.textBaseline,v=c.waterMark,b=c.waterMarkHeight,y=c.waterMarkWidth,C=c.waterMarkXCoordinate,k=c.waterMarkYCoordinate,S=t.textXCoordinate?t.textXCoordinate:"left"===h?1:"right"===h?a:a/2,x=t.textYCoordinate?t.textYCoordinate:"top"===p?1:"center"===p?s/2:s,F=g+" "+d+" "+m,W=r&&t.showFrameText?r:f,O=void 0;try{n.filter=l,n.drawImage(e,0,0,a,s),W&&(n.font=F,n.fillStyle=u,n.textAlign=h,n.textBaseline=p,n.fillText(W,S,x)),v&&n.drawImage(v,C,k,y,b),O=n.getImageData(0,0,a,s),i.addFrameImageData(O);}catch(E){return ""+E}},addFrameImageData:function(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{},t=this.frames,r=e.data;this.frames.push({data:r,width:e.width,height:e.height,palette:null,dithering:null,done:!1,beingProcessed:!1,position:t.length});},onRenderProgress:function(e){this.onRenderProgressCallback=e;},isRendering:function(){return this.generatingGIF},getBase64GIF:function(e){var t=this,r=function(r){t.destroyWorkers(),w.requestTimeout(function(){e(r);},0);};t.startRendering(r);},destroyWorkers:function(){if(!this.workerError){var e=this.workers;w.each(e,function(e,t){var r=t.worker,i=t.objectUrl;r.terminate(),w.URL.revokeObjectURL(i);});}}};var E=function(){},M={getGIF:function(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{},r=arguments[1];r=w.isFunction(r)?r:E;var n=t.createElement("canvas"),o=void 0,a=e.images,s=!!a.length,d=e.cameraStream,c=e.crop,l=e.filter,u=e.fontColor,m=e.fontFamily,g=e.fontWeight,f=e.keepCameraOn,h=(e.numWorkers,e.progressCallback),p=e.saveRenderingContexts,v=e.savedRenderingContexts,b=e.text,y=e.textAlign,C=e.textBaseline,k=e.videoElement,S=e.videoHeight,x=e.videoWidth,F=e.webcamVideoElement,W=e.waterMark,M=e.waterMarkHeight,A=e.waterMarkWidth,U=e.waterMarkXCoordinate,R=e.waterMarkYCoordinate,T=Number(e.gifWidth),I=Number(e.gifHeight),j=Number(e.interval),V=(Number(e.sampleInterval),s?0:1e3*j),H=[],z=v.length?v.length:e.numFrames,L=z,B=new O(e),P=w.getFontSize(e),G=e.textXCoordinate?e.textXCoordinate:"left"===y?1:"right"===y?T:T/2,D=e.textYCoordinate?e.textYCoordinate:"top"===C?1:"center"===C?I/2:I,N=g+" "+P+" "+m,q=c?Math.floor(c.scaledWidth/2):0,X=c?x-c.scaledWidth:0,Y=c?Math.floor(c.scaledHeight/2):0,Q=c?S-c.scaledHeight:0,_=function K(){function e(){try{X>x&&(X=x),Q>S&&(Q=S),0>q&&(q=0),0>Y&&(Y=0),o.filter=l,o.drawImage(k,q,Y,X,Q,0,0,T,I),t();}catch(r){if("NS_ERROR_NOT_AVAILABLE"!==r.name)throw r;w.requestTimeout(e,100);}}function t(){var e=void 0;p&&H.push(o.getImageData(0,0,T,I)),W&&o.drawImage(W,U,R,A,M),b&&(o.font=N,o.fillStyle=u,o.textAlign=y,o.textBaseline=C,o.fillText(b,G,D)),e=o.getImageData(0,0,T,I),B.addFrameImageData(e),L=i,h((z-L)/z),i>0&&w.requestTimeout(K,V),L||B.getBase64GIF(function(e){r({error:!1,errorCode:"",errorMsg:"",image:e,cameraStream:d,videoElement:k,webcamVideoElement:F,savedRenderingContexts:H,keepCameraOn:f});});}var i=L-1;v.length?(o.putImageData(v[z-L],0,0),t()):e();};z=z!==i?z:10,j=j!==i?j:.1,n.width=T,n.height=I,o=n.getContext("2d"),function J(){return v.length||0!==k.currentTime?(_(),void 0):(w.requestTimeout(J,100),void 0)}();},getCropDimensions:function(){var e=arguments.length>0&&arguments[0]!==i?arguments[0]:{},t=e.videoWidth,r=e.videoHeight,n=e.gifWidth,o=e.gifHeight,a={width:0,height:0,scaledWidth:0,scaledHeight:0};return t>r?(a.width=Math.round(t*(o/r))-n,a.scaledWidth=Math.round(a.width*(r/o))):(a.height=Math.round(r*(n/t))-o,a.scaledHeight=Math.round(a.height*(t/n))),a}},A={loadedData:!1,defaultVideoDimensions:{width:640,height:480},findVideoSize:function T(e){T.attempts=T.attempts||0;var t=e.cameraStream,r=e.completedCallback,i=e.videoElement;i&&(i.videoWidth>0&&i.videoHeight>0?(i.removeEventListener("loadeddata",A.findVideoSize),r({videoElement:i,cameraStream:t,videoWidth:i.videoWidth,videoHeight:i.videoHeight})):T.attempts<10?(T.attempts+=1,w.requestTimeout(function(){A.findVideoSize(e);},400)):r({videoElement:i,cameraStream:t,videoWidth:A.defaultVideoDimensions.width,videoHeight:A.defaultVideoDimensions.height}));},onStreamingTimeout:function(e){w.isFunction(e)&&e({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - Timed out while trying to start streaming",image:null,cameraStream:{}});},stream:function(e){var t=w.isArray(e.existingVideo)?e.existingVideo[0]:e.existingVideo,r=e.cameraStream,i=e.completedCallback,n=e.streamedCallback,o=e.videoElement;if(w.isFunction(n)&&n(),t){if(w.isString(t))o.src=t,o.innerHTML='<source src="'+t+'" type="video/'+w.getExtension(t)+'" />';else if(t instanceof Blob){try{o.src=w.URL.createObjectURL(t);}catch(a){}o.innerHTML='<source src="'+t+'" type="'+t.type+'" />';}}else if(o.mozSrcObject)o.mozSrcObject=r;else if(w.URL)try{o.srcObject=r,o.src=w.URL.createObjectURL(r);}catch(a){o.srcObject=r;}o.play(),w.requestTimeout(function s(){s.count=s.count||0,A.loadedData===!0?(A.findVideoSize({videoElement:o,cameraStream:r,completedCallback:i}),A.loadedData=!1):(s.count+=1,s.count>10?A.findVideoSize({videoElement:o,cameraStream:r,completedCallback:i}):s());},0);},startStreaming:function(e){var r=w.isFunction(e.error)?e.error:w.noop,i=w.isFunction(e.streamed)?e.streamed:w.noop,n=w.isFunction(e.completed)?e.completed:w.noop,o=e.crossOrigin,a=e.existingVideo,s=e.lastCameraStream,d=e.options,c=e.webcamVideoElement,l=w.isElement(a)?a:c?c:t.createElement("video");o&&(l.crossOrigin=d.crossOrigin),l.autoplay=!0,l.loop=!0,l.muted=!0,l.addEventListener("loadeddata",function(){A.loadedData=!0,d.offset&&(l.currentTime=d.offset);}),a?A.stream({videoElement:l,existingVideo:a,completedCallback:n}):s?A.stream({videoElement:l,cameraStream:s,streamedCallback:i,completedCallback:n}):w.getUserMedia({video:!0},function(e){A.stream({videoElement:l,cameraStream:e,streamedCallback:i,completedCallback:n});},r);},startVideoStreaming:function(e){var t=arguments.length>1&&arguments[1]!==i?arguments[1]:{},r=t.timeout!==i?t.timeout:0,n=t.callback,o=t.webcamVideoElement,a=void 0;r>0&&(a=w.requestTimeout(function(){A.onStreamingTimeout(n);},1e4)),A.startStreaming({error:function(){n({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - the user probably denied permission",image:null,cameraStream:{}});},streamed:function(){clearTimeout(a);},completed:function(){var t=arguments.length>0&&arguments[0]!==i?arguments[0]:{},r=t.cameraStream,n=t.videoElement,o=t.videoHeight,a=t.videoWidth;e({cameraStream:r,videoElement:n,videoHeight:o,videoWidth:a});},lastCameraStream:t.lastCameraStream,webcamVideoElement:o,crossOrigin:t.crossOrigin,options:t});},stopVideoStreaming:function(e){e=w.isObject(e)?e:{};var t=e,r=t.keepCameraOn,i=t.videoElement,n=t.webcamVideoElement,o=e.cameraStream||{},a=o.getTracks?o.getTracks()||[]:[],s=!!a.length,d=a[0];!r&&s&&w.isFunction(d.stop)&&d.stop(),w.isElement(i)&&!n&&(i.pause(),w.isFunction(w.URL.revokeObjectURL)&&!w.webWorkerError&&i.src&&w.URL.revokeObjectURL(i.src),w.removeElement(i));}},U={utils:y,error:k,defaultOptions:F,createGIF:v,takeSnapShot:b,stopVideoStreaming:g,isSupported:n,isWebCamGIFSupported:o,isExistingVideoGIFSupported:s,isExistingImagesGIFSupported:a,VERSION:"0.4.5"};"function"==typeof define&&define.amd?define([],function(){return U}):"undefined"!=typeof exports?module.exports=U:e.gifshot=U;}("undefined"!=typeof window?window:{},"undefined"!=typeof document?document:{createElement:function(){}},"undefined"!=typeof window?window.navigator:{});

const supportedMIMETypes = ["image/png", "image/jpeg", "image/gif"];
window.__heic2any__worker = new Worker(/* webpackChunkName: "heic-worker" */ new URL('./heic-worker.js', import.meta.url));
const utils = {
    blobToDataURL: function (blob) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onerror = function () {
                reject("ERR_DOM Error on converting blob to data URL");
            };
            reader.onload = (e) => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
    },
    dataURItoBlob: function (dataURI) {
        try {
            var byteString = atob(dataURI.split(",")[1]);
            var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            var blob = new Blob([ab], { type: mimeString });
            return blob;
        }
        catch (e) {
            return "ERR_DOM Error on converting data URI to blob " + e &&
                e.toString
                ? e.toString()
                : e;
        }
    },
    imageDataToBlob: function ({ imageData, toType = "image/png", quality = 0.92, }) {
        // normalize quality
        if (quality > 1 || quality < 0) {
            quality = 0.92;
        }
        // normalize MIME type
        if (supportedMIMETypes.indexOf(toType) === -1) {
            toType = "image/png";
        }
        return new Promise((resolve, reject) => {
            let canvas = null;
            try {
                canvas = document.createElement("canvas");
            }
            catch (e) { }
            if (!canvas) {
                return reject("ERR_CANVAS Error on converting imagedata to blob: Could not create canvas element");
            }
            canvas.width = imageData.width;
            canvas.height = imageData.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
                return reject("ERR_CANVAS Error on converting imagedata to blob: Could not get canvas context");
            }
            ctx.putImageData(imageData, 0, 0);
            canvas.toBlob((blob) => {
                if (!blob) {
                    return reject("ERR_CANVAS Error on converting imagedata to blob: Could not get blob from canvas");
                }
                return resolve(blob);
            }, toType, quality);
        });
    },
    imagesToGif: function ({ images, interval, gifHeight, gifWidth, }) {
        return new Promise((resolve, reject) => {
            gifshot.createGIF({
                images,
                interval,
                gifHeight,
                gifWidth,
            }, (res) => {
                if (res.error) {
                    reject(`ERR_GIF ${res.errorCode} ${res.errorMessage}`);
                }
                return resolve(res.image);
            });
        });
    },
    otherImageType: function (buffer) {
        /**
         * Some confusion might arise when passing a regular image
         * like jpeg/png/gif and getting "format is not supported"
         * so to solve this, we should detect if the image is
         * already browser-readable.
         */
        const arr = new Uint8Array(buffer).subarray(0, 4);
        let header = "";
        for (let i = 0; i < arr.length; i++) {
            header = header + arr[i].toString(16);
        }
        switch (header) {
            case "89504e47":
                return "image/png";
            case "47494638":
                return "image/gif";
            case "ffd8ffe0":
            case "ffd8ffe1":
            case "ffd8ffe2":
            case "ffd8ffe3":
            case "ffd8ffe8":
                return "image/jpeg";
            default:
                return false;
        }
    },
    error: function (message) {
        /**
         * Error coding system:
         *
         * UNKNOWN = 0
         * USER errors = 1
         * LIBHEIF errors = 2
         * GIF errors = 3
         * DOM errors = 4
         * CANVAS errors = 5
         *
         */
        let code = 0;
        if (!message) {
            message = "ERR_UNKNOWN";
        }
        else if (typeof message !== "string") {
            if (message.toString) {
                message = message.toString();
            }
            else {
                message = JSON.stringify(message);
            }
        }
        const headers = [
            "ERR_USER",
            "ERR_LIBHEIF",
            "ERR_GIF",
            "ERR_DOM",
            "ERR_CANVAS",
        ];
        for (let index = 0; index < headers.length; index++) {
            const header = headers[index];
            if (message.indexOf(header) === 0) {
                code = index + 1;
            }
        }
        return {
            code,
            message,
        };
    },
};
function decodeBuffer(buffer, skipIdx) {
    return new Promise((resolve, reject) => {
        const id = (Math.random() * new Date().getTime()).toString();
        const message = { id, buffer, skipIdx };
        window.__heic2any__worker.postMessage(message);
        window.__heic2any__worker.addEventListener("message", (message) => {
            if (message.data.id === id) {
                if (message.data.error) {
                    return reject(message.data.error);
                }
                return resolve(message.data.imageDataArr);
            }
        });
    });
}
function heic2any({ blob, toType = "image/png", quality = 0.92, gifInterval = 0.4, multiple = undefined, skipIdx = undefined }) {
    return new Promise((resolve, reject) => {
        if (!(blob instanceof Blob)) {
            utils.error(`ERR_USER library only accepts BLOBs as input`);
        }
        if (typeof multiple !== "boolean") {
            utils.error(`ERR_USER "multiple" parameter should be of type "boolean"`);
        }
        if (typeof quality !== "number") {
            utils.error(`ERR_USER "quality" parameter should be of type "number"`);
        }
        if (typeof gifInterval !== "number") {
            utils.error(`ERR_USER "gifInterval" parameter should be of type "number"`);
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            let gifWidth = 0;
            let gifHeight = 0;
            const buffer = e.target.result;
            const otherImageType = utils.otherImageType(buffer);
            if (otherImageType) {
                return reject(utils.error(`ERR_USER Image is already browser readable: ${otherImageType}`));
            }
            decodeBuffer(buffer, skipIdx)
                .then((imageDataArr) => {
                gifWidth = imageDataArr[0].width;
                gifHeight = imageDataArr[0].height;
                return Promise.all(imageDataArr.map((imageData) => utils.imageDataToBlob({
                    imageData,
                    toType,
                    quality,
                })));
            })
                .then((blobs) => {
                if (toType === "image/gif") {
                    return Promise.all(blobs.map((blob) => utils.blobToDataURL(blob)));
                }
                else if (multiple) {
                    resolve(blobs);
                    return [""];
                }
                else {
                    resolve(blobs[0]);
                    return [""];
                }
            })
                .then((dataURIs) => {
                if (toType === "image/gif" && dataURIs) {
                    return utils.imagesToGif({
                        images: dataURIs,
                        interval: gifInterval,
                        gifWidth,
                        gifHeight,
                    });
                }
                return "";
            })
                .then((resultingGif) => {
                if (toType === "image/gif" && resultingGif) {
                    const blob = utils.dataURItoBlob(resultingGif);
                    if (typeof blob === "string") {
                        reject(utils.error(blob));
                    }
                    else {
                        resolve(blob);
                    }
                }
            })
                .catch((e) => {
                reject(utils.error(e));
            });
        };
        reader.readAsArrayBuffer(blob);
    });
}

export { heic2any as default };
