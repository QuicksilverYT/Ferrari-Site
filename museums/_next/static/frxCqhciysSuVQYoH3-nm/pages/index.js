(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{H0SL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("cMU6")}])},cMU6:function(e,t,n){"use strict";var a=n("KI45"),r=n("5Uuq");n("hfKm")(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n("q1tI")),i=a(n("pbKT")),l=a(n("eVuF")),o=a(n("ln6h")),s=a(n("/HRN")),c=a(n("K47E")),f=a(n("WaGi")),d=a(n("N9n2")),p=a(n("ZDA2")),h=a(n("/+P4")),v=a(n("xHqa")),m=n("eHHv"),w=n("ANjH"),g=a(n("SbWC")),y=a(n("8Kt/")),S=n("T89o"),k=n("19JU"),b=a(n("kQFM")),q=a(n("qyhG")),N=a(n("9qRu")),E=(n("wY8V"),n("0vEF")),F=n("gGHL"),H=n("mJQZ"),D=(n("QyOH"),n("sk4W")),P=n("LXYO"),T=a(n("/tWa")),O=(a(n("tn3X")),n("oTHJ")),A=a(n("s+xg")),C=a(n("Nnea")),U=a(n("WZaA")),_=a(n("NZQk")),x=a(n("hzb8")),M=a(n("SHU5")),W=(n("Fbiq"),n("rdom"),r(n("8ANe"))),L=a(n("t3G4")),I=r(n("sd54")),J=u.default.createElement;function K(e){var t=function(){if("undefined"===typeof Reflect||!i.default)return!1;if(i.default.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call((0,i.default)(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,h.default)(e);if(t){var r=(0,h.default)(this).constructor;n=(0,i.default)(a,arguments,r)}else n=a.apply(this,arguments);return(0,p.default)(this,n)}}var Z=function(e){(0,d.default)(n,e);var t=K(n);function n(e){var a;return(0,s.default)(this,n),a=t.call(this,e),(0,v.default)((0,c.default)(a),"scenes",[]),(0,v.default)((0,c.default)(a),"chapterWrappers",[]),a.state={activeOrigin:null},a}return(0,f.default)(n,null,[{key:"changeCountrySlug",value:function(){var e=k.window.location.pathname||"";return"/"!==e&&(e=(e=e.replace(/\/?([a-z]{2}-[A-Z]{2})?(.*)/,"$2")).replace("/museums","")),e}},{key:"shareSectionFullUrl",value:function(e){var t=String(k.window.location.pathname).split("/share")[0];return"".concat(t,"/share/").concat(e)}}]),(0,f.default)(n,[{key:"componentDidMount",value:function(){var e=this;return o.default.async((function(t){for(;;)switch(t.prev=t.next){case 0:setTimeout((function(){e.hideSplash()}),1e3),this.setActiveOrigin();case 2:case"end":return t.stop()}}),null,this,null,l.default)}},{key:"componentWillUnmount",value:function(){this.chapterController&&this.chapterController.destroy(!0),window.removeEventListener("resize",this.setScenesDuration)}},{key:"setActiveOrigin",value:function(){this.setState({activeOrigin:T.default.findTree(this.props.menuPillars,window.location.href)})}},{key:"hideSplash",value:function(){this.props.setSplash(!1)}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.metadata,r=e.pageData,u=e.openEnquireForm,i=e.openNewsletterForm,l=this.state.activeOrigin,o={};o=L.default.setOrganismsMultiNaming(o,W),o=L.default.setEditorialNaming(o,W.Editorial);var s=r.template||(0,S.get)(r,"commonProperties.overview","default"),c=L.default.pageTemplate(s,I);return(0,O.breakpointIsLessThan)("phone",this.props.breakpoint.size)&&(r.carHeader.logoPosition="left"),J("div",null,J(y.default,null,t,a),J(x.default,{autoVisibility:!0}),J(M.default,null),J(c,{pageData:r,blockTypes:o,dispatch:this.props.dispatch,templateName:s,menu:{activeOrigin:l,openEnquireForm:u,openNewsletterForm:i},footer:{referrer:n.changeCountrySlug(),origin:"MUSEI"}}))}}]),n}(u.Component);(0,v.default)(Z,"getInitialProps",(function(e){var t,n,a,r,u,i;return o.default.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e.req,t=e.query,n=e.isServer,a=e.store,r=t.locale,u={},i=[],n&&(i.push(q.default.superheader(r).then((function(e){return e.data.results})).then((function(e){var t=e.content;a.dispatch((0,F.setPillars)(t.pillars))})).catch((function(e){return(0,N.default)(e)}))),i.push(q.default.superfooter(r).then((function(e){return e.data.results})).then((function(e){var t=e.content;a.dispatch((0,H.setFooterData)(t))})).catch((function(e){return(0,N.default)(e)})))),i.push(q.default.index(r).then((function(e){var t=e.data;u=t.results,a.dispatch((0,P.setChannelVariables)((0,S.get)(u,"variables",[])))})).catch((function(e){return(0,N.default)(e)}))),s.next=8,o.default.awrap(l.default.all(i));case 8:return a.dispatch((0,E.setSplash)(n)),a.dispatch((0,D.setEnquireData)(u.enquireForm)),s.abrupt("return",{locale:r,pageData:u,openEnquireForm:"open"===t.enquire,openNewsletterForm:"open"===t.newsletter});case 11:case"end":return s.stop()}}),null,null,null,l.default)}));var z=(0,m.compose)((0,g.default)(b.default,(function(e){return{breakpoint:e.breakpoint,menuPillars:e.menu.pillars,hiddenHeader:e.menu.hidden}}),(function(e){return(0,w.bindActionCreators)({setSplash:E.setSplash},e)})),U.default,_.default,A.default,C.default)(Z);t.default=z}},[["H0SL",1,2,3,6,7,8,11,5,9,4,0,26,27,28,29]]]);