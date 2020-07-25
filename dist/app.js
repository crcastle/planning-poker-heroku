!function(e){function t(t){for(var r,o,l=t[0],n=t[1],d=t[2],p=0,m=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);for(c&&c(t);m.length;)m.shift()();return i.push.apply(i,d||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],r=!0,l=1;l<s.length;l++){var n=s[l];0!==a[n]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},a={1:0},i=[];function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./";var l=window.webpackJsonp=window.webpackJsonp||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=n;i.push([4,0,2]),s()}({4:function(e,t,s){e.exports=s(7)},7:function(e,t,s){"use strict";s.r(t);s(5);var r=s(0);var a=[function(e,t,s){return[".center",t,"{text-align:center}.link",t,"{border:none;padding:10px;border-radius:5px;text-decoration:none;background-color:#ff6000;color:#fff;margin-left:33%;margin-right:33%;display:inline-block;margin-top:1em}.info",t,"{color:#000;background-color:#e4f2f8;margin:auto;padding:15px 10px;text-align:left;width:300px;border-radius:5px}.code",t,"{font-family:monospace}.container",t,"{margin-top:30px}img",t,"{max-width:150px}.greeting",t,"{height:75px}"].join("")}];var i=[function(e,t,s){return[s?":host{width:100%}":[e,"{width:100%}"].join(""),"header",t,"{padding:.5rem;display:flex;align-items:stretch;justify-content:space-between;color:#fff;background:#2f6ca4}header",t," img",t,"{height:4rem;margin-right:1rem}h2",t,"{font-weight:300;margin:auto 0;font-size:1.5rem}.app-name",t,"{text-overflow:ellipsis}.nickname",t,"{flex-grow:1;text-align:right;margin-right:1rem}"].join("")}];function o(e,t,s,r){const{h:a,t:i,d:o}=e;return[a("header",{key:3},[a("img",{attrs:{src:"/resources/logo.png",alt:"App logo"},key:0},[]),a("h2",{classMap:{"app-name":!0},key:1},[i("Planning Poker")]),a("h2",{classMap:{nickname:!0},key:2},[o(t.playerName)])])]}var l=Object(r.registerTemplate)(o);o.stylesheets=[],i&&o.stylesheets.push.apply(o.stylesheets,i),o.stylesheetTokens={hostAttribute:"ui-header-_header-host",shadowAttribute:"ui-header-_header"};class n extends r.LightningElement{constructor(...e){super(...e),this.playerName=void 0}}Object(r.registerDecorators)(n,{publicProps:{playerName:{config:0}}});var d=Object(r.registerComponent)(n,{tmpl:l}),c=s(3),p=s(2),m=s(1),h=s.n(m);function u(e,t,s,r){const{t:a,h:i}=e;return[t.showSpinner?i("div",{classMap:{"slds-spinner_container":!0,"slds-is-fixed":!0},key:4},[i("div",{classMap:{"slds-spinner":!0,"slds-spinner_medium":!0},attrs:{role:"status"},key:3},[i("span",{classMap:{"slds-assistive-text":!0},key:0},[a("Loading")]),i("div",{classMap:{"slds-spinner__dot-a":!0},key:1},[]),i("div",{classMap:{"slds-spinner__dot-b":!0},key:2},[])])]):null]}var y=Object(r.registerTemplate)(u);u.stylesheets=[],h.a&&u.stylesheets.push.apply(u.stylesheets,h.a),u.stylesheetTokens={hostAttribute:"utils-spinner-_spinner-host",shadowAttribute:"utils-spinner-_spinner"};class g extends r.LightningElement{constructor(...e){super(...e),this.showSpinner=!1,this.showOnLoad=void 0}show(){this.showSpinner=!0}hide(){this.showSpinner=!1}connectedCallback(){this.showOnLoad&&(this.showSpinner=!0)}}Object(r.registerDecorators)(g,{publicProps:{showOnLoad:{config:0}},publicMethods:["show","hide"],fields:["showSpinner"]});var v=Object(r.registerComponent)(g,{tmpl:y});function f(e,t,s,a){const{t:i,h:o,fid:l,d:n,b:d}=e,{_m0:c}=a;return[t.show?o("div",{classMap:{"slds-notify_container":!0,"slds-is-relative":!0},key:12},[o("div",{className:t.sldsClass,attrs:{role:"status"},key:11},[o("span",{classMap:{"slds-assistive-text":!0},key:0},[i("error")]),o("span",{classMap:{"slds-icon_container":!0,"slds-icon-utility-error":!0,"slds-var-m-right_small":!0,"slds-no-flex":!0,"slds-align-top":!0},attrs:{title:"Description of icon when needed"},key:3},[o("svg",{classMap:{"slds-icon":!0,"slds-icon_small":!0},attrs:{"aria-hidden":"true"},key:2},[o("use",{attrs:{"xlink:href":Object(r.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href",l(t.svgUrl))},key:1},[])])]),o("div",{classMap:{"slds-notify__content":!0},key:5},[o("h2",{classMap:{"slds-text-heading_small":!0},key:4},[n(t.message)])]),o("div",{classMap:{"slds-notify__close":!0},key:10},[o("button",{classMap:{"slds-button":!0,"slds-button_icon":!0,"slds-button_icon-inverse":!0},attrs:{title:"Close"},key:9,on:{click:c||(a._m0=d(t.closeToast))}},[o("svg",{classMap:{"slds-button__icon":!0,"slds-button__icon_large":!0},attrs:{"aria-hidden":"true"},key:7},[o("use",{attrs:{"xlink:href":Object(r.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","/resources/icons/utility-sprite/svg/symbols.svg#close")},key:6},[])]),o("span",{classMap:{"slds-assistive-text":!0},key:8},[i("Close")])])])])]):null]}var _=Object(r.registerTemplate)(f);f.stylesheets=[],h.a&&f.stylesheets.push.apply(f.stylesheets,h.a),f.stylesheetTokens={hostAttribute:"utils-toast-_toast-host",shadowAttribute:"utils-toast-_toast"};class b extends r.LightningElement{constructor(...e){super(...e),this.message=void 0,this.variant=void 0,this.show=!1}get sldsClass(){return"error"===this.variant?"slds-notify slds-notify_toast slds-theme_error":"slds-notify slds-notify_toast slds-theme_success"}get svgUrl(){return"error"===this.variant?"/resources/icons/utility-sprite/svg/symbols.svg#error":"/resources/icons/utility-sprite/svg/symbols.svg#success"}showToast(e,t,s){this.message=e,this.variant=t,this.show=!0,!0===s&&setTimeout(()=>{this.show=!1},5e3)}closeToast(){this.show=!1}}Object(r.registerDecorators)(b,{publicMethods:["showToast"],fields:["message","variant","show"]});var k=Object(r.registerComponent)(b,{tmpl:_});function I(e,t,s,r){const{c:a,t:i,gid:o,h:l,b:n}=e,{_m0:d}=r;return[a("utils-spinner",v,{key:0},[]),a("utils-toast",k,{key:1},[]),l("div",{classMap:{"slds-var-p-around_medium":!0,"slds-var-m-top_x-large":!0},key:10},[l("div",{classMap:{"slds-grid":!0,"slds-grid_align-center":!0},key:9},[l("div",{classMap:{"slds-col":!0,"slds-size_1-of-3":!0},key:8},[l("div",{classMap:{"slds-form-element":!0},key:5},[l("label",{classMap:{"slds-form-element__label":!0},attrs:{for:""+o("gameKey")},key:2},[i("Enter Game Key")]),l("div",{classMap:{"slds-form-element__control":!0},key:4},[l("input",{classMap:{"slds-input":!0},attrs:{type:"text",name:"gameKey",id:o("gameKey")},key:3},[])])]),l("div",{classMap:{"slds-var-m-top_small":!0,"slds-text-align_center":!0},key:7},[l("button",{classMap:{"slds-button":!0,"slds-button_brand":!0,"slds-var-m-top_small":!0},key:6,on:{click:d||(r._m0=n(t.fetchGame))}},[i("Join Game")])])])])])]}var w=Object(r.registerTemplate)(I);async function x(e="",t={}){return(await fetch(e,{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async function S(e="",t={}){let s="";for(let e in t)""!==s&&(s+="&"),s+=e+"="+encodeURIComponent(t[e]);""!==s&&(e=e+"?"+s);const r=await fetch(e);if(!r.ok)throw Error(r.statusText);return r.json()}I.stylesheets=[],I.stylesheetTokens={hostAttribute:"ui-gameSelector-_gameSelector-host",shadowAttribute:"ui-gameSelector-_gameSelector"};class M extends r.LightningElement{fetchGame(){let e=this.template.querySelector("[name=gameKey]").value;e.length>0&&(this.template.querySelector("utils-spinner").show(),S("/api/validateGameKey",{gameKey:e}).then(t=>{this.template.querySelector("utils-spinner").hide(),t?window.location.href="/play/"+e:this.template.querySelector("utils-toast").showToast("Invalid Game Key","error",!0)}).catch(e=>{this.template.querySelector("utils-spinner").hide(),this.template.querySelector("utils-toast").showToast("An error occurred","error",!0),console.error(e)}))}}var T=Object(r.registerComponent)(M,{tmpl:w});var C=[function(e,t,s){return[".waiting",t,"{width:70px}.waiting",t,">div",t,"{width:18px;height:18px;background-color:#333;border-radius:100%;display:inline-block;-webkit-animation:waiting-bouncedelay 1.4s ease-in-out infinite both;animation:waiting-bouncedelay 1.4s ease-in-out infinite both}.waiting",t," .bounce1",t,"{-webkit-animation-delay:-.32s;animation-delay:-.32s}.waiting",t," .bounce2",t,"{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes waiting-bouncedelay{0%",t,",80%",t,",to",t,"{-webkit-transform:scale(0)}40%",t,"{-webkit-transform:scale(1)}}@keyframes waiting-bouncedelay{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}"].join("")}];function P(e,t,s,r){const{c:a,t:i,gid:o,h:l,b:n}=e,{_m0:d}=r;return[a("utils-spinner",v,{key:0},[]),a("utils-toast",k,{key:1},[]),l("div",{classMap:{"slds-var-p-around_medium":!0,"slds-var-m-top_x-large":!0},key:16},[t.registrationSuccessful?null:l("div",{classMap:{"slds-grid":!0,"slds-grid_align-center":!0},key:9},[l("div",{classMap:{"slds-col":!0,"slds-size_1-of-3":!0},key:8},[l("div",{classMap:{"slds-form-element":!0},key:5},[l("label",{classMap:{"slds-form-element__label":!0},attrs:{for:""+o("playerName")},key:2},[i("Enter your name")]),l("div",{classMap:{"slds-form-element__control":!0},key:4},[l("input",{classMap:{"slds-input":!0},attrs:{type:"text",name:"playerName",id:o("playerName")},key:3},[])])]),l("div",{classMap:{"slds-var-m-top_small":!0,"slds-text-align_center":!0},key:7},[l("button",{classMap:{"slds-button":!0,"slds-button_brand":!0,"slds-var-m-top_small":!0},key:6,on:{click:d||(r._m0=n(t.addPlayer))}},[i("Register")])])])]),t.registrationSuccessful?l("div",{classMap:{"slds-var-p-around_medium":!0,"slds-var-m-top_x-large":!0,"slds-text-heading_medium":!0,"slds-text-align_center":!0},key:15},[l("div",{classMap:{"slds-show_inline":!0,waiting:!0,"slds-var-m-bottom_large":!0},key:13},[l("div",{classMap:{bounce1:!0},key:10},[]),l("div",{classMap:{bounce2:!0},key:11},[]),l("div",{classMap:{bounce3:!0},key:12},[])]),l("div",{classMap:{"slds-var-m-top_medium":!0},key:14},[i("Please wait while others join the game")])]):null])]}var O=Object(r.registerTemplate)(P);P.stylesheets=[],C&&P.stylesheets.push.apply(P.stylesheets,C),P.stylesheetTokens={hostAttribute:"ui-playerEntry-_playerEntry-host",shadowAttribute:"ui-playerEntry-_playerEntry"};class j extends r.LightningElement{constructor(...e){super(...e),this.gameId=void 0,this.registrationSuccessful=!1}connectedCallback(){sessionStorage.getItem("playerId_"+this.gameId)&&(this.registrationSuccessful=!0)}addPlayer(){let e=this.template.querySelector("[name=playerName]").value;e.length>0&&(this.template.querySelector("utils-spinner").show(),S("/api/verifyPlayer",{playerName:e,gameId:this.gameId}).then(t=>{t?(this.template.querySelector("utils-spinner").hide(),this.template.querySelector("utils-toast").showToast("A player with this name already exists","error",!0)):x("/api/insertPlayer",{gameId:this.gameId,playerName:e}).then(t=>{this.template.querySelector("utils-spinner").hide(),this.registrationSuccessful=!0,sessionStorage.setItem("playerId_"+this.gameId,t),sessionStorage.setItem("playerName_"+this.gameId,e);const s=new CustomEvent("playercreated",{detail:{playerId:t,playerName:e}});this.dispatchEvent(s)}).catch(e=>{this.template.querySelector("utils-spinner").hide(),this.template.querySelector("utils-toast").showToast("An error occurred","error",!0),console.error(e)})}).catch(e=>{this.template.querySelector("utils-spinner").hide(),this.template.querySelector("utils-toast").showToast("An error occurred","error",!0),console.error(e)}))}}Object(r.registerDecorators)(j,{publicProps:{gameId:{config:0}},fields:["registrationSuccessful"]});var A=Object(r.registerComponent)(j,{tmpl:O});var L=[function(e,t,s){return[".pokerCard",t,"{width:5rem;height:7rem;border-radius:1rem;font-size:2rem;margin-left:10px;margin-right:10px;line-height:7rem;margin-top:4rem;color:#fff}.allPokerCards",t,"{height:10rem;margin-bottom:-1rem}.selectedPokerCard",t,"{margin-top:1.4rem;transform:rotate(10deg);transition:all .5s ease-in}.dashed-border",t,"{border-bottom:1px dashed #ddd}"].join("")}];function N(e,t,s,r){const{d:a,k:i,h:o,i:l}=e;return l(t.errorMessages,(function(e){return o("div",{classMap:{"slds-notify":!0,"slds-notify_alert":!0,"slds-theme_alert-texture":!0,"slds-theme_info":!0},attrs:{role:"alert"},key:i(0,e)},[a(e)])}))}var E=Object(r.registerTemplate)(N);N.stylesheets=[],N.stylesheetTokens={hostAttribute:"utils-errorPanel-_errorPanel-host",shadowAttribute:"utils-errorPanel-_errorPanel"};const q=e=>(Array.isArray(e)||(e=[e]),e.filter(e=>!!e).map(e=>Array.isArray(e.body)?e.body.map(e=>e.message):e.body&&"string"==typeof e.body.message?e.body.message:"string"==typeof e.message?e.message:e.statusText).reduce((e,t)=>e.concat(t),[]).filter(e=>!!e));class R extends r.LightningElement{constructor(...e){super(...e),this.error=void 0}get errorMessages(){return console.log(q(this.error)),q(this.error)}}Object(r.registerDecorators)(R,{publicProps:{error:{config:0}}});var D=Object(r.registerComponent)(R,{tmpl:E});var V=[function(e,t,s){return[".base-timer",t,"{position:relative;height:150px;width:150px}.base-timer__circle",t,"{fill:none;stroke:none}.base-timer__path-elapsed",t,"{stroke-width:7px;stroke:grey}.base-timer__label",t,"{position:absolute;width:150px;height:150px;top:0;display:flex;align-items:center;justify-content:center;font-size:2rem;font-family:Salesforce Sans,Helvetica,sans-serif}.base-timer__path-remaining",t,"{stroke-width:7px;stroke-linecap:round;transform:rotate(90deg);transform-origin:center;transition:all 1s linear}.base-timer__svg",t,"{transform:scaleX(-1)}"].join("")}];function F(e,t,s,r){const{h:a,gid:i,d:o}=e;return[a("div",{classMap:{"base-timer":!0},key:5},[a("svg",{classMap:{"base-timer__svg":!0},attrs:{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},key:3},[a("g",{classMap:{"base-timer__circle":!0},key:2},[a("circle",{classMap:{"base-timer__path-elapsed":!0},attrs:{cx:"50",cy:"50",r:"45"},key:0},[]),a("path",{classMap:{"base-timer__path-remaining":!0},attrs:{id:i("base-timer-path-remaining"),stroke:t.remainingPathColor,"stroke-dasharray":t.strokeDashArray,d:"\n                M 50, 50\n                m -45, 0\n                a 45,45 0 1,0 90,0\n                a 45,45 0 1,0 -90,0\n                "},key:1},[])])]),a("span",{classMap:{"base-timer__label":!0,"slds-text-heading_medium":!0},key:4},[o(t.timeLeft)])])]}var z=Object(r.registerTemplate)(F);F.stylesheets=[],V&&F.stylesheets.push.apply(F.stylesheets,V),F.stylesheetTokens={hostAttribute:"utils-timer-_timer-host",shadowAttribute:"utils-timer-_timer"};class K extends r.LightningElement{constructor(...e){super(...e),this.durationInSeconds=void 0,this.storyId=void 0,this.gameId=void 0,this.secondsPassed=0,this.secondsLeft=void 0,this.timerId=void 0}get timeLeft(){return this.formatTime(this.secondsLeft)}get strokeDashArray(){const e=this.secondsLeft/this.durationInSeconds;return(283*(e-1/this.durationInSeconds*(1-e))).toFixed(0)+" 283"}get remainingPathColor(){const e=this.secondsPassed/this.durationInSeconds;return this.getColor(e)}connectedCallback(){this.secondsLeft=0,S("/api/getTimerTimestamp",{gameId:this.gameId}).then(e=>{if(e){let t=e,s=(new Date).getTime(),r=Math.round((t-s)/1e3);r>0?(this.secondsLeft=r,this.secondsPassed=this.durationInSeconds-this.secondsLeft,this.startTimer()):(this.secondsLeft=0,this.secondsPassed=this.durationInSeconds,this.dispatchEvent(new CustomEvent("timeup")))}else this.secondsLeft=this.durationInSeconds,this.startTimer()}).catch(e=>{this.error=e,console.error(e)})}getColor(e){return`hsl(${(120*(1-e)).toString(10)}, 100%, 50%)`}formatTime(e){let t=e%60;return t<10&&(t="0"+t),`${Math.floor(e/60)}:${t}`}startCountdown(){this.timerId||(this.timerId=setInterval(()=>{this.secondsPassed=this.secondsPassed+1,this.secondsLeft=this.durationInSeconds-this.secondsPassed,0===this.secondsLeft&&(clearInterval(this.timerId),this.timerId=void 0,this.dispatchEvent(new CustomEvent("timeup")))},1e3))}resetTimer(){this.secondsPassed=0,this.secondsLeft=this.durationInSeconds,this.startTimer()}startTimer(){this.startCountdown()}}Object(r.registerDecorators)(K,{publicProps:{durationInSeconds:{config:0},storyId:{config:0},gameId:{config:0}},publicMethods:["resetTimer","startTimer"],fields:["secondsPassed","secondsLeft","timerId"]});var G=Object(r.registerComponent)(K,{tmpl:z});var H=[function(e,t,s){return["@keyframes popout{0%{font-size:.5rem}50%{font-size:1.2rem}to{font-size:1rem}}.name",t,"{font-size:1rem;text-overflow:ellipsis;animation:popout .5s}.playerList",t,"{min-height:11rem;max-height:16rem;overflow-y:scroll}.pokerCard",t,"{width:3rem;height:4rem;border-radius:.4rem;font-size:1rem;margin-left:10px;margin-right:10px;line-height:4rem;color:#fff;text-align:center}.pokerCardName",t,"{max-width:50%;word-break:break-word}.default",t,"{background:#e6e6e6}.responseHidden",t,"{background:#3d76ad}"].join("")}];function U(e,t,s,a){const{d:i,h:o,k:l,i:n}=e;return[o("div",{classMap:{playerList:!0},key:13},[t.error?i(t.error):null,t.playerResponses?o("div",{classMap:{"slds-grid":!0,"slds-wrap":!0},key:12},n(t.playerResponses,(function(e){return o("div",{classMap:{"slds-var-m-bottom_medium":!0,"slds-size_3-of-12":!0},key:l(11,e.player.Id)},[o("div",{classMap:{"slds-grid":!0,"slds-grid_vertical-align-center":!0},key:10},[e.response?null:o("div",{classMap:{pokerCard:!0,default:!0},key:3},[o("div",{classMap:{"slds-icon-utility-salesforce1":!0,"slds-icon_container":!0},key:2},[o("svg",{classMap:{"slds-icon":!0},attrs:{xmlns:"http://www.w3.org/2000/svg"},key:1},[o("use",{attrs:{"xlink:href":Object(r.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","/resources/icons/utility-sprite/svg/symbols.svg#salesforce1")},key:0},[])])])]),e.response?t.cardsFlipped?null:o("div",{classMap:{pokerCard:!0,responseHidden:!0},key:7},[o("div",{classMap:{"slds-icon-utility-salesforce1":!0,"slds-icon_container":!0},key:6},[o("svg",{classMap:{"slds-icon":!0},attrs:{xmlns:"http://www.w3.org/2000/svg"},key:5},[o("use",{attrs:{"xlink:href":Object(r.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","/resources/icons/utility-sprite/svg/symbols.svg#salesforce1")},key:4},[])])])]):null,e.response&&t.cardsFlipped?o("div",{classMap:{pokerCard:!0},style:e.pokerCard.colorHexCode,key:8},[i(e.response)]):null,o("div",{classMap:{pokerCardName:!0},key:9},[i(e.player.Name)])])])}))):null])]}var J=Object(r.registerTemplate)(U);U.stylesheets=[],H&&U.stylesheets.push.apply(U.stylesheets,H),U.stylesheetTokens={hostAttribute:"ui-playerResponses-_playerResponses-host",shadowAttribute:"ui-playerResponses-_playerResponses"};class B extends r.LightningElement{constructor(...e){super(...e),this.error=void 0,this.playerResponses=void 0,this.gameId=void 0,this.storyId=void 0,this.cardsFlipped=void 0,this.estimateOptions=void 0}connectedCallback(){this.getResponsesFromSalesforce(this.storyId)}updateVote(e){for(let t in this.playerResponses){let s=this.playerResponses[t];if(s.player.Id===e.Player__c){s.response=e.Response__c;for(let e in this.estimateOptions){let t=this.estimateOptions[e];t.name===s.response&&(s.pokerCard?s.pokerCard.colorHexCode=t.colorHexCode:s.pokerCard={name:s.response,colorHexCode:t.colorHexCode})}}}}getResponsesFromSalesforce(e){S("/api/getPlayerResponses",{gameId:this.gameId,storyId:e}).then(e=>{e&&(this.playerResponses=e)}).catch(e=>{this.error=e,console.error(e)})}}Object(r.registerDecorators)(B,{publicProps:{gameId:{config:0},storyId:{config:0},cardsFlipped:{config:0},estimateOptions:{config:0}},publicMethods:["updateVote","getResponsesFromSalesforce"],track:{playerResponses:1},fields:["error"]});var $=Object(r.registerComponent)(B,{tmpl:J});function Y(e,t,s,r){const{c:a,t:i,h:o,d:l,b:n,k:d,i:c}=e,{_m0:p,_m1:m}=r;return[o("div",{classMap:{"slds-var-p-around_large":!0},key:20},[a("utils-toast",k,{key:0},[]),a("utils-error-panel",D,{props:{error:t.error},key:1},[]),t.currentItem?null:o("div",{classMap:{"slds-var-p-around_medium":!0,"slds-var-m-top_x-large":!0,"slds-text-heading_medium":!0,"slds-text-align_center":!0},key:2},[i("There are no unvoted items left. Enjoy.")]),t.currentItem?o("div",{classMap:{"slds-grid":!0,"slds-gutters":!0,"dashed-border":!0,"slds-var-m-bottom_large":!0},key:12},[o("div",{classMap:{"slds-col":!0,"slds-size_2-of-3":!0},key:8},[o("div",{classMap:{"slds-var-p-left_medium":!0},key:7},[o("div",{classMap:{"slds-text-title_caps":!0,"slds-var-m-bottom_small":!0},key:3},[i("Story")]),o("div",{classMap:{"slds-text-heading_small":!0,"slds-var-m-bottom_medium":!0},key:4},[l(t.currentItem.itemName)]),o("div",{classMap:{"slds-text-title_caps":!0,"slds-var-m-bottom_small":!0},key:5},[i("Description")]),o("div",{classMap:{"slds-text-heading_small":!0,"slds-var-m-bottom_medium":!0},key:6},[l(t.currentItem.itemDescription)])])]),o("div",{classMap:{"slds-col":!0,"slds-size_1-of-3":!0},key:11},[o("div",{classMap:{"slds-align_absolute-center":!0,"slds-var-m-bottom_large":!0},key:10},[t.showTimer?a("utils-timer",G,{props:{durationInSeconds:t.timerDuration,storyId:t.storyId,gameId:t.gameId},key:9,on:{timeup:p||(r._m0=n(t.handleTimeUp))}},[]):null])])]):null,t.currentItem?o("div",{classMap:{"slds-text-title_caps":!0,"slds-var-m-bottom_small":!0,"slds-var-p-left_medium":!0},key:13},[i("Your Vote")]):null,t.currentItem?o("div",{classMap:{"slds-scrollable_none":!0,"slds-grid":!0,"slds-grid_align-center":!0,"slds-var-m-bottom_large":!0,allPokerCards:!0,"dashed-border":!0},key:16},t.estimateOptions?c(t.estimateOptions,(function(e){return o("div",{classMap:{"slds-col":!0},key:d(15,e.name)},[o("div",{classMap:{"slds-text-align_center":!0,pokerCard:!0},style:e.colorHexCode,attrs:{"data-label":e.name},key:14,on:{click:m||(r._m1=n(t.handleSelectedOption))}},[l(e.name)])])})):[]):null,t.currentItem?o("div",{classMap:{allResponses:!0,"slds-var-m-top_x-large":!0,"slds-var-p-around_medium":!0},key:19},[o("div",{classMap:{"slds-text-title_caps":!0,"slds-var-m-bottom_large":!0},key:17},[i("Your Team's Votes")]),a("ui-player-responses",$,{props:{gameId:t.gameId,storyId:t.storyId,cardsFlipped:t.cardsFlipped,estimateOptions:t.estimateOptions},key:18},[])]):null])]}var X=Object(r.registerTemplate)(Y);Y.stylesheets=[],L&&Y.stylesheets.push.apply(Y.stylesheets,L),Y.stylesheetTokens={hostAttribute:"ui-backlogItemsForReview-_backlogItemsForReview-host",shadowAttribute:"ui-backlogItemsForReview-_backlogItemsForReview"};class Q extends r.LightningElement{constructor(...e){super(...e),this.gameId=void 0,this.playerId=void 0,this.estimateOptions=void 0,this.currentItem=void 0,this.error=void 0,this.cardsFlipped=!1,this.showTimer=void 0,this.timerDuration=void 0}get storyId(){return this.currentItem.itemId}connectedCallback(){this.getUnvotedItem()}getUnvotedItem(){S("/api/getUnvotedItem",{gameId:this.gameId}).then(e=>{this.error=void 0,e&&(this.estimateOptions=e.cards,this.currentItem=e,this.cardsFlipped=!1,this.resetCards())}).catch(e=>{this.error=e,console.error(e)})}flipCards(e){this.cardsFlipped="true"===e}resetTimer(){this.showTimer&&this.template.querySelector("utils-timer")&&this.template.querySelector("utils-timer").resetTimer()}resetCards(){this.template.querySelectorAll(".pokerCard").forEach(e=>{e.classList.remove("selectedPokerCard")}),this.template.querySelector("ui-player-responses")&&this.template.querySelector("ui-player-responses").getResponsesFromSalesforce(this.storyId),this.resetTimer()}updateVote(e){this.template.querySelector("ui-player-responses")&&this.template.querySelector("ui-player-responses").updateVote(e)}handleSelectedOption(e){let t=e.target.dataset.label;this.template.querySelectorAll(".pokerCard").forEach(e=>{e.classList.remove("selectedPokerCard")}),e.target.classList.add("selectedPokerCard"),x("/api/captureVote",{storyId:this.currentItem.itemId,response:t,gameId:this.gameId,playerId:this.playerId}).then(()=>{this.error=void 0}).catch(e=>{this.template.querySelector("utils-toast").showToast("An error occurred","error",!0),this.error=e})}handleTimeUp(){this.cardsFlipped=!0}}Object(r.registerDecorators)(Q,{publicProps:{gameId:{config:0},playerId:{config:0},showTimer:{config:0},timerDuration:{config:0}},publicMethods:["getUnvotedItem","flipCards","resetCards","updateVote"],fields:["estimateOptions","currentItem","error","cardsFlipped"]});var W=Object(r.registerComponent)(Q,{tmpl:X});function Z(e,t,s,r){const{b:a,c:i,t:o,h:l}=e,{_m0:n}=r;return[t.gameValidationInProgress?null:t.gameValidated?t.showBacklogItems?null:i("ui-player-entry",A,{props:{gameId:t.gameId},key:0,on:{playercreated:n||(r._m0=a(t.handlePlayerCreation))}},[]):null,t.gameValidationInProgress?null:t.gameValidated&&t.showBacklogItems?i("ui-backlog-items-for-review",W,{props:{gameId:t.gameId,playerId:t.playerId,showTimer:t.showTimer,timerDuration:t.timerDuration},key:1},[]):null,t.gameValidationInProgress||t.gameValidated?null:l("div",{classMap:{"slds-var-p-around_medium":!0,"slds-var-m-top_x-large":!0,"slds-text-heading_medium":!0,"slds-text-align_center":!0},key:2},[o("No Active Game found with this key.")]),t.gameValidationInProgress?i("utils-spinner",v,{props:{showOnLoad:"true"},key:3},[]):null]}var ee=Object(r.registerTemplate)(Z);Z.stylesheets=[],h.a&&Z.stylesheets.push.apply(Z.stylesheets,h.a),Z.stylesheetTokens={hostAttribute:"ui-gamePlay-_gamePlay-host",shadowAttribute:"ui-gamePlay-_gamePlay"};const te=new EventSource("/api/gameUpdatesStream");class se extends r.LightningElement{constructor(...e){super(...e),this.gameValidationInProgress=!0,this.gameValidated=!1,this.gameKey=void 0,this.gameId=void 0,this.gameStatus=void 0,this.playerId=void 0,this.showTimer=!1,this.timerDuration=void 0}get showBacklogItems(){return!("In Progress"!==this.gameStatus||!this.playerId)}connectedCallback(){this.gameKey=location.pathname.replace("/play/",""),S("/api/validateGameKey",{gameKey:this.gameKey}).then(e=>{if(this.template.querySelector("utils-spinner").hide(),this.gameValidationInProgress=!1,e){this.gameValidated=!0,this.gameId=e.Id,this.gameStatus=e.Phase__c,this.showTimer=e.Show_Timer__c,this.timerDuration=e.Timer_Duration__c;let t=sessionStorage.getItem("playerId_"+this.gameId);if(t){this.playerId=t;let e=sessionStorage.getItem("playerName_"+this.gameId);this.sendPlayerNameToHeader(e)}}}).catch(e=>{this.gameValidationInProgress=!1,console.error(e)}),te.addEventListener("NewPlayerResponse",e=>{let t=JSON.parse(e.data),s=t.sobject;if(s.Game__c===this.gameId){let e=sessionStorage.getItem("replayId_NewPlayerResponse_"+this.gameId);(!e||t.event.replayId>e)&&(sessionStorage.setItem("replayId_NewPlayerResponse_"+this.gameId,t.event.replayId),this.template.querySelector("ui-backlog-items-for-review").updateVote(s))}}),te.addEventListener("GameStateChange",e=>{let t=JSON.parse(e.data),s=t.payload;if(s.GameID__c===this.gameId)if("GamePhaseChange"===s.Type__c){let e=sessionStorage.getItem("replayId_"+s.Type__c+"_"+this.gameId);(!e||t.event.replayId>e)&&(sessionStorage.setItem("replayId_"+s.Type__c+"_"+this.gameId,t.event.replayId),this.gameStatus=s.Data__c,"Completed"===this.gameStatus&&(window.location.href="/"))}else if("StoryChange"===s.Type__c){let e=sessionStorage.getItem("replayId_"+s.Type__c+"_"+this.gameId);(!e||t.event.replayId>e)&&(sessionStorage.setItem("replayId_"+s.Type__c+"_"+this.gameId,t.event.replayId),this.template.querySelector("ui-backlog-items-for-review").getUnvotedItem())}else if("CardFlip"===s.Type__c){let e=sessionStorage.getItem("replayId_"+s.Type__c+"_"+this.gameId);(!e||t.event.replayId>e)&&(sessionStorage.setItem("replayId_"+s.Type__c+"_"+this.gameId,t.event.replayId),this.template.querySelector("ui-backlog-items-for-review").flipCards(s.Data__c))}else if("ResetCards"===s.Type__c){let e=sessionStorage.getItem("replayId_"+s.Type__c+"_"+this.gameId);(!e||t.event.replayId>e)&&(sessionStorage.setItem("replayId_"+s.Type__c+"_"+this.gameId,t.event.replayId),this.template.querySelector("ui-backlog-items-for-review").resetCards())}})}disconnectedCallback(){te.close()}handlePlayerCreation(e){this.playerId=e.detail.playerId,this.sendPlayerNameToHeader(e.detail.playerName)}sendPlayerNameToHeader(e){const t=new CustomEvent("updateplayername",{detail:{playerName:e}});this.dispatchEvent(t)}}Object(r.registerDecorators)(se,{fields:["gameValidationInProgress","gameValidated","gameKey","gameId","gameStatus","playerId","showTimer","timerDuration"]});var re=Object(r.registerComponent)(se,{tmpl:ee});function ae(e,t,s,r){const{c:a,b:i,t:o}=e,{_m0:l}=r;return[a("ui-header",d,{props:{playerName:t.playerName},key:0},[]),a("lwce-router",c.a,{key:6},[a("lwce-route",p.a,{props:{path:"/",exact:!0},key:2},[a("ui-game-selector",T,{key:1},[])]),a("lwce-route",p.a,{props:{path:"/play/:gameKey"},key:4},[a("ui-game-play",re,{key:3,on:{updateplayername:l||(r._m0=i(t.handlePlayerName))}},[])]),a("lwce-route",p.a,{props:{default:!0},key:5},[o("The URL you are looking for is not found.")])])]}var ie=Object(r.registerTemplate)(ae);ae.stylesheets=[],a&&ae.stylesheets.push.apply(ae.stylesheets,a),ae.stylesheetTokens={hostAttribute:"ui-app-_app-host",shadowAttribute:"ui-app-_app"};class oe extends r.LightningElement{constructor(...e){super(...e),this.playerName=void 0}handlePlayerName(e){this.playerName=e.detail.playerName}}Object(r.registerDecorators)(oe,{fields:["playerName"]});var le=Object(r.registerComponent)(oe,{tmpl:ie});const ne=Object(r.createElement)("ui-app",{is:le});document.querySelector("#main").appendChild(ne)}});