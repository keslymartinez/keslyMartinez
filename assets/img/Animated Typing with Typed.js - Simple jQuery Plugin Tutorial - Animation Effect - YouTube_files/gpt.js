(function(){var window=this;var f=this,l=function(a){return"string"==typeof a},n=function(){},r=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var aa=function(a,b){for(var c=a.length,e=l(a)?a.split(""):a,d=0;d<c;d++)d in e&&b.call(void 0,e[d],d,a)},ba=function(a){return Array.prototype.concat.apply([],arguments)};var x=function(){this.a="";this.b=w};x.prototype.s=!0;x.prototype.j=function(){return this.a};var y=function(a){return a instanceof x&&a.constructor===x&&a.b===w?a.a:"type_error:TrustedResourceUrl"},w={};var z=function(){this.l="";this.A=ca};z.prototype.s=!0;z.prototype.j=function(){return this.l};var da=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ca={},ea=function(a){var b=new z;b.l=a;return b};ea("about:blank");var A;a:{var fa=f.navigator;if(fa){var ha=fa.userAgent;if(ha){A=ha;break a}}A=""};var ia=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}},ja=function(){var a=n;return function(){if(a){var b=a;a=null;b()}}};var la=function(a){ka();var b=new x;b.a=a;return b},ka=n;var B=function(a){B[" "](a);return a};B[" "]=n;var ma=/^[\w+/_-]+[=]{0,2}$/;var na=function(){if(!f.crypto)return Math.random();try{var a=new Uint32Array(1);f.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},oa=ia(function(){return-1!=A.indexOf("Google Web Preview")||1E-4>Math.random()}),pa=function(){try{a:{var a=f.document.querySelector("script[nonce]");if(a){var b=a.nonce||a.getAttribute("nonce");if(b&&ma.test(b)){var c=b;break a}}c=void 0}return c}catch(e){}},qa=function(a,b){try{return!(!a.frames||!a.frames[b])}catch(c){return!1}};var C=function(){return f.googletag||(f.googletag={})};var D={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,27:.01,29:.01,33:"pagead2.googlesyndication.com",37:.01,38:.001,47:0,53:"",58:1,65:.01,66:1E-5,67:0,68:0,69:1,71:.05,162:0,163:"",76:"",77:.001,78:0,81:.001,83:0,85:0,89:1,90:0,91:0,96:1,99:.01,103:.01,104:"/pagead/js/rum.js",105:0,106:"1-0-17",107:"1-0-17",113:1,114:1,115:0,116:0,117:1,118:1,120:1,124:1,208:.05,169:0,207:.01,125:0,127:0,129:.05,131:"",156:0,133:0,134:.01,135:.1,137:.001,167:1,138:"",143:.005,168:1E-4,144:.001,187:.01,141:1,157:.95,158:.001,150:".google.cl",153:.95,179:.01,170:!1,211:!1,183:0,196:.001,197:.001,152:[],171:.01,172:null,175:"21061661,21061662,21061663,21061664,21061665,21061666,21061667,21061668,22316437,22316438",178:.05,182:1E3,188:0,189:.01,191:1512514930353,192:21510956201635,190:0xa781a7496a3,194:.95,199:0,180:null,209:[],210:{},195:.5,198:1,200:.05,201:0,202:"",203:.01,206:0,216:0,213:.95,214:.01,215:0,217:0};D[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(e){}return!0}(window);D[49]=(new Date).getTime();D[36]=/^true$/.test("false");D[46]=/^true$/.test("false");D[148]=/^true$/.test("false");var E;a:{if(/^(-?[0-9.]{1,30})$/.test("{{MOD}}")){var ra=Number("{{MOD}}");if(!isNaN(ra)){E=ra;break a}}E=-1}D[204]=E;D[205]=.01;var F=function(){var a={},b;for(b in D)a[b]=D[b];this.a=a};F.prototype.get=function(a){return this.a[a]};F.prototype.set=function(a,b){this.a[a]=b};F.b=void 0;F.a=function(){return F.b?F.b:F.b=new F};var sa="21060621 21060622 21060833 21060713 21061773 21061774".split(" "),ta=["21061212","21061213","21061214","21061277"],ua=F.a().a,va=C(),wa=va._vars_,G;for(G in wa)ua[G]=wa[G];va._vars_=ua;var xa=function(){return"188"},ya=C();ya.hasOwnProperty("getVersion")||(ya.getVersion=xa);var H=function(a){this.a=a||f.document||document};H.prototype.createElement=function(a){return this.a.createElement(String(a))};H.prototype.appendChild=function(a,b){a.appendChild(b)};var za=function(a,b){a.addEventListener?a.addEventListener("message",b,void 0):a.attachEvent&&a.attachEvent("onmessage",b)};var Ba=function(){var a=f;this.b=a=void 0===a?f:a;this.B="https://securepubads.g.doubleclick.net/static/3p_cookie.html";this.a=2;this.g=[];this.o=!1;a:{var b=[f.top];a=[];for(var c=0,e;e=b[c++];){a.push(e);try{if(e.frames)for(var d=e.frames.length,h=0;h<d&&50>b.length;++h)b.push(e.frames[h])}catch(u){}}b:{try{var g=f.parent;if(g&&g!=f){var k=g;break b}}catch(u){}k=null}(d=k)&&a.unshift(d);a.unshift(f);var m;for(d=0;d<a.length;++d)try{var p=a[d],v=I(p);if(v){this.a=Aa(v);if(2!=this.a)break a;var q;if(q=!m){k=void 0;try{if(k=!!p&&null!=p.location.href)c:{try{B(p.foo);k=!0;break c}catch(u){}k=!1}q=k}catch(u){q=!1}}q&&(m=p)}}catch(u){}this.b=m||this.b}},J=function(a){if(2!=Ca(a)){for(var b=1==Ca(a),c=0;c<a.g.length;c++)try{a.g[c](b)}catch(e){}a.g=[]}},Da=function(a){var b=I(a.b);b&&2==a.a&&(a.a=Aa(b))},Ca=function(a){Da(a);return a.a},Ea=function(a){var b=K;b.g.push(a);if(2!=b.a)J(b);else if(b.o||(za(b.b,function(a){var c=I(b.b);if(c&&a.source==c&&2==b.a){switch(a.data){case "3p_cookie_yes":b.a=1;break;case "3p_cookie_no":b.a=0}J(b)}}),b.o=!0),I(b.b))J(b);else{a=(new H(b.b.document)).createElement("IFRAME");a.src=b.B;a.name="detect_3p_cookie";a.style.visibility="hidden";a.style.display="none";a.onload=function(){Da(b);J(b)};try{b.b.document.body.appendChild(a)}catch(c){}}},I=function(a){return a.frames&&a.frames[B("detect_3p_cookie")]||null},Aa=function(a){return qa(a,"3p_cookie_yes")?1:qa(a,"3p_cookie_no")?0:2};var Fa=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var L=null;var Ga=ia(function(){var a=f.navigator&&f.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),M=function(a,b,c){var e="script";e=void 0===e?"":e;var d=a.createElement("link");d.rel="preload";b instanceof x?b=y(b):b instanceof z?b=b instanceof z&&b.constructor===z&&b.A===ca?b.l:"type_error:SafeUrl":(b instanceof z||(b=b.s?b.j():String(b),da.test(b)||(b="about:invalid#zClosurez"),b=ea(b)),b=b.j());d.href=b;e&&(d.as=e);c&&(d.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(d)}catch(h){}};var Ha=/^\.google\.(com?\.)?[a-z]{2,3}$/,Ia=/\.(cn|com\.bi|do|sl|ba|by|ma)$/,N=function(a){return Ha.test(a)&&!Ia.test(a)},Ja=function(a){return a.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"})},O=f,K,Ka=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(f.location.hostname)];P[3]>=+new Date&&b.push("adsid="+encodeURIComponent(P[1]));return a+"?"+b.join("&")},P,Q,R=function(){O=f;P=O.googleToken=O.googleToken||{};var a=+new Date;P[1]&&P[3]>a&&0<P[2]||(P[1]="",P[2]=-1,P[3]=-1,P[4]="",P[6]="");Q=O.googleIMState=O.googleIMState||{};N(Q[1])||(Q[1]=".google.com");"array"==r(Q[5])||(Q[5]=[]);"boolean"==typeof Q[6]||(Q[6]=!1);"array"==r(Q[7])||(Q[7]=[]);"number"==typeof Q[8]||(Q[8]=0)},La=function(a){try{a()}catch(b){f.setTimeout(function(){throw b;},0)}},Na=function(a){"complete"==f.document.readyState||"loaded"==f.document.readyState||f.document.currentScript&&f.document.currentScript.async?Ma(3):a()},Oa=0,S={f:function(){return 0<Q[8]},m:function(){Q[8]++},u:function(){0<Q[8]&&Q[8]--},v:function(){Q[8]=0},c:function(){},w:function(){return!1},i:function(){return Q[5]},h:La},T={f:function(){return Q[6]},m:function(){Q[6]=!0},u:function(){Q[6]=!1},v:function(){Q[6]=!1},c:function(){},w:function(){return".google.com"!=Q[1]&&2<++Oa},i:function(){return Q[7]},h:function(a){Na(function(){La(a)})}},Ma=function(a){if(1E-5>Math.random()){f.google_image_requests||(f.google_image_requests=[]);var b=f.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;f.google_image_requests.push(b)}};S.c=function(){if(!S.f()){var a=f.document,b=function(b){var c=Ka("js",b),d=pa();M(a,c,d);b=a.createElement("script");b.type="text/javascript";d&&(b.nonce=d);b.onerror=function(){return f.processGoogleToken({},2)};c=la(c);b.src=y(c);try{(a.head||a.body||a.documentElement).appendChild(b),S.m()}catch(k){}},c=Q[1];b(c);".google.com"!=c&&b(".google.com");b={};var e=(b.newToken="FBT",b);f.setTimeout(function(){return f.processGoogleToken(e,1)},1E3)}};T.c=function(){if(!T.f()){var a=f.document,b=Ka("sync.js",Q[1]);M(a,b);b=Ja(b);var c=B("script"),e="",d=pa();d&&(e='nonce="'+Ja(d)+'"');var h="<"+c+' src="'+b+'" '+e+"></"+c+">"+("<"+c+" "+e+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Na(function(){a.write(h);T.m()})}};var Pa=function(a,b){R();var c=O.googleToken[5]||0;a&&(0!=c||P[3]>=+new Date?b.h(a):(b.i().push(a),b.c()));P[3]>=+new Date&&P[2]>=+new Date||b.c()},Ra=function(a){f.processGoogleToken=f.processGoogleToken||function(a,c){return Qa(S,a,c)};Pa(a,S)},Sa=function(a){f.processGoogleTokenSync=f.processGoogleTokenSync||function(a,c){return Qa(T,a,c)};Pa(a,T)},Ta=function(a){K=K||new Ba;Ea(function(b){b&&a()})},Qa=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var e=b.newToken||"",d="NT"==e,h=parseInt(b.freshLifetimeSecs||"",10),g=parseInt(b.validLifetimeSecs||"",10);d&&!g&&(g=3600);var k=b["1p_jar"]||"";b=b.pucrd||"";R();1==c?a.v():a.u();if(!e&&a.w())N(".google.com")&&(Q[1]=".google.com"),a.c();else{var m=O.googleToken=O.googleToken||{},p=0==c&&e&&l(e)&&!d&&"number"==typeof h&&0<h&&"number"==typeof g&&0<g&&l(k);d=d&&!a.f()&&(!(P[3]>=+new Date)||"NT"==P[1]);var v=!(P[3]>=+new Date)&&0!=c;if(p||d||v)d=+new Date,h=d+1E3*h,g=d+1E3*g,Ma(c),m[5]=c,m[1]=e,m[2]=h,m[3]=g,m[4]=k,m[6]=b,R();if(p||!a.f()){c=a.i();for(e=0;e<c.length;e++)a.h(c[e]);c.length=0}}};var Ua=function(){this.a=null},Va=function(a,b){a.a=b};Ua.prototype.b=function(a,b,c,e,d){if(Math.random()>(void 0===c?.01:c))return!1;b.error&&b.meta&&b.id||(b=new Fa(b,{context:a,id:void 0===d?"gpt_exception":d}));if(e||this.a)b.meta={},this.a&&this.a(b.meta),e&&e(b.meta);f.google_js_errors=f.google_js_errors||[];f.google_js_errors.push(b);f.error_rep_loaded||(b=f.document,a=b.createElement("script"),c=la(f.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js"),a.src=y(c),(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(a,b),f.error_rep_loaded=!0);return!1};var Wa=function(a,b){var c=void 0===c?a.b:c;try{b()}catch(e){if(!c.call(a,420,e,.01,void 0,"gpt_exception"))throw e;}};var Xa=function(a){if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(b){var c=a.google_lt_queue=a.google_lt_queue||[];aa(b.getEntries(),function(a){return c.push(a)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};var Ya=[[[2,null,null,[]]]];var Za={3:[[10,[[21060132],[21060133,[[2,null,null,[1]]]]]],[10,[[21061712],[21061713]]]]};B("partner.googleadservices.com");var U=B("www.googletagservices.com"),V=!1,W=!1,X="",Y="",$a=F.a().get(46)&&!F.a().get(6);X=$a?"http:":"https:";Y=F.a().get($a?2:3);var ab=function(a){if(a=a.scripts)for(var b=0;b<a.length;b++){var c=a[b];if(-1<c.src.indexOf(U+"/tag/js/gpt"))return c}return null},Z=function(a,b){if(null===L){L="";try{var c="";try{c=f.top.location.hash}catch(d){c=f.location.hash}if(c){var e=c.match(/\bdeid=([\d,]+)/);L=e?e[1]:""}}catch(d){}}if(c=(c=L)&&c.match(new RegExp("\\b("+a.join("|")+")\\b")))a=c[0];else if(b)a:{b=a.length*b;if(!oa()&&(c=Math.random(),c<b)){c=na();a=a[Math.floor(c*a.length)];break a}a=null}else a=null;return a};(function(a){var b=new Ua;Va(b,function(a){a.methodId=420});Wa(b,function(){var b=a,e=C(),d=e.fifWin||window;b=b||d.document;var h=[],g=C();g.hasOwnProperty("cmd")||(g.cmd=h);if(e.evalScripts)e.evalScripts();else{h=F.a();(g=Z(ta,h.get(178)))&&h.get(152).push(g);switch(g){case "21061213":W=!0;break;case "21061214":V=!0;break;case "21061277":V=W=!0}h=F.a().get(138)||Z(sa,F.a().get(137))||Z(["21061149"],F.a().get(167));g=b;var k=Z(["21061590","21061591"],.001),m=F.a();m.set(209,Ya);m.set(210,Za);k&&("21061591"==k?(m.set(173,U),m.set(174,U)):m.set(163,k),m.get(152).push(k));-1!=A.indexOf("Mobile")||F.a().set(194,0);if(k=m.get(150))R(),N(k)&&(Q[1]=k);h&&m.set(138,h);m.set(172,g.currentScript||ab(g));d.PerformanceObserver&&d.PerformanceLongTaskTiming&&Xa(d);g=d;g=void 0===g?f:g;if(g=(g=g.performance)&&g.now?g.now():null)g={label:"1",type:9,value:g},d=d.google_js_reporting_queue=d.google_js_reporting_queue||[],1024>d.length&&d.push(g);d=F.a();if(g=d.get(76))var p=g;else{k=["187","188"];g=k[0]||"188";m="";if(d.get(131))p="188";else if(1<k.length){var v=["21061779","21061780"],q=[""];if(1>=q.length||v.length!=q.length)q=[];var u=Z(ba(v,q),.1);if(u){d.set(53,u);b:if(l(q))var t=l(u)&&1==u.length?q.indexOf(u,0):-1;else{for(t=0;t<q.length;t++)if(t in q&&q[t]===u)break b;t=-1}t=0<=t;d.set(170,t);t&&(v=q);q=v[0];if(u!=q)for(t=1;t<v.length;++t)if(u==v[t]){p=k[t];break}if(u==q||parseInt(p,10)<parseInt(g,10))k=k[v.length-1],m="?v="+k,d.set(163,k)}}g=X+"//"+Y+"/gpt/pubads_impl_"+(p||g)+".js"+m;F.a().set(76,g);p=g}d=b.currentScript;if(!("complete"==b.readyState||"loaded"==b.readyState||d&&d.async)){d="gpt-impl-"+Math.random();try{g='<script id="'+d+'" src="'+p+'">\x3c/script>',V&&Ga()&&(g+='<link rel="preconnect" href="'+X+"//"+Y+'">'),b.write(g)}catch(bb){}if(b.getElementById(d))switch(e._loadStarted_=!0,h){case "21060833":d=ja();Ta(d);Sa(d);break;case "21060622":case "21060713":case "21061773":case "21061149":Sa(null)}}if(!e._loadStarted_){switch(h){case "21060833":h=ja();Ta(h);Ra(h);break;case "21060622":case "21060713":case "21061773":case "21061149":Ra(null)}W&&M(b,p);h=b.createElement("script");h.src=p;h.async=!0;p=b.head||b.body||b.documentElement;p.appendChild(h);V&&Ga()&&(b=b.createElement("link"),b.rel="preconnect",b.href=X+"//"+Y,p.appendChild(b));e._loadStarted_=!0}}})})();}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
