function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function c(e,t,n,s,r,o,a){const c=function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(t,s,r,o);if(c){const r=i(t,n,s,a);e.p(r,c)}}function l(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function u(e){return null==e?"":e}let h=!1;const f=new Set;function d(e,t){h&&f.delete(t),t.parentNode!==e&&e.appendChild(t)}function p(e,t,n){h&&f.delete(t),(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function m(e){h?f.add(e):e.parentNode&&e.parentNode.removeChild(e)}function g(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function v(e){return document.createTextNode(e)}function $(){return v(" ")}function y(){return v("")}function E(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function _(e){return function(t){return t.preventDefault(),e.call(this,t)}}function k(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function S(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:k(e,s,t[s])}function x(e){return Array.from(e.childNodes)}function T(e,t,n,s){for(;e.length>0;){const s=e.shift();if(s.nodeName===t){let e=0;const t=[];for(;e<s.attributes.length;){const r=s.attributes[e++];n[r.name]||t.push(r.name)}for(let e=0;e<t.length;e++)s.removeAttribute(t[e]);return s}m(s)}return s?w(t):b(t)}function A(e,t){for(let n=0;n<e.length;n+=1){const s=e[n];if(3===s.nodeType)return s.data=""+t,e.shift()}return v(t)}function N(e){return A(e," ")}function P(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function I(e,t){e.value=null==t?"":t}let L,R;function C(){if(void 0===L){L=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){L=!0}}return L}function O(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=b("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=C();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=E(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=E(n.contentWindow,"resize",t)}),d(e,n),()=>{(s||r&&n.contentWindow)&&r(),m(n)}}function H(e,t=document.body){return Array.from(t.querySelectorAll(e))}class U{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=b(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)p(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(m)}}function j(e){R=e}function D(){if(!R)throw new Error("Function called outside component initialization");return R}function M(e){D().$$.on_mount.push(e)}function G(e){D().$$.after_update.push(e)}function q(e){D().$$.on_destroy.push(e)}const B=[],z=[],K=[],J=[],V=Promise.resolve();let W=!1;function F(e){K.push(e)}let Y=!1;const Q=new Set;function X(){if(!Y){Y=!0;do{for(let e=0;e<B.length;e+=1){const t=B[e];j(t),Z(t.$$)}for(j(null),B.length=0;z.length;)z.pop()();for(let e=0;e<K.length;e+=1){const t=K[e];Q.has(t)||(Q.add(t),t())}K.length=0}while(B.length);for(;J.length;)J.pop()();W=!1,Y=!1,Q.clear()}}function Z(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}const ee=new Set;let te;function ne(){te={r:0,c:[],p:te}}function se(){te.r||r(te.c),te=te.p}function re(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function oe(e,t,n,s){if(e&&e.o){if(ee.has(e))return;ee.add(e),te.c.push((()=>{ee.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function ae(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(s[e]=1);for(const e in i)r[e]||(n[e]=i[e],r[e]=1);e[o]=i}else for(const e in a)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function ie(e){return"object"==typeof e&&null!==e?e:{}}function ce(e){e&&e.c()}function le(e,t){e&&e.l(t)}function ue(e,t,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=e.$$;i&&i.m(t,s),a||F((()=>{const t=c.map(n).filter(o);l?l.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(F)}function he(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(e,t){-1===e.$$.dirty[0]&&(B.push(e),W||(W=!0,V.then(X)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function de(t,n,o,a,i,c,l=[-1]){const u=R;j(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:l,skip_bound:!1};let p=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),p&&fe(t,e)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){h=!0;const e=x(n.target);d.fragment&&d.fragment.l(e),e.forEach(m)}else d.fragment&&d.fragment.c();n.intro&&re(t.$$.fragment),ue(t,n.target,n.anchor,n.customElement),function(){h=!1;for(const e of f)e.parentNode.removeChild(e);f.clear()}(),X()}j(u)}class pe{$destroy(){he(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const me=[];function ge(t,n=e){let s;const r=[];function o(e){if(a(t,e)&&(t=e,s)){const e=!me.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),me.push(n,t)}if(e){for(let e=0;e<me.length;e+=2)me[e][0](me[e+1]);me.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const c=[a,i];return r.push(c),1===r.length&&(s=n(o)||e),a(t),()=>{const e=r.indexOf(c);-1!==e&&r.splice(e,1),0===r.length&&(s(),s=null)}}}}const be={};var we={owner:"kescherCode",repo:"status",sites:[{name:"kescher.at",url:"https://www.kescher.at",icon:"https://www.kescher.at/favicon-194x194.png",assignees:["kescherCode"]},{name:"kescherCloud",url:"https://cloud.kescher.at/status.php",icon:"https://cloud.kescher.at/apps/theming/favicon",assignees:["kescherCode"]},{name:"kescherGit",url:"https://git.kescher.at/api/v1/version",icon:"https://git.kescher.at/img/gitea-lg.png",assignees:["kescherCode"]},{name:"Magnetico",url:"https://magnetico.kescher.at/api/v0.1/torrents/",expectedStatusCodes:[404],assignees:["kescherCode"]},{name:"Doggos backend - Woods Cross",url:"https://doggos.kescher.at/wc-lazy-lounge.mjpg",icon:"https://www.kescher.at/favicon-194x194.png",method:"HEAD",assignees:["kescherCode"]},{name:"Doggos frontend",url:"https://doggos.kescher.at",icon:"https://www.kescher.at/favicon-194x194.png",assignees:["kescherCode"]},{name:"Doggos BETA frontend",url:"https://beta.doggos.kescher.at",icon:"https://www.kescher.at/favicon-194x194.png",assignees:["kescherCode"]},{name:"Doggos backend - Salt Lake",url:"https://doggos.kescher.at/sl-small-dog-patio.mjpg",icon:"https://www.kescher.at/favicon-194x194.png",method:"HEAD",assignees:["kescherCode"]},{name:"Matrix",url:"https://matrix.kescher.at",icon:"https://www.kescher.at/favicon-194x194.png",assignees:["kescherCode"]},{name:"arch4edu mirror",url:"https://arch4edu.mirror.kescher.at/lastupdate",assignees:["kescherCode"]},{name:"Monero node",url:"unova.kescher.at",port:18081,check:"tcp-ping",assignees:["kescherCode"]}],"status-website":{cname:"status.kescher.at",logoUrl:"https://www.kescher.at/android-chrome-192x192.png",name:"Status - kescher.at",introTitle:"Status page for **[kescher.at](https://www.kescher.at)** and related services",introMessage:"This status page is powered by [Upptime](https://github.com/upptime/upptime).",navbar:[{title:"Status",href:"/"},{title:"kescher.at",href:"https://www.kescher.at"},{title:"Telegram",href:"https://t.me/kescherStatus"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},"user-agent":"okaymate",path:"https://status.kescher.at",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function ve(e,t,n){const s=e.slice();return s[1]=t[n],s}function $e(t){let n,s,r,o=we["status-website"]&&!we["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=b("img"),this.h()},l(e){n=T(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){k(n,"alt",""),n.src!==(s=we["status-website"].logoUrl)&&k(n,"src",s),k(n,"class","svelte-a08hsz")},m(e,t){p(e,n,t)},p:e,d(e){e&&m(n)}}}(),a=we["status-website"]&&!we["status-website"].hideNavTitle&&function(t){let n,s,r=we["status-website"].name+"";return{c(){n=b("div"),s=v(r)},l(e){n=T(e,"DIV",{});var t=x(n);s=A(t,r),t.forEach(m)},m(e,t){p(e,n,t),d(n,s)},p:e,d(e){e&&m(n)}}}();return{c(){n=b("div"),s=b("a"),o&&o.c(),r=$(),a&&a.c(),this.h()},l(e){n=T(e,"DIV",{});var t=x(n);s=T(t,"A",{href:!0,class:!0});var i=x(s);o&&o.l(i),r=N(i),a&&a.l(i),i.forEach(m),t.forEach(m),this.h()},h(){k(s,"href",we["status-website"].logoHref||we.path),k(s,"class","logo svelte-a08hsz")},m(e,t){p(e,n,t),d(n,s),o&&o.m(s,null),d(s,r),a&&a.m(s,null)},p(e,t){we["status-website"]&&!we["status-website"].hideNavLogo&&o.p(e,t),we["status-website"]&&!we["status-website"].hideNavTitle&&a.p(e,t)},d(e){e&&m(n),o&&o.d(),a&&a.d()}}}function ye(e){let t,n,s,r,o,a=e[1].title+"";return{c(){t=b("li"),n=b("a"),s=v(a),o=$(),this.h()},l(e){t=T(e,"LI",{});var r=x(t);n=T(r,"A",{"aria-current":!0,href:!0,class:!0});var i=x(n);s=A(i,a),i.forEach(m),o=N(r),r.forEach(m),this.h()},h(){k(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),k(n,"href",e[1].href.replace("$OWNER",we.owner).replace("$REPO",we.repo)),k(n,"class","svelte-a08hsz")},m(e,r){p(e,t,r),d(t,n),d(n,s),d(t,o)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&k(n,"aria-current",r)},d(e){e&&m(t)}}}function Ee(t){let n,s,r,o,a,i=we["status-website"]&&we["status-website"].logoUrl&&$e(),c=we["status-website"]&&we["status-website"].navbar&&function(e){let t,n=we["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=ye(ve(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=y()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=y()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);p(e,t,n)},p(e,r){if(1&r){let o;for(n=we["status-website"].navbar,o=0;o<n.length;o+=1){const a=ve(e,n,o);s[o]?s[o].p(a,r):(s[o]=ye(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){g(s,e),e&&m(t)}}}(t),l=we["status-website"]&&we["status-website"].navbarGitHub&&!we["status-website"].navbar&&function(t){let n,s,r,o=we.i18n.navGitHub+"";return{c(){n=b("li"),s=b("a"),r=v(o),this.h()},l(e){n=T(e,"LI",{});var t=x(n);s=T(t,"A",{href:!0,class:!0});var a=x(s);r=A(a,o),a.forEach(m),t.forEach(m),this.h()},h(){k(s,"href",`https://github.com/${we.owner}/${we.repo}`),k(s,"class","svelte-a08hsz")},m(e,t){p(e,n,t),d(n,s),d(s,r)},p:e,d(e){e&&m(n)}}}();return{c(){n=b("nav"),s=b("div"),i&&i.c(),r=$(),o=b("ul"),c&&c.c(),a=$(),l&&l.c(),this.h()},l(e){n=T(e,"NAV",{class:!0});var t=x(n);s=T(t,"DIV",{class:!0});var u=x(s);i&&i.l(u),r=N(u),o=T(u,"UL",{class:!0});var h=x(o);c&&c.l(h),a=N(h),l&&l.l(h),h.forEach(m),u.forEach(m),t.forEach(m),this.h()},h(){k(o,"class","svelte-a08hsz"),k(s,"class","container svelte-a08hsz"),k(n,"class","svelte-a08hsz")},m(e,t){p(e,n,t),d(n,s),i&&i.m(s,null),d(s,r),d(s,o),c&&c.m(o,null),d(o,a),l&&l.m(o,null)},p(e,[t]){we["status-website"]&&we["status-website"].logoUrl&&i.p(e,t),we["status-website"]&&we["status-website"].navbar&&c.p(e,t),we["status-website"]&&we["status-website"].navbarGitHub&&!we["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&m(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function _e(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class ke extends pe{constructor(e){super(),de(this,e,_e,Ee,a,{segment:0})}}var Se={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function xe(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Te(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ae(e,t){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},h=0;function f(e){var t=Se[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function d(){for(var e="";c.length;)e+=f(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(e);)s=e.substring(h,r.index),h=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+xe(Te(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Ae(xe(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Te(r[8])+'" alt="'+Te(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Te(r[11]||u[s.toLowerCase()])+'">'),n=d()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Ae(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Te(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+e.substring(h)+d()).replace(/^\n+|\n+$/g,"")}function Ne(e,t,n){const s=e.slice();return s[3]=t[n],s}function Pe(e,t,n){const s=e.slice();return s[3]=t[n],s}function Ie(e,t,n){const s=e.slice();return s[8]=t[n],s}function Le(t){let n;return{c(){n=b("link"),this.h()},l(e){n=T(e,"LINK",{rel:!0,href:!0}),this.h()},h(){k(n,"rel","stylesheet"),k(n,"href",`${we.path}/themes/${(we["status-website"]||{}).theme||"light"}.css`)},m(e,t){p(e,n,t)},p:e,d(e){e&&m(n)}}}function Re(t){let n;return{c(){n=b("link"),this.h()},l(e){n=T(e,"LINK",{rel:!0,href:!0}),this.h()},h(){k(n,"rel","stylesheet"),k(n,"href",(we["status-website"]||{}).themeUrl)},m(e,t){p(e,n,t)},p:e,d(e){e&&m(n)}}}function Ce(t){let n,s;return{c(){n=b("script"),this.h()},l(e){n=T(e,"SCRIPT",{src:!0,async:!0,defer:!0}),x(n).forEach(m),this.h()},h(){n.src!==(s=t[8].src)&&k(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){p(e,n,t)},p:e,d(e){e&&m(n)}}}function Oe(t){let n;return{c(){n=b("link"),this.h()},l(e){n=T(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){k(n,"rel",t[3].rel),k(n,"href",t[3].href),k(n,"media",t[3].media)},m(e,t){p(e,n,t)},p:e,d(e){e&&m(n)}}}function He(t){let n;return{c(){n=b("meta"),this.h()},l(e){n=T(e,"META",{name:!0,content:!0}),this.h()},h(){k(n,"name",t[3].name),k(n,"content",t[3].content)},m(e,t){p(e,n,t)},p:e,d(e){e&&m(n)}}}function Ue(t){let n,s,r,o,a,l,u,h,f,w,v,E,_,S,A,P,I,L,R=Ae(we.i18n.footer.replace(/\$REPO/,`https://github.com/${we.owner}/${we.repo}`))+"",C=(we["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(we["status-website"]||{}).customHeadHtml+"";return{c(){s=y(),this.h()},l(e){s=y(),this.h()},h(){n=new U(s)},m(e,t){n.m(r,e,t),p(e,s,t)},p:e,d(e){e&&m(s),e&&n.d()}}}();let O=((we["status-website"]||{}).themeUrl?Re:Le)(t),j=(we["status-website"]||{}).scripts&&function(e){let t,n=(we["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ce(Ie(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=y()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=y()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);p(e,t,n)},p(e,r){if(0&r){let o;for(n=(we["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Ie(e,n,o);s[o]?s[o].p(a,r):(s[o]=Ce(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){g(s,e),e&&m(t)}}}(t),D=(we["status-website"]||{}).links&&function(e){let t,n=(we["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=Oe(Pe(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=y()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=y()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);p(e,t,n)},p(e,r){if(0&r){let o;for(n=(we["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Pe(e,n,o);s[o]?s[o].p(a,r):(s[o]=Oe(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){g(s,e),e&&m(t)}}}(t),M=(we["status-website"]||{}).metaTags&&function(e){let t,n=(we["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=He(Ne(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=y()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=y()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);p(e,t,n)},p(e,r){if(0&r){let o;for(n=(we["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Ne(e,n,o);s[o]?s[o].p(a,r):(s[o]=He(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){g(s,e),e&&m(t)}}}(t),G=we["status-website"].css&&function(t){let n,s,r=`<style>${we["status-website"].css}</style>`;return{c(){s=y(),this.h()},l(e){s=y(),this.h()},h(){n=new U(s)},m(e,t){n.m(r,e,t),p(e,s,t)},p:e,d(e){e&&m(s),e&&n.d()}}}(),q=we["status-website"].js&&function(t){let n,s,r=`<script>${we["status-website"].js}<\/script>`;return{c(){s=y(),this.h()},l(e){s=y(),this.h()},h(){n=new U(s)},m(e,t){n.m(r,e,t),p(e,s,t)},p:e,d(e){e&&m(s),e&&n.d()}}}(),B=(we["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(we["status-website"]||{}).customBodyHtml+"";return{c(){s=y(),this.h()},l(e){s=y(),this.h()},h(){n=new U(s)},m(e,t){n.m(r,e,t),p(e,s,t)},p:e,d(e){e&&m(s),e&&n.d()}}}();E=new ke({props:{segment:t[0]}});const z=t[2].default,K=function(e,t,n,s){if(e){const r=i(e,t,n,s);return e[0](r)}}(z,t,t[1],null);return{c(){C&&C.c(),n=y(),O.c(),s=b("link"),r=b("link"),o=b("link"),j&&j.c(),a=y(),D&&D.c(),l=y(),M&&M.c(),u=y(),G&&G.c(),h=y(),q&&q.c(),f=y(),w=$(),B&&B.c(),v=$(),ce(E.$$.fragment),_=$(),S=b("main"),K&&K.c(),A=$(),P=b("footer"),I=b("p"),this.h()},l(e){const t=H('[data-svelte="svelte-ri9y7q"]',document.head);C&&C.l(t),n=y(),O.l(t),s=T(t,"LINK",{rel:!0,href:!0}),r=T(t,"LINK",{rel:!0,type:!0,href:!0}),o=T(t,"LINK",{rel:!0,type:!0,href:!0}),j&&j.l(t),a=y(),D&&D.l(t),l=y(),M&&M.l(t),u=y(),G&&G.l(t),h=y(),q&&q.l(t),f=y(),t.forEach(m),w=N(e),B&&B.l(e),v=N(e),le(E.$$.fragment,e),_=N(e),S=T(e,"MAIN",{class:!0});var i=x(S);K&&K.l(i),i.forEach(m),A=N(e),P=T(e,"FOOTER",{class:!0});var c=x(P);I=T(c,"P",{}),x(I).forEach(m),c.forEach(m),this.h()},h(){k(s,"rel","stylesheet"),k(s,"href",`${we.path}/global.css`),k(r,"rel","icon"),k(r,"type","image/svg"),k(r,"href",(we["status-website"]||{}).faviconSvg||(we["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),k(o,"rel","icon"),k(o,"type","image/png"),k(o,"href",(we["status-website"]||{}).favicon||"/logo-192.png"),k(S,"class","container"),k(P,"class","svelte-jbr799")},m(e,t){C&&C.m(document.head,null),d(document.head,n),O.m(document.head,null),d(document.head,s),d(document.head,r),d(document.head,o),j&&j.m(document.head,null),d(document.head,a),D&&D.m(document.head,null),d(document.head,l),M&&M.m(document.head,null),d(document.head,u),G&&G.m(document.head,null),d(document.head,h),q&&q.m(document.head,null),d(document.head,f),p(e,w,t),B&&B.m(e,t),p(e,v,t),ue(E,e,t),p(e,_,t),p(e,S,t),K&&K.m(S,null),p(e,A,t),p(e,P,t),d(P,I),I.innerHTML=R,L=!0},p(e,[t]){(we["status-website"]||{}).customHeadHtml&&C.p(e,t),O.p(e,t),(we["status-website"]||{}).scripts&&j.p(e,t),(we["status-website"]||{}).links&&D.p(e,t),(we["status-website"]||{}).metaTags&&M.p(e,t),we["status-website"].css&&G.p(e,t),we["status-website"].js&&q.p(e,t),(we["status-website"]||{}).customBodyHtml&&B.p(e,t);const n={};1&t&&(n.segment=e[0]),E.$set(n),K&&K.p&&(!L||2&t)&&c(K,z,e,e[1],t,null,null)},i(e){L||(re(E.$$.fragment,e),re(K,e),L=!0)},o(e){oe(E.$$.fragment,e),oe(K,e),L=!1},d(e){C&&C.d(e),m(n),O.d(e),m(s),m(r),m(o),j&&j.d(e),m(a),D&&D.d(e),m(l),M&&M.d(e),m(u),G&&G.d(e),m(h),q&&q.d(e),m(f),e&&m(w),B&&B.d(e),e&&m(v),he(E,e),e&&m(_),e&&m(S),K&&K.d(e),e&&m(A),e&&m(P)}}}function je(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class De extends pe{constructor(e){super(),de(this,e,je,Ue,a,{segment:0})}}function Me(e){let t,n,s=e[1].stack+"";return{c(){t=b("pre"),n=v(s)},l(e){t=T(e,"PRE",{});var r=x(t);n=A(r,s),r.forEach(m)},m(e,s){p(e,t,s),d(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&P(n,s)},d(e){e&&m(t)}}}function Ge(t){let n,s,r,o,a,i,c,l,u,h=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&Me(t);return{c(){s=$(),r=b("h1"),o=v(t[0]),a=$(),i=b("p"),c=v(h),l=$(),f&&f.c(),u=y(),this.h()},l(e){H('[data-svelte="svelte-1moakz"]',document.head).forEach(m),s=N(e),r=T(e,"H1",{class:!0});var n=x(r);o=A(n,t[0]),n.forEach(m),a=N(e),i=T(e,"P",{class:!0});var d=x(i);c=A(d,h),d.forEach(m),l=N(e),f&&f.l(e),u=y(),this.h()},h(){k(r,"class","svelte-17w3omn"),k(i,"class","svelte-17w3omn")},m(e,t){p(e,s,t),p(e,r,t),d(r,o),p(e,a,t),p(e,i,t),d(i,c),p(e,l,t),f&&f.m(e,t),p(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&P(o,e[0]),2&t&&h!==(h=e[1].message+"")&&P(c,h),e[2]&&e[1].stack?f?f.p(e,t):(f=Me(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&m(s),e&&m(r),e&&m(a),e&&m(i),e&&m(l),f&&f.d(e),e&&m(u)}}}function qe(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class Be extends pe{constructor(e){super(),de(this,e,qe,Ge,a,{status:0,error:1})}}function ze(e){let n,s,r;const o=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&ce(n.$$.fragment),s=y()},l(e){n&&le(n.$$.fragment,e),s=y()},m(e,t){n&&ue(n,e,t),p(e,s,t),r=!0},p(e,t){const r=16&t?ae(o,[ie(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){ne();const e=n;oe(e.$$.fragment,1,0,(()=>{he(e,1)})),se()}a?(n=new a(i()),ce(n.$$.fragment),re(n.$$.fragment,1),ue(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(e){r||(n&&re(n.$$.fragment,e),r=!0)},o(e){n&&oe(n.$$.fragment,e),r=!1},d(e){e&&m(s),n&&he(n,e)}}}function Ke(e){let t,n;return t=new Be({props:{error:e[0],status:e[1]}}),{c(){ce(t.$$.fragment)},l(e){le(t.$$.fragment,e)},m(e,s){ue(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(re(t.$$.fragment,e),n=!0)},o(e){oe(t.$$.fragment,e),n=!1},d(e){he(t,e)}}}function Je(e){let t,n,s,r;const o=[Ke,ze],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=o[t](e),{c(){n.c(),s=y()},l(e){n.l(e),s=y()},m(e,n){a[t].m(e,n),p(e,s,n),r=!0},p(e,r){let c=t;t=i(e),t===c?a[t].p(e,r):(ne(),oe(a[c],1,1,(()=>{a[c]=null})),se(),n=a[t],n?n.p(e,r):(n=a[t]=o[t](e),n.c()),re(n,1),n.m(s.parentNode,s))},i(e){r||(re(n),r=!0)},o(e){oe(n),r=!1},d(e){a[t].d(e),e&&m(s)}}}function Ve(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[Je]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new De({props:o}),{c(){ce(n.$$.fragment)},l(e){le(n.$$.fragment,e)},m(e,t){ue(n,e,t),s=!0},p(e,[t]){const s=12&t?ae(r,[4&t&&{segment:e[2][0]},8&t&&ie(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(re(n.$$.fragment,e),s=!0)},o(e){oe(n.$$.fragment,e),s=!1},d(e){he(n,e)}}}function We(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:a}=t,{level0:i}=t,{level1:c=null}=t,{notify:l}=t;var u,h;return G(l),u=be,h=s,D().$$.context.set(u,h),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[r,o,a,i,c,s,l]}class Fe extends pe{constructor(e){super(),de(this,e,We,Ve,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ye=[],Qe=[{js:()=>Promise.all([import("./index.90b6ac3d.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.f0d0d037.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].f3d970b2.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].ad033b8c.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-49f387e2.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.652b1079.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],Xe=(Ze=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:Ze(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:Ze(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Ze;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function et(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))}function tt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let nt,st=1;const rt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ot={};let at,it;function ct(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function lt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(at))return null;let t=e.pathname.slice(at.length);if(""===t&&(t="/"),!Ye.some((e=>e.test(t))))for(let n=0;n<Xe.length;n+=1){const s=Xe[n],r=s.pattern.exec(t);if(r){const n=ct(e.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:s,match:r,page:i}}}}function ut(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=tt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=lt(r);if(o){dt(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),rt.pushState({id:nt},"",r.href)}}function ht(){return{x:pageXOffset,y:pageYOffset}}function ft(e){if(ot[nt]=ht(),e.state){const t=lt(new URL(location.href));t?dt(t,e.state.id):location.href=location.href}else!function(e){st=e}(st+1),function(e){nt=e}(st),rt.replaceState({id:nt},"",location.href)}function dt(e,t,n,s){return et(this,void 0,void 0,(function*(){const r=!!t;if(r)nt=t;else{const e=ht();ot[nt]=e,nt=t=++st,ot[nt]=n?e:{x:0,y:0}}if(yield it(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ot[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ot[nt]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function pt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let mt,gt=null;function bt(e){const t=tt(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=lt(new URL(e,pt(document)));if(t)gt&&e===gt.href||(gt={href:e,promise:Ct(t)}),gt.promise}(t.href)}function wt(e){clearTimeout(mt),mt=setTimeout((()=>{bt(e)}),20)}function vt(e,t={noscroll:!1,replaceState:!1}){const n=lt(new URL(e,pt(document)));if(n){const s=dt(n,null,t.noscroll);return rt[t.replaceState?"replaceState":"pushState"]({id:nt},"",e),s}return location.href=e,new Promise((()=>{}))}const $t="undefined"!=typeof __SAPPER__&&__SAPPER__;let yt,Et,_t,kt=!1,St=[],xt="{}";const Tt={page:function(e){const t=ge(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:ge(null),session:ge($t&&$t.session)};let At,Nt,Pt;function It(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Lt(e){return et(this,void 0,void 0,(function*(){yt&&Tt.preloading.set(!0);const t=function(e){return gt&&gt.href===e.href?gt.promise:Ct(e)}(e),n=Et={},s=yield t,{redirect:r}=s;if(n===Et)if(r)yield vt(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Rt(n,t,It(t,e.page))}}))}function Rt(e,t,n){return et(this,void 0,void 0,(function*(){Tt.page.set(n),Tt.preloading.set(!1),yt?yt.$set(t):(t.stores={page:{subscribe:Tt.page.subscribe},preloading:{subscribe:Tt.preloading.subscribe},session:Tt.session},t.level0={props:yield _t},t.notify=Tt.page.notify,yt=new Fe({target:Pt,props:t,hydrate:!0})),St=e,xt=JSON.stringify(n.query),kt=!0,Nt=!1}))}function Ct(e){return et(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!_t){const e=()=>({});_t=$t.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},At)}let i,c=1;try{const r=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>et(this,void 0,void 0,(function*(){const h=s[i];if(function(e,t,n,s){if(s!==xt)return!0;const r=St[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,h,l,r)&&(u=!0),o.segments[c]=s[i+1],!t)return{segment:h};const f=c++;let d;if(Nt||u||!St[i]||St[i].part!==t.i){u=!1;const{default:s,preload:r}=yield Qe[t.i].js();let o;o=kt||!$t.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},At):{}:$t.preloaded[i+1],d={component:s,props:o,segment:h,match:l,part:t.i}}else d=St[i];return o[`level${f}`]=d})))))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var Ot,Ht,Ut;Tt.session.subscribe((e=>et(void 0,void 0,void 0,(function*(){if(At=e,!kt)return;Nt=!0;const t=lt(new URL(location.href)),n=Et={},{redirect:s,props:r,branch:o}=yield Ct(t);n===Et&&(s?yield vt(s.location,{replaceState:!0}):yield Rt(o,r,It(r,t.page)))})))),Ot={target:document.querySelector("#sapper")},Ht=Ot.target,Pt=Ht,Ut=$t.baseUrl,at=Ut,it=Lt,"scrollRestoration"in rt&&(rt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{rt.scrollRestoration="auto"})),addEventListener("load",(()=>{rt.scrollRestoration="manual"})),addEventListener("click",ut),addEventListener("popstate",ft),addEventListener("touchstart",bt),addEventListener("mousemove",wt),$t.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:a}=$t;_t||(_t=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:_t},level1:{props:{status:o,error:a},component:Be},segments:r},c=ct(n);Rt([],i,{host:e,path:t,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;rt.replaceState({id:st},"",t);const n=lt(new URL(location.href));if(n)return dt(n,st,!0,e)}));export{he as A,E as B,r as C,z as D,u as E,H as F,Ae as G,U as H,w as I,vt as J,I as K,_ as L,t as M,S as N,ae as O,G as P,q as Q,l as R,pe as S,ie as T,F as U,O as V,x as a,A as b,T as c,m as d,b as e,k as f,p as g,d as h,de as i,$ as j,N as k,ne as l,oe as m,e as n,se as o,re as p,M as q,we as r,a as s,v as t,P as u,y as v,g as w,ce as x,le as y,ue as z};

import __inject_styles from './inject_styles.5607aec6.js';