"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[8047],{9175:(m,p,r)=>{r.d(p,{n:()=>e});var g=r(8580),u=r(3668),c=r(163);let e=(()=>{class o{constructor(a){this.statusService=a,this.text="",this._defaultPosition="top right",this._position=this._defaultPosition,this.status="basic"}get position(){return this._position}set position(a){this._position=a||this._defaultPosition}get dotMode(){return this._dotMode}set dotMode(a){this._dotMode=(0,g.e)(a)}get additionalClasses(){return this.statusService.isCustomStatus(this.status)?[this.statusService.getStatusClass(this.status)]:[]}get primary(){return"primary"===this.status}get success(){return"success"===this.status}get info(){return"info"===this.status}get warning(){return"warning"===this.status}get danger(){return"danger"===this.status}get basic(){return"basic"===this.status}get control(){return"control"===this.status}get top(){return this.position.includes("top")}get right(){return this.position.includes("right")}get bottom(){return this.position.includes("bottom")}get left(){return this.position.includes("left")}get start(){return this.position.includes("start")}get end(){return this.position.includes("end")}get center(){return this.position.includes("center")}}return o.\u0275fac=function(a){return new(a||o)(u.Y36(c.Y))},o.\u0275cmp=u.Xpm({type:o,selectors:[["nb-badge"]],hostVars:32,hostBindings:function(a,s){2&a&&(u.Tol(s.additionalClasses),u.ekj("dot-mode",s.dotMode)("status-primary",s.primary)("status-success",s.success)("status-info",s.info)("status-warning",s.warning)("status-danger",s.danger)("status-basic",s.basic)("status-control",s.control)("position-top",s.top)("position-right",s.right)("position-bottom",s.bottom)("position-left",s.left)("position-start",s.start)("position-end",s.end)("position-center",s.center))},inputs:{text:"text",position:"position",dotMode:"dotMode",status:"status"},decls:1,vars:1,template:function(a,s){1&a&&u._uU(0),2&a&&u.Oqu(s.dotMode?"":s.text)},styles:["[_nghost-%COMP%]{position:absolute;text-align:center;white-space:nowrap;vertical-align:baseline}.position-top[_nghost-%COMP%]{top:0}.position-right[_nghost-%COMP%]{right:0}.position-bottom[_nghost-%COMP%]{bottom:0}.position-left[_nghost-%COMP%]{left:0}.position-center[_nghost-%COMP%]{top:50%;transform:translateY(-50%)}[dir=ltr]   .position-start[_nghost-%COMP%]{left:0}[dir=rtl]   .position-start[_nghost-%COMP%]{right:0}[dir=ltr]   .position-end[_nghost-%COMP%]{right:0}[dir=rtl]   .position-end[_nghost-%COMP%]{left:0}"]}),o})()},9888:(m,p,r)=>{r.d(p,{j:()=>u});var g=r(3668);let u=(()=>{class c{}return c.\u0275fac=function(o){return new(o||c)},c.\u0275mod=g.oAB({type:c}),c.\u0275inj=g.cJS({}),c})()},1660:(m,p,r)=>{r.r(p),r.d(p,{UserModule:()=>Z});var g=r(8082),u=r(5082),c=r(4301),e=r(3668),o=r(634),d=r(6773);const h=[{path:"user-showcase.component",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nb-user-showcase"]],decls:3,vars:0,consts:[["size","large","name","John Doe","title","Engineer","badgeText","99+","badgeStatus","success","badgePosition","bottom right"]],template:function(n,l){1&n&&(e.TgZ(0,"nb-card"),e.TgZ(1,"nb-card-body"),e._UZ(2,"nb-user",0),e.qZA(),e.qZA())},directives:[o.As,o.yK,d.k],encapsulation:2,changeDetection:0}),t})()},{path:"user-sizes.component",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nb-user-sizes"]],decls:15,vars:2,consts:[["size","tiny","name","John Doe","title","Engineer",3,"showTitle"],["size","small","name","John Doe","title","Engineer",3,"showTitle"],["size","medium","name","John Doe","title","Engineer"],["size","large","name","John Doe","title","Engineer"],["size","giant","name","John Doe","title","Engineer"]],template:function(n,l){1&n&&(e.TgZ(0,"nb-card"),e.TgZ(1,"nb-card-body"),e._UZ(2,"nb-user",0),e.qZA(),e.qZA(),e.TgZ(3,"nb-card"),e.TgZ(4,"nb-card-body"),e._UZ(5,"nb-user",1),e.qZA(),e.qZA(),e.TgZ(6,"nb-card"),e.TgZ(7,"nb-card-body"),e._UZ(8,"nb-user",2),e.qZA(),e.qZA(),e.TgZ(9,"nb-card"),e.TgZ(10,"nb-card-body"),e._UZ(11,"nb-user",3),e.qZA(),e.qZA(),e.TgZ(12,"nb-card"),e.TgZ(13,"nb-card-body"),e._UZ(14,"nb-user",4),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.Q6J("showTitle",!1),e.xp6(3),e.Q6J("showTitle",!1))},directives:[o.As,o.yK,d.k],encapsulation:2,changeDetection:0}),t})()},{path:"user-avatar-settings.component",component:(()=>{class t{constructor(){this.base64image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEVEeef///+4zPaKq/ChvPPn7vxymu3Q3flbieqI1HvuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQUlEQVQ4jWNgGAWjgP6ASdncAEaiAhaGiACmFhCJLsMaIiDAEQEi0WXYEiMCOCJAJIY9KuYGTC0gknpuHwXDGwAA5fsIZw0iYWYAAAAASUVORK5CYII="}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nb-user-avatar-settings"]],decls:20,vars:1,consts:[["size","large","name","John Doe","title","Engineer","picture","https://via.placeholder.com/50/4479e7/ffffff?Text=IMG"],["size","large","name","John Doe","title","Engineer",3,"picture"],["size","large","name","John Doe","title","Engineer","showInitials","false"],["size","large","name","John Doe","title","Engineer","color","#cccccc"]],template:function(n,l){1&n&&(e.TgZ(0,"nb-card"),e.TgZ(1,"nb-card-body"),e.TgZ(2,"p"),e._uU(3,"User avatar image set as link"),e.qZA(),e._UZ(4,"nb-user",0),e.qZA(),e.qZA(),e.TgZ(5,"nb-card"),e.TgZ(6,"nb-card-body"),e.TgZ(7,"p"),e._uU(8,"User avatar image set as BASE64 string"),e.qZA(),e._UZ(9,"nb-user",1),e.qZA(),e.qZA(),e.TgZ(10,"nb-card"),e.TgZ(11,"nb-card-body"),e.TgZ(12,"p"),e._uU(13,"User avatar image not set and showInitials disabled"),e.qZA(),e._UZ(14,"nb-user",2),e.qZA(),e.qZA(),e.TgZ(15,"nb-card"),e.TgZ(16,"nb-card-body"),e.TgZ(17,"p"),e._uU(18,"User avatar with custom background color"),e.qZA(),e._UZ(19,"nb-user",3),e.qZA(),e.qZA()),2&n&&(e.xp6(9),e.Q6J("picture",l.base64image))},directives:[o.As,o.yK,d.k],encapsulation:2,changeDetection:0}),t})()},{path:"user-hide-captions.component",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["nb-user-hide-captions"]],decls:15,vars:0,consts:[["size","large","name","Jonh Doe","title","Engineer","onlyPicture",""],["size","large","name","Jonh Doe","title","Engineer","showName","false"],["size","large","name","Jonh Doe","title","Engineer","showTitle","false"]],template:function(n,l){1&n&&(e.TgZ(0,"nb-card"),e.TgZ(1,"nb-card-body"),e.TgZ(2,"p"),e._uU(3,"Only picture"),e.qZA(),e._UZ(4,"nb-user",0),e.qZA(),e.qZA(),e.TgZ(5,"nb-card"),e.TgZ(6,"nb-card-body"),e.TgZ(7,"p"),e._uU(8,"Name hidden"),e.qZA(),e._UZ(9,"nb-user",1),e.qZA(),e.qZA(),e.TgZ(10,"nb-card"),e.TgZ(11,"nb-card-body"),e.TgZ(12,"p"),e._uU(13,"Title hidden"),e.qZA(),e._UZ(14,"nb-user",2),e.qZA(),e.qZA())},directives:[o.As,o.yK,d.k],encapsulation:2,changeDetection:0}),t})()},{path:"user-shape.component",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:15,vars:0,consts:[["shape","rectangle","name","John Doe","title","Engineer"],["shape","semi-round","name","John Doe","title","Engineer"],["shape","round","name","John Doe","title","Engineer"]],template:function(n,l){1&n&&(e.TgZ(0,"nb-card"),e.TgZ(1,"nb-card-body"),e.TgZ(2,"p"),e._uU(3,"Rectangle"),e.qZA(),e._UZ(4,"nb-user",0),e.qZA(),e.qZA(),e.TgZ(5,"nb-card"),e.TgZ(6,"nb-card-body"),e.TgZ(7,"p"),e._uU(8,"Semi-round"),e.qZA(),e._UZ(9,"nb-user",1),e.qZA(),e.qZA(),e.TgZ(10,"nb-card"),e.TgZ(11,"nb-card-body"),e.TgZ(12,"p"),e._uU(13,"Round"),e.qZA(),e._UZ(14,"nb-user",2),e.qZA(),e.qZA())},directives:[o.As,o.yK,d.k],encapsulation:2}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(h)],c.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.A,u.z,A]]}),t})()}}]);