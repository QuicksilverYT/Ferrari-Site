(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"7rcV":function(e,t,n){"use strict";var a=n("KI45"),r=n("Jo+v"),u=n("hfKm"),i=n("G4HQ"),o=n("pbKT");u(t,"__esModule",{value:!0}),t.default=void 0;var l=M(n("q1tI")),s=a(n("eVuF")),c=a(n("ln6h")),f=a(n("/HRN")),d=a(n("K47E")),p=a(n("WaGi")),h=a(n("N9n2")),v=a(n("ZDA2")),m=a(n("/+P4")),g=a(n("xHqa")),w=n("eHHv"),y=n("ANjH"),b=a(n("SbWC")),k=a(n("8Kt/")),S=n("T89o"),N=n("19JU"),O=a(n("kQFM")),P=a(n("qyhG")),H=a(n("9qRu")),T=(n("wY8V"),n("0vEF")),A=n("gGHL"),_=n("mJQZ"),C=(n("QyOH"),n("LXYO")),E=a(n("/tWa")),I=(a(n("tn3X")),a(n("DOE8"))),q=n("oTHJ"),F=a(n("s+xg")),D=a(n("Nnea")),J=a(n("WZaA")),L=a(n("NZQk")),Q=a(n("hzb8")),V=a(n("SHU5")),x=(n("Fbiq"),n("rdom"),M(n("8ANe"))),W=a(n("t3G4")),G=M(n("sd54"));function K(e){if("function"!==typeof i)return null;var t=new i,n=new i;return(K=function(e){return e?n:t})(e)}function M(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=K(t);if(n&&n.has(e))return n.get(e);var a={},i=u&&r;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?r(e,o):null;l&&(l.get||l.set)?u(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}var R=l.default.createElement;function Z(e){var t=function(){if("undefined"===typeof Reflect||!o)return!1;if(o.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(o(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,m.default)(e);if(t){var r=(0,m.default)(this).constructor;n=o(a,arguments,r)}else n=a.apply(this,arguments);return(0,v.default)(this,n)}}var j=function(e){(0,h.default)(n,e);var t=Z(n);function n(e){var a;return(0,f.default)(this,n),a=t.call(this,e),(0,g.default)((0,d.default)(a),"scenes",[]),(0,g.default)((0,d.default)(a),"chapterWrappers",[]),a.state={activeOrigin:null},a}return(0,p.default)(n,null,[{key:"changeCountrySlug",value:function(){var e=N.window.location.pathname||"";return"/"!==e&&(e=(e=e.replace(/\/?([a-z]{2}-[A-Z]{2})?(.*)/,"$2")).replace("/ristorante-cavallino","")),e}},{key:"shareSectionFullUrl",value:function(e){var t=String(N.window.location.pathname).split("/share")[0];return"".concat(t,"/share/").concat(e)}}]),(0,p.default)(n,[{key:"componentDidMount",value:function(){var e,t=this;return c.default.async((function(n){for(;;)switch(n.prev=n.next){case 0:(e=this.props.thronSessId)&&I.default.setSessId(e),setTimeout((function(){t.hideSplash()}),1e3),this.setActiveOrigin();case 4:case"end":return n.stop()}}),null,this,null,s.default)}},{key:"componentWillUnmount",value:function(){this.chapterController&&this.chapterController.destroy(!0),window.removeEventListener("resize",this.setScenesDuration)}},{key:"setActiveOrigin",value:function(){this.setState({activeOrigin:E.default.findTree(this.props.menuPillars,window.location.href)})}},{key:"hideSplash",value:function(){this.props.setSplash(!1)}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.metadata,r=e.pageData,u=e.query,i=e.openNewsletterForm,o=this.state.activeOrigin,l={};l=W.default.setOrganismsMultiNaming(l,x),l=W.default.setEditorialNaming(l,x.Editorial);var s=r.template||(0,S.get)(r,"commonProperties.internalNavigation","default"),c=W.default.pageTemplate(s,G);return(0,S.isObject)(r.carHeader)&&(0,q.breakpointIsLessThan)("phone",this.props.breakpoint.size)&&(r.carHeader.logoPosition="left"),R("div",null,R(k.default,null,t,a),R(Q.default,{autoVisibility:!0}),R(V.default,null),R(c,{pageData:r,blockTypes:l,dispatch:this.props.dispatch,templateName:s,menu:{activeOrigin:o,openNewsletterForm:i},footer:{referrer:n.changeCountrySlug(),origin:"RISTORANTE_CAVALLINO",token:u.token}}))}}]),n}(l.Component);(0,g.default)(j,"getInitialProps",(function(e){var t,n,a,r,u,i,o;return c.default.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e.req,t=e.res,n=e.query,a=e.isServer,r=e.store,u=n.locale,i={},o=[],a&&(o.push(P.default.superheader(u).then((function(e){return e.data.results})).then((function(e){var t=e.content;r.dispatch((0,A.setPillars)(t.pillars))})).catch((function(e){return(0,H.default)(e)}))),o.push(P.default.superfooter(u).then((function(e){return e.data.results})).then((function(e){var t=e.content;r.dispatch((0,_.setFooterData)(t))})).catch((function(e){return(0,H.default)(e)})))),o.push(P.default.page(u,n.name,n.parent?"".concat(n.parent,"/").concat(n.name):n.name,n.accessCode,n.previewSlug,n.token).then((function(e){var n=e.data;(0,S.get)(n,"results.content.blocks")?(i=n.results,r.dispatch((0,C.setChannelVariables)((0,S.get)(i,"variables",[])))):(0,S.get)(n,"results.redirect")&&(t.writeHead(301,{Location:n.results.redirect}),t.end())})).catch((function(e){return(0,H.default)(e)}))),l.next=8,c.default.awrap(s.default.all(o));case 8:return r.dispatch((0,T.setSplash)(a)),l.abrupt("return",{locale:u,pageData:i,query:n,openNewsletterForm:"open"===n.newsletter,thronSessId:(0,S.get)(i,"commonProperties.videoPlayer.sessId",!1)});case 10:case"end":return l.stop()}}),null,null,null,s.default)}));var z=(0,w.compose)((0,b.default)(O.default,(function(e){return{breakpoint:e.breakpoint,menuPillars:e.menu.pillars,hiddenHeader:e.menu.hidden}}),(function(e){return(0,y.bindActionCreators)({setSplash:T.setSplash},e)})),J.default,L.default,F.default,D.default)(j);t.default=z},"QJP+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/scheda",function(){return n("7rcV")}])}},[["QJP+",1,2,4,7,8,9,11,6,10,5,0,3,12,13,14]]]);