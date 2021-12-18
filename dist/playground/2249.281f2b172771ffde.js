"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[2249],{9175:(h,g,s)=>{s.d(g,{n:()=>p});var u=s(8580),r=s(3668),d=s(163);let p=(()=>{class l{constructor(t){this.statusService=t,this.text="",this._defaultPosition="top right",this._position=this._defaultPosition,this.status="basic"}get position(){return this._position}set position(t){this._position=t||this._defaultPosition}get dotMode(){return this._dotMode}set dotMode(t){this._dotMode=(0,u.e)(t)}get additionalClasses(){return this.statusService.isCustomStatus(this.status)?[this.statusService.getStatusClass(this.status)]:[]}get primary(){return"primary"===this.status}get success(){return"success"===this.status}get info(){return"info"===this.status}get warning(){return"warning"===this.status}get danger(){return"danger"===this.status}get basic(){return"basic"===this.status}get control(){return"control"===this.status}get top(){return this.position.includes("top")}get right(){return this.position.includes("right")}get bottom(){return this.position.includes("bottom")}get left(){return this.position.includes("left")}get start(){return this.position.includes("start")}get end(){return this.position.includes("end")}get center(){return this.position.includes("center")}}return l.\u0275fac=function(t){return new(t||l)(r.Y36(d.Y))},l.\u0275cmp=r.Xpm({type:l,selectors:[["nb-badge"]],hostVars:32,hostBindings:function(t,e){2&t&&(r.Tol(e.additionalClasses),r.ekj("dot-mode",e.dotMode)("status-primary",e.primary)("status-success",e.success)("status-info",e.info)("status-warning",e.warning)("status-danger",e.danger)("status-basic",e.basic)("status-control",e.control)("position-top",e.top)("position-right",e.right)("position-bottom",e.bottom)("position-left",e.left)("position-start",e.start)("position-end",e.end)("position-center",e.center))},inputs:{text:"text",position:"position",dotMode:"dotMode",status:"status"},decls:1,vars:1,template:function(t,e){1&t&&r._uU(0),2&t&&r.Oqu(e.dotMode?"":e.text)},styles:["[_nghost-%COMP%]{position:absolute;text-align:center;white-space:nowrap;vertical-align:baseline}.position-top[_nghost-%COMP%]{top:0}.position-right[_nghost-%COMP%]{right:0}.position-bottom[_nghost-%COMP%]{bottom:0}.position-left[_nghost-%COMP%]{left:0}.position-center[_nghost-%COMP%]{top:50%;transform:translateY(-50%)}[dir=ltr]   .position-start[_nghost-%COMP%]{left:0}[dir=rtl]   .position-start[_nghost-%COMP%]{right:0}[dir=ltr]   .position-end[_nghost-%COMP%]{right:0}[dir=rtl]   .position-end[_nghost-%COMP%]{left:0}"]}),l})()},9888:(h,g,s)=>{s.d(g,{j:()=>r});var u=s(3668);let r=(()=>{class d{}return d.\u0275fac=function(l){return new(l||d)},d.\u0275mod=u.oAB({type:d}),d.\u0275inj=u.cJS({}),d})()},5849:(h,g,s)=>{s.r(g),s.d(g,{ActionModule:()=>M});var u=s(6019),r=s(2858),d=s(6512),p=s(5082),l=s(8082),b=s(4301),t=s(3668),e=s(634),a=s(8051);let A=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-action-badge"]],decls:6,vars:0,consts:[["size","medium"],["icon","search-outline","badgeText","99+","badgeStatus","danger"],["icon","power-outline","badgeText","12","badgePosition","bottom right","badgeStatus","warning"],["icon","person-outline","badgeText","M","badgePosition","top right","badgeStatus","info"]],template:function(o,c){1&o&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body"),t.TgZ(2,"nb-actions",0),t._UZ(3,"nb-action",1),t._UZ(4,"nb-action",2),t._UZ(5,"nb-action",3),t.qZA(),t.qZA(),t.qZA())},directives:[e.As,e.yK,a.l,a.B],encapsulation:2,changeDetection:0}),n})(),_=(()=>{class n{constructor(){this.disabledIconConfig={icon:"settings-2-outline",pack:"eva"}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-action-showcase"]],decls:10,vars:1,consts:[["size","medium"],["icon","search-outline"],["icon","power-outline"],["icon","person-outline"],["icon","home-outline"],["disabled","",3,"icon"]],template:function(o,c){1&o&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body"),t.TgZ(2,"nb-actions",0),t._UZ(3,"nb-action",1),t._UZ(4,"nb-action",2),t._UZ(5,"nb-action",3),t._UZ(6,"nb-action",4),t._UZ(7,"nb-action",5),t.TgZ(8,"nb-action"),t._uU(9," Custom Action "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(7),t.Q6J("icon",c.disabledIconConfig))},directives:[e.As,e.yK,a.l,a.B],encapsulation:2,changeDetection:0}),n})();function T(n,i){if(1&n&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body"),t.TgZ(2,"nb-actions",1),t._UZ(3,"nb-action",2),t._UZ(4,"nb-action",3),t._UZ(5,"nb-action",4),t._UZ(6,"nb-action",5),t.TgZ(7,"nb-action"),t._uU(8,"Some Action"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const o=i.$implicit;t.xp6(2),t.Q6J("size",o)}}let f=(()=>{class n{constructor(){this.sizes=["tiny","small","medium","large","giant"]}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-action-sizes"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"size"],["icon","search-outline"],["icon","power-outline"],["icon","person-outline"],["icon","home-outline"]],template:function(o,c){1&o&&t.YNc(0,T,9,1,"nb-card",0),2&o&&t.Q6J("ngForOf",c.sizes)},directives:[u.sg,e.As,e.yK,a.l,a.B],encapsulation:2,changeDetection:0}),n})();var m=s(761),C=s(6773);const U=[{path:"action-badge.component",component:A},{path:"action-showcase.component",component:_},{path:"action-sizes.component",component:f},{path:"action-test.component",component:(()=>{class n{actionOnClick(o){console.info(o)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-action-test"]],decls:61,vars:0,consts:[["icon","search-outline",3,"click"],["icon","search-outline"],["icon","search-outline","disabled",""],["inverse",""],["inverse","","size","medium"],["inverse","","size","large"],["size","large"],["badgeText","29","badgeStatus","success","badgePosition","bottom left"],["badgeText","29","badgeStatus","danger","badgePosition","top left","icon","search-outline"],["badgeText","29","badgeStatus","warning","badgePosition","bottom right","icon","search-outline"],["badgeText","29","badgeStatus","success","badgePosition","bottom left","icon","search-outline"],["badgeText","29","badgeStatus","info","badgePosition","top right","icon","search-outline"],["badgeText","29","badgeStatus","info","badgePosition","top right","icon","search-outline","disabled",""],["badgeText","29"]],template:function(o,c){1&o&&(t.TgZ(0,"nb-layout"),t.TgZ(1,"nb-layout-header"),t.TgZ(2,"nb-actions"),t.TgZ(3,"nb-action",0),t.NdJ("click",function(){return c.actionOnClick("first")}),t.qZA(),t._UZ(4,"nb-action",1),t.TgZ(5,"nb-action"),t._UZ(6,"nb-user"),t.qZA(),t._UZ(7,"nb-action",1),t._UZ(8,"nb-action",1),t._UZ(9,"nb-action",2),t.TgZ(10,"nb-action"),t._uU(11," Hello "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"nb-layout-column"),t.TgZ(13,"nb-card"),t.TgZ(14,"nb-card-body"),t.TgZ(15,"nb-actions",3),t.TgZ(16,"nb-action",0),t.NdJ("click",function(){return c.actionOnClick("first")}),t.qZA(),t._UZ(17,"nb-action",1),t.TgZ(18,"nb-action"),t._UZ(19,"nb-user"),t.qZA(),t._UZ(20,"nb-action",1),t._UZ(21,"nb-action",1),t._UZ(22,"nb-action",2),t.TgZ(23,"nb-action"),t._uU(24," Hello "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"nb-card"),t.TgZ(26,"nb-card-body"),t.TgZ(27,"nb-actions",4),t.TgZ(28,"nb-action",0),t.NdJ("click",function(){return c.actionOnClick("first")}),t.qZA(),t._UZ(29,"nb-action",1),t.TgZ(30,"nb-action"),t._UZ(31,"nb-user"),t.qZA(),t._UZ(32,"nb-action",1),t._UZ(33,"nb-action",1),t._UZ(34,"nb-action",2),t.TgZ(35,"nb-action"),t._uU(36," Hello "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(37,"nb-card"),t.TgZ(38,"nb-card-body"),t.TgZ(39,"nb-actions",5),t.TgZ(40,"nb-action",0),t.NdJ("click",function(){return c.actionOnClick("first")}),t.qZA(),t._UZ(41,"nb-action",1),t.TgZ(42,"nb-action"),t._UZ(43,"nb-user"),t.qZA(),t._UZ(44,"nb-action",1),t._UZ(45,"nb-action",1),t._UZ(46,"nb-action",2),t.TgZ(47,"nb-action"),t._uU(48," Hello "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(49,"nb-card"),t.TgZ(50,"nb-card-body"),t.TgZ(51,"nb-actions",6),t.TgZ(52,"nb-action",7),t._UZ(53,"nb-user"),t.qZA(),t._UZ(54,"nb-action",8),t._UZ(55,"nb-action",9),t._UZ(56,"nb-action",10),t._UZ(57,"nb-action",11),t._UZ(58,"nb-action",12),t.TgZ(59,"nb-action",13),t._uU(60,"Badge"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[m.Aq,m.dm,a.l,a.B,C.k,m.dP,e.As,e.yK],encapsulation:2}),n})()},{path:"action-width.component",component:(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-action-width"]],decls:5,vars:0,consts:[["size","small","fullWidth",""],["icon","search-outline"],["icon","power-outline"]],template:function(o,c){1&o&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body"),t.TgZ(2,"nb-actions",0),t._UZ(3,"nb-action",1),t._UZ(4,"nb-action",2),t.qZA(),t.qZA(),t.qZA())},directives:[e.As,e.yK,a.l,a.B],encapsulation:2,changeDetection:0}),n})()},{path:"action-dot-mode.component",component:(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-action-dot-mode"]],decls:7,vars:0,consts:[["size","medium"],["icon","bell-outline","badgeDot","","badgePosition","top right","badgeStatus","danger"],["icon","person-outline","badgeDot","","badgePosition","top start","badgeStatus","warning"],["icon","email-outline","badgeDot","","badgePosition","top left","badgeStatus","danger"],["icon","calendar-outline","badgeDot","","badgePosition","top right","badgeStatus","info"]],template:function(o,c){1&o&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body"),t.TgZ(2,"nb-actions",0),t._UZ(3,"nb-action",1),t._UZ(4,"nb-action",2),t._UZ(5,"nb-action",3),t._UZ(6,"nb-action",4),t.qZA(),t.qZA(),t.qZA())},directives:[e.As,e.yK,a.l,a.B],encapsulation:2,changeDetection:0}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[b.Bz.forChild(U)],b.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.M,d.B,p.z,l.A,y,u.ez]]}),n})()}}]);