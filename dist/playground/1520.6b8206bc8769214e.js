"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[1520],{1891:(U,S,s)=>{s.d(S,{s:()=>Q});var l=s(3668),L=s(3314),C=s(8178),w=s(8212);function f(g=0,a=C.P){return(!(0,w.k)(g)||g<0)&&(g=0),(!a||"function"!=typeof a.schedule)&&(a=C.P),new L.y(o=>(o.add(a.schedule(t,g,{subscriber:o,counter:0,period:g})),o))}function t(g){const{subscriber:a,counter:o,period:m}=g;a.next(o),this.schedule({subscriber:a,counter:o+1,period:m},m)}var p=s(3405),h=s(4099),c=s(8526),u=s(9279),N=s(2411),T=s(6813),I=s(8345);const x={leading:!0,trailing:!1};function O(g,a=x){return o=>o.lift(new z(g,!!a.leading,!!a.trailing))}class z{constructor(a,o,m){this.durationSelector=a,this.leading=o,this.trailing=m}call(a,o){return o.subscribe(new v(a,this.durationSelector,this.leading,this.trailing))}}class v extends I.Ds{constructor(a,o,m,P){super(a),this.destination=a,this.durationSelector=o,this._leading=m,this._trailing=P,this._hasValue=!1}_next(a){this._hasValue=!0,this._sendValue=a,this._throttled||(this._leading?this.send():this.throttle(a))}send(){const{_hasValue:a,_sendValue:o}=this;a&&(this.destination.next(o),this.throttle(o)),this._hasValue=!1,this._sendValue=void 0}throttle(a){const o=this.tryDurationSelector(a);o&&this.add(this._throttled=(0,I.ft)(o,new I.IY(this)))}tryDurationSelector(a){try{return this.durationSelector(a)}catch(o){return this.destination.error(o),null}}throttlingDone(){const{_throttled:a,_trailing:o}=this;a&&a.unsubscribe(),this._throttled=void 0,o&&this.send()}notifyNext(){this.throttlingDone()}notifyComplete(){this.throttlingDone()}}var D=s(8735),Z=s(9204),M=s(8805),J=s(6636),K=s(8053),y=s(8580),B=s(9490),H=s(9627),A=s(9468);let Q=(()=>{class g{constructor(o,m,P){this.elementRef=o,this.scrollService=m,this.dimensionsService=P,this.destroy$=new p.xQ,this.windowScroll=!1,this.elementScroll$=new p.xQ,this.windowScroll$=this.scrollService.onScroll().pipe((0,D.h)(()=>this.windowScroll)),this.bottomThreshold$=new p.xQ,this.topThreshold$=new p.xQ,this.throttleTime$=new h.X(0),this.bottomThreshold=new l.vpe(!0),this.topThreshold=new l.vpe(!0)}get elementScroll(){return!this.windowScroll}set throttleTime(o){this.throttleTime$.next(o)}get throttleTime(){return this.throttleTime$.value}set listenWindowScroll(o){this.windowScroll=(0,y.e)(o)}onElementScroll(){this.elementScroll&&this.elementScroll$.next()}ngAfterViewInit(){(0,c.T)(this.windowScroll$,this.elementScroll$).pipe((0,Z.w)(()=>this.getContainerDimensions()),(0,M.R)(this.destroy$)).subscribe(o=>this.checkPosition(o)),this.throttleTime$.pipe((0,Z.w)(()=>this.topThreshold$.pipe(O(()=>f(this.throttleTime)))),(0,M.R)(this.destroy$)).subscribe(()=>{this.topThreshold.emit()}),this.throttleTime$.pipe((0,Z.w)(()=>this.bottomThreshold$.pipe(O(()=>f(this.throttleTime)))),(0,M.R)(this.destroy$)).subscribe(()=>{this.bottomThreshold.emit()}),this.listItems.changes.pipe((0,Z.w)(()=>f(50).pipe((0,D.h)(()=>this.inSyncWithDom()),(0,J.q)(1),(0,M.R)((0,u.H)(1e3)))),(0,Z.w)(()=>this.getContainerDimensions()),(0,M.R)(this.destroy$)).subscribe(o=>this.checkPosition(o)),this.getContainerDimensions().subscribe(o=>this.checkPosition(o))}ngOnDestroy(){this.topThreshold$.complete(),this.bottomThreshold$.complete(),this.elementScroll$.complete(),this.destroy$.next(),this.destroy$.complete()}checkPosition({scrollHeight:o,scrollTop:m,clientHeight:P}){const _=null==this.lastScrollPosition,W=m<this.lastScrollPosition;(_||this.lastScrollPosition===m||m>this.lastScrollPosition)&&o-m-P<=this.threshold&&this.bottomThreshold$.next(),(_||W)&&m<=this.threshold&&this.topThreshold$.next(),this.lastScrollPosition=m}getContainerDimensions(){if(this.elementScroll){const{scrollTop:o,scrollHeight:m,clientHeight:P}=this.elementRef.nativeElement;return(0,N.of)({scrollTop:o,scrollHeight:m,clientHeight:P})}return(0,T.D)([this.scrollService.getPosition(),this.dimensionsService.getDimensions()]).pipe((0,K.U)(([o,m])=>({scrollTop:o.y,scrollHeight:m.scrollHeight,clientHeight:m.clientHeight})))}inSyncWithDom(){return this.elementRef.nativeElement.children.length===this.listItems.length}}return g.\u0275fac=function(o){return new(o||g)(l.Y36(l.SBq),l.Y36(H.H),l.Y36(A.m))},g.\u0275dir=l.lG2({type:g,selectors:[["","nbInfiniteList",""]],contentQueries:function(o,m,P){if(1&o&&l.Suo(P,B.q,4),2&o){let _;l.iGM(_=l.CRH())&&(m.listItems=_)}},hostBindings:function(o,m){1&o&&l.NdJ("scroll",function(){return m.onElementScroll()})},inputs:{threshold:"threshold",throttleTime:"throttleTime",listenWindowScroll:"listenWindowScroll"},outputs:{bottomThreshold:"bottomThreshold",topThreshold:"topThreshold"}}),g})()},6283:(U,S,s)=>{s.d(S,{B:()=>f});var l=s(3668),L=s(8805),C=s(3405),w=s(9490);let f=(()=>{class t{constructor(){this.destroy$=new C.xQ,this.startPage=1,this.pageChange=new l.vpe,this.observer=new IntersectionObserver(h=>this.checkForPageChange(h),{threshold:.5})}ngAfterViewInit(){this.listItems&&this.listItems.length&&this.observeItems(),this.listItems.changes.pipe((0,L.R)(this.destroy$)).subscribe(()=>this.observeItems())}ngOnDestroy(){this.observer.disconnect&&this.observer.disconnect()}observeItems(){this.listItems.forEach(h=>this.observer.observe(h.nativeElement))}checkForPageChange(h){const c=this.findMostVisiblePage(h);c&&this.currentPage!==c&&(this.currentPage=c,this.pageChange.emit(this.currentPage))}findMostVisiblePage(h){const c=new Map;for(const T of h){if(T.intersectionRatio<.5)continue;const I=this.elementIndex(T.target);if(-1===I)continue;const x=this.startPage+Math.floor(I/this.pageSize);let O=T.intersectionRatio;c.has(x)&&(O+=c.get(x)),c.set(x,O)}let N,u=0;return c.forEach((T,I)=>{T>u&&(u=T,N=I)}),N}elementIndex(h){return h.parentElement&&h.parentElement.children?Array.from(h.parentElement.children).indexOf(h):-1}}return t.\u0275fac=function(h){return new(h||t)},t.\u0275dir=l.lG2({type:t,selectors:[["","nbListPageTracker",""]],contentQueries:function(h,c,u){if(1&h&&l.Suo(u,w.q,4,l.SBq),2&h){let N;l.iGM(N=l.CRH())&&(c.listItems=N)}},inputs:{pageSize:"pageSize",startPage:"startPage"},outputs:{pageChange:"pageChange"}}),t})()},9490:(U,S,s)=>{s.d(S,{z:()=>f,q:()=>t});var l=s(3668);const L=[[["nb-list-item"]]],C=["nb-list-item"],w=["*"];let f=(()=>{class p{constructor(){this.role="list"}}return p.\u0275fac=function(c){return new(c||p)},p.\u0275cmp=l.Xpm({type:p,selectors:[["nb-list"]],hostVars:1,hostBindings:function(c,u){2&c&&l.uIk("role",u.role)},inputs:{role:"role"},ngContentSelectors:C,decls:1,vars:0,template:function(c,u){1&c&&(l.F$t(L),l.Hsn(0))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;overflow:auto}"]}),p})(),t=(()=>{class p{constructor(){this.role="listitem"}}return p.\u0275fac=function(c){return new(c||p)},p.\u0275cmp=l.Xpm({type:p,selectors:[["nb-list-item"]],hostVars:1,hostBindings:function(c,u){2&c&&l.uIk("role",u.role)},inputs:{role:"role"},ngContentSelectors:w,decls:1,vars:0,template:function(c,u){1&c&&(l.F$t(),l.Hsn(0))},styles:["[_nghost-%COMP%]{display:flex;align-items:center;flex-shrink:0}"]}),p})()},2335:(U,S,s)=>{s.d(S,{C:()=>t}),s(9490),s(6283),s(1891);var w=s(3668);let t=(()=>{class p{}return p.\u0275fac=function(c){return new(c||p)},p.\u0275mod=w.oAB({type:p}),p.\u0275inj=w.cJS({}),p})()},1520:(U,S,s)=>{s.r(S),s.d(S,{InfiniteListModule:()=>ct});var l=s(6019),L=s(2335),C=s(5082),w=s(1907),f=s(4301),t=s(3668),p=s(3596),h=s(6636),c=s(7434),u=s(5165),N=s(3507),T=s(7084);function x(i,r,e){return 0===e?[r]:(i.push(r),i)}var z=s(3049),v=s(9490),D=s(8053),Z=s(5250),M=s(4522);let y=(()=>{class i{constructor(e){this.http=e}load(e,n){const d=(e-1)%7*n;return this.http.get("assets/data/news.json").pipe((0,D.U)(b=>b.splice(d,n)),(0,Z.g)(1500))}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(M.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();var B=s(9627),H=s(9468),A=s(634),E=s(1891),Q=s(6283);let g=(()=>{class i{constructor(){this.label="Loading"}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["nb-news-post-placeholder"]],hostVars:1,hostBindings:function(e,n){2&e&&t.uIk("aria-label",n.label)},decls:3,vars:0,consts:[[1,"title-placeholder"],[1,"text-placeholder"],[1,"link-placeholder"]],template:function(e,n){1&e&&(t._UZ(0,"div",0),t._UZ(1,"div",1),t._UZ(2,"div",2))},styles:["[_nghost-%COMP%]{display:block;width:100%}.title-placeholder[_ngcontent-%COMP%]{height:1.8rem;margin-bottom:.5rem;width:80%}.text-placeholder[_ngcontent-%COMP%]{height:4rem;margin-bottom:1rem}.link-placeholder[_ngcontent-%COMP%]{height:1.25rem;width:5rem}[_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:var(--background-basic-color-4)}"]}),i})(),a=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["nb-news-post"]],inputs:{post:"post"},decls:7,vars:3,consts:[[1,"h5"]],template:function(e,n){1&e&&(t.TgZ(0,"article"),t.TgZ(1,"h2",0),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"a"),t._uU(6,"Read full article"),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Oqu(n.post.title),t.xp6(2),t.Oqu(n.post.text),t.xp6(1),t.uIk("href",n.post.link,t.LSH))},encapsulation:2}),i})();function o(i,r){1&i&&(t.TgZ(0,"nb-list-item"),t._UZ(1,"nb-news-post-placeholder"),t.qZA())}function m(i,r){if(1&i&&(t.TgZ(0,"nb-list-item"),t._UZ(1,"nb-news-post",2),t.qZA()),2&i){const e=r.$implicit;t.xp6(1),t.Q6J("post",e)}}function P(i,r){1&i&&(t.TgZ(0,"nb-list-item"),t._UZ(1,"nb-news-post-placeholder"),t.qZA())}let _=(()=>{class i{constructor(e,n,d,b,R,F,$){this.newsService=e,this.router=n,this.route=d,this.scrollService=b,this.layoutService=R,this.platformId=F,this.window=$,this.news=[],this.topPlaceholders=[],this.bottomPlaceholders=[],this.pageSize=10,this.loadingNext=!1,this.loadingPrevious=!1,(0,l.NF)(this.platformId)&&this.window.history.scrollRestoration&&(this.initialScrollRestoration=$.history.scrollRestoration,history.scrollRestoration="manual")}ngOnInit(){const{page:e}=this.route.snapshot.queryParams;this.startPage=e?Number.parseInt(e,10):100,this.pageToLoadNext=this.startPage}ngOnDestroy(){this.initialScrollRestoration&&(this.window.history.scrollRestoration=this.initialScrollRestoration)}updateUrl(e){this.router.navigate(["."],{queryParams:{page:e},replaceUrl:!0,relativeTo:this.route,queryParamsHandling:"merge"})}loadPrevious(){this.loadingPrevious||1===this.startPage||(this.loadingPrevious=!0,this.topPlaceholders=new Array(this.pageSize),this.restoreScrollPosition(),this.startPage--,this.newsService.load(this.startPage,this.pageSize).subscribe(e=>{this.topPlaceholders=[],this.news.unshift(...e),this.loadingPrevious=!1},e=>this.startPage++))}loadNext(){this.loadingNext||(this.loadingNext=!0,this.bottomPlaceholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(e=>{this.bottomPlaceholders=[],this.news.push(...e),this.loadingNext=!1,this.pageToLoadNext++}))}restoreScrollPosition(){(0,p.z)(this.layoutService.getDimensions(),this.scrollService.getPosition(),this.listItems.changes.pipe((0,h.q)(1)),this.layoutService.getDimensions(),this.scrollService.getPosition()).pipe(function(i,r){return arguments.length>=2?function(n){return(0,T.z)((0,c.R)(i,r),(0,u.h)(1),(0,N.d)(r))(n)}:function(n){return(0,T.z)((0,c.R)((d,b,R)=>i(d,b,R+1)),(0,u.h)(1))(n)}}(x,[])).subscribe(([e,n,,d,b])=>{const X=b.y,j=d.scrollHeight-e.scrollHeight;n.y+j!==X&&this.scrollService.scrollTo(null,X+j)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(y),t.Y36(f.F0),t.Y36(f.gz),t.Y36(B.H),t.Y36(H.m),t.Y36(t.Lbi),t.Y36(z.Q3))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],viewQuery:function(e,n){if(1&e&&t.Gf(v.q,5,t.SBq),2&e){let d;t.iGM(d=t.CRH())&&(n.listItems=d)}},features:[t._Bn([y])],decls:5,vars:6,consts:[["nbInfiniteList","","listenWindowScroll","","nbListPageTracker","",3,"threshold","pageSize","startPage","topThreshold","bottomThreshold","pageChange"],[4,"ngFor","ngForOf"],[3,"post"]],template:function(e,n){1&e&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-list",0),t.NdJ("topThreshold",function(){return n.loadPrevious()})("bottomThreshold",function(){return n.loadNext()})("pageChange",function(b){return n.updateUrl(b)}),t.YNc(2,o,2,0,"nb-list-item",1),t.YNc(3,m,2,1,"nb-list-item",1),t.YNc(4,P,2,0,"nb-list-item",1),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("threshold",500)("pageSize",n.pageSize)("startPage",n.startPage),t.xp6(1),t.Q6J("ngForOf",n.topPlaceholders),t.xp6(1),t.Q6J("ngForOf",n.news),t.xp6(1),t.Q6J("ngForOf",n.bottomPlaceholders))},directives:[A.As,v.z,E.s,Q.B,l.sg,v.q,g,a],styles:["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{flex:1 0 4rem}"]}),i})();function Y(i,r){if(1&i&&(t.TgZ(0,"nb-list-item"),t._UZ(1,"nb-news-post",4),t.qZA()),2&i){const e=r.$implicit;t.xp6(1),t.Q6J("post",e)}}function W(i,r){1&i&&(t.TgZ(0,"nb-list-item"),t._UZ(1,"nb-news-post-placeholder"),t.qZA())}function V(i,r){if(1&i&&(t.TgZ(0,"nb-list-item"),t._UZ(1,"nb-news-post",4),t.qZA()),2&i){const e=r.$implicit;t.xp6(1),t.Q6J("post",e)}}function G(i,r){1&i&&(t.TgZ(0,"nb-list-item"),t._UZ(1,"nb-news-post-placeholder"),t.qZA())}let q=(()=>{class i{constructor(e){this.newsService=e,this.firstCard={news:[],placeholders:[],loading:!1,pageToLoadNext:1},this.secondCard={news:[],placeholders:[],loading:!1,pageToLoadNext:1},this.pageSize=10}loadNext(e){e.loading||(e.loading=!0,e.placeholders=new Array(this.pageSize),this.newsService.load(e.pageToLoadNext,this.pageSize).subscribe(n=>{e.placeholders=[],e.news.push(...n),e.loading=!1,e.pageToLoadNext++}))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],features:[t._Bn([y])],decls:12,vars:6,consts:[[1,"own-scroll"],["nbInfiniteList","",3,"threshold","bottomThreshold"],[4,"ngFor","ngForOf"],["nbInfiniteList","","listenWindowScroll","",3,"threshold","bottomThreshold"],[3,"post"]],template:function(e,n){1&e&&(t.TgZ(0,"nb-card",0),t.TgZ(1,"nb-card-header"),t._uU(2," Own scroll "),t.qZA(),t.TgZ(3,"nb-list",1),t.NdJ("bottomThreshold",function(){return n.loadNext(n.firstCard)}),t.YNc(4,Y,2,1,"nb-list-item",2),t.YNc(5,W,2,0,"nb-list-item",2),t.qZA(),t.qZA(),t.TgZ(6,"nb-card"),t.TgZ(7,"nb-card-header"),t._uU(8," Window scroll "),t.qZA(),t.TgZ(9,"nb-list",3),t.NdJ("bottomThreshold",function(){return n.loadNext(n.secondCard)}),t.YNc(10,V,2,1,"nb-list-item",2),t.YNc(11,G,2,0,"nb-list-item",2),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("threshold",500),t.xp6(1),t.Q6J("ngForOf",n.firstCard.news),t.xp6(1),t.Q6J("ngForOf",n.firstCard.placeholders),t.xp6(4),t.Q6J("threshold",500),t.xp6(1),t.Q6J("ngForOf",n.secondCard.news),t.xp6(1),t.Q6J("ngForOf",n.secondCard.placeholders))},directives:[A.As,A.nd,v.z,E.s,l.sg,v.q,a,g],styles:["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{flex:1 0 4rem}","[_nghost-%COMP%]{display:flex}nb-card[_ngcontent-%COMP%]{flex:1 1 45%;margin:0 2.5%}nb-card.own-scroll[_ngcontent-%COMP%]{height:30rem}"]}),i})();function k(i,r){if(1&i&&(t.TgZ(0,"nb-list-item"),t._UZ(1,"nb-news-post",2),t.qZA()),2&i){const e=r.$implicit;t.xp6(1),t.Q6J("post",e)}}function tt(i,r){1&i&&(t.TgZ(0,"nb-list-item"),t._UZ(1,"nb-news-post-placeholder"),t.qZA())}let et=(()=>{class i{constructor(e){this.newsService=e,this.news=[],this.placeholders=[],this.pageSize=10,this.pageToLoadNext=1,this.loading=!1}loadNext(){this.loading||(this.loading=!0,this.placeholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(e=>{this.placeholders=[],this.news.push(...e),this.loading=!1,this.pageToLoadNext++}))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],features:[t._Bn([y])],decls:4,vars:3,consts:[["nbInfiniteList","","listenWindowScroll","",3,"threshold","bottomThreshold"],[4,"ngFor","ngForOf"],[3,"post"]],template:function(e,n){1&e&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-list",0),t.NdJ("bottomThreshold",function(){return n.loadNext()}),t.YNc(2,k,2,1,"nb-list-item",1),t.YNc(3,tt,2,0,"nb-list-item",1),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("threshold",500),t.xp6(1),t.Q6J("ngForOf",n.news),t.xp6(1),t.Q6J("ngForOf",n.placeholders))},directives:[A.As,v.z,E.s,l.sg,v.q,a,g],styles:["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{flex:1 0 4rem}"]}),i})();var it=s(8735),st=s(7895);function nt(i,r){if(1&i&&(t.TgZ(0,"nb-list-item"),t._UZ(1,"nb-news-post",3),t.qZA()),2&i){const e=r.$implicit;t.xp6(1),t.Q6J("post",e)}}function ot(i,r){1&i&&(t.TgZ(0,"nb-list-item"),t._UZ(1,"nb-news-post-placeholder"),t.qZA())}function lt(i,r){const e=i.getComputedStyle(r),n=parseInt(e.getPropertyValue("margin-top"),10),d=parseInt(e.getPropertyValue("margin-bottom"),10);return r.offsetHeight+n+d}const at=[{path:"infinite-list-placeholders.component",component:_},{path:"infinite-list-scroll-modes.component",component:q},{path:"infinite-list-showcase.component",component:et},{path:"infinite-news-list.component",component:(()=>{class i{constructor(e,n,d,b,R,F){this.newsService=e,this.router=n,this.route=d,this.scrollService=b,this.platformId=R,this.window=F,this.news=[],this.placeholders=[],this.pageSize=10,this.loadingNext=!1,this.loadingPrevious=!1,(0,l.NF)(this.platformId)&&this.window.history.scrollRestoration&&(this.initialScrollRestoration=F.history.scrollRestoration,history.scrollRestoration="manual")}ngOnInit(){const{page:e}=this.route.snapshot.queryParams;this.startPage=e?Number.parseInt(e,10):1,this.pageToLoadNext=this.startPage}ngOnDestroy(){this.initialScrollRestoration&&(this.window.history.scrollRestoration=this.initialScrollRestoration)}updateUrl(e){this.router.navigate(["."],{queryParams:{page:e},replaceUrl:!0,relativeTo:this.route,queryParamsHandling:"merge"})}loadPrevious(){this.loadingPrevious||1===this.startPage||(this.loadingPrevious=!0,this.newsService.load(this.startPage-1,this.pageSize).subscribe(e=>{this.news.unshift(...e),this.loadingPrevious=!1,this.restoreScrollPosition(),this.startPage--}))}loadNext(){this.loadingNext||(this.loadingNext=!0,this.placeholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(e=>{this.placeholders=[],this.news.push(...e),this.loadingNext=!1,this.pageToLoadNext++}))}restoreScrollPosition(){const e=this.listItems.length>0?this.listItems.first.nativeElement:null;this.listItems.changes.pipe((0,D.U)(()=>this.listItems.first.nativeElement),(0,it.h)(n=>n!==e),(0,h.q)(1)).subscribe(()=>{let n=0;for(const{nativeElement:d}of this.listItems.toArray()){if(d===e)break;n+=lt(this.window,d)}this.scrollService.scrollTo(null,n)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(y),t.Y36(f.F0),t.Y36(f.gz),t.Y36(B.H),t.Y36(t.Lbi),t.Y36(z.Q3))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],viewQuery:function(e,n){if(1&e&&t.Gf(v.q,5,t.SBq),2&e){let d;t.iGM(d=t.CRH())&&(n.listItems=d)}},features:[t._Bn([y])],decls:5,vars:6,consts:[[3,"nbSpinner"],["nbInfiniteList","","listenWindowScroll","","nbListPageTracker","",3,"threshold","pageSize","startPage","topThreshold","bottomThreshold","pageChange"],[4,"ngFor","ngForOf"],[3,"post"]],template:function(e,n){1&e&&(t.TgZ(0,"nb-card"),t._UZ(1,"div",0),t.TgZ(2,"nb-list",1),t.NdJ("topThreshold",function(){return n.loadPrevious()})("bottomThreshold",function(){return n.loadNext()})("pageChange",function(b){return n.updateUrl(b)}),t.YNc(3,nt,2,1,"nb-list-item",2),t.YNc(4,ot,2,0,"nb-list-item",2),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("nbSpinner",n.loadingPrevious),t.xp6(1),t.Q6J("threshold",500)("pageSize",n.pageSize)("startPage",n.startPage),t.xp6(1),t.Q6J("ngForOf",n.news),t.xp6(1),t.Q6J("ngForOf",n.placeholders))},directives:[A.As,st.Q,v.z,E.s,Q.B,l.sg,v.q,a,g],styles:["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{flex:1 0 4rem}"]}),i})()}];let ht=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[f.Bz.forChild(at)],f.Bz]}),i})(),ct=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.ez,L.C,C.z,w.u,ht]]}),i})()}}]);