(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"7rcV":function(e,t,a){"use strict";var n=a("KI45"),r=a("5Uuq");a("hfKm")(t,"__esModule",{value:!0}),t.default=void 0;var u=r(a("q1tI")),i=n(a("pbKT")),l=n(a("eVuF")),o=n(a("ln6h")),s=n(a("/HRN")),c=n(a("K47E")),f=n(a("WaGi")),d=n(a("N9n2")),p=n(a("ZDA2")),h=n(a("/+P4")),v=n(a("xHqa")),m=a("eHHv"),g=a("ANjH"),w=n(a("SbWC")),y=n(a("8Kt/")),S=a("T89o"),b=a("19JU"),k=n(a("kQFM")),N=n(a("qyhG")),H=n(a("9qRu")),P=(a("wY8V"),a("0vEF")),O=a("gGHL"),T=a("mJQZ"),C=(a("QyOH"),a("LXYO")),D=n(a("/tWa")),E=(n(a("tn3X")),a("oTHJ")),F=n(a("s+xg")),q=n(a("Nnea")),A=n(a("WZaA")),_=n(a("NZQk")),J=n(a("hzb8")),x=n(a("SHU5")),Q=(a("Fbiq"),a("rdom"),r(a("8ANe"))),U=n(a("t3G4")),V=r(a("sd54")),W=u.default.createElement;function I(e){var t=function(){if("undefined"===typeof Reflect||!i.default)return!1;if(i.default.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call((0,i.default)(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,h.default)(e);if(t){var r=(0,h.default)(this).constructor;a=(0,i.default)(n,arguments,r)}else a=n.apply(this,arguments);return(0,p.default)(this,a)}}var K=function(e){(0,d.default)(a,e);var t=I(a);function a(e){var n;return(0,s.default)(this,a),n=t.call(this,e),(0,v.default)((0,c.default)(n),"scenes",[]),(0,v.default)((0,c.default)(n),"chapterWrappers",[]),n.state={activeOrigin:null},n}return(0,f.default)(a,null,[{key:"changeCountrySlug",value:function(){var e=b.window.location.pathname||"";return"/"!==e&&(e=(e=e.replace(/\/?([a-z]{2}-[A-Z]{2})?(.*)/,"$2")).replace("/museums","")),e}},{key:"shareSectionFullUrl",value:function(e){var t=String(b.window.location.pathname).split("/share")[0];return"".concat(t,"/share/").concat(e)}}]),(0,f.default)(a,[{key:"componentDidMount",value:function(){var e=this;return o.default.async((function(t){for(;;)switch(t.prev=t.next){case 0:setTimeout((function(){e.hideSplash()}),1e3),this.setActiveOrigin();case 2:case"end":return t.stop()}}),null,this,null,l.default)}},{key:"componentWillUnmount",value:function(){this.chapterController&&this.chapterController.destroy(!0),window.removeEventListener("resize",this.setScenesDuration)}},{key:"setActiveOrigin",value:function(){this.setState({activeOrigin:D.default.findTree(this.props.menuPillars,window.location.href)})}},{key:"hideSplash",value:function(){this.props.setSplash(!1)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.metadata,r=e.pageData,u=e.openNewsletterForm,i=this.state.activeOrigin,l={};l=U.default.setOrganismsMultiNaming(l,Q),l=U.default.setEditorialNaming(l,Q.Editorial);var o=r.template||(0,S.get)(r,"commonProperties.internalNavigation","default"),s=U.default.pageTemplate(o,V);return(0,S.isObject)(r.carHeader)&&(0,E.breakpointIsLessThan)("phone",this.props.breakpoint.size)&&(r.carHeader.logoPosition="left"),W("div",null,W(y.default,null,t,n),W(J.default,{autoVisibility:!0}),W(x.default,null),W(s,{pageData:r,blockTypes:l,dispatch:this.props.dispatch,templateName:o,menu:{activeOrigin:i,openNewsletterForm:u},footer:{referrer:a.changeCountrySlug(),origin:"MUSEI"}}))}}]),a}(u.Component);(0,v.default)(K,"getInitialProps",(function(e){var t,a,n,r,u,i;return o.default.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e.req,t=e.query,a=e.isServer,n=e.store,r=t.locale,u={},i=[],a&&(i.push(N.default.superheader(r).then((function(e){return e.data.results})).then((function(e){var t=e.content;n.dispatch((0,O.setPillars)(t.pillars))})).catch((function(e){return(0,H.default)(e)}))),i.push(N.default.superfooter(r).then((function(e){return e.data.results})).then((function(e){var t=e.content;n.dispatch((0,T.setFooterData)(t))})).catch((function(e){return(0,H.default)(e)})))),i.push(N.default.page(r,t.name,t.parent?"".concat(t.parent,"/").concat(t.name):t.name,t.accessCode,t.previewSlug).then((function(e){var t=e.data;u=t.results,n.dispatch((0,C.setChannelVariables)((0,S.get)(u,"variables",[])))})).catch((function(e){return(0,H.default)(e)}))),s.next=8,o.default.awrap(l.default.all(i));case 8:return n.dispatch((0,P.setSplash)(a)),s.abrupt("return",{locale:r,pageData:u,openNewsletterForm:"open"===t.newsletter});case 10:case"end":return s.stop()}}),null,null,null,l.default)}));var M=(0,m.compose)((0,w.default)(k.default,(function(e){return{breakpoint:e.breakpoint,menuPillars:e.menu.pillars,hiddenHeader:e.menu.hidden}}),(function(e){return(0,g.bindActionCreators)({setSplash:P.setSplash},e)})),A.default,_.default,F.default,q.default)(K);t.default=M},"QJP+":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/scheda",function(){return a("7rcV")}])}},[["QJP+",1,2,3,6,7,8,11,5,9,4,0,26,27,28,29]]]);