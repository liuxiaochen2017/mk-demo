webpackJsonp([17],{1907:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u,o=r(2),c=a(o),s=r(60),i=a(s),f=r(4),p=a(f),d=r(10),l=a(d),h=r(7),m=a(h),v=r(8),k=a(v),x=r(0),w=(a(x),r(289)),b=r(721),g=a(b),_=(n=(0,w.wrapper)(g.default))(u=function(e){function t(){return(0,p.default)(this,t),(0,m.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,k.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,c.default)({},this.props,{path:"root"}))}}]),t}(x.Component))||u;t.default=_,e.exports=t.default},1908:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=new x.action(e),r=new _((0,s.default)({},e,{metaAction:t})),a=(0,s.default)({},t,r);return t.config({metaHandlers:a}),a}Object.defineProperty(t,"__esModule",{value:!0});var u=r(16),o=a(u),c=r(2),s=a(c),i=r(113),f=a(i),p=r(631),d=a(p),l=r(632),h=a(l),m=r(4),v=a(m);t.default=n;var k=r(0),x=(a(k),r(289)),w=(r(189),r(9)),b=(a(w),r(660)),g=a(b),_=function e(t){var r=this;(0,v.default)(this,e),this.onInit=function(e){var t=e.component,a=e.injections;r.component=t,r.injections=a,r.component.props.setOkListener&&r.component.props.setOkListener(r.onOk),a.reduce("init")},this.onOk=(0,h.default)(d.default.mark(function e(){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,r)})),this.register=(0,h.default)(d.default.mark(function e(){var t,a;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.metaAction.gf("data.form").toJS(),e.next=3,r.check([{path:"data.form.mobile",value:t.mobile},{path:"data.form.password",value:t.password},{path:"data.form.captcha",value:t.captcha}]);case 3:if(a=e.sent){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,r.webapi.user.create(t);case 8:r.metaAction.toast("success","注册成功"),r.goLogin();case 10:case"end":return e.stop()}},e,r)})),this.getLogo=function(){return r.config.logo},this.getCaptcha=(0,h.default)(d.default.mark(function e(){var t;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.webapi.captcha.fetch();case 2:t=e.sent,r.metaAction.toast("success","验证码已经发送到您的手机，请输入[模拟先输入：123456]");case 4:case"end":return e.stop()}},e,r)})),this.fieldChange=function(){var e=(0,h.default)(d.default.mark(function e(t,a){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.check([{path:t,value:a}]);case 2:case"end":return e.stop()}},e,r)}));return function(t,r){return e.apply(this,arguments)}}(),this.showAgreement=(0,h.default)(d.default.mark(function e(){var t;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.metaAction.modal("show",{title:"用户协议条款",width:700,bodyStyle:{height:400,overflow:"auto"},okText:"同意",cancelText:"不同意",children:r.metaAction.loadApp("mk-app-agreement",{store:r.component.props.store})});case 2:t=e.sent,r.metaAction.sf("data.form.agree",!!t);case 4:case"end":return e.stop()}},e,r)})),this.goLogin=function(){if(!r.config.apps["mk-app-login"])throw"请将这个应用加入到带mk-app-root和mk-app-login的网站中，跳转功能才能正常使用";r.component.props.onRedirect&&r.config.goLogin&&r.component.props.onRedirect(r.config.goLogin)},this.check=function(){var e=(0,h.default)(d.default.mark(function e(t){var a,n,u,c,i,p,l,h,m,v;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:a=[],n=!0,u=!1,c=void 0,e.prev=6,i=(0,f.default)(t);case 8:if(n=(p=i.next()).done){e.next=40;break}if(l=p.value,h=(0,s.default)({},l),"data.form.mobile"!=l.path){e.next=20;break}return e.t0=o.default,e.t1=h,e.next=16,r.checkMobile(l.value);case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),e.next=36;break;case 20:if("data.form.password"!=l.path){e.next=29;break}return e.t3=o.default,e.t4=h,e.next=25,r.checkPassword(l.value);case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5),e.next=36;break;case 29:if("data.form.captcha"!=l.path){e.next=36;break}return e.t6=o.default,e.t7=h,e.next=34,r.checkCaptcha(l.value);case 34:e.t8=e.sent,(0,e.t6)(e.t7,e.t8);case 36:a.push(h);case 37:n=!0,e.next=8;break;case 40:e.next=46;break;case 42:e.prev=42,e.t9=e.catch(6),u=!0,c=e.t9;case 46:e.prev=46,e.prev=47,!n&&i.return&&i.return();case 49:if(e.prev=49,!u){e.next=52;break}throw c;case 52:return e.finish(49);case 53:return e.finish(46);case 54:return m={},v=!0,a.forEach(function(e){m[e.path]=e.value,m[e.errorPath]=e.message,e.message&&(v=!1)}),r.metaAction.sfs(m),e.abrupt("return",v);case 59:case"end":return e.stop()}},e,r,[[6,42,46,54],[47,,49,53]])}));return function(t){return e.apply(this,arguments)}}(),this.checkMobile=function(){var e=(0,h.default)(d.default.mark(function e(t){var a;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}a="请录入手机号",e.next=12;break;case 4:if(/^1[3|4|5|8][0-9]\d{8}$/.test(t)){e.next=8;break}a="请录入有效的手机号",e.next=12;break;case 8:return e.next=10,r.webapi.user.existsMobile(t);case 10:if(!e.sent){e.next=12;break}a="该手机号已经注册";case 12:return e.abrupt("return",{errorPath:"data.other.error.mobile",message:a});case 13:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),this.checkPassword=function(){var e=(0,h.default)(d.default.mark(function e(t){var a;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(a="请录入密码"),e.abrupt("return",{errorPath:"data.other.error.password",message:a});case 2:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),this.checkCaptcha=function(){var e=(0,h.default)(d.default.mark(function e(t){var a;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(a="请录入验证码"),e.abrupt("return",{errorPath:"data.other.error.captcha",message:a});case 2:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),this.metaAction=t.metaAction,this.config=g.default.current,this.webapi=this.config.webapi};e.exports=t.default},1909:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=new d.reducer(e),r=new v((0,i.default)({},e,{metaReducer:t}));return(0,i.default)({},t,r)}Object.defineProperty(t,"__esModule",{value:!0});var u,o,c,s=r(2),i=a(s),f=r(4),p=a(f);t.default=n;var d=(r(189),r(289)),l=r(660),h=(a(l),r(9)),m=(a(h),r(722)),v=(o=u=function e(t){(0,p.default)(this,e),c.call(this),this.metaReducer=t.metaReducer},c=function(){var e=this;this.init=function(t,r){return e.metaReducer.init(t,(0,m.getInitState)(r))}},o);e.exports=t.default}});