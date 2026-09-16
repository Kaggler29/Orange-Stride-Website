var K_=Object.defineProperty;var sf=r=>{throw TypeError(r)};var Q_=(r,e,t)=>e in r?K_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ue=(r,e,t)=>Q_(r,typeof e!="symbol"?e+"":e,t),ev=(r,e,t)=>e.has(r)||sf("Cannot "+t);var of=(r,e,t)=>e.has(r)?sf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t);var hl=(r,e,t)=>(ev(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function tr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function u0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Va={duration:.5,overwrite:!1,delay:0},ud,fn,Dt,mi=1e8,Mt=1/mi,Mh=Math.PI*2,tv=Mh/4,nv=0,h0=Math.sqrt,iv=Math.cos,rv=Math.sin,un=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},ur=function(e){return typeof e=="number"},hd=function(e){return typeof e>"u"},Hi=function(e){return typeof e=="object"},Fn=function(e){return e!==!1},dd=function(){return typeof window<"u"},dl=function(e){return Ht(e)||un(e)},d0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Sn=Array.isArray,sv=/random\([^)]+\)/g,ov=/,\s*/g,af=/(?:-?\.?\d|\.)+/gi,f0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ho=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Su=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,p0=/[+-]=-?[.\d]+/,av=/[^,'"\[\]\s]+/gi,lv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,Li,Th,fd,ii={},wc={},m0,g0=function(e){return(wc=Io(e,ii))&&Hn},pd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ha=function(e,t){return!t&&console.warn(e)},_0=function(e,t){return e&&(ii[e]=t)&&wc&&(wc[e]=t)||ii},Ga=function(){return 0},cv={suppressEvents:!0,isStart:!0,kill:!1},dc={suppressEvents:!0,kill:!1},uv={suppressEvents:!0},md={},Lr=[],Eh={},v0,jn={},Mu={},lf=30,fc=[],gd="",_d=function(e){var t=e[0],n,i;if(Hi(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=fc.length;i--&&!fc[i].targetTest(t););n=fc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new z0(e[i],n)))||e.splice(i,1);return e},us=function(e){return e._gsap||_d(gi(e))[0]._gsap},x0=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():hd(n)&&e.getAttribute&&e.getAttribute(t)||n},Bn=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},bo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},hv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ac=function(){var e=Lr.length,t=Lr.slice(0),n,i;for(Eh={},Lr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vd=function(e){return!!(e._initted||e._startAt||e.add)},y0=function(e,t,n,i){Lr.length&&!fn&&Ac(),e.render(t,n,!!(fn&&t<0&&vd(e))),Lr.length&&!fn&&Ac()},b0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(av).length<2?t:un(e)?e.trim():e},S0=function(e){return e},ri=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},dv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Io=function(e,t){for(var n in t)e[n]=t[n];return e},cf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Hi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Cc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Sa=function(e){var t=e.parent||Ot,n=e.keyframes?dv(Sn(e.keyframes)):ri;if(Fn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},fv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},M0=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ru=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Or=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},hs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},pv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},wh=function(e,t,n,i){return e._startAt&&(fn?e._startAt.revert(dc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},mv=function r(e){return!e||e._ts&&r(e.parent)},uf=function(e){return e._repeat?Do(e._tTime,e=e.duration()+e._rDelay)*e:0},Do=function(e,t){var n=Math.floor(e=Ut(e/t));return e&&n===e?n-1:n},Rc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},su=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},ou=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),su(e),n._dirty||hs(n,e)),e},T0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Rc(e.rawTime(),t),(!t._dur||ol(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),hs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},Ni=function(e,t,n,i){return t.parent&&Or(t),t._start=Ut((ur(n)?n:n||e!==Ot?ai(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),M0(e,t,"_first","_last",e._sort?"_start":0),Ah(t)||(e._recent=t),i||T0(e,t),e._ts<0&&ou(e,e._tTime),e},E0=function(e,t){return(ii.ScrollTrigger||pd("scrollTrigger",t))&&ii.ScrollTrigger.create(t,e)},w0=function(e,t,n,i,s){if(yd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!fn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&v0!==Jn.frame)return Lr.push(e),e._lazy=[s,i],1},gv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ah=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},_v=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&gv(e)&&!(!e._initted&&Ah(e))||(e._ts<0||e._dp._ts<0)&&!Ah(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=ol(0,e._tDur,t),u=Do(l,a),e._yoyo&&u&1&&(o=1-o),u!==Do(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||fn||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&w0(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&wh(e,t,n,!0),e._onUpdate&&!n&&Qn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Or(e,1),!n&&!fn&&(Qn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},vv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},No=function(e,t,n,i){var s=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ut(o*(s+1)+e._rDelay*s):o,a>0&&!i&&ou(e,e._tTime=e._tDur*a),e.parent&&su(e),n||hs(e.parent,e),e},hf=function(e){return e instanceof Un?hs(e):No(e,e._dur)},xv={_start:0,endTime:Ga,totalDuration:Ga},ai=function r(e,t,n){var i=e.labels,s=e._recent||xv,o=e.duration()>=mi?s.endTime(!1):e._dur,a,l,c;return un(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Sn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ma=function(e,t,n){var i=ur(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Fn(l.vars.inherit)&&l.parent;o.immediateRender=Fn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new qt(t[0],o,t[s+1])},Hr=function(e,t){return e||e===0?t(e):t},ol=function(e,t,n){return n<e?e:n>t?t:n},yn=function(e,t){return!un(e)||!(t=lv.exec(e))?"":t[1]},yv=function(e,t,n){return Hr(n,function(i){return ol(e,t,i)})},Ch=[].slice,A0=function(e,t){return e&&Hi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Hi(e[0]))&&!e.nodeType&&e!==Li},bv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return un(i)&&!t||A0(i,1)?(s=n).push.apply(s,gi(i)):n.push(i)})||n},gi=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):un(e)&&!n&&(Th||!Uo())?Ch.call((t||fd).querySelectorAll(e),0):Sn(e)?bv(e,n):A0(e)?Ch.call(e,0):e?[e]:[]},Rh=function(e){return e=gi(e)[0]||Ha("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gi(t,n.querySelectorAll?n:n===e?Ha("Invalid scope")||fd.createElement("div"):e)}},C0=function(e){return e.sort(function(){return .5-Math.random()})},R0=function(e){if(Ht(e))return e;var t=Hi(e)?e:{each:e},n=ds(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return un(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,m){var _=(m||t).length,g=o[_],p,x,v,y,E,M,b,L,S;if(!g){if(S=t.grid==="auto"?0:(t.grid||[1,mi])[1],!S){for(b=-mi;b<(b=m[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(g=o[_]=[],p=l?Math.min(S,_)*u-.5:i%S,x=S===mi?0:l?_*h/S-.5:i/S|0,b=0,L=mi,M=0;M<_;M++)v=M%S-p,y=x-(M/S|0),g[M]=E=c?Math.abs(c==="y"?y:v):h0(v*v+y*y),E>b&&(b=E),E<L&&(L=E);i==="random"&&C0(g),g.max=b-L,g.min=L,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=yn(t.amount||t.each)||0,n=n&&_<0?Nv(n):n}return _=(g[d]-g.min)/g.max||0,Ut(g.b+(n?n(_):_)*g.v)+g.u}},Ph=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ut(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ur(n)?0:yn(n))}},P0=function(e,t){var n=Sn(e),i,s;return!n&&Hi(e)&&(i=n=e.radius||mi,e.values?(e=gi(e.values),(s=!ur(e[0]))&&(i*=i)):e=Ph(e.increment)),Hr(t,n?Ht(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=mi,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||ur(o)?u:u+yn(o)}:Ph(e))},L0=function(e,t,n,i){return Hr(Sn(e)?!t:n===!0?!!(n=0):!i,function(){return Sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Sv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Mv=function(e,t){return function(n){return e(parseFloat(n))+(t||yn(n))}},Tv=function(e,t,n){return D0(e,t,0,1,n)},I0=function(e,t,n){return Hr(n,function(i){return e[~~t(i)]})},Ev=function r(e,t,n){var i=t-e;return Sn(e)?I0(e,r(0,e.length),t):Hr(n,function(s){return(i+(s-e)%i)%i+e})},wv=function r(e,t,n){var i=t-e,s=i*2;return Sn(e)?I0(e,r(0,e.length-1),t):Hr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Wa=function(e){return e.replace(sv,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(ov);return L0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},D0=function(e,t,n,i,s){var o=t-e,a=i-n;return Hr(s,function(l){return n+((l-e)/o*a||0)})},Av=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=un(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Sn(e)&&!Sn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(m){m*=h;var _=Math.min(d,~~m);return u[_](m-_)},n=t}else i||(e=Io(Sn(e)?[]:{},e));if(!u){for(l in t)xd.call(a,e,l,"get",t[l]);s=function(m){return Md(m,a)||(o?e.p:e)}}}return Hr(n,s)},df=function(e,t,n){var i=e.labels,s=mi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Qn=function(e,t,n){var i=e.vars,s=i[t],o=Dt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Lr.length&&Ac(),a&&(Dt=a),u=l?s.apply(c,l):s.call(c),Dt=o,u},pa=function(e){return Or(e),e.scrollTrigger&&e.scrollTrigger.kill(!!fn),e.progress()<1&&Qn(e,"onInterrupt"),e},fo,N0=[],U0=function(e){if(e)if(e=!e.name&&e.default||e,dd()||e.headless){var t=e.name,n=Ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ga,render:Md,add:xd,kill:Wv,modifier:Gv,rawVars:0},o={targetTest:0,get:0,getSetter:Sd,aliases:{},register:0};if(Uo(),e!==i){if(jn[t])return;ri(i,ri(Cc(e,s),o)),Io(i.prototype,Io(s,Cc(e,o))),jn[i.prop=t]=i,e.targetTest&&(fc.push(i),md[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_0(t,i),e.register&&e.register(Hn,i,kn)}else N0.push(e)},St=255,ma={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Tu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},O0=function(e,t,n){var i=e?ur(e)?[e>>16,e>>8&St,e&St]:0:ma.black,s,o,a,l,c,u,h,d,f,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ma[e])i=ma[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&St,i&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(af),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Tu(l+1/3,s,o),i[1]=Tu(l,s,o),i[2]=Tu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(f0),n&&i.length<4&&(i[3]=1),i}else i=e.match(af)||ma.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/St,o=i[1]/St,a=i[2]/St,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},F0=function(e){var t=[],n=[],i=-1;return e.split(Ir).forEach(function(s){var o=s.match(ho)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},ff=function(e,t,n){var i="",s=(e+i).match(Ir),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=O0(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=F0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ir,"1").split(ho),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ir),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Ir=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ma)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Cv=/hsl[a]?\(/,B0=function(e){var t=e.join(" "),n;if(Ir.lastIndex=0,Ir.test(t))return n=Cv.test(t),e[1]=ff(e[1],n),e[0]=ff(e[0],n,F0(e[1])),!0},Xa,Jn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,m=function _(g){var p=r()-i,x=g===!0,v,y,E,M;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,v=E-o,(v>0||x)&&(M=++h.frame,d=E-h.time*1e3,h.time=E=E/1e3,o+=v+(v>=s?4:s-v),y=1),x||(l=c(_)),y)for(f=0;f<a.length;f++)a[f](E,d,M,g)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){m0&&(!Th&&dd()&&(Li=Th=window,fd=Li.document||{},ii.gsap=Hn,(Li.gsapVersions||(Li.gsapVersions=[])).push(Hn.version),g0(wc||Li.GreenSockGlobals||!Li.gsap&&Li||{}),N0.forEach(U0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Xa=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Xa=0,c=Ga},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,p,x){var v=p?function(y,E,M,b){g(y,E,M,b),h.remove(v)}:g;return h.remove(g),a[x?"unshift":"push"](v),Uo(),v},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h}(),Uo=function(){return!Xa&&Jn.wake()},ut={},Rv=/^[\d.\-M][\d.\-,\s]/,Pv=/["']/g,Lv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Pv,"").trim():+c,i=l.substr(a+1).trim();return t},Iv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Dv=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Lv(t[1])]:Iv(e).split(",").map(b0)):ut._CE&&Rv.test(e)?ut._CE("",e):n},Nv=function(e){return function(t){return 1-e(1-t)}},ds=function(e,t){return e&&(Ht(e)?e:ut[e]||Dv(e))||t},As=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Bn(e,function(a){ut[a]=ii[a]=s,ut[o=a.toLowerCase()]=n;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},k0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Eu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Mh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*rv((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:k0(a);return s=Mh/s,l.config=function(c,u){return r(e,c,u)},l},wu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:k0(n);return i.config=function(s){return r(e,s)},i};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;As(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;As("Elastic",Eu("in"),Eu("out"),Eu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};As("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);As("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});As("Circ",function(r){return-(h0(1-r*r)-1)});As("Sine",function(r){return r===1?1:-iv(r*tv)+1});As("Back",wu("in"),wu("out"),wu());ut.SteppedEase=ut.steps=ii.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((i*ol(0,o,a)|0)+s)*n}}};Va.ease=ut["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return gd+=r+","+r+"Params,"});var z0=function(e,t){this.id=nv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:x0,this.set=t?t.getSetter:Sd},Ya=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,No(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Xa||Jn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,No(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Uo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ou(this,n),!s._dp||s.parent||T0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),y0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+uf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+uf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Do(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Rc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(ol(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),su(this),pv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Uo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ut(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ni(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Fn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Rc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=uv);var i=fn;return fn=n,vd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),fn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ai(this,n),Fn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Fn(i)),this._dur||(this._zTime=-Mt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ht(n)?n:S0,l=function(){var u=i.then;i.then=null,s&&s(),Ht(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){pa(this)},r}();ri(Ya.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Un=function(r){u0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Fn(n.sortChildren),Ot&&Ni(n.parent||Ot,tr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&E0(tr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ma(0,arguments,this),this},t.from=function(i,s,o){return Ma(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ma(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Sa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(i,s,ai(this,o),1),this},t.call=function(i,s,o){return Ni(this,qt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new qt(i,o,ai(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Sa(o).immediateRender=Fn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Sa(a).immediateRender=Fn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ut(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,m,_,g,p,x,v,y,E,M,b;if(this!==Ot&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,y=this._start,v=this._ts,p=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(d=Ut(u%g),u===l?(_=this._repeat,d=c):(E=Ut(u/g),_=~~E,_&&_===E&&(d=c,_--),d>c&&(d=c)),E=Do(this._tTime,g),!a&&this._tTime&&E!==_&&this._tTime-E*g-this._dur<=0&&(E=_),M&&_&1&&(d=c-d,b=1),_!==E&&!this._lock){var L=M&&E&1,S=L===(M&&_&1);if(_<E&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Ut(_*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Qn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,E=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=vv(this,Ut(a),Ut(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!E&&(Qn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){x=0,m&&(u+=this._zTime=-Mt);break}}f=m}else{f=this._last;for(var T=i<0?i:d;f;){if(m=f._prev,(f._act||T<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(T-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(T-f._start)*f._ts,s,o||fn&&vd(f)),d!==this._time||!this._ts&&!p){x=0,m&&(u+=this._zTime=T?-Mt:Mt);break}}f=m}}if(x&&!s&&(this.pause(),x.render(d>=a?0:-Mt)._zTime=d>=a?1:-1,this._ts))return this._start=y,su(this),this.render(i,s,o);this._onUpdate&&!s&&Qn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Or(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Qn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(ur(s)||(s=ai(this,s,i)),!(i instanceof Ya)){if(Sn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(un(i))return this.addLabel(i,s);if(Ht(i))i=qt.delayedCall(0,i);else return this}return this!==i?Ni(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return un(i)?this.removeLabel(i):Ht(i)?this.killTweensOf(i):(i.parent===this&&ru(this,i),i===this._recent&&(this._recent=this._last),hs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(Jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ai(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=qt.delayedCall(0,s||Ga,o);return a.data="isPause",this._hasPause=1,Ni(this,a,ai(this,i))},t.removePause=function(i){var s=this._first;for(i=ai(this,i);s;)s._start===i&&s.data==="isPause"&&Or(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Mr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=gi(i),l=this._first,c=ur(s),u;l;)l instanceof qt?hv(l._targets,a)&&(c?(!Mr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ai(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,m=qt.to(o,ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!f){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==g&&No(m,g,0,1).render(m._time,!0,!0),f=1}u&&u.apply(m,h||[])}},s));return d?m.render(0):m},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ri({startAt:{time:ai(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),df(this,ai(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),df(this,ai(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ut(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return hs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),hs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=mi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ni(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ut(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;No(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ot._ts&&(y0(Ot,Rc(i,Ot)),v0=Jn.frame),Jn.frame>=lf){lf+=ni.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&ni.autoSleep&&Jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Jn.sleep()}}},e}(Ya);ri(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var Uv=function(e,t,n,i,s,o,a){var l=new kn(this._pt,e,t,0,1,Y0,null,s),c=0,u=0,h,d,f,m,_,g,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Wa(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),d=n.match(Su)||[];h=Su.exec(i);)m=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==d[u++]&&(g=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:m.charAt(1)==="="?bo(g,m)-g:parseFloat(m)-g,m:f&&f<4?Math.round:0},c=Su.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(p0.test(i)||p)&&(l.e=0),this._pt=l,l},xd=function(e,t,n,i,s,o,a,l,c,u){Ht(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:Ht(h)?c?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Ht(h)?c?zv:W0:bd,m;if(un(i)&&(~i.indexOf("random(")&&(i=Wa(i)),i.charAt(1)==="="&&(m=bo(d,i)+(yn(d)||0),(m||m===0)&&(i=m))),!u||d!==i||Lh)return!isNaN(d*i)&&i!==""?(m=new kn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?Hv:X0,0,f),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&pd(t,i),Uv.call(this,e,t,d,i,f,l||ni.stringFilter,c))},Ov=function(e,t,n,i,s){if(Ht(e)&&(e=Ta(e,s,t,n,i)),!Hi(e)||e.style&&e.nodeType||Sn(e)||d0(e))return un(e)?Ta(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ta(e[a],s,t,n,i);return o},V0=function(e,t,n,i,s,o){var a,l,c,u;if(jn[e]&&(a=new jn[e]).init(s,a.rawVars?t[e]:Ov(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new kn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==fo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Mr,Lh,yd=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,m=e._dur,_=e._startAt,g=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:g,v=e._overwrite==="auto"&&!ud,y=e.timeline,E=i.easeReverse||h,M,b,L,S,T,P,N,X,D,U,B,V,W;if(y&&(!d||!s)&&(s="none"),e._ease=ds(s,Va.ease),e._rEase=E&&(ds(E)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||d&&!i.stagger){if(X=g[0]?us(g[0]).harness:0,V=X&&i[X.prop],M=Cc(i,md),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&m?dc:cv),_._lazy=0),o){if(Or(e._startAt=qt.set(g,ri({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Fn(l),startAt:null,delay:0,onUpdate:c&&function(){return Qn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn||!a&&!f)&&e._startAt.revert(dc),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(a=!1),L=ri({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Fn(l),immediateRender:a,stagger:0,parent:p},M),V&&(L[X.prop]=V),Or(e._startAt=qt.set(g,L)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn?e._startAt.revert(dc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Fn(l)||l&&!m,b=0;b<g.length;b++){if(T=g[b],N=T._gsap||_d(g)[b]._gsap,e._ptLookup[b]=U={},Eh[N.id]&&Lr.length&&Ac(),B=x===g?b:x.indexOf(T),X&&(D=new X).init(T,V||M,e,B,x)!==!1&&(e._pt=S=new kn(e._pt,T,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(F){U[F]=S}),D.priority&&(P=1)),!X||V)for(L in M)jn[L]&&(D=V0(L,M,e,B,T,x))?D.priority&&(P=1):U[L]=S=xd.call(e,T,L,"get",M[L],B,x,0,i.stringFilter);e._op&&e._op[b]&&e.kill(T,e._op[b]),v&&e._pt&&(Mr=e,Ot.killTweensOf(T,U,e.globalTime(t)),W=!e.parent,Mr=0),e._pt&&l&&(Eh[N.id]=1)}P&&$0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,d&&t<=0&&y.render(mi,!0,!0)},Fv=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Lh=1,e.vars[t]="+=0",yd(e,a),Lh=0,l?Ha(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Gt(n)+yn(h.e)),h.b&&(h.b=u.s+yn(h.b))},Bv=function(e,t){var n=e[0]?us(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Io({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},kv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Sn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ta=function(e,t,n,i,s){return Ht(e)?e.call(t,n,i,s):un(e)&&~e.indexOf("random(")?Wa(e):e},H0=gd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",G0={};Bn(H0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return G0[r]=1});var qt=function(r){u0(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Sa(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=i.parent||Ot,x=(Sn(n)||d0(n)?ur(n[0]):"length"in i)?[n]:gi(n),v,y,E,M,b,L,S,T;if(a._targets=x.length?_d(x):Ha("GSAP target "+n+" not found. https://gsap.com",!ni.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||d||dl(c)||dl(u)){i=a.vars;var P=i.easeReverse||i.yoyoEase;if(v=a.timeline=new Un({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:x}),v.kill(),v.parent=v._dp=tr(a),v._start=0,d||dl(c)||dl(u)){if(M=x.length,S=d&&R0(d),Hi(d))for(b in d)~H0.indexOf(b)&&(T||(T={}),T[b]=d[b]);for(y=0;y<M;y++)E=Cc(i,G0),E.stagger=0,P&&(E.easeReverse=P),T&&Io(E,T),L=x[y],E.duration=+Ta(c,tr(a),y,L,x),E.delay=(+Ta(u,tr(a),y,L,x)||0)-a._delay,!d&&M===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),v.to(L,E,S?S(y,L,x):0),v._ease=ut.none;v.duration()?c=u=0:a.timeline=0}else if(m){Sa(ri(v.vars.defaults,{ease:"none"})),v._ease=ds(m.ease||i.ease||"none");var N=0,X,D,U;if(Sn(m))m.forEach(function(B){return v.to(x,B,">")}),v.duration();else{E={};for(b in m)b==="ease"||b==="easeEach"||kv(b,m[b],E,m.easeEach);for(b in E)for(X=E[b].sort(function(B,V){return B.t-V.t}),N=0,y=0;y<X.length;y++)D=X[y],U={ease:D.e,duration:(D.t-(y?X[y-1].t:0))/100*c},U[b]=D.v,v.to(x,U,N),N+=U.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!ud&&(Mr=tr(a),Ot.killTweensOf(x),Mr=0),Ni(p,tr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!m&&a._start===Ut(p._time)&&Fn(h)&&mv(tr(a))&&p.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-u)||0)),g&&E0(tr(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Mt&&!u?l:i<Mt?0:i,d,f,m,_,g,p,x,v;if(!c)_v(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=Ut(h%_),h===l?(m=this._repeat,d=c):(g=Ut(h/_),m=~~g,m&&m===g?(d=c,m--):d>c&&(d=c)),p=this._yoyo&&m&1,p&&(d=c-d),g=Do(this._tTime,_),d===a&&!o&&this._initted&&m===g)return this._tTime=h,this;m!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Ut(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(w0(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var y=d<a;if(y!==this._inv){var E=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=E?(y?-1:1)/E:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(d/c);if(this._from&&(this.ratio=x=1-x),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!g&&(Qn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&wh(this,i,s,o),Qn(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&Qn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&wh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Or(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Qn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Xa||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||yd(this,c),u=this._ease(c/this._dur),Fv(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(ou(this,0),this.parent||M0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?pa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Mr&&Mr.vars.overwrite!==!0)._first||pa(this),this.parent&&o!==this.timeline.totalDuration()&&No(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?gi(i):a,c=this._ptLookup,u=this._pt,h,d,f,m,_,g,p;if((!s||s==="all")&&fv(a,l))return s==="all"&&(this._pt=0),pa(this);for(h=this._op=this._op||[],s!=="all"&&(un(s)&&(_={},Bn(s,function(x){return _[x]=1}),s=_),s=Bv(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,m=d,f={}):(f=h[p]=h[p]||{},m=s);for(_ in m)g=d&&d[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&ru(this,g,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&pa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ma(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ma(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ot.killTweensOf(i,s,o)},e}(Ya);ri(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(r){qt[r]=function(){var e=new Un,t=Ch.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var bd=function(e,t,n){return e[t]=n},W0=function(e,t,n){return e[t](n)},zv=function(e,t,n,i){return e[t](i.fp,n)},Vv=function(e,t,n){return e.setAttribute(t,n)},Sd=function(e,t){return Ht(e[t])?W0:hd(e[t])&&e.setAttribute?Vv:bd},X0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Hv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Y0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Md=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Gv=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Wv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ru(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Xv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},$0=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},kn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||X0,this.d=l||this,this.set=c||bd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Xv,this.m=n,this.mt=s,this.tween=i},r}();Bn(gd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return md[r]=1});ii.TweenMax=ii.TweenLite=qt;ii.TimelineLite=ii.TimelineMax=Un;Ot=new Un({sortChildren:!1,defaults:Va,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ni.stringFilter=B0;var fs=[],pc={},Yv=[],pf=0,$v=0,Au=function(e){return(pc[e]||Yv).map(function(t){return t()})},Ih=function(){var e=Date.now(),t=[];e-pf>2&&(Au("matchMediaInit"),fs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Li.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Au("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),pf=e,Au("matchMedia"))},q0=function(){function r(t,n){this.selector=n&&Rh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=$v++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ht(n)&&(s=i,i=n,n=Ht);var o=this,a=function(){var c=Dt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Rh(s)),Dt=o,h=i.apply(o,arguments),Ht(h)&&o._r.push(h),Dt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ht?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=fs.length;o--;)fs[o].id===this.id&&fs.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),qv=function(){function r(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Hi(n)||(n={matches:n});var o=new q0(0,s||this.scope),a=o.conditions={},l,c,u;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Li.matchMedia(n[c]),l&&(fs.indexOf(o)<0&&fs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ih):l.addEventListener("change",Ih)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Pc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return U0(i)})},timeline:function(e){return new Un(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){un(e)&&(e=gi(e)[0]);var s=us(e||{}).get,o=n?S0:b0;return n==="native"&&(n=""),e&&(t?o((jn[t]&&jn[t].get||s)(e,t,n,i)):function(a,l,c){return o((jn[a]&&jn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=gi(e),e.length>1){var i=e.map(function(u){return Hn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=jn[t],a=us(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;fo._pt=0,h.init(e,n?u+n:u,fo,0,[e]),h.render(1,h),fo._pt&&Md(1,fo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Hn.to(e,ri((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ds(e.ease,Va.ease)),cf(Va,e||{})},config:function(e){return cf(ni,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!jn[a]&&!ii[a]&&Ha(t+" effect requires "+a+" plugin.")}),Mu[t]=function(a,l,c){return n(gi(a),ri(l||{},s),c)},o&&(Un.prototype[t]=function(a,l,c){return this.add(Mu[t](a,Hi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=ds(t)},parseEase:function(e,t){return arguments.length?ds(e,t):ut},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Un(e),i,s;for(n.smoothChildTiming=Fn(e.smoothChildTiming),Ot.remove(n),n._dp=0,n._time=n._tTime=Ot._time,i=Ot._first;i;)s=i._next,(t||!(!i._dur&&i instanceof qt&&i.vars.onComplete===i._targets[0]))&&Ni(n,i,i._start-i._delay),i=s;return Ni(Ot,n,0),n},context:function(e,t){return e?new q0(e,t):Dt},matchMedia:function(e){return new qv(e)},matchMediaRefresh:function(){return fs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ih()},addEventListener:function(e,t){var n=pc[e]||(pc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=pc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Ev,wrapYoyo:wv,distribute:R0,random:L0,snap:P0,normalize:Tv,getUnit:yn,clamp:yv,splitColor:O0,toArray:gi,selector:Rh,mapRange:D0,pipe:Sv,unitize:Mv,interpolate:Av,shuffle:C0},install:g0,effects:Mu,ticker:Jn,updateRoot:Un.updateRoot,plugins:jn,globalTimeline:Ot,core:{PropTween:kn,globals:_0,Tween:qt,Timeline:Un,Animation:Ya,getCache:us,_removeLinkedListItem:ru,reverting:function(){return fn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return ud=e}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Pc[r]=qt[r]});Jn.add(Un.updateRoot);fo=Pc.to({},{duration:0});var jv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Zv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=jv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Cu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(un(s)&&(l={},Bn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Zv(a,s)}}}},Hn=Pc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)fn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Cu("roundProps",Ph),Cu("modifiers"),Cu("snap",P0))||Pc;qt.version=Un.version=Hn.version="3.15.0";m0=1;dd()&&Uo();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mf,Tr,So,Td,ls,gf,Ed,Jv=function(){return typeof window<"u"},hr={},ts=180/Math.PI,Mo=Math.PI/180,Ps=Math.atan2,_f=1e8,wd=/([A-Z])/g,Kv=/(left|right|width|margin|padding|x)/i,Qv=/[\s,\(]\S/,Fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Dh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ex=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ix=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},j0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Z0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},rx=function(e,t,n){return e.style[t]=n},sx=function(e,t,n){return e.style.setProperty(t,n)},ox=function(e,t,n){return e._gsap[t]=n},ax=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},lx=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},cx=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ft="transform",zn=Ft+"Origin",ux=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in hr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Fi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=nr(i,a)}):this.tfm[e]=o.x?o[e]:nr(i,e),e===zn&&(this.tfm.zOrigin=o.zOrigin);else return Fi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(zn,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},J0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(wd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ed(),(!s||!s.isStart)&&!n[Ft]&&(J0(n),i.zOrigin&&n[zn]&&(n[zn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},K0=function(e,t){var n={target:e,props:[],revert:hx,save:ux};return e._gsap||Hn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Q0,Nh=function(e,t){var n=Tr.createElementNS?Tr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Tr.createElement(e);return n&&n.style?n:Tr.createElement(e)},ei=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(wd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Oo(t)||t,1)||""},vf="O,Moz,ms,Ms,Webkit".split(","),Oo=function(e,t,n){var i=t||ls,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(vf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?vf[o]:"")+e},Uh=function(){Jv()&&window.document&&(mf=window,Tr=mf.document,So=Tr.documentElement,ls=Nh("div")||{style:{}},Nh("div"),Ft=Oo(Ft),zn=Ft+"Origin",ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Q0=!!Oo("perspective"),Ed=Hn.core.reverting,Td=1)},xf=function(e){var t=e.ownerSVGElement,n=Nh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),So.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),So.removeChild(n),s},yf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},eg=function(e){var t,n;try{t=e.getBBox()}catch{t=xf(e),n=1}return t&&(t.width||t.height)||n||(t=xf(e)),t&&!t.width&&!t.x&&!t.y?{x:+yf(e,["x","cx","x1"])||0,y:+yf(e,["y","cy","y1"])||0,width:0,height:0}:t},tg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&eg(e))},Fr=function(e,t){if(t){var n=e.style,i;t in hr&&t!==zn&&(t=Ft),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(wd,"-$1").toLowerCase())):n.removeAttribute(t)}},Er=function(e,t,n,i,s,o){var a=new kn(e._pt,t,n,0,1,o?Z0:j0);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},bf={deg:1,rad:1,turn:1},dx={grid:1,flex:1},Br=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ls.style,l=Kv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",m,_,g,p;if(i===o||!s||bf[i]||bf[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&tg(e),(f||o==="%")&&(hr[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[u],Gt(f?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Tr||!_.appendChild)&&(_=Tr.body),g=_._gsap,g&&f&&g.width&&l&&g.time===Jn.time&&!g.uncache)return Gt(s/g.width*h);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,m=e[u],x?e.style[t]=x:Fr(e,t)}else(f||o==="%")&&!dx[ei(_,"display")]&&(a.position=ei(e,"position")),_===e&&(a.position="static"),_.appendChild(ls),m=ls[u],_.removeChild(ls),a.position="absolute";return l&&f&&(g=us(_),g.time=Jn.time,g.width=_[u]),Gt(d?m*s/h:m&&s?h/m*s:0)},nr=function(e,t,n,i){var s;return Td||Uh(),t in Fi&&t!=="transform"&&(t=Fi[t],~t.indexOf(",")&&(t=t.split(",")[0])),hr[t]&&t!=="transform"?(s=qa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ic(ei(e,zn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Lc[t]&&Lc[t](e,t,n)||ei(e,t)||x0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Br(e,t,s,n)+n:s},fx=function(e,t,n,i){if(!n||n==="none"){var s=Oo(t,e,1),o=s&&ei(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ei(e,"borderTopColor"))}var a=new kn(this._pt,e.style,t,0,1,Y0),l=0,c=0,u,h,d,f,m,_,g,p,x,v,y,E;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ei(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=ei(e,t)||i,_?e.style[t]=_:Fr(e,t)),u=[n,i],B0(u),n=u[0],i=u[1],d=n.match(ho)||[],E=i.match(ho)||[],E.length){for(;h=ho.exec(i);)g=h[0],x=i.substring(l,h.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),g!==(_=d[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),g.charAt(1)==="="&&(g=bo(f,g)+y),p=parseFloat(g),v=g.substr((p+"").length),l=ho.lastIndex-v.length,v||(v=v||ni.units[t]||y,l===i.length&&(i+=v,a.e+=v)),y!==v&&(f=Br(e,t,_,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:p-f,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Z0:j0;return p0.test(i)&&(a.e=0),this._pt=a,a},Sf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},px=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Sf[n]||n,t[1]=Sf[i]||i,t.join(" ")},mx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],hr[a]&&(l=1,a=a==="transformOrigin"?zn:Ft),Fr(n,a);l&&(Fr(n,Ft),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",qa(n,1),o.uncache=1,J0(i)))}},Lc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new kn(e._pt,t,n,0,0,mx);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},$a=[1,0,0,1,0,0],ng={},ig=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Mf=function(e){var t=ei(e,Ft);return ig(t)?$a:t.substr(7).match(f0).map(Gt)},Ad=function(e,t){var n=e._gsap||us(e),i=e.style,s=Mf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?$a:s):(s===$a&&!e.offsetParent&&e!==So&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,So.appendChild(e)),s=Mf(e),l?i.display=l:Fr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):So.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Oh=function(e,t,n,i,s,o){var a=e._gsap,l=s||Ad(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],m=l[1],_=l[2],g=l[3],p=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,E=parseFloat(v[1])||0,M,b,L,S;n?l!==$a&&(b=f*g-m*_)&&(L=y*(g/b)+E*(-_/b)+(_*x-g*p)/b,S=y*(-m/b)+E*(f/b)-(f*x-m*p)/b,y=L,E=S):(M=eg(e),y=M.x+(~v[0].indexOf("%")?y/100*M.width:y),E=M.y+(~(v[1]||v[0]).indexOf("%")?E/100*M.height:E)),i||i!==!1&&a.smooth?(p=y-c,x=E-u,a.xOffset=h+(p*f+x*_)-p,a.yOffset=d+(p*m+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[zn]="0px 0px",o&&(Er(o,a,"xOrigin",c,y),Er(o,a,"yOrigin",u,E),Er(o,a,"xOffset",h,a.xOffset),Er(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},qa=function(e,t){var n=e._gsap||new z0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ei(e,zn)||"0",u,h,d,f,m,_,g,p,x,v,y,E,M,b,L,S,T,P,N,X,D,U,B,V,W,F,C,J,ae,j,Y,ee;return u=h=d=_=g=p=x=v=y=0,f=m=1,n.svg=!!(e.getCTM&&tg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),i.scale=i.rotate=i.translate="none"),b=Ad(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),Oh(e,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,b)),E=n.xOrigin||0,M=n.yOrigin||0,b!==$a&&(P=b[0],N=b[1],X=b[2],D=b[3],u=U=b[4],h=B=b[5],b.length===6?(f=Math.sqrt(P*P+N*N),m=Math.sqrt(D*D+X*X),_=P||N?Ps(N,P)*ts:0,x=X||D?Ps(X,D)*ts+_:0,x&&(m*=Math.abs(Math.cos(x*Mo))),n.svg&&(u-=E-(E*P+M*X),h-=M-(E*N+M*D))):(ee=b[6],j=b[7],C=b[8],J=b[9],ae=b[10],Y=b[11],u=b[12],h=b[13],d=b[14],L=Ps(ee,ae),g=L*ts,L&&(S=Math.cos(-L),T=Math.sin(-L),V=U*S+C*T,W=B*S+J*T,F=ee*S+ae*T,C=U*-T+C*S,J=B*-T+J*S,ae=ee*-T+ae*S,Y=j*-T+Y*S,U=V,B=W,ee=F),L=Ps(-X,ae),p=L*ts,L&&(S=Math.cos(-L),T=Math.sin(-L),V=P*S-C*T,W=N*S-J*T,F=X*S-ae*T,Y=D*T+Y*S,P=V,N=W,X=F),L=Ps(N,P),_=L*ts,L&&(S=Math.cos(L),T=Math.sin(L),V=P*S+N*T,W=U*S+B*T,N=N*S-P*T,B=B*S-U*T,P=V,U=W),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),f=Gt(Math.sqrt(P*P+N*N+X*X)),m=Gt(Math.sqrt(B*B+ee*ee)),L=Ps(U,B),x=Math.abs(L)>2e-4?L*ts:0,y=Y?1/(Y<0?-Y:Y):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ig(ei(e,Ft)),V&&e.setAttribute("transform",V))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Gt(f),n.scaleY=Gt(m),n.rotation=Gt(_)+a,n.rotationX=Gt(g)+a,n.rotationY=Gt(p)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[zn]=Ic(c)),n.xOffset=n.yOffset=0,n.force3D=ni.force3D,n.renderTransform=n.svg?_x:Q0?rg:gx,n.uncache=0,n},Ic=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ru=function(e,t,n){var i=yn(t);return Gt(parseFloat(t)+parseFloat(Br(e,"x",n+"px",i)))+i},gx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,rg(e,t)},$r="0deg",Qo="0px",qr=") ",rg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,g=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,y="",E=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==$r||u!==$r)){var M=parseFloat(u)*Mo,b=Math.sin(M),L=Math.cos(M),S;M=parseFloat(h)*Mo,S=Math.cos(M),o=Ru(x,o,b*S*-v),a=Ru(x,a,-Math.sin(M)*-v),l=Ru(x,l,L*S*-v+v)}g!==Qo&&(y+="perspective("+g+qr),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(E||o!==Qo||a!==Qo||l!==Qo)&&(y+=l!==Qo||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+qr),c!==$r&&(y+="rotate("+c+qr),u!==$r&&(y+="rotateY("+u+qr),h!==$r&&(y+="rotateX("+h+qr),(d!==$r||f!==$r)&&(y+="skew("+d+", "+f+qr),(m!==1||_!==1)&&(y+="scale("+m+", "+_+qr),x.style[Ft]=y||"translate(0, 0)"},_x=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,g=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(o),y=parseFloat(a),E,M,b,L,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Mo,c*=Mo,E=Math.cos(l)*h,M=Math.sin(l)*h,b=Math.sin(l-c)*-d,L=Math.cos(l-c)*d,c&&(u*=Mo,S=Math.tan(c-u),S=Math.sqrt(1+S*S),b*=S,L*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),E*=S,M*=S)),E=Gt(E),M=Gt(M),b=Gt(b),L=Gt(L)):(E=h,L=d,M=b=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Br(f,"x",o,"px"),y=Br(f,"y",a,"px")),(m||_||g||p)&&(v=Gt(v+m-(m*E+_*b)+g),y=Gt(y+_-(m*M+_*L)+p)),(i||s)&&(S=f.getBBox(),v=Gt(v+i/100*S.width),y=Gt(y+s/100*S.height)),S="matrix("+E+","+M+","+b+","+L+","+v+","+y+")",f.setAttribute("transform",S),x&&(f.style[Ft]=S)},vx=function(e,t,n,i,s){var o=360,a=un(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ts:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*_f)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*_f)%o-~~(c/o)*o)),e._pt=d=new kn(e._pt,t,n,i,c,ex),d.e=u,d.u="deg",e._props.push(n),d},Tf=function(e,t){for(var n in t)e[n]=t[n];return e},xx=function(e,t,n){var i=Tf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ft]=t,a=qa(n,1),Fr(n,Ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ft],o[Ft]=t,a=qa(n,1),o[Ft]=c);for(l in hr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=yn(c),m=yn(u),h=f!==m?Br(n,l,c,m):parseFloat(c),d=parseFloat(u),e._pt=new kn(e._pt,a,l,h,d-h,Dh),e._pt.u=m||0,e._props.push(l));Tf(a,i)};Bn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Lc[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(m){return nr(a,m,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(m,_){return f[m]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var sg={name:"css",register:Uh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,m,_,g,p,x,v,y,E,M,b,L,S;Td||Uh(),this.styles=this.styles||K0(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(jn[_]&&V0(_,t,n,i,e,s)))){if(f=typeof u,m=Lc[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Wa(u)),m)m(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ir.lastIndex=0,Ir.test(c)||(g=yn(c),p=yn(u),p?g!==p&&(c=Br(e,_,c,p)+p):g&&(u+=g)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],un(c)&&~c.indexOf("random(")&&(c=Wa(c)),yn(c+"")||c==="auto"||(c+=ni.units[_]||yn(nr(e,_))||""),(c+"").charAt(1)==="="&&(c=nr(e,_))):c=nr(e,_),d=parseFloat(c),x=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in Fi&&(_==="autoAlpha"&&(d===1&&nr(e,"visibility")==="hidden"&&h&&(d=0),L.push("visibility",0,a.visibility),Er(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Fi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in hr,v){if(this.styles.save(_),S=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=ei(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=u,u=ei(e,"perspective"),T?e.style.perspective=T:Fr(e,"perspective")}h=parseFloat(u)}if(y||(E=e._gsap,E.renderTransform&&!t.parseTransform||qa(e,t.parseTransform),M=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new kn(this._pt,a,Ft,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new kn(this._pt,E,"scaleY",E.scaleY,(x?bo(E.scaleY,x+h):h)-E.scaleY||0,Dh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(zn,0,a[zn]),u=px(u),E.svg?Oh(e,u,0,M,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&Er(this,E,"zOrigin",E.zOrigin,p),Er(this,a,_,Ic(c),Ic(u)));continue}else if(_==="svgOrigin"){Oh(e,u,1,M,0,this);continue}else if(_ in ng){vx(this,E,_,d,x?bo(d,x+u):u);continue}else if(_==="smoothOrigin"){Er(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){xx(this,u,e);continue}}else _ in a||(_=Oo(_)||_);if(v||(h||h===0)&&(d||d===0)&&!Qv.test(u)&&_ in a)g=(c+"").substr((d+"").length),h||(h=0),p=yn(u)||(_ in ni.units?ni.units[_]:g),g!==p&&(d=Br(e,_,c,p)),this._pt=new kn(this._pt,v?E:a,_,d,(x?bo(d,x+h):h)-d,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?ix:Dh),this._pt.u=p||0,v&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=nx):g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=tx);else if(_ in a)fx.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){pd(_,u);continue}v||(_ in a?L.push(_,0,a[_]):typeof e[_]=="function"?L.push(_,2,e[_]()):L.push(_,1,c||e[_])),o.push(_)}}b&&$0(this)},render:function(e,t){if(t.tween._time||!Ed())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:nr,aliases:Fi,getSetter:function(e,t,n){var i=Fi[t];return i&&i.indexOf(",")<0&&(t=i),t in hr&&t!==zn&&(e._gsap.x||nr(e,"x"))?n&&gf===n?t==="scale"?ax:ox:(gf=n||{})&&(t==="scale"?lx:cx):e.style&&!hd(e.style[t])?rx:~t.indexOf("-")?sx:Sd(e,t)},core:{_removeProperty:Fr,_getMatrix:Ad}};Hn.utils.checkPrefix=Oo;Hn.core.getStyleSaver=K0;(function(r,e,t,n){var i=Bn(r+","+e+","+t,function(s){hr[s]=1});Bn(e,function(s){ni.units[s]="deg",ng[s]=1}),Fi[i[13]]=r+","+e,Bn(n,function(s){var o=s.split(":");Fi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ni.units[r]="px"});Hn.registerPlugin(sg);var tn=Hn.registerPlugin(sg)||Hn;tn.core.Tween;function yx(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function bx(r,e,t){return e&&yx(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var dn,mc,Kn,wr,Ar,To,og,ns,Eo,ag,rr,Ai,lg,cg=function(){return dn||typeof window<"u"&&(dn=window.gsap)&&dn.registerPlugin&&dn},ug=1,po=[],ot=[],ki=[],Ea=Date.now,Fh=function(e,t){return t},Sx=function(){var e=Eo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ot),i.push.apply(i,ki),ot=n,ki=i,Fh=function(o,a){return t[o](a)}},Dr=function(e,t){return~ki.indexOf(e)&&ki[ki.indexOf(e)+1][t]},wa=function(e){return!!~ag.indexOf(e)},An=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},En=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},fl="scrollLeft",pl="scrollTop",Bh=function(){return rr&&rr.isPressed||ot.cache++},Dc=function(e,t){var n=function i(s){if(s||s===0){ug&&(Kn.history.scrollRestoration="manual");var o=rr&&rr.isPressed;s=i.v=Math.round(s)||(rr&&rr.iOS?1:0),e(s),i.cacheID=ot.cache,o&&Fh("ss",s)}else(t||ot.cache!==i.cacheID||Fh("ref"))&&(i.cacheID=ot.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Dn={s:fl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Dc(function(r){return arguments.length?Kn.scrollTo(r,en.sc()):Kn.pageXOffset||wr[fl]||Ar[fl]||To[fl]||0})},en={s:pl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Dn,sc:Dc(function(r){return arguments.length?Kn.scrollTo(Dn.sc(),r):Kn.pageYOffset||wr[pl]||Ar[pl]||To[pl]||0})},Nn=function(e,t){return(t&&t._ctx&&t._ctx.selector||dn.utils.toArray)(e)[0]||(typeof e=="string"&&dn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Mx=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},kr=function(e,t){var n=t.s,i=t.sc;wa(e)&&(e=wr.scrollingElement||Ar);var s=ot.indexOf(e),o=i===en.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+o]||An(e,"scroll",Bh);var a=ot[s+o],l=a||(ot[s+o]=Dc(Dr(e,n),!0)||(wa(e)?i:Dc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=dn.getProperty(e,"scrollBehavior")==="smooth"),l},kh=function(e,t,n){var i=e,s=e,o=Ea(),a=o,l=t||50,c=Math.max(500,l*3),u=function(m,_){var g=Ea();_||g-o>l?(s=i,i=m,a=o,o=g):n?i+=m:i=s+(m-s)/(g-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(m){var _=a,g=s,p=Ea();return(m||m===0)&&m!==i&&u(m),o===a||p-a>c?0:(i+(n?g:-g))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},ea=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Ef=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},hg=function(){Eo=dn.core.globals().ScrollTrigger,Eo&&Eo.core&&Sx()},dg=function(e){return dn=e||cg(),!mc&&dn&&typeof document<"u"&&document.body&&(Kn=window,wr=document,Ar=wr.documentElement,To=wr.body,ag=[Kn,wr,Ar,To],dn.utils.clamp,lg=dn.core.context||function(){},ns="onpointerenter"in To?"pointer":"mouse",og=Xt.isTouch=Kn.matchMedia&&Kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ai=Xt.eventTypes=("ontouchstart"in Ar?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ar?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ug=0},500),mc=1),Eo||hg(),mc};Dn.op=en;ot.cache=0;var Xt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){mc||dg(dn)||console.warn("Please gsap.registerPlugin(Observer)"),Eo||hg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,_=n.event,g=n.onDragStart,p=n.onDragEnd,x=n.onDrag,v=n.onPress,y=n.onRelease,E=n.onRight,M=n.onLeft,b=n.onUp,L=n.onDown,S=n.onChangeX,T=n.onChangeY,P=n.onChange,N=n.onToggleX,X=n.onToggleY,D=n.onHover,U=n.onHoverEnd,B=n.onMove,V=n.ignoreCheck,W=n.isNormalizer,F=n.onGestureStart,C=n.onGestureEnd,J=n.onWheel,ae=n.onEnable,j=n.onDisable,Y=n.onClick,ee=n.scrollSpeed,ue=n.capture,fe=n.allowClicks,Ae=n.lockAxis,Ie=n.onLockAxis;this.target=a=Nn(a)||Ar,this.vars=n,f&&(f=dn.utils.toArray(f)),i=i||1e-9,s=s||0,m=m||1,ee=ee||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Kn.getComputedStyle(To).lineHeight)||22);var Me,De,O,te,K,le,Q,z=this,_e=0,R=0,w=n.passive||!u&&n.passive!==!1,H=kr(a,Dn),se=kr(a,en),oe=H(),ie=se(),ye=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ai[0]==="pointerdown",ve=wa(a),de=a.ownerDocument||wr,Re=[0,0,0],Ve=[0,0,0],re=0,lt=function(){return re=Ea()},Oe=function(Te,Fe){return(z.event=Te)&&f&&Mx(Te.target,f)||Fe&&ye&&Te.pointerType!=="touch"||V&&V(Te,Fe)},$e=function(){z._vx.reset(),z._vy.reset(),De.pause(),h&&h(z)},Pe=function(){var Te=z.deltaX=Ef(Re),Fe=z.deltaY=Ef(Ve),ce=Math.abs(Te)>=i,Ge=Math.abs(Fe)>=i;P&&(ce||Ge)&&P(z,Te,Fe,Re,Ve),ce&&(E&&z.deltaX>0&&E(z),M&&z.deltaX<0&&M(z),S&&S(z),N&&z.deltaX<0!=_e<0&&N(z),_e=z.deltaX,Re[0]=Re[1]=Re[2]=0),Ge&&(L&&z.deltaY>0&&L(z),b&&z.deltaY<0&&b(z),T&&T(z),X&&z.deltaY<0!=R<0&&X(z),R=z.deltaY,Ve[0]=Ve[1]=Ve[2]=0),(te||O)&&(B&&B(z),O&&(g&&O===1&&g(z),x&&x(z),O=0),te=!1),le&&!(le=!1)&&Ie&&Ie(z),K&&(J(z),K=!1),Me=0},Se=function(Te,Fe,ce){Re[ce]+=Te,Ve[ce]+=Fe,z._vx.update(Te),z._vy.update(Fe),c?Me||(Me=requestAnimationFrame(Pe)):Pe()},qe=function(Te,Fe){Ae&&!Q&&(z.axis=Q=Math.abs(Te)>Math.abs(Fe)?"x":"y",le=!0),Q!=="y"&&(Re[2]+=Te,z._vx.update(Te,!0)),Q!=="x"&&(Ve[2]+=Fe,z._vy.update(Fe,!0)),c?Me||(Me=requestAnimationFrame(Pe)):Pe()},nt=function(Te){if(!Oe(Te,1)){Te=ea(Te,u);var Fe=Te.clientX,ce=Te.clientY,Ge=Fe-z.x,ze=ce-z.y,Ze=z.isDragging;z.x=Fe,z.y=ce,(Ze||(Ge||ze)&&(Math.abs(z.startX-Fe)>=s||Math.abs(z.startY-ce)>=s))&&(O||(O=Ze?2:1),Ze||(z.isDragging=!0),qe(Ge,ze))}},ft=z.onPress=function(Le){Oe(Le,1)||Le&&Le.button||(z.axis=Q=null,De.pause(),z.isPressed=!0,Le=ea(Le),_e=R=0,z.startX=z.x=Le.clientX,z.startY=z.y=Le.clientY,z._vx.reset(),z._vy.reset(),An(W?a:de,Ai[1],nt,w,!0),z.deltaX=z.deltaY=0,v&&v(z))},be=z.onRelease=function(Le){if(!Oe(Le,1)){En(W?a:de,Ai[1],nt,!0);var Te=!isNaN(z.y-z.startY),Fe=z.isDragging,ce=Fe&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Ge=ea(Le);!ce&&Te&&(z._vx.reset(),z._vy.reset(),u&&fe&&dn.delayedCall(.08,function(){if(Ea()-re>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(de.createEvent){var ze=de.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,Kn,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(ze)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,h&&Fe&&!W&&De.restart(!0),O&&Pe(),p&&Fe&&p(z),y&&y(z,ce)}},he=function(Te){return Te.touches&&Te.touches.length>1&&(z.isGesturing=!0)&&F(Te,z.isDragging)},k=function(){return(z.isGesturing=!1)||C(z)},pe=function(Te){if(!Oe(Te)){var Fe=H(),ce=se();Se((Fe-oe)*ee,(ce-ie)*ee,1),oe=Fe,ie=ce,h&&De.restart(!0)}},me=function(Te){if(!Oe(Te)){Te=ea(Te,u),J&&(K=!0);var Fe=(Te.deltaMode===1?l:Te.deltaMode===2?Kn.innerHeight:1)*m;Se(Te.deltaX*Fe,Te.deltaY*Fe,0),h&&!W&&De.restart(!0)}},He=function(Te){if(!Oe(Te)){var Fe=Te.clientX,ce=Te.clientY,Ge=Fe-z.x,ze=ce-z.y;z.x=Fe,z.y=ce,te=!0,h&&De.restart(!0),(Ge||ze)&&qe(Ge,ze)}},Be=function(Te){z.event=Te,D(z)},ct=function(Te){z.event=Te,U(z)},dt=function(Te){return Oe(Te)||ea(Te,u)&&Y(z)};De=z._dc=dn.delayedCall(d||.25,$e).pause(),z.deltaX=z.deltaY=0,z._vx=kh(0,50,!0),z._vy=kh(0,50,!0),z.scrollX=H,z.scrollY=se,z.isDragging=z.isGesturing=z.isPressed=!1,lg(this),z.enable=function(Le){return z.isEnabled||(An(ve?de:a,"scroll",Bh),o.indexOf("scroll")>=0&&An(ve?de:a,"scroll",pe,w,ue),o.indexOf("wheel")>=0&&An(a,"wheel",me,w,ue),(o.indexOf("touch")>=0&&og||o.indexOf("pointer")>=0)&&(An(a,Ai[0],ft,w,ue),An(de,Ai[2],be),An(de,Ai[3],be),fe&&An(a,"click",lt,!0,!0),Y&&An(a,"click",dt),F&&An(de,"gesturestart",he),C&&An(de,"gestureend",k),D&&An(a,ns+"enter",Be),U&&An(a,ns+"leave",ct),B&&An(a,ns+"move",He)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=te=O=!1,z._vx.reset(),z._vy.reset(),oe=H(),ie=se(),Le&&Le.type&&ft(Le),ae&&ae(z)),z},z.disable=function(){z.isEnabled&&(po.filter(function(Le){return Le!==z&&wa(Le.target)}).length||En(ve?de:a,"scroll",Bh),z.isPressed&&(z._vx.reset(),z._vy.reset(),En(W?a:de,Ai[1],nt,!0)),En(ve?de:a,"scroll",pe,ue),En(a,"wheel",me,ue),En(a,Ai[0],ft,ue),En(de,Ai[2],be),En(de,Ai[3],be),En(a,"click",lt,!0),En(a,"click",dt),En(de,"gesturestart",he),En(de,"gestureend",k),En(a,ns+"enter",Be),En(a,ns+"leave",ct),En(a,ns+"move",He),z.isEnabled=z.isPressed=z.isDragging=!1,j&&j(z))},z.kill=z.revert=function(){z.disable();var Le=po.indexOf(z);Le>=0&&po.splice(Le,1),rr===z&&(rr=0)},po.push(z),W&&wa(a)&&(rr=z),z.enable(_)},bx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Xt.version="3.15.0";Xt.create=function(r){return new Xt(r)};Xt.register=dg;Xt.getAll=function(){return po.slice()};Xt.getById=function(r){return po.filter(function(e){return e.vars.id===r})[0]};cg()&&dn.registerPlugin(Xt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,ao,rt,_t,Zn,pt,Cd,Nc,ja,Aa,ga,ml,_n,au,zh,Pn,wf,Af,lo,fg,Pu,pg,Rn,Vh,mg,gg,br,Hh,Rd,wo,Pd,Ca,Gh,Lu,gl=1,xn=Date.now,Iu=xn(),_i=0,_a=0,Cf=function(e,t,n){var i=qn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Rf=function(e,t){return t&&(!qn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Tx=function r(){return _a&&requestAnimationFrame(r)},Pf=function(){return au=1},Lf=function(){return au=0},Ii=function(e){return e},va=function(e){return Math.round(e*1e5)/1e5||0},_g=function(){return typeof window<"u"},vg=function(){return Ee||_g()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},bs=function(e){return!!~Cd.indexOf(e)},xg=function(e){return(e==="Height"?Pd:rt["inner"+e])||Zn["client"+e]||pt["client"+e]},yg=function(e){return Dr(e,"getBoundingClientRect")||(bs(e)?function(){return yc.width=rt.innerWidth,yc.height=Pd,yc}:function(){return ir(e)})},Ex=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Dr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?xg(s):e["client"+s])||0}},wx=function(e,t){return!t||~ki.indexOf(e)?yg(e):function(){return yc}},Bi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Dr(e,n))?o()-yg(e)()[s]:bs(e)?(Zn[n]||pt[n])-xg(i):e[n]-e["offset"+i])},_l=function(e,t){for(var n=0;n<lo.length;n+=3)(!t||~t.indexOf(lo[n+1]))&&e(lo[n],lo[n+1],lo[n+2])},qn=function(e){return typeof e=="string"},bn=function(e){return typeof e=="function"},xa=function(e){return typeof e=="number"},is=function(e){return typeof e=="object"},ta=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ls=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Is=Math.abs,bg="left",Sg="top",Ld="right",Id="bottom",ps="width",ms="height",Ra="Right",Pa="Left",La="Top",Ia="Bottom",$t="padding",ci="margin",Fo="Width",Dd="Height",Kt="px",ui=function(e){return rt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Ax=function(e){var t=ui(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},If=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ir=function(e,t){var n=t&&ui(e)[zh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Uc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Mg=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Cx=function(e){return function(t){return Ee.utils.snap(Mg(e),t)}},Nd=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Rx=function(e){return function(t,n){return Nd(Mg(e))(t,n.direction)}},vl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Df={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},yl={toggleActions:"play",anticipatePin:0},Oc={top:0,left:0,center:.5,bottom:1,right:1},gc=function(e,t){if(qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Oc?Oc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},bl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,m=_t.createElement("div"),_=bs(n)||Dr(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=_?pt:n.tagName==="IFRAME"?n.contentDocument.body:n,x=e.indexOf("start")!==-1,v=x?c:u,y="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(y+=(i===en?Ld:Id)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=x,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=y,m.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+i.op.d2],_c(m,0,i,x),m},_c=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Fo]=1,s["border"+a+Fo]=0,s[n.p]=t+"px",Ee.set(e,s)},tt=[],Wh={},Za,Nf=function(){return xn()-_i>34&&(Za||(Za=requestAnimationFrame(ar)))},Ds=function(){(!Rn||!Rn.isPressed||Rn.startX>pt.clientWidth)&&(ot.cache++,Rn?Za||(Za=requestAnimationFrame(ar)):ar(),_i||Ms("scrollStart"),_i=xn())},Du=function(){gg=rt.innerWidth,mg=rt.innerHeight},ya=function(e){ot.cache++,(e===!0||!_n&&!pg&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!Vh||gg!==rt.innerWidth||Math.abs(rt.innerHeight-mg)>rt.innerHeight*.25))&&Nc.restart(!0)},Ss={},Px=[],Tg=function r(){return ln(Qe,"scrollEnd",r)||cs(!0)},Ms=function(e){return Ss[e]&&Ss[e].map(function(t){return t()})||Px},$n=[],Eg=function(e){for(var t=0;t<$n.length;t+=5)(!e||$n[t+4]&&$n[t+4].query===e)&&($n[t].style.cssText=$n[t+1],$n[t].getBBox&&$n[t].setAttribute("transform",$n[t+2]||""),$n[t+3].uncache=1)},wg=function(){return ot.forEach(function(e){return bn(e)&&++e.cacheID&&(e.rec=e())})},Ud=function(e,t){var n;for(Pn=0;Pn<tt.length;Pn++)n=tt[Pn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ca=!0,t&&Eg(t),t||Ms("revert")},Ag=function(e,t){ot.cache++,(t||!Ln)&&ot.forEach(function(n){return bn(n)&&n.cacheID++&&(n.rec=0)}),qn(e)&&(rt.history.scrollRestoration=Rd=e)},Ln,gs=0,Uf,Lx=function(){if(Uf!==gs){var e=Uf=gs;requestAnimationFrame(function(){return e===gs&&cs(!0)})}},Cg=function(){pt.appendChild(wo),Pd=!Rn&&wo.offsetHeight||rt.innerHeight,pt.removeChild(wo)},Of=function(e){return ja(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},cs=function(e,t){if(Zn=_t.documentElement,pt=_t.body,Cd=[rt,_t,Zn,pt],_i&&!e&&!Ca){cn(Qe,"scrollEnd",Tg);return}Cg(),Ln=Qe.isRefreshing=!0,Ca||wg();var n=Ms("refreshInit");fg&&Qe.sort(),t||Ud(),ot.forEach(function(i){bn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),Ca=!1,tt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Gh=1,Of(!0),tt.forEach(function(i){var s=Bi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Of(!1),Gh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ot.forEach(function(i){bn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Ag(Rd,1),Nc.pause(),gs++,Ln=2,ar(2),tt.forEach(function(i){return bn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ln=Qe.isRefreshing=!1,Ms("refresh")},Xh=0,vc=1,Da,ar=function(e){if(e===2||!Ln&&!Ca){Qe.isUpdating=!0,Da&&Da.update(0);var t=tt.length,n=xn(),i=n-Iu>=50,s=t&&tt[0].scroll();if(vc=Xh>s?-1:1,Ln||(Xh=s),i&&(_i&&!au&&n-_i>200&&(_i=0,Ms("scrollEnd")),ga=Iu,Iu=n),vc<0){for(Pn=t;Pn-- >0;)tt[Pn]&&tt[Pn].update(0,i);vc=1}else for(Pn=0;Pn<t;Pn++)tt[Pn]&&tt[Pn].update(0,i);Qe.isUpdating=!1}Za=0},Yh=[bg,Sg,Id,Ld,ci+Ia,ci+Ra,ci+La,ci+Pa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],xc=Yh.concat([ps,ms,"boxSizing","max"+Fo,"max"+Dd,"position",ci,$t,$t+La,$t+Ra,$t+Ia,$t+Pa]),Ix=function(e,t,n){Ao(n);var i=e._gsap;if(i.spacerIsNative)Ao(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Nu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Yh.length,o=t.style,a=e.style,l;s--;)l=Yh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Id]=a[Ld]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ps]=Uc(e,Dn)+Kt,o[ms]=Uc(e,en)+Kt,o[$t]=a[ci]=a[Sg]=a[bg]="0",Ao(i),a[ps]=a["max"+Fo]=n[ps],a[ms]=a["max"+Dd]=n[ms],a[$t]=n[$t],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Dx=/([A-Z])/g,Ao=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Dx,"-$1").toLowerCase())}},Sl=function(e){for(var t=xc.length,n=e.style,i=[],s=0;s<t;s++)i.push(xc[s],n[xc[s]]);return i.t=e,i},Nx=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},yc={left:0,top:0},Ff=function(e,t,n,i,s,o,a,l,c,u,h,d,f,m){bn(e)&&(e=e(l)),qn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?gc("0"+e.substr(3),n):0));var _=f?f.time():0,g,p,x;if(f&&f.seek(0),isNaN(e)||(e=+e),xa(e))f&&(e=Ee.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&_c(a,n,i,!0);else{bn(t)&&(t=t(l));var v=(e||"0").split(" "),y,E,M,b;x=Nn(t,l)||pt,y=ir(x)||{},(!y||!y.left&&!y.top)&&ui(x).display==="none"&&(b=x.style.display,x.style.display="block",y=ir(x),b?x.style.display=b:x.style.removeProperty("display")),E=gc(v[0],y[i.d]),M=gc(v[1]||"0",n),e=y[i.p]-c[i.p]-u+E+s-M,a&&_c(a,M,i,n-M<20||a._isStart&&M>20),n-=n-M}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var L=e+n,S=o._isStart;g="scroll"+i.d2,_c(o,L,i,S&&L>20||!S&&(h?Math.max(pt[g],Zn[g]):o.parentNode[g])<=L+1),h&&(c=ir(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Kt))}return f&&x&&(g=ir(x),f.seek(d),p=ir(x),f._caScrollDist=g[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},Ux=/(webkit|moz|length|cssText|inset)/i,Bf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=ui(e);for(o in a)!+o&&!Ux.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},Rg=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Ml=function(e,t,n){var i={};i[t.p]="+="+n,Ee.set(e,i)},kf=function(e,t){var n=kr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,m={};c=c||n();var _=Rg(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ot.cache++,o.tween&&ar()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Ee.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(e,"wheel",n.wheelHandler),Qe.isTouch&&cn(e,"touchmove",n.wheelHandler),s},Qe=function(){function r(t,n){ao||r.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Hh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_a){this.update=this.refresh=this.kill=Ii;return}n=If(qn(n)||xa(n)||n.nodeType?{trigger:n}:n,yl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,v=s.once,y=s.snap,E=s.pinReparent,M=s.pinSpacer,b=s.containerAnimation,L=s.fastScrollEnd,S=s.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Dn:en,P=!h&&h!==0,N=Nn(n.scroller||rt),X=Ee.core.getCache(N),D=bs(N),U=("pinType"in n?n.pinType:Dr(N,"pinType")||D&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],V=P&&n.toggleActions.split(" "),W="markers"in n?n.markers:yl.markers,F=D?0:parseFloat(ui(N)["border"+T.p2+Fo])||0,C=this,J=n.onRefreshInit&&function(){return n.onRefreshInit(C)},ae=Ex(N,D,T),j=wx(N,D),Y=0,ee=0,ue=0,fe=kr(N,T),Ae,Ie,Me,De,O,te,K,le,Q,z,_e,R,w,H,se,oe,ie,ye,ve,de,Re,Ve,re,lt,Oe,$e,Pe,Se,qe,nt,ft,be,he,k,pe,me,He,Be,ct;if(C._startClamp=C._endClamp=!1,C._dir=T,g*=45,C.scroller=N,C.scroll=b?b.time.bind(b):fe,De=fe(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(fg=1,n.refreshPriority===-9999&&(Da=C)),X.tweenScroll=X.tweenScroll||{top:kf(N,en),left:kf(N,Dn)},C.tweenTo=Ae=X.tweenScroll[T.p],C.scrubDuration=function(ce){he=xa(ce)&&ce,he?be?be.duration(ce):be=Ee.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:he,paused:!0,onComplete:function(){return p&&p(C)}}):(be&&be.progress(1).kill(),be=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),nt=0,l||(l=i.vars.id)),y&&((!is(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in pt.style&&Ee.set(D?[pt,Zn]:N,{scrollBehavior:"auto"}),ot.forEach(function(ce){return bn(ce)&&ce.target===(D?_t.scrollingElement||Zn:N)&&(ce.smooth=!1)}),Me=bn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Cx(i):y.snapTo==="labelsDirectional"?Rx(i):y.directional!==!1?function(ce,Ge){return Nd(y.snapTo)(ce,xn()-ee<500?0:Ge.direction)}:Ee.utils.snap(y.snapTo),k=y.duration||{min:.1,max:2},k=is(k)?Aa(k.min,k.max):Aa(k,k),pe=Ee.delayedCall(y.delay||he/2||.1,function(){var ce=fe(),Ge=xn()-ee<500,ze=Ae.tween;if((Ge||Math.abs(C.getVelocity())<10)&&!ze&&!au&&Y!==ce){var Ze=(ce-te)/H,Nt=i&&!P?i.totalProgress():Ze,it=Ge?0:(Nt-ft)/(xn()-ga)*1e3||0,Et=Ee.utils.clamp(-Ze,1-Ze,Is(it/2)*it/.185),Zt=Ze+(y.inertia===!1?0:Et),Ct,wt,mt=y,Gn=mt.onStart,A=mt.onInterrupt,G=mt.onComplete;if(Ct=Me(Zt,C),xa(Ct)||(Ct=Zt),wt=Math.max(0,Math.round(te+Ct*H)),ce<=K&&ce>=te&&wt!==ce){if(ze&&!ze._initted&&ze.data<=Is(wt-ce))return;y.inertia===!1&&(Et=Ct-Ze),Ae(wt,{duration:k(Is(Math.max(Is(Zt-Nt),Is(Ct-Nt))*.185/it/.05||0)),ease:y.ease||"power3",data:Is(wt-ce),onInterrupt:function(){return pe.restart(!0)&&A&&Ls(C,A)},onComplete:function(){C.update(),Y=fe(),i&&!P&&(be?be.resetTo("totalProgress",Ct,i._tTime/i._tDur):i.progress(Ct)),nt=ft=i&&!P?i.totalProgress():C.progress,x&&x(C),G&&Ls(C,G)}},ce,Et*H,wt-ce-Et*H),Gn&&Ls(C,Gn,Ae.tween)}}else C.isActive&&Y!==ce&&pe.restart(!0)}).pause()),l&&(Wh[l]=C),d=C.trigger=Nn(d||f!==!0&&f),ct=d&&d._gsap&&d._gsap.stRevert,ct&&(ct=ct(C)),f=f===!0?d:Nn(f),qn(a)&&(a={targets:d,className:a}),f&&(m===!1||m===ci||(m=!m&&f.parentNode&&f.parentNode.style&&ui(f.parentNode).display==="flex"?!1:$t),C.pin=f,Ie=Ee.core.getCache(f),Ie.spacer?se=Ie.pinState:(M&&(M=Nn(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),Ie.spacerIsNative=!!M,M&&(Ie.spacerState=Sl(M))),Ie.spacer=ye=M||_t.createElement("div"),ye.classList.add("pin-spacer"),l&&ye.classList.add("pin-spacer-"+l),Ie.pinState=se=Sl(f)),n.force3D!==!1&&Ee.set(f,{force3D:!0}),C.spacer=ye=Ie.spacer,qe=ui(f),lt=qe[m+T.os2],de=Ee.getProperty(f),Re=Ee.quickSetter(f,T.a,Kt),Nu(f,ye,qe),ie=Sl(f)),W){R=is(W)?If(W,Df):Df,z=bl("scroller-start",l,N,T,R,0),_e=bl("scroller-end",l,N,T,R,0,z),ve=z["offset"+T.op.d2];var dt=Nn(Dr(N,"content")||N);le=this.markerStart=bl("start",l,dt,T,R,ve,0,b),Q=this.markerEnd=bl("end",l,dt,T,R,ve,0,b),b&&(Be=Ee.quickSetter([le,Q],T.a,Kt)),!U&&!(ki.length&&Dr(N,"fixedMarkers")===!0)&&(Ax(D?pt:N),Ee.set([z,_e],{force3D:!0}),$e=Ee.quickSetter(z,T.a,Kt),Se=Ee.quickSetter(_e,T.a,Kt))}if(b){var Le=b.vars.onUpdate,Te=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){C.update(0,0,1),Le&&Le.apply(b,Te||[])})}if(C.previous=function(){return tt[tt.indexOf(C)-1]},C.next=function(){return tt[tt.indexOf(C)+1]},C.revert=function(ce,Ge){if(!Ge)return C.kill(!0);var ze=ce!==!1||!C.enabled,Ze=_n;ze!==C.isReverted&&(ze&&(me=Math.max(fe(),C.scroll.rec||0),ue=C.progress,He=i&&i.progress()),le&&[le,Q,z,_e].forEach(function(Nt){return Nt.style.display=ze?"none":"block"}),ze&&(_n=C,C.update(ze)),f&&(!E||!C.isActive)&&(ze?Ix(f,ye,se):Nu(f,ye,ui(f),Oe)),ze||C.update(ze),_n=Ze,C.isReverted=ze)},C.refresh=function(ce,Ge,ze,Ze){if(!((_n||!C.enabled)&&!Ge)){if(f&&ce&&_i){cn(r,"scrollEnd",Tg);return}!Ln&&J&&J(C),_n=C,Ae.tween&&!ze&&(Ae.tween.kill(),Ae.tween=0),be&&be.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(je){return je.vars.immediateRender&&je.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Nt=ae(),it=j(),Et=b?b.duration():Bi(N,T),Zt=H<=.01||!H,Ct=0,wt=Ze||0,mt=is(ze)?ze.end:n.end,Gn=n.endTrigger||d,A=is(ze)?ze.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),G=C.pinnedContainer=n.pinnedContainer&&Nn(n.pinnedContainer,C),Z=d&&Math.max(0,tt.indexOf(C))||0,q=Z,$,ge,we,We,Ce,Ne,Xe,Je,Lt,Jt,gt,Tn,yt;for(W&&is(ze)&&(Tn=Ee.getProperty(z,T.p),yt=Ee.getProperty(_e,T.p));q-- >0;)Ne=tt[q],Ne.end||Ne.refresh(0,1)||(_n=C),Xe=Ne.pin,Xe&&(Xe===d||Xe===f||Xe===G)&&!Ne.isReverted&&(Jt||(Jt=[]),Jt.unshift(Ne),Ne.revert(!0,!0)),Ne!==tt[q]&&(Z--,q--);for(bn(A)&&(A=A(C)),A=Cf(A,"start",C),te=Ff(A,d,Nt,T,fe(),le,z,C,it,F,U,Et,b,C._startClamp&&"_startClamp")||(f?-.001:0),bn(mt)&&(mt=mt(C)),qn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(qn(A)?A.split(" ")[0]:"")+mt:(Ct=gc(mt.substr(2),Nt),mt=qn(A)?A:(b?Ee.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,te):te)+Ct,Gn=d)),mt=Cf(mt,"end",C),K=Math.max(te,Ff(mt||(Gn?"100% 0":Et),Gn,Nt,T,fe()+Ct,Q,_e,C,it,F,U,Et,b,C._endClamp&&"_endClamp"))||-.001,Ct=0,q=Z;q--;)Ne=tt[q]||{},Xe=Ne.pin,Xe&&Ne.start-Ne._pinPush<=te&&!b&&Ne.end>0&&($=Ne.end-(C._startClamp?Math.max(0,Ne.start):Ne.start),(Xe===d&&Ne.start-Ne._pinPush<te||Xe===G)&&isNaN(A)&&(Ct+=$*(1-Ne.progress)),Xe===f&&(wt+=$));if(te+=Ct,K+=Ct,C._startClamp&&(C._startClamp+=Ct),C._endClamp&&!Ln&&(C._endClamp=K||-.001,K=Math.min(K,Bi(N,T))),H=K-te||(te-=.01)&&.001,Zt&&(ue=Ee.utils.clamp(0,1,Ee.utils.normalize(te,K,me))),C._pinPush=wt,le&&Ct&&($={},$[T.a]="+="+Ct,G&&($[T.p]="-="+fe()),Ee.set([le,Q],$)),f&&!(Gh&&C.end>=Bi(N,T)))$=ui(f),We=T===en,we=fe(),Ve=parseFloat(de(T.a))+wt,!Et&&K>1&&(gt=(D?_t.scrollingElement||Zn:N).style,gt={style:gt,value:gt["overflow"+T.a.toUpperCase()]},D&&ui(pt)["overflow"+T.a.toUpperCase()]!=="scroll"&&(gt.style["overflow"+T.a.toUpperCase()]="scroll")),Nu(f,ye,$),ie=Sl(f),ge=ir(f,!0),Je=U&&kr(N,We?Dn:en)(),m?(Oe=[m+T.os2,H+wt+Kt],Oe.t=ye,q=m===$t?Uc(f,T)+H+wt:0,q&&(Oe.push(T.d,q+Kt),ye.style.flexBasis!=="auto"&&(ye.style.flexBasis=q+Kt)),Ao(Oe),G&&tt.forEach(function(je){je.pin===G&&je.vars.pinSpacing!==!1&&(je._subPinOffset=!0)}),U&&fe(me)):(q=Uc(f,T),q&&ye.style.flexBasis!=="auto"&&(ye.style.flexBasis=q+Kt)),U&&(Ce={top:ge.top+(We?we-te:Je)+Kt,left:ge.left+(We?Je:we-te)+Kt,boxSizing:"border-box",position:"fixed"},Ce[ps]=Ce["max"+Fo]=Math.ceil(ge.width)+Kt,Ce[ms]=Ce["max"+Dd]=Math.ceil(ge.height)+Kt,Ce[ci]=Ce[ci+La]=Ce[ci+Ra]=Ce[ci+Ia]=Ce[ci+Pa]="0",Ce[$t]=$[$t],Ce[$t+La]=$[$t+La],Ce[$t+Ra]=$[$t+Ra],Ce[$t+Ia]=$[$t+Ia],Ce[$t+Pa]=$[$t+Pa],oe=Nx(se,Ce,E),Ln&&fe(0)),i?(Lt=i._initted,Pu(1),i.render(i.duration(),!0,!0),re=de(T.a)-Ve+H+wt,Pe=Math.abs(H-re)>1,U&&Pe&&oe.splice(oe.length-2,2),i.render(0,!0,!0),Lt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Pu(0)):re=H,gt&&(gt.value?gt.style["overflow"+T.a.toUpperCase()]=gt.value:gt.style.removeProperty("overflow-"+T.a));else if(d&&fe()&&!b)for(ge=d.parentNode;ge&&ge!==pt;)ge._pinOffset&&(te-=ge._pinOffset,K-=ge._pinOffset),ge=ge.parentNode;Jt&&Jt.forEach(function(je){return je.revert(!1,!0)}),C.start=te,C.end=K,De=O=Ln?me:fe(),!b&&!Ln&&(De<me&&fe(me),C.scroll.rec=0),C.revert(!1,!0),ee=xn(),pe&&(Y=-1,pe.restart(!0)),_n=0,i&&P&&(i._initted||He)&&i.progress()!==He&&i.progress(He||0,!0).render(i.time(),!0,!0),(Zt||ue!==C.progress||b||_||i&&!i._initted)&&(i&&!P&&(i._initted||ue||i.vars.immediateRender!==!1)&&i.totalProgress(b&&te<-.001&&!ue?Ee.utils.normalize(te,K,0):ue,!0),C.progress=Zt||(De-te)/H===ue?0:ue),f&&m&&(ye._pinOffset=Math.round(C.progress*re)),be&&be.invalidate(),isNaN(Tn)||(Tn-=Ee.getProperty(z,T.p),yt-=Ee.getProperty(_e,T.p),Ml(z,T,Tn),Ml(le,T,Tn-(Ze||0)),Ml(_e,T,yt),Ml(Q,T,yt-(Ze||0))),Zt&&!Ln&&C.update(),u&&!Ln&&!w&&(w=!0,u(C),w=!1)}},C.getVelocity=function(){return(fe()-O)/(xn()-ga)*1e3||0},C.endAnimation=function(){ta(C.callbackAnimation),i&&(be?be.progress(1):i.paused()?P||ta(i,C.direction<0,1):ta(i,i.reversed()))},C.labelToScroll=function(ce){return i&&i.labels&&(te||C.refresh()||te)+i.labels[ce]/i.duration()*H||0},C.getTrailing=function(ce){var Ge=tt.indexOf(C),ze=C.direction>0?tt.slice(0,Ge).reverse():tt.slice(Ge+1);return(qn(ce)?ze.filter(function(Ze){return Ze.vars.preventOverlaps===ce}):ze).filter(function(Ze){return C.direction>0?Ze.end<=te:Ze.start>=K})},C.update=function(ce,Ge,ze){if(!(b&&!ze&&!ce)){var Ze=Ln===!0?me:C.scroll(),Nt=ce?0:(Ze-te)/H,it=Nt<0?0:Nt>1?1:Nt||0,Et=C.progress,Zt,Ct,wt,mt,Gn,A,G,Z;if(Ge&&(O=De,De=b?fe():Ze,y&&(ft=nt,nt=i&&!P?i.totalProgress():it)),g&&f&&!_n&&!gl&&_i&&(!it&&te<Ze+(Ze-O)/(xn()-ga)*g?it=1e-4:it===1&&K>Ze+(Ze-O)/(xn()-ga)*g&&(it=.9999)),it!==Et&&C.enabled){if(Zt=C.isActive=!!it&&it<1,Ct=!!Et&&Et<1,A=Zt!==Ct,Gn=A||!!it!=!!Et,C.direction=it>Et?1:-1,C.progress=it,Gn&&!_n&&(wt=it&&!Et?0:it===1?1:Et===1?2:3,P&&(mt=!A&&V[wt+1]!=="none"&&V[wt+1]||V[wt],Z=i&&(mt==="complete"||mt==="reset"||mt in i))),S&&(A||Z)&&(Z||h||!i)&&(bn(S)?S(C):C.getTrailing(S).forEach(function(we){return we.endAnimation()})),P||(be&&!_n&&!gl?(be._dp._time-be._start!==be._time&&be.render(be._dp._time-be._start),be.resetTo?be.resetTo("totalProgress",it,i._tTime/i._tDur):(be.vars.totalProgress=it,be.invalidate().restart())):i&&i.totalProgress(it,!!(_n&&(ee||ce)))),f){if(ce&&m&&(ye.style[m+T.os2]=lt),!U)Re(va(Ve+re*it));else if(Gn){if(G=!ce&&it>Et&&K+1>Ze&&Ze+1>=Bi(N,T),E)if(!ce&&(Zt||G)){var q=ir(f,!0),$=Ze-te;Bf(f,pt,q.top+(T===en?$:0)+Kt,q.left+(T===en?0:$)+Kt)}else Bf(f,ye);Ao(Zt||G?oe:ie),Pe&&it<1&&Zt||Re(Ve+(it===1&&!G?re:0))}}y&&!Ae.tween&&!_n&&!gl&&pe.restart(!0),a&&(A||v&&it&&(it<1||!Lu))&&ja(a.targets).forEach(function(we){return we.classList[Zt||v?"add":"remove"](a.className)}),o&&!P&&!ce&&o(C),Gn&&!_n?(P&&(Z&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),o&&o(C)),(A||!Lu)&&(c&&A&&Ls(C,c),B[wt]&&Ls(C,B[wt]),v&&(it===1?C.kill(!1,1):B[wt]=0),A||(wt=it===1?1:3,B[wt]&&Ls(C,B[wt]))),L&&!Zt&&Math.abs(C.getVelocity())>(xa(L)?L:2500)&&(ta(C.callbackAnimation),be?be.progress(1):ta(i,mt==="reverse"?1:!it,1))):P&&o&&!_n&&o(C)}if(Se){var ge=b?Ze/b.duration()*(b._caScrollDist||0):Ze;$e(ge+(z._isFlipped?1:0)),Se(ge)}Be&&Be(-Ze/b.duration()*(b._caScrollDist||0))}},C.enable=function(ce,Ge){C.enabled||(C.enabled=!0,cn(N,"resize",ya),D||cn(N,"scroll",Ds),J&&cn(r,"refreshInit",J),ce!==!1&&(C.progress=ue=0,De=O=Y=fe()),Ge!==!1&&C.refresh())},C.getTween=function(ce){return ce&&Ae?Ae.tween:be},C.setPositions=function(ce,Ge,ze,Ze){if(b){var Nt=b.scrollTrigger,it=b.duration(),Et=Nt.end-Nt.start;ce=Nt.start+Et*ce/it,Ge=Nt.start+Et*Ge/it}C.refresh(!1,!1,{start:Rf(ce,ze&&!!C._startClamp),end:Rf(Ge,ze&&!!C._endClamp)},Ze),C.update()},C.adjustPinSpacing=function(ce){if(Oe&&ce){var Ge=Oe.indexOf(T.d)+1;Oe[Ge]=parseFloat(Oe[Ge])+ce+Kt,Oe[1]=parseFloat(Oe[1])+ce+Kt,Ao(Oe)}},C.disable=function(ce,Ge){if(ce!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Ge||be&&be.pause(),me=0,Ie&&(Ie.uncache=1),J&&ln(r,"refreshInit",J),pe&&(pe.pause(),Ae.tween&&Ae.tween.kill()&&(Ae.tween=0)),!D)){for(var ze=tt.length;ze--;)if(tt[ze].scroller===N&&tt[ze]!==C)return;ln(N,"resize",ya),D||ln(N,"scroll",Ds)}},C.kill=function(ce,Ge){C.disable(ce,Ge),be&&!Ge&&be.kill(),l&&delete Wh[l];var ze=tt.indexOf(C);ze>=0&&tt.splice(ze,1),ze===Pn&&vc>0&&Pn--,ze=0,tt.forEach(function(Ze){return Ze.scroller===C.scroller&&(ze=1)}),ze||Ln||(C.scroll.rec=0),i&&(i.scrollTrigger=null,ce&&i.revert({kill:!1}),Ge||i.kill()),le&&[le,Q,z,_e].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),Da===C&&(Da=0),f&&(Ie&&(Ie.uncache=1),ze=0,tt.forEach(function(Ze){return Ze.pin===f&&ze++}),ze||(Ie.spacer=0)),n.onKill&&n.onKill(C)},tt.push(C),C.enable(!1,!1),ct&&ct(C),i&&i.add&&!H){var Fe=C.update;C.update=function(){C.update=Fe,ot.cache++,te||K||C.refresh()},Ee.delayedCall(.01,C.update),H=.01,te=K=0}else C.refresh();f&&Lx()},r.register=function(n){return ao||(Ee=n||vg(),_g()&&window.document&&r.enable(),ao=_a),ao},r.defaults=function(n){if(n)for(var i in n)yl[i]=n[i];return yl},r.disable=function(n,i){_a=0,tt.forEach(function(o){return o[i?"kill":"disable"](n)}),ln(rt,"wheel",Ds),ln(_t,"scroll",Ds),clearInterval(ml),ln(_t,"touchcancel",Ii),ln(pt,"touchstart",Ii),vl(ln,_t,"pointerdown,touchstart,mousedown",Pf),vl(ln,_t,"pointerup,touchend,mouseup",Lf),Nc.kill(),_l(ln);for(var s=0;s<ot.length;s+=3)xl(ln,ot[s],ot[s+1]),xl(ln,ot[s],ot[s+2])},r.enable=function(){if(rt=window,_t=document,Zn=_t.documentElement,pt=_t.body,Ee){if(ja=Ee.utils.toArray,Aa=Ee.utils.clamp,Hh=Ee.core.context||Ii,Pu=Ee.core.suppressOverwrites||Ii,Rd=rt.history.scrollRestoration||"auto",Xh=rt.pageYOffset||0,Ee.core.globals("ScrollTrigger",r),pt){_a=1,wo=document.createElement("div"),wo.style.height="100vh",wo.style.position="absolute",Cg(),Tx(),Xt.register(Ee),r.isTouch=Xt.isTouch,br=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Vh=Xt.isTouch===1,cn(rt,"wheel",Ds),Cd=[rt,_t,Zn,pt],Ee.matchMedia?(r.matchMedia=function(u){var h=Ee.matchMedia(),d;for(d in u)h.add(d,u[d]);return h},Ee.addEventListener("matchMediaInit",function(){wg(),Ud()}),Ee.addEventListener("matchMediaRevert",function(){return Eg()}),Ee.addEventListener("matchMedia",function(){cs(0,1),Ms("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return Du(),Du})):console.warn("Requires GSAP 3.11.0 or later"),Du(),cn(_t,"scroll",Ds);var n=pt.hasAttribute("style"),i=pt.style,s=i.borderTopStyle,o=Ee.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ir(pt),en.m=Math.round(a.top+en.sc())||0,Dn.m=Math.round(a.left+Dn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(pt.setAttribute("style",""),pt.removeAttribute("style")),ml=setInterval(Nf,250),Ee.delayedCall(.5,function(){return gl=0}),cn(_t,"touchcancel",Ii),cn(pt,"touchstart",Ii),vl(cn,_t,"pointerdown,touchstart,mousedown",Pf),vl(cn,_t,"pointerup,touchend,mouseup",Lf),zh=Ee.utils.checkPrefix("transform"),xc.push(zh),ao=xn(),Nc=Ee.delayedCall(.2,cs).pause(),lo=[_t,"visibilitychange",function(){var u=rt.innerWidth,h=rt.innerHeight;_t.hidden?(wf=u,Af=h):(wf!==u||Af!==h)&&ya()},_t,"DOMContentLoaded",cs,rt,"load",cs,rt,"resize",ya],_l(cn),tt.forEach(function(u){return u.enable(0,1)}),l=0;l<ot.length;l+=3)xl(ln,ot[l],ot[l+1]),xl(ln,ot[l],ot[l+2])}else if(_t){var c=function u(){r.enable(),_t.removeEventListener("DOMContentLoaded",u)};_t.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Lu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ml)||(ml=i)&&setInterval(Nf,i),"ignoreMobileResize"in n&&(Vh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(_l(ln)||_l(cn,n.autoRefreshEvents||"none"),pg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Nn(n),o=ot.indexOf(s),a=bs(s);~o&&ot.splice(o,a?6:2),i&&(a?ki.unshift(rt,i,pt,i,Zn,i):ki.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(qn(n)?Nn(n):n).getBoundingClientRect(),a=o[s?ps:ms]*i||0;return s?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},r.positionInViewport=function(n,i,s){qn(n)&&(n=Nn(n));var o=n.getBoundingClientRect(),a=o[s?ps:ms],l=i==null?a/2:i in Oc?Oc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},r.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ss.killAll||[];Ss={},i.forEach(function(s){return s()})}},r}();Qe.version="3.15.0";Qe.saveStyles=function(r){return r?ja(r).forEach(function(e){if(e&&e.style){var t=$n.indexOf(e);t>=0&&$n.splice(t,5),$n.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),Hh())}}):$n};Qe.revert=function(r,e){return Ud(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?ya(!0):(ao||Qe.register())&&cs(!0)};Qe.update=function(r){return++ot.cache&&ar(r===!0?2:0)};Qe.clearScrollMemory=Ag;Qe.maxScroll=function(r,e){return Bi(r,e?Dn:en)};Qe.getScrollFunc=function(r,e){return kr(Nn(r),e?Dn:en)};Qe.getById=function(r){return Wh[r]};Qe.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!_i};Qe.snapDirectional=Nd;Qe.addEventListener=function(r,e){var t=Ss[r]||(Ss[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=Ss[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=Ee.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(m){h.length||f.restart(!0),h.push(m.trigger),d.push(m),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&bn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return bn(s)&&(s=s(),cn(Qe,"refresh",function(){return s=e.batchMax()})),ja(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Qe.create(c))}),t};var zf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Uu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===Zn&&r(pt,t)},Tl={auto:1,scroll:1},Ox=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=xn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Tl[(l=ui(s)).overflowY]||Tl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!bs(s)&&(Tl[(l=ui(s)).overflowY]||Tl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Pg=function(e,t,n,i){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Ox,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&cn(_t,Xt.eventTypes[0],Hf,!1,!0)},onDisable:function(){return ln(_t,Xt.eventTypes[0],Hf,!0)}})},Fx=/(input|label|select|textarea)/i,Vf,Hf=function(e){var t=Fx.test(e.target.tagName);(t||Vf)&&(e._gsapAllow=!0,Vf=t)},Bx=function(e){is(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Nn(e.target)||Zn,u=Ee.core.globals().ScrollSmoother,h=u&&u.get(),d=br&&(e.content&&Nn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=kr(c,en),m=kr(c,Dn),_=1,g=(Xt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,p=0,x=bn(i)?function(){return i(a)}:function(){return i||2.8},v,y,E=Pg(c,e.type,!0,s),M=function(){return y=!1},b=Ii,L=Ii,S=function(){l=Bi(c,en),L=Aa(br?1:0,l),n&&(b=Aa(0,Bi(c,Dn))),v=gs},T=function(){d._gsap.y=va(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(y){requestAnimationFrame(M);var W=va(a.deltaY/2),F=L(f.v-W);if(d&&F!==f.v+f.offset){f.offset=F-f.v;var C=va((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",d._gsap.y=C+"px",f.cacheID=ot.cache,ar()}return!0}f.offset&&T(),y=!0},N,X,D,U,B=function(){S(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return d&&Ee.set(d,{y:"+=0"}),e.ignoreCheck=function(V){return br&&V.type==="touchmove"&&P()||_>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){y=!1;var V=_;_=va((rt.visualViewport&&rt.visualViewport.scale||1)/g),N.pause(),V!==_&&Uu(c,_>1.01?!0:n?!1:"x"),X=m(),D=f(),S(),v=gs},e.onRelease=e.onGestureStart=function(V,W){if(f.offset&&T(),!W)U.restart(!0);else{ot.cache++;var F=x(),C,J;n&&(C=m(),J=C+F*.05*-V.velocityX/.227,F*=zf(m,C,J,Bi(c,Dn)),N.vars.scrollX=b(J)),C=f(),J=C+F*.05*-V.velocityY/.227,F*=zf(f,C,J,Bi(c,en)),N.vars.scrollY=L(J),N.invalidate().duration(F).play(.01),(br&&N.vars.scrollY>=l||C>=l-1)&&Ee.to({},{onUpdate:B,duration:F})}o&&o(V)},e.onWheel=function(){N._ts&&N.pause(),xn()-p>1e3&&(v=0,p=xn())},e.onChange=function(V,W,F,C,J){if(gs!==v&&S(),W&&n&&m(b(C[2]===W?X+(V.startX-V.x):m()+W-C[1])),F){f.offset&&T();var ae=J[2]===F,j=ae?D+V.startY-V.y:f()+F-J[1],Y=L(j);ae&&j!==Y&&(D+=Y-j),f(Y)}(F||W)&&ar()},e.onEnable=function(){Uu(c,n?!1:"x"),Qe.addEventListener("refresh",B),cn(rt,"resize",B),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),E.enable()},e.onDisable=function(){Uu(c,!0),ln(rt,"resize",B),Qe.removeEventListener("refresh",B),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=br,br&&!f()&&f(1),br&&Ee.ticker.add(Ii),U=a._dc,N=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Rg(f,f(),function(){return N.pause()})},onUpdate:ar,onComplete:U.vars.onComplete}),a};Qe.sort=function(r){if(bn(r))return tt.sort(r);var e=rt.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),tt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new Xt(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return Rn;if(r===!0&&Rn)return Rn.enable();if(r===!1){Rn&&Rn.kill(),Rn=r;return}var e=r instanceof Xt?r:Bx(r);return Rn&&Rn.target===e.target&&Rn.kill(),bs(e.target)&&(Rn=e),e};Qe.core={_getVelocityProp:kh,_inputObserver:Pg,_scrollers:ot,_proxies:ki,bridge:{ss:function(){_i||Ms("scrollStart"),_i=xn()},ref:function(){return _n}}};vg()&&Ee.registerPlugin(Qe);var Gf="1.3.25";function Lg(r,e,t){return Math.max(r,Math.min(e,t))}function kx(r,e,t){return(1-t)*r+t*e}function zx(r,e,t,n){return kx(r,e,1-Math.exp(-t*n))}function Vx(r,e){return(r%e+e)%e}var Hx=class{constructor(){Ue(this,"isRunning",!1);Ue(this,"value",0);Ue(this,"from",0);Ue(this,"to",0);Ue(this,"currentTime",0);Ue(this,"lerp");Ue(this,"duration");Ue(this,"easing");Ue(this,"onUpdate")}advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=Lg(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=zx(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Gx(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var Wx=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Ue(this,"width",0);Ue(this,"height",0);Ue(this,"scrollHeight",0);Ue(this,"scrollWidth",0);Ue(this,"debouncedResize");Ue(this,"wrapperResizeObserver");Ue(this,"contentResizeObserver");Ue(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ue(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ue(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=Gx(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Ig=class{constructor(){Ue(this,"events",{})}emit(r,...e){const t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}};const Xx=100/6,pr={passive:!1};function Wf(r,e){return r===1?Xx:r===2?e:1}var Yx=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Ue(this,"touchStart",{x:0,y:0});Ue(this,"lastDelta",{x:0,y:0});Ue(this,"window",{width:0,height:0});Ue(this,"emitter",new Ig);Ue(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ue(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ue(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ue(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=Wf(n,this.window.width),s=Wf(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Ue(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,pr),this.element.addEventListener("touchstart",this.onTouchStart,pr),this.element.addEventListener("touchmove",this.onTouchMove,pr),this.element.addEventListener("touchend",this.onTouchEnd,pr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,pr),this.element.removeEventListener("touchstart",this.onTouchStart,pr),this.element.removeEventListener("touchmove",this.onTouchMove,pr),this.element.removeEventListener("touchend",this.onTouchEnd,pr)}};const Xf=r=>Math.min(1,1.001-2**(-10*r));var $x=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d=h==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:g,virtualScroll:p,overscroll:x=!0,autoRaf:v=!1,anchors:y=!1,autoToggle:E=!1,allowNestedScroll:M=!1,__experimental__naiveDimensions:b=!1,naiveDimensions:L=b,stopInertiaOnNavigate:S=!1}={}){Ue(this,"_isScrolling",!1);Ue(this,"_isStopped",!1);Ue(this,"_isLocked",!1);Ue(this,"_preventNextNativeScrollEvent",!1);Ue(this,"_resetVelocityTimeout",null);Ue(this,"_rafId",null);Ue(this,"_isDraggingSelection",!1);Ue(this,"isTouching");Ue(this,"isIos");Ue(this,"time",0);Ue(this,"userData",{});Ue(this,"lastVelocity",0);Ue(this,"velocity",0);Ue(this,"direction",0);Ue(this,"options");Ue(this,"targetScroll");Ue(this,"animatedScroll");Ue(this,"animate",new Hx);Ue(this,"emitter",new Ig);Ue(this,"dimensions");Ue(this,"virtualScroll");Ue(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ue(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ue(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Ue(this,"onClick",r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ue(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ue(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ue(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ue(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Gf,window.lenis||(window.lenis={}),window.lenis.version=Gf,h==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Xf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:g,virtualScroll:p,overscroll:x,autoRaf:v,anchors:y,autoToggle:E,allowNestedScroll:M,naiveDimensions:L,stopInertiaOnNavigate:S},this.dimensions=new Wx(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Yx(t,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!u)return;let d=r,f=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let m=null;if(typeof d=="string"?(m=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),m||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof HTMLElement&&d?.nodeType&&(m=d),m){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}const _=m.getBoundingClientRect(),g=getComputedStyle(m),p=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),x=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);d=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(v)?0:v)}}if(typeof d=="number"){if(d+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const m=d-this.animatedScroll;m>this.limit/2?d-=this.limit:m<-this.limit/2&&(d+=this.limit)}}else d=Lg(0,d,this.limit);if(d===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=Xf:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,h,d,f,m;if(n-(i.time??0)>2e3){i.time=Date.now();const M=window.getComputedStyle(r);if(i.computedStyle=M,s=["auto","overlay","scroll"].includes(M.overflowX),o=["auto","overlay","scroll"].includes(M.overflowY),c=["auto"].includes(M.overscrollBehaviorX),u=["auto"].includes(M.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;h=r.scrollWidth,d=r.scrollHeight,f=r.clientWidth,m=r.clientHeight,a=h>f,l=d>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=h,i.scrollHeight=d,i.clientWidth=f,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,h=i.scrollWidth,d=i.scrollHeight,f=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let g,p,x,v,y,E;if(_==="horizontal")g=Math.round(r.scrollLeft),p=h-f,x=e,v=s,y=a,E=c;else if(_==="vertical")g=Math.round(r.scrollTop),p=d-m,x=t,v=o,y=l,E=u;else return!1;return!E&&(g>=p||g<=0)?!0:(x>0?g<p:g>0)&&v&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Vx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const lu="./",Fc=r=>`${lu}video/${r}.mp4`,Bc=r=>`${lu}img/posters/${r}.jpg`,Dg=()=>`${lu}img/logo02.png`,Co=(r,e="webp")=>`${lu}img/mascot/poses/${r}.${e}`;function cu(r,e,t={}){const n=`mascot mascot--${e}${t.faint?" mascot--faint":""}`,i=t.label?`role="img" aria-label="${t.label}"`:'aria-hidden="true"';return`<div class="${n}" data-pose="${r}" ${i}>
    <span class="mascot-shadow"></span>
    <img class="mascot-img" alt="" decoding="async" />
  </div>`}const Pt=(r,e=document)=>e.querySelector(r),jt=(r,e=document)=>[...e.querySelectorAll(r)],qx=(r,e,t)=>Math.max(e,Math.min(t,r));function Gr(r,{scrub:e=!1}={}){return`
    <video class="sec-video" data-src="${Fc(r)}" poster="${Bc(r)}"
           muted loop playsinline preload="metadata" ${e?'data-scrub="true"':""}></video>
    <img class="sec-poster" src="${Bc(r)}" alt="" aria-hidden="true" />
    <div class="sec-video-scrim"></div>
    <div class="facet-bg" aria-hidden="true"></div>`}const Yf={brain:'<path d="M24 6c-4 0-7 3-7 6 0 1-2 1-2 4s2 3 2 5c0 4 3 7 7 7s7-3 7-7c0-2 2-2 2-5s-2-3-2-4c0-3-3-6-7-6z"/>',chip:'<rect x="14" y="14" width="20" height="20" rx="2"/><path d="M24 8v6M24 34v6M8 24h6M34 24h6"/>',gem:'<path d="M24 6 40 20 24 42 8 20z"/><path d="M8 20h32M24 6v36"/>',chart:'<path d="M8 40V22M18 40V12M28 40V26M38 40V16"/>',arrow:'<path d="M8 34 20 22l8 6L40 12"/><path d="M40 22V12H30"/>',node:'<circle cx="24" cy="24" r="6"/><circle cx="10" cy="12" r="3"/><circle cx="38" cy="12" r="3"/><circle cx="12" cy="38" r="3"/><path d="M13 14l8 7M35 14l-8 7M15 36l6-8"/>'},Ng=r=>`<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Yf[r]||Yf.gem}</svg>`,jx={mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',check:'<path d="M20 6 9 17l-5-5"/>',cap:'<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>',star:'<path d="M12 2 15 9l7 .5-5.5 4.5L18 21l-6-4-6 4 1.5-7L2 9.5 9 9z"/>'},$f=r=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${jx[r]||""}</svg>`,kc=r=>`<span class="wordmark"${r?` style="font-size:${r}"`:""}><span class="w-oranje">Oranje</span><span class="w-stride">Stride</span></span>`,Zx="modulepreload",Jx=function(r,e){return new URL(r,e).href},qf={},$h=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=Promise.allSettled(t.map(c=>{if(c=Jx(c,n),c in qf)return;qf[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let m=o.length-1;m>=0;m--){const _=o[m];if(_.href===c&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Zx,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="160",Kx=0,jf=1,Qx=2,Ug=1,ey=2,Qi=3,zr=0,Vn=1,Ui=2,lr=0,Ro=1,Ja=2,Zf=3,Jf=4,Og=5,Sr=100,ty=101,ny=102,Kf=103,Qf=104,Fg=200,bc=201,iy=202,ry=203,qh=204,jh=205,sy=206,oy=207,ay=208,ly=209,cy=210,uy=211,hy=212,dy=213,fy=214,py=0,my=1,gy=2,zc=3,_y=4,vy=5,xy=6,yy=7,Bg=0,by=1,Sy=2,Nr=0,kg=1,zg=2,Vg=3,Fd=4,My=5,Hg=6,ep="attached",Ty="detached",Gg=300,Bo=301,ko=302,Zh=303,Jh=304,uu=306,Vc=1e3,Ci=1001,Kh=1002,hn=1003,tp=1004,Ou=1005,hi=1006,Ey=1007,Ka=1008,Ur=1009,wy=1010,Ay=1011,Bd=1012,Wg=1013,Cr=1014,sr=1015,zi=1016,Xg=1017,Yg=1018,_s=1020,Cy=1021,fi=1023,Ry=1024,Py=1025,vs=1026,zo=1027,Ly=1028,$g=1029,Iy=1030,qg=1031,jg=1033,Fu=33776,Bu=33777,ku=33778,zu=33779,np=35840,ip=35841,rp=35842,sp=35843,Zg=36196,op=37492,ap=37496,lp=37808,cp=37809,up=37810,hp=37811,dp=37812,fp=37813,pp=37814,mp=37815,gp=37816,_p=37817,vp=37818,xp=37819,yp=37820,bp=37821,Vu=36492,Sp=36494,Mp=36495,Dy=36283,Tp=36284,Ep=36285,wp=36286,Jg=2200,Ny=2201,Uy=2202,Hc=2300,Gc=2301,Hu=2302,mo=2400,go=2401,Wc=2402,kd=2500,Oy=2501,Fy=0,By=1,Ap=2,Kg=3e3,xs=3001,ky=3200,zy=3201,Qg=0,Vy=1,pi="",Wt="srgb",dr="srgb-linear",zd="display-p3",hu="display-p3-linear",Xc="linear",At="srgb",Yc="rec709",$c="p3",Ns=7680,Cp=519,Hy=512,Gy=513,Wy=514,e_=515,Xy=516,Yy=517,$y=518,qy=519,Qh=35044,Rp="300 es",ed=1035,or=2e3,qc=2001;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pp=1234567;const Na=Math.PI/180,Vo=180/Math.PI;function vi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function nn(r,e,t){return Math.max(e,Math.min(t,r))}function Vd(r,e){return(r%e+e)%e}function jy(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Zy(r,e,t){return r!==e?(t-r)/(e-r):0}function Ua(r,e,t){return(1-t)*r+t*e}function Jy(r,e,t,n){return Ua(r,e,1-Math.exp(-t*n))}function Ky(r,e=1){return e-Math.abs(Vd(r,e*2)-e)}function Qy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function eb(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function tb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function nb(r,e){return r+Math.random()*(e-r)}function ib(r){return r*(.5-Math.random())}function rb(r){r!==void 0&&(Pp=r);let e=Pp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sb(r){return r*Na}function ob(r){return r*Vo}function td(r){return(r&r-1)===0&&r!==0}function ab(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function jc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function lb(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Oi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Zc={DEG2RAD:Na,RAD2DEG:Vo,generateUUID:vi,clamp:nn,euclideanModulo:Vd,mapLinear:jy,inverseLerp:Zy,lerp:Ua,damp:Jy,pingpong:Ky,smoothstep:Qy,smootherstep:eb,randInt:tb,randFloat:nb,randFloatSpread:ib,seededRandom:rb,degToRad:sb,radToDeg:ob,isPowerOfTwo:td,ceilPowerOfTwo:ab,floorPowerOfTwo:jc,setQuaternionFromProperEuler:lb,normalize:bt,denormalize:Oi};class ne{constructor(e=0,t=0){ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,i,s,o,a,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],x=i[1],v=i[4],y=i[7],E=i[2],M=i[5],b=i[8];return s[0]=o*_+a*x+l*E,s[3]=o*g+a*v+l*M,s[6]=o*p+a*y+l*b,s[1]=c*_+u*x+h*E,s[4]=c*g+u*v+h*M,s[7]=c*p+u*y+h*b,s[2]=d*_+f*x+m*E,s[5]=d*g+f*v+m*M,s[8]=d*p+f*y+m*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gu.makeScale(e,t)),this}rotate(e){return this.premultiply(Gu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gu=new st;function t_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Qa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cb(){const r=Qa("canvas");return r.style.display="block",r}const Lp={};function Oa(r){r in Lp||(Lp[r]=!0,console.warn(r))}const Ip=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dp=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),El={[dr]:{transfer:Xc,primaries:Yc,toReference:r=>r,fromReference:r=>r},[Wt]:{transfer:At,primaries:Yc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[hu]:{transfer:Xc,primaries:$c,toReference:r=>r.applyMatrix3(Dp),fromReference:r=>r.applyMatrix3(Ip)},[zd]:{transfer:At,primaries:$c,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Dp),fromReference:r=>r.applyMatrix3(Ip).convertLinearToSRGB()}},ub=new Set([dr,hu]),xt={enabled:!0,_workingColorSpace:dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!ub.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=El[e].toReference,i=El[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return El[r].primaries},getTransfer:function(r){return r===pi?Xc:El[r].transfer}};function Po(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wu(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Us;class n_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=Qa("canvas")),Us.width=e.width,Us.height=e.height;const n=Us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Po(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Po(t[n]/255)*255):t[n]=Po(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hb=0;class i_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=vi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Xu(i[o].image)):s.push(Xu(i[o]))}else s=Xu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?n_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let db=0;class Mn extends Cs{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,n=Ci,i=Ci,s=hi,o=Ka,a=fi,l=Ur,c=Mn.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=vi(),this.name="",this.source=new i_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Oa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===xs?Wt:pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vc:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vc:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Oa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Wt?xs:Kg}set encoding(e){Oa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xs?Wt:pi}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Gg;Mn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,i=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(f+1)/2,E=(p+1)/2,M=(u+d)/4,b=(h+_)/4,L=(m+g)/4;return v>y&&v>E?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=M/n,s=b/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=M/i,s=L/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=b/s,i=L/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fb extends Cs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Oa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xs?Wt:pi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Mn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new i_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends fb{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class r_ extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pb extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==m){let g=1-a;const p=l*d+c*f+u*m+h*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const E=Math.sqrt(v),M=Math.atan2(E,p*x);g=Math.sin(g*M)/E,a=Math.sin(a*M)/E}const y=a*x;if(l=l*g+d*y,c=c*g+f*y,u=u*g+m*y,h=h*g+_*y,g===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-a*f,e[t+2]=c*m+u*f+a*d-l*h,e[t+3]=u*m-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Np.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Np.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yu=new I,Np=new Vi;class Gi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mi):Mi.fromBufferAttribute(s,o),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wl.copy(n.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Al.subVectors(this.max,na),Os.subVectors(e.a,na),Fs.subVectors(e.b,na),Bs.subVectors(e.c,na),mr.subVectors(Fs,Os),gr.subVectors(Bs,Fs),jr.subVectors(Os,Bs);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-jr.z,jr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,jr.z,0,-jr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-jr.y,jr.x,0];return!$u(t,Os,Fs,Bs,Al)||(t=[1,0,0,0,1,0,0,0,1],!$u(t,Os,Fs,Bs,Al))?!1:(Cl.crossVectors(mr,gr),t=[Cl.x,Cl.y,Cl.z],$u(t,Os,Fs,Bs,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new I,new I,new I,new I,new I,new I,new I,new I],Mi=new I,wl=new Gi,Os=new I,Fs=new I,Bs=new I,mr=new I,gr=new I,jr=new I,na=new I,Al=new I,Cl=new I,Zr=new I;function $u(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Zr.fromArray(r,s);const a=i.x*Math.abs(Zr.x)+i.y*Math.abs(Zr.y)+i.z*Math.abs(Zr.z),l=e.dot(Zr),c=t.dot(Zr),u=n.dot(Zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const mb=new Gi,ia=new I,qu=new I;class fr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mb.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ia,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(qu)),this.expandByPoint(ia.copy(e.center).sub(qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new I,ju=new I,Rl=new I,_r=new I,Zu=new I,Pl=new I,Ju=new I;class du{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ju.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(ju);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rl),a=_r.dot(this.direction),l=-_r.dot(Rl),c=_r.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ju).addScaledVector(Rl,d),f}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),i=qi.dot(qi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,i,s){Zu.subVectors(t,e),Pl.subVectors(n,e),Ju.crossVectors(Zu,Pl);let o=this.direction.dot(Ju),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_r.subVectors(this.origin,e);const l=a*this.direction.dot(Pl.crossVectors(_r,Pl));if(l<0)return null;const c=a*this.direction.dot(Zu.cross(_r));if(c<0||l+c>o)return null;const u=-a*_r.dot(Ju);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,m,_,g){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,m,_,g)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ks.setFromMatrixColumn(e,0).length(),s=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gb,e,_b)}lookAt(e,t,n){const i=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),vr.crossVectors(n,Wn),vr.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),vr.crossVectors(n,Wn)),vr.normalize(),Ll.crossVectors(Wn,vr),i[0]=vr.x,i[4]=Ll.x,i[8]=Wn.x,i[1]=vr.y,i[5]=Ll.y,i[9]=Wn.y,i[2]=vr.z,i[6]=Ll.z,i[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],v=n[7],y=n[11],E=n[15],M=i[0],b=i[4],L=i[8],S=i[12],T=i[1],P=i[5],N=i[9],X=i[13],D=i[2],U=i[6],B=i[10],V=i[14],W=i[3],F=i[7],C=i[11],J=i[15];return s[0]=o*M+a*T+l*D+c*W,s[4]=o*b+a*P+l*U+c*F,s[8]=o*L+a*N+l*B+c*C,s[12]=o*S+a*X+l*V+c*J,s[1]=u*M+h*T+d*D+f*W,s[5]=u*b+h*P+d*U+f*F,s[9]=u*L+h*N+d*B+f*C,s[13]=u*S+h*X+d*V+f*J,s[2]=m*M+_*T+g*D+p*W,s[6]=m*b+_*P+g*U+p*F,s[10]=m*L+_*N+g*B+p*C,s[14]=m*S+_*X+g*V+p*J,s[3]=x*M+v*T+y*D+E*W,s[7]=x*b+v*P+y*U+E*F,s[11]=x*L+v*N+y*B+E*C,s[15]=x*S+v*X+y*V+E*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+g*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=h*g*c-_*d*c+_*l*f-a*g*f-h*l*p+a*d*p,v=m*d*c-u*g*c-m*l*f+o*g*f+u*l*p-o*d*p,y=u*_*c-m*h*c+m*a*f-o*_*f-u*a*p+o*h*p,E=m*h*l-u*_*l-m*a*d+o*_*d+u*a*g-o*h*g,M=t*x+n*v+i*y+s*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=x*b,e[1]=(_*d*s-h*g*s-_*i*f+n*g*f+h*i*p-n*d*p)*b,e[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*b,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*b,e[4]=v*b,e[5]=(u*g*s-m*d*s+m*i*f-t*g*f-u*i*p+t*d*p)*b,e[6]=(m*l*s-o*g*s-m*i*c+t*g*c+o*i*p-t*l*p)*b,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*b,e[8]=y*b,e[9]=(m*h*s-u*_*s-m*n*f+t*_*f+u*n*p-t*h*p)*b,e[10]=(o*_*s-m*a*s+m*n*c-t*_*c-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*b,e[12]=E*b,e[13]=(u*_*i-m*h*i+m*n*d-t*_*d-u*n*g+t*h*g)*b,e[14]=(m*a*i-o*_*i-m*n*l+t*_*l+o*n*g-t*a*g)*b,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,m=s*h,_=o*u,g=o*h,p=a*h,x=l*c,v=l*u,y=l*h,E=n.x,M=n.y,b=n.z;return i[0]=(1-(_+p))*E,i[1]=(f+y)*E,i[2]=(m-v)*E,i[3]=0,i[4]=(f-y)*M,i[5]=(1-(d+p))*M,i[6]=(g+x)*M,i[7]=0,i[8]=(m+v)*b,i[9]=(g-x)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ks.set(i[0],i[1],i[2]).length();const o=ks.set(i[4],i[5],i[6]).length(),a=ks.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ti.copy(this);const c=1/s,u=1/o,h=1/a;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=h,Ti.elements[9]*=h,Ti.elements[10]*=h,t.setFromRotationMatrix(Ti),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=or){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(a===or)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===qc)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=or){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*u;let m,_;if(a===or)m=(o+s)*h,_=-2*h;else if(a===qc)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ks=new I,Ti=new Ke,gb=new I(0,0,0),_b=new I(1,1,1),vr=new I,Ll=new I,Wn=new I,Up=new Ke,Op=new Vi;class Ts{constructor(e=0,t=0,n=0,i=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Op.setFromEuler(this),this.setFromQuaternion(Op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class s_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vb=0;const Fp=new I,zs=new Vi,ji=new Ke,Il=new I,ra=new I,xb=new I,yb=new Vi,Bp=new I(1,0,0),kp=new I(0,1,0),zp=new I(0,0,1),bb={type:"added"},Sb={type:"removed"};class kt extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new I,t=new Ts,n=new Vi,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new st}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new s_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Bp,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,t){return Fp.copy(e).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bp,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Il.copy(e):Il.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(ra,Il,this.up):ji.lookAt(Il,ra,this.up),this.quaternion.setFromRotationMatrix(ji),i&&(ji.extractRotation(i.matrixWorld),zs.setFromRotationMatrix(ji),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,xb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,yb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}kt.DEFAULT_UP=new I(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new I,Zi=new I,Ku=new I,Ji=new I,Vs=new I,Hs=new I,Vp=new I,Qu=new I,eh=new I,th=new I;let Dl=!1;class di{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ei.subVectors(e,t),i.cross(Ei);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ei.subVectors(i,t),Zi.subVectors(n,t),Ku.subVectors(e,t);const o=Ei.dot(Ei),a=Ei.dot(Zi),l=Ei.dot(Ku),c=Zi.dot(Zi),u=Zi.dot(Ku),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getUV(e,t,n,i,s,o,a,l){return Dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dl=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static isFrontFacing(e,t,n,i){return Ei.subVectors(n,t),Zi.subVectors(e,t),Ei.cross(Zi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Ei.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dl=!0),di.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return di.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Vs.subVectors(i,n),Hs.subVectors(s,n),Qu.subVectors(e,n);const l=Vs.dot(Qu),c=Hs.dot(Qu);if(l<=0&&c<=0)return t.copy(n);eh.subVectors(e,i);const u=Vs.dot(eh),h=Hs.dot(eh);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Vs,o);th.subVectors(e,s);const f=Vs.dot(th),m=Hs.dot(th);if(m>=0&&f<=m)return t.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Hs,a);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Vp.subVectors(s,i),a=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(Vp,a);const p=1/(g+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Vs,o).addScaledVector(Hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const o_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function nh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=xt.workingColorSpace){if(e=Vd(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=nh(o,s,e+1/3),this.g=nh(o,s,e),this.b=nh(o,s,e-1/3)}return xt.toWorkingColorSpace(this,i),this}setStyle(e,t=Wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=o_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Po(e.r),this.g=Po(e.g),this.b=Po(e.b),this}copyLinearToSRGB(e){return this.r=Wu(e.r),this.g=Wu(e.g),this.b=Wu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return xt.fromWorkingColorSpace(gn.copy(this),e),Math.round(nn(gn.r*255,0,255))*65536+Math.round(nn(gn.g*255,0,255))*256+Math.round(nn(gn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(gn.copy(this),t);const n=gn.r,i=gn.g,s=gn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Wt){xt.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,n=gn.g,i=gn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(Nl);const n=Ua(xr.h,Nl.h,t),i=Ua(xr.s,Nl.s,t),s=Ua(xr.l,Nl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Ye;Ye.NAMES=o_;let Mb=0;class Wr extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Ro,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=jh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=zc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ro&&(n.blending=this.blending),this.side!==zr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qh&&(n.blendSrc=this.blendSrc),this.blendDst!==jh&&(n.blendDst=this.blendDst),this.blendEquation!==Sr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class el extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new I,Ul=new ne;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qh&&(e.usage=this.usage),e}}class a_ extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class l_ extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tb=0;const oi=new Ke,ih=new kt,Gs=new I,Xn=new Gi,sa=new Gi,an=new I;class zt extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t_(e)?l_:a_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];sa.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Xn.min,sa.min),Xn.expandByPoint(an),an.addVectors(Xn.max,sa.max),Xn.expandByPoint(an)):(Xn.expandByPoint(sa.min),Xn.expandByPoint(sa.max))}Xn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)an.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(an));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(e,c),an.add(Gs)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new I,u[T]=new I;const h=new I,d=new I,f=new I,m=new ne,_=new ne,g=new ne,p=new I,x=new I;function v(T,P,N){h.fromArray(i,T*3),d.fromArray(i,P*3),f.fromArray(i,N*3),m.fromArray(o,T*2),_.fromArray(o,P*2),g.fromArray(o,N*2),d.sub(h),f.sub(h),_.sub(m),g.sub(m);const X=1/(_.x*g.y-g.x*_.y);isFinite(X)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(X),x.copy(f).multiplyScalar(_.x).addScaledVector(d,-g.x).multiplyScalar(X),c[T].add(p),c[P].add(p),c[N].add(p),u[T].add(x),u[P].add(x),u[N].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,P=y.length;T<P;++T){const N=y[T],X=N.start,D=N.count;for(let U=X,B=X+D;U<B;U+=3)v(n[U+0],n[U+1],n[U+2])}const E=new I,M=new I,b=new I,L=new I;function S(T){b.fromArray(s,T*3),L.copy(b);const P=c[T];E.copy(P),E.sub(b.multiplyScalar(b.dot(P))).normalize(),M.crossVectors(L,P);const X=M.dot(u[T])<0?-1:1;l[T*4]=E.x,l[T*4+1]=E.y,l[T*4+2]=E.z,l[T*4+3]=X}for(let T=0,P=y.length;T<P;++T){const N=y[T],X=N.start,D=N.count;for(let U=X,B=X+D;U<B;U+=3)S(n[U+0]),S(n[U+1]),S(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new rn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hp=new Ke,Jr=new du,Ol=new fr,Gp=new I,Ws=new I,Xs=new I,Ys=new I,rh=new I,Fl=new I,Bl=new ne,kl=new ne,zl=new ne,Wp=new I,Xp=new I,Yp=new I,Vl=new I,Hl=new I;class ke extends kt{constructor(e=new zt,t=new el){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Fl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(rh.fromBufferAttribute(h,e),o?Fl.addScaledVector(rh,u):Fl.addScaledVector(rh.sub(t),u))}t.add(Fl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ol.copy(n.boundingSphere),Ol.applyMatrix4(s),Jr.copy(e.ray).recast(e.near),!(Ol.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Ol,Gp)===null||Jr.origin.distanceToSquared(Gp)>(e.far-e.near)**2))&&(Hp.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(Hp),!(n.boundingBox!==null&&Jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,E=v;y<E;y+=3){const M=a.getX(y),b=a.getX(y+1),L=a.getX(y+2);i=Gl(this,p,e,n,c,u,h,M,b,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);i=Gl(this,o,e,n,c,u,h,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,E=v;y<E;y+=3){const M=y,b=y+1,L=y+2;i=Gl(this,p,e,n,c,u,h,M,b,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,v=g+1,y=g+2;i=Gl(this,o,e,n,c,u,h,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Eb(r,e,t,n,i,s,o,a){let l;if(e.side===Vn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===zr,a),l===null)return null;Hl.copy(a),Hl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Hl);return c<t.near||c>t.far?null:{distance:c,point:Hl.clone(),object:r}}function Gl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ws),r.getVertexPosition(l,Xs),r.getVertexPosition(c,Ys);const u=Eb(r,e,t,n,Ws,Xs,Ys,Vl);if(u){i&&(Bl.fromBufferAttribute(i,a),kl.fromBufferAttribute(i,l),zl.fromBufferAttribute(i,c),u.uv=di.getInterpolation(Vl,Ws,Xs,Ys,Bl,kl,zl,new ne)),s&&(Bl.fromBufferAttribute(s,a),kl.fromBufferAttribute(s,l),zl.fromBufferAttribute(s,c),u.uv1=di.getInterpolation(Vl,Ws,Xs,Ys,Bl,kl,zl,new ne),u.uv2=u.uv1),o&&(Wp.fromBufferAttribute(o,a),Xp.fromBufferAttribute(o,l),Yp.fromBufferAttribute(o,c),u.normal=di.getInterpolation(Vl,Ws,Xs,Ys,Wp,Xp,Yp,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};di.getNormal(Ws,Xs,Ys,h.normal),u.face=h}return u}class yi extends zt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(h,2));function m(_,g,p,x,v,y,E,M,b,L,S){const T=y/b,P=E/L,N=y/2,X=E/2,D=M/2,U=b+1,B=L+1;let V=0,W=0;const F=new I;for(let C=0;C<B;C++){const J=C*P-X;for(let ae=0;ae<U;ae++){const j=ae*T-N;F[_]=j*x,F[g]=J*v,F[p]=D,c.push(F.x,F.y,F.z),F[_]=0,F[g]=0,F[p]=M>0?1:-1,u.push(F.x,F.y,F.z),h.push(ae/b),h.push(1-C/L),V+=1}}for(let C=0;C<L;C++)for(let J=0;J<b;J++){const ae=d+J+U*C,j=d+J+U*(C+1),Y=d+(J+1)+U*(C+1),ee=d+(J+1)+U*C;l.push(ae,j,ee),l.push(j,Y,ee),W+=6}a.addGroup(f,W,S),f+=W,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ho(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(r){const e={};for(let t=0;t<r.length;t++){const n=Ho(r[t]);for(const i in n)e[i]=n[i]}return e}function wb(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function c_(r){return r.getRenderTarget()===null?r.outputColorSpace:xt.workingColorSpace}const tl={clone:Ho,merge:Cn};var Ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ab,this.fragmentShader=Cb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ho(e.uniforms),this.uniformsGroups=wb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class u_ extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends u_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Na*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,qs=1;class Rb extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new In($s,qs,e,t);i.layers=this.layers,this.add(i);const s=new In($s,qs,e,t);s.layers=this.layers,this.add(s);const o=new In($s,qs,e,t);o.layers=this.layers,this.add(o);const a=new In($s,qs,e,t);a.layers=this.layers,this.add(a);const l=new In($s,qs,e,t);l.layers=this.layers,this.add(l);const c=new In($s,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===or)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class h_ extends Mn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bo,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pb extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Oa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===xs?Wt:pi),this.texture=new h_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new yi(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:Ho(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:lr});s.uniforms.tEquirect.value=t;const o=new ke(i,s),a=t.minFilter;return t.minFilter===Ka&&(t.minFilter=hi),new Rb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const sh=new I,Lb=new I,Ib=new st;class rs{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sh.subVectors(n,t).cross(Lb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ib.getNormalMatrix(e),i=this.coplanarPoint(sh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new fr,Wl=new I;class Hd{constructor(e=new rs,t=new rs,n=new rs,i=new rs,s=new rs,o=new rs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=or){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,g-f,y-p).normalize(),n[1].setComponents(l+s,d+c,g+f,y+p).normalize(),n[2].setComponents(l+o,d+u,g+m,y+x).normalize(),n[3].setComponents(l-o,d-u,g-m,y-x).normalize(),n[4].setComponents(l-a,d-h,g-_,y-v).normalize(),t===or)n[5].setComponents(l+a,d+h,g+_,y+v).normalize();else if(t===qc)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wl.x=i.normal.x>0?e.max.x:e.min.x,Wl.y=i.normal.y>0?e.max.y:e.min.y,Wl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function d_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Db(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,h){const d=u.array,f=u._updateRange,m=u.updateRanges;if(r.bindBuffer(h,c),f.count===-1&&m.length===0&&r.bufferSubData(h,0,d),m.length!==0){for(let _=0,g=m.length;_<g;_++){const p=m[_];t?r.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class al extends zt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const x=p*d-o;for(let v=0;v<c;v++){const y=v*h-s;m.push(y,-x,0),_.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,y=x+c*(p+1),E=x+1+c*(p+1),M=x+1+c*p;f.push(v,y,M),f.push(y,E,M)}this.setIndex(f),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ub=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ob=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$b=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uS="gl_FragColor = linearToOutputTexel( gl_FragColor );",hS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,dS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,MS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,US=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,VS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$S=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ZS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,JS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,VM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$M=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,e1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,h1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Nb,alphahash_pars_fragment:Ub,alphamap_fragment:Ob,alphamap_pars_fragment:Fb,alphatest_fragment:Bb,alphatest_pars_fragment:kb,aomap_fragment:zb,aomap_pars_fragment:Vb,batching_pars_vertex:Hb,batching_vertex:Gb,begin_vertex:Wb,beginnormal_vertex:Xb,bsdfs:Yb,iridescence_fragment:$b,bumpmap_pars_fragment:qb,clipping_planes_fragment:jb,clipping_planes_pars_fragment:Zb,clipping_planes_pars_vertex:Jb,clipping_planes_vertex:Kb,color_fragment:Qb,color_pars_fragment:eS,color_pars_vertex:tS,color_vertex:nS,common:iS,cube_uv_reflection_fragment:rS,defaultnormal_vertex:sS,displacementmap_pars_vertex:oS,displacementmap_vertex:aS,emissivemap_fragment:lS,emissivemap_pars_fragment:cS,colorspace_fragment:uS,colorspace_pars_fragment:hS,envmap_fragment:dS,envmap_common_pars_fragment:fS,envmap_pars_fragment:pS,envmap_pars_vertex:mS,envmap_physical_pars_fragment:AS,envmap_vertex:gS,fog_vertex:_S,fog_pars_vertex:vS,fog_fragment:xS,fog_pars_fragment:yS,gradientmap_pars_fragment:bS,lightmap_fragment:SS,lightmap_pars_fragment:MS,lights_lambert_fragment:TS,lights_lambert_pars_fragment:ES,lights_pars_begin:wS,lights_toon_fragment:CS,lights_toon_pars_fragment:RS,lights_phong_fragment:PS,lights_phong_pars_fragment:LS,lights_physical_fragment:IS,lights_physical_pars_fragment:DS,lights_fragment_begin:NS,lights_fragment_maps:US,lights_fragment_end:OS,logdepthbuf_fragment:FS,logdepthbuf_pars_fragment:BS,logdepthbuf_pars_vertex:kS,logdepthbuf_vertex:zS,map_fragment:VS,map_pars_fragment:HS,map_particle_fragment:GS,map_particle_pars_fragment:WS,metalnessmap_fragment:XS,metalnessmap_pars_fragment:YS,morphcolor_vertex:$S,morphnormal_vertex:qS,morphtarget_pars_vertex:jS,morphtarget_vertex:ZS,normal_fragment_begin:JS,normal_fragment_maps:KS,normal_pars_fragment:QS,normal_pars_vertex:eM,normal_vertex:tM,normalmap_pars_fragment:nM,clearcoat_normal_fragment_begin:iM,clearcoat_normal_fragment_maps:rM,clearcoat_pars_fragment:sM,iridescence_pars_fragment:oM,opaque_fragment:aM,packing:lM,premultiplied_alpha_fragment:cM,project_vertex:uM,dithering_fragment:hM,dithering_pars_fragment:dM,roughnessmap_fragment:fM,roughnessmap_pars_fragment:pM,shadowmap_pars_fragment:mM,shadowmap_pars_vertex:gM,shadowmap_vertex:_M,shadowmask_pars_fragment:vM,skinbase_vertex:xM,skinning_pars_vertex:yM,skinning_vertex:bM,skinnormal_vertex:SM,specularmap_fragment:MM,specularmap_pars_fragment:TM,tonemapping_fragment:EM,tonemapping_pars_fragment:wM,transmission_fragment:AM,transmission_pars_fragment:CM,uv_pars_fragment:RM,uv_pars_vertex:PM,uv_vertex:LM,worldpos_vertex:IM,background_vert:DM,background_frag:NM,backgroundCube_vert:UM,backgroundCube_frag:OM,cube_vert:FM,cube_frag:BM,depth_vert:kM,depth_frag:zM,distanceRGBA_vert:VM,distanceRGBA_frag:HM,equirect_vert:GM,equirect_frag:WM,linedashed_vert:XM,linedashed_frag:YM,meshbasic_vert:$M,meshbasic_frag:qM,meshlambert_vert:jM,meshlambert_frag:ZM,meshmatcap_vert:JM,meshmatcap_frag:KM,meshnormal_vert:QM,meshnormal_frag:e1,meshphong_vert:t1,meshphong_frag:n1,meshphysical_vert:i1,meshphysical_frag:r1,meshtoon_vert:s1,meshtoon_frag:o1,points_vert:a1,points_frag:l1,shadow_vert:c1,shadow_frag:u1,sprite_vert:h1,sprite_frag:d1},xe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Di={basic:{uniforms:Cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Cn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Cn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Cn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Cn([xe.points,xe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Cn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Cn([xe.common,xe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Cn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Cn([xe.sprite,xe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Cn([xe.common,xe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Cn([xe.lights,xe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Di.physical={uniforms:Cn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Xl={r:0,b:0,g:0};function f1(r,e,t,n,i,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function m(g,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===uu)?(u===void 0&&(u=new ke(new yi(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Ho(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=xt.getTransfer(v.colorSpace)!==At,(h!==v||d!==v.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ke(new al(2,2),new On({name:"BackgroundMaterial",uniforms:Ho(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=xt.getTransfer(v.colorSpace)!==At,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,p){g.getRGB(Xl,c_(r)),n.buffers.color.setClear(Xl.r,Xl.g,Xl.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:m}}function p1(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function h(D,U,B,V,W){let F=!1;if(o){const C=_(V,B,U);c!==C&&(c=C,f(c.object)),F=p(D,V,B,W),F&&x(D,V,B,W)}else{const C=U.wireframe===!0;(c.geometry!==V.id||c.program!==B.id||c.wireframe!==C)&&(c.geometry=V.id,c.program=B.id,c.wireframe=C,F=!0)}W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,L(D,U,B,V),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function m(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,U,B){const V=B.wireframe===!0;let W=a[D.id];W===void 0&&(W={},a[D.id]=W);let F=W[U.id];F===void 0&&(F={},W[U.id]=F);let C=F[V];return C===void 0&&(C=g(d()),F[V]=C),C}function g(D){const U=[],B=[],V=[];for(let W=0;W<i;W++)U[W]=0,B[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:V,object:D,attributes:{},index:null}}function p(D,U,B,V){const W=c.attributes,F=U.attributes;let C=0;const J=B.getAttributes();for(const ae in J)if(J[ae].location>=0){const Y=W[ae];let ee=F[ae];if(ee===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),Y===void 0||Y.attribute!==ee||ee&&Y.data!==ee.data)return!0;C++}return c.attributesNum!==C||c.index!==V}function x(D,U,B,V){const W={},F=U.attributes;let C=0;const J=B.getAttributes();for(const ae in J)if(J[ae].location>=0){let Y=F[ae];Y===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor));const ee={};ee.attribute=Y,Y&&Y.data&&(ee.data=Y.data),W[ae]=ee,C++}c.attributes=W,c.attributesNum=C,c.index=V}function v(){const D=c.newAttributes;for(let U=0,B=D.length;U<B;U++)D[U]=0}function y(D){E(D,0)}function E(D,U){const B=c.newAttributes,V=c.enabledAttributes,W=c.attributeDivisors;B[D]=1,V[D]===0&&(r.enableVertexAttribArray(D),V[D]=1),W[D]!==U&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),W[D]=U)}function M(){const D=c.newAttributes,U=c.enabledAttributes;for(let B=0,V=U.length;B<V;B++)U[B]!==D[B]&&(r.disableVertexAttribArray(B),U[B]=0)}function b(D,U,B,V,W,F,C){C===!0?r.vertexAttribIPointer(D,U,B,W,F):r.vertexAttribPointer(D,U,B,V,W,F)}function L(D,U,B,V){if(n.isWebGL2===!1&&(D.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=V.attributes,F=B.getAttributes(),C=U.defaultAttributeValues;for(const J in F){const ae=F[J];if(ae.location>=0){let j=W[J];if(j===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const Y=j.normalized,ee=j.itemSize,ue=t.get(j);if(ue===void 0)continue;const fe=ue.buffer,Ae=ue.type,Ie=ue.bytesPerElement,Me=n.isWebGL2===!0&&(Ae===r.INT||Ae===r.UNSIGNED_INT||j.gpuType===Wg);if(j.isInterleavedBufferAttribute){const De=j.data,O=De.stride,te=j.offset;if(De.isInstancedInterleavedBuffer){for(let K=0;K<ae.locationSize;K++)E(ae.location+K,De.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let K=0;K<ae.locationSize;K++)y(ae.location+K);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let K=0;K<ae.locationSize;K++)b(ae.location+K,ee/ae.locationSize,Ae,Y,O*Ie,(te+ee/ae.locationSize*K)*Ie,Me)}else{if(j.isInstancedBufferAttribute){for(let De=0;De<ae.locationSize;De++)E(ae.location+De,j.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let De=0;De<ae.locationSize;De++)y(ae.location+De);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let De=0;De<ae.locationSize;De++)b(ae.location+De,ee/ae.locationSize,Ae,Y,ee*Ie,ee/ae.locationSize*De*Ie,Me)}}else if(C!==void 0){const Y=C[J];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(ae.location,Y);break;case 3:r.vertexAttrib3fv(ae.location,Y);break;case 4:r.vertexAttrib4fv(ae.location,Y);break;default:r.vertexAttrib1fv(ae.location,Y)}}}}M()}function S(){N();for(const D in a){const U=a[D];for(const B in U){const V=U[B];for(const W in V)m(V[W].object),delete V[W];delete U[B]}delete a[D]}}function T(D){if(a[D.id]===void 0)return;const U=a[D.id];for(const B in U){const V=U[B];for(const W in V)m(V[W].object),delete V[W];delete U[B]}delete a[D.id]}function P(D){for(const U in a){const B=a[U];if(B[D.id]===void 0)continue;const V=B[D.id];for(const W in V)m(V[W].object),delete V[W];delete B[D.id]}}function N(){X(),u=!0,c!==l&&(c=l,f(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:X,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:y,disableUnusedAttributes:M}}function m1(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d;m++)this.render(u[m],h[m]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_];t.update(m,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function g1(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),E=v&&y,M=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:M}}function _1(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new rs,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{const x=s?0:n,v=x*4;let y=p.clippingState||null;l.value=y,y=u(m,d,v,f);for(let E=0;E!==v;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=f;v!==_;++v,y+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function v1(r){let e=new WeakMap;function t(o,a){return a===Zh?o.mapping=Bo:a===Jh&&(o.mapping=ko),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zh||a===Jh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Pb(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Gd extends u_{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _o=4,$p=[.125,.215,.35,.446,.526,.582],os=20,oh=new Gd,qp=new Ye;let ah=null,lh=0,ch=0;const ss=(1+Math.sqrt(5))/2,js=1/ss,jp=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ss,js),new I(0,ss,-js),new I(js,0,ss),new I(-js,0,ss),new I(ss,js,0),new I(-ss,js,0)];class nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,lh,ch),e.scissorTest=!1,Yl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bo||e.mapping===ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:zi,format:fi,colorSpace:dr,depthBuffer:!1},i=Zp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x1(s)),this._blurMaterial=y1(s,e,t)}return i}_compileMaterial(e){const t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,oh)}_sceneToCubeUV(e,t,n,i){const a=new In(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(qp),u.toneMapping=Nr,u.autoClear=!1;const f=new el({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),m=new ke(new yi,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(qp),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Yl(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bo||e.mapping===ko;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Yl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=jp[(i-1)%jp.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ke(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*os-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):os;g>os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${os}`);const p=[];let x=0;for(let b=0;b<os;++b){const L=b/_,S=Math.exp(-L*L/2);p.push(S),b===0?x+=S:b<g&&(x+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;const y=this._sizeLods[i],E=3*y*(i>v-_o?i-v+_o:0),M=4*(this._cubeSize-y);Yl(t,E,M,3*y,2*y),l.setRenderTarget(t),l.render(h,oh)}}function x1(r){const e=[],t=[],n=[];let i=r;const s=r-_o+1+$p.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-_o?l=$p[o-r+_o-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),v=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let M=0;M<f;M++){const b=M%3*2/3-1,L=M>2?0:-1,S=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];x.set(S,_*m*M),v.set(d,g*m*M);const T=[M,M,M,M,M,M];y.set(T,p*m*M)}const E=new zt;E.setAttribute("position",new rn(x,_)),E.setAttribute("uv",new rn(v,g)),E.setAttribute("faceIndex",new rn(y,p)),e.push(E),i>_o&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zp(r,e,t){const n=new xi(r,e,t);return n.texture.mapping=uu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function y1(r,e,t){const n=new Float32Array(os),i=new I(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Jp(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Kp(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Wd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function b1(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zh||l===Jh,u=l===Bo||l===ko;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new nd(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new nd(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function S1(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function M1(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,y=x.length;v<y;v+=3){const E=x[v+0],M=x[v+1],b=x[v+2];d.push(E,M,M,b,b,E)}}else if(m!==void 0){const x=m.array;_=m.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const E=v+0,M=v+1,b=v+2;d.push(E,M,M,b,b,E)}}else return;const g=new(t_(d)?l_:a_)(d,1);g.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function T1(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){r.drawElements(s,m,a,f*l),t.update(m,s,1)}function h(f,m,_){if(_===0)return;let g,p;if(i)g=r,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,m,a,f*l,_),t.update(m,s,_)}function d(f,m,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(f[p]/l,m[p]);else{g.multiDrawElementsWEBGL(s,m,0,a,f,0,_);let p=0;for(let x=0;x<_;x++)p+=m[x];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function E1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function w1(r,e){return r[0]-e[0]}function A1(r,e){return Math.abs(e[1])-Math.abs(r[1])}function C1(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=f!==void 0?f.length:0;let _=s.get(u);if(_===void 0||_.count!==m){let D=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let L=0;x===!0&&(L=1),v===!0&&(L=2),y===!0&&(L=3);let S=u.attributes.position.count*L,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const P=new Float32Array(S*T*4*m),N=new r_(P,S,T,m);N.type=sr,N.needsUpdate=!0;const X=L*4;for(let U=0;U<m;U++){const B=E[U],V=M[U],W=b[U],F=S*T*4*U;for(let C=0;C<B.count;C++){const J=C*X;x===!0&&(o.fromBufferAttribute(B,C),P[F+J+0]=o.x,P[F+J+1]=o.y,P[F+J+2]=o.z,P[F+J+3]=0),v===!0&&(o.fromBufferAttribute(V,C),P[F+J+4]=o.x,P[F+J+5]=o.y,P[F+J+6]=o.z,P[F+J+7]=0),y===!0&&(o.fromBufferAttribute(W,C),P[F+J+8]=o.x,P[F+J+9]=o.y,P[F+J+10]=o.z,P[F+J+11]=W.itemSize===4?o.w:1)}}_={count:m,texture:N,size:new ne(S,T)},s.set(u,_),u.addEventListener("dispose",D)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];const p=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",p),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==f){m=[];for(let v=0;v<f;v++)m[v]=[v,0];n[u.id]=m}for(let v=0;v<f;v++){const y=m[v];y[0]=v,y[1]=d[v]}m.sort(A1);for(let v=0;v<8;v++)v<f&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(w1);const _=u.morphAttributes.position,g=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const y=a[v],E=y[0],M=y[1];E!==Number.MAX_SAFE_INTEGER&&M?(_&&u.getAttribute("morphTarget"+v)!==_[E]&&u.setAttribute("morphTarget"+v,_[E]),g&&u.getAttribute("morphNormal"+v)!==g[E]&&u.setAttribute("morphNormal"+v,g[E]),i[v]=M,p+=M):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function R1(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class f_ extends Mn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:vs,u!==vs&&u!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vs&&(n=Cr),n===void 0&&u===zo&&(n=_s),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const p_=new Mn,m_=new f_(1,1);m_.compareFunction=e_;const g_=new r_,__=new pb,v_=new h_,Qp=[],em=[],tm=new Float32Array(16),nm=new Float32Array(9),im=new Float32Array(4);function $o(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Qp[i];if(s===void 0&&(s=new Float32Array(i),Qp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function sn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function on(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function fu(r,e){let t=em[e];t===void 0&&(t=new Int32Array(e),em[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function P1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function L1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2fv(this.addr,e),on(t,e)}}function I1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;r.uniform3fv(this.addr,e),on(t,e)}}function D1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4fv(this.addr,e),on(t,e)}}function N1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;im.set(n),r.uniformMatrix2fv(this.addr,!1,im),on(t,n)}}function U1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;nm.set(n),r.uniformMatrix3fv(this.addr,!1,nm),on(t,n)}}function O1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;tm.set(n),r.uniformMatrix4fv(this.addr,!1,tm),on(t,n)}}function F1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function B1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2iv(this.addr,e),on(t,e)}}function k1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3iv(this.addr,e),on(t,e)}}function z1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4iv(this.addr,e),on(t,e)}}function V1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function H1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2uiv(this.addr,e),on(t,e)}}function G1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3uiv(this.addr,e),on(t,e)}}function W1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4uiv(this.addr,e),on(t,e)}}function X1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?m_:p_;t.setTexture2D(e||s,i)}function Y1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||__,i)}function $1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||v_,i)}function q1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||g_,i)}function j1(r){switch(r){case 5126:return P1;case 35664:return L1;case 35665:return I1;case 35666:return D1;case 35674:return N1;case 35675:return U1;case 35676:return O1;case 5124:case 35670:return F1;case 35667:case 35671:return B1;case 35668:case 35672:return k1;case 35669:case 35673:return z1;case 5125:return V1;case 36294:return H1;case 36295:return G1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return q1}}function Z1(r,e){r.uniform1fv(this.addr,e)}function J1(r,e){const t=$o(e,this.size,2);r.uniform2fv(this.addr,t)}function K1(r,e){const t=$o(e,this.size,3);r.uniform3fv(this.addr,t)}function Q1(r,e){const t=$o(e,this.size,4);r.uniform4fv(this.addr,t)}function eT(r,e){const t=$o(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function tT(r,e){const t=$o(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function nT(r,e){const t=$o(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function iT(r,e){r.uniform1iv(this.addr,e)}function rT(r,e){r.uniform2iv(this.addr,e)}function sT(r,e){r.uniform3iv(this.addr,e)}function oT(r,e){r.uniform4iv(this.addr,e)}function aT(r,e){r.uniform1uiv(this.addr,e)}function lT(r,e){r.uniform2uiv(this.addr,e)}function cT(r,e){r.uniform3uiv(this.addr,e)}function uT(r,e){r.uniform4uiv(this.addr,e)}function hT(r,e,t){const n=this.cache,i=e.length,s=fu(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||p_,s[o])}function dT(r,e,t){const n=this.cache,i=e.length,s=fu(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||__,s[o])}function fT(r,e,t){const n=this.cache,i=e.length,s=fu(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||v_,s[o])}function pT(r,e,t){const n=this.cache,i=e.length,s=fu(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||g_,s[o])}function mT(r){switch(r){case 5126:return Z1;case 35664:return J1;case 35665:return K1;case 35666:return Q1;case 35674:return eT;case 35675:return tT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return rT;case 35668:case 35672:return sT;case 35669:case 35673:return oT;case 5125:return aT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return pT}}class gT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=j1(t.type)}}class _T{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mT(t.type)}}class vT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function rm(r,e){r.seq.push(e),r.map[e.id]=e}function xT(r,e,t){const n=r.name,i=n.length;for(uh.lastIndex=0;;){const s=uh.exec(n),o=uh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rm(t,c===void 0?new gT(a,r,e):new _T(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new vT(a),rm(t,h)),t=h}}}class Sc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);xT(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function sm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const yT=37297;let bT=0;function ST(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function MT(r){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(r);let n;switch(e===t?n="":e===$c&&t===Yc?n="LinearDisplayP3ToLinearSRGB":e===Yc&&t===$c&&(n="LinearSRGBToLinearDisplayP3"),r){case dr:case hu:return[n,"LinearTransferOETF"];case Wt:case zd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function om(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ST(r.getShaderSource(e),o)}else return i}function TT(r,e){const t=MT(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ET(r,e){let t;switch(e){case kg:t="Linear";break;case zg:t="Reinhard";break;case Vg:t="OptimizedCineon";break;case Fd:t="ACESFilmic";break;case Hg:t="AgX";break;case My:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wT(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vo).join(`
`)}function AT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vo).join(`
`)}function CT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function RT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function vo(r){return r!==""}function am(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PT=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(r){return r.replace(PT,IT)}const LT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function IT(r,e){let t=et[e];if(t===void 0){const n=LT.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return id(t)}const DT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(r){return r.replace(DT,NT)}function NT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function um(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ug?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ey?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function OT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Bo:case ko:e="ENVMAP_TYPE_CUBE";break;case uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ko:e="ENVMAP_MODE_REFRACTION";break}return e}function BT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Bg:e="ENVMAP_BLENDING_MULTIPLY";break;case by:e="ENVMAP_BLENDING_MIX";break;case Sy:e="ENVMAP_BLENDING_ADD";break}return e}function kT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zT(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=UT(t),c=OT(t),u=FT(t),h=BT(t),d=kT(t),f=t.isWebGL2?"":wT(t),m=AT(t),_=CT(s),g=i.createProgram();let p,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vo).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vo).join(`
`),x.length>0&&(x+=`
`)):(p=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),x=[f,um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nr?"#define TONE_MAPPING":"",t.toneMapping!==Nr?et.tonemapping_pars_fragment:"",t.toneMapping!==Nr?ET("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,TT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vo).join(`
`)),o=id(o),o=am(o,t),o=lm(o,t),a=id(a),a=am(a,t),a=lm(a,t),o=cm(o),a=cm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=v+p+o,E=v+x+a,M=sm(i,i.VERTEX_SHADER,y),b=sm(i,i.FRAGMENT_SHADER,E);i.attachShader(g,M),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function L(N){if(r.debug.checkShaderErrors){const X=i.getProgramInfoLog(g).trim(),D=i.getShaderInfoLog(M).trim(),U=i.getShaderInfoLog(b).trim();let B=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,M,b);else{const W=om(i,M,"vertex"),F=om(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+W+`
`+F)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(D===""||U==="")&&(V=!1);V&&(N.diagnostics={runnable:B,programLog:X,vertexShader:{log:D,prefix:p},fragmentShader:{log:U,prefix:x}})}i.deleteShader(M),i.deleteShader(b),S=new Sc(i,g),T=RT(i,g)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(g,yT)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=b,this}let VT=0;class HT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new GT(e),t.set(e,n)),n}}class GT{constructor(e){this.id=VT++,this.code=e,this.usedTimes=0}}function WT(r,e,t,n,i,s,o){const a=new s_,l=new HT,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function g(S,T,P,N,X){const D=N.fog,U=X.geometry,B=S.isMeshStandardMaterial?N.environment:null,V=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),W=V&&V.mapping===uu?V.image.height:null,F=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const C=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=C!==void 0?C.length:0;let ae=0;U.morphAttributes.position!==void 0&&(ae=1),U.morphAttributes.normal!==void 0&&(ae=2),U.morphAttributes.color!==void 0&&(ae=3);let j,Y,ee,ue;if(F){const Te=Di[F];j=Te.vertexShader,Y=Te.fragmentShader}else j=S.vertexShader,Y=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),ue=l.getFragmentShaderID(S);const fe=r.getRenderTarget(),Ae=X.isInstancedMesh===!0,Ie=X.isBatchedMesh===!0,Me=!!S.map,De=!!S.matcap,O=!!V,te=!!S.aoMap,K=!!S.lightMap,le=!!S.bumpMap,Q=!!S.normalMap,z=!!S.displacementMap,_e=!!S.emissiveMap,R=!!S.metalnessMap,w=!!S.roughnessMap,H=S.anisotropy>0,se=S.clearcoat>0,oe=S.iridescence>0,ie=S.sheen>0,ye=S.transmission>0,ve=H&&!!S.anisotropyMap,de=se&&!!S.clearcoatMap,Re=se&&!!S.clearcoatNormalMap,Ve=se&&!!S.clearcoatRoughnessMap,re=oe&&!!S.iridescenceMap,lt=oe&&!!S.iridescenceThicknessMap,Oe=ie&&!!S.sheenColorMap,$e=ie&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,Se=!!S.specularColorMap,qe=!!S.specularIntensityMap,nt=ye&&!!S.transmissionMap,ft=ye&&!!S.thicknessMap,be=!!S.gradientMap,he=!!S.alphaMap,k=S.alphaTest>0,pe=!!S.alphaHash,me=!!S.extensions,He=!!U.attributes.uv1,Be=!!U.attributes.uv2,ct=!!U.attributes.uv3;let dt=Nr;return S.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(dt=r.toneMapping),{isWebGL2:u,shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:Y,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ie,instancing:Ae,instancingColor:Ae&&X.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:dr,map:Me,matcap:De,envMap:O,envMapMode:O&&V.mapping,envMapCubeUVHeight:W,aoMap:te,lightMap:K,bumpMap:le,normalMap:Q,displacementMap:d&&z,emissiveMap:_e,normalMapObjectSpace:Q&&S.normalMapType===Vy,normalMapTangentSpace:Q&&S.normalMapType===Qg,metalnessMap:R,roughnessMap:w,anisotropy:H,anisotropyMap:ve,clearcoat:se,clearcoatMap:de,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ve,iridescence:oe,iridescenceMap:re,iridescenceThicknessMap:lt,sheen:ie,sheenColorMap:Oe,sheenRoughnessMap:$e,specularMap:Pe,specularColorMap:Se,specularIntensityMap:qe,transmission:ye,transmissionMap:nt,thicknessMap:ft,gradientMap:be,opaque:S.transparent===!1&&S.blending===Ro,alphaMap:he,alphaTest:k,alphaHash:pe,combine:S.combine,mapUv:Me&&_(S.map.channel),aoMapUv:te&&_(S.aoMap.channel),lightMapUv:K&&_(S.lightMap.channel),bumpMapUv:le&&_(S.bumpMap.channel),normalMapUv:Q&&_(S.normalMap.channel),displacementMapUv:z&&_(S.displacementMap.channel),emissiveMapUv:_e&&_(S.emissiveMap.channel),metalnessMapUv:R&&_(S.metalnessMap.channel),roughnessMapUv:w&&_(S.roughnessMap.channel),anisotropyMapUv:ve&&_(S.anisotropyMap.channel),clearcoatMapUv:de&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:$e&&_(S.sheenRoughnessMap.channel),specularMapUv:Pe&&_(S.specularMap.channel),specularColorMapUv:Se&&_(S.specularColorMap.channel),specularIntensityMapUv:qe&&_(S.specularIntensityMap.channel),transmissionMapUv:nt&&_(S.transmissionMap.channel),thicknessMapUv:ft&&_(S.thicknessMap.channel),alphaMapUv:he&&_(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Q||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:He,vertexUv2s:Be,vertexUv3s:ct,pointsUvs:X.isPoints===!0&&!!U.attributes.uv&&(Me||he),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:dt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Me&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===At,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ui,flipSided:S.side===Vn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)T.push(P),T.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(T,S),v(T,S),T.push(r.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function x(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const T=m[S.type];let P;if(T){const N=Di[T];P=tl.clone(N.uniforms)}else P=S.uniforms;return P}function E(S,T){let P;for(let N=0,X=c.length;N<X;N++){const D=c[N];if(D.cacheKey===T){P=D,++P.usedTimes;break}}return P===void 0&&(P=new zT(r,T,S,s),c.push(P)),P}function M(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function b(S){l.remove(S)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:L}}function XT(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function YT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function hm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function dm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,m,_,g){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||YT),n.length>1&&n.sort(d||hm),i.length>1&&i.sort(d||hm)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function $T(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new dm,r.set(n,[o])):i>=s.length?(o=new dm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function qT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ye};break;case"SpotLight":t={position:new I,direction:new I,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function jT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ZT=0;function JT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function KT(r,e){const t=new qT,n=jT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,o=new Ke,a=new Ke;function l(u,h){let d=0,f=0,m=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,g=0,p=0,x=0,v=0,y=0,E=0,M=0,b=0,L=0,S=0;u.sort(JT);const T=h===!0?Math.PI:1;for(let N=0,X=u.length;N<X;N++){const D=u[N],U=D.color,B=D.intensity,V=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=U.r*B*T,f+=U.g*B*T,m+=U.b*B*T;else if(D.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(D.sh.coefficients[F],B);S++}else if(D.isDirectionalLight){const F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const C=D.shadow,J=n.get(D);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=D.shadow.matrix,y++}i.directional[_]=F,_++}else if(D.isSpotLight){const F=t.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(U).multiplyScalar(B*T),F.distance=V,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,i.spot[p]=F;const C=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,C.updateMatrices(D),D.castShadow&&L++),i.spotLightMatrix[p]=C.matrix,D.castShadow){const J=n.get(D);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=W,M++}p++}else if(D.isRectAreaLight){const F=t.get(D);F.color.copy(U).multiplyScalar(B),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=F,x++}else if(D.isPointLight){const F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity*T),F.distance=D.distance,F.decay=D.decay,D.castShadow){const C=D.shadow,J=n.get(D);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,J.shadowCameraNear=C.camera.near,J.shadowCameraFar=C.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=F,g++}else if(D.isHemisphereLight){const F=t.get(D);F.skyColor.copy(D.color).multiplyScalar(B*T),F.groundColor.copy(D.groundColor).multiplyScalar(B*T),i.hemi[v]=F,v++}}x>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;const P=i.hash;(P.directionalLength!==_||P.pointLength!==g||P.spotLength!==p||P.rectAreaLength!==x||P.hemiLength!==v||P.numDirectionalShadows!==y||P.numPointShadows!==E||P.numSpotShadows!==M||P.numSpotMaps!==b||P.numLightProbes!==S)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+b-L,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=S,P.directionalLength=_,P.pointLength=g,P.spotLength=p,P.rectAreaLength=x,P.hemiLength=v,P.numDirectionalShadows=y,P.numPointShadows=E,P.numSpotShadows=M,P.numSpotMaps=b,P.numLightProbes=S,i.version=ZT++)}function c(u,h){let d=0,f=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(y.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:i}}function fm(r,e){const t=new KT(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function QT(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new fm(r,e),t.set(s,[l])):o>=a.length?(l=new fm(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class eE extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tE extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rE(r,e,t){let n=new Hd;const i=new ne,s=new ne,o=new Tt,a=new eE({depthPacking:zy}),l=new tE,c={},u=t.maxTextureSize,h={[zr]:Vn,[Vn]:zr,[Ui]:Ui},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:nE,fragmentShader:iE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new zt;m.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ke(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ug;let p=this.type;this.render=function(M,b,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const S=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(lr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const X=p!==Qi&&this.type===Qi,D=p===Qi&&this.type!==Qi;for(let U=0,B=M.length;U<B;U++){const V=M[U],W=V.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const F=W.getFrameExtents();if(i.multiply(F),s.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/F.x),i.x=s.x*F.x,W.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/F.y),i.y=s.y*F.y,W.mapSize.y=s.y)),W.map===null||X===!0||D===!0){const J=this.type!==Qi?{minFilter:hn,magFilter:hn}:{};W.map!==null&&W.map.dispose(),W.map=new xi(i.x,i.y,J),W.map.texture.name=V.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const C=W.getViewportCount();for(let J=0;J<C;J++){const ae=W.getViewport(J);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),N.viewport(o),W.updateMatrices(V,J),n=W.getFrustum(),y(b,L,W.camera,V,this.type)}W.isPointLightShadow!==!0&&this.type===Qi&&x(W,L),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(S,T,P)};function x(M,b){const L=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new xi(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(b,null,L,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(b,null,L,f,_,null)}function v(M,b,L,S){let T=null;const P=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)T=P;else if(T=L.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=T.uuid,X=b.uuid;let D=c[N];D===void 0&&(D={},c[N]=D);let U=D[X];U===void 0&&(U=T.clone(),D[X]=U,b.addEventListener("dispose",E)),T=U}if(T.visible=b.visible,T.wireframe=b.wireframe,S===Qi?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:h[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const N=r.properties.get(T);N.light=L}return T}function y(M,b,L,S,T){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===Qi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const X=e.update(M),D=M.material;if(Array.isArray(D)){const U=X.groups;for(let B=0,V=U.length;B<V;B++){const W=U[B],F=D[W.materialIndex];if(F&&F.visible){const C=v(M,F,S,T);M.onBeforeShadow(r,M,b,L,X,C,W),r.renderBufferDirect(L,null,X,C,M,W),M.onAfterShadow(r,M,b,L,X,C,W)}}}else if(D.visible){const U=v(M,D,S,T);M.onBeforeShadow(r,M,b,L,X,U,null),r.renderBufferDirect(L,null,X,U,M,null),M.onAfterShadow(r,M,b,L,X,U,null)}}const N=M.children;for(let X=0,D=N.length;X<D;X++)y(N[X],b,L,S,T)}function E(M){M.target.removeEventListener("dispose",E);for(const L in c){const S=c[L],T=M.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function sE(r,e,t){const n=t.isWebGL2;function i(){let k=!1;const pe=new Tt;let me=null;const He=new Tt(0,0,0,0);return{setMask:function(Be){me!==Be&&!k&&(r.colorMask(Be,Be,Be,Be),me=Be)},setLocked:function(Be){k=Be},setClear:function(Be,ct,dt,Le,Te){Te===!0&&(Be*=Le,ct*=Le,dt*=Le),pe.set(Be,ct,dt,Le),He.equals(pe)===!1&&(r.clearColor(Be,ct,dt,Le),He.copy(pe))},reset:function(){k=!1,me=null,He.set(-1,0,0,0)}}}function s(){let k=!1,pe=null,me=null,He=null;return{setTest:function(Be){Be?Ie(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(Be){pe!==Be&&!k&&(r.depthMask(Be),pe=Be)},setFunc:function(Be){if(me!==Be){switch(Be){case py:r.depthFunc(r.NEVER);break;case my:r.depthFunc(r.ALWAYS);break;case gy:r.depthFunc(r.LESS);break;case zc:r.depthFunc(r.LEQUAL);break;case _y:r.depthFunc(r.EQUAL);break;case vy:r.depthFunc(r.GEQUAL);break;case xy:r.depthFunc(r.GREATER);break;case yy:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=Be}},setLocked:function(Be){k=Be},setClear:function(Be){He!==Be&&(r.clearDepth(Be),He=Be)},reset:function(){k=!1,pe=null,me=null,He=null}}}function o(){let k=!1,pe=null,me=null,He=null,Be=null,ct=null,dt=null,Le=null,Te=null;return{setTest:function(Fe){k||(Fe?Ie(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Fe){pe!==Fe&&!k&&(r.stencilMask(Fe),pe=Fe)},setFunc:function(Fe,ce,Ge){(me!==Fe||He!==ce||Be!==Ge)&&(r.stencilFunc(Fe,ce,Ge),me=Fe,He=ce,Be=Ge)},setOp:function(Fe,ce,Ge){(ct!==Fe||dt!==ce||Le!==Ge)&&(r.stencilOp(Fe,ce,Ge),ct=Fe,dt=ce,Le=Ge)},setLocked:function(Fe){k=Fe},setClear:function(Fe){Te!==Fe&&(r.clearStencil(Fe),Te=Fe)},reset:function(){k=!1,pe=null,me=null,He=null,Be=null,ct=null,dt=null,Le=null,Te=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},f={},m=new WeakMap,_=[],g=null,p=!1,x=null,v=null,y=null,E=null,M=null,b=null,L=null,S=new Ye(0,0,0),T=0,P=!1,N=null,X=null,D=null,U=null,B=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,F=0;const C=r.getParameter(r.VERSION);C.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(C)[1]),W=F>=1):C.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),W=F>=2);let J=null,ae={};const j=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),ee=new Tt().fromArray(j),ue=new Tt().fromArray(Y);function fe(k,pe,me,He){const Be=new Uint8Array(4),ct=r.createTexture();r.bindTexture(k,ct),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let dt=0;dt<me;dt++)n&&(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)?r.texImage3D(pe,0,r.RGBA,1,1,He,0,r.RGBA,r.UNSIGNED_BYTE,Be):r.texImage2D(pe+dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Be);return ct}const Ae={};Ae[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),Ae[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ae[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(r.DEPTH_TEST),l.setFunc(zc),_e(!1),R(jf),Ie(r.CULL_FACE),Q(lr);function Ie(k){d[k]!==!0&&(r.enable(k),d[k]=!0)}function Me(k){d[k]!==!1&&(r.disable(k),d[k]=!1)}function De(k,pe){return f[k]!==pe?(r.bindFramebuffer(k,pe),f[k]=pe,n&&(k===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=pe),k===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=pe)),!0):!1}function O(k,pe){let me=_,He=!1;if(k)if(me=m.get(pe),me===void 0&&(me=[],m.set(pe,me)),k.isWebGLMultipleRenderTargets){const Be=k.texture;if(me.length!==Be.length||me[0]!==r.COLOR_ATTACHMENT0){for(let ct=0,dt=Be.length;ct<dt;ct++)me[ct]=r.COLOR_ATTACHMENT0+ct;me.length=Be.length,He=!0}}else me[0]!==r.COLOR_ATTACHMENT0&&(me[0]=r.COLOR_ATTACHMENT0,He=!0);else me[0]!==r.BACK&&(me[0]=r.BACK,He=!0);He&&(t.isWebGL2?r.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function te(k){return g!==k?(r.useProgram(k),g=k,!0):!1}const K={[Sr]:r.FUNC_ADD,[ty]:r.FUNC_SUBTRACT,[ny]:r.FUNC_REVERSE_SUBTRACT};if(n)K[Kf]=r.MIN,K[Qf]=r.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(K[Kf]=k.MIN_EXT,K[Qf]=k.MAX_EXT)}const le={[Fg]:r.ZERO,[bc]:r.ONE,[iy]:r.SRC_COLOR,[qh]:r.SRC_ALPHA,[cy]:r.SRC_ALPHA_SATURATE,[ay]:r.DST_COLOR,[sy]:r.DST_ALPHA,[ry]:r.ONE_MINUS_SRC_COLOR,[jh]:r.ONE_MINUS_SRC_ALPHA,[ly]:r.ONE_MINUS_DST_COLOR,[oy]:r.ONE_MINUS_DST_ALPHA,[uy]:r.CONSTANT_COLOR,[hy]:r.ONE_MINUS_CONSTANT_COLOR,[dy]:r.CONSTANT_ALPHA,[fy]:r.ONE_MINUS_CONSTANT_ALPHA};function Q(k,pe,me,He,Be,ct,dt,Le,Te,Fe){if(k===lr){p===!0&&(Me(r.BLEND),p=!1);return}if(p===!1&&(Ie(r.BLEND),p=!0),k!==Og){if(k!==x||Fe!==P){if((v!==Sr||M!==Sr)&&(r.blendEquation(r.FUNC_ADD),v=Sr,M=Sr),Fe)switch(k){case Ro:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ja:r.blendFunc(r.ONE,r.ONE);break;case Zf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ro:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ja:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,E=null,b=null,L=null,S.set(0,0,0),T=0,x=k,P=Fe}return}Be=Be||pe,ct=ct||me,dt=dt||He,(pe!==v||Be!==M)&&(r.blendEquationSeparate(K[pe],K[Be]),v=pe,M=Be),(me!==y||He!==E||ct!==b||dt!==L)&&(r.blendFuncSeparate(le[me],le[He],le[ct],le[dt]),y=me,E=He,b=ct,L=dt),(Le.equals(S)===!1||Te!==T)&&(r.blendColor(Le.r,Le.g,Le.b,Te),S.copy(Le),T=Te),x=k,P=!1}function z(k,pe){k.side===Ui?Me(r.CULL_FACE):Ie(r.CULL_FACE);let me=k.side===Vn;pe&&(me=!me),_e(me),k.blending===Ro&&k.transparent===!1?Q(lr):Q(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const He=k.stencilWrite;c.setTest(He),He&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),H(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ie(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function _e(k){N!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),N=k)}function R(k){k!==Kx?(Ie(r.CULL_FACE),k!==X&&(k===jf?r.cullFace(r.BACK):k===Qx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),X=k}function w(k){k!==D&&(W&&r.lineWidth(k),D=k)}function H(k,pe,me){k?(Ie(r.POLYGON_OFFSET_FILL),(U!==pe||B!==me)&&(r.polygonOffset(pe,me),U=pe,B=me)):Me(r.POLYGON_OFFSET_FILL)}function se(k){k?Ie(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function oe(k){k===void 0&&(k=r.TEXTURE0+V-1),J!==k&&(r.activeTexture(k),J=k)}function ie(k,pe,me){me===void 0&&(J===null?me=r.TEXTURE0+V-1:me=J);let He=ae[me];He===void 0&&(He={type:void 0,texture:void 0},ae[me]=He),(He.type!==k||He.texture!==pe)&&(J!==me&&(r.activeTexture(me),J=me),r.bindTexture(k,pe||Ae[k]),He.type=k,He.texture=pe)}function ye(){const k=ae[J];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ve(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $e(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qe(k){ee.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),ee.copy(k))}function nt(k){ue.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),ue.copy(k))}function ft(k,pe){let me=h.get(pe);me===void 0&&(me=new WeakMap,h.set(pe,me));let He=me.get(k);He===void 0&&(He=r.getUniformBlockIndex(pe,k.name),me.set(k,He))}function be(k,pe){const He=h.get(pe).get(k);u.get(pe)!==He&&(r.uniformBlockBinding(pe,He,k.__bindingPointIndex),u.set(pe,He))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},J=null,ae={},f={},m=new WeakMap,_=[],g=null,p=!1,x=null,v=null,y=null,E=null,M=null,b=null,L=null,S=new Ye(0,0,0),T=0,P=!1,N=null,X=null,D=null,U=null,B=null,ee.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:Me,bindFramebuffer:De,drawBuffers:O,useProgram:te,setBlending:Q,setMaterial:z,setFlipSided:_e,setCullFace:R,setLineWidth:w,setPolygonOffset:H,setScissorTest:se,activeTexture:oe,bindTexture:ie,unbindTexture:ye,compressedTexImage2D:ve,compressedTexImage3D:de,texImage2D:Pe,texImage3D:Se,updateUBOMapping:ft,uniformBlockBinding:be,texStorage2D:Oe,texStorage3D:$e,texSubImage2D:Re,texSubImage3D:Ve,compressedTexSubImage2D:re,compressedTexSubImage3D:lt,scissor:qe,viewport:nt,reset:he}}function oE(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,w){return f?new OffscreenCanvas(R,w):Qa("canvas")}function _(R,w,H,se){let oe=1;if((R.width>se||R.height>se)&&(oe=se/Math.max(R.width,R.height)),oe<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ie=w?jc:Math.floor,ye=ie(oe*R.width),ve=ie(oe*R.height);h===void 0&&(h=m(ye,ve));const de=H?m(ye,ve):h;return de.width=ye,de.height=ve,de.getContext("2d").drawImage(R,0,0,ye,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ye+"x"+ve+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function g(R){return td(R.width)&&td(R.height)}function p(R){return a?!1:R.wrapS!==Ci||R.wrapT!==Ci||R.minFilter!==hn&&R.minFilter!==hi}function x(R,w){return R.generateMipmaps&&w&&R.minFilter!==hn&&R.minFilter!==hi}function v(R){r.generateMipmap(R)}function y(R,w,H,se,oe=!1){if(a===!1)return w;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=w;if(w===r.RED&&(H===r.FLOAT&&(ie=r.R32F),H===r.HALF_FLOAT&&(ie=r.R16F),H===r.UNSIGNED_BYTE&&(ie=r.R8)),w===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(ie=r.R8UI),H===r.UNSIGNED_SHORT&&(ie=r.R16UI),H===r.UNSIGNED_INT&&(ie=r.R32UI),H===r.BYTE&&(ie=r.R8I),H===r.SHORT&&(ie=r.R16I),H===r.INT&&(ie=r.R32I)),w===r.RG&&(H===r.FLOAT&&(ie=r.RG32F),H===r.HALF_FLOAT&&(ie=r.RG16F),H===r.UNSIGNED_BYTE&&(ie=r.RG8)),w===r.RGBA){const ye=oe?Xc:xt.getTransfer(se);H===r.FLOAT&&(ie=r.RGBA32F),H===r.HALF_FLOAT&&(ie=r.RGBA16F),H===r.UNSIGNED_BYTE&&(ie=ye===At?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function E(R,w,H){return x(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==hi?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function M(R){return R===hn||R===tp||R===Ou?r.NEAREST:r.LINEAR}function b(R){const w=R.target;w.removeEventListener("dispose",b),S(w),w.isVideoTexture&&u.delete(w)}function L(R){const w=R.target;w.removeEventListener("dispose",L),P(w)}function S(R){const w=n.get(R);if(w.__webglInit===void 0)return;const H=R.source,se=d.get(H);if(se){const oe=se[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&T(R),Object.keys(se).length===0&&d.delete(H)}n.remove(R)}function T(R){const w=n.get(R);r.deleteTexture(w.__webglTexture);const H=R.source,se=d.get(H);delete se[w.__cacheKey],o.memory.textures--}function P(R){const w=R.texture,H=n.get(R),se=n.get(w);if(se.__webglTexture!==void 0&&(r.deleteTexture(se.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(H.__webglFramebuffer[oe]))for(let ie=0;ie<H.__webglFramebuffer[oe].length;ie++)r.deleteFramebuffer(H.__webglFramebuffer[oe][ie]);else r.deleteFramebuffer(H.__webglFramebuffer[oe]);H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[oe])}else{if(Array.isArray(H.__webglFramebuffer))for(let oe=0;oe<H.__webglFramebuffer.length;oe++)r.deleteFramebuffer(H.__webglFramebuffer[oe]);else r.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let oe=0;oe<H.__webglColorRenderbuffer.length;oe++)H.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[oe]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let oe=0,ie=w.length;oe<ie;oe++){const ye=n.get(w[oe]);ye.__webglTexture&&(r.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(w[oe])}n.remove(w),n.remove(R)}let N=0;function X(){N=0}function D(){const R=N;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),N+=1,R}function U(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function B(R,w){const H=n.get(R);if(R.isVideoTexture&&z(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(H,R,w);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+w)}function V(R,w){const H=n.get(R);if(R.version>0&&H.__version!==R.version){ee(H,R,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+w)}function W(R,w){const H=n.get(R);if(R.version>0&&H.__version!==R.version){ee(H,R,w);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+w)}function F(R,w){const H=n.get(R);if(R.version>0&&H.__version!==R.version){ue(H,R,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+w)}const C={[Vc]:r.REPEAT,[Ci]:r.CLAMP_TO_EDGE,[Kh]:r.MIRRORED_REPEAT},J={[hn]:r.NEAREST,[tp]:r.NEAREST_MIPMAP_NEAREST,[Ou]:r.NEAREST_MIPMAP_LINEAR,[hi]:r.LINEAR,[Ey]:r.LINEAR_MIPMAP_NEAREST,[Ka]:r.LINEAR_MIPMAP_LINEAR},ae={[Hy]:r.NEVER,[qy]:r.ALWAYS,[Gy]:r.LESS,[e_]:r.LEQUAL,[Wy]:r.EQUAL,[$y]:r.GEQUAL,[Xy]:r.GREATER,[Yy]:r.NOTEQUAL};function j(R,w,H){if(H?(r.texParameteri(R,r.TEXTURE_WRAP_S,C[w.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,C[w.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,C[w.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,J[w.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,J[w.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==Ci||w.wrapT!==Ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,M(w.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,M(w.minFilter)),w.minFilter!==hn&&w.minFilter!==hi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ae[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===hn||w.minFilter!==Ou&&w.minFilter!==Ka||w.type===sr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===zi&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(R,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Y(R,w){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",b));const se=w.source;let oe=d.get(se);oe===void 0&&(oe={},d.set(se,oe));const ie=U(w);if(ie!==R.__cacheKey){oe[ie]===void 0&&(oe[ie]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[ie].usedTimes++;const ye=oe[R.__cacheKey];ye!==void 0&&(oe[R.__cacheKey].usedTimes--,ye.usedTimes===0&&T(w)),R.__cacheKey=ie,R.__webglTexture=oe[ie].texture}return H}function ee(R,w,H){let se=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=r.TEXTURE_3D);const oe=Y(R,w),ie=w.source;t.bindTexture(se,R.__webglTexture,r.TEXTURE0+H);const ye=n.get(ie);if(ie.version!==ye.__version||oe===!0){t.activeTexture(r.TEXTURE0+H);const ve=xt.getPrimaries(xt.workingColorSpace),de=w.colorSpace===pi?null:xt.getPrimaries(w.colorSpace),Re=w.colorSpace===pi||ve===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ve=p(w)&&g(w.image)===!1;let re=_(w.image,Ve,!1,i.maxTextureSize);re=_e(w,re);const lt=g(re)||a,Oe=s.convert(w.format,w.colorSpace);let $e=s.convert(w.type),Pe=y(w.internalFormat,Oe,$e,w.colorSpace,w.isVideoTexture);j(se,w,lt);let Se;const qe=w.mipmaps,nt=a&&w.isVideoTexture!==!0&&Pe!==Zg,ft=ye.__version===void 0||oe===!0,be=E(w,re,lt);if(w.isDepthTexture)Pe=r.DEPTH_COMPONENT,a?w.type===sr?Pe=r.DEPTH_COMPONENT32F:w.type===Cr?Pe=r.DEPTH_COMPONENT24:w.type===_s?Pe=r.DEPTH24_STENCIL8:Pe=r.DEPTH_COMPONENT16:w.type===sr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===vs&&Pe===r.DEPTH_COMPONENT&&w.type!==Bd&&w.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Cr,$e=s.convert(w.type)),w.format===zo&&Pe===r.DEPTH_COMPONENT&&(Pe=r.DEPTH_STENCIL,w.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=_s,$e=s.convert(w.type))),ft&&(nt?t.texStorage2D(r.TEXTURE_2D,1,Pe,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Pe,re.width,re.height,0,Oe,$e,null));else if(w.isDataTexture)if(qe.length>0&&lt){nt&&ft&&t.texStorage2D(r.TEXTURE_2D,be,Pe,qe[0].width,qe[0].height);for(let he=0,k=qe.length;he<k;he++)Se=qe[he],nt?t.texSubImage2D(r.TEXTURE_2D,he,0,0,Se.width,Se.height,Oe,$e,Se.data):t.texImage2D(r.TEXTURE_2D,he,Pe,Se.width,Se.height,0,Oe,$e,Se.data);w.generateMipmaps=!1}else nt?(ft&&t.texStorage2D(r.TEXTURE_2D,be,Pe,re.width,re.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,Oe,$e,re.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,re.width,re.height,0,Oe,$e,re.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,Pe,qe[0].width,qe[0].height,re.depth);for(let he=0,k=qe.length;he<k;he++)Se=qe[he],w.format!==fi?Oe!==null?nt?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,re.depth,Oe,Se.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,he,Pe,Se.width,Se.height,re.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,re.depth,Oe,$e,Se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,he,Pe,Se.width,Se.height,re.depth,0,Oe,$e,Se.data)}else{nt&&ft&&t.texStorage2D(r.TEXTURE_2D,be,Pe,qe[0].width,qe[0].height);for(let he=0,k=qe.length;he<k;he++)Se=qe[he],w.format!==fi?Oe!==null?nt?t.compressedTexSubImage2D(r.TEXTURE_2D,he,0,0,Se.width,Se.height,Oe,Se.data):t.compressedTexImage2D(r.TEXTURE_2D,he,Pe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(r.TEXTURE_2D,he,0,0,Se.width,Se.height,Oe,$e,Se.data):t.texImage2D(r.TEXTURE_2D,he,Pe,Se.width,Se.height,0,Oe,$e,Se.data)}else if(w.isDataArrayTexture)nt?(ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,Pe,re.width,re.height,re.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Oe,$e,re.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,Oe,$e,re.data);else if(w.isData3DTexture)nt?(ft&&t.texStorage3D(r.TEXTURE_3D,be,Pe,re.width,re.height,re.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Oe,$e,re.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,Oe,$e,re.data);else if(w.isFramebufferTexture){if(ft)if(nt)t.texStorage2D(r.TEXTURE_2D,be,Pe,re.width,re.height);else{let he=re.width,k=re.height;for(let pe=0;pe<be;pe++)t.texImage2D(r.TEXTURE_2D,pe,Pe,he,k,0,Oe,$e,null),he>>=1,k>>=1}}else if(qe.length>0&&lt){nt&&ft&&t.texStorage2D(r.TEXTURE_2D,be,Pe,qe[0].width,qe[0].height);for(let he=0,k=qe.length;he<k;he++)Se=qe[he],nt?t.texSubImage2D(r.TEXTURE_2D,he,0,0,Oe,$e,Se):t.texImage2D(r.TEXTURE_2D,he,Pe,Oe,$e,Se);w.generateMipmaps=!1}else nt?(ft&&t.texStorage2D(r.TEXTURE_2D,be,Pe,re.width,re.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,$e,re)):t.texImage2D(r.TEXTURE_2D,0,Pe,Oe,$e,re);x(w,lt)&&v(se),ye.__version=ie.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ue(R,w,H){if(w.image.length!==6)return;const se=Y(R,w),oe=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+H);const ie=n.get(oe);if(oe.version!==ie.__version||se===!0){t.activeTexture(r.TEXTURE0+H);const ye=xt.getPrimaries(xt.workingColorSpace),ve=w.colorSpace===pi?null:xt.getPrimaries(w.colorSpace),de=w.colorSpace===pi||ye===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Re=w.isCompressedTexture||w.image[0].isCompressedTexture,Ve=w.image[0]&&w.image[0].isDataTexture,re=[];for(let he=0;he<6;he++)!Re&&!Ve?re[he]=_(w.image[he],!1,!0,i.maxCubemapSize):re[he]=Ve?w.image[he].image:w.image[he],re[he]=_e(w,re[he]);const lt=re[0],Oe=g(lt)||a,$e=s.convert(w.format,w.colorSpace),Pe=s.convert(w.type),Se=y(w.internalFormat,$e,Pe,w.colorSpace),qe=a&&w.isVideoTexture!==!0,nt=ie.__version===void 0||se===!0;let ft=E(w,lt,Oe);j(r.TEXTURE_CUBE_MAP,w,Oe);let be;if(Re){qe&&nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Se,lt.width,lt.height);for(let he=0;he<6;he++){be=re[he].mipmaps;for(let k=0;k<be.length;k++){const pe=be[k];w.format!==fi?$e!==null?qe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,k,0,0,pe.width,pe.height,$e,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,k,Se,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,k,0,0,pe.width,pe.height,$e,Pe,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,k,Se,pe.width,pe.height,0,$e,Pe,pe.data)}}}else{be=w.mipmaps,qe&&nt&&(be.length>0&&ft++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Se,re[0].width,re[0].height));for(let he=0;he<6;he++)if(Ve){qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,re[he].width,re[he].height,$e,Pe,re[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Se,re[he].width,re[he].height,0,$e,Pe,re[he].data);for(let k=0;k<be.length;k++){const me=be[k].image[he].image;qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,k+1,0,0,me.width,me.height,$e,Pe,me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,k+1,Se,me.width,me.height,0,$e,Pe,me.data)}}else{qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,$e,Pe,re[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Se,$e,Pe,re[he]);for(let k=0;k<be.length;k++){const pe=be[k];qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,k+1,0,0,$e,Pe,pe.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,k+1,Se,$e,Pe,pe.image[he])}}}x(w,Oe)&&v(r.TEXTURE_CUBE_MAP),ie.__version=oe.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function fe(R,w,H,se,oe,ie){const ye=s.convert(H.format,H.colorSpace),ve=s.convert(H.type),de=y(H.internalFormat,ye,ve,H.colorSpace);if(!n.get(w).__hasExternalTextures){const Ve=Math.max(1,w.width>>ie),re=Math.max(1,w.height>>ie);oe===r.TEXTURE_3D||oe===r.TEXTURE_2D_ARRAY?t.texImage3D(oe,ie,de,Ve,re,w.depth,0,ye,ve,null):t.texImage2D(oe,ie,de,Ve,re,0,ye,ve,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Q(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,oe,n.get(H).__webglTexture,0,le(w)):(oe===r.TEXTURE_2D||oe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,oe,n.get(H).__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(R,w,H){if(r.bindRenderbuffer(r.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let se=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(H||Q(w)){const oe=w.depthTexture;oe&&oe.isDepthTexture&&(oe.type===sr?se=r.DEPTH_COMPONENT32F:oe.type===Cr&&(se=r.DEPTH_COMPONENT24));const ie=le(w);Q(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,se,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,se,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,se,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const se=le(w);H&&Q(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,r.DEPTH24_STENCIL8,w.width,w.height):Q(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const se=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let oe=0;oe<se.length;oe++){const ie=se[oe],ye=s.convert(ie.format,ie.colorSpace),ve=s.convert(ie.type),de=y(ie.internalFormat,ye,ve,ie.colorSpace),Re=le(w);H&&Q(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,de,w.width,w.height):Q(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,de,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,de,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);const se=n.get(w.depthTexture).__webglTexture,oe=le(w);if(w.depthTexture.format===vs)Q(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(w.depthTexture.format===zo)Q(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Me(R){const w=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ie(w.__webglFramebuffer,R)}else if(H){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]=r.createRenderbuffer(),Ae(w.__webglDepthbuffer[se],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),Ae(w.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(R,w,H){const se=n.get(R);w!==void 0&&fe(se.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Me(R)}function O(R){const w=R.texture,H=n.get(R),se=n.get(w);R.addEventListener("dispose",L),R.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=w.version,o.memory.textures++);const oe=R.isWebGLCubeRenderTarget===!0,ie=R.isWebGLMultipleRenderTargets===!0,ye=g(R)||a;if(oe){H.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[ve]=[];for(let de=0;de<w.mipmaps.length;de++)H.__webglFramebuffer[ve][de]=r.createFramebuffer()}else H.__webglFramebuffer[ve]=r.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let ve=0;ve<w.mipmaps.length;ve++)H.__webglFramebuffer[ve]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(ie)if(i.drawBuffers){const ve=R.texture;for(let de=0,Re=ve.length;de<Re;de++){const Ve=n.get(ve[de]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Q(R)===!1){const ve=ie?w:[w];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<ve.length;de++){const Re=ve[de];H.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[de]);const Ve=s.convert(Re.format,Re.colorSpace),re=s.convert(Re.type),lt=y(Re.internalFormat,Ve,re,Re.colorSpace,R.isXRRenderTarget===!0),Oe=le(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,lt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,H.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Ae(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),j(r.TEXTURE_CUBE_MAP,w,ye);for(let ve=0;ve<6;ve++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)fe(H.__webglFramebuffer[ve][de],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,de);else fe(H.__webglFramebuffer[ve],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);x(w,ye)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ve=R.texture;for(let de=0,Re=ve.length;de<Re;de++){const Ve=ve[de],re=n.get(Ve);t.bindTexture(r.TEXTURE_2D,re.__webglTexture),j(r.TEXTURE_2D,Ve,ye),fe(H.__webglFramebuffer,R,Ve,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),x(Ve,ye)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let ve=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ve=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,se.__webglTexture),j(ve,w,ye),a&&w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)fe(H.__webglFramebuffer[de],R,w,r.COLOR_ATTACHMENT0,ve,de);else fe(H.__webglFramebuffer,R,w,r.COLOR_ATTACHMENT0,ve,0);x(w,ye)&&v(ve),t.unbindTexture()}R.depthBuffer&&Me(R)}function te(R){const w=g(R)||a,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let se=0,oe=H.length;se<oe;se++){const ie=H[se];if(x(ie,w)){const ye=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ve=n.get(ie).__webglTexture;t.bindTexture(ye,ve),v(ye),t.unbindTexture()}}}function K(R){if(a&&R.samples>0&&Q(R)===!1){const w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,se=R.height;let oe=r.COLOR_BUFFER_BIT;const ie=[],ye=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(R),de=R.isWebGLMultipleRenderTargets===!0;if(de)for(let Re=0;Re<w.length;Re++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Re=0;Re<w.length;Re++){ie.push(r.COLOR_ATTACHMENT0+Re),R.depthBuffer&&ie.push(ye);const Ve=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Ve===!1&&(R.depthBuffer&&(oe|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(oe|=r.STENCIL_BUFFER_BIT)),de&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[Re]),Ve===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ye]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ye])),de){const re=n.get(w[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,H,se,0,0,H,se,oe,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let Re=0;Re<w.length;Re++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,ve.__webglColorRenderbuffer[Re]);const Ve=n.get(w[Re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,Ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function le(R){return Math.min(i.maxSamples,R.samples)}function Q(R){const w=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function z(R){const w=o.render.frame;u.get(R)!==w&&(u.set(R,w),R.update())}function _e(R,w){const H=R.colorSpace,se=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===ed||H!==dr&&H!==pi&&(xt.getTransfer(H)===At?a===!1?e.has("EXT_sRGB")===!0&&se===fi?(R.format=ed,R.minFilter=hi,R.generateMipmaps=!1):w=n_.sRGBToLinear(w):(se!==fi||oe!==Ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}this.allocateTextureUnit=D,this.resetTextureUnits=X,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=F,this.rebindTextures=De,this.setupRenderTarget=O,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Q}function aE(r,e,t){const n=t.isWebGL2;function i(s,o=pi){let a;const l=xt.getTransfer(o);if(s===Ur)return r.UNSIGNED_BYTE;if(s===Xg)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Yg)return r.UNSIGNED_SHORT_5_5_5_1;if(s===wy)return r.BYTE;if(s===Ay)return r.SHORT;if(s===Bd)return r.UNSIGNED_SHORT;if(s===Wg)return r.INT;if(s===Cr)return r.UNSIGNED_INT;if(s===sr)return r.FLOAT;if(s===zi)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Cy)return r.ALPHA;if(s===fi)return r.RGBA;if(s===Ry)return r.LUMINANCE;if(s===Py)return r.LUMINANCE_ALPHA;if(s===vs)return r.DEPTH_COMPONENT;if(s===zo)return r.DEPTH_STENCIL;if(s===ed)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ly)return r.RED;if(s===$g)return r.RED_INTEGER;if(s===Iy)return r.RG;if(s===qg)return r.RG_INTEGER;if(s===jg)return r.RGBA_INTEGER;if(s===Fu||s===Bu||s===ku||s===zu)if(l===At)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ku)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ku)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===np||s===ip||s===rp||s===sp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===np)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ip)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===op||s===ap)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===op)return l===At?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ap)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lp||s===cp||s===up||s===hp||s===dp||s===fp||s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===yp||s===bp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===lp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===up)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_p)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bp)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vu||s===Sp||s===Mp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Vu)return l===At?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Mp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Dy||s===Tp||s===Ep||s===wp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Vu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Tp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ep)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_s?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class lE extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ti extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cE={type:"move"};class hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cE)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class uE extends Cs{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const _=t.getContextAttributes();let g=null,p=null;const x=[],v=[],y=new ne;let E=null;const M=new In;M.layers.enable(1),M.viewport=new Tt;const b=new In;b.layers.enable(2),b.viewport=new Tt;const L=[M,b],S=new lE;S.layers.enable(1),S.layers.enable(2);let T=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Y=x[j];return Y===void 0&&(Y=new hh,x[j]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(j){let Y=x[j];return Y===void 0&&(Y=new hh,x[j]=Y),Y.getGripSpace()},this.getHand=function(j){let Y=x[j];return Y===void 0&&(Y=new hh,x[j]=Y),Y.getHandSpace()};function N(j){const Y=v.indexOf(j.inputSource);if(Y===-1)return;const ee=x[Y];ee!==void 0&&(ee.update(j.inputSource,j.frame,c||o),ee.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",D);for(let j=0;j<x.length;j++){const Y=v[j];Y!==null&&(v[j]=null,x[j].disconnect(Y))}T=null,P=null,e.setRenderTarget(g),f=null,d=null,h=null,i=null,p=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",X),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new xi(f.framebufferWidth,f.framebufferHeight,{format:fi,type:Ur,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,ee=null,ue=null;_.depth&&(ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=_.stencil?zo:vs,ee=_.stencil?_s:Cr);const fe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new xi(d.textureWidth,d.textureHeight,{format:fi,type:Ur,depthTexture:new f_(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ae=e.properties.get(p);Ae.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(j){for(let Y=0;Y<j.removed.length;Y++){const ee=j.removed[Y],ue=v.indexOf(ee);ue>=0&&(v[ue]=null,x[ue].disconnect(ee))}for(let Y=0;Y<j.added.length;Y++){const ee=j.added[Y];let ue=v.indexOf(ee);if(ue===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=v.length){v.push(ee),ue=Ae;break}else if(v[Ae]===null){v[Ae]=ee,ue=Ae;break}if(ue===-1)break}const fe=x[ue];fe&&fe.connect(ee)}}const U=new I,B=new I;function V(j,Y,ee){U.setFromMatrixPosition(Y.matrixWorld),B.setFromMatrixPosition(ee.matrixWorld);const ue=U.distanceTo(B),fe=Y.projectionMatrix.elements,Ae=ee.projectionMatrix.elements,Ie=fe[14]/(fe[10]-1),Me=fe[14]/(fe[10]+1),De=(fe[9]+1)/fe[5],O=(fe[9]-1)/fe[5],te=(fe[8]-1)/fe[0],K=(Ae[8]+1)/Ae[0],le=Ie*te,Q=Ie*K,z=ue/(-te+K),_e=z*-te;Y.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_e),j.translateZ(z),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=Ie+z,w=Me+z,H=le-_e,se=Q+(ue-_e),oe=De*Me/w*R,ie=O*Me/w*R;j.projectionMatrix.makePerspective(H,se,oe,ie,R,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function W(j,Y){Y===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Y.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;S.near=b.near=M.near=j.near,S.far=b.far=M.far=j.far,(T!==S.near||P!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,P=S.far);const Y=j.parent,ee=S.cameras;W(S,Y);for(let ue=0;ue<ee.length;ue++)W(ee[ue],Y);ee.length===2?V(S,M,b):S.projectionMatrix.copy(M.projectionMatrix),F(j,S,Y)};function F(j,Y,ee){ee===null?j.matrix.copy(Y.matrixWorld):(j.matrix.copy(ee.matrixWorld),j.matrix.invert(),j.matrix.multiply(Y.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Vo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let C=null;function J(j,Y){if(u=Y.getViewerPose(c||o),m=Y,u!==null){const ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ue=!1;ee.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let fe=0;fe<ee.length;fe++){const Ae=ee[fe];let Ie=null;if(f!==null)Ie=f.getViewport(Ae);else{const De=h.getViewSubImage(d,Ae);Ie=De.viewport,fe===0&&(e.setRenderTargetTextures(p,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(p))}let Me=L[fe];Me===void 0&&(Me=new In,Me.layers.enable(fe),Me.viewport=new Tt,L[fe]=Me),Me.matrix.fromArray(Ae.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Ae.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),fe===0&&(S.matrix.copy(Me.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(Me)}}for(let ee=0;ee<x.length;ee++){const ue=v[ee],fe=x[ee];ue!==null&&fe!==void 0&&fe.update(ue,Y,c||o)}C&&C(j,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}const ae=new d_;ae.setAnimationLoop(J),this.setAnimationLoop=function(j){C=j},this.dispose=function(){}}}function hE(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,c_(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Vn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Vn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dE(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(m(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",g));const E=v.program;n.updateUBOMapping(x,E);const M=e.render.frame;s[x.id]!==M&&(d(x),s[x.id]=M)}function u(x){const v=h();x.__bindingPointIndex=v;const y=r.createBuffer(),E=x.__size,M=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],y=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let M=0,b=y.length;M<b;M++){const L=Array.isArray(y[M])?y[M]:[y[M]];for(let S=0,T=L.length;S<T;S++){const P=L[S];if(f(P,M,S,E)===!0){const N=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let D=0;for(let U=0;U<X.length;U++){const B=X[U],V=_(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,N+D,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,D),D+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,v,y,E){const M=x.value,b=v+"_"+y;if(E[b]===void 0)return typeof M=="number"||typeof M=="boolean"?E[b]=M:E[b]=M.clone(),!0;{const L=E[b];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return E[b]=M,!0}else if(L.equals(M)===!1)return L.copy(M),!0}return!1}function m(x){const v=x.uniforms;let y=0;const E=16;for(let b=0,L=v.length;b<L;b++){const S=Array.isArray(v[b])?v[b]:[v[b]];for(let T=0,P=S.length;T<P;T++){const N=S[T],X=Array.isArray(N.value)?N.value:[N.value];for(let D=0,U=X.length;D<U;D++){const B=X[D],V=_(B),W=y%E;W!==0&&E-W<V.boundary&&(y+=E-W),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=V.storage}}}const M=y%E;return M>0&&(y+=E-M),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class x_{constructor(e={}){const{canvas:t=cb(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this._useLegacyLights=!1,this.toneMapping=Nr,this.toneMappingExposure=1;const v=this;let y=!1,E=0,M=0,b=null,L=-1,S=null;const T=new Tt,P=new Tt;let N=null;const X=new Ye(0);let D=0,U=t.width,B=t.height,V=1,W=null,F=null;const C=new Tt(0,0,U,B),J=new Tt(0,0,U,B);let ae=!1;const j=new Hd;let Y=!1,ee=!1,ue=null;const fe=new Ke,Ae=new ne,Ie=new I,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return b===null?V:1}let O=n;function te(A,G){for(let Z=0;Z<A.length;Z++){const q=A[Z],$=t.getContext(q,G);if($!==null)return $}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Od}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",pe,!1),O===null){const G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),O=te(G,A),O===null)throw te(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let K,le,Q,z,_e,R,w,H,se,oe,ie,ye,ve,de,Re,Ve,re,lt,Oe,$e,Pe,Se,qe,nt;function ft(){K=new S1(O),le=new g1(O,K,e),K.init(le),Se=new aE(O,K,le),Q=new sE(O,K,le),z=new E1(O),_e=new XT,R=new oE(O,K,Q,_e,le,Se,z),w=new v1(v),H=new b1(v),se=new Db(O,le),qe=new p1(O,K,se,le),oe=new M1(O,se,z,qe),ie=new R1(O,oe,se,z),Oe=new C1(O,le,R),Ve=new _1(_e),ye=new WT(v,w,H,K,le,qe,Ve),ve=new hE(v,_e),de=new $T,Re=new QT(K,le),lt=new f1(v,w,H,Q,ie,d,l),re=new rE(v,ie,le),nt=new dE(O,z,le,Q),$e=new m1(O,K,z,le),Pe=new T1(O,K,z,le),z.programs=ye.programs,v.capabilities=le,v.extensions=K,v.properties=_e,v.renderLists=de,v.shadowMap=re,v.state=Q,v.info=z}ft();const be=new uE(v,O);this.xr=be,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(U,B,!1))},this.getSize=function(A){return A.set(U,B)},this.setSize=function(A,G,Z=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,B=G,t.width=Math.floor(A*V),t.height=Math.floor(G*V),Z===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(U*V,B*V).floor()},this.setDrawingBufferSize=function(A,G,Z){U=A,B=G,V=Z,t.width=Math.floor(A*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(C)},this.setViewport=function(A,G,Z,q){A.isVector4?C.set(A.x,A.y,A.z,A.w):C.set(A,G,Z,q),Q.viewport(T.copy(C).multiplyScalar(V).floor())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,G,Z,q){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,G,Z,q),Q.scissor(P.copy(J).multiplyScalar(V).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(A){Q.setScissorTest(ae=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){F=A},this.getClearColor=function(A){return A.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(A=!0,G=!0,Z=!0){let q=0;if(A){let $=!1;if(b!==null){const ge=b.texture.format;$=ge===jg||ge===qg||ge===$g}if($){const ge=b.texture.type,we=ge===Ur||ge===Cr||ge===Bd||ge===_s||ge===Xg||ge===Yg,We=lt.getClearColor(),Ce=lt.getClearAlpha(),Ne=We.r,Xe=We.g,Je=We.b;we?(f[0]=Ne,f[1]=Xe,f[2]=Je,f[3]=Ce,O.clearBufferuiv(O.COLOR,0,f)):(m[0]=Ne,m[1]=Xe,m[2]=Je,m[3]=Ce,O.clearBufferiv(O.COLOR,0,m))}else q|=O.COLOR_BUFFER_BIT}G&&(q|=O.DEPTH_BUFFER_BIT),Z&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),de.dispose(),Re.dispose(),_e.dispose(),w.dispose(),H.dispose(),ie.dispose(),qe.dispose(),nt.dispose(),ye.dispose(),be.dispose(),be.removeEventListener("sessionstart",Te),be.removeEventListener("sessionend",Fe),ue&&(ue.dispose(),ue=null),ce.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=z.autoReset,G=re.enabled,Z=re.autoUpdate,q=re.needsUpdate,$=re.type;ft(),z.autoReset=A,re.enabled=G,re.autoUpdate=Z,re.needsUpdate=q,re.type=$}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function me(A){const G=A.target;G.removeEventListener("dispose",me),He(G)}function He(A){Be(A),_e.remove(A)}function Be(A){const G=_e.get(A).programs;G!==void 0&&(G.forEach(function(Z){ye.releaseProgram(Z)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Z,q,$,ge){G===null&&(G=Me);const we=$.isMesh&&$.matrixWorld.determinant()<0,We=wt(A,G,Z,q,$);Q.setMaterial(q,we);let Ce=Z.index,Ne=1;if(q.wireframe===!0){if(Ce=oe.getWireframeAttribute(Z),Ce===void 0)return;Ne=2}const Xe=Z.drawRange,Je=Z.attributes.position;let Lt=Xe.start*Ne,Jt=(Xe.start+Xe.count)*Ne;ge!==null&&(Lt=Math.max(Lt,ge.start*Ne),Jt=Math.min(Jt,(ge.start+ge.count)*Ne)),Ce!==null?(Lt=Math.max(Lt,0),Jt=Math.min(Jt,Ce.count)):Je!=null&&(Lt=Math.max(Lt,0),Jt=Math.min(Jt,Je.count));const gt=Jt-Lt;if(gt<0||gt===1/0)return;qe.setup($,q,We,Z,Ce);let Tn,yt=$e;if(Ce!==null&&(Tn=se.get(Ce),yt=Pe,yt.setIndex(Tn)),$.isMesh)q.wireframe===!0?(Q.setLineWidth(q.wireframeLinewidth*De()),yt.setMode(O.LINES)):yt.setMode(O.TRIANGLES);else if($.isLine){let je=q.linewidth;je===void 0&&(je=1),Q.setLineWidth(je*De()),$.isLineSegments?yt.setMode(O.LINES):$.isLineLoop?yt.setMode(O.LINE_LOOP):yt.setMode(O.LINE_STRIP)}else $.isPoints?yt.setMode(O.POINTS):$.isSprite&&yt.setMode(O.TRIANGLES);if($.isBatchedMesh)yt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)yt.renderInstances(Lt,gt,$.count);else if(Z.isInstancedBufferGeometry){const je=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,vu=Math.min(Z.instanceCount,je);yt.renderInstances(Lt,gt,vu)}else yt.render(Lt,gt)};function ct(A,G,Z){A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,Et(A,G,Z),A.side=zr,A.needsUpdate=!0,Et(A,G,Z),A.side=Ui):Et(A,G,Z)}this.compile=function(A,G,Z=null){Z===null&&(Z=A),g=Re.get(Z),g.init(),x.push(g),Z.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),A!==Z&&A.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights(v._useLegacyLights);const q=new Set;return A.traverse(function($){const ge=$.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const We=ge[we];ct(We,Z,$),q.add(We)}else ct(ge,Z,$),q.add(ge)}),x.pop(),g=null,q},this.compileAsync=function(A,G,Z=null){const q=this.compile(A,G,Z);return new Promise($=>{function ge(){if(q.forEach(function(we){_e.get(we).currentProgram.isReady()&&q.delete(we)}),q.size===0){$(A);return}setTimeout(ge,10)}K.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let dt=null;function Le(A){dt&&dt(A)}function Te(){ce.stop()}function Fe(){ce.start()}const ce=new d_;ce.setAnimationLoop(Le),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(A){dt=A,be.setAnimationLoop(A),A===null?ce.stop():ce.start()},be.addEventListener("sessionstart",Te),be.addEventListener("sessionend",Fe),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(G),G=be.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,G,b),g=Re.get(A,x.length),g.init(),x.push(g),fe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),j.setFromProjectionMatrix(fe),ee=this.localClippingEnabled,Y=Ve.init(this.clippingPlanes,ee),_=de.get(A,p.length),_.init(),p.push(_),Ge(A,G,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,F),this.info.render.frame++,Y===!0&&Ve.beginShadows();const Z=g.state.shadowsArray;if(re.render(Z,A,G),Y===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(_,A),g.setupLights(v._useLegacyLights),G.isArrayCamera){const q=G.cameras;for(let $=0,ge=q.length;$<ge;$++){const we=q[$];ze(_,A,we,we.viewport)}}else ze(_,A,G);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(v,A,G),qe.resetDefaultState(),L=-1,S=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ge(A,G,Z,q){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){q&&Ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const we=ie.update(A),We=A.material;We.visible&&_.push(A,we,We,Z,Ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const we=ie.update(A),We=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ie.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ie.copy(we.boundingSphere.center)),Ie.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(We)){const Ce=we.groups;for(let Ne=0,Xe=Ce.length;Ne<Xe;Ne++){const Je=Ce[Ne],Lt=We[Je.materialIndex];Lt&&Lt.visible&&_.push(A,we,Lt,Z,Ie.z,Je)}}else We.visible&&_.push(A,we,We,Z,Ie.z,null)}}const ge=A.children;for(let we=0,We=ge.length;we<We;we++)Ge(ge[we],G,Z,q)}function ze(A,G,Z,q){const $=A.opaque,ge=A.transmissive,we=A.transparent;g.setupLightsView(Z),Y===!0&&Ve.setGlobalState(v.clippingPlanes,Z),ge.length>0&&Ze($,ge,G,Z),q&&Q.viewport(T.copy(q)),$.length>0&&Nt($,G,Z),ge.length>0&&Nt(ge,G,Z),we.length>0&&Nt(we,G,Z),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Ze(A,G,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const ge=le.isWebGL2;ue===null&&(ue=new xi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?zi:Ur,minFilter:Ka,samples:ge?4:0})),v.getDrawingBufferSize(Ae),ge?ue.setSize(Ae.x,Ae.y):ue.setSize(jc(Ae.x),jc(Ae.y));const we=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(X),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const We=v.toneMapping;v.toneMapping=Nr,Nt(A,Z,q),R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue);let Ce=!1;for(let Ne=0,Xe=G.length;Ne<Xe;Ne++){const Je=G[Ne],Lt=Je.object,Jt=Je.geometry,gt=Je.material,Tn=Je.group;if(gt.side===Ui&&Lt.layers.test(q.layers)){const yt=gt.side;gt.side=Vn,gt.needsUpdate=!0,it(Lt,Z,q,Jt,gt,Tn),gt.side=yt,gt.needsUpdate=!0,Ce=!0}}Ce===!0&&(R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue)),v.setRenderTarget(we),v.setClearColor(X,D),v.toneMapping=We}function Nt(A,G,Z){const q=G.isScene===!0?G.overrideMaterial:null;for(let $=0,ge=A.length;$<ge;$++){const we=A[$],We=we.object,Ce=we.geometry,Ne=q===null?we.material:q,Xe=we.group;We.layers.test(Z.layers)&&it(We,G,Z,Ce,Ne,Xe)}}function it(A,G,Z,q,$,ge){A.onBeforeRender(v,G,Z,q,$,ge),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(v,G,Z,q,A,ge),$.transparent===!0&&$.side===Ui&&$.forceSinglePass===!1?($.side=Vn,$.needsUpdate=!0,v.renderBufferDirect(Z,G,q,$,A,ge),$.side=zr,$.needsUpdate=!0,v.renderBufferDirect(Z,G,q,$,A,ge),$.side=Ui):v.renderBufferDirect(Z,G,q,$,A,ge),A.onAfterRender(v,G,Z,q,$,ge)}function Et(A,G,Z){G.isScene!==!0&&(G=Me);const q=_e.get(A),$=g.state.lights,ge=g.state.shadowsArray,we=$.state.version,We=ye.getParameters(A,$.state,ge,G,Z),Ce=ye.getProgramCacheKey(We);let Ne=q.programs;q.environment=A.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(A.isMeshStandardMaterial?H:w).get(A.envMap||q.environment),Ne===void 0&&(A.addEventListener("dispose",me),Ne=new Map,q.programs=Ne);let Xe=Ne.get(Ce);if(Xe!==void 0){if(q.currentProgram===Xe&&q.lightsStateVersion===we)return Ct(A,We),Xe}else We.uniforms=ye.getUniforms(A),A.onBuild(Z,We,v),A.onBeforeCompile(We,v),Xe=ye.acquireProgram(We,Ce),Ne.set(Ce,Xe),q.uniforms=We.uniforms;const Je=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Ve.uniform),Ct(A,We),q.needsLights=Gn(A),q.lightsStateVersion=we,q.needsLights&&(Je.ambientLightColor.value=$.state.ambient,Je.lightProbe.value=$.state.probe,Je.directionalLights.value=$.state.directional,Je.directionalLightShadows.value=$.state.directionalShadow,Je.spotLights.value=$.state.spot,Je.spotLightShadows.value=$.state.spotShadow,Je.rectAreaLights.value=$.state.rectArea,Je.ltc_1.value=$.state.rectAreaLTC1,Je.ltc_2.value=$.state.rectAreaLTC2,Je.pointLights.value=$.state.point,Je.pointLightShadows.value=$.state.pointShadow,Je.hemisphereLights.value=$.state.hemi,Je.directionalShadowMap.value=$.state.directionalShadowMap,Je.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Je.spotShadowMap.value=$.state.spotShadowMap,Je.spotLightMatrix.value=$.state.spotLightMatrix,Je.spotLightMap.value=$.state.spotLightMap,Je.pointShadowMap.value=$.state.pointShadowMap,Je.pointShadowMatrix.value=$.state.pointShadowMatrix),q.currentProgram=Xe,q.uniformsList=null,Xe}function Zt(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Sc.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Ct(A,G){const Z=_e.get(A);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function wt(A,G,Z,q,$){G.isScene!==!0&&(G=Me),R.resetTextureUnits();const ge=G.fog,we=q.isMeshStandardMaterial?G.environment:null,We=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:dr,Ce=(q.isMeshStandardMaterial?H:w).get(q.envMap||we),Ne=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Xe=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Je=!!Z.morphAttributes.position,Lt=!!Z.morphAttributes.normal,Jt=!!Z.morphAttributes.color;let gt=Nr;q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(gt=v.toneMapping);const Tn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=Tn!==void 0?Tn.length:0,je=_e.get(q),vu=g.state.lights;if(Y===!0&&(ee===!0||A!==S)){const si=A===S&&q.id===L;Ve.setState(q,A,si)}let Vt=!1;q.version===je.__version?(je.needsLights&&je.lightsStateVersion!==vu.state.version||je.outputColorSpace!==We||$.isBatchedMesh&&je.batching===!1||!$.isBatchedMesh&&je.batching===!0||$.isInstancedMesh&&je.instancing===!1||!$.isInstancedMesh&&je.instancing===!0||$.isSkinnedMesh&&je.skinning===!1||!$.isSkinnedMesh&&je.skinning===!0||$.isInstancedMesh&&je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&je.instancingColor===!1&&$.instanceColor!==null||je.envMap!==Ce||q.fog===!0&&je.fog!==ge||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ve.numPlanes||je.numIntersection!==Ve.numIntersection)||je.vertexAlphas!==Ne||je.vertexTangents!==Xe||je.morphTargets!==Je||je.morphNormals!==Lt||je.morphColors!==Jt||je.toneMapping!==gt||le.isWebGL2===!0&&je.morphTargetsCount!==yt)&&(Vt=!0):(Vt=!0,je.__version=q.version);let Xr=je.currentProgram;Vt===!0&&(Xr=Et(q,G,$));let nf=!1,Ko=!1,xu=!1;const pn=Xr.getUniforms(),Yr=je.uniforms;if(Q.useProgram(Xr.program)&&(nf=!0,Ko=!0,xu=!0),q.id!==L&&(L=q.id,Ko=!0),nf||S!==A){pn.setValue(O,"projectionMatrix",A.projectionMatrix),pn.setValue(O,"viewMatrix",A.matrixWorldInverse);const si=pn.map.cameraPosition;si!==void 0&&si.setValue(O,Ie.setFromMatrixPosition(A.matrixWorld)),le.logarithmicDepthBuffer&&pn.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pn.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Ko=!0,xu=!0)}if($.isSkinnedMesh){pn.setOptional(O,$,"bindMatrix"),pn.setOptional(O,$,"bindMatrixInverse");const si=$.skeleton;si&&(le.floatVertexTextures?(si.boneTexture===null&&si.computeBoneTexture(),pn.setValue(O,"boneTexture",si.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(pn.setOptional(O,$,"batchingTexture"),pn.setValue(O,"batchingTexture",$._matricesTexture,R));const yu=Z.morphAttributes;if((yu.position!==void 0||yu.normal!==void 0||yu.color!==void 0&&le.isWebGL2===!0)&&Oe.update($,Z,Xr),(Ko||je.receiveShadow!==$.receiveShadow)&&(je.receiveShadow=$.receiveShadow,pn.setValue(O,"receiveShadow",$.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Yr.envMap.value=Ce,Yr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Ko&&(pn.setValue(O,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&mt(Yr,xu),ge&&q.fog===!0&&ve.refreshFogUniforms(Yr,ge),ve.refreshMaterialUniforms(Yr,q,V,B,ue),Sc.upload(O,Zt(je),Yr,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Sc.upload(O,Zt(je),Yr,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pn.setValue(O,"center",$.center),pn.setValue(O,"modelViewMatrix",$.modelViewMatrix),pn.setValue(O,"normalMatrix",$.normalMatrix),pn.setValue(O,"modelMatrix",$.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const si=q.uniformsGroups;for(let bu=0,J_=si.length;bu<J_;bu++)if(le.isWebGL2){const rf=si[bu];nt.update(rf,Xr),nt.bind(rf,Xr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xr}function mt(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Gn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,G,Z){_e.get(A.texture).__webglTexture=G,_e.get(A.depthTexture).__webglTexture=Z;const q=_e.get(A);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=Z===void 0,q.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,G){const Z=_e.get(A);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,Z=0){b=A,E=G,M=Z;let q=!0,$=null,ge=!1,we=!1;if(A){const Ce=_e.get(A);Ce.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(O.FRAMEBUFFER,null),q=!1):Ce.__webglFramebuffer===void 0?R.setupRenderTarget(A):Ce.__hasExternalTextures&&R.rebindTextures(A,_e.get(A.texture).__webglTexture,_e.get(A.depthTexture).__webglTexture);const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(we=!0);const Xe=_e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[G])?$=Xe[G][Z]:$=Xe[G],ge=!0):le.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?$=_e.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?$=Xe[Z]:$=Xe,T.copy(A.viewport),P.copy(A.scissor),N=A.scissorTest}else T.copy(C).multiplyScalar(V).floor(),P.copy(J).multiplyScalar(V).floor(),N=ae;if(Q.bindFramebuffer(O.FRAMEBUFFER,$)&&le.drawBuffers&&q&&Q.drawBuffers(A,$),Q.viewport(T),Q.scissor(P),Q.setScissorTest(N),ge){const Ce=_e.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ce.__webglTexture,Z)}else if(we){const Ce=_e.get(A.texture),Ne=G||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.__webglTexture,Z||0,Ne)}L=-1},this.readRenderTargetPixels=function(A,G,Z,q,$,ge,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=_e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(We=We[we]),We){Q.bindFramebuffer(O.FRAMEBUFFER,We);try{const Ce=A.texture,Ne=Ce.format,Xe=Ce.type;if(Ne!==fi&&Se.convert(Ne)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=Xe===zi&&(K.has("EXT_color_buffer_half_float")||le.isWebGL2&&K.has("EXT_color_buffer_float"));if(Xe!==Ur&&Se.convert(Xe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===sr&&(le.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-q&&Z>=0&&Z<=A.height-$&&O.readPixels(G,Z,q,$,Se.convert(Ne),Se.convert(Xe),ge)}finally{const Ce=b!==null?_e.get(b).__webglFramebuffer:null;Q.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(A,G,Z=0){const q=Math.pow(2,-Z),$=Math.floor(G.image.width*q),ge=Math.floor(G.image.height*q);R.setTexture2D(G,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,A.x,A.y,$,ge),Q.unbindTexture()},this.copyTextureToTexture=function(A,G,Z,q=0){const $=G.image.width,ge=G.image.height,we=Se.convert(Z.format),We=Se.convert(Z.type);R.setTexture2D(Z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Z.unpackAlignment),G.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,q,A.x,A.y,$,ge,we,We,G.image.data):G.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,q,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,we,G.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,q,A.x,A.y,we,We,G.image),q===0&&Z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(A,G,Z,q,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=A.max.x-A.min.x+1,we=A.max.y-A.min.y+1,We=A.max.z-A.min.z+1,Ce=Se.convert(q.format),Ne=Se.convert(q.type);let Xe;if(q.isData3DTexture)R.setTexture3D(q,0),Xe=O.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)R.setTexture2DArray(q,0),Xe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,q.unpackAlignment);const Je=O.getParameter(O.UNPACK_ROW_LENGTH),Lt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Jt=O.getParameter(O.UNPACK_SKIP_PIXELS),gt=O.getParameter(O.UNPACK_SKIP_ROWS),Tn=O.getParameter(O.UNPACK_SKIP_IMAGES),yt=Z.isCompressedTexture?Z.mipmaps[$]:Z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,yt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),Z.isDataTexture||Z.isData3DTexture?O.texSubImage3D(Xe,$,G.x,G.y,G.z,ge,we,We,Ce,Ne,yt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Xe,$,G.x,G.y,G.z,ge,we,We,Ce,yt.data)):O.texSubImage3D(Xe,$,G.x,G.y,G.z,ge,we,We,Ce,Ne,yt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Je),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Lt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Jt),O.pixelStorei(O.UNPACK_SKIP_ROWS,gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Tn),$===0&&q.generateMipmaps&&O.generateMipmap(Xe),Q.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Q.unbindTexture()},this.resetState=function(){E=0,M=0,b=null,Q.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===zd?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===hu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Wt?xs:Kg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xs?Wt:dr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class fE extends x_{}fE.prototype.isWebGL1Renderer=!0;class Xd{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new Xd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pE extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class mE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new I;class Jc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class y_ extends Wr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Zs;const oa=new I,Js=new I,Ks=new I,Qs=new ne,aa=new ne,b_=new Ke,$l=new I,la=new I,ql=new I,pm=new ne,dh=new ne,mm=new ne;class gE extends kt{constructor(e=new y_){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mE(t,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Jc(n,3,0,!1)),Zs.setAttribute("uv",new Jc(n,2,3,!1))}this.geometry=Zs,this.material=e,this.center=new ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),b_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-Ks.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;jl($l.set(-.5,-.5,0),Ks,o,Js,i,s),jl(la.set(.5,-.5,0),Ks,o,Js,i,s),jl(ql.set(.5,.5,0),Ks,o,Js,i,s),pm.set(0,0),dh.set(1,0),mm.set(1,1);let a=e.ray.intersectTriangle($l,la,ql,!1,oa);if(a===null&&(jl(la.set(-.5,.5,0),Ks,o,Js,i,s),dh.set(0,1),a=e.ray.intersectTriangle($l,ql,la,!1,oa),a===null))return;const l=e.ray.origin.distanceTo(oa);l<e.near||l>e.far||t.push({distance:l,point:oa.clone(),uv:di.getInterpolation(oa,$l,la,ql,pm,dh,mm,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function jl(r,e,t,n,i,s){Qs.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(aa.x=s*Qs.x-i*Qs.y,aa.y=i*Qs.x+s*Qs.y):aa.copy(Qs),r.copy(e),r.x+=aa.x,r.y+=aa.y,r.applyMatrix4(b_)}const gm=new I,_m=new Tt,vm=new Tt,_E=new I,xm=new Ke,Zl=new I,fh=new fr,ym=new Ke,ph=new du;class L2 extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ep,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zl),this.boundingBox.expandByPoint(Zl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zl),this.boundingSphere.expandByPoint(Zl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fh.copy(this.boundingSphere),fh.applyMatrix4(i),e.ray.intersectsSphere(fh)!==!1&&(ym.copy(i).invert(),ph.copy(e.ray).applyMatrix4(ym),!(this.boundingBox!==null&&ph.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ph)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ep?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ty?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;_m.fromBufferAttribute(i.attributes.skinIndex,e),vm.fromBufferAttribute(i.attributes.skinWeight,e),gm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=vm.getComponent(s);if(o!==0){const a=_m.getComponent(s);xm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_E.copy(gm).applyMatrix4(xm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class vE extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xE extends Mn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=hn,u=hn,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bm=new Ke,yE=new Ke;class S_{constructor(e=[],t=[]){this.uuid=vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:yE;bm.multiplyMatrices(a,t[s]),bm.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new S_(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xE(t,e,e,fi,sr);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new vE),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Sm extends rn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const eo=new Ke,Mm=new Ke,Jl=[],Tm=new Gi,bE=new Ke,ca=new ke,ua=new fr;class I2 extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sm(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,eo),Tm.copy(e.boundingBox).applyMatrix4(eo),this.boundingBox.union(Tm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,eo),ua.copy(e.boundingSphere).applyMatrix4(eo),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),e.ray.intersectsSphere(ua)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,eo),Mm.multiplyMatrices(n,eo),ca.matrixWorld=Mm,ca.raycast(e,Jl);for(let o=0,a=Jl.length;o<a;o++){const l=Jl[o];l.instanceId=s,l.object=this,t.push(l)}Jl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sm(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class SE extends Wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Em=new I,wm=new I,Am=new Ke,mh=new du,Kl=new fr;class M_ extends kt{constructor(e=new zt,t=new SE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Em.fromBufferAttribute(t,i-1),wm.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Em.distanceTo(wm);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(i),Kl.radius+=s,e.ray.intersectsSphere(Kl)===!1)return;Am.copy(i).invert(),mh.copy(e.ray).applyMatrix4(Am);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,d=new I,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=p,y=x-1;v<y;v+=f){const E=m.getX(v),M=m.getX(v+1);if(c.fromBufferAttribute(g,E),u.fromBufferAttribute(g,M),mh.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=p,y=x-1;v<y;v+=f){if(c.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),mh.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Cm=new I,Rm=new I;class D2 extends M_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Cm.fromBufferAttribute(t,i),Rm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cm.distanceTo(Rm);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class N2 extends M_{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class T_ extends Wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pm=new Ke,rd=new du,Ql=new fr,ec=new I;class ME extends kt{constructor(e=new zt,t=new T_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ql.copy(n.boundingSphere),Ql.applyMatrix4(i),Ql.radius+=s,e.ray.intersectsSphere(Ql)===!1)return;Pm.copy(i).invert(),rd.copy(e.ray).applyMatrix4(Pm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=c.getX(m);ec.fromBufferAttribute(h,g),Lm(ec,g,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)ec.fromBufferAttribute(h,m),Lm(ec,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Lm(r,e,t,n,i,s,o){const a=rd.distanceSqToPoint(r);if(a<t){const l=new I;rd.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class qo extends Mn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ne:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],s=[],o=[],a=new I,l=new Ke;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(nn(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(nn(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Yd extends Xi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ne,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class TE extends Yd{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $d(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const tc=new I,gh=new $d,_h=new $d,vh=new $d;class Kc extends Xi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(tc.subVectors(i[0],i[1]).add(i[0]),c=tc);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(tc.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=tc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),gh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,_,g),_h.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,_,g),vh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(gh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),_h.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),vh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(gh.calc(l),_h.calc(l),vh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Im(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function EE(r,e){const t=1-r;return t*t*e}function wE(r,e){return 2*(1-r)*r*e}function AE(r,e){return r*r*e}function Fa(r,e,t,n){return EE(r,e)+wE(r,t)+AE(r,n)}function CE(r,e){const t=1-r;return t*t*t*e}function RE(r,e){const t=1-r;return 3*t*t*r*e}function PE(r,e){return 3*(1-r)*r*r*e}function LE(r,e){return r*r*r*e}function Ba(r,e,t,n,i){return CE(r,e)+RE(r,t)+PE(r,n)+LE(r,i)}class E_ extends Xi{constructor(e=new ne,t=new ne,n=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ne){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ba(e,i.x,s.x,o.x,a.x),Ba(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class IE extends Xi{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ba(e,i.x,s.x,o.x,a.x),Ba(e,i.y,s.y,o.y,a.y),Ba(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class w_ extends Xi{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DE extends Xi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A_ extends Xi{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Fa(e,i.x,s.x,o.x),Fa(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qd extends Xi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Fa(e,i.x,s.x,o.x),Fa(e,i.y,s.y,o.y),Fa(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C_ extends Xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Im(a,l.x,c.x,u.x,h.x),Im(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ne().fromArray(i))}return this}}var Qc=Object.freeze({__proto__:null,ArcCurve:TE,CatmullRomCurve3:Kc,CubicBezierCurve:E_,CubicBezierCurve3:IE,EllipseCurve:Yd,LineCurve:w_,LineCurve3:DE,QuadraticBezierCurve:A_,QuadraticBezierCurve3:qd,SplineCurve:C_});class NE extends Xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Qc[i.type]().fromJSON(i))}return this}}class sd extends NE{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new w_(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new A_(this.currentPoint.clone(),new ne(e,t),new ne(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new E_(this.currentPoint.clone(),new ne(e,t),new ne(n,i),new ne(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new C_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Yd(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Rs extends zt{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=nn(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new I,d=new ne,f=new I,m=new I,_=new I;let g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let x=0;x<=t;x++){const v=n+x*u*i,y=Math.sin(v),E=Math.cos(v);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*y,h.y=e[M].y,h.z=e[M].x*E,o.push(h.x,h.y,h.z),d.x=x/t,d.y=M/(e.length-1),a.push(d.x,d.y);const b=l[3*M+0]*y,L=l[3*M+1],S=l[3*M+0]*E;c.push(b,L,S)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const y=v+x*e.length,E=y,M=y+e.length,b=y+e.length+1,L=y+1;s.push(E,M,L),s.push(b,L,M)}this.setIndex(s),this.setAttribute("position",new at(o,3)),this.setAttribute("uv",new at(a,2)),this.setAttribute("normal",new at(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.points,e.segments,e.phiStart,e.phiLength)}}class Go extends Rs{constructor(e=1,t=1,n=4,i=8){const s=new sd;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Go(e.radius,e.length,e.capSegments,e.radialSegments)}}class jd extends zt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new I,u=new ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class bi extends zt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new at(h,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function x(){const y=new I,E=new I;let M=0;const b=(t-e)/n;for(let L=0;L<=s;L++){const S=[],T=L/s,P=T*(t-e)+e;for(let N=0;N<=i;N++){const X=N/i,D=X*l+a,U=Math.sin(D),B=Math.cos(D);E.x=P*U,E.y=-T*n+g,E.z=P*B,h.push(E.x,E.y,E.z),y.set(U,b,B).normalize(),d.push(y.x,y.y,y.z),f.push(X,1-T),S.push(m++)}_.push(S)}for(let L=0;L<i;L++)for(let S=0;S<s;S++){const T=_[S][L],P=_[S+1][L],N=_[S+1][L+1],X=_[S][L+1];u.push(T,P,X),u.push(P,N,X),M+=6}c.addGroup(p,M,0),p+=M}function v(y){const E=m,M=new ne,b=new I;let L=0;const S=y===!0?e:t,T=y===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,g*T,0),d.push(0,T,0),f.push(.5,.5),m++;const P=m;for(let N=0;N<=i;N++){const D=N/i*l+a,U=Math.cos(D),B=Math.sin(D);b.x=S*B,b.y=g*T,b.z=S*U,h.push(b.x,b.y,b.z),d.push(0,T,0),M.x=U*.5+.5,M.y=B*.5*T+.5,f.push(M.x,M.y),m++}for(let N=0;N<i;N++){const X=E+N,D=P+N;y===!0?u.push(D,D+1,X):u.push(D+1,D,X),L+=3}c.addGroup(p,L,y===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class eu extends bi{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new eu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ll extends sd{constructor(e){super(e),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new sd().fromJSON(i))}return this}}const UE={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=R_(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,f;if(n&&(s=zE(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(let m=t;m<i;m+=t)h=r[m],d=r[m+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return nl(s,o,t,a,l,f,0),o}};function R_(r,e,t,n,i){let s,o;if(i===JE(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Dm(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Dm(s,r[s],r[s+1],o);return o&&pu(o,o.next)&&(rl(o),o=o.next),o}function Es(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(pu(t,t.next)||Bt(t.prev,t,t.next)===0)){if(rl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function nl(r,e,t,n,i,s,o){if(!r)return;!o&&s&&XE(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?FE(r,n,i,s):OE(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),rl(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=BE(Es(r),e,t),nl(r,e,t,n,i,s,2)):o===2&&kE(r,e,t,n,i,s):nl(Es(r),e,t,n,i,s,1);break}}}function OE(r){const e=r.prev,t=r,n=r.next;if(Bt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&xo(i,a,s,l,o,c,m.x,m.y)&&Bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function FE(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Bt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,m=u<h?u<d?u:d:h<d?h:d,_=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,p=od(f,m,e,t,n),x=od(_,g,e,t,n);let v=r.prevZ,y=r.nextZ;for(;v&&v.z>=p&&y&&y.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&xo(a,u,l,h,c,d,v.x,v.y)&&Bt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&xo(a,u,l,h,c,d,y.x,y.y)&&Bt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&xo(a,u,l,h,c,d,v.x,v.y)&&Bt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&xo(a,u,l,h,c,d,y.x,y.y)&&Bt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function BE(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!pu(i,s)&&P_(i,n,n.next,s)&&il(i,s)&&il(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),rl(n),rl(n.next),n=r=s),n=n.next}while(n!==r);return Es(n)}function kE(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qE(o,a)){let l=L_(o,a);o=Es(o,o.next),l=Es(l,l.next),nl(o,e,t,n,i,s,0),nl(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function zE(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=R_(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push($E(c));for(i.sort(VE),s=0;s<i.length;s++)t=HE(i[s],t);return t}function VE(r,e){return r.x-e.x}function HE(r,e){const t=GE(r,e);if(!t)return e;const n=L_(t,r);return Es(n,n.next),Es(t,t.next)}function GE(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&xo(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),il(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&WE(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function WE(r,e){return Bt(r.prev,r,e.prev)<0&&Bt(e.next,r,r.next)<0}function XE(r,e,t,n){let i=r;do i.z===0&&(i.z=od(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,YE(i)}function YE(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function od(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function $E(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function xo(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function qE(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!jE(r,e)&&(il(r,e)&&il(e,r)&&ZE(r,e)&&(Bt(r.prev,r,e.prev)||Bt(r,e.prev,e))||pu(r,e)&&Bt(r.prev,r,r.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function pu(r,e){return r.x===e.x&&r.y===e.y}function P_(r,e,t,n){const i=ic(Bt(r,e,t)),s=ic(Bt(r,e,n)),o=ic(Bt(t,n,r)),a=ic(Bt(t,n,e));return!!(i!==s&&o!==a||i===0&&nc(r,t,e)||s===0&&nc(r,n,e)||o===0&&nc(t,r,n)||a===0&&nc(t,e,n))}function nc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ic(r){return r>0?1:r<0?-1:0}function jE(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&P_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function il(r,e){return Bt(r.prev,r,r.next)<0?Bt(r,e,r.next)>=0&&Bt(r,r.prev,e)>=0:Bt(r,e,r.prev)<0||Bt(r,r.next,e)<0}function ZE(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function L_(r,e){const t=new ad(r.i,r.x,r.y),n=new ad(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Dm(r,e,t,n){const i=new ad(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function rl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ad(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function JE(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class ka{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ka.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Nm(e),Um(n,e);let o=e.length;t.forEach(Nm);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Um(n,t[l]);const a=UE.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Nm(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Um(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Rr extends zt{constructor(e=new ll([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new at(i,3)),this.setAttribute("uv",new at(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:KE;let v,y=!1,E,M,b,L;p&&(v=p.getSpacedPoints(u),y=!0,d=!1,E=p.computeFrenetFrames(u,!1),M=new I,b=new I,L=new I),d||(g=0,f=0,m=0,_=0);const S=a.extractPoints(c);let T=S.shape;const P=S.holes;if(!ka.isClockWise(T)){T=T.reverse();for(let O=0,te=P.length;O<te;O++){const K=P[O];ka.isClockWise(K)&&(P[O]=K.reverse())}}const X=ka.triangulateShape(T,P),D=T;for(let O=0,te=P.length;O<te;O++){const K=P[O];T=T.concat(K)}function U(O,te,K){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(te,K)}const B=T.length,V=X.length;function W(O,te,K){let le,Q,z;const _e=O.x-te.x,R=O.y-te.y,w=K.x-O.x,H=K.y-O.y,se=_e*_e+R*R,oe=_e*H-R*w;if(Math.abs(oe)>Number.EPSILON){const ie=Math.sqrt(se),ye=Math.sqrt(w*w+H*H),ve=te.x-R/ie,de=te.y+_e/ie,Re=K.x-H/ye,Ve=K.y+w/ye,re=((Re-ve)*H-(Ve-de)*w)/(_e*H-R*w);le=ve+_e*re-O.x,Q=de+R*re-O.y;const lt=le*le+Q*Q;if(lt<=2)return new ne(le,Q);z=Math.sqrt(lt/2)}else{let ie=!1;_e>Number.EPSILON?w>Number.EPSILON&&(ie=!0):_e<-Number.EPSILON?w<-Number.EPSILON&&(ie=!0):Math.sign(R)===Math.sign(H)&&(ie=!0),ie?(le=-R,Q=_e,z=Math.sqrt(se)):(le=_e,Q=R,z=Math.sqrt(se/2))}return new ne(le/z,Q/z)}const F=[];for(let O=0,te=D.length,K=te-1,le=O+1;O<te;O++,K++,le++)K===te&&(K=0),le===te&&(le=0),F[O]=W(D[O],D[K],D[le]);const C=[];let J,ae=F.concat();for(let O=0,te=P.length;O<te;O++){const K=P[O];J=[];for(let le=0,Q=K.length,z=Q-1,_e=le+1;le<Q;le++,z++,_e++)z===Q&&(z=0),_e===Q&&(_e=0),J[le]=W(K[le],K[z],K[_e]);C.push(J),ae=ae.concat(J)}for(let O=0;O<g;O++){const te=O/g,K=f*Math.cos(te*Math.PI/2),le=m*Math.sin(te*Math.PI/2)+_;for(let Q=0,z=D.length;Q<z;Q++){const _e=U(D[Q],F[Q],le);fe(_e.x,_e.y,-K)}for(let Q=0,z=P.length;Q<z;Q++){const _e=P[Q];J=C[Q];for(let R=0,w=_e.length;R<w;R++){const H=U(_e[R],J[R],le);fe(H.x,H.y,-K)}}}const j=m+_;for(let O=0;O<B;O++){const te=d?U(T[O],ae[O],j):T[O];y?(b.copy(E.normals[0]).multiplyScalar(te.x),M.copy(E.binormals[0]).multiplyScalar(te.y),L.copy(v[0]).add(b).add(M),fe(L.x,L.y,L.z)):fe(te.x,te.y,0)}for(let O=1;O<=u;O++)for(let te=0;te<B;te++){const K=d?U(T[te],ae[te],j):T[te];y?(b.copy(E.normals[O]).multiplyScalar(K.x),M.copy(E.binormals[O]).multiplyScalar(K.y),L.copy(v[O]).add(b).add(M),fe(L.x,L.y,L.z)):fe(K.x,K.y,h/u*O)}for(let O=g-1;O>=0;O--){const te=O/g,K=f*Math.cos(te*Math.PI/2),le=m*Math.sin(te*Math.PI/2)+_;for(let Q=0,z=D.length;Q<z;Q++){const _e=U(D[Q],F[Q],le);fe(_e.x,_e.y,h+K)}for(let Q=0,z=P.length;Q<z;Q++){const _e=P[Q];J=C[Q];for(let R=0,w=_e.length;R<w;R++){const H=U(_e[R],J[R],le);y?fe(H.x,H.y+v[u-1].y,v[u-1].x+K):fe(H.x,H.y,h+K)}}}Y(),ee();function Y(){const O=i.length/3;if(d){let te=0,K=B*te;for(let le=0;le<V;le++){const Q=X[le];Ae(Q[2]+K,Q[1]+K,Q[0]+K)}te=u+g*2,K=B*te;for(let le=0;le<V;le++){const Q=X[le];Ae(Q[0]+K,Q[1]+K,Q[2]+K)}}else{for(let te=0;te<V;te++){const K=X[te];Ae(K[2],K[1],K[0])}for(let te=0;te<V;te++){const K=X[te];Ae(K[0]+B*u,K[1]+B*u,K[2]+B*u)}}n.addGroup(O,i.length/3-O,0)}function ee(){const O=i.length/3;let te=0;ue(D,te),te+=D.length;for(let K=0,le=P.length;K<le;K++){const Q=P[K];ue(Q,te),te+=Q.length}n.addGroup(O,i.length/3-O,1)}function ue(O,te){let K=O.length;for(;--K>=0;){const le=K;let Q=K-1;Q<0&&(Q=O.length-1);for(let z=0,_e=u+g*2;z<_e;z++){const R=B*z,w=B*(z+1),H=te+le+R,se=te+Q+R,oe=te+Q+w,ie=te+le+w;Ie(H,se,oe,ie)}}}function fe(O,te,K){l.push(O),l.push(te),l.push(K)}function Ae(O,te,K){Me(O),Me(te),Me(K);const le=i.length/3,Q=x.generateTopUV(n,i,le-3,le-2,le-1);De(Q[0]),De(Q[1]),De(Q[2])}function Ie(O,te,K,le){Me(O),Me(te),Me(le),Me(te),Me(K),Me(le);const Q=i.length/3,z=x.generateSideWallUV(n,i,Q-6,Q-3,Q-2,Q-1);De(z[0]),De(z[1]),De(z[3]),De(z[1]),De(z[2]),De(z[3])}function Me(O){i.push(l[O*3+0]),i.push(l[O*3+1]),i.push(l[O*3+2])}function De(O){s.push(O.x),s.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return QE(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Qc[i.type]().fromJSON(i)),new Rr(n,e.options)}}const KE={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ne(s,o),new ne(a,l),new ne(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],_=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ne(o,1-l),new ne(c,1-h),new ne(d,1-m),new ne(_,1-p)]:[new ne(a,1-l),new ne(u,1-h),new ne(f,1-m),new ne(g,1-p)]}};function QE(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zd extends zt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,f=new I,m=new ne;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=s+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,v=x,y=x+n+1,E=x+n+2,M=x+1;a.push(v,y,M),a.push(y,E,M)}}this.setIndex(a),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wi extends zt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,d=new I,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const M=E/t;h.x=-e*Math.cos(i+M*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+M*s)*Math.sin(o+v*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(M+y,1-v),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=u[p][x+1],y=u[p][x],E=u[p+1][x],M=u[p+1][x+1];(p!==0||o>0)&&f.push(v,y,M),(p!==n-1||l<Math.PI)&&f.push(y,E,M)}this.setIndex(f),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wo extends zt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*s,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,x=(i+1)*f+m;o.push(_,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lo extends zt{constructor(e=new qd(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new ne;let u=new I;const h=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new at(h,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function _(){for(let v=0;v<t;v++)g(v);g(s===!1?t:0),x(),p()}function g(v){u=e.getPointAt(v/t,u);const y=o.normals[v],E=o.binormals[v];for(let M=0;M<=i;M++){const b=M/i*Math.PI*2,L=Math.sin(b),S=-Math.cos(b);l.x=S*y.x+L*E.x,l.y=S*y.y+L*E.y,l.z=S*y.z+L*E.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let y=1;y<=i;y++){const E=(i+1)*(v-1)+(y-1),M=(i+1)*v+(y-1),b=(i+1)*v+y,L=(i+1)*(v-1)+y;m.push(E,M,L),m.push(M,b,L)}}function x(){for(let v=0;v<=t;v++)for(let y=0;y<=i;y++)c.x=v/t,c.y=y/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Lo(new Qc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ew extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xo extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qg,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class U2 extends Xo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function rc(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function tw(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function nw(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Om(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function I_(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class mu{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class iw extends mu{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mo,endingEnd:mo}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case go:s=e,a=2*t-n;break;case Wc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case go:o=e,l=2*n-t;break;case Wc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,x=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let E=0;E!==a;++E)s[E]=p*o[u+E]+x*o[c+E]+v*o[l+E]+y*o[h+E];return s}}class D_ extends mu{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class rw extends mu{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rc(t,this.TimeBufferType),this.values=rc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rc(e.times,Array),values:rc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new D_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new iw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hc:t=this.InterpolantFactoryMethodDiscrete;break;case Gc:t=this.InterpolantFactoryMethodLinear;break;case Hu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hc;case this.InterpolantFactoryMethodLinear:return Gc;case this.InterpolantFactoryMethodSmooth:return Hu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&tw(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Hu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Yi.prototype.TimeBufferType=Float32Array;Yi.prototype.ValueBufferType=Float32Array;Yi.prototype.DefaultInterpolation=Gc;class jo extends Yi{}jo.prototype.ValueTypeName="bool";jo.prototype.ValueBufferType=Array;jo.prototype.DefaultInterpolation=Hc;jo.prototype.InterpolantFactoryMethodLinear=void 0;jo.prototype.InterpolantFactoryMethodSmooth=void 0;class N_ extends Yi{}N_.prototype.ValueTypeName="color";class tu extends Yi{}tu.prototype.ValueTypeName="number";class sw extends mu{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Vi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class cl extends Yi{InterpolantFactoryMethodLinear(e){return new sw(this.times,this.values,this.getValueSize(),e)}}cl.prototype.ValueTypeName="quaternion";cl.prototype.DefaultInterpolation=Gc;cl.prototype.InterpolantFactoryMethodSmooth=void 0;class Zo extends Yi{}Zo.prototype.ValueTypeName="string";Zo.prototype.ValueBufferType=Array;Zo.prototype.DefaultInterpolation=Hc;Zo.prototype.InterpolantFactoryMethodLinear=void 0;Zo.prototype.InterpolantFactoryMethodSmooth=void 0;class nu extends Yi{}nu.prototype.ValueTypeName="vector";class Fm{constructor(e,t=-1,n,i=kd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=vi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(aw(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Yi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=nw(l);l=Om(l,1,u),c=Om(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new tu(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,_){if(f.length!==0){const g=[],p=[];I_(f,g,p,m),g.length!==0&&_.push(new h(d,g,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const v=d[m];g.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new tu(".morphTargetInfluence["+_+"]",g,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(nu,f+".position",d,"pos",i),n(cl,f+".quaternion",d,"rot",i),n(nu,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ow(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tu;case"vector":case"vector2":case"vector3":case"vector4":return nu;case"color":return N_;case"quaternion":return cl;case"bool":case"boolean":return jo;case"string":return Zo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function aw(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ow(r.type);if(r.times===void 0){const t=[],n=[];I_(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Pr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class lw{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const cw=new lw;class ul{constructor(e){this.manager=e!==void 0?e:cw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ul.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki={};class uw extends Error{constructor(e,t){super(e),this.response=t}}class O2 extends ul{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Pr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:n,onError:i});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ki[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){h.read().then(({done:v,value:y})=>{if(v)p.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let M=0,b=u.length;M<b;M++){const L=u[M];L.onProgress&&L.onProgress(E)}p.enqueue(y),x()}})}}});return new Response(g)}else throw new uw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Pr.add(e,c);const u=Ki[e];delete Ki[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Ki[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ki[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class hw extends ul{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Qa("img");function l(){u(),Pr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class F2 extends ul{constructor(e){super(e)}load(e,t,n,i){const s=new Mn,o=new hw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class gu extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class dw extends gu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const xh=new Ke,Bm=new I,km=new I;class Jd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hd,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bm),km.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(km),t.updateMatrixWorld(),xh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fw extends Jd{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Vo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class B2 extends gu{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new fw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zm=new Ke,ha=new I,yh=new I;class pw extends Jd{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ha.setFromMatrixPosition(e.matrixWorld),n.position.copy(ha),yh.copy(n.position),yh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(yh),n.updateMatrixWorld(),i.makeTranslation(-ha.x,-ha.y,-ha.z),zm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zm)}}class k2 extends gu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mw extends Jd{constructor(){super(new Gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sc extends gu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new mw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class z2{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class V2 extends ul{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Pr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Pr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Pr.add(e,l),s.manager.itemStart(e)}}class U_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vm(){return(typeof performance>"u"?Date:performance).now()}class gw{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Vi.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Vi.multiplyQuaternionsFlat(e,o,e,t,e,n),Vi.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Kd="\\[\\]\\.:\\/",_w=new RegExp("["+Kd+"]","g"),Qd="[^"+Kd+"]",vw="[^"+Kd.replace("\\.","")+"]",xw=/((?:WC+[\/:])*)/.source.replace("WC",Qd),yw=/(WCOD+)?/.source.replace("WCOD",vw),bw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qd),Sw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qd),Mw=new RegExp("^"+xw+yw+bw+Sw+"$"),Tw=["material","materials","bones","map"];class Ew{constructor(e,t,n){const i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class vt{constructor(e,t,n){this.path=t,this.parsedPath=n||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,n):new vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_w,"")}static parseTrackName(e){const t=Mw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Tw.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=Ew;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ww{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:mo,endingEnd:mo};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ny,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Oy:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case kd:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Uy;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Jg){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=go,i.endingEnd=go):(e?i.endingStart=this.zeroSlopeAtStart?go:mo:i.endingStart=Wc,t?i.endingEnd=this.zeroSlopeAtEnd?go:mo:i.endingEnd=Wc)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const Aw=new Float32Array(1);class Cw extends Cs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],f=d.name;let m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;m=new gw(vt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new D_(new Float32Array(2),new Float32Array(2),1,Aw),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Fm.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=kd),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new ww(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Fm.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);const O_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Jo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Rw=new Gd(-1,1,1,-1,0,1);class Pw extends zt{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}}const Lw=new Pw;class ef{constructor(e){this._mesh=new ke(Lw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Rw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Iw extends Jo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof On?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=tl.clone(e.uniforms),this.material=new On({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ef(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Hm extends Jo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Dw extends Jo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Nw{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new xi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Iw(O_),this.copyPass.material.blending=lr,this.clock=new U_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Hm!==void 0&&(o instanceof Hm?n=!0:o instanceof Dw&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Uw extends Jo{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ye}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Ow={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Yo extends Jo{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new Ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new xi(s,o,{type:zi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new xi(s,o,{type:zi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new xi(s,o,{type:zi});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=Ow;this.highPassUniforms=tl.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new On({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ne(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=O_;this.copyUniforms=tl.clone(u.uniforms),this.blendMaterial=new On({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ja,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ye,this.oldClearAlpha=1,this.basic=new el,this.fsQuad=new ef(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ne(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Yo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Yo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new On({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new On({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Yo.BlurDirectionX=new ne(1,0);Yo.BlurDirectionY=new ne(0,1);const Fw={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Bw extends Jo{constructor(){super();const e=Fw;this.uniforms=tl.clone(e.uniforms),this.material=new ew({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ef(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===At&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kg?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zg?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vg?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hg&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function F_(r){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32),i=r.r*255|0,s=r.g*255|0,o=r.b*255|0;return n.addColorStop(0,`rgba(${i},${s},${o},1)`),n.addColorStop(.4,`rgba(${i},${s},${o},0.5)`),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),new qo(e)}function kw({count:r,sprite:e,mobile:t}){const n=new zt,i=new Float32Array(r*3),s=new Float32Array(r);for(let c=0;c<r;c++)i[c*3+0]=(Math.random()-.5)*34,i[c*3+1]=(Math.random()-.5)*28,i[c*3+2]=(Math.random()-.5)*20-4,s[c]=.004+Math.random()*.012;n.setAttribute("position",new rn(i,3));const o=new T_({size:t?.14:.17,map:e,transparent:!0,depthWrite:!1,blending:Ja,opacity:.4}),a=new ME(n,o);function l(c,u,h=0){const d=n.attributes.position.array,f=1+Math.abs(c)*4+h*3.5;for(let m=0;m<r;m++)d[m*3+1]+=s[m]*f,d[m*3+1]>14&&(d[m*3+1]=-14);n.attributes.position.needsUpdate=!0,o.opacity=.4+h*.4,a.rotation.y=u.x*.15,a.rotation.x=-u.y*.1,a.position.x=u.x*1.2}return{points:a,update:l}}function Mc(r){let e=r>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const ht=(r,e,t)=>e+r()*(t-e),It={skin:15242319,jacket:2369068,jacketOrange:16086556,ribbing:1776930,hair:1907482,hairOrange:15561760,hairOrangeDeep:11030543,pants:2303536,shoe:16089630,sole:2760985,tail:16349724,tailGlyph:16765567,iris:8012578,chipFrame:13225171,chipGlow:16747562,mouth:5975834};let oc=null;function B_(){if(oc)return oc;const r=e=>new Xo({envMapIntensity:.6,...e});return oc={skin:r({color:It.skin,roughness:.52,envMapIntensity:.75,emissive:3544835,emissiveIntensity:.18}),skinFlat:r({color:It.skin,roughness:.52,envMapIntensity:.75,emissive:3544835,emissiveIntensity:.18,flatShading:!0}),jacket:r({color:It.jacket,roughness:.74}),jacketFacet:r({color:It.jacket,roughness:.74,flatShading:!0}),jacketTrim:r({color:It.jacketOrange,roughness:.42,envMapIntensity:1}),jacketTrimFacet:r({color:It.jacketOrange,roughness:.42,envMapIntensity:1,flatShading:!0}),ribbing:r({color:It.ribbing,roughness:.88,envMapIntensity:.4}),cuffRib:r({color:1513761,roughness:.85,envMapIntensity:.4,flatShading:!0}),pantsFacet:r({color:1316381,roughness:.65,envMapIntensity:.5,flatShading:!0}),hair:r({vertexColors:!0,flatShading:!0,roughness:.62,envMapIntensity:.55}),pants:r({color:It.pants,roughness:.8,envMapIntensity:.5}),trimCyan:r({color:664880,emissive:6281471,emissiveIntensity:2.6,roughness:.5}),shoe:r({color:It.shoe,roughness:.42,envMapIntensity:.85}),sole:r({color:It.sole,roughness:.9,envMapIntensity:.35}),tail:r({color:It.tail,roughness:.3,envMapIntensity:1.3,emissive:16747050,emissiveIntensity:.35}),tailGlyph:r({color:3675397,emissive:It.tailGlyph,emissiveIntensity:2.4,roughness:.3}),chipFrame:r({color:It.chipFrame,metalness:.85,roughness:.35,envMapIntensity:1}),chipCore:r({color:3675397,emissive:It.chipGlow,emissiveIntensity:2.4,roughness:.12,envMapIntensity:1.5}),eyeWhite:r({color:16249577,roughness:.25,envMapIntensity:1}),iris:r({color:It.iris,roughness:.25}),pupil:r({color:526346,roughness:.2}),brow:r({color:1512207,roughness:.8}),mouth:r({color:It.mouth,roughness:.7})},oc}const as=.916,co=1.4,iu=.3,yo={upperL:{x:.004,y:.715,w:.488,h:.14},upperR:{x:.508,y:.715,w:.488,h:.14},foreL:{x:.004,y:.869,w:.488,h:.127},foreR:{x:.508,y:.869,w:.488,h:.127}},vn=(r,e=1)=>{const t=new Ye(r);return`rgba(${t.r*255|0},${t.g*255|0},${t.b*255|0},${e})`},Rt={panel:vn(16752720),panelDeep:vn(15761464),panelLite:vn(16760960),zipTape:vn(16284208),circuitDim:vn(12745278),backPrint:vn(16752970),nodeGold:vn(16767119),emblemFill:vn(1707786),slit:vn(657932)};function zw({size:r=2048}={}){const e=document.createElement("canvas");e.width=e.height=r;const t=e.getContext("2d"),n=document.createElement("canvas");n.width=n.height=r;const i=n.getContext("2d"),s=p=>p*r,o=p=>(1-(iu+(1-iu)*((p-as)/(co-as))))*r,a=p=>p*r/2048,l=1.4,c=(p,x,v)=>{p.beginPath(),x.forEach(([y,E],M)=>M?p.lineTo(s(y),o(E)):p.moveTo(s(y),o(E))),p.closePath(),p.fillStyle=v,p.fill()},u=(p,x,v,y,E)=>{p.fillStyle=E,p.beginPath(),p.ellipse(s(x),o(v),a(y),a(y)*l,0,0,Math.PI*2),p.fill()},h=(p,x,v,y,E,M)=>{p.strokeStyle=y,p.lineWidth=a(v),p.lineCap="round",p.lineJoin="round",p.beginPath(),x.forEach(([b,L],S)=>S?p.lineTo(s(b),o(L)):p.moveTo(s(b),o(L))),p.stroke(),E&&u(p,x[x.length-1][0],x[x.length-1][1],E,M||y)};t.fillStyle=vn(It.jacket),t.fillRect(0,0,r,r);const d=t.createLinearGradient(.3*r,0,.7*r,0);d.addColorStop(0,"rgba(255,255,255,0)"),d.addColorStop(.5,"rgba(255,244,230,0.05)"),d.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=d,t.fillRect(0,0,r,r*.7),i.fillStyle="#000",i.fillRect(0,0,r,r);for(const p of[!1,!0]){const x=E=>p?1-E:E;c(t,[[x(.17),1.4],[x(.33),1.4],[x(.345),1.36],[x(.3),1.315],[x(.21),1.325],[x(.17),1.375]].map(([E,M])=>[E,M]),Rt.panel),c(t,[[x(.17),1.4],[x(.3),1.315],[x(.21),1.325],[x(.17),1.375]],Rt.panelDeep),c(t,[[x(.33),1.4],[x(.345),1.36],[x(.305),1.385]],Rt.panelLite),c(t,[[x(.21),1.4],[x(.155),1.385],[x(.1),1.28],[x(.155),1.32],[x(.2),1.37]],Rt.panel),c(t,[[x(.155),1.385],[x(.1),1.28],[x(.14),1.305]],Rt.panelDeep),c(t,[[x(.325),.916],[x(.435),.916],[x(.455),.968],[x(.41),1.01],[x(.35),.975]],Rt.panel),c(t,[[x(.435),.916],[x(.455),.968],[x(.42),.94]],Rt.panelDeep);const v=[x(.395),1.02],y=[x(.428),.965];h(t,[v,y],12,Rt.panel),h(t,[v,y],5,Rt.slit)}const f=[[[.554,1.252],[.588,1.252],[.588,1.288],[.622,1.288]],[[.446,1.252],[.412,1.252],[.412,1.292],[.384,1.292]],[[.554,1.228],[.6,1.228],[.6,1.17],[.64,1.17]],[[.446,1.228],[.4,1.228],[.4,1.162],[.362,1.162]],[[.52,1.19],[.52,1.1],[.548,1.1],[.548,1.028]],[[.48,1.19],[.48,1.082],[.452,1.082],[.452,1.012]],[[.558,1.24],[.612,1.24],[.612,1.205]],[[.442,1.24],[.392,1.24],[.392,1.21]],[[.53,1.295],[.53,1.322],[.556,1.322]],[[.47,1.295],[.47,1.318],[.446,1.318]]];for(const p of[t,i]){const x=p===t?Rt.circuitDim:vn(4860956),v=p===t?Rt.nodeGold:vn(4860956);for(const E of f)h(p,E,6,x,9,v);const y=Mc(777);p.save(),p.setLineDash([a(6),a(10)]),p.globalAlpha=p===t?.4:.15;for(let E=0;E<24;E++){const M=ht(y,.36,.64),b=ht(y,.94,1.36);if(Math.abs(M-.5)<.035&&b>1.15&&b<1.33)continue;const L=y()<.5;h(p,[[M,b],L?[M+ht(y,.02,.045),b]:[M,b+ht(y,.02,.04)]],3,x)}p.restore()}{const p=a(42);t.fillStyle=Rt.zipTape,t.fillRect(s(.5)-p/2,o(co),p,o(as)-o(co)),t.strokeStyle=vn(2035976),t.lineWidth=a(3),t.beginPath(),t.moveTo(s(.5),o(co)),t.lineTo(s(.5),o(as)),t.stroke(),t.strokeStyle="rgba(0,0,0,0.3)",t.lineWidth=a(2);for(let x=o(co)+a(14);x<o(as);x+=a(14))t.beginPath(),t.moveTo(s(.5)-p*.28,x),t.lineTo(s(.5)+p*.28,x),t.stroke()}const m=(p,x,v)=>{const y=o(1.22),E=a(144),M=a(144)*l;p.save(),p.translate(x,0),p.fillStyle=Rt.emblemFill,p.beginPath(),p.ellipse(0,y,E,M,0,0,Math.PI*2),p.fill(),p.strokeStyle=Rt.backPrint,p.lineWidth=a(16),p.beginPath(),p.ellipse(0,y,E,M,0,0,Math.PI*2),p.stroke(),p.lineWidth=a(14),p.lineCap="round";for(const T of[1,-1])for(let P=0;P<4;P++){const N=y-M*.52+P*M*.36;p.beginPath(),p.moveTo(T*E*.14,N),p.bezierCurveTo(T*E*.62,N-M*.16,T*E*.66,N+M*.18,T*E*.2,N+M*.22),p.stroke()}p.lineWidth=a(8);for(let T=0;T<8;T++){const P=T/8*Math.PI*2+Math.PI/8,N=a(60+T%3*25);p.beginPath(),p.moveTo(Math.cos(P)*E*1.05,y+Math.sin(P)*M*1.05),p.lineTo(Math.cos(P)*(E*1.05+N),y+Math.sin(P)*(M*1.05+N*l*.8)),p.stroke(),p.fillStyle=Rt.nodeGold,p.beginPath(),p.ellipse(Math.cos(P)*(E*1.05+N),y+Math.sin(P)*(M*1.05+N*l*.8),a(9),a(9)*l,0,0,Math.PI*2),p.fill(),p.fillStyle=Rt.backPrint}p.restore();const b=x/r,L=[[[b+.012,1.3],[b+.012,1.355],[b+.045,1.355]],[[b-.03,1.295],[b-.03,1.345]],[[b+.05,1.17],[b+.05,1.06],[b+.085,1.06]],[[b-.055,1.16],[b-.055,1.045]],[[b+.02,1.145],[b+.02,.99]],[[b-.018,1.15],[b-.018,1.02],[b-.05,1.02]]];for(const T of L)h(p,T,6,Rt.backPrint,9,Rt.nodeGold);const S=Mc(888+x);for(let T=0;T<14;T++)u(p,b+ht(S,-.11,.11),ht(S,.98,1.38),4,Rt.nodeGold)};m(t,0),m(t,r),m(i,0),m(i,r);const _=(p,x)=>{const v=p.x*r,y=p.y*r,E=p.w*r,M=p.h*r,b=a(8);if(t.fillStyle=vn(It.jacket),t.fillRect(v-b,y-b,E+b*2,M+b*2),i.fillStyle="#000",i.fillRect(v-b,y-b,E+b*2,M+b*2),x){const P=M*.55;t.fillStyle=Rt.panel,t.beginPath(),t.moveTo(v-b,y-b),t.lineTo(v+E+b,y-b),t.lineTo(v+E+b,y+P*.75),t.lineTo(v+E*.66,y+P),t.lineTo(v+E*.38,y+P*.72),t.lineTo(v+E*.15,y+P),t.lineTo(v-b,y+P*.8),t.closePath(),t.fill(),t.fillStyle=Rt.panelDeep,t.beginPath(),t.moveTo(v+E*.38,y+P*.72),t.lineTo(v+E*.66,y+P),t.lineTo(v+E*.52,y+P*.45),t.closePath(),t.fill(),t.fillStyle=Rt.panelLite,t.beginPath(),t.moveTo(v+E*.15,y+P),t.lineTo(v-b,y+P*.8),t.lineTo(v+E*.1,y+P*.62),t.closePath(),t.fill()}const L=Mc(x?4242:5353),S=x?y+M*.6:y+M*.08,T=[];for(let P=0;P<10;P++)T.push([v+E*ht(L,.08,.92),S+(M-(S-y))*ht(L,.05,.9)]);for(const P of[t,i]){P.save(),P.strokeStyle=Rt.circuitDim,P.globalAlpha=P===t?.5:.2,P.lineWidth=a(2);for(let N=0;N<T.length-1;N++)L()<.75&&(P.beginPath(),P.moveTo(T[N][0],T[N][1]),P.lineTo(T[N+1][0],T[N+1][1]),P.stroke());P.fillStyle=Rt.circuitDim;for(const[N,X]of T)P.beginPath(),P.arc(N,X,a(5),0,Math.PI*2),P.fill();P.restore()}x||(t.fillStyle=Rt.panelDeep,t.beginPath(),t.moveTo(v+E,y),t.lineTo(v+E-E*.16,y),t.lineTo(v+E,y+M*.3),t.closePath(),t.fill())};_(yo.upperL,!0),_(yo.upperR,!0),_(yo.foreL,!1),_(yo.foreR,!1);const g=p=>{const x=new qo(p);return x.colorSpace=Wt,x.anisotropy=8,x.wrapS=Vc,x};return{map:g(e),emissiveMap:g(n)}}function Vw(r=["ORANJE","STRIDE"]){const e=document.createElement("canvas");e.width=512,e.height=256;const t=e.getContext("2d");t.clearRect(0,0,512,256),t.textAlign="center",t.textBaseline="middle",t.font='800 88px "Arial Black", Arial, sans-serif',t.lineJoin="round";const n=[vn(16020256),vn(15920614)];r.forEach((s,o)=>{const a=128+(o-(r.length-1)/2)*96;t.strokeStyle="rgba(0,0,0,0.35)",t.lineWidth=3,t.strokeText(s,256,a),t.fillStyle=n[o]||n[n.length-1],t.fillText(s,256,a)});const i=new qo(e);return i.colorSpace=Wt,i.anisotropy=4,i}function Hw(){const r=document.createElement("canvas");r.width=r.height=128;const e=r.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,62);t.addColorStop(0,"#ffd37a"),t.addColorStop(1,"#f5820f"),e.fillStyle=t,e.fillRect(0,0,128,128),e.strokeStyle="rgba(255,235,190,0.9)",e.lineWidth=3,e.beginPath(),e.arc(64,64,30,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(64,64,8,0,Math.PI*2),e.stroke();const n=new qo(r);return n.colorSpace=Wt,n}function Gw(){const r=document.createElement("canvas");r.width=r.height=256;const e=r.getContext("2d"),t=e.createRadialGradient(128,128,8,128,128,128);return t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(.55,"rgba(0,0,0,0.4)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new qo(r)}function Ww(r){return F_(new Ye(r))}function Gm(){return{enabled:!1,three:null,setActive(){},setScrollVelocity(){},setPointer(){},pulse(){},setTier(){}}}function Xw({reduced:r}){const e=document.getElementById("gl-canvas");if(r||!e||!window.WebGLRenderingContext)return Gm();const t=matchMedia("(max-width: 900px)").matches,n=Math.min(devicePixelRatio||1,t?1.5:2);let i;try{i=new x_({canvas:e,alpha:!0,antialias:!t})}catch{return Gm()}i.setPixelRatio(n),i.setSize(innerWidth,innerHeight),i.toneMapping=Fd,i.toneMappingExposure=1.15;const s=new pE;s.fog=new Xd(329484,15,34);const o=new In(55,innerWidth/innerHeight,.1,100);o.position.set(0,0,12),$h(async()=>{const{RoomEnvironment:Y}=await import("./RoomEnvironment-DywIcS3h.js");return{RoomEnvironment:Y}},[],import.meta.url).then(({RoomEnvironment:Y})=>{const ee=new nd(i);s.environment=ee.fromScene(new Y,.04).texture,ee.dispose()}).catch(()=>{}),s.add(new dw(14674162,3817290,.65));const a=new sc(16767408,1.25);a.position.set(3,7,6),s.add(a);const l=new sc(6262742,1.1);l.position.set(-4,3,-6),s.add(l);const c=new sc(16742954,.85);c.position.set(4,2.5,-5),s.add(c);const u=new sc(16774378,.85);u.position.set(0,2,12),s.add(u);let h=!1;try{const Y=i.getContext(),ee=Y.getExtension("WEBGL_debug_renderer_info"),ue=ee?Y.getParameter(ee.UNMASKED_RENDERER_WEBGL):"";h=/swiftshader|llvmpipe|software|basic render/i.test(ue)}catch{}let d=null;if(!t&&!h){const Y=new xi(innerWidth*n,innerHeight*n,{type:zi,samples:i.capabilities.isWebGL2?4:0});d=new Nw(i,Y),d.addPass(new Uw(s,o));const ee=new Yo(new ne(innerWidth,innerHeight),.25,.35,1.25);ee.blendMaterial.blending=Og,ee.blendMaterial.blendEquation=Sr,ee.blendMaterial.blendSrc=bc,ee.blendMaterial.blendDst=bc,ee.blendMaterial.blendSrcAlpha=Fg,ee.blendMaterial.blendDstAlpha=bc,d.addPass(ee),d.addPass(new Bw)}const f=F_(new Ye("#ff6a00")),m=t?Math.round(1400*.3):1400,_=kw({count:m,sprite:f,mobile:t});s.add(_.points);const g=new ke(new jd(1.5,48),new el({map:Gw(),transparent:!0,depthWrite:!1,opacity:.55}));g.rotation.x=-Math.PI/2,g.position.y=.001,s.add(g);const p=new ke(new Zd(1.1,1.14,64),new el({color:16738816,transparent:!0,opacity:.15,depthWrite:!1,side:Ui}));p.rotation.x=-Math.PI/2,p.position.y=.002,s.add(p);let x="hero",v=0,y=0;const E=new ne(0,0),M=new ne(0,0),b=[],L=[],S=new U_,T={enabled:!0,three:{scene:s,camera:o,addTick:Y=>b.push(Y),registerMascot:Y=>{L.push(Y),Y.setActive(Y.sectionId==="*"||Y.sectionId===x),Y.root&&!Y.root.parent&&s.add(Y.root)}},setActive(Y){x=Y;for(const ee of L)ee.setActive(ee.sectionId==="*"||ee.sectionId===Y)},setScrollVelocity(Y){v=Y},setPointer(Y,ee){E.set(Y,ee)},pulse(){y=1},setTier(Y){Y in P&&(D=!0,X=P[Y],B())}},P={high:3,medium:2,low:1,min:0},N=new URLSearchParams(location.search).get("q");let X=d?P.high:P.medium;N&&N in P&&(X=P[N]);let D=!1,U=!!d&&X>=P.high;function B(){U=!!d&&X>=P.high;const Y=X>=P.medium?n:X>=P.low?Math.min(n,1.25):1;i.getPixelRatio()!==Y&&(i.setPixelRatio(Y),i.setSize(innerWidth,innerHeight)),_.points.visible=X>=P.low,document.body.classList.toggle("fx-high",X>=P.high),j.tier=X}let V=0,W=performance.now(),F=0;function C(Y){if(N||D||(V++,Y-W<1e3))return;const ee=V*1e3/(Y-W);V=0,W=Y,ee<48&&X>P.min?++F>=2&&(X--,F=0,B()):F=0}i.info.autoReset=!1;let J=!0;function ae(){const Y=performance.now();i.info.reset();const ee=Math.min(S.getDelta(),.05);M.lerp(E,.05),y*=.93,_.points.visible&&_.update(v,M,y);for(const ue of L)ue.active&&ue.update({dt:ee,pointer:M,scrollVel:v,camera:o});for(const ue of b)ue({pointer:M,scrollVel:v});U?d.render():i.render(s,o),j.tris=i.info.render.triangles,j.calls=i.info.render.calls,C(Y),J&&requestAnimationFrame(ae)}const j=window.__marutStats={tris:0,calls:0,tier:X};return B(),requestAnimationFrame(ae),document.addEventListener("visibilitychange",()=>{if(document.hidden){J=!1;return}J||(J=!0,S.getDelta(),requestAnimationFrame(ae))}),addEventListener("resize",()=>{o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix(),i.setSize(innerWidth,innerHeight),d?.setSize(innerWidth,innerHeight)},{passive:!0}),T}const Yn={hipsY:.92,spineDY:.12,chestDY:.2,neckDY:.14,headDY:.08,clavDX:.065,clavDY:.065,shoulderDX:.19,shoulderDY:-.065,hipDX:.1,hipDY:-.02,tailDY:-.12,tailDZ:-.11};function Yw(){const r={},e=(a,l,c,u,h)=>{const d=new ti;return d.name=a,d.position.set(c,u,h),l.add(d),r[a]=d,d},t=new ti;t.name="marut",r.root=t;const n=e("hips",t,0,Yn.hipsY,0),i=e("spine",n,0,Yn.spineDY,0),s=e("chest",i,0,Yn.chestDY,0),o=e("neck",s,0,Yn.neckDY,0);e("head",o,0,Yn.headDY,0);for(const a of["L","R"]){const l=a==="L"?1:-1,c=e(`clav${a}`,s,l*Yn.clavDX,Yn.clavDY,0),u=e(`arm${a}_up`,c,l*Yn.shoulderDX,Yn.shoulderDY,0),h=e(`arm${a}_lo`,u,0,-.235,0);e(`hand${a}`,h,0,-.235,0);const d=e(`leg${a}_up`,n,l*Yn.hipDX,Yn.hipDY,0),f=e(`leg${a}_lo`,d,0,-.38,0);e(`foot${a}`,f,0,-.4,0)}return e("tailRoot",n,0,Yn.tailDY,Yn.tailDZ),{root:t,joints:r}}function ws(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new zt;let c=0;for(let u=0;u<r.length;++u){const h=r[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=r[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Wm(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const m=Wm(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function Wm(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){const u=r[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.array.length}const o=new e(s);let a=0;for(let c=0;c<r.length;++c)o.set(r[c].array,a),a+=r[c].array.length;const l=new rn(o,t,n);return i!==void 0&&(l.gpuType=i),l}function Xm(r,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count;let o=0;const a=Object.keys(r.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let x=0,v=a.length;x<v;x++){const y=a[x],E=r.attributes[y];l[y]=new rn(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const M=r.morphAttributes[y];M&&(c[y]=new rn(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized))}const f=e*.5,m=Math.log10(1/e),_=Math.pow(10,m),g=f*_;for(let x=0;x<s;x++){const v=n?n.getX(x):x;let y="";for(let E=0,M=a.length;E<M;E++){const b=a[E],L=r.getAttribute(b),S=L.itemSize;for(let T=0;T<S;T++)y+=`${~~(L[h[T]](v)*_+g)},`}if(y in t)u.push(t[y]);else{for(let E=0,M=a.length;E<M;E++){const b=a[E],L=r.getAttribute(b),S=r.morphAttributes[b],T=L.itemSize,P=l[b],N=c[b];for(let X=0;X<T;X++){const D=h[X],U=d[X];if(P[U](o,L[D](v)),S)for(let B=0,V=S.length;B<V;B++)N[B][U](o,S[B][D](v))}}t[y]=o,u.push(o),o++}}const p=r.clone();for(const x in r.attributes){const v=l[x];if(p.setAttribute(x,new rn(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),x in c)for(let y=0;y<c[x].length;y++){const E=c[x][y];p.morphAttributes[x][y]=new rn(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)}}return p.setIndex(u),p}function H2(r,e){if(e===Fy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ap||e===By){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ap)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}const k_=.17,$w=[[.001,-.191],[.052,-.186],[.078,-.162],[.095,-.118],[.108,-.075],[.111,-.052],[.11,-.02],[.105,.005],[.088,.02],[.05,.03],[.001,.032]],qw=(r,e,t)=>{const n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)};function jw(r){const e=r==="low"?512:1024,t=r==="low"?448:896,n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d"),s=h=>(h+.115)/.23*e,o=h=>(.015-h)/.2*t,a=h=>h/.23*e,l="#"+It.skin.toString(16).padStart(6,"0"),c=h=>{i.beginPath(),i.moveTo(s(h*.08),o(-.058)),i.quadraticCurveTo(s(h*.045),o(-.031),s(h*.015),o(-.066)),i.quadraticCurveTo(s(h*.045),o(-.091),s(h*.08),o(-.058)),i.closePath()};function u(h=0){i.clearRect(0,0,e,t);for(const f of[1,-1]){let m=i.createRadialGradient(s(f*.06),o(-.105),0,s(f*.06),o(-.105),a(.05));m.addColorStop(0,"rgba(242,149,63,0.18)"),m.addColorStop(1,"rgba(242,149,63,0)"),i.fillStyle=m,i.fillRect(s(f*.06)-a(.05),o(-.105)-a(.05),a(.1),a(.1)),i.fillStyle="rgba(176,95,40,0.25)",i.beginPath(),i.ellipse(s(f*.055),o(-.053),a(.04),a(.01),0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,179,92,0.10)",i.beginPath(),i.moveTo(s(f*.075),o(-.062)),i.lineTo(s(f*.098),o(-.075)),i.lineTo(s(f*.062),o(-.095)),i.closePath(),i.fill(),i.fillStyle="rgba(192,99,34,0.12)",i.beginPath(),i.moveTo(s(f*.06),o(-.1)),i.lineTo(s(f*.095),o(-.085)),i.lineTo(s(f*.075),o(-.135)),i.lineTo(s(f*.045),o(-.13)),i.closePath(),i.fill()}let d=i.createRadialGradient(s(0),o(-.01),0,s(0),o(-.01),a(.06));d.addColorStop(0,"rgba(255,196,104,0.10)"),d.addColorStop(1,"rgba(255,196,104,0)"),i.fillStyle=d,i.fillRect(s(0)-a(.06),o(-.01)-a(.06),a(.12),a(.12)),i.fillStyle="rgba(164,74,18,0.35)",i.beginPath(),i.ellipse(s(0),o(-.121),a(.016),a(.005),0,0,Math.PI*2),i.fill(),i.fillStyle="#17100b";for(const f of[1,-1]){const m=[[.01,-.054],[.012,-.038],[.058,-.026],[.11,-.04],[.058,-.048]];i.beginPath(),i.moveTo(s(f*m[0][0]),o(m[0][1]));for(let _=1;_<m.length;_++)i.lineTo(s(f*m[_][0]),o(m[_][1]));i.closePath(),i.fill()}for(const f of[1,-1]){i.save(),c(f),i.clip(),i.fillStyle="#f2ebe0",i.fillRect(s(f*.08)-a(.09),o(-.04),a(.18),a(.058));const m=s(f*.045),_=o(-.062),g=i.createRadialGradient(m,_,0,m,_,a(.021));if(g.addColorStop(0,"#a06438"),g.addColorStop(.6,"#7a4a2e"),g.addColorStop(1,"#3a1b0c"),i.fillStyle=g,i.beginPath(),i.arc(m,_,a(.021),0,Math.PI*2),i.fill(),i.fillStyle="#140a05",i.beginPath(),i.arc(m,_,a(.0075),0,Math.PI*2),i.fill(),i.fillStyle="#ffffff",i.beginPath(),i.arc(s(f*.045-.007),o(-.053),a(.004),0,Math.PI*2),i.fill(),h>.01){const v=-.043+h*-.038000000000000006;i.fillStyle=l,i.fillRect(s(f*.08)-a(.09),o(-.043)-2,a(.18),o(v)-o(-.043)+2)}i.restore(),i.strokeStyle="#241108",i.lineWidth=a(.009),i.lineCap="round",i.beginPath(),i.moveTo(s(f*.015),o(-.066)),i.quadraticCurveTo(s(f*.045),o(-.031),s(f*.08),o(-.058)),i.lineTo(s(f*.089),o(-.054)),i.stroke(),i.strokeStyle="#b4622a",i.lineWidth=a(.002),i.beginPath(),i.moveTo(s(f*.018),o(-.068)),i.quadraticCurveTo(s(f*.045),o(-.089),s(f*.077),o(-.061)),i.stroke(),h>=.95&&(i.strokeStyle="#241108",i.lineWidth=a(.004),i.beginPath(),i.moveTo(s(f*.015),o(-.066)),i.quadraticCurveTo(s(f*.045),o(-.084),s(f*.08),o(-.058)),i.stroke())}i.fillStyle="rgba(140,60,15,0.5)";for(const f of[1,-1])i.beginPath(),i.ellipse(s(f*.011),o(-.118),a(.0045),a(.003),0,0,Math.PI*2),i.fill();i.strokeStyle="#5e2610",i.lineWidth=a(.006),i.lineCap="round",i.beginPath(),i.moveTo(s(-.046),o(-.146)),i.bezierCurveTo(s(-.018),o(-.158),s(.018),o(-.158),s(.046),o(-.142)),i.lineTo(s(.054),o(-.133)),i.moveTo(s(-.046),o(-.146)),i.lineTo(s(-.054),o(-.139)),i.stroke(),i.fillStyle="rgba(164,78,19,0.40)",i.beginPath(),i.ellipse(s(0),o(-.162),a(.02),a(.006),0,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(200,111,46,0.30)",i.lineWidth=a(.002),i.beginPath(),i.moveTo(s(0),o(-.123)),i.lineTo(s(0),o(-.142)),i.stroke()}return{canvas:n,draw:u}}function Zw({joints:r,mats:e,quality:t}){const n=r.head,i=new ti;i.name="skullFrame",i.position.y=k_,n.add(i);const s=new Xo({color:12605976,roughness:.55,envMapIntensity:.6}),o=t==="low"?10:28,a=$w.map(([U,B])=>new ne(U,B)),l=new Rs(a,o);l.scale(1,1,.95);const c=l.attributes.position;for(let U=0;U<c.count;U++){let B=c.getX(U),V=c.getY(U),W=c.getZ(U);if(W>.055&&V>-.19&&V<.01){const F=1-qw(0,.09,Math.abs(B));W+=F*(.055+(W-.055)*.55-W)}if(V<-.1&&W>0){const F=Math.min(1,(-.1-V)/.09);B*=1-.22*F}V<-.15&&W>.03&&(W+=Math.min(.014,(-.15-V)*.35)),V>-.045&&V<-.022&&W>.06&&(W+=.006),V>-.075&&V<-.048&&W>.07&&(W-=.004),c.setXYZ(U,B,V,W)}l.computeVertexNormals();const u=[];for(const U of[1,-1]){const B=new Wi(.032,t==="low"?8:14,t==="low"?6:10);B.scale(.45,1.02,.75);const V=new Ke().makeRotationY(-U*.25).setPosition(U*.114,-.075,-.042);B.applyMatrix4(V),u.push(B);const W=new ke(new Wi(.018,10,8),s);W.scale.set(.3,.8,.6),W.position.set(U*.12,-.075,-.042),W.rotation.y=-U*.25,i.add(W)}const h=ws([l,...u]);i.add(new ke(h,e.skin));const d=jw(t);d.draw(0);const f=new qo(d.canvas);f.colorSpace=Wt,f.anisotropy=4;const m=l.toNonIndexed(),_=m.attributes.position,g=m.attributes.normal,p=[],x=[],v=[],y=[new I,new I,new I],E=new I,M=new I,b=new I;for(let U=0;U<_.count;U+=3){for(let B=0;B<3;B++)y[B].fromBufferAttribute(_,U+B);if(!(y[0].z<=.015||y[1].z<=.015||y[2].z<=.015)&&(b.crossVectors(E.subVectors(y[1],y[0]),M.subVectors(y[2],y[0])).normalize(),!(b.z<=.2)))for(let B=0;B<3;B++){const V=g.getX(U+B),W=g.getY(U+B),F=g.getZ(U+B);p.push(y[B].x+V*.0015,y[B].y+W*.0015,y[B].z+F*.0015),x.push(V,W,F),v.push((y[B].x+.115)/.23,(y[B].y+.185)/.2)}}const L=new zt;L.setAttribute("position",new at(p,3)),L.setAttribute("normal",new at(x,3)),L.setAttribute("uv",new at(v,2));const S=new ke(L,new Xo({map:f,transparent:!0,roughness:.5,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,depthWrite:!1}));S.renderOrder=1,i.add(S);let T=0;r.head.userData.setBlink=U=>{Math.abs(U-T)<.05&&U!==0&&U!==1||(T=U,d.draw(U),f.needsUpdate=!0)};for(const U of[1,-1]){const B=new ti;B.name=U===1?"eyeL":"eyeR",B.position.set(U*.045,-.062,.09),i.add(B),r[B.name]=B}const P={root:[0,-.064,.096],bL:[-.008,-.085,.102],bR:[.008,-.085,.102],tip:[0,-.103,.116],aL:[-.019,-.112,.098],aR:[.019,-.112,.098],under:[0,-.119,.1]},N=[P.root,P.bL,P.bR,P.bL,P.tip,P.bR,P.bL,P.aL,P.tip,P.bR,P.tip,P.aR,P.aL,P.under,P.tip,P.aR,P.tip,P.under],X=new zt;X.setAttribute("position",new at(N.flat(),3)),X.computeVertexNormals(),i.add(new ke(X,e.skinFlat));const D=new ke(new bi(.04,.052,.13,t==="low"?10:18),e.skin);D.position.y=.045,r.neck.add(D)}const Qt=new I(0,-.048,-.008),za=.118,ys=new I(1.02,.72,.92),Jw=Qt.y+za*ys.y,Kw=new I(0,Jw,-.038),to=[[0,.014],[30,.036],[75,-.035],[90,-.022],[130,-.095],[180,-.13]];function Ym(r){const e=Math.min(180,Math.abs(r)*(180/Math.PI));for(let t=1;t<to.length;t++)if(e<=to[t][0]){const[n,i]=to[t-1],[s,o]=to[t];return i+(e-n)/(s-n)*(o-i)}return to[to.length-1][1]}function no(r,e){const t=Math.max(-.95,Math.min(.95,(e-Qt.y)/(za*ys.y))),n=Math.sqrt(1-t*t);return new I(Qt.x+n*Math.sin(r)*za*ys.x,e,Qt.z+n*Math.cos(r)*za*ys.z)}function Qw({joints:r,mats:e,quality:t}){const n=Mc(20261),i=t==="low",s=M=>i?Math.ceil(M*.6):M,o=[],a=new Ye(It.hair),l=new Ye(It.hairOrange),c=new Ye(It.hairOrangeDeep),u=new Ye,h=(M,b)=>{const L=M.attributes.position.count,S=new Float32Array(L*3);for(let T=0;T<L;T++)S[T*3]=b.r,S[T*3+1]=b.g,S[T*3+2]=b.b;M.setAttribute("color",new rn(S,3))},d=M=>(n()<M?(u.copy(n()<.3?c:l),u.offsetHSL(ht(n,-.008,.008),0,ht(n,-.02,.02))):(u.copy(a),u.offsetHSL(0,0,ht(n,-.012,.018))),u),f=new I,m=new I,_=new I;function g(M,b,L,S,T){const P=new eu(S,L,4,1,!0);P.translate(0,L/2,0),P.scale(1,1,.42),h(P,T),f.copy(b).normalize();const N=M.clone().sub(Qt).normalize();m.crossVectors(N,f),m.lengthSq()<1e-6&&m.set(1,0,0).cross(f),m.normalize(),_.crossVectors(f,m).normalize();const X=new Ke().makeBasis(_,f,m),D=M.clone().addScaledVector(N,-.012);X.setPosition(D),P.applyMatrix4(X),o.push(P)}const p=M=>M+ht(n,-.08,.08),x=new Wi(za,i?16:32,i?8:16,0,Math.PI*2,0,Math.PI*.8);x.scale(ys.x,ys.y,ys.z),x.translate(Qt.x,Qt.y,Qt.z);{const M=x.attributes.position;for(let b=0;b<M.count;b++){const L=Math.atan2(M.getX(b)-Qt.x,M.getZ(b)-Qt.z),S=Ym(L);M.getY(b)<S&&(M.setY(b,S),M.setX(b,Qt.x+(M.getX(b)-Qt.x)*.94),M.setZ(b,Qt.z+(M.getZ(b)-Qt.z)*.94))}x.computeVertexNormals()}h(x,a),o.push(x);{const M=s(8);for(let b=0;b<M;b++){const L=p(((b+.5)/M-.5)*2*(50*Math.PI/180)),S=no(L,Ym(L)+ht(n,.008,.03)),P=S.clone().sub(Qt).normalize().multiplyScalar(.25).add(new I(.5*Math.sin(L),1,.2)),N=Math.abs(L)<.3;g(S,P,ht(n,.11,.17),ht(n,.045,.065),N?l:d(.85))}}for(const[M,b]of[[.03,s(6)],[.012,s(6)]])for(let L=0;L<b;L++){const S=p(L/b*Math.PI*2),T=no(S,M+ht(n,-.006,.006)),P=T.clone().sub(Kw).setY(0);P.lengthSq()<1e-6&&P.set(0,0,.1),P.normalize();const X=T.clone().sub(Qt).normalize().multiplyScalar(.35).addScaledVector(P,.35).add(new I(0,.85,-.55));g(T,X,ht(n,.15,.22),ht(n,.05,.075),d(.4))}for(const M of[1,-1]){const b=s(5);for(let L=0;L<b;L++){const S=M*p((50+L/(b-1)*75)*Math.PI/180),T=no(S,ht(n,-.03,.01)),N=T.clone().sub(Qt).normalize().multiplyScalar(.4).add(new I(M*.25,.45,-.9));g(T,N,ht(n,.08,.13),ht(n,.038,.055),d(.25))}}{const M=s(7);for(let b=0;b<M;b++){const L=Math.PI+p(((b+.5)/M-.5)*2*(55*Math.PI/180)),S=no(L,ht(n,-.02,.02)),P=S.clone().sub(Qt).normalize().multiplyScalar(.3).add(new I(0,.45,-1));g(S,P,ht(n,.15,.22),ht(n,.055,.078),d(.08))}}{const M=s(3);for(let b=0;b<M;b++){const L=Math.PI+ht(n,-.35,.35),S=no(L,ht(n,.026,.036)),T=new I(ht(n,-.12,.12),.75,-.65);u.copy(a).offsetHSL(0,0,ht(n,-.012,.018)),g(S,T,ht(n,.18,.23),ht(n,.06,.082),u)}}{const M=s(6);for(let b=0;b<M;b++){const L=Math.PI+p(((b+.5)/M-.5)*2*(40*Math.PI/180)),S=no(L,ht(n,-.115,-.075)),P=S.clone().sub(Qt).normalize().multiplyScalar(.2).add(new I(0,-.1,-.95));u.copy(a).offsetHSL(0,0,ht(n,-.012,.018)),g(S,P,ht(n,.05,.08),ht(n,.02,.03),u)}}for(const M of[1,-1]){const b=new eu(.016,.075,4,1,!0);b.translate(0,.075/2,0),b.scale(.55,1,1),h(b,a);const L=new Ke().makeRotationFromEuler(new Ts(-.13,0,Math.PI)).setPosition(M*.104,-.03,.03);b.applyMatrix4(L),o.push(b)}const v=ws(o,!1);o.forEach(M=>M.dispose());const y=new ti;y.position.y=k_;const E=new ke(v,e.hair);E.name="hair",y.add(E),r.head.add(y)}const Tc=.59,z_=1.14,V_=[[.19,.916],[.178,.965],[.17,1.006],[.174,1.08],[.179,z_]],H_=[[.179,z_],[.192,1.161],[.213,1.24],[.222,1.3],[.21,1.335],[.148,1.385],[.092,1.4]];function $m(r,e,t){const n=r.map(([a,l])=>new ne(a,l+e)),i=new Rs(n,t,Math.PI);i.scale(1,1,Tc);const s=i.attributes.position,o=i.attributes.uv;for(let a=0;a<o.count;a++){const l=s.getY(a)-e;o.setY(a,iu+(1-iu)*((l-as)/(co-as)))}return i}function eA(r){const e=[...V_,...H_];for(let t=0;t<e.length-1;t++){const[n,i]=e[t],[s,o]=e[t+1];if(r>=i&&r<=o)return n+(r-i)/(o-i)*(s-n)}return e[e.length-1][0]}function tA({joints:r,mats:e,quality:t}){const n=t==="low"?12:32,i=r.spine,s=r.chest,o=e.jacketMapped||e.jacket;i.add(new ke($m(V_,-1.04,n),o)),s.add(new ke($m(H_,-1.24,n),o));{const x=[],v=new bi(.185,.172,.06,n,1,!0);v.scale(1,1,Tc),x.push(v);const y=t==="low"?18:30;for(let b=0;b<y;b++){const L=b/y*Math.PI*2,S=Math.cos(L)*.179,T=Math.sin(L)*.179*Tc,P=new yi(.007,.048,.005),N=new Ke().makeRotationY(-L+Math.PI/2).setPosition(S,0,T);P.applyMatrix4(N),x.push(P)}const E=ws(x);x.forEach(b=>b.dispose());const M=new ke(E,e.ribbing);M.position.y=.886-1.04,i.add(M)}const a=new ke(new Wi(.115,t==="low"?12:18,t==="low"?8:12),e.pants);a.scale.set(1.22,.6,.82),a.position.y=-.1,r.hips.add(a);const l=[new ne(.092,.16),new ne(.096,.18),new ne(.1,.2)],c=new ke(new Rs(l,n,Math.PI),e.jacket);c.scale.z=.78,s.add(c);const u=new ke(new Wo(.098,.005,8,n,3.5),e.jacketTrim);u.rotation.x=Math.PI/2,u.rotation.z=Math.PI/2-3.5/2,u.scale.y=.78,u.position.y=.2,s.add(u);for(const x of[1,-1]){const v=new ke(new Go(.0045,.034,3,6),e.jacketTrim);v.position.set(x*.021,.178,.092*.78),s.add(v)}const h=new ke(new yi(.016,.032,.006),e.chipFrame);h.position.set(0,.135,.088*.78+.01),h.rotation.x=.12,s.add(h);const d=new ke(new Wo(.01,.003,5,10),e.chipFrame);d.position.set(0,.158,.088*.78+.012),s.add(d);const f=eA(1.24)*Tc,m=new ti;m.name="chip",m.position.set(0,0,f-.004);const _=nA(.105,.105,.024),g=new ke(new Rr(_,{depth:.012,bevelEnabled:!0,bevelSize:.005,bevelThickness:.005,bevelSegments:2}),e.chipFrame);if(m.add(g),!e.chipCoreMapped){const x=Hw();e.chipCoreMapped=e.chipCore.clone(),e.chipCoreMapped.color.setHex(16777215),e.chipCoreMapped.map=x,e.chipCoreMapped.emissive=new Ye(16777215),e.chipCoreMapped.emissiveIntensity=1.4,e.chipCoreMapped.emissiveMap=x}const p=new ke(new al(.062,.062),e.chipCoreMapped);p.position.z=.019,m.add(p);for(const[x,v]of[[-.062,0],[.062,0],[0,-.062],[0,.062]]){const y=new ke(new yi(x===0?.008:.022,x===0?.022:.008,.006),e.chipFrame);y.position.set(x,v,.004),m.add(y)}s.add(m),r.chip=m}function nA(r,e,t){const n=new ll,i=-r/2,s=-e/2;return n.moveTo(i+t,s),n.lineTo(i+r-t,s),n.quadraticCurveTo(i+r,s,i+r,s+t),n.lineTo(i+r,s+e-t),n.quadraticCurveTo(i+r,s+e,i+r-t,s+e),n.lineTo(i+t,s+e),n.quadraticCurveTo(i,s+e,i,s+e-t),n.lineTo(i,s+t),n.quadraticCurveTo(i,s,i+t,s),n}const qm=10*Math.PI/180;function jm(r,e,t){const n=r.map(([o,a])=>new ne(o,a)),i=new Rs(n,e),s=i.attributes.uv;for(let o=0;o<s.count;o++){const a=s.getX(o),l=s.getY(o);s.setXY(o,t.x+a*t.w,1-(t.y+(1-l)*t.h))}return i}function G_(r,e,t,n,i=.0025){const s=new bi(r,e,t,n*2,1,!0),o=s.attributes.position;for(let a=0;a<o.count;a++){const l=o.getX(a),c=o.getZ(a),u=Math.atan2(c,l),d=Math.round(u/(Math.PI*2)*n*2)%2===0?i:-i,f=Math.hypot(l,c);f>1e-6&&o.setXYZ(a,l+l/f*d,o.getY(a),c+c/f*d)}return s.computeVertexNormals(),s}function iA(r){const e=[],t=new yi(.095,.09,.04,2,2,1),n=t.attributes.position;for(let c=0;c<n.count;c++){const u=n.getX(c),h=n.getY(c);Math.abs(u)>.04&&Math.abs(h)>.038&&(n.setX(c,u*.88),n.setY(c,h*.9))}t.computeVertexNormals(),t.translate(0,-.045,0),e.push(t);const i=new Wi(.02,10,8);i.scale(1.9,.7,1),i.translate(0,-.088,.006),e.push(i);const s=[{x:-.03,len:.038,droop:.46},{x:-.01,len:.044,droop:.44},{x:.01,len:.04,droop:.46},{x:.03,len:.029,droop:.52}];for(const c of s){const u=new Go(.016,c.len,3,8);u.translate(0,-c.len/2-.014,0);const h=new Ke().makeRotationFromEuler(new Ts(-c.droop,0,r*(c.x/.03)*-.025)).setPosition(r*c.x,-.088,.006);u.applyMatrix4(h),e.push(u)}const o=new Go(.016,.04,3,8);o.translate(0,-.035,0);const a=new Ke().makeRotationFromEuler(new Ts(.5,0,r*.55)).setPosition(r*.04,-.025,.018);o.applyMatrix4(a),e.push(o);const l=ws(e);return e.forEach(c=>c.dispose()),l}function rA({joints:r,mats:e,quality:t}){const n=t==="low"?8:16,i=e.jacketMapped||e.jacket;for(const s of["L","R"]){const o=s==="L"?1:-1,a=r[`arm${s}_up`],l=r[`arm${s}_lo`],c=r[`hand${s}`],u=yo[`upper${s}`],h=yo[`fore${s}`],d=new Wi(.08,n,t==="low"?8:12);d.scale(1,1,.88);{const x=d.attributes.uv;for(let v=0;v<x.count;v++)x.setXY(v,u.x+x.getX(v)*u.w,1-(u.y+x.getY(v)*u.h*.55))}d.translate(o*.004,.018,0),a.add(new ke(d,i));const f=jm([[.082,0],[.074,-.12],[.064,-.235]],n,u);a.add(new ke(f,i));const m=jm([[.066,0],[.061,-.1],[.056,-.175]],n,h);l.add(new ke(m,i));const _=new ke(G_(.05,.047,.05,t==="low"?10:18),e.cuffRib);_.position.y=-.198,l.add(_);const g=new ke(new bi(.026,.026,.024,8),e.skin);g.position.y=-.228,l.add(g);const p=new ke(new Go(.005,.055,3,6),e.trimCyan);p.position.set(o*.079,-.055,.012),p.rotation.z=o*.35,a.add(p),c.add(new ke(iA(o),e.skin))}}function sA({joints:r,mats:e,quality:t}){const n=t==="low"?8:12,i=t==="low"?10:18,s=new ke(new bi(.15,.146,.05,t==="low"?16:24),e.pants);s.scale.z=.62,s.position.y=-.075,r.hips.add(s);const o=new ke(new yi(.022,.012,.004),e.pantsFacet);o.position.set(0,-.075,.15*.62+.002),r.hips.add(o);const a=(l,c=.006)=>{const u=l.attributes.position;for(let h=0;h<u.count;h++){const d=u.getX(h),f=u.getZ(h),m=Math.atan2(d,f);Math.abs(m)<.28&&u.setZ(h,f+c)}return l.computeVertexNormals(),l};for(const l of["L","R"]){const c=l==="L"?1:-1,u=r[`leg${l}_up`],h=r[`leg${l}_lo`],d=a(new bi(.086,.073,.38,n,3));d.translate(0,-.19,0),u.add(new ke(d,e.pantsFacet));const f=[],m=new Wi(.069,n,t==="low"?6:8);m.scale(1,.9,1.05),m.translate(0,.005,.006),f.push(m);const _=a(new bi(.067,.048,.36,n,3));{const M=_.attributes.position;for(let b=0;b<M.count;b++){const L=M.getY(b),S=M.getZ(b);S<-.03&&L>-.06&&L<.08&&M.setZ(b,S-.007)}_.computeVertexNormals()}_.translate(0,-.175,0),f.push(_);const g=ws(f);f.forEach(M=>M.dispose()),h.add(new ke(g,e.pantsFacet));const p=new ke(G_(.048,.046,.05,i,.0015),e.cuffRib);p.position.y=-.365,h.add(p);const x=new Lo(new qd(new I(c*.05,-.06,.095),new I(c*.12,-.065,.075),new I(c*.14,-.11,.03)),8,.0032,6);r.hips.add(new ke(x,e.trimCyan));const v=(M,b)=>new I(c*(M+.004)*Math.cos(qm),b,-(M+.004)*Math.sin(qm)),y=new Lo(new Kc([v(.084,-.05),v(.078,-.21),v(.072,-.385)]),10,.004,6);u.add(new ke(y,e.trimCyan));const E=new Lo(new Kc([v(.068,.005),v(.062,-.17),v(.05,-.35)]),10,.004,6);h.add(new ke(E,e.trimCyan));for(const[M,b,L]of[[u,-.385,.072],[h,.005,.068]]){const S=new ke(new Wi(.004,6,5),e.trimCyan);S.position.copy(v(L,b)),M.add(S)}}}const Zm=-.12;function Jm(r=1,e=1){const t=new ll;return t.moveTo(-.046*r,-.096*e),t.quadraticCurveTo(-.05*r,-.105*e,0,-.105*e),t.quadraticCurveTo(.05*r,-.105*e,.046*r,-.096*e),t.lineTo(.052*r,-.02*e),t.quadraticCurveTo(.058*r,.06*e,.0575*r,.09*e),t.quadraticCurveTo(.056*r,.15*e,.04*r,.183*e),t.quadraticCurveTo(.022*r,.196*e,0,.196*e),t.quadraticCurveTo(-.022*r,.196*e,-.04*r,.183*e),t.quadraticCurveTo(-.056*r,.15*e,-.0575*r,.09*e),t.quadraticCurveTo(-.058*r,.06*e,-.052*r,-.02*e),t.closePath(),t}const io=(r,e,t)=>{const n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)},Km=r=>1.2*Math.max(0,r-.12)**2;function Qm(r,e,t){const n=new ll,i=-r/2,s=-e/2;return n.moveTo(i+t,s),n.lineTo(i+r-t,s),n.quadraticCurveTo(i+r,s,i+r,s+t),n.lineTo(i+r,s+e-t),n.quadraticCurveTo(i+r,s+e,i+r-t,s+e),n.lineTo(i+t,s+e),n.quadraticCurveTo(i,s+e,i,s+e-t),n.lineTo(i,s+t),n.quadraticCurveTo(i,s,i+t,s),n}function oA({joints:r,mats:e,quality:t}){const n=t==="low"?6:16;for(const i of["L","R"]){const s=r[`foot${i}`],o=[],a=[];let l=new Rr(Jm(1,1),{depth:.014,bevelEnabled:!0,bevelThickness:.005,bevelSize:.005,bevelSegments:3,curveSegments:n});l.rotateX(-Math.PI/2);{const m=l.attributes.position;for(let _=0;_<m.count;_++){let g=m.getY(_);const p=m.getZ(_);g=Math.max(g,-.004),g>.005&&(g+=.012*io(-.03,-.105,p)*(p<-.03?1:0)+.012*io(.105,.03,-p)*0),g>.005&&p<-.03&&(g+=.012*io(-.03,-.105,p)),g+=Km(p),m.setY(_,g+Zm+.004)}l=Xm(l,1e-4),l.computeVertexNormals(),a.push(l)}let c=new Rr(Jm(.88,.95),{depth:.03,bevelEnabled:!0,bevelThickness:.045,bevelSize:.024,bevelSegments:t==="low"?3:5,curveSegments:n});c.rotateX(-Math.PI/2);{const m=c.attributes.position,_=.014;for(let g=0;g<m.count;g++){let p=m.getY(g);const x=m.getZ(g);p=Math.max(p,-.002);const v=x>.1?.8:x>.02?.8+.28*io(.1,.02,x):x>-.05?1.08-.16*io(-.02,-.05,x):.92-.28*io(-.05,-.098,x);p=p*v,p+=Km(x),m.setY(g,p+Zm+_)}c=Xm(c,1e-4),c.computeVertexNormals(),o.push(c)}{const m=new bi(.037,.0455,.058,t==="low"?18:24,1,!0),_=m.attributes.position;for(let p=0;p<_.count;p++){const x=_.getY(p),v=_.getZ(p);x>.015&&v<0&&_.setY(p,x-.015*Math.min(1,-v/.04))}m.computeVertexNormals(),m.translate(0,-.004,.004),o.push(m);const g=new Wo(.0365,.004,8,18);g.rotateX(Math.PI/2),g.translate(0,.024,.004),o.push(g)}const u=new ke(new bi(.031,.033,.085,14),e.pants);u.position.set(0,.01,.002),s.add(u);{const m=new Rr(Qm(.054,.112,.009),{depth:.006,bevelEnabled:!0,bevelThickness:.0025,bevelSize:.002,bevelSegments:2}),_=new Rr(Qm(.061,.119,.011),{depth:.0022,bevelEnabled:!1}),g=(p,x)=>{const v=new Ke().makeRotationX(-.95).setPosition(0,-.034,.08+x);p.applyMatrix4(v)};g(_,-.004),g(m,0),a.push(_),o.push(m)}{const m=new Wo(.03,.0022,6,20,Math.PI*1.05);m.rotateZ(-Math.PI*.02-Math.PI*0),m.rotateZ(Math.PI+(Math.PI*1.05-Math.PI)/-2),m.rotateX(.12),m.translate(0,-.066,-.086),a.push(m)}const h=m=>m.map(_=>_.index?_.toNonIndexed():_),d=new ke(ws(h(o)),e.shoe),f=new ke(ws(h(a)),e.sole);o.forEach(m=>m.dispose()),a.forEach(m=>m.dispose()),s.add(d,f)}}const aA=[[0,0,0],[-.06,-.2,-.13],[-.24,-.42,-.1],[-.4,-.34,0],[-.48,-.12,.04],[-.52,.02,.02]],e0=[.3,.42,.55,.68,.8];function W_({joints:r,mats:e,quality:t}){const n=r.tailRoot,i=t==="low"?28:80,s=t==="low"?8:14,o=new Kc(aA.map(y=>new I(...y))),a=new Lo(o,i,.034,s,!1),l=a.attributes.position,c=s+1,u=new I,h=new I;for(let y=0;y<=i;y++){const E=y/i,M=Zc.lerp(1.1,.55,E);o.getPointAt(E,u);for(let b=0;b<c;b++){const L=y*c+b;h.fromBufferAttribute(l,L).sub(u).multiplyScalar(M).add(u),l.setXYZ(L,h.x,h.y,h.z)}}a.computeVertexNormals();const d=new ke(a,e.tail);n.add(d);const f=o.computeFrenetFrames(i,!1);for(let y=0;y<e0.length;y++){const E=e0[y],M=Math.round(E*i),b=.034*Zc.lerp(1.1,.55,E),L=o.getPointAt(E),S=f.normals[M].clone().negate(),T=f.tangents[M],P=new ke(new yi(.004,y%2?.028:.042,.0035),e.tailGlyph);if(P.position.copy(L).addScaledVector(S,b),P.quaternion.setFromRotationMatrix(new Ke().makeBasis(S.clone().cross(T).normalize(),T,S)),n.add(P),y%2===0){const N=new ke(new yi(.014,.004,.0035),e.tailGlyph);N.position.copy(P.position).addScaledVector(T,.016),N.quaternion.copy(P.quaternion),n.add(N)}}const m=new ll;m.moveTo(0,.15),m.lineTo(.095,-.03),m.lineTo(.034,.004),m.lineTo(.026,-.078),m.lineTo(-.026,-.078),m.lineTo(-.034,.004),m.lineTo(-.095,-.03),m.closePath();const _=new Rr(m,{depth:.022,bevelEnabled:!0,bevelThickness:.007,bevelSize:.007,bevelSegments:1});_.translate(0,.03,-.011);const g=new Xo({color:It.tail,roughness:.38,envMapIntensity:.7,emissive:16747050,emissiveIntensity:1,flatShading:!0}),p=new ke(_,g),x=o.getPointAt(1),v=o.getTangentAt(1);return p.quaternion.setFromUnitVectors(new I(0,1,0),v),p.position.copy(x),n.add(p),{curve:o,mesh:d,arrowhead:p}}const lA={armL_up:{z:.14},armR_up:{z:-.14}},t0={idle:{},confident:{chest:{x:-.05},head:{x:-.04},armL_up:{z:.22,x:.06},armR_up:{z:-.22,x:.06},armL_lo:{x:-.12},armR_lo:{x:-.12}},point:{armR_up:{z:-1.15,x:-.85},armR_lo:{x:-.18},armL_up:{z:.18},head:{y:-.22,x:-.08},chest:{y:-.12}},openArms:{armL_up:{z:.85,x:-.28},armR_up:{z:-.85,x:-.28},armL_lo:{z:.35,x:-.25},armR_lo:{z:-.35,x:-.25},chest:{x:-.06},head:{x:-.05}},runReady:{spine:{x:.18},chest:{x:.08},armL_lo:{x:-.9},armR_lo:{x:-.9}}};function cA(r){const e=t0[r]||t0.idle,t={};for(const n of[lA,e])for(const[i,s]of Object.entries(n))t[i]={x:0,y:0,z:0,...t[i],...s};return t}const Ec=["hips","spine","chest","neck","head","clavL","armL_up","armL_lo","handL","clavR","armR_up","armR_lo","handR","legL_up","legL_lo","footL","legR_up","legR_lo","footR","tailRoot"],uA=Math.PI*2,da=(r,e,t)=>Math.min(t,Math.max(e,r)),ro=(r,e,t)=>r+(e-r)*t,ac=()=>Object.fromEntries(Ec.map(r=>[r,{x:0,y:0,z:0}]));var Vr,X_,Y_,$_;class hA{constructor({joints:e,mats:t,tail:n,runner:i}){of(this,Vr);this.joints=e,this.mats=t,this.tail=n,this.runner=i,this.base=ac(),this.breath=ac(),this.loco=ac(),this.overlay=ac(),this.t=0,this.phase=0,this.w=0,this.locoOverride=null,this.locoPulse={v:0},this.rootBob=0,this.hop={v:0},this.look={headY:0,headX:0,neckY:0,neckX:0},this.lookEnabled=!0,this.yawBase={v:0},this.dragYaw=0,this.dragVel=0,this.dragging=!1,this.blinkAt=2+Math.random()*3,this.overlayTL=null,this.setBasePose("idle",0)}setBasePose(e,t=.8){const n=cA(e);for(const i of Ec){const s=n[i]||{x:0,y:0,z:0};tn.to(this.base[i],{...s,duration:t,ease:"power2.inOut",overwrite:"auto"})}}setLocomotion(e){this.locoOverride=e}setYaw(e,t=.8){tn.to(this.yawBase,{v:e,duration:t,ease:"power2.inOut",overwrite:"auto"})}addDragYaw(e){this.dragYaw+=e,this.dragVel=e}setDragging(e){this.dragging=e,e&&(this.dragVel=0)}play(e){if(e==="run"){tn.timeline().to(this.locoPulse,{v:1,duration:.35,ease:"power2.out"}).to(this.locoPulse,{v:0,duration:.6,ease:"power2.inOut"},1.1);return}const t={wave:hl(this,Vr,X_),cheer:hl(this,Vr,Y_),point:hl(this,Vr,$_)}[e];if(t){this.overlayTL?.kill();for(const n of Ec)tn.to(this.overlay[n],{x:0,y:0,z:0,duration:.15,overwrite:"auto"});this.overlayTL=t.call(this)}}update({dt:e,pointer:t,scrollVel:n,camera:i=null}){const{joints:s}=this;this.t+=e;const o=Math.sin(this.t*1.7);if(s.chest.scale.setScalar(1+.014*o),this.breath.clavL.z=.014*o,this.breath.clavR.z=-.014*o,this.breath.head.x=.012*Math.sin(this.t*1.7+.6),this.breath.tailRoot.y=.09*Math.sin(this.t*1.3),this.breath.tailRoot.x=-.55*this.w,this.t>this.blinkAt){const v=da((this.t-this.blinkAt)/.09,0,1),y=v<.5?v*2:1-(v-.5)*2;s.head.userData.setBlink?.(y),v>=1&&(this.blinkAt=this.t+2.5+Math.random()*2.5,s.head.userData.setBlink?.(0))}const a=this.locoOverride??0,l=da(Math.max(Math.abs(n)*30,a,this.locoPulse.v),0,1);this.w+=(l-this.w)*.07;const c=this.w;this.phase+=e*uA*ro(1.4,2.4,c);const u=this.phase,h=ro(.45,1,c)*c,d=this.loco;d.legL_up.x=h*Math.sin(u),d.legR_up.x=h*Math.sin(u+Math.PI),d.legL_lo.x=Math.max(0,1.15*Math.sin(u+.55*Math.PI))*ro(.5,1,c)*c,d.legR_lo.x=Math.max(0,1.15*Math.sin(u+Math.PI+.55*Math.PI))*ro(.5,1,c)*c,d.footL.x=-.35*Math.sin(u+1.1)*c,d.footR.x=-.35*Math.sin(u+Math.PI+1.1)*c,d.armL_up.x=-.85*h*Math.sin(u),d.armR_up.x=-.85*h*Math.sin(u+Math.PI),d.armL_lo.x=-ro(.15,1.1,c)*c,d.armR_lo.x=-ro(.15,1.1,c)*c,d.hips.y=.12*c*Math.sin(u),d.chest.y=-.15*c*Math.sin(u),d.spine.x=.28*c+da(n*6,-.1,.15),this.rootBob=.035*c*Math.abs(Math.cos(u));let f=this.lookEnabled?1:0;if(f&&i){const v=i.getWorldDirection(dA),y=fA.set(0,0,1).applyQuaternion(this.joints.root.quaternion);f=v.dot(y)<-.35?1:0}const m=da(t.x*.6,-.55,.55)*f,_=da(t.y*.35,-.3,.3)*f;this.look.headY+=(m*.7-this.look.headY)*.08,this.look.headX+=(_*.7-this.look.headX)*.08,this.look.neckY+=(m*.3-this.look.neckY)*.08,this.look.neckX+=(_*.3-this.look.neckX)*.08,!this.dragging&&Math.abs(this.dragVel)>1e-4&&(this.dragYaw+=this.dragVel,this.dragVel*=.94);const g=this.base,p=this.breath,x=this.overlay;for(const v of Ec){const y=s[v];y&&y.rotation.set(g[v].x+p[v].x+d[v].x+x[v].x,g[v].y+p[v].y+d[v].y+x[v].y,g[v].z+p[v].z+d[v].z+x[v].z)}s.head.rotation.y+=this.look.headY,s.head.rotation.x+=this.look.headX,s.neck.rotation.y+=this.look.neckY,s.neck.rotation.x+=this.look.neckX,s.root.rotation.y=this.yawBase.v+this.dragYaw,s.root.position.y=this.rootBob+this.hop.v,this.runner&&this.runner.position.copy(this.tail.curve.getPointAt(this.t*.22%1)),this.mats.tail.emissiveIntensity=.35+.1*Math.sin(this.t*2.1)}}Vr=new WeakSet,X_=function(){const e=this.overlay;return tn.timeline({delay:.16}).to(e.armR_up,{z:-2.05,x:-.25,duration:.38,ease:"power2.out"}).to(e.armR_lo,{z:-.55,duration:.2,ease:"sine.inOut"},.3).to(e.armR_lo,{z:.25,duration:.24,ease:"sine.inOut",repeat:3,yoyo:!0},.5).to(e.head,{z:.12,duration:.3,ease:"sine.inOut"},.35).to(e.armR_up,{z:0,x:0,duration:.5,ease:"power2.inOut"},1.75).to(e.armR_lo,{z:0,duration:.4,ease:"power2.inOut"},1.75).to(e.head,{z:0,duration:.4,ease:"power2.inOut"},1.75)},Y_=function(){const e=this.overlay;return tn.timeline().to(e.armL_up,{z:2.45,x:-.2,duration:.34,ease:"back.out(1.6)"},0).to(e.armR_up,{z:-2.45,x:-.2,duration:.34,ease:"back.out(1.6)"},0).to(e.armL_lo,{z:.3,duration:.3},.1).to(e.armR_lo,{z:-.3,duration:.3},.1).to(e.head,{x:-.22,duration:.3,ease:"sine.out"},.05).to(this.hop,{v:.085,duration:.22,ease:"power2.out",repeat:3,yoyo:!0},.15).to([e.armL_up,e.armR_up,e.armL_lo,e.armR_lo,e.head],{x:0,y:0,z:0,duration:.55,ease:"power2.inOut"},1.7)},$_=function(){const e=this.overlay;return tn.timeline().to(e.armR_up,{z:-1.15,x:-.85,duration:.4,ease:"power2.out"}).to(e.armR_lo,{x:-.15,duration:.3},.15).to(e.head,{y:-.25,duration:.35,ease:"sine.inOut"},.1).to([e.armR_up,e.armR_lo,e.head],{x:0,y:0,z:0,duration:.6,ease:"power2.inOut"},2)};const dA=new I,fA=new I;function pA({quality:r="high"}={}){const e=B_();if(!e.jacketMapped){const h=zw({size:r==="low"?1024:2048});e.jacketMapped=e.jacket.clone(),e.jacketMapped.color.setHex(16777215),e.jacketMapped.map=h.map,e.jacketMapped.emissive=new Ye(16777215),e.jacketMapped.emissiveIntensity=.85,e.jacketMapped.emissiveMap=h.emissiveMap}const{root:t,joints:n}=Yw(),i={joints:n,mats:e,quality:r};Zw(i),Qw(i),tA(i),rA(i),sA(i),oA(i);const s=W_(i),o=Vw();for(const h of[1,-1]){const d=new ke(new al(.105,.052),new Xo({map:o,transparent:!0,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));d.position.set(h*.1,.058,.112),d.rotation.y=h*.42,n.chest.add(d)}const a=Ww(It.chipGlow),l=new gE(new y_({map:a,transparent:!0,blending:Ja,depthWrite:!1,opacity:.35}));l.scale.setScalar(.14),l.position.z=.03,n.chip.add(l);const c=new hA({joints:n,mats:e,tail:s,runner:null});return{sectionId:"*",root:t,joints:n,tail:s,anim:c,active:!0,setActive(h){this.active=h,t.visible=h},play(h){c.play(h)},setBasePose(h,d){c.setBasePose(h,d)},setLocomotion(h){c.setLocomotion(h)},setYaw(h,d){c.setYaw(h,d)},addDragYaw(h){c.addDragYaw(h)},setDragging(h){c.setDragging(h)},setLookEnabled(h){c.lookEnabled=h},update(h){c.update(h)},dispose(){t.parent?.remove(t),t.traverse(h=>h.geometry?.dispose())}}}const mA="/models/mascot.glb",gA=1.8,_A={idle:/idle|breath/i,wave:/wave|greet/i,run:/run|stride|walk/i,cheer:/clap|cheer/i};function vA(r,e){const t=i=>i.replace(/^mixamorig[:_]?/i,"").replace(/[:_\s]/g,"").toLowerCase(),n=new Map;return e.traverse(i=>{i.isBone&&n.set(t(i.name),i.name)}),n.size?r.map(i=>{const s=i.clone();return s.tracks=s.tracks.map(o=>{const a=o.name.lastIndexOf("."),l=o.name.slice(0,a),c=o.name.slice(a),u=n.get(t(l));if(!u||u===l)return o;const h=o.clone();return h.name=u+c,h}),s}):r}const n0=new I;function bh(r){r.updateWorldMatrix(!0,!0);const e=new Gi;e.makeEmpty();let t=0;return r.traverse(n=>{n.isBone&&(n.getWorldPosition(n0),e.expandByPoint(n0),t++)}),t?(e.expandByScalar((e.max.y-e.min.y)*.08),e):new Gi().setFromObject(r)}async function xA(){let r;try{const{GLTFLoader:F}=await $h(async()=>{const{GLTFLoader:ae}=await import("./GLTFLoader-CVpWjoUA.js");return{GLTFLoader:ae}},[],import.meta.url),{MeshoptDecoder:C}=await $h(async()=>{const{MeshoptDecoder:ae}=await import("./meshopt_decoder.module-CkuQsJa_.js");return{MeshoptDecoder:ae}},[],import.meta.url),J=new F;J.setMeshoptDecoder(C),r=await J.loadAsync(mA)}catch(F){return console.warn("[marut-glb] load failed, falling back to procedural:",F),null}const e=r.scene;e.traverse(F=>{(F.isMesh||F.isSkinnedMesh)&&(F.frustumCulled=!1)}),e.traverse(F=>{if(!(F.isMesh||F.isSkinnedMesh)||!F.material)return;const C=F.material;C.envMapIntensity=.9,C.map&&(C.map.anisotropy=8,C.bumpMap=C.map,C.bumpScale=.6),C.onBeforeCompile=J=>{J.fragmentShader=J.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          {
            float lum = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
            roughnessFactor = clamp(roughnessFactor * (1.15 - lum * 0.35), 0.25, 1.0);
          }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          {
            vec3 c = diffuseColor.rgb;
            // hot saturated orange ONLY (circuit print / trim) — skin is
            // also orange-family but desaturated; the g-channel guard
            // excludes it, otherwise the whole character radiates
            float orange = smoothstep(0.52, 0.85, c.r - c.b)
                         * smoothstep(0.50, 0.90, c.r)
                         * (1.0 - smoothstep(0.62, 0.80, c.g));
            float cyan   = smoothstep(0.18, 0.55, c.b - c.r) * smoothstep(0.35, 0.80, c.b);
            totalEmissiveRadiance += c * (orange * 0.85 + cyan * 1.35);
            // velvet rim — normal falloff against the view carves the sculpt
            float rim = pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 3.0);
            totalEmissiveRadiance += vec3(1.0, 0.72, 0.5) * rim * 0.055;
          }`)},C.needsUpdate=!0});let t=r.animations||[];t.length&&(t=vA(t,e));const n=t.length?new Cw(e):null,i=F=>t.find(C=>(_A[F]||new RegExp(F,"i")).test(C.name)),s=F=>{const C=i(F);return C&&n?n.clipAction(C):null},o=new ti;o.add(e);const a=new ti;a.name="marut-glb",a.add(o);const l=s("idle");l&&l.play(),n&&n.update(.15);let c=bh(a),u=c.getSize(new I);u.z>u.y*1.3&&(o.rotation.x=-Math.PI/2,c=bh(a),u=c.getSize(new I));const h=Math.max(u.x,u.y,u.z);if(!isFinite(h)||h<1e-5||u.y<h*.4)return console.warn("[marut-glb] rig collapses when posed — falling back to procedural."),n&&n.stopAllAction(),null;const d=gA/u.y;o.scale.setScalar(d),o.updateWorldMatrix(!0,!0),c=bh(a),o.position.set(-(c.max.x+c.min.x)/2,-c.min.y,-(c.max.z+c.min.z)/2);const f=s("run");let m=null;{let F=null;e.traverse(j=>{!F&&j.isBone&&/hips$/i.test(j.name.replace(/^mixamorig[:_]?/i,""))&&(F=j)});const C=F||o;C.updateWorldMatrix(!0,!1),m=new ti,C.add(m);const J=new I;C.getWorldScale(J);const ae=new Vi;C.getWorldQuaternion(ae),m.position.copy(C.worldToLocal(new I(0,.8,-.11))),m.quaternion.copy(ae.invert()),m.scale.set(1/J.x,1/J.y,1/J.z),W_({joints:{tailRoot:m},mats:B_(),quality:"high"})}let _=null;const g=[],p=[],x={spine:-.03,spine1:-.035,spine2:-.055,neck:-.045};e.traverse(F=>{if(!F.isBone)return;const C=F.name.replace(/^mixamorig[:_]?/i,"").toLowerCase();C==="head"?_=F:x[C]!=null?g.push([F,x[C]]):C==="leftshoulder"?p.push([F,1]):C==="rightshoulder"&&p.push([F,-1])});const v=-.035,y=.12,E=new I(0,1,0),M=g.map(([F])=>F).filter(F=>!/neck/i.test(F.name));let b=0,L=0,S=!1,T=0,P=0,N=0,X=0,D=!0,U=0,B=0,V=0;return{sectionId:"*",root:a,active:!0,setActive(F){this.active=F,a.visible=F},play(F){const C=s(F==="point"?"wave":F);if(!C||C===l||!n)return;C.reset(),C.setLoop(Jg),C.clampWhenFinished=!1,C.timeScale=F==="cheer"?1.05:1,C.setEffectiveWeight(1),C.fadeIn(.25),C.play(),l?.fadeOut(.25);const J=ae=>{ae.action===C&&(n.removeEventListener("finished",J),l?.reset().fadeIn(.45).play())};n.addEventListener("finished",J)},setBasePose(){},setYaw(F){b=F},setLocomotion(F){T=F==null?0:Zc.clamp(F,0,1)},addDragYaw(F){L+=F,a.rotation.y+=F},setDragging(F){S=F},setLookEnabled(F){D=!!F},update({dt:F,pointer:C,scrollVel:J}){V+=F,n&&n.update(F),m&&(m.rotation.y=Math.sin(V*.9)*.08+Math.sin(V*1.7)*.03,m.rotation.x=Math.sin(V*.7)*.04);const ae=b+L;if(a.rotation.y+=(ae-a.rotation.y)*(S?.5:.08),f){const ee=Math.max(T,Math.min(1,Math.abs(J)*40));P+=(ee-P)*.1,f.setEffectiveWeight(P),f.timeScale=.85+.45*P,P>.01&&!f.isRunning()&&f.play(),a.rotation.x=P*.08}const j=1-P*.7;for(const[ee,ue]of g)ee.rotation.x+=ue*j;for(const[ee,ue]of p)ee.rotateOnWorldAxis(E,ue*y*j);if(_&&!S){const ee=D&&C?C.x*.28:0,ue=D&&C?C.y*.16:0;N+=(ee-N)*.06,X+=(ue-X)*.06,_.rotation.y+=N,_.rotation.x+=X+v*j}if(!S){const ee=D&&C?C.x*.12:0;U+=(ee-U)*.04;for(const ue of M)ue.rotation.y+=U*.5}const Y=Zc.clamp(-J*5,-.055,.055);B+=(Y-B)*.08,a.rotation.z=B},dispose(){n&&n.stopAllAction(),a.parent?.remove(a),a.traverse(F=>{F.geometry?.dispose(),F.material&&(Array.isArray(F.material)?F.material:[F.material]).forEach(C=>{C.map?.dispose(),C.dispose()})})}}}const q_=Math.sqrt(3),yA=.5*(q_-1),fa=(3-q_)/6,i0=r=>Math.floor(r)|0,r0=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function _u(r=Math.random){const e=bA(r),t=new Float64Array(e).map(i=>r0[i%12*2]),n=new Float64Array(e).map(i=>r0[i%12*2+1]);return function(s,o){let a=0,l=0,c=0;const u=(s+o)*yA,h=i0(s+u),d=i0(o+u),f=(h+d)*fa,m=h-f,_=d-f,g=s-m,p=o-_;let x,v;g>p?(x=1,v=0):(x=0,v=1);const y=g-x+fa,E=p-v+fa,M=g-1+2*fa,b=p-1+2*fa,L=h&255,S=d&255;let T=.5-g*g-p*p;if(T>=0){const X=L+e[S],D=t[X],U=n[X];T*=T,a=T*T*(D*g+U*p)}let P=.5-y*y-E*E;if(P>=0){const X=L+x+e[S+v],D=t[X],U=n[X];P*=P,l=P*P*(D*y+U*E)}let N=.5-M*M-b*b;if(N>=0){const X=L+1+e[S+1],D=t[X],U=n[X];N*=N,c=N*N*(D*M+U*b)}return 70*(a+l+c)}}function bA(r){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(r()*(256-n)),s=t[n];t[n]=t[i],t[i]=s}for(let n=256;n<512;n++)t[n]=t[n-256];return t}const s0=_u(),o0=_u(),SA=_u(),MA=_u(),ld={hero:{pos:[1.6,1.45,4.2],frameX:.74,ty:1.02,fov:50,pose:"confident",yaw:-.3,look2D:!0},brand:{pos:[.5,.4,2.4],frameX:.72,ty:1.15,fov:58,pose:"idle",yaw:.15,loco:.4},stats:{pos:[-2.8,1.9,5.6],frameX:.5,ty:1,fov:50,pose:"idle",yaw:.6},about:{pos:[1.7,1.4,2.6],frameX:.72,ty:1.28,fov:46,pose:"idle",yaw:-.5,enter:"wave",look2D:!0},expertise:{pos:[.2,1.6,7],frameX:.8,ty:.5,fov:44,pose:"idle",yaw:0},testimonials:{pos:[-1.8,1.5,6],frameX:.76,ty:.42,fov:48,pose:"idle",yaw:.55},"mascot-lab":{pos:[0,1.35,2.9],frameX:.7,ty:1.05,fov:48,pose:"idle",yaw:0,drag:!0,look2D:!0},programmes:{pos:[2.6,1.3,7.2],frameX:.48,ty:1.3,fov:48,pose:"runReady",yaw:-1.35,loco:.65},consulting:{pos:[-1.5,1.8,7.5],frameX:.75,ty:.35,fov:44,pose:"confident",yaw:.8},tour:{pos:[1.9,1.35,3.6],frameX:.46,ty:1.2,fov:48,pose:"point",yaw:-.4},clients:{pos:[0,1.8,6.8],frameX:.74,ty:1.15,fov:46,pose:"idle",yaw:0},contact:{pos:[-.4,1.3,5.4],frameX:.11,ty:.55,fov:50,pose:"openArms",yaw:.15,enter:"cheer",look2D:!0}},a0={hero:{pos:[1.6,1,8.5],frameX:.78,ty:-.35,fov:44},stats:{pos:[-2.8,1.5,7],frameX:.5,ty:-.55,fov:44},expertise:{pos:[.2,1.4,8],frameX:.82,ty:-.1,fov:44},testimonials:{pos:[-1.8,1.4,8],frameX:.8,ty:-.72,fov:44},"mascot-lab":{pos:[0,1.3,7.3],frameX:.5,ty:-.78,fov:48},programmes:{pos:[2.6,1.2,8.5],frameX:.78,ty:-1.05,fov:44},consulting:{pos:[-1.5,1.5,8.5],frameX:.78,ty:-.95,fov:44},tour:{pos:[1.9,1.2,8.5],frameX:.78,ty:-1.05,fov:44},clients:{pos:[0,1.6,7],frameX:.78,ty:.05,fov:44},contact:{pos:[-.4,1.5,8.5],frameX:.22,ty:-.95,fov:44}},TA=()=>innerWidth<=900,lc=r=>TA()&&a0[r]?{...ld[r],...a0[r]}:ld[r],yr=new In,Sh=new I;function EA(r,e){yr.fov=r.fov,yr.aspect=e,yr.updateProjectionMatrix();const t=r.frameX*2-1,n=u=>(yr.position.set(...r.pos),yr.lookAt(u,r.ty,0),yr.updateMatrixWorld(),Sh.set(0,1,0).applyMatrix4(yr.matrixWorldInverse),Sh.z>-.01?null:Sh.applyMatrix4(yr.projectionMatrix).x);let i=0,s=1/0,o=null,a=null,l=null,c=null;for(let u=0;u<=48;u++){const h=-6+12*u/48,d=n(h);if(d===null){l=null,c=null;continue}const f=Math.abs(d-t);if(f<s&&(s=f,i=h),c!==null&&(c-t)*(d-t)<=0){o=l,a=h;break}l=h,c=d}if(o===null)return i;for(let u=0;u<24;u++){const h=(o+a)/2,d=n(h);if(d===null)break;d>t?o=h:a=h}return(o+a)/2}const wA={pos:[0,1.35,2.4],frameX:.5,ty:1.15,fov:48},cc=r=>({px:r.pos[0],py:r.pos[1],pz:r.pos[2],tx:EA(r,innerWidth/innerHeight),ty:r.ty,tz:0,fov:r.fov});function AA({sceneAPI:r,marut:e,reduced:t}){if(t||!r?.enabled||!e)return null;const{camera:n,addTick:i}=r.three;document.body.classList.add("showcase");const s={...cc(lc("hero"))};let o=null;const a=new Map;let l=null;window.__camState=s,window.__cam=n,window.__marutRoot=e.root,i(({pointer:d,scrollVel:f})=>{const m=performance.now()*.001,_=Math.min(1,Math.abs(f)*6),g=(s0(m*.11,0)*.6+s0(m*.5,4)*.4*_)*.05,p=(o0(m*.13,1)*.6+o0(m*.47,5)*.4*_)*.035,x=SA(m*.09,2)*.03,v=MA(m*.12,3)*.05;n.position.set(s.px+d.x*.22+g,s.py+d.y*.1+p,s.pz+x),n.lookAt(s.tx+v,s.ty,s.tz),Math.abs(n.fov-s.fov)>.01&&(n.fov=s.fov,n.updateProjectionMatrix())});function c(){o?.scrollTrigger?.kill(),o?.kill();const d=document.documentElement.scrollHeight-innerHeight;if(d<=0)return;o=tn.timeline({defaults:{ease:"power2.inOut"},scrollTrigger:{trigger:document.body,start:0,end:()=>document.documentElement.scrollHeight-innerHeight,scrub:.9,invalidateOnRefresh:!0}});const f=innerHeight,m=jt("main .section, main .band").filter(g=>ld[g.id]);let _=0;for(const g of m){const p=lc(g.id),x=Math.max(0,Math.min(d,g.offsetTop-f*.25)),v=x/d,y=Math.max(_,(x-f*.55)/d);o.to(s,{...cc(p),duration:Math.max(.015,v-y)},y),_=Math.max(_,v)}o.set({},{},1),window.__showTL=o}c(),Qe.addEventListener("refreshInit",c),addEventListener("resize",()=>Qe.refresh(),{passive:!0});let u=!1;const h=document.getElementById("mascotlab-mount");if(h){h.style.touchAction="pan-y",h.classList.add("mascot-drag");let d=0,f=0,m=!1;h.addEventListener("pointerdown",g=>{!u||g.button!==0&&g.pointerType==="mouse"||(m=!0,d=g.clientX,f=g.timeStamp,e.setDragging(!0),h.setPointerCapture?.(g.pointerId),h.classList.add("dragging"),document.body.classList.add("mascot-dragged"))}),h.addEventListener("pointermove",g=>{if(!m)return;const p=g.clientX-d;d=g.clientX,f=g.timeStamp,e.addDragYaw(p*.008),h.style.setProperty("--spin",Math.min(1,Math.abs(p*.008)*5).toFixed(2))});const _=g=>{m&&(m=!1,h.classList.remove("dragging"),e.setDragging(!1),g.timeStamp-f>120&&e.anim&&(e.anim.dragVel=0))};h.addEventListener("pointerup",_),h.addEventListener("pointercancel",_),h.addEventListener("lostpointercapture",_)}return{applySection(d){const f=lc(d);if(f){if(e.setBasePose(f.pose,.8),e.setYaw(f.yaw,1),e.setLocomotion(f.loco??null),e.setLookEnabled(!!f.look2D),u=!!f.drag,h&&(h.style.pointerEvents=u?"auto":"none"),f.enter&&d!==l){const m=performance.now();(a.get(d)??-1e9)+4e3<m&&(a.set(d,m),tn.delayedCall(.45,()=>e.play(f.enter)))}l=d}},introToHero(d){if(scrollY>innerHeight*.5)return tn.to({},{duration:.01});const f=d==="video"?1.05:.4;return tn.to(s,{...cc(lc("hero")),duration:1.5,ease:"power3.inOut",delay:f,onComplete:()=>e.play("wave")})},prepareIntro(){scrollY>innerHeight*.5||Object.assign(s,cc(wA))},refresh(){Qe.refresh()}}}function CA(r){return[Co(r,"webp"),Co("idle","webp"),Co("idle","png")]}function RA(){jt(".mascot-img").forEach(r=>{const e=r.closest(".mascot")?.dataset.pose||"idle",t=CA(e);let n=0;r.onerror=()=>{n+=1,n<t.length?r.src=t[n]:r.onerror=null},r.src=t[0]})}function PA(){const r=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("mascot-in"),r.unobserve(t.target))})},{threshold:.15});jt(".mascot:not(.mascot--nav):not(.mascot--pre)").forEach(e=>r.observe(e)),jt(".mascot--nav, .mascot--pre").forEach(e=>e.classList.add("mascot-in"))}function LA(){RA(),PA()}function IA({reduced:r}){const e=matchMedia("(hover: none)").matches;if(addEventListener("mousemove",c=>{const u=c.clientX/innerWidth*2-1,h=c.clientY/innerHeight*2-1;window.OS3D?.setPointer(u,h)},{passive:!0}),e||r)return;document.body.classList.add("custom-cursor");const t=Pt(".cursor-dot"),n=Pt(".cursor-ring");let i=0,s=0,o=0,a=0;addEventListener("mousemove",c=>{i=c.clientX,s=c.clientY},{passive:!0}),function c(){t.style.transform=`translate(${i}px,${s}px) translate(-50%,-50%)`,o+=(i-o)*.18,a+=(s-a)*.18,n.style.transform=`translate(${o}px,${a}px) translate(-50%,-50%)`,n.style.setProperty("--trail",Math.min(1,Math.hypot(i-o,s-a)/150).toFixed(2)),requestAnimationFrame(c)}();const l="a, button, .gem-card, .cg-card, .tab, input, select, textarea";document.addEventListener("mouseover",c=>{c.target.closest(l)&&n.classList.add("hover")}),document.addEventListener("mouseout",c=>{c.target.closest(l)&&n.classList.remove("hover")})}const cd={motto:"From data to decisions. From decisions to outcomes.",tagline:"Stride into Decision Intelligence",legal:"OranjeStride Consultancy Pvt. Ltd."},tf={links:[{id:"about",label:"About"},{id:"expertise",label:"Expertise"},{id:"programmes",label:"Programmes"},{id:"consulting",label:"Consulting"},{id:"tour",label:"India Tour"},{id:"clients",label:"Clients"},{id:"contact",label:"Contact"}],dots:{hero:"Hero",stats:"Impact",about:"About",expertise:"Expertise",testimonials:"Voices","mascot-lab":"Mascot",programmes:"Programmes",consulting:"Consulting",tour:"India Tour",clients:"Clients",contact:"Contact"}},Ri={video:"hero-opening",eyebrow:"Generative AI · Machine Learning · Analytics",headlineA:"Stride into ",headlineAccent:"Decision Intelligence",subhead:"India's premier Gen AI & Data Science training consultancy — turning complex algorithms into competitive advantage for professionals, executives, and institutions.",ctaPrimary:{label:"Explore Programmes",target:"#programmes"},ctaSecondary:{label:"Talk to Us",target:"#contact"}},DA=[{value:1e3,decimals:0,suffix:"+",label:"Professionals & Students Trained"},{value:4.8,decimals:1,suffix:"/5",label:"Average Feedback Score"},{value:90,decimals:0,suffix:"%+",label:"Post-Training Skill Adoption"},{value:15,decimals:0,suffix:"+",label:"Premier Institutional Clients"}],uc={label:"About OranjeStride",headA:"Nothing Is ",headAccent:"Unattainable",principles:[{n:"01",h:"Relevance With Industry",p:"Curriculum crafted by practitioners mapped to real job roles in AI, Data Engineering, and Analytics."},{n:"02",h:"Expert Experienced Faculty",p:"Dedicated data scientists and educators with hundreds of hours of live training delivery across elite institutions."},{n:"03",h:"Analytics For All",p:"Case-study methodology ensuring participants from finance, ops, and HR grasp practical applications immediately."},{n:"04",h:"Certified Analytics Professional",p:"Our OAP certification helps professionals stand apart in a crowded talent market."}]},Qr={video:"expertise-array",label:"What We Do",headA:"Areas of Deep ",headAccent:"Expertise",sub:"End-to-end capability across the modern AI stack — from foundational statistics to cutting-edge agentic systems.",cards:[{prop:"brain",h:"Generative AI & Agentic AI",p:"LLMs, prompt engineering, RAG architectures, AI agents, autonomous workflows.",tags:["LLMs","RAG","Agents","Prompt Eng."]},{prop:"chip",h:"Machine Learning & Statistical Modeling",p:"Supervised & unsupervised learning, regression, classification, ensemble methods, interpretability.",tags:["Scikit-learn","XGBoost","Python/R","Stats"]},{prop:"gem",h:"Data Science & Advanced Analytics",p:"End-to-end pipelines, EDA, feature engineering, fraud detection, risk scoring, forecasting.",tags:["Pandas","SQL","Forecasting","A/B Testing"]},{prop:"chart",h:"Business Intelligence & Visualization",p:"Tableau, Power BI, Python viz labs, executive dashboards.",tags:["Tableau","Power BI","Plotly","Dashboards"]},{prop:"arrow",h:"Corporate & Executive AI Strategy",p:"Workshops for C-suite on AI adoption, ROI mapping, transformation roadmaps.",tags:["Strategy","AI Roadmap","Change Mgmt"]},{prop:"node",h:"Deep Learning & Neural Networks",p:"CNNs, RNNs, Transformers, computer vision.",tags:["TensorFlow","PyTorch","Transformers","CV"]}]},hc={label:"What Learners Say",headA:"Results That ",headAccent:"Speak",items:[{initial:"D",quote:"When theoretical concepts go hand in hand with practical implementation, the mind forces itself to explore beyond the vanilla concepts.",name:"Dilpreet",org:"Sopra Steria"},{initial:"A",quote:"One of the best teachers I have ever had... you make difficult things easy to understand.",name:"Ashish Aggarwal",org:"Shri Vishwakarma Skill University"},{initial:"L",quote:"A great hands-on introduction to ML... The R & Python coverage is exceptional and immediately actionable.",name:"Lakshay Guglani",org:"Maharaja Agrasen College of Engg."}]},so={label:"Interactive 3D",headA:"Meet the ",headAccent:"Stride Runner",sub:"The OranjeStride mark, brought to life — a fully rigged 3D character rendered live in your browser, carrying the momentum we build into every programme.",hint:"Take him for a spin:",clips:[{clip:"wave",label:"Wave"},{clip:"run",label:"Run"},{clip:"cheer",label:"Clap"}]},er={video:"programmes-ascent",label:"Programmes",headA:"Our Training ",headAccent:"Streams",sub:"Three streams, one goal — turning knowledge into real capability. Each is built for a specific audience, delivered by people who've done the work, not just taught it.",cert:"Certificate jointly signed by OranjeStride & a university of repute in India.",tabs:[{id:"corporate",label:"Corporate & Leadership",steps:[{h:"Sector Tracks",p:"Banking & Financial Services (Credit Risk, Fraud ML, Forecasting, Gen AI), Healthcare & Pharma, Insurance (Claims AI, Churn, Risk Pricing), FMCG & Retail (Demand Forecast, CLV, Supply Chain AI), Government & Public Sector, Media/Tech/Telecom."},{h:"Leadership Tracks",p:"AI for Leaders — Strategic Fluency (flagship); AI Adoption Roadmap Workshop; Executive Analytics for Decision-Makers; Strategic Innovation with AI."},{h:"Generative AI & Agentic AI Bootcamp",flagship:!0,p:"LLMs, RAG, Prompt Engineering, MCP, Deployment."}]},{id:"university",label:"University & College",steps:[{h:"Undergraduate Track",p:"Data Analytics for Undergraduates (Excel → MySQL → Tableau/Power BI → Python → Business Stats → capstone).",cert:!0},{h:"Postgraduate / MBA Track",p:"Business Analytics & ML for Managers (Python, regression, ML, credit/churn/revenue modelling, capstone).",cert:!0},{h:"Generative AI & Agentic AI Bootcamp",flagship:!0,p:"LLMs, RAG, Prompt Engineering, MCP, Deployment — for UG/PG cohorts."}]}]},Pi={video:"consulting-vault",label:"Consulting Practice",headA:"Data & Analytics ",headAccent:"Consulting",sub:"Beyond training, OranjeStride brings deep domain expertise to complex analytical problems — working with quant firms, sovereign funds, and government research bodies on high-stakes data challenges.",items:[{prop:"chart",h:"Quant Research & Risk Analytics",p:"Statistical modeling, factor analysis, risk scoring, backtesting → portfolio analytics."},{prop:"chip",h:"Financial Forecasting & Fraud Detection",p:"ML fraud detection, credit risk models, forecasting pipelines."},{prop:"node",h:"Government & Policy Research Analytics",p:"Analytics roadmaps, data governance, policy impact modeling."}],hudTitle:"Engagement Metrics",metrics:[{label:"Post-training technique adoption",value:"90%+"},{label:"Within-30-day application rate",value:"90%+"},{label:"Post-session community engagement",value:"90%+"},{label:"Average cohort completion",value:"85%+"},{label:"Sustained feedback",value:"4.8/5"}],bars:[{label:"Learner Satisfaction",value:96},{label:"Completion Rate",value:85},{label:"Skill Adoption",value:90}]},es={video:"india-tour-globe",label:"International Programme",headA:"India AI ",headAccent:"Learning Tour",sub:"Experience AI & Data Science education at its source. An immersive learning journey in India — combining world-class curriculum, hands-on labs, and the academic credibility of a co-signed certificate from a university of repute in India.",features:[{h:"Come to India. Learn at the Source.",p:"Structured, immersive programme on a partner university campus or executive training facility."},{h:"Practitioner-Led Curriculum",p:"OranjeStride faculty with live corporate experience (Accenture, EXL Services, global financial institutions). No pre-recorded content."},{h:"Hands-On Labs & Real Projects",p:"Real datasets from participants' own sectors (banking, insurance, government, FMCG); leave with deployable code/dashboards."},{h:"Cultural Immersion + Networking",p:"Campus visits, industry interfaces, peer cohorts from across the globe."},{h:"University-Backed Certificate",p:"Jointly signed by OranjeStride & a university of repute in India."}]},li={video:"clients-monument",label:"Our Reach",headA:"Trusted By Elite ",headAccent:"Institutions",sub:"From India's premier management schools to Fortune 500 leadership teams and government ministries — OranjeStride's programmes build capability where it matters most.",cta:"View Our Clients & Partners",hint:"16 organisations across academia, enterprise & government — explore the full roster.",roster:[{n:"IIM Visakhapatnam",t:"Management School",c:"academic",img:"/img/client-images/iim_vishakhapatnam.jpg",rel:"Postgraduate analytics cohort partner"},{n:"IIM Sambalpur",t:"Management School",c:"academic",img:"/img/client-images/iim_sambalpur.png",rel:"MBA business-analytics faculty engagement"},{n:"Christ University",t:"University",c:"academic",img:"/img/client-images/christ_university.png",rel:"Undergraduate data-analytics programme"},{n:"ISBF",t:"Business School",c:"academic",img:"/img/client-images/ISBF.jpeg",rel:"Applied ML elective delivery"},{n:"Great Learning",t:"Ed-Tech Platform",c:"academic",img:"/img/client-images/Great_Learning_Logo.jpg",rel:"Curriculum & live-session partner"},{n:"NIIT",t:"Training Institute",c:"academic",img:"/img/client-images/NIIT.png",rel:"Corporate upskilling collaborator"},{n:"Imarticus",t:"Training Institute",c:"academic",img:"/img/client-images/imarticus.png",rel:"Data science bootcamp faculty"},{n:"IMS Proschool",t:"Training Institute",c:"academic",img:"/img/client-images/ims_proschool.png",rel:"Analytics certification partner"},{n:"EduEdgePro",t:"Ed-Tech Platform",c:"academic",img:"/img/client-images/eduedge_pro.png",rel:"Gen AI content collaboration"},{n:"EY (Ernst & Young)",t:"Big 4 Consulting",c:"corporate",img:"/img/client-images/EY_logo.jpg",rel:"Executive AI-strategy workshops"},{n:"Hexaware Technologies",t:"IT Enterprise",c:"corporate",img:"/img/client-images/hexaware.jpg",rel:"ML upskilling for delivery teams"},{n:"Havells India",t:"Manufacturing",c:"corporate",img:"/img/client-images/havells_india.png",rel:"Analytics for operations leadership"},{n:"Colt Technology",t:"Telecom",c:"corporate",img:"/img/client-images/colt.png",rel:"Data science enablement programme"},{n:"Room to Read",t:"NGO / Social Sector",c:"corporate",img:"/img/client-images/room_to_read.png",rel:"Impact-analytics capacity building"},{n:"Bennett & Coleman",t:"Media Group",c:"corporate",img:"/img/client-images/bennett-coleman.png",rel:"Newsroom analytics training"},{n:"AJNIFM (Govt. of India)",t:"Government Ministry",c:"corporate",img:"/img/client-images/ajnifm.png",rel:"Public-sector AI research advisory"}]},wi={video:"closing-emblem",label:"Get In Touch",headA:"Let's Build ",headAccent:"Outcomes",headB:" Together",sub:"Whether you're an institution designing a curriculum, a company upskilling teams, or a fund needing analytics depth — we'd love to hear from you.",trust:["Practitioner-Led","University-Backed Certificate","1000+ Trained","4.8/5 Rated"],tokens:[{icon:"mail",strong:"contactus@oranjestride.com",span:"Email us"},{icon:"phone",strong:"+91 93117 90400",span:"Call us"},{icon:"pin",strong:"Safdarjung Enclave, New Delhi",span:"India"}],formAction:"https://formspree.io/f/mjgaovpl",enquiryOptions:["Corporate AI / ML Training - Banking & Finance","Corporate AI / ML Training - Healthcare & Pharma","Corporate AI / ML Training - Insurance","Corporate AI / ML Training - FMCG & Retail","Corporate AI / ML Training - Government & Public Sector","Corporate AI / ML Training - Media, Tech & Telecom","University Partnership - Undergraduate Programme","University Partnership - Postgraduate / MBA Programme","C-Suite & Leadership Workshop","Blue Ocean Strategy + AI Workshop","India AI Learning Tour","Data & Analytics Consulting","Quant / Fund Analytics","Government Research Advisory","Other"]},oo={badge:"◆ DataStride",pill:"New from OranjeStride",subtitle:"Interactive SQL Learning Platform by OranjeStride",desc:"Master SQL from the ground up through a fully browser-based, hands-on learning environment. DataStride is OranjeStride's dedicated platform for building real query-writing fluency — no installation, no setup. Write live SQL, solve business-scenario challenges, and progress from SELECT basics to advanced window functions and joins, all in one place.",features:[{ico:"⚡",h:"Live SQL Editor",p:"Write and run real SQL queries directly in your browser with instant feedback."},{ico:"📚",h:"Structured Curriculum",p:"From SELECT & WHERE to JOINs, subqueries, aggregations, and window functions."},{ico:"🎯",h:"Business Challenges",p:"Real-world datasets drawn from finance, retail, and HR to build job-ready skills."}],url:"https://datastride.oranjestride.com/"},NA={text:"New cohort enrolling — limited seats · India AI Learning Tour 2026"},UA={bubble:"Hi, I'm Marut, Welcome to OranjeStride!"},uo={video:"mascot-soaring-banner",eyebrow:"The Mark in Motion",headA:"Carry the ",headAccent:"Momentum",dots:{brand:"Stride"}};function OA(){return`
  <section class="band" id="stats">
    <div class="facet-bg" aria-hidden="true"></div>
    <div class="sec-content">
      <div class="stats-grid stagger">
        ${DA.map(r=>`
          <div class="stat">
            <strong data-count="${r.value}" data-decimals="${r.decimals}" data-suffix="${r.suffix}">0</strong>
            <span>${r.label}</span>
          </div>`).join("")}
      </div>
    </div>
  </section>`}function FA(){jt("#stats [data-count]").forEach(r=>{const e=parseFloat(r.dataset.count),t=parseInt(r.dataset.decimals||"0",10),n=r.dataset.suffix||"",i=1600,s=performance.now();r.classList.add("ticking"),function o(a){const l=Math.min(1,(a-s)/i),c=1-Math.pow(1-l,3);r.textContent=(e*c).toFixed(t)+(l===1?n:""),l<1?requestAnimationFrame(o):r.classList.remove("ticking")}(s)})}function BA(){return`
  <section class="section video-section" id="consulting" data-video="${Pi.video}">
    ${Gr(Pi.video)}
    <div class="sec-content">
      <p class="section-label reveal">${Pi.label}</p>
      <h2 class="headline reveal">${Pi.headA}<span class="accent">${Pi.headAccent}</span></h2>
      <p class="subhead reveal" style="margin-bottom:2rem;">${Pi.sub}</p>
      <div class="consult-layout">
        <div class="consult-items stagger">
          ${Pi.items.map(r=>`
            <div class="consult-item">
              <div class="consult-icon">${Ng(r.prop)}</div>
              <div><h4>${r.h}</h4><p>${r.p}</p></div>
            </div>`).join("")}
        </div>
        <div class="hud reveal">
          <h4>${Pi.hudTitle}</h4>
          ${Pi.metrics.map(r=>`<div class="data-row"><span>${r.label}</span><strong>${r.value}</strong></div>`).join("")}
          ${Pi.bars.map(r=>`
            <div class="bar">
              <div class="data-row" style="border:none;"><span>${r.label}</span><strong>${r.value}%</strong></div>
              <div class="bar-line"><div class="bar-fill" data-w="${r.value}"></div></div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  </section>`}function kA(){jt("#consulting .bar-fill").forEach(r=>{r.style.width=(r.dataset.w||0)+"%"})}function zA(){const r=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("in"),t.target.id==="stats"&&FA(),t.target.id==="consulting"&&kA(),r.unobserve(t.target))})},{threshold:.18,rootMargin:"0px 0px -8% 0px"});return jt(".reveal, .stagger, #stats, #consulting").forEach(e=>r.observe(e)),{revealHero(){jt("#hero .reveal").forEach((e,t)=>setTimeout(()=>e.classList.add("in"),t*110))}}}function VA({reduced:r}){if(r)return;const e=jt("main .section, main .band");for(const t of e){const n=t.querySelector(".sec-content");if(!n)continue;const i=t.id==="hero",s=tn.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:t,start:i?"top top":"top 78%",end:"bottom 22%",scrub:!0,invalidateOnRefresh:!0}});i?s.set(n,{y:0,autoAlpha:1}).to(n,{y:0,autoAlpha:1,duration:.8}):s.fromTo(n,{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:.22}).to(n,{y:0,autoAlpha:1,duration:.58}),s.to(n,{y:-50,autoAlpha:0,duration:.2})}}function HA({reduced:r}){const e=jt(".sec-video, .about-media video"),t=navigator.connection;if(t&&(t.saveData||/(^|\b)2g/.test(t.effectiveType||""))){document.body.classList.add("save-data");return}const n=new IntersectionObserver(c=>{c.forEach(u=>{const h=u.target;u.isIntersecting&&h.dataset.src&&!h.src&&(h.src=h.dataset.src,h.load())})},{rootMargin:"200% 0px"});if(e.forEach(c=>n.observe(c)),r)return;const i=new IntersectionObserver(c=>{c.forEach(u=>{const h=u.target;h.dataset.scrub||(u.isIntersecting?h.play?.().catch(()=>{}):h.pause?.())})},{threshold:.1});e.forEach(c=>{c.dataset.scrub||i.observe(c)});const s=[...new Set(jt('[data-scrub="true"]').map(c=>c.closest(".section")).filter(Boolean))];if(!s.length)return;let o=innerHeight;addEventListener("resize",()=>{o=innerHeight},{passive:!0});const a=()=>{const c=scrollY;s.forEach(u=>{const h=u.querySelector(".sec-video");if(!h||h.readyState<1||!h.duration)return;const d=u.getBoundingClientRect(),f=d.top+c,m=qx((c+o-f)/(d.height+o),0,1);h.paused||h.pause();const _=m*(h.duration-.05);if(Math.abs(h.currentTime-_)>.03)try{h.currentTime=_}catch{}})};let l=!1;addEventListener("scroll",()=>{l||(l=!0,requestAnimationFrame(()=>{a(),l=!1}))},{passive:!0})}function GA({showcase:r,marut:e,mode:t,reduced:n}){const i=Pt("#marut-bubble"),s=Pt("#marut-bubble-text");if(!i||!s)return;window.__marutIntro=r&&e?"glide":"flat";const o=l=>{const c=UA.bubble;if(n){s.textContent=c,i.classList.add("typed"),l?.();return}let u=0;i.classList.add("typing");const h=setInterval(()=>{s.textContent=c.slice(0,++u),u>=c.length&&(clearInterval(h),i.classList.remove("typing"),i.classList.add("typed"),l?.())},46)},a=()=>{i.classList.add("show"),o(()=>tn.delayedCall(3.4,()=>i.classList.add("hide")))};if(!r||!e){document.body.classList.add("intro-flat"),tn.delayedCall(n?.1:.9,a);return}scrollY>innerHeight*.5||r.introToHero(t).then(()=>a())}function WA({reduced:r}={}){const e=document.getElementById("sound-toggle");if(!e||r)return{swell(){}};let t=null,n=null,i=!1;const s=.11;function o(){const c=window.AudioContext||window.webkitAudioContext;if(!c)return!1;t=new c,n=t.createGain(),n.gain.value=0,n.connect(t.destination);const u=t.createBiquadFilter();return u.type="lowpass",u.frequency.value=440,u.Q.value=.6,u.connect(n),[55,82.41,110].forEach((h,d)=>{const f=t.createOscillator();f.type=d===2?"triangle":"sine",f.frequency.value=h,f.detune.value=(d-1)*6;const m=t.createGain();m.gain.value=d===2?.11:.19,f.connect(m),m.connect(u),f.start();const _=t.createOscillator();_.frequency.value=.05+d*.031;const g=t.createGain();g.gain.value=.05,_.connect(g),g.connect(m.gain),_.start()}),!0}function a(c){if(c&&!t&&!o())return;i=c,e.setAttribute("aria-pressed",String(i)),e.classList.toggle("on",i);const u=t.currentTime;t.resume?.(),n.gain.cancelScheduledValues(u),n.gain.setValueAtTime(n.gain.value,u),n.gain.linearRampToValueAtTime(i?s:0,u+(i?1.2:.5))}e.addEventListener("click",()=>a(!i));function l(){if(!i||!t)return;const c=1.1,u=t.currentTime,h=t.createBuffer(1,Math.floor(t.sampleRate*c),t.sampleRate),d=h.getChannelData(0);for(let g=0;g<d.length;g++)d[g]=Math.random()*2-1;const f=t.createBufferSource();f.buffer=h;const m=t.createBiquadFilter();m.type="bandpass",m.Q.value=.8,m.frequency.setValueAtTime(500,u),m.frequency.linearRampToValueAtTime(1900,u+c);const _=t.createGain();_.gain.value=0,_.gain.linearRampToValueAtTime(.05,u+.2),_.gain.linearRampToValueAtTime(0,u+c),f.connect(m),m.connect(_),_.connect(n),f.start(u),f.stop(u+c)}return{swell:l}}function XA(){return`
    <canvas id="gl-canvas" aria-hidden="true"></canvas>
    <div class="grade" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>
    <div class="vignette" aria-hidden="true"></div>
    <div class="cursor-dot" aria-hidden="true"></div>
    <div class="cursor-ring" aria-hidden="true"></div>
    <button class="perf-toggle" id="perf-toggle" type="button" aria-pressed="false" aria-label="Toggle lite performance mode" title="Lite mode — calmer motion & effects">
      <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
        <path d="M13 2 4 13h6l-1 9 9-12h-6l2-8z" fill="currentColor"/>
      </svg>
    </button>
    <button class="sound-toggle" id="sound-toggle" type="button" aria-pressed="false" aria-label="Toggle ambient sound">
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path class="snd-spk" d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/>
        <path class="snd-wave" d="M16 8.5a4.5 4.5 0 0 1 0 7M18.5 6a8 8 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <line class="snd-slash" x1="3" y1="21" x2="21" y2="3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
    </button>
    <div class="ribbon" role="status">
      <span class="ribbon-text">${NA.text}</span>
      <button class="ribbon-close" aria-label="Dismiss" id="ribbon-close">✕</button>
    </div>`}function YA(){return`
  <footer>
    <div class="footer-brand">
      <img src="${Dg()}" alt="OranjeStride" />
      <div><strong>${cd.legal}</strong><span>${cd.tagline}</span></div>
    </div>
    <nav class="footer-links" aria-label="Footer">
      ${tf.links.map(r=>`<a href="#${r.id}">${r.label}</a>`).join("")}
    </nav>
  </footer>`}function $A(){document.getElementById("ribbon-close")?.addEventListener("click",()=>document.body.classList.remove("ribbon-on"))}function qA(){return`
  <div id="preloader">
    <video class="pre-video" id="pre-video" muted playsinline autoplay loop
           preload="auto" src="${Fc("mascot-flight-loop")}"
           poster="${Bc("mascot-flight-loop")}" aria-hidden="true"></video>
    <div class="pre-video-scrim" aria-hidden="true"></div>

    <!-- Static branded loader: canvas emblem (no-video fallback) -->
    <div class="pre-inner">
      <canvas id="pre-canvas" width="520" height="520"></canvas>
      <div class="pre-word">${kc()}</div>
    </div>

    <!-- HUD: shared by both loader modes -->
    <div class="pre-hud">
      <div class="pre-hud-word">${kc()}</div>
      <div class="pre-bar"><i id="pre-fill"></i></div>
      <span class="pre-pct" id="pre-pct">0</span>
    </div>

    <!-- Skip: jump past the flight/portal footage straight to the reveal -->
    <button class="pre-skip" id="pre-skip" type="button" aria-label="Skip intro">
      Skip intro <span aria-hidden="true">→</span>
    </button>

  </div>`}const jA=(r,e)=>Promise.race([r,new Promise(t=>setTimeout(t,e))]);function ZA(r){const e=[],t=(s,o,a=8e3)=>e.push(jA(o,a).catch(()=>{}).then(()=>r(s)));t(.15,document.fonts?.ready||Promise.resolve());const n=new Image;n.src=Bc("hero-opening"),t(.15,n.decode?n.decode():Promise.resolve());const i=document.querySelector("#hero .sec-video");return t(.2,i?i.readyState>=1?Promise.resolve():new Promise(s=>i.addEventListener("loadedmetadata",s,{once:!0})):Promise.resolve()),t(.2,window.__marutReady||Promise.resolve(),14e3),t(.3,document.readyState==="complete"?Promise.resolve():new Promise(s=>addEventListener("load",s,{once:!0}))),Promise.all(e)}function JA({reduced:r,onDone:e}){const t=document.getElementById("preloader"),n=document.getElementById("pre-fill"),i=document.getElementById("pre-pct"),s=document.getElementById("pre-video"),o=document.getElementById("pre-canvas"),a=document.getElementById("pre-skip");document.body.classList.add("locked");let l=!1;const c=(E,M)=>{l||(l=!0,setTimeout(()=>{t.classList.add("done"),document.body.classList.remove("locked"),e?.(M),setTimeout(()=>t.remove(),1e3)},E))};if(r){t.classList.add("static-mode","flash"),s.removeAttribute("src"),c(260,"reduced");return}let u=0,h=0,d=!1;const f=ZA(E=>{u=Math.min(1,u+E)}),m=new Promise(E=>setTimeout(E,1800));(function E(){d||(h+=(u*100-h)*.08,n&&(n.style.width=`${h}%`),i&&(i.textContent=`${Math.round(h)}`),requestAnimationFrame(E))})();let _="video";const g=navigator.connection;g&&(g.saveData||/(^|\b)2g/.test(g.effectiveType||""))&&(_="static");const p=()=>{_!=="static-live"&&(_="static-live",t.classList.add("static-mode"),s.pause(),s.removeAttribute("src"),o&&KA(o))};if(_==="static")p();else{const E=setTimeout(()=>{s.readyState<2&&s.paused&&p()},1600);s.addEventListener("error",()=>{clearTimeout(E),p()},{once:!0}),s.play().catch(()=>{}),s.addEventListener("playing",()=>clearTimeout(E),{once:!0})}const x=document.createElement("video");x.muted=!0,x.playsInline=!0,x.preload="auto",setTimeout(()=>{_==="video"&&(x.src=Fc("mascot-flight-portal"))},900);function v(){if(!l){d=!0,n&&(n.style.width="100%"),i&&(i.textContent="100");try{s?.pause()}catch{}_==="video"?y():c(0,"static")}}a?.addEventListener("click",v),Promise.all([f,m]).then(async()=>{if(l)return;if(d=!0,n&&(n.style.width="100%"),i&&(i.textContent="100"),_!=="video"){c(700,"static");return}x.src||(x.src=Fc("mascot-flight-portal")),x.className="pre-video",x.setAttribute("aria-hidden","true"),t.prepend(x);try{await x.play(),s.remove()}catch{x.remove()}const E=x.isConnected?x:null;(E?Promise.race([new Promise(b=>E.addEventListener("ended",b,{once:!0})),new Promise(b=>setTimeout(b,5600))]):Promise.resolve()).then(()=>y())});function y(){if(l)return;l=!0,document.body.classList.remove("locked");const E={r:0},M=50,b=44,L=()=>{const T=`radial-gradient(circle at ${M}% ${b}%, transparent ${E.r}%, #000 ${E.r+.5}%)`;t.style.webkitMaskImage=T,t.style.maskImage=T},S=tn.timeline({onComplete(){t.remove(),delete window.__loaderTL}});window.__loaderTL=S,S.add(()=>e?.("video"),.15),S.to(E,{r:142,duration:1.25,ease:"power3.inOut",onUpdate:L},0)}}function KA(r){const e=r.getContext("2d"),t=r.width,n=r.height,i=t/2,s=n/2,o=[[0,-120],[70,0],[0,120],[-70,0]],a=[];for(let u=0;u<4;u++){const h=o[u],d=o[(u+1)%4];for(let f=0;f<30;f++){const m=f/30;a.push([i+h[0]+(d[0]-h[0])*m,s+h[1]+(d[1]-h[1])*m])}}const l=a.map(u=>({x:i+(Math.random()-.5)*t,y:s+(Math.random()-.5)*n,tx:u[0],ty:u[1]})),c=performance.now();(function u(h){const d=(h-c)/1e3,f=Math.min(1,d/1.4),m=Math.max(0,(d-1.4)/.8);e.clearRect(0,0,t,n),l.forEach(_=>{_.x+=(_.tx-_.x)*.06,_.y+=(_.ty-_.y)*.06,e.beginPath(),e.arc(_.x,_.y,1.6+m*1.5,0,7),e.fillStyle=`rgba(255,${106+m*80|0},0,${.5+f*.5})`,e.shadowBlur=8+m*24,e.shadowColor="#ff6a00",e.fill()}),m>0&&(e.beginPath(),e.moveTo(i,s-120),e.lineTo(i+70,s),e.lineTo(i,s+120),e.lineTo(i-70,s),e.closePath(),e.strokeStyle=`rgba(255,140,40,${Math.min(1,m)})`,e.lineWidth=2,e.shadowBlur=30,e.stroke()),d<2.6&&requestAnimationFrame(u)})(c)}function QA(){return`
  <nav class="nav" aria-label="Primary">
    <a class="nav-brand" href="#hero" aria-label="OranjeStride home">
      <img class="nav-logo" src="${Dg()}" alt="" width="34" height="34" decoding="async" />
      ${kc()}
    </a>
    <div class="nav-links" id="nav-links">
      ${tf.links.map(r=>`<a href="#${r.id}">${r.label}</a>`).join("")}
    </div>
    <div class="nav-dots" id="nav-dots" aria-hidden="true"></div>
    <button class="nav-burger" id="nav-burger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
  </nav>`}function e2({lenis:r,sections:e}){const t=Pt(".nav"),n=Pt("#nav-dots");e.forEach(l=>{const c=document.createElement("button");c.dataset.id=l.id;const u=tf.dots[l.id]||uo.dots[l.id]||l.id;c.title=u,c.setAttribute("aria-label",u),c.addEventListener("click",()=>{const h=document.getElementById(l.id);r?r.scrollTo(h):h.scrollIntoView({behavior:"smooth"})}),n.appendChild(c)});const i=()=>(document.getElementById("hero")?.offsetHeight||innerHeight)*.5,s=()=>{const l=scrollY>i();t.classList.toggle("visible",l),t.classList.toggle("solid",l)};addEventListener("scroll",s,{passive:!0}),s();const o=Pt("#nav-burger"),a=Pt("#nav-links");o?.addEventListener("click",()=>a.classList.toggle("mobile-open"))}function t2(r){jt("#nav-dots button").forEach(e=>e.classList.toggle("active",e.dataset.id===r))}const j_=()=>Pt("#nav-links")?.classList.remove("mobile-open");function n2(){return`
  <section class="section video-section" id="hero" data-video="${Ri.video}" data-scrub="true">
    ${Gr(Ri.video,{scrub:!0})}
    <div class="sec-content">
      <p class="eyebrow reveal">${Ri.eyebrow}</p>
      <p class="reveal" style="margin-bottom:0.6rem;">${kc("clamp(1.4rem,3vw,2rem)")}</p>
      <h1 class="display reveal">${Ri.headlineA}<span class="accent">${Ri.headlineAccent}</span></h1>
      <p class="subhead reveal">${Ri.subhead}</p>
      <p class="motto reveal">${cd.motto}</p>
      <div class="cta-row reveal">
        <a class="btn btn-primary" href="${Ri.ctaPrimary.target}">${Ri.ctaPrimary.label}</a>
        <a class="btn btn-ghost" href="${Ri.ctaSecondary.target}">${Ri.ctaSecondary.label}</a>
      </div>
    </div>
    ${cu("wave","hero",{label:"OranjeStride mascot"})}
    <!-- Marut's self-intro: typed beside the character after the loader -->
    <div class="marut-bubble" id="marut-bubble" role="status">
      <span id="marut-bubble-text"></span><i class="mb-caret" aria-hidden="true"></i>
    </div>
    <div class="hero-scroll-hint" aria-hidden="true">Scroll</div>
  </section>`}function i2(){return`
  <section class="section video-section band-moment" id="brand" data-video="${uo.video}">
    ${Gr(uo.video)}
    <div class="sec-content">
      <p class="eyebrow reveal">${uo.eyebrow}</p>
      <h2 class="headline reveal">${uo.headA}<span class="accent">${uo.headAccent}</span></h2>
    </div>
  </section>`}function r2(){return`
  <section class="section" id="about">
    <div class="facet-bg" aria-hidden="true"></div>
    <div class="sec-content">
      <div class="about-grid">
        <div>
          <p class="section-label reveal">${uc.label}</p>
          <h2 class="headline reveal">${uc.headA}<span class="accent">${uc.headAccent}</span></h2>
          <div class="principles stagger" style="margin-top:1.8rem;">
            ${uc.principles.map(r=>`
              <div class="principle">
                <span class="num">${r.n}</span>
                <div><h3>${r.h}</h3><p>${r.p}</p></div>
              </div>`).join("")}
          </div>
        </div>

        <!-- Media pane: empty framed stage the showcase camera fills with the
             live Marut; the flat still shows only on the reduced-motion tier. -->
        <div class="about-media about-stage reveal" id="about-mascot-mount">
          <span class="about-stage-glow" aria-hidden="true"></span>
          <img class="mascot-img about-mascot-img" src="${Co("idle","webp")}"
               alt="The OranjeStride mascot" decoding="async" />
          <span class="about-stage-floor" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  </section>`}function s2(){return`
  <section class="section video-section" id="expertise" data-video="${Qr.video}">
    ${Gr(Qr.video)}
    <div class="sec-content">
      <p class="section-label reveal">${Qr.label}</p>
      <h2 class="headline reveal">${Qr.headA}<span class="accent">${Qr.headAccent}</span></h2>
      <p class="subhead reveal">${Qr.sub}</p>
      <div class="grid-cards stagger">
        ${Qr.cards.map(r=>`
          <article class="gem-card">
            <div class="gem-icon">${Ng(r.prop)}</div>
            <h3>${r.h}</h3>
            <p>${r.p}</p>
            <div class="tags">${r.tags.map(e=>`<span class="tag">${e}</span>`).join("")}</div>
          </article>`).join("")}
      </div>
    </div>
  </section>`}function o2(){return`
  <section class="band" id="testimonials">
    <div class="facet-bg" aria-hidden="true"></div>
    <div class="sec-content">
      <p class="section-label reveal">${hc.label}</p>
      <h2 class="headline reveal">${hc.headA}<span class="accent">${hc.headAccent}</span></h2>
      <div class="testi-grid stagger">
        ${hc.items.map(r=>`
          <div class="testi">
            <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>"${r.quote}"</blockquote>
            <div class="testi-who">
              <div class="avatar">${r.initial}</div>
              <div><strong>${r.name}</strong><span>${r.org}</span></div>
            </div>
          </div>`).join("")}
      </div>
    </div>
  </section>`}const a2=`
  <svg class="spot-sweep" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842" fill="none">
    <g filter="url(#spot-blur)">
      <ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501"
        transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
        fill="#fff2e6" fill-opacity="0.21"></ellipse>
    </g>
    <defs>
      <filter id="spot-blur" x="0.860352" y="0.838989" width="3785.16" height="2840.26"
        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
        <feGaussianBlur stdDeviation="151"></feGaussianBlur>
      </filter>
    </defs>
  </svg>`;function l2(){return`
  <section class="band" id="mascot-lab">
    <div class="facet-bg" aria-hidden="true"></div>
    <div class="sec-content">
      <div class="lab-card reveal">
        ${a2}
        <div class="lab-split">
          <div class="lab-copy">
            <p class="section-label">${so.label}</p>
            <h2 class="headline lab-grad">${so.headA}<span class="accent">${so.headAccent}</span></h2>
            <p class="lead">${so.sub}</p>
            <div class="lab-chips" aria-label="Play a mascot animation">
              <span class="lab-hint">${so.hint}</span>
              ${so.clips.map(r=>`
                <button class="lab-chip" type="button" data-clip="${r.clip}"
                        aria-label="Play ${r.label} animation">${r.label}</button>`).join("")}
            </div>
          </div>
          <div class="lab-stage" id="mascotlab-mount">
            <img class="lab-fallback-img" src="${Co("idle","webp")}"
                 alt="The OranjeStride mascot" decoding="async" loading="lazy" />
            <span class="drag-hint" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>
              Drag to rotate
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>`}function c2(r){r&&jt("#mascot-lab .lab-chip").forEach(e=>{e.addEventListener("click",()=>{r.play?.(e.dataset.clip),e.classList.add("played"),setTimeout(()=>e.classList.remove("played"),350)})})}const u2=r=>`
  <div class="step">
    <h4>${r.h}${r.flagship?' <span class="accent">· Flagship</span>':""}</h4>
    <p>${r.p}</p>
    ${r.cert?`<p class="cert">${er.cert}</p>`:""}
  </div>`;function h2(){return`
  <section class="section video-section" id="programmes" data-video="${er.video}" data-scrub="true">
    ${Gr(er.video,{scrub:!0})}
    <div class="sec-content">
      <div class="prog-layout">
        <div>
          <p class="section-label reveal">${er.label}</p>
          <h2 class="headline reveal">${er.headA}<span class="accent">${er.headAccent}</span></h2>
          <p class="lead reveal">${er.sub}</p>
          <div class="tabs reveal" role="tablist" style="margin-top:1.8rem;">
            ${er.tabs.map((r,e)=>`<button class="tab${e===0?" active":""}" data-tab="${r.id}" role="tab">${r.label}</button>`).join("")}
          </div>
        </div>
        <div>
          ${er.tabs.map((r,e)=>`
            <div class="tab-panel${e===0?" active":""}" data-panel="${r.id}">
              ${r.steps.map(u2).join("")}
            </div>`).join("")}
        </div>
      </div>
    </div>
    <!-- Flat run still: reduced-motion tier only — the live tier's run is the
         procedural Marut sprinting in the showcase camera frame. -->
    ${cu("run","programmes")}
  </section>`}function d2(){const r=jt("#programmes .tab"),e=jt("#programmes .tab-panel");r.forEach(n=>n.addEventListener("click",()=>{r.forEach(i=>i.classList.remove("active")),e.forEach(i=>i.classList.remove("active")),n.classList.add("active"),Pt(`#programmes .tab-panel[data-panel="${n.dataset.tab}"]`)?.classList.add("active")}));const t=()=>{const n=Pt("#programmes .tab-panel.active");if(!n)return;const i=jt(".step",n),s=innerHeight/2;let o=null,a=1/0;i.forEach(l=>{const c=l.getBoundingClientRect(),u=Math.abs(c.top+c.height/2-s);u<a&&(a=u,o=l)}),i.forEach(l=>l.classList.toggle("active-step",l===o))};addEventListener("scroll",()=>requestAnimationFrame(t),{passive:!0}),t()}function f2(){return`
  <section class="section video-section" id="tour" data-video="${es.video}">
    ${Gr(es.video)}
    <div class="sec-content">
      <div class="tour-layout">
        <div>
          <p class="section-label reveal">${es.label}</p>
          <h2 class="headline reveal">${es.headA}<span class="accent">${es.headAccent}</span></h2>
          <p class="lead reveal">${es.sub}</p>
        </div>
        <div class="tour-features stagger">
          ${es.features.map(r=>`
            <div class="tour-feat">
              <span class="dot"></span>
              <div><h4>${r.h}</h4><p>${r.p}</p></div>
            </div>`).join("")}
        </div>
      </div>
    </div>
    ${cu("point","tour")}
  </section>`}const p2=()=>{const r=li.roster.filter(t=>t.c==="academic").length,e=li.roster.filter(t=>t.c==="corporate").length;return{all:li.roster.length,academic:r,corporate:e}};function m2(){return`
  <section class="section video-section" id="clients" data-video="${li.video}">
    ${Gr(li.video)}
    <div class="clients-fog" aria-hidden="true"></div>
    <div class="sec-content">
      <p class="section-label reveal">${li.label}</p>
      <h2 class="headline reveal">${li.headA}<span class="accent">${li.headAccent}</span></h2>
      <p class="subhead reveal">${li.sub}</p>
      <button class="btn btn-primary clients-cta-btn reveal" id="open-clients">${li.cta} →</button>
      <p class="clients-hint reveal">${li.hint}</p>
    </div>
    ${cu("idle","clients",{faint:!0})}
  </section>`}function g2(){const r=p2();return`
  <div class="cg-overlay" id="clients-modal" role="dialog" aria-modal="true" aria-labelledby="cg-title">
    <div class="cg-modal">
      <button class="cg-close" id="close-clients" aria-label="Close">✕</button>
      <div class="cg-head">
        <h3 id="cg-title">Clients &amp; Partners</h3>
        <p>${r.all} organisations across academia, enterprise &amp; government. Hover a card for the relationship.</p>
      </div>
      <div class="cg-tabs" id="cg-tabs">
        <button class="cg-tab active" data-filter="all">All <span>${r.all}</span></button>
        <button class="cg-tab" data-filter="academic">Academic <span>${r.academic}</span></button>
        <button class="cg-tab" data-filter="corporate">Corporate <span>${r.corporate}</span></button>
      </div>
      <div class="cg-grid" id="cg-grid" data-filter="all">
        ${li.roster.map(e=>`
          <div class="cg-card" data-cat="${e.c}">
            <div class="cg-logo"><img src="${e.img}" alt="${e.n}" loading="lazy" decoding="async"></div>
            <div class="cg-name">${e.n}<br><span class="cg-type">${e.t}</span></div>
            <div class="cg-cap">${e.rel}</div>
          </div>`).join("")}
      </div>
      <div class="cg-foot">
        <span>Building capability where it matters most.</span>
        <a class="btn btn-primary" href="#contact" id="cg-contact">Partner With Us →</a>
      </div>
    </div>
  </div>`}function _2({lenis:r}){const e=Pt("#clients-modal"),t=Pt("#cg-grid"),n=()=>{e.classList.add("open"),r?.stop(),document.body.style.overflow="hidden"},i=()=>{e.classList.remove("open"),r?.start(),document.body.style.overflow=""};return Pt("#open-clients")?.addEventListener("click",n),Pt("#close-clients")?.addEventListener("click",i),Pt("#cg-contact")?.addEventListener("click",i),e.addEventListener("click",s=>{s.target===e&&i()}),jt("#cg-tabs .cg-tab").forEach(s=>s.addEventListener("click",()=>{jt("#cg-tabs .cg-tab").forEach(o=>o.classList.remove("active")),s.classList.add("active"),t.dataset.filter=s.dataset.filter})),{close:i}}const v2=["check","cap","users","star"];function x2(){return`
  <section class="section video-section" id="contact" data-video="${wi.video}" data-scrub="true">
    ${Gr(wi.video,{scrub:!0})}
    <div class="sec-content">
      <p class="section-label reveal" style="text-align:center;">${wi.label}</p>
      <h2 class="headline reveal" style="text-align:center;">${wi.headA}<span class="accent">${wi.headAccent}</span>${wi.headB}</h2>
      <p class="subhead reveal" style="text-align:center;margin:0 auto 2rem;">${wi.sub}</p>

      <div class="trust-row reveal" style="justify-content:center;">
        ${wi.trust.map((r,e)=>`<span class="trust-chip">${$f(v2[e])}${r}</span>`).join("")}
      </div>

      <div class="contact-layout">
        <div>
          <div class="contact-tokens">
            ${wi.tokens.map(r=>`
              <div class="contact-token reveal">
                <span class="ico">${$f(r.icon)}</span>
                <div><strong>${r.strong}</strong><span>${r.span}</span></div>
              </div>`).join("")}
          </div>
          <!-- Mascot stage: fills the empty space under the tokens (never behind
               the form). Reduced-motion tier only — the live tier frames the
               procedural Marut cheering in the section's top-left instead. -->
          <div class="contact-mascot-stage reveal" id="contact-mascot-mount" aria-hidden="true">
            <img class="contact-mascot-img" src="${Co("idle","webp")}" alt="" decoding="async" />
            <span class="contact-mascot-floor"></span>
          </div>
        </div>

        <form class="form reveal" action="${wi.formAction}" method="POST">
          <div class="form-row">
            <label>Full Name<input type="text" name="name" class="form-input" placeholder="Your name" required /></label>
            <label>Organisation<input type="text" name="organisation" class="form-input" placeholder="Company / Institution" /></label>
          </div>
          <label>Email Address<input type="email" name="email" class="form-input" placeholder="you@organisation.com" required /></label>
          <label>Enquiry Type
            <select name="enquiry_type" class="form-input">
              <option value="">Select an option</option>
              ${wi.enquiryOptions.map(r=>`<option>${r}</option>`).join("")}
            </select>
          </label>
          <label>Message<textarea name="message" class="form-input" placeholder="Tell us about your goals or requirements..."></textarea></label>
          <button class="btn btn-primary" id="submitBtn" type="submit">Send Enquiry</button>
          <p class="form-status" id="form-status" role="status"></p>
        </form>
      </div>
    </div>
  </section>`}function y2(){const r=Pt("#contact form"),e=Pt("#form-status"),t=Pt("#submitBtn");r&&r.addEventListener("submit",async n=>{n.preventDefault(),e.className="form-status",e.textContent="",t.textContent="Sending…",t.disabled=!0;try{if(!(await fetch(r.action,{method:"POST",headers:{Accept:"application/json"},body:new FormData(r)})).ok)throw new Error("bad response");e.className="form-status ok",e.textContent="Thank you — your enquiry has been sent. We'll be in touch shortly.",r.reset()}catch{e.className="form-status err",e.textContent="Something went wrong. Please email contactus@oranjestride.com directly."}finally{t.textContent="Send Enquiry",t.disabled=!1}})}function b2(){return`
  <button class="ds-badge" id="ds-badge" aria-label="Discover DataStride">${oo.badge}</button>
  <div class="ds-overlay" id="ds-popup" role="dialog" aria-modal="true" aria-labelledby="ds-title">
    <div class="ds-card">
      <button class="ds-close" id="ds-close" aria-label="Close">✕</button>
      <div class="ds-top">
        <div class="ds-pill">${oo.pill}</div>
        <div class="ds-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#180a00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg></div>
        <div><h3 id="ds-title"><span>Data</span>Stride</h3><p>${oo.subtitle}</p></div>
      </div>
      <div class="ds-body">
        <p class="ds-desc">${oo.desc}</p>
        <div class="ds-features">
          ${oo.features.map(r=>`
            <div class="ds-feature">
              <div class="ds-feature-ico">${r.ico}</div>
              <div><h4>${r.h}</h4><p>${r.p}</p></div>
            </div>`).join("")}
        </div>
        <div class="ds-actions">
          <a href="${oo.url}" target="_blank" rel="noopener" class="btn btn-primary">Explore DataStride →</a>
          <button class="ds-dismiss" id="ds-later" type="button">Maybe Later</button>
        </div>
      </div>
    </div>
  </div>`}function S2({lenis:r}){const e=Pt("#ds-popup"),t=()=>{e.classList.add("open"),r?.stop(),document.body.style.overflow="hidden"},n=()=>{e.classList.remove("open"),r?.start(),document.body.style.overflow=""};return Pt("#ds-badge")?.addEventListener("click",t),Pt("#ds-close")?.addEventListener("click",n),Pt("#ds-later")?.addEventListener("click",n),e.addEventListener("click",i=>{i.target===e&&n()}),{close:n}}const M2=new URLSearchParams(location.search).get("motion"),Si=M2==="reduce";Si||document.body.classList.add("motion-full");const T2=document.getElementById("app");T2.innerHTML=`
  ${XA()}
  ${qA()}
  ${QA()}
  <main>
    ${n2()}
    ${i2()}
    ${OA()}
    ${r2()}
    ${s2()}
    ${o2()}
    ${l2()}
    ${h2()}
    ${BA()}
    ${f2()}
    ${m2()}
    ${x2()}
  </main>
  ${YA()}
  ${g2()}
  ${b2()}
`;tn.registerPlugin(Qe);let cr=null;Si||(cr=new $x({duration:1.15,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r))}),cr.on("scroll",Qe.update),tn.ticker.add(r=>cr.raf(r*1e3)),tn.ticker.lagSmoothing(0));jt('a[href^="#"]').forEach(r=>r.addEventListener("click",e=>{const t=r.getAttribute("href");if(t.length<2)return;const n=Pt(t);n&&(e.preventDefault(),j_(),cr?cr.scrollTo(n,{duration:1.3}):n.scrollIntoView({behavior:Si?"auto":"smooth"}))}));window.OS3D=Xw({reduced:Si});const E2=matchMedia("(max-width: 900px)").matches;let ba=null,sl=null;window.__marutReady=(async()=>Si||!window.OS3D.enabled?(LA(),!1):(ba=await xA()||pA({quality:E2?"low":"high"}),window.OS3D.three.registerMascot(ba),document.body.classList.add("has-marut"),sl=AA({sceneAPI:window.OS3D,marut:ba,reduced:Si}),sl?.prepareIntro(),c2(ba),VA({reduced:Si}),!0))();HA({reduced:Si});const{revealHero:w2}=zA(),Z_=jt("main .section, main .band");e2({lenis:cr,sections:Z_});d2();_2({lenis:cr});y2();S2({lenis:cr});$A();IA({reduced:Si});const A2=WA({reduced:Si});(function(){const e=document.getElementById("perf-toggle");if(!e)return;let t=!1;try{t=localStorage.getItem("os-lite")==="1"}catch{}const n=i=>{document.body.classList.toggle("perf-lite",i),e.classList.toggle("on",i),e.setAttribute("aria-pressed",String(i)),i&&window.OS3D?.setTier("min")};n(t),e.addEventListener("click",()=>{t=!t;try{localStorage.setItem("os-lite",t?"1":"0")}catch{}t?n(!0):location.reload()})})();const l0=document.documentElement;let c0=null;function C2(){l0.style.setProperty("--vid-blur","6px"),clearTimeout(c0),c0=setTimeout(()=>l0.style.setProperty("--vid-blur","2.5px"),260)}const R2=new IntersectionObserver(r=>{r.forEach(e=>{e.intersectionRatio<.5||(t2(e.target.id),window.OS3D?.setActive(e.target.id),window.OS3D?.pulse(),sl?.applySection(e.target.id),A2?.swell(),C2())})},{threshold:[.5]});Z_.forEach(r=>R2.observe(r));addEventListener("click",r=>{r.target.closest?.("#programmes .tab, #cg-tabs button")&&setTimeout(()=>sl?.refresh(),350)});(function(){let e=scrollY,t=0;(function n(){const i=scrollY;t=t*.85+(i-e)*6e-4,e=i,window.OS3D?.setScrollVelocity(t),requestAnimationFrame(n)})()})();addEventListener("keydown",r=>{r.key==="Escape"&&(["#clients-modal","#ds-popup"].forEach(e=>{const t=Pt(e);t?.classList.contains("open")&&(t.classList.remove("open"),cr?.start(),document.body.style.overflow="")}),j_())});JA({reduced:Si,onDone(r){w2(),GA({showcase:sl,marut:ba,mode:r,reduced:Si})}});export{Fm as $,zt as A,yi as B,Ye as C,sc as D,L2 as E,O2 as F,H2 as G,D2 as H,I2 as I,M_ as J,N2 as K,ul as L,Xo as M,Ou as N,kt as O,k2 as P,Vi as Q,Vc as R,pE as S,F2 as T,ME as U,ne as V,ti as W,In as X,Zc as Y,Gd as Z,S_ as _,Vn as a,vE as a0,Hc as a1,Gc as a2,Jc as a3,Mn as a4,nu as a5,tu as a6,cl as a7,xt as a8,zr as a9,mu as aa,Gi as ab,fr as ac,By as ad,Ap as ae,ke as b,el as c,z2 as d,U2 as e,dr as f,Wt as g,B2 as h,Ke as i,I as j,Sm as k,V2 as l,rn as m,mE as n,Ka as o,Ey as p,tp as q,hi as r,hn as s,Kh as t,Ci as u,T_ as v,Wr as w,SE as x,Ui as y,vt as z};
