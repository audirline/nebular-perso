"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[4822],{1891:(B,b,s)=>{s.d(b,{s:()=>W});var r=s(3668),R=s(3314),v=s(8178),A=s(8212);function T(p=0,l=v.P){return(!(0,A.k)(p)||p<0)&&(p=0),(!l||"function"!=typeof l.schedule)&&(l=v.P),new R.y(o=>(o.add(l.schedule(y,p,{subscriber:o,counter:0,period:p})),o))}function y(p){const{subscriber:l,counter:o,period:m}=p;l.next(o),this.schedule({subscriber:l,counter:o+1,period:m},m)}var d=s(3405),c=s(4099),u=s(8526),t=s(9279),I=s(2411),P=s(6813),S=s(8345);const w={leading:!0,trailing:!1};function N(p,l=w){return o=>o.lift(new H(p,!!l.leading,!!l.trailing))}class H{constructor(l,o,m){this.durationSelector=l,this.leading=o,this.trailing=m}call(l,o){return o.subscribe(new U(l,this.durationSelector,this.leading,this.trailing))}}class U extends S.Ds{constructor(l,o,m,C){super(l),this.destination=l,this.durationSelector=o,this._leading=m,this._trailing=C,this._hasValue=!1}_next(l){this._hasValue=!0,this._sendValue=l,this._throttled||(this._leading?this.send():this.throttle(l))}send(){const{_hasValue:l,_sendValue:o}=this;l&&(this.destination.next(o),this.throttle(o)),this._hasValue=!1,this._sendValue=void 0}throttle(l){const o=this.tryDurationSelector(l);o&&this.add(this._throttled=(0,S.ft)(o,new S.IY(this)))}tryDurationSelector(l){try{return this.durationSelector(l)}catch(o){return this.destination.error(o),null}}throttlingDone(){const{_throttled:l,_trailing:o}=this;l&&l.unsubscribe(),this._throttled=void 0,o&&this.send()}notifyNext(){this.throttlingDone()}notifyComplete(){this.throttlingDone()}}var x=s(8735),E=s(9204),D=s(8805),Y=s(6636),G=s(8053),V=s(8580),F=s(9490),$=s(9627),j=s(9468);let W=(()=>{class p{constructor(o,m,C){this.elementRef=o,this.scrollService=m,this.dimensionsService=C,this.destroy$=new d.xQ,this.windowScroll=!1,this.elementScroll$=new d.xQ,this.windowScroll$=this.scrollService.onScroll().pipe((0,x.h)(()=>this.windowScroll)),this.bottomThreshold$=new d.xQ,this.topThreshold$=new d.xQ,this.throttleTime$=new c.X(0),this.bottomThreshold=new r.vpe(!0),this.topThreshold=new r.vpe(!0)}get elementScroll(){return!this.windowScroll}set throttleTime(o){this.throttleTime$.next(o)}get throttleTime(){return this.throttleTime$.value}set listenWindowScroll(o){this.windowScroll=(0,V.e)(o)}onElementScroll(){this.elementScroll&&this.elementScroll$.next()}ngAfterViewInit(){(0,u.T)(this.windowScroll$,this.elementScroll$).pipe((0,E.w)(()=>this.getContainerDimensions()),(0,D.R)(this.destroy$)).subscribe(o=>this.checkPosition(o)),this.throttleTime$.pipe((0,E.w)(()=>this.topThreshold$.pipe(N(()=>T(this.throttleTime)))),(0,D.R)(this.destroy$)).subscribe(()=>{this.topThreshold.emit()}),this.throttleTime$.pipe((0,E.w)(()=>this.bottomThreshold$.pipe(N(()=>T(this.throttleTime)))),(0,D.R)(this.destroy$)).subscribe(()=>{this.bottomThreshold.emit()}),this.listItems.changes.pipe((0,E.w)(()=>T(50).pipe((0,x.h)(()=>this.inSyncWithDom()),(0,Y.q)(1),(0,D.R)((0,t.H)(1e3)))),(0,E.w)(()=>this.getContainerDimensions()),(0,D.R)(this.destroy$)).subscribe(o=>this.checkPosition(o)),this.getContainerDimensions().subscribe(o=>this.checkPosition(o))}ngOnDestroy(){this.topThreshold$.complete(),this.bottomThreshold$.complete(),this.elementScroll$.complete(),this.destroy$.next(),this.destroy$.complete()}checkPosition({scrollHeight:o,scrollTop:m,clientHeight:C}){const L=null==this.lastScrollPosition,O=m<this.lastScrollPosition;(L||this.lastScrollPosition===m||m>this.lastScrollPosition)&&o-m-C<=this.threshold&&this.bottomThreshold$.next(),(L||O)&&m<=this.threshold&&this.topThreshold$.next(),this.lastScrollPosition=m}getContainerDimensions(){if(this.elementScroll){const{scrollTop:o,scrollHeight:m,clientHeight:C}=this.elementRef.nativeElement;return(0,I.of)({scrollTop:o,scrollHeight:m,clientHeight:C})}return(0,P.D)([this.scrollService.getPosition(),this.dimensionsService.getDimensions()]).pipe((0,G.U)(([o,m])=>({scrollTop:o.y,scrollHeight:m.scrollHeight,clientHeight:m.clientHeight})))}inSyncWithDom(){return this.elementRef.nativeElement.children.length===this.listItems.length}}return p.\u0275fac=function(o){return new(o||p)(r.Y36(r.SBq),r.Y36($.H),r.Y36(j.m))},p.\u0275dir=r.lG2({type:p,selectors:[["","nbInfiniteList",""]],contentQueries:function(o,m,C){if(1&o&&r.Suo(C,F.q,4),2&o){let L;r.iGM(L=r.CRH())&&(m.listItems=L)}},hostBindings:function(o,m){1&o&&r.NdJ("scroll",function(){return m.onElementScroll()})},inputs:{threshold:"threshold",throttleTime:"throttleTime",listenWindowScroll:"listenWindowScroll"},outputs:{bottomThreshold:"bottomThreshold",topThreshold:"topThreshold"}}),p})()},6283:(B,b,s)=>{s.d(b,{B:()=>T});var r=s(3668),R=s(8805),v=s(3405),A=s(9490);let T=(()=>{class y{constructor(){this.destroy$=new v.xQ,this.startPage=1,this.pageChange=new r.vpe,this.observer=new IntersectionObserver(c=>this.checkForPageChange(c),{threshold:.5})}ngAfterViewInit(){this.listItems&&this.listItems.length&&this.observeItems(),this.listItems.changes.pipe((0,R.R)(this.destroy$)).subscribe(()=>this.observeItems())}ngOnDestroy(){this.observer.disconnect&&this.observer.disconnect()}observeItems(){this.listItems.forEach(c=>this.observer.observe(c.nativeElement))}checkForPageChange(c){const u=this.findMostVisiblePage(c);u&&this.currentPage!==u&&(this.currentPage=u,this.pageChange.emit(this.currentPage))}findMostVisiblePage(c){const u=new Map;for(const P of c){if(P.intersectionRatio<.5)continue;const S=this.elementIndex(P.target);if(-1===S)continue;const w=this.startPage+Math.floor(S/this.pageSize);let N=P.intersectionRatio;u.has(w)&&(N+=u.get(w)),u.set(w,N)}let I,t=0;return u.forEach((P,S)=>{P>t&&(t=P,I=S)}),I}elementIndex(c){return c.parentElement&&c.parentElement.children?Array.from(c.parentElement.children).indexOf(c):-1}}return y.\u0275fac=function(c){return new(c||y)},y.\u0275dir=r.lG2({type:y,selectors:[["","nbListPageTracker",""]],contentQueries:function(c,u,t){if(1&c&&r.Suo(t,A.q,4,r.SBq),2&c){let I;r.iGM(I=r.CRH())&&(u.listItems=I)}},inputs:{pageSize:"pageSize",startPage:"startPage"},outputs:{pageChange:"pageChange"}}),y})()},9490:(B,b,s)=>{s.d(b,{z:()=>T,q:()=>y});var r=s(3668);const R=[[["nb-list-item"]]],v=["nb-list-item"],A=["*"];let T=(()=>{class d{constructor(){this.role="list"}}return d.\u0275fac=function(u){return new(u||d)},d.\u0275cmp=r.Xpm({type:d,selectors:[["nb-list"]],hostVars:1,hostBindings:function(u,t){2&u&&r.uIk("role",t.role)},inputs:{role:"role"},ngContentSelectors:v,decls:1,vars:0,template:function(u,t){1&u&&(r.F$t(R),r.Hsn(0))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;overflow:auto}"]}),d})(),y=(()=>{class d{constructor(){this.role="listitem"}}return d.\u0275fac=function(u){return new(u||d)},d.\u0275cmp=r.Xpm({type:d,selectors:[["nb-list-item"]],hostVars:1,hostBindings:function(u,t){2&u&&r.uIk("role",t.role)},inputs:{role:"role"},ngContentSelectors:A,decls:1,vars:0,template:function(u,t){1&u&&(r.F$t(),r.Hsn(0))},styles:["[_nghost-%COMP%]{display:flex;align-items:center;flex-shrink:0}"]}),d})()},2335:(B,b,s)=>{s.d(b,{C:()=>y}),s(9490),s(6283),s(1891);var A=s(3668);let y=(()=>{class d{}return d.\u0275fac=function(u){return new(u||d)},d.\u0275mod=A.oAB({type:d}),d.\u0275inj=A.cJS({}),d})()},4822:(B,b,s)=>{s.r(b),s.d(b,{AuthPlaygroundModule:()=>pt,filterInterceptorRequest:()=>k});var r=s(6019),R=s(9133),v=s(4522),A=s(5082),T=s(6512),y=s(2335),d=s(9204),c=s(3785),u=s(8299),t=s(3668);let I=(()=>{class n{constructor(e,i){this.injector=e,this.filter=i}intercept(e,i){return this.filter(e)?i.handle(e):this.authService.isAuthenticatedOrRefresh().pipe((0,d.w)(a=>a?this.authService.getToken().pipe((0,d.w)(g=>{const f=`Bearer ${g.getValue()}`;return e=e.clone({setHeaders:{Authorization:f}}),i.handle(e)})):i.handle(e)))}get authService(){return this.injector.get(c._)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.zs3),t.LFG(u.nN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var P=s(3582),S=s(1004),w=s(7431),N=s(2369),H=s(7406),U=s(3203);class x{}const E=new t.OlP("Nebular Security Options"),D=n=>Object.assign({},n),Y=n=>Object.assign([],n),G=n=>{const h=n.parent;return delete n.parent,h};let V=(()=>{class n{constructor(e={}){this.settings=e,this.state={},e.accessControl&&this.setAccessControl(e.accessControl)}setAccessControl(e){for(const[i,a]of Object.entries(e)){const g=D(a),f=G(g);this.register(i,f,g)}}register(e,i=null,a={}){this.validateRole(e),this.state[e]={parent:i};for(const[g,f]of Object.entries(a))this.allow(e,g,Y("string"==typeof f?[f]:f))}allow(e,i,a){this.validateRole(e),this.getRole(e)||this.register(e,null,{}),a="string"==typeof a?[a]:a;let g=Y(this.getRoleResources(e,i));g=g.concat(a),this.state[e][i]=g.filter((f,Q)=>g.indexOf(f)===Q)}can(e,i,a){return this.validateResource(a),this.getRoleParent(e)&&this.can(this.getRoleParent(e),i,a)||this.exactCan(e,i,a)}getRole(e){return this.state[e]}validateRole(e){if(!e)throw new Error("NbAclService: role name cannot be empty")}validateResource(e){if(!e||[n.ANY_RESOURCE].includes(e))throw new Error("NbAclService: cannot use empty or bulk '*' resource placeholder with 'can' method")}exactCan(e,i,a){const g=this.getRoleResources(e,i);return g.includes(a)||g.includes(n.ANY_RESOURCE)}getRoleResources(e,i){return this.getRoleAbilities(e)[i]||[]}getRoleAbilities(e){const i=D(this.state[e]||{});return G(D(this.state[e]||{})),i}getRoleParent(e){return this.state[e]?this.state[e].parent:null}}return n.ANY_RESOURCE="*",n.\u0275fac=function(e){return new(e||n)(t.LFG(E,8))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var F=s(8053);let $=(()=>{class n{constructor(e,i){this.roleProvider=e,this.acl=i}isGranted(e,i){return this.roleProvider.getRole().pipe((0,F.U)(a=>Array.isArray(a)?a:[a]),(0,F.U)(a=>a.some(g=>this.acl.can(g,e,i))))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(x),t.LFG(V))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),j=(()=>{class n{static forRoot(e){return{ngModule:n,providers:[{provide:E,useValue:e},V,$]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez]]}),n})();var Z=s(4301);let W=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-playground-auth"]],decls:1,vars:0,template:function(e,i){1&e&&t._UZ(0,"router-outlet")},directives:[Z.lC],encapsulation:2}),n})();var p=s(9074),l=s(3861),o=s(5154),m=s(5304),C=s(3361),L=s(2579),M=s(761),O=s(634),z=s(8805),J=s(3405);let q=(()=>{class n{constructor(e,i,a){this.templateRef=e,this.viewContainer=i,this.accessChecker=a,this.destroy$=new J.xQ,this.hasView=!1}set nbIsGranted([e,i]){this.accessChecker.isGranted(e,i).pipe((0,z.R)(this.destroy$)).subscribe(a=>{a&&!this.hasView?(this.viewContainer.createEmbeddedView(this.templateRef),this.hasView=!0):!a&&this.hasView&&(this.viewContainer.clear(),this.hasView=!1)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Rgc),t.Y36(t.s_b),t.Y36($))},n.\u0275dir=t.lG2({type:n,selectors:[["","nbIsGranted",""]],inputs:{nbIsGranted:"nbIsGranted"}}),n})();function _(n,h){1&n&&(t.TgZ(0,"button"),t._uU(1,"Post Comment"),t.qZA())}function tt(n,h){1&n&&(t.TgZ(0,"button"),t._uU(1,"Post Comment"),t.qZA())}const et=function(){return["create","comments"]};let nt=(()=>{class n{constructor(e){this.accessChecker=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36($))},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-actions-test"]],decls:13,vars:5,consts:[[4,"ngIf"],[4,"nbIsGranted"]],template:function(e,i){1&e&&(t.TgZ(0,"nb-layout"),t.TgZ(1,"nb-layout-column"),t.TgZ(2,"nb-card"),t.TgZ(3,"nb-card-header"),t._uU(4,"Service usage"),t.qZA(),t.TgZ(5,"nb-card-body"),t.YNc(6,_,2,0,"button",0),t.ALo(7,"async"),t.qZA(),t.qZA(),t.TgZ(8,"nb-card"),t.TgZ(9,"nb-card-header"),t._uU(10,"Directive usage"),t.qZA(),t.TgZ(11,"nb-card-body"),t.YNc(12,tt,2,0,"button",1),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("ngIf",t.lcZ(7,2,i.accessChecker.isGranted("create","comments"))),t.xp6(6),t.Q6J("nbIsGranted",t.DdM(4,et)))},directives:[M.Aq,M.dP,O.As,O.nd,O.yK,r.O5,q],pipes:[r.Ov],encapsulation:2}),n})();var st=s(5722);let K=(()=>{class n{constructor(e,i){this.authService=e,this.router=i}canActivate(){return this.authService.isAuthenticated().pipe((0,st.b)(e=>{e||this.router.navigate(["auth/login"])}))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(c._),t.LFG(Z.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var ot=s(2411),it=s(5250),rt=s(2047),lt=s(5170),X=s(9490);function at(n,h){if(1&n&&(t.TgZ(0,"nb-list-item"),t._uU(1),t.qZA()),2&n){const e=h.$implicit;t.xp6(1),t.lnq(" ",e.region,", ",e.name," (",e.year,") ")}}function ct(n,h){if(1&n&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-header"),t._uU(2," Alain'wines "),t.qZA(),t.TgZ(3,"nb-list"),t.YNc(4,at,2,3,"nb-list-item",2),t.ALo(5,"async"),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",t.lcZ(5,1,e.wines$))}}const ut=[{path:"",component:W,children:[{path:"",component:p.A,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:l.Y},{path:"register",component:o.e},{path:"logout",component:m.f},{path:"request-password",component:C.C},{path:"reset-password",component:L.j}]}]},{path:"acl/acl-test.component",component:nt},{path:"auth-guard.service",canActivate:[K],component:W},{path:"api-calls.component",canActivate:[K],component:(()=>{class n{constructor(e,i,a,g={}){this.authService=e,this.http=i,this.router=a,this.options=g,this.redirectDelay=0,this.strategy="",this.redirectDelay=this.getConfigValue("forms.logout.redirectDelay"),this.strategy=this.getConfigValue("forms.logout.strategy"),this.authService.onTokenChange().subscribe(f=>{this.token=null,f&&f.isValid()&&(this.token=f)})}logout(){this.authService.logout(this.strategy).pipe((0,it.g)(this.redirectDelay)).subscribe(e=>this.router.navigate(["/auth/login"]))}loadWines(){this.wines$=this.http.get("http://localhost:4400/api/wines").pipe((0,rt.K)(e=>(e instanceof v.UA&&401===e.status&&this.router.navigate(["/auth/login"]),(0,ot.of)([]))))}getConfigValue(e){return(0,lt.hB)(this.options,e,null)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c._),t.Y36(v.eN),t.Y36(Z.F0),t.Y36(u.h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["nb-playground-api-calls"]],decls:15,vars:3,consts:[["nbButton","","status","primary",3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(e,i){if(1&e&&(t._UZ(0,"router-outlet"),t.TgZ(1,"nb-layout"),t.TgZ(2,"nb-layout-column"),t.TgZ(3,"nb-card"),t.TgZ(4,"nb-card-body"),t.TgZ(5,"h2"),t._uU(6,"You are authenticated"),t.qZA(),t.TgZ(7,"p"),t._uU(8,"You can call the secured API"),t.qZA(),t.TgZ(9,"button",0),t.NdJ("click",function(){return i.loadWines()}),t._uU(10,"Call API"),t.qZA(),t.TgZ(11,"button",0),t.NdJ("click",function(){return i.logout()}),t._uU(12,"Sign out"),t.qZA(),t.qZA(),t.qZA(),t.YNc(13,ct,6,3,"nb-card",1),t.ALo(14,"async"),t.qZA(),t.qZA()),2&e){let a;t.xp6(13),t.Q6J("ngIf",null==(a=t.lcZ(14,1,i.wines$))?null:a.length)}},directives:[Z.lC,M.Aq,M.dP,O.As,O.yK,r.O5,O.nd,X.z,r.sg,X.q],pipes:[r.Ov],encapsulation:2}),n})()}];let dt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[Z.Bz.forChild(ut)],Z.Bz]}),n})(),mt=(()=>{class n{constructor(e){this.authService=e}getRole(){return this.authService.onTokenChange().pipe((0,F.U)(e=>e instanceof N.OS&&e.isValid()?e.getPayload().role:"guest"))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(c._))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();function k(n){return["http://localhost:4400/api/auth/","http://other.url/with/no/token/injected/"].some(h=>n.url.includes(h))}let pt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[K,{provide:v.TP,useClass:I,multi:!0},{provide:u.nN,useValue:k},{provide:x,useClass:mt}],imports:[[r.ez,R.u5,v.JF,dt,A.z,T.B,y.C,P.S.forRoot({forms:{login:{strategy:"password",redirectDelay:1e3,socialLinks:[{url:"https://github.com/akveo",target:"_blank",title:"GitHub"},{url:"https://www.facebook.com/akveo",target:"_blank",icon:"home-outline"},{url:"https://www.facebook.com/akveo",target:"_blank",title:"Twitter"}]}},strategies:[S.r.setup({name:"dummy",alwaysFail:!0,delay:1e3}),w.O.setup({name:"email",token:{class:N.OS},baseEndpoint:"http://localhost:4400/api/auth/",logout:{redirect:{success:"/auth/login",failure:"/auth/login"}},requestPass:{redirect:{success:"/auth/reset-password"}},resetPass:{redirect:{success:"/auth/login"}},errors:{key:"data.errors"}}),H.F.setup({name:"password",clientId:"test",clientSecret:"secret",baseEndpoint:"http://localhost:4400/api/auth/",token:{endpoint:"token",grantType:U.sY.PASSWORD,class:N.FN},refresh:{endpoint:"refresh-token",grantType:U.sY.REFRESH_TOKEN}})]}),j.forRoot({accessControl:{guest:{view:["news","comments"]},user:{parent:"guest",create:"comments"},moderator:{parent:"user",create:"news",remove:"*"}}})]]}),n})()}}]);