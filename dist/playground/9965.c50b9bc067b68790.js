"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[9965],{8739:(x,A,i)=>{i.d(A,{N:()=>p});var u=i(3668),t=i(9133),Z=i(8580),B=i(163),d=i(6019),q=i(5492);function U(g,T){1&g&&u._UZ(0,"nb-icon",6)}function y(g,T){1&g&&u._UZ(0,"nb-icon",7)}const v=["*"];let p=(()=>{class g{constructor(c,l,C,_,G){this.changeDetector=c,this.renderer=l,this.hostElement=C,this.zone=_,this.statusService=G,this.onChange=()=>{},this.onTouched=()=>{},this._checked=!1,this._disabled=!1,this.status="basic",this._indeterminate=!1,this.checkedChange=new u.vpe}get checked(){return this._checked}set checked(c){this._checked=(0,Z.e)(c)}get disabled(){return this._disabled}set disabled(c){this._disabled=(0,Z.e)(c)}get indeterminate(){return this._indeterminate}set indeterminate(c){this._indeterminate=(0,Z.e)(c)}get primary(){return"primary"===this.status}get success(){return"success"===this.status}get warning(){return"warning"===this.status}get danger(){return"danger"===this.status}get info(){return"info"===this.status}get basic(){return"basic"===this.status}get control(){return"control"===this.status}get additionalClasses(){return this.statusService.isCustomStatus(this.status)?[this.statusService.getStatusClass(this.status)]:[]}ngAfterViewInit(){this.zone.runOutsideAngular(()=>setTimeout(()=>{this.renderer.addClass(this.hostElement.nativeElement,"nb-transition")}))}registerOnChange(c){this.onChange=c}registerOnTouched(c){this.onTouched=c}writeValue(c){this._checked=c,this.changeDetector.markForCheck()}setDisabledState(c){this.disabled=(0,Z.e)(c),this.changeDetector.markForCheck()}setTouched(){this.onTouched()}updateValueAndIndeterminate(c){const l=c.target;this.checked=l.checked,this.checkedChange.emit(this.checked),this.onChange(this.checked),this.indeterminate=l.indeterminate}}return g.\u0275fac=function(c){return new(c||g)(u.Y36(u.sBO),u.Y36(u.Qsj),u.Y36(u.SBq),u.Y36(u.R0b),u.Y36(B.Y))},g.\u0275cmp=u.Xpm({type:g,selectors:[["nb-checkbox"]],hostVars:16,hostBindings:function(c,l){2&c&&(u.Tol(l.additionalClasses),u.ekj("status-primary",l.primary)("status-success",l.success)("status-warning",l.warning)("status-danger",l.danger)("status-info",l.info)("status-basic",l.basic)("status-control",l.control))},inputs:{checked:"checked",disabled:"disabled",status:"status",indeterminate:"indeterminate"},outputs:{checkedChange:"checkedChange"},features:[u._Bn([{provide:t.JU,useExisting:(0,u.Gpc)(()=>g),multi:!0}])],ngContentSelectors:v,decls:7,vars:9,consts:[[1,"label"],["type","checkbox",1,"native-input","visually-hidden",3,"disabled","checked","indeterminate","change","blur","click"],[1,"custom-checkbox"],["icon","minus-bold-outline","pack","nebular-essentials","class","custom-checkbox-icon",4,"ngIf"],["icon","checkmark-bold-outline","pack","nebular-essentials","class","custom-checkbox-icon",4,"ngIf"],[1,"text"],["icon","minus-bold-outline","pack","nebular-essentials",1,"custom-checkbox-icon"],["icon","checkmark-bold-outline","pack","nebular-essentials",1,"custom-checkbox-icon"]],template:function(c,l){1&c&&(u.F$t(),u.TgZ(0,"label",0),u.TgZ(1,"input",1),u.NdJ("change",function(_){return l.updateValueAndIndeterminate(_)})("blur",function(){return l.setTouched()})("click",function(_){return _.stopPropagation()}),u.qZA(),u.TgZ(2,"span",2),u.YNc(3,U,1,0,"nb-icon",3),u.YNc(4,y,1,0,"nb-icon",4),u.qZA(),u.TgZ(5,"span",5),u.Hsn(6),u.qZA(),u.qZA()),2&c&&(u.xp6(1),u.Q6J("disabled",l.disabled)("checked",l.checked)("indeterminate",l.indeterminate),u.xp6(1),u.ekj("indeterminate",l.indeterminate)("checked",l.checked),u.xp6(1),u.Q6J("ngIf",l.indeterminate),u.xp6(1),u.Q6J("ngIf",l.checked&&!l.indeterminate))},directives:[d.O5,q.f],styles:["[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{position:relative;display:inline-flex;align-items:center;margin:0;min-height:inherit}[_nghost-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]{flex-shrink:0}.nb-transition[_nghost-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]{transition-duration:.15s;transition-property:background-color,border,box-shadow;transition-timing-function:ease-in}.nb-transition[_nghost-%COMP%]   .text[_ngcontent-%COMP%]{transition-duration:.15s;transition-property:color;transition-timing-function:ease-in}"],changeDetection:0}),g})()},3973:(x,A,i)=>{i.d(A,{M:()=>B});var u=i(5861),t=i(3004),Z=i(3668);let B=(()=>{class d{}return d.\u0275fac=function(U){return new(U||d)},d.\u0275mod=Z.oAB({type:d}),d.\u0275inj=Z.cJS({imports:[[u.P,t.K]]}),d})()},9965:(x,A,i)=>{i.r(A),i.d(A,{ButtonGroupModule:()=>H});var u=i(6019),t=i(3668);let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})();var B=i(5082),d=i(3004),q=i(6630),U=i(1220),y=i(3973),v=i(4301),p=i(634),g=i(3405),T=i(1915),c=i(8526),l=i(8805),C=i(9204),_=i(8735),G=i(1125),N=i(5686),f=i(8580),k=i(9196);const D=new t.OlP("NB_BUTTON_GROUP");var P=i(163);let b=(()=>{class n extends k.A{constructor(e,o,a,r,m,S){super(e,o,a,r,m),this.renderer=e,this.hostElement=o,this.cd=a,this.zone=r,this.statusService=m,this.buttonGroup=S,this._pressedChange$=new g.xQ,this.appearance="filled",this._pressed=!1,this.pressedChange=new t.vpe}get pressedChange$(){return this._pressedChange$.asObservable()}get pressed(){return this._pressed}set pressed(e){this.pressed!==(0,f.e)(e)&&(this._pressed=!this.pressed,this.pressedChange.emit(this.pressed),this._pressedChange$.next({source:this,pressed:this.pressed}))}get basic(){return!this.pressed}get primary(){return this.pressed&&("basic"===this.status||"primary"===this.status)}get success(){return this.pressed&&"success"===this.status}get info(){return this.pressed&&"info"===this.status}get warning(){return this.pressed&&"warning"===this.status}get danger(){return this.pressed&&"danger"===this.status}get control(){return this.pressed&&"control"===this.status}get additionalClasses(){return this.statusService.isCustomStatus(this.status)?[this.statusService.getStatusClass(this.status)]:[]}onClick(){var e;((null===(e=this.buttonGroup)||void 0===e?void 0:e.multiple)||!this.pressed)&&(this.pressed=!this.pressed)}_updatePressed(e){this.pressed=e,this.cd.markForCheck()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(P.Y),t.Y36(D,8))},n.\u0275dir=t.lG2({type:n,selectors:[["button","nbButtonToggle",""]],hostVars:17,hostBindings:function(e,o){1&e&&t.NdJ("click",function(){return o.onClick()}),2&e&&(t.uIk("aria-pressed",o.pressed),t.Tol(o.additionalClasses),t.ekj("status-basic",o.basic)("status-primary",o.primary)("status-success",o.success)("status-info",o.info)("status-warning",o.warning)("status-danger",o.danger)("status-control",o.control))},inputs:{appearance:"appearance",value:"value",pressed:"pressed"},outputs:{pressedChange:"pressedChange"},exportAs:["nbButtonToggle"],features:[t._Bn([{provide:k.A,useExisting:n}]),t.qOj]}),n})();const F=["*"];let h=(()=>{class n{constructor(e,o){this.cd=e,this.statusService=o,this.lastEmittedValue=[],this.destroy$=new g.xQ,this.buttonsChange$=new g.xQ,this.size="medium",this.status="basic",this.shape="rectangle",this.appearance="filled",this._disabled=!1,this._multiple=!1,this.valueChange=new t.vpe,this.role="group"}get disabled(){return this._disabled}set disabled(e){this.disabled!==(0,f.e)(e)&&(this._disabled=!this.disabled)}get multiple(){return this._multiple}set multiple(e){this._multiple=(0,f.e)(e)}get filled(){return"filled"===this.appearance}set filled(e){(0,f.e)(e)&&(this.appearance="filled")}get outline(){return"outline"===this.appearance}set outline(e){(0,f.e)(e)&&(this.appearance="outline")}get ghost(){return"ghost"===this.appearance}set ghost(e){(0,f.e)(e)&&(this.appearance="ghost")}get additionalClasses(){return this.statusService.isCustomStatus(this.status)?[this.statusService.getStatusClass(this.status)]:[]}ngOnChanges({size:e,status:o,shape:a,multiple:r,filled:m,outline:S,ghost:tt,disabled:et}){var M;(e||o||a||r||m||S||tt||et)&&this.syncButtonsProperties((null===(M=this.buttons)||void 0===M?void 0:M.toArray())||[])}ngAfterContentInit(){this.buttonsChange$.pipe((0,l.R)(this.destroy$)).subscribe(e=>{this.listenButtonPressedState(e),this.syncButtonsProperties(e)}),this.buttons.changes.pipe((0,C.w)(e=>(0,T.D)(Promise.resolve(e.toArray()))),(0,l.R)(this.destroy$)).subscribe(this.buttonsChange$),this.buttonsChange$.next(this.buttons.toArray())}listenButtonPressedState(e){const o=e.filter(r=>r instanceof b);if(!o.length)return;const a=o.map(r=>r.pressedChange$);(0,c.T)(...a).pipe((0,_.h)(({pressed:r})=>!this.multiple&&r),(0,l.R)((0,c.T)(this.buttonsChange$,this.destroy$))).subscribe(({source:r})=>{o.filter(m=>m!==r).forEach(m=>m._updatePressed(!1))}),(0,c.T)(...a).pipe((0,G.O)(""),(0,N.b)(0),(0,l.R)((0,c.T)(this.buttonsChange$,this.destroy$))).subscribe(()=>this.emitCurrentValue(o))}syncButtonsProperties(e){e.forEach(o=>{o.updateProperties({appearance:this.appearance,size:this.size,status:this.status,shape:this.shape,disabled:this.disabled})})}emitCurrentValue(e){const o=e.filter(a=>a.pressed&&void 0!==a.value).map(a=>a.value);0===o.length&&0===this.lastEmittedValue.length||(this.valueChange.emit(o),this.lastEmittedValue=o)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(P.Y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-button-group"]],contentQueries:function(e,o,a){if(1&e&&t.Suo(a,k.A,4),2&e){let r;t.iGM(r=t.CRH())&&(o.buttons=r)}},hostVars:3,hostBindings:function(e,o){2&e&&(t.uIk("role",o.role),t.Tol(o.additionalClasses))},inputs:{size:"size",status:"status",shape:"shape",appearance:"appearance",disabled:"disabled",multiple:"multiple",filled:"filled",outline:"outline",ghost:"ghost"},outputs:{valueChange:"valueChange"},features:[t._Bn([{provide:D,useExisting:n}]),t.TTD],ngContentSelectors:F,decls:1,vars:0,template:function(e,o){1&e&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),n})(),E=(()=>{class n{constructor(){this.isBold=!1,this.isItalic=!0,this.isUnderline=!1}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-button-group-showcase"]],decls:11,vars:9,consts:[["multiple",""],["nbButtonToggle","",3,"pressed","pressedChange"],["nbButtonToggle","",1,"text-italic",3,"pressed","pressedChange"],["nbButtonToggle","",1,"text-underline",3,"pressed","pressedChange"],[1,"text"]],template:function(e,o){1&e&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body"),t.TgZ(2,"nb-button-group",0),t.TgZ(3,"button",1),t.NdJ("pressedChange",function(r){return o.isBold=r}),t._uU(4,"Bold"),t.qZA(),t.TgZ(5,"button",2),t.NdJ("pressedChange",function(r){return o.isItalic=r}),t._uU(6,"Italic"),t.qZA(),t.TgZ(7,"button",3),t.NdJ("pressedChange",function(r){return o.isUnderline=r}),t._uU(8,"Underline"),t.qZA(),t.qZA(),t.TgZ(9,"p",4),t._uU(10," A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. "),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("pressed",o.isBold),t.xp6(2),t.Q6J("pressed",o.isItalic),t.xp6(2),t.Q6J("pressed",o.isUnderline),t.xp6(2),t.ekj("subtitle",o.isBold)("text-italic",o.isItalic)("text-underline",o.isUnderline))},directives:[p.As,p.yK,h,b],styles:[".text[_ngcontent-%COMP%]{margin:1rem 0 0;line-height:var(--text-subtitle-line-height)}.text-italic[_ngcontent-%COMP%]{font-style:italic}.text-underline[_ngcontent-%COMP%]{text-decoration:underline}"],changeDetection:0}),n})(),J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-button-group-multiple"]],decls:9,vars:0,consts:[["multiple",""],["nbButtonToggle","","pressed",""],["nbButtonToggle",""]],template:function(e,o){1&e&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body"),t.TgZ(2,"nb-button-group",0),t.TgZ(3,"button",1),t._uU(4,"A"),t.qZA(),t.TgZ(5,"button",1),t._uU(6,"B"),t.qZA(),t.TgZ(7,"button",2),t._uU(8,"C"),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[p.As,p.yK,h,b],encapsulation:2,changeDetection:0}),n})(),z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-button-group-sizes"]],decls:67,vars:0,consts:[[1,"example-items-col"],["size","tiny"],["nbButtonToggle",""],["size","small"],["size","medium"],["size","large"],["size","giant"]],template:function(e,o){1&e&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body",0),t.TgZ(2,"nb-button-group",1),t.TgZ(3,"button",2),t._uU(4,"A"),t.qZA(),t.TgZ(5,"button",2),t._uU(6,"B"),t.qZA(),t.TgZ(7,"button",2),t._uU(8,"C"),t.qZA(),t.TgZ(9,"button",2),t._uU(10,"D"),t.qZA(),t.TgZ(11,"button",2),t._uU(12,"E"),t.qZA(),t.TgZ(13,"button",2),t._uU(14,"F"),t.qZA(),t.qZA(),t.TgZ(15,"nb-button-group",3),t.TgZ(16,"button",2),t._uU(17,"A"),t.qZA(),t.TgZ(18,"button",2),t._uU(19,"B"),t.qZA(),t.TgZ(20,"button",2),t._uU(21,"C"),t.qZA(),t.TgZ(22,"button",2),t._uU(23,"D"),t.qZA(),t.TgZ(24,"button",2),t._uU(25,"E"),t.qZA(),t.TgZ(26,"button",2),t._uU(27,"F"),t.qZA(),t.qZA(),t.TgZ(28,"nb-button-group",4),t.TgZ(29,"button",2),t._uU(30,"A"),t.qZA(),t.TgZ(31,"button",2),t._uU(32,"B"),t.qZA(),t.TgZ(33,"button",2),t._uU(34,"C"),t.qZA(),t.TgZ(35,"button",2),t._uU(36,"D"),t.qZA(),t.TgZ(37,"button",2),t._uU(38,"E"),t.qZA(),t.TgZ(39,"button",2),t._uU(40,"F"),t.qZA(),t.qZA(),t.TgZ(41,"nb-button-group",5),t.TgZ(42,"button",2),t._uU(43,"A"),t.qZA(),t.TgZ(44,"button",2),t._uU(45,"B"),t.qZA(),t.TgZ(46,"button",2),t._uU(47,"C"),t.qZA(),t.TgZ(48,"button",2),t._uU(49,"D"),t.qZA(),t.TgZ(50,"button",2),t._uU(51,"E"),t.qZA(),t.TgZ(52,"button",2),t._uU(53,"F"),t.qZA(),t.qZA(),t.TgZ(54,"nb-button-group",6),t.TgZ(55,"button",2),t._uU(56,"A"),t.qZA(),t.TgZ(57,"button",2),t._uU(58,"B"),t.qZA(),t.TgZ(59,"button",2),t._uU(60,"C"),t.qZA(),t.TgZ(61,"button",2),t._uU(62,"D"),t.qZA(),t.TgZ(63,"button",2),t._uU(64,"E"),t.qZA(),t.TgZ(65,"button",2),t._uU(66,"F"),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[p.As,p.yK,h,b],styles:["nb-button-group[_ngcontent-%COMP%]{margin:.5rem 0 1rem}nb-button-group[_ngcontent-%COMP%]:last-child{margin-bottom:0}"],changeDetection:0}),n})(),I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-button-group-appearances"]],decls:41,vars:0,consts:[[1,"example-items-col"],["filled",""],["nbButtonToggle",""],["outline",""],["ghost",""]],template:function(e,o){1&e&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body",0),t.TgZ(2,"nb-button-group",1),t.TgZ(3,"button",2),t._uU(4,"A"),t.qZA(),t.TgZ(5,"button",2),t._uU(6,"B"),t.qZA(),t.TgZ(7,"button",2),t._uU(8,"C"),t.qZA(),t.TgZ(9,"button",2),t._uU(10,"D"),t.qZA(),t.TgZ(11,"button",2),t._uU(12,"E"),t.qZA(),t.TgZ(13,"button",2),t._uU(14,"F"),t.qZA(),t.qZA(),t.TgZ(15,"nb-button-group",3),t.TgZ(16,"button",2),t._uU(17,"A"),t.qZA(),t.TgZ(18,"button",2),t._uU(19,"B"),t.qZA(),t.TgZ(20,"button",2),t._uU(21,"C"),t.qZA(),t.TgZ(22,"button",2),t._uU(23,"D"),t.qZA(),t.TgZ(24,"button",2),t._uU(25,"E"),t.qZA(),t.TgZ(26,"button",2),t._uU(27,"F"),t.qZA(),t.qZA(),t.TgZ(28,"nb-button-group",4),t.TgZ(29,"button",2),t._uU(30,"A"),t.qZA(),t.TgZ(31,"button",2),t._uU(32,"B"),t.qZA(),t.TgZ(33,"button",2),t._uU(34,"C"),t.qZA(),t.TgZ(35,"button",2),t._uU(36,"D"),t.qZA(),t.TgZ(37,"button",2),t._uU(38,"E"),t.qZA(),t.TgZ(39,"button",2),t._uU(40,"F"),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[p.As,p.yK,h,b],styles:["nb-button-group[_ngcontent-%COMP%]{margin:.5rem 0 1rem}nb-button-group[_ngcontent-%COMP%]:last-child{margin-bottom:0}"],changeDetection:0}),n})(),w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-button-group-shapes"]],decls:41,vars:0,consts:[[1,"example-items-col"],["shape","rectangle"],["nbButtonToggle",""],["shape","semi-round"],["shape","round"]],template:function(e,o){1&e&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body",0),t.TgZ(2,"nb-button-group",1),t.TgZ(3,"button",2),t._uU(4,"A"),t.qZA(),t.TgZ(5,"button",2),t._uU(6,"B"),t.qZA(),t.TgZ(7,"button",2),t._uU(8,"C"),t.qZA(),t.TgZ(9,"button",2),t._uU(10,"D"),t.qZA(),t.TgZ(11,"button",2),t._uU(12,"E"),t.qZA(),t.TgZ(13,"button",2),t._uU(14,"F"),t.qZA(),t.qZA(),t.TgZ(15,"nb-button-group",3),t.TgZ(16,"button",2),t._uU(17,"A"),t.qZA(),t.TgZ(18,"button",2),t._uU(19,"B"),t.qZA(),t.TgZ(20,"button",2),t._uU(21,"C"),t.qZA(),t.TgZ(22,"button",2),t._uU(23,"D"),t.qZA(),t.TgZ(24,"button",2),t._uU(25,"E"),t.qZA(),t.TgZ(26,"button",2),t._uU(27,"F"),t.qZA(),t.qZA(),t.TgZ(28,"nb-button-group",4),t.TgZ(29,"button",2),t._uU(30,"A"),t.qZA(),t.TgZ(31,"button",2),t._uU(32,"B"),t.qZA(),t.TgZ(33,"button",2),t._uU(34,"C"),t.qZA(),t.TgZ(35,"button",2),t._uU(36,"D"),t.qZA(),t.TgZ(37,"button",2),t._uU(38,"E"),t.qZA(),t.TgZ(39,"button",2),t._uU(40,"F"),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[p.As,p.yK,h,b],styles:["nb-button-group[_ngcontent-%COMP%]{margin:.5rem 0 1rem}nb-button-group[_ngcontent-%COMP%]:last-child{margin-bottom:0}"],changeDetection:0}),n})();var O=i(2563);let R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:28,vars:0,consts:[["nbButton",""],["multiple",""],["nbButtonToggle","","pressed",""],["nbButtonToggle",""]],template:function(e,o){1&e&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body"),t.TgZ(2,"p"),t._uU(3,"A group of buttons:"),t.qZA(),t.TgZ(4,"nb-button-group"),t.TgZ(5,"button",0),t._uU(6,"A"),t.qZA(),t.TgZ(7,"button",0),t._uU(8,"B"),t.qZA(),t.TgZ(9,"button",0),t._uU(10,"C"),t.qZA(),t.TgZ(11,"button",0),t._uU(12,"D"),t.qZA(),t.TgZ(13,"button",0),t._uU(14,"E"),t.qZA(),t.qZA(),t.TgZ(15,"p"),t._uU(16,"A group of button toggles:"),t.qZA(),t.TgZ(17,"nb-button-group",1),t.TgZ(18,"button",2),t._uU(19,"A"),t.qZA(),t.TgZ(20,"button",3),t._uU(21,"B"),t.qZA(),t.TgZ(22,"button",3),t._uU(23,"C"),t.qZA(),t.TgZ(24,"button",3),t._uU(25,"D"),t.qZA(),t.TgZ(26,"button",3),t._uU(27,"E"),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[p.As,p.yK,h,O.D,b],styles:["nb-button-group[_ngcontent-%COMP%]{margin:.5rem 0 1rem}nb-button-group[_ngcontent-%COMP%]:last-child{margin-bottom:0}"],changeDetection:0}),n})();var Q=i(1707),V=i(8739),Y=i(8939);function $(n,s){if(1&n&&(t.TgZ(0,"nb-radio",23),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function K(n,s){if(1&n&&(t.TgZ(0,"nb-radio",24),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function j(n,s){if(1&n&&(t.TgZ(0,"div",29),t.TgZ(1,"nb-button-group",30),t.TgZ(2,"button",31),t._uU(3,"Button"),t.qZA(),t.TgZ(4,"button",31),t._uU(5,"Button"),t.qZA(),t.TgZ(6,"button",31),t._uU(7,"Button"),t.qZA(),t.qZA(),t.TgZ(8,"nb-button-group",32),t.TgZ(9,"button",33),t._uU(10,"Toggle"),t.qZA(),t.TgZ(11,"button",33),t._uU(12,"Toggle"),t.qZA(),t.TgZ(13,"button",33),t._uU(14,"Toggle"),t.qZA(),t.qZA(),t.qZA()),2&n){const e=s.$implicit,o=t.oxw().$implicit,a=t.oxw();t.ekj("control-status-example","control"===e),t.xp6(1),t.Q6J("status",e)("appearance",o)("size",a.selectedSize)("shape",a.selectedShape)("disabled",a.disabledGroup),t.xp6(1),t.Q6J("disabled",a.disabledFirstButton),t.xp6(2),t.Q6J("disabled",a.disabledSecondButton),t.xp6(2),t.Q6J("disabled",a.disabledThirdButton),t.xp6(2),t.Q6J("status",e)("appearance",o)("size",a.selectedSize)("shape",a.selectedShape)("multiple",a.multiple)("disabled",a.disabledGroup),t.xp6(1),t.Q6J("disabled",a.disabledFirstButton),t.xp6(2),t.Q6J("disabled",a.disabledSecondButton),t.xp6(2),t.Q6J("disabled",a.disabledThirdButton)}}function X(n,s){if(1&n&&(t.TgZ(0,"div",25),t.TgZ(1,"p",26),t._uU(2),t.qZA(),t.TgZ(3,"div",27),t.YNc(4,j,15,19,"div",28),t.qZA(),t.qZA()),2&n){const e=s.$implicit,o=t.oxw();t.xp6(2),t.hij("",e,":"),t.xp6(2),t.Q6J("ngForOf",o.statuses)}}const L=[{path:"button-group-showcase.component",component:E},{path:"button-group-multiple.component",component:J},{path:"button-group-sizes.component",component:z},{path:"button-group-appearances.component",component:I},{path:"button-group-shapes.component",component:w},{path:"button-and-button-toggle-groups.component",component:R},{path:"button-group-interactive.component",component:(()=>{class n{constructor(){this.appearances=["filled","outline","ghost"],this.shapes=["rectangle","semi-round","round"],this.statuses=["basic","primary","success","info","warning","danger","control"],this.sizes=["tiny","small","medium","large","giant"],this.selectedShape="rectangle",this.selectedSize="medium",this.multiple=!0,this.disabledGroup=!1,this.disabledFirstButton=!1,this.disabledSecondButton=!1,this.disabledThirdButton=!1}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:60,vars:10,consts:[[1,"subtitle"],["name","size",3,"value","valueChange"],["name","size",3,"value",4,"ngFor","ngForOf"],["name","shape",3,"value","valueChange"],["name","shape",3,"value",4,"ngFor","ngForOf"],[3,"checked","checkedChange"],[1,"reference-row"],["nbButton","","status","basic"],["nbButton","","status","primary"],["nbButton","","status","success"],["nbButton","","status","info"],["nbButton","","status","warning"],["nbButton","","status","danger"],[1,"control-status-example"],["nbButton","","status","control"],["nbButtonToggle","","status","basic"],["nbButtonToggle","","status","primary"],["nbButtonToggle","","status","success"],["nbButtonToggle","","status","info"],["nbButtonToggle","","status","warning"],["nbButtonToggle","","status","danger"],["nbButtonToggle","","status","control"],["class","appearance-container",4,"ngFor","ngForOf"],["name","size",3,"value"],["name","shape",3,"value"],[1,"appearance-container"],[1,"subtitle","appearance-name"],[1,"appearance-row"],["class","status-container",3,"control-status-example",4,"ngFor","ngForOf"],[1,"status-container"],[3,"status","appearance","size","shape","disabled"],["nbButton","",3,"disabled"],[3,"status","appearance","size","shape","multiple","disabled"],["nbButtonToggle","",3,"disabled"]],template:function(e,o){1&e&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body"),t.TgZ(2,"fieldset"),t.TgZ(3,"legend",0),t._uU(4,"Size:"),t.qZA(),t.TgZ(5,"nb-radio-group",1),t.NdJ("valueChange",function(r){return o.selectedSize=r}),t.YNc(6,$,2,2,"nb-radio",2),t.qZA(),t.qZA(),t.TgZ(7,"fieldset"),t.TgZ(8,"legend",0),t._uU(9,"Shape:"),t.qZA(),t.TgZ(10,"nb-radio-group",3),t.NdJ("valueChange",function(r){return o.selectedShape=r}),t.YNc(11,K,2,2,"nb-radio",4),t.qZA(),t.qZA(),t.TgZ(12,"fieldset"),t.TgZ(13,"nb-checkbox",5),t.NdJ("checkedChange",function(r){return o.multiple=r}),t._uU(14,"Multiple"),t.qZA(),t.qZA(),t.TgZ(15,"fieldset"),t.TgZ(16,"nb-checkbox",5),t.NdJ("checkedChange",function(r){return o.disabledGroup=r}),t._uU(17,"Disabled group"),t.qZA(),t.qZA(),t.TgZ(18,"fieldset"),t.TgZ(19,"nb-checkbox",5),t.NdJ("checkedChange",function(r){return o.disabledFirstButton=r}),t._uU(20,"Disable first button"),t.qZA(),t.qZA(),t.TgZ(21,"fieldset"),t.TgZ(22,"nb-checkbox",5),t.NdJ("checkedChange",function(r){return o.disabledSecondButton=r}),t._uU(23,"Disable second button"),t.qZA(),t.qZA(),t.TgZ(24,"fieldset"),t.TgZ(25,"nb-checkbox",5),t.NdJ("checkedChange",function(r){return o.disabledThirdButton=r}),t._uU(26,"Disable third button"),t.qZA(),t.qZA(),t.TgZ(27,"div",6),t.TgZ(28,"button",7),t._uU(29,"Reference button"),t.qZA(),t.TgZ(30,"button",8),t._uU(31,"Reference button"),t.qZA(),t.TgZ(32,"button",9),t._uU(33,"Reference button"),t.qZA(),t.TgZ(34,"button",10),t._uU(35,"Reference button"),t.qZA(),t.TgZ(36,"button",11),t._uU(37,"Reference button"),t.qZA(),t.TgZ(38,"button",12),t._uU(39,"Reference button"),t.qZA(),t.TgZ(40,"div",13),t.TgZ(41,"button",14),t._uU(42,"Reference button"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"div",6),t.TgZ(44,"button",15),t._uU(45,"Reference toggle"),t.qZA(),t.TgZ(46,"button",16),t._uU(47,"Reference toggle"),t.qZA(),t.TgZ(48,"button",17),t._uU(49,"Reference toggle"),t.qZA(),t.TgZ(50,"button",18),t._uU(51,"Reference toggle"),t.qZA(),t.TgZ(52,"button",19),t._uU(53,"Reference toggle"),t.qZA(),t.TgZ(54,"button",20),t._uU(55,"Reference toggle"),t.qZA(),t.TgZ(56,"div",13),t.TgZ(57,"button",21),t._uU(58,"Reference toggle"),t.qZA(),t.qZA(),t.qZA(),t.YNc(59,X,5,2,"div",22),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("value",o.selectedSize),t.xp6(1),t.Q6J("ngForOf",o.sizes),t.xp6(4),t.Q6J("value",o.selectedShape),t.xp6(1),t.Q6J("ngForOf",o.shapes),t.xp6(2),t.Q6J("checked",o.multiple),t.xp6(3),t.Q6J("checked",o.disabledGroup),t.xp6(3),t.Q6J("checked",o.disabledFirstButton),t.xp6(3),t.Q6J("checked",o.disabledSecondButton),t.xp6(3),t.Q6J("checked",o.disabledThirdButton),t.xp6(34),t.Q6J("ngForOf",o.appearances))},directives:[p.As,p.yK,Q.M,u.sg,V.N,O.D,b,Y.r,h],styles:["fieldset[_ngcontent-%COMP%]{border:0;padding:0}nb-radio-group[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:1rem}.reference-row[_ngcontent-%COMP%]{display:flex;align-items:center}.reference-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:1rem}.appearance-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.appearance-row[_ngcontent-%COMP%]{display:flex;flex:1 0 100%}.appearance-row[_ngcontent-%COMP%]:not(:last-child){padding-bottom:1rem}.appearance-name[_ngcontent-%COMP%]{margin-top:1.5rem;margin-bottom:0;text-transform:capitalize;flex:1 0 100%}.status-container[_ngcontent-%COMP%]{padding:1rem;border-radius:.25rem}nb-button-group[_ngcontent-%COMP%] + nb-button-group[_ngcontent-%COMP%]{margin-top:1rem}"],changeDetection:0}),n})()},{path:"button-group-disabled.component",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:9,vars:0,consts:[["disabled",""],["nbButtonToggle",""]],template:function(e,o){1&e&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body"),t.TgZ(2,"nb-button-group",0),t.TgZ(3,"button",1),t._uU(4,"A"),t.qZA(),t.TgZ(5,"button",1),t._uU(6,"B"),t.qZA(),t.TgZ(7,"button",1),t._uU(8,"C"),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[p.As,p.yK,h,b],encapsulation:2,changeDetection:0}),n})()},{path:"button-group-statuses.component",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:45,vars:0,consts:[[1,"example-items-col"],["status","basic"],["nbButton",""],["status","primary"],["status","info"],["status","warning"],["status","danger"],[1,"control-status-example"],["status","control"]],template:function(e,o){1&e&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body",0),t.TgZ(2,"nb-button-group",1),t.TgZ(3,"button",2),t._uU(4,"A"),t.qZA(),t.TgZ(5,"button",2),t._uU(6,"B"),t.qZA(),t.TgZ(7,"button",2),t._uU(8,"C"),t.qZA(),t.qZA(),t.TgZ(9,"nb-button-group",3),t.TgZ(10,"button",2),t._uU(11,"A"),t.qZA(),t.TgZ(12,"button",2),t._uU(13,"B"),t.qZA(),t.TgZ(14,"button",2),t._uU(15,"C"),t.qZA(),t.qZA(),t.TgZ(16,"nb-button-group",4),t.TgZ(17,"button",2),t._uU(18,"A"),t.qZA(),t.TgZ(19,"button",2),t._uU(20,"B"),t.qZA(),t.TgZ(21,"button",2),t._uU(22,"C"),t.qZA(),t.qZA(),t.TgZ(23,"nb-button-group",5),t.TgZ(24,"button",2),t._uU(25,"A"),t.qZA(),t.TgZ(26,"button",2),t._uU(27,"B"),t.qZA(),t.TgZ(28,"button",2),t._uU(29,"C"),t.qZA(),t.qZA(),t.TgZ(30,"nb-button-group",6),t.TgZ(31,"button",2),t._uU(32,"A"),t.qZA(),t.TgZ(33,"button",2),t._uU(34,"B"),t.qZA(),t.TgZ(35,"button",2),t._uU(36,"C"),t.qZA(),t.qZA(),t.TgZ(37,"div",7),t.TgZ(38,"nb-button-group",8),t.TgZ(39,"button",2),t._uU(40,"A"),t.qZA(),t.TgZ(41,"button",2),t._uU(42,"B"),t.qZA(),t.TgZ(43,"button",2),t._uU(44,"C"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[p.As,p.yK,h,O.D],encapsulation:2,changeDetection:0}),n})()},{path:"button-group-value-change.component",component:(()=>{class n{constructor(e){this.cd=e,this.singleSelectGroupValue=[],this.multiSelectGroupValue=[]}updateSingleSelectGroupValue(e){this.singleSelectGroupValue=e,this.cd.markForCheck()}updateMultiSelectGroupValue(e){this.multiSelectGroupValue=e,this.cd.markForCheck()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:24,vars:6,consts:[[3,"valueChange"],["nbButtonToggle","","value","One"],["nbButtonToggle","","value","Two"],["nbButtonToggle","","value","Three"],["multiple","",3,"valueChange"]],template:function(e,o){1&e&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-body"),t.TgZ(2,"p"),t._uU(3),t.ALo(4,"json"),t.qZA(),t.TgZ(5,"nb-button-group",0),t.NdJ("valueChange",function(r){return o.updateSingleSelectGroupValue(r)}),t.TgZ(6,"button",1),t._uU(7,"One"),t.qZA(),t.TgZ(8,"button",2),t._uU(9,"Two"),t.qZA(),t.TgZ(10,"button",3),t._uU(11,"Three"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"nb-card"),t.TgZ(13,"nb-card-body"),t.TgZ(14,"p"),t._uU(15),t.ALo(16,"json"),t.qZA(),t.TgZ(17,"nb-button-group",4),t.NdJ("valueChange",function(r){return o.updateMultiSelectGroupValue(r)}),t.TgZ(18,"button",1),t._uU(19,"One"),t.qZA(),t.TgZ(20,"button",2),t._uU(21,"Two"),t.qZA(),t.TgZ(22,"button",3),t._uU(23,"Three"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.hij(" Group with single select value: ",t.lcZ(4,2,o.singleSelectGroupValue)," "),t.xp6(12),t.hij(" Group with single select value: ",t.lcZ(16,4,o.multiSelectGroupValue)," "))},directives:[p.As,p.yK,h,b],pipes:[u.Ts],encapsulation:2,changeDetection:0}),n})()}];let W=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[v.Bz.forChild(L)],v.Bz]}),n})(),H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.ez,B.z,d.K,q.T,Z,U.Y,y.M,W]]}),n})()}}]);