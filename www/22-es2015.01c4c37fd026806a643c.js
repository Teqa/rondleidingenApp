(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{UzZC:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class e{}var t=u("pMnS"),i=u("MKJQ"),r=u("sZkV"),a=u("s7LF"),s=u("SVse"),b=u("mrSG"),g=u("ej43"),c=u("N/3U"),d=u("SxV6"),p=u("F/us"),m=u.n(p);class h{constructor(l,n,u,o,e,t){this.auth=l,this.tabnav=n,this.router=u,this.formBuilder=o,this.loadingCtrl=e,this.alertCtrl=t,this.loggedin=!1}ngOnInit(){this.auth.currentUserSubject.subscribe(l=>{m.a.isNull(l)?this.loggedin=!1:(this.loggedin=!0,this.user=l)}),this.loginForm=this.formBuilder.group({email:["",a.m.compose([a.m.required,a.m.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],password:["",a.m.compose([a.m.minLength(6),a.m.required])]})}presentAlert(l){return b.a(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({header:"Alert",subHeader:"Niet gelukt in te loggen. Technische melding: ",message:l,buttons:["OK"]});yield n.present()}))}login(){this.loginForm.valid?this.auth.login(this.loginForm.value.email,this.loginForm.value.password).pipe(Object(d.a)()).subscribe(l=>{this.loading=!1,this.router.navigate(["/tab-nav/register"])},l=>{console.log(l),this.presentAlert(l.error.error.message),this.loading=!1}):console.log(this.loginForm.value)}logout(){this.auth.logout(),this.router.navigate(["/tab-nav/login"])}goToResetPassword(){this.router.navigate(["/tab-nav/login"])}createAccount(){this.router.navigate(["/tab-nav/register"])}}var f=u("iInd"),v=o.nb({encapsulation:0,styles:[["page-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin-bottom:32px}page-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px}page-login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8em;color:#d2d2d2}page-login[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:5px}page-login[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{padding:5px}page-login[_ngcontent-%COMP%]   .invalid[_ngcontent-%COMP%]{border-bottom:1px solid #ff6153}page-login[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0!important}"]],data:{}});function C(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,6,"ion-content",[["class","ion-padding"]],null,null,null,i.U,i.n)),o.ob(1,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),o.Hb(3,null,["Ingelogd met ",""])),(l()(),o.pb(4,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.logout()&&o),o}),i.L,i.e)),o.ob(5,49152,null,0,r.k,[o.h,o.k,o.x],{expand:[0,"expand"]},null),(l()(),o.Hb(-1,0,["Uitloggen"]))],(function(l,n){l(n,5,0,"block")}),(function(l,n){l(n,3,0,n.component.user.username)}))}function k(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,3,"ion-item",[["class","error-message"]],null,null,null,i.Z,i.s)),o.ob(1,49152,null,0,r.H,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Geef een geldig e-mail adres op"]))],null,null)}function B(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,3,"ion-item",[["class","error-message"]],null,null,null,i.Z,i.s)),o.ob(1,49152,null,0,r.H,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Het wachtwoord moet minimaal 6 karakters bevatten"]))],null,null)}function x(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,42,"ion-content",[],null,null,null,i.U,i.n)),o.ob(1,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,40,"ion-card",[],null,null,null,i.R,i.g)),o.ob(3,49152,null,0,r.m,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,35,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==o.Bb(l,6).onSubmit(u)&&e),"reset"===n&&(e=!1!==o.Bb(l,6).onReset()&&e),e}),null,null)),o.ob(5,16384,null,0,a.q,[],null,null),o.ob(6,540672,null,0,a.e,[[8,null],[8,null]],{form:[0,"form"]},null),o.Eb(2048,null,a.a,null,[a.e]),o.ob(8,16384,null,0,a.j,[[4,a.a]],null,null),(l()(),o.pb(9,0,null,null,11,"ion-item",[],null,null,null,i.Z,i.s)),o.ob(10,49152,null,0,r.H,[o.h,o.k,o.x],null,null),(l()(),o.pb(11,0,null,0,2,"ion-label",[["stacked",""]],null,null,null,i.ab,i.t)),o.ob(12,49152,null,0,r.N,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,["E-mail"])),(l()(),o.pb(14,0,null,0,6,"ion-input",[["formControlName","email"],["placeholder","Je e-mail adres"],["type","email"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Bb(l,15)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Bb(l,15)._handleInputEvent(u.target)&&e),e}),i.Y,i.r)),o.ob(15,16384,null,0,r.Mb,[o.k],null,null),o.Eb(1024,null,a.g,(function(l){return[l]}),[r.Mb]),o.ob(17,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.g],[2,a.p]],{name:[0,"name"]},null),o.Eb(2048,null,a.h,null,[a.d]),o.ob(19,16384,null,0,a.i,[[4,a.h]],null,null),o.ob(20,49152,[["email",4]],0,r.G,[o.h,o.k,o.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o.eb(16777216,null,null,1,null,k)),o.ob(22,16384,null,0,s.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(23,0,null,null,11,"ion-item",[],null,null,null,i.Z,i.s)),o.ob(24,49152,null,0,r.H,[o.h,o.k,o.x],null,null),(l()(),o.pb(25,0,null,0,2,"ion-label",[["stacked",""]],null,null,null,i.ab,i.t)),o.ob(26,49152,null,0,r.N,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,["Wachtwoord"])),(l()(),o.pb(28,0,null,0,6,"ion-input",[["formControlName","password"],["placeholder","Je wachtwoord"],["type","password"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Bb(l,29)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Bb(l,29)._handleInputEvent(u.target)&&e),e}),i.Y,i.r)),o.ob(29,16384,null,0,r.Mb,[o.k],null,null),o.Eb(1024,null,a.g,(function(l){return[l]}),[r.Mb]),o.ob(31,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.g],[2,a.p]],{name:[0,"name"]},null),o.Eb(2048,null,a.h,null,[a.d]),o.ob(33,16384,null,0,a.i,[[4,a.h]],null,null),o.ob(34,49152,[["password",4]],0,r.G,[o.h,o.k,o.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),o.eb(16777216,null,null,1,null,B)),o.ob(36,16384,null,0,s.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(37,0,null,null,2,"ion-button",[["class","submit-btn"],["color","primary"],["expand","full"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.login()&&o),o}),i.L,i.e)),o.ob(38,49152,null,0,r.k,[o.h,o.k,o.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(l()(),o.Hb(-1,0,["Login"])),(l()(),o.pb(40,0,null,0,2,"ion-button",[["class","submit-btn"],["color","secondary"],["expand","full"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.createAccount()&&o),o}),i.L,i.e)),o.ob(41,49152,null,0,r.k,[o.h,o.k,o.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),o.Hb(-1,0,["Registreer"]))],(function(l,n){var u=n.component;l(n,6,0,u.loginForm),l(n,17,0,"email"),l(n,20,0,"Je e-mail adres","email"),l(n,22,0,!u.loginForm.controls.email.valid&&u.loginForm.controls.email.dirty),l(n,31,0,"password"),l(n,34,0,"Je wachtwoord","password"),l(n,36,0,!u.loginForm.controls.password.valid&&u.loginForm.controls.password.dirty),l(n,38,0,"primary",!u.loginForm.valid,"full"),l(n,41,0,"secondary","full")}),(function(l,n){var u=n.component;l(n,4,0,o.Bb(n,8).ngClassUntouched,o.Bb(n,8).ngClassTouched,o.Bb(n,8).ngClassPristine,o.Bb(n,8).ngClassDirty,o.Bb(n,8).ngClassValid,o.Bb(n,8).ngClassInvalid,o.Bb(n,8).ngClassPending),l(n,14,0,!u.loginForm.controls.email.valid&&u.loginForm.controls.email.dirty,o.Bb(n,19).ngClassUntouched,o.Bb(n,19).ngClassTouched,o.Bb(n,19).ngClassPristine,o.Bb(n,19).ngClassDirty,o.Bb(n,19).ngClassValid,o.Bb(n,19).ngClassInvalid,o.Bb(n,19).ngClassPending),l(n,28,0,!u.loginForm.controls.password.valid&&u.loginForm.controls.password.dirty,o.Bb(n,33).ngClassUntouched,o.Bb(n,33).ngClassTouched,o.Bb(n,33).ngClassPristine,o.Bb(n,33).ngClassDirty,o.Bb(n,33).ngClassValid,o.Bb(n,33).ngClassInvalid,o.Bb(n,33).ngClassPending)}))}function M(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,10,"ion-header",[],null,null,null,i.W,i.p)),o.ob(1,49152,null,0,r.B,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,i.nb,i.G)),o.ob(3,49152,null,0,r.zb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,i.M,i.f)),o.ob(5,49152,null,0,r.l,[o.h,o.k,o.x],null,null),(l()(),o.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,i.cb,i.w)),o.ob(7,49152,null,0,r.R,[o.h,o.k,o.x],null,null),(l()(),o.pb(8,0,null,0,2,"ion-title",[],null,null,null,i.mb,i.F)),o.ob(9,49152,null,0,r.xb,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,["Inloggen"])),(l()(),o.eb(16777216,null,null,1,null,C)),o.ob(12,16384,null,0,s.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,null,1,null,x)),o.ob(14,16384,null,0,s.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,12,0,u.loggedin),l(n,14,0,0==u.loggedin)}),null)}function y(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,1,"app-login",[],null,null,null,M,v)),o.ob(1,114688,null,0,h,[g.a,c.a,f.m,a.b,r.Db,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var w=o.lb("app-login",h,y,{},{},[]);class P{}u.d(n,"LoginPageModuleNgFactory",(function(){return z}));var z=o.mb(e,[],(function(l){return o.yb([o.zb(512,o.j,o.X,[[8,[t.a,w]],[3,o.j],o.v]),o.zb(4608,s.l,s.k,[o.s,[2,s.s]]),o.zb(4608,a.o,a.o,[]),o.zb(4608,r.b,r.b,[o.x,o.g]),o.zb(4608,r.Fb,r.Fb,[r.b,o.j,o.p]),o.zb(4608,r.Jb,r.Jb,[r.b,o.j,o.p]),o.zb(4608,a.b,a.b,[]),o.zb(1073742336,s.c,s.c,[]),o.zb(1073742336,a.n,a.n,[]),o.zb(1073742336,a.f,a.f,[]),o.zb(1073742336,r.Bb,r.Bb,[]),o.zb(1073742336,a.l,a.l,[]),o.zb(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),o.zb(1073742336,P,P,[]),o.zb(1073742336,e,e,[]),o.zb(1024,f.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);