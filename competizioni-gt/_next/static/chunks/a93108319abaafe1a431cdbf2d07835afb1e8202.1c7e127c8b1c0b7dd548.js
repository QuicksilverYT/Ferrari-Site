(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"/tWa":function(t,e,r){"use strict";var n=r("KI45");r("hfKm")(e,"__esModule",{value:!0}),e.default=void 0;var a=n(r("/HRN")),u=n(r("WaGi")),o=r("T89o"),l=n(r("Bk/R")),i=/https?:\/\//,s=/\/$/,c=/\/(\w{2}[-|_]\w{2}|\w{2}\/?)$/,f=/\/(\w{2}[-|_]\w{2}|\w{2})\/([\w\d_\-.]+)(\/.*)?/,d=/(www\.ferrari\.com)\/([\w\d_-]+)(\/.*)?/,p=function(){function t(){(0,a.default)(this,t)}return(0,u.default)(t,null,[{key:"stripProtocol",value:function(t){return t.replace(i,"").replace(s,"")}},{key:"stripLocale",value:function(e){var r=t.stripProtocol(e);return f.test(r)?r.replace(f,"/$2$3").replace(s,""):c.test(r)?r.replace(c,"/").replace(s,""):r}},{key:"getApplication",value:function(e){var r=t.stripLocale(e);return d.test(r)?r.replace(d,"$1/$2").replace(s,""):r}},{key:"getStripHost",value:function(e){var r=l.default.host(e);return t.stripProtocol(r)}},{key:"getLinkValue",value:function(t,e){return(0,o.get)(t,e,"-1")}},{key:"getLinkUrl",value:function(e,r){var n=t.getLinkValue(e,r);return t.stripLocale(n)}},{key:"urlContainsOrigin",value:function(t,e){return!(!t||!e||"-1"===t)&&(t===e||-1!==e.indexOf(t))}},{key:"findTree",value:function(e,r){var n=t.stripLocale(r),a=t.getApplication(r),u="";return e.some((function(e,r){return(0,o.get)(e,"menuItems",[]).forEach((function(e,a){var l=t.getLinkUrl(e,"content.link.url");"list-of-links"===e.template?(0,o.get)(e,"content.menuItems",[]).forEach((function(e,l){var i=t.getLinkUrl(e,"link.url");t.urlContainsOrigin(i,n)&&(u="".concat(r,"-").concat(a,"-").concat(l)),(0,o.get)(e,"menuItems.length",0)>0&&e.menuItems.forEach((function(e,o){var i=t.getLinkUrl(e,"link.url");t.urlContainsOrigin(i,n)&&(u="".concat(r,"-").concat(a,"-").concat(l,"-").concat(o))}))})):t.urlContainsOrigin(l,n)&&(u="".concat(r,"-").concat(a))}))})),""===u&&e.some((function(e,r){return(0,o.get)(e,"menuItems",[]).some((function(e,n){var l=t.getLinkUrl(e,"content.link.url"),i=t.getApplication(l);return"list-of-links"===e.template?(0,o.get)(e,"content.menuItems",[]).forEach((function(e,n){var o=t.getLinkUrl(e,"link.url"),l=t.getApplication(o);return!!t.urlContainsOrigin(l,a)&&(u="".concat(r),!0)})):!!t.urlContainsOrigin(i,a)&&(u="".concat(r),!0)}))})),""===u&&e.some((function(e,n){var o=t.stripLocale(r),l=t.getLinkUrl(e,"link.url"),i=t.getApplication(l);return!(!t.urlContainsOrigin(l,o)&&!t.urlContainsOrigin(i,a))&&(u="".concat(n),!0)})),""===u&&e.some((function(e,n){var a=t.getStripHost(r);return t.getStripHost(t.getLinkValue(e,"link.url"))===a&&(u="".concat(n),!0)})),u}}]),t}();e.default=p},Y0NT:function(t,e,r){"use strict";var n=r("5Uuq"),a=r("KI45");r("hfKm")(e,"__esModule",{value:!0}),e.default=void 0;var u=a(r("pbKT")),o=a(r("ln6h")),l=a(r("eVuF")),i=a(r("/HRN")),s=a(r("WaGi")),c=a(r("N9n2")),f=a(r("ZDA2")),d=a(r("/+P4")),p=n(r("q1tI")),h=r("ANjH"),g=a(r("SbWC")),v=a(r("8Kt/")),k=a(r("kQFM")),m=a(r("SHU5")),y=a(r("hzb8")),w=r("8ANe"),E=a(r("DDmF")),C=a(r("WZaA")),L=r("T89o"),S=a(r("qyhG")),I=a(r("9qRu")),b=r("gGHL"),N=r("mJQZ"),M=(r("3Eu1"),p.default.createElement);function P(t){var e=function(){if("undefined"===typeof Reflect||!u.default)return!1;if(u.default.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call((0,u.default)(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,d.default)(t);if(e){var a=(0,d.default)(this).constructor;r=(0,u.default)(n,arguments,a)}else r=n.apply(this,arguments);return(0,f.default)(this,r)}}var U=r("pY8v"),A=function(t){(0,c.default)(r,t);var e=P(r);function r(t){var n;return(0,i.default)(this,r),(n=e.call(this,t)).state={splash:!0},n}return(0,s.default)(r,null,[{key:"getInitialProps",value:function(t){var e,r,n,a,u,i,s,c,f,d,p;return o.default.async((function(h){for(;;)switch(h.prev=h.next){case 0:return t.req,e=t.res,r=t.err,n=t.store,a=t.isServer,u=[],i=e?e.statusCode:r?r.statusCode:null,s=window.location.href.split("/"),c=s[1].split("?")[0],f=(0,L.get)(U,c,!1),a&&f&&(u.push(S.default.superheader(c).then((function(t){return t.data.results})).then((function(t){var e=t.content;n.dispatch((0,b.setPillars)(e.pillars))})).catch((function(t){return(0,I.default)(t)}))),u.push(S.default.superfooter(c).then((function(t){return t.data.results})).then((function(t){var e=t.content;n.dispatch((0,N.setFooterData)(e))})).catch((function(t){return(0,I.default)(t)})))),h.next=9,o.default.awrap(l.default.all(u));case 9:d=h.sent,p=r;try{p=JSON.parse(r.message),e.status(p.status)}catch(g){}return h.abrupt("return",{statusCode:(0,L.get)(p,"status",!1)?p.status:i,localeUrl:c,pageData:d[0],error:{stack:(0,L.get)(r,"stack",!1),message:(0,L.get)(p,"message",!1)}});case 13:case"end":return h.stop()}}),null,null,null,l.default)}}]),(0,s.default)(r,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){t.hideSplash()}),1e3)}},{key:"hideSplash",value:function(){this.setState({splash:!1})}},{key:"render",value:function(){var t,e=this.props,r=e.statusCode,n=e.localeUrl,a=this.state.splash;return t=this.errorStatus?{where:"SERVER:",statusCode:this.errorStatus,errorMessage:'An error "'.concat(this.errorMessage,'" occurred on server')}:{where:"CLIENT:",statusCode:r||"Unknown Status Code.",errorMessage:'An error "'.concat(r,'" occurred on client')},console.log("[\x1b[31m ERROR \x1b[0m]",t.where,t.errorMessage),this.stack&&console.error(this.stack),M("div",null,M(v.default,null),M(m.default,null),M(w.Menu,null),M(y.default,{visible:a}),M("div",{className:"page-menu-hook"},M(E.default,{error:t,localeUrl:n}),M(w.Footer,null)))}},{key:"errorMessage",get:function(){return(0,L.get)(this.props,"error.message",!1)}},{key:"errorStatus",get:function(){return(0,L.get)(this.props,"error.errorStatus",!1)}},{key:"stack",get:function(){return(0,L.get)(this.props,"error.stack",!1)}},{key:"error",get:function(){return(0,L.get)(this.props,"error",!1)}}]),r}(p.Component),O=(0,g.default)(k.default,(function(t){return{}}),(function(t){return(0,h.bindActionCreators)({},t)}))((0,C.default)(A));e.default=O},"s+xg":function(t,e,r){"use strict";var n=r("KI45");r("hfKm")(e,"__esModule",{value:!0}),e.default=function(t){var e=function(e){(0,g.default)(n,e);var r=function(t){var e=function(){if("undefined"===typeof Reflect||!c.default)return!1;if(c.default.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call((0,c.default)(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,k.default)(t);if(e){var a=(0,k.default)(this).constructor;r=(0,c.default)(n,arguments,a)}else r=n.apply(this,arguments);return(0,v.default)(this,r)}}(n);function n(){return(0,p.default)(this,n),r.apply(this,arguments)}return(0,h.default)(n,[{key:"render",value:function(){var e=this.props,r=this.hasError,n=e.localeUrl;return r?C(w.default,{error:e.pageError,localeUrl:n}):C(t,this.props)}},{key:"hasError",get:function(){return null!==this.props.pageError}}],[{key:"getInitialProps",value:function(e){var r,n,a;return d.default.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(r=window.location.href.split("/"),n=r[1].split("?")[0]||"en-EN",a={},!t.getInitialProps){u.next=7;break}return u.next=6,d.default.awrap(t.getInitialProps(e));case 6:a=u.sent;case 7:return u.abrupt("return",S({},a,{localeUrl:n}));case 8:case"end":return u.stop()}}),null,null,null,f.default)}}]),n}(y.default.Component);(0,m.default)(e,"defaultProps",{pageError:null});return(0,E.connect)((function(t){return{pageError:t.error.error}}),null)(e)};var a=n(r("hfKm")),u=n(r("2Eek")),o=n(r("XoMD")),l=n(r("Jo+v")),i=n(r("4mXO")),s=n(r("pLtp")),c=n(r("pbKT")),f=n(r("eVuF")),d=n(r("ln6h")),p=n(r("/HRN")),h=n(r("WaGi")),g=n(r("N9n2")),v=n(r("ZDA2")),k=n(r("/+P4")),m=n(r("xHqa")),y=n(r("q1tI")),w=n(r("Y0NT")),E=(r("ANjH"),r("/MKj")),C=y.default.createElement;function L(t,e){var r=(0,s.default)(t);if(i.default){var n=(0,i.default)(t);e&&(n=n.filter((function(e){return(0,l.default)(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){(0,m.default)(t,e,r[e])})):o.default?(0,u.default)(t,(0,o.default)(r)):L(Object(r)).forEach((function(e){(0,a.default)(t,e,(0,l.default)(r,e))}))}return t}},t3G4:function(t,e,r){"use strict";var n=r("KI45");r("hfKm")(e,"__esModule",{value:!0}),e.default=void 0;var a=n(r("8+Nu")),u=n(r("LR/J")),o=r("T89o"),l={setOrganismsMultiNaming:function(t,e){return(0,u.default)(e).forEach((function(e){var r=(0,a.default)(e,2),n=r[0],u=r[1];t[n]=u,t[(0,o.camelCase)(n)]=u,t[(0,o.kebabCase)(n)]=u})),t},setEditorialNaming:function(t,e){return["Media","Audio","Gallery","Groups","Image","Video","Data"].forEach((function(r){t["Editorial".concat(r)]=e})),t},pageTemplate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t){case"WithSidebar":return e.ContactPage;case"HiddenFooter":return e.HiddenFooterPage;default:return e.DefaultPage}}};e.default=l}}]);