"use strict";(self.webpackChunk_infuseai_piperider_ui=self.webpackChunk_infuseai_piperider_ui||[]).push([[914],{6669:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var l=n(9439),r=n(4190),i=n(7094),a=n(8625),s=n(2791),o=n(8039),d=n(8693),c=n(5650),u=n(3159),m=n(1573),x=n(1892),j=n(8982),p=n(8493),h=n(4304),f=n(4494),b=n(5456),g=n(5575),v=n(7369),C=n(1364),S=n(4749),w=n(5761),y=n(9645),D=n(3530),P=n(5405),R=n(5850),T=n(7677),k=n(184);function _(e){var t,n,_=e.data,E=e.columnName,N=e.tableName;(0,P.jr)("Comparison Report: Table Column Details"),(0,P.Lp)({eventName:R.mk.PAGE_VIEW,eventProperties:{type:R.bB,page:"column-details-page"}});var O=_.base.tables,z=_.input.tables,H=(0,a.TH)(),Q=(0,l.Z)(H,2)[1],W=(0,s.useState)(0),I=(0,l.Z)(W,2),M=I[0],Z=I[1],B=0===E.length;(0,S.n)((function(e){return e.setReportRawData}))({base:_.base,input:_.input});var F=S.n.getState(),G=F.tableColumnsOnly,K=void 0===G?[]:G,Y=F.assertionsOnly,L=K.find((function(e){return(0,l.Z)(e,1)[0]===N}));if(!N||!O||!z||!L)return(0,k.jsx)(o.o,{isSingleReport:!1,children:(0,k.jsx)(p.J,{text:"No profile data found for table name: ".concat(N)})});var V=(0,l.Z)(L,3),q=V[1],J=q.base,U=q.target,X=V[2],$=O[N],ee=z[N],te=(null===$||void 0===$?void 0:$.columns)||{},ne=(null===ee||void 0===ee?void 0:ee.columns)||{},le=te[E],re=ne[E],ie=re||le,ae=(le||{}).type,se=(re||{}).type,oe=(0,T.SR)((null===Y||void 0===Y||null===(t=Y.base)||void 0===t?void 0:t.filter((function(e){return(null===e||void 0===e?void 0:e.table)===N})))||[]),de=oe.failed,ce=oe.total,ue=(0,T.SR)((null===Y||void 0===Y||null===(n=Y.target)||void 0===n?void 0:n.filter((function(e){return(null===e||void 0===e?void 0:e.table)===N})))||[]),me=ue.failed,xe=ue.total,je=(0,w.gq)(N,E),pe=(0,h.MM)(le),he=pe.backgroundColor,fe=pe.icon;return(0,k.jsx)(o.o,{isSingleReport:!1,maxHeight:m.t4,children:(0,k.jsxs)(r.rj,{width:"inherit",templateColumns:"1fr 2fr",children:[(0,k.jsx)(r.P4,{colSpan:3,children:(0,k.jsx)(g.Q,{breadcrumbList:je})}),(0,k.jsx)(r.P4,{overflowY:"scroll",maxHeight:m.t4,children:(0,k.jsx)(u._,{tableColEntry:L,currentTable:N,currentColumn:E,onSelect:function(e){var t=e.tableName,n=e.columnName;Z(0),Q("/tables/".concat(t,"/columns/").concat(n))}})}),B?(0,k.jsxs)(r.P4,{maxHeight:m.t4,overflowY:"auto",p:10,children:[(0,k.jsx)(C.Q,{title:N,subtitle:"Table",mb:5}),(0,k.jsxs)(i.mQ,{defaultIndex:0,children:[(0,k.jsxs)(i.td,{children:[(0,k.jsx)(i.OK,{children:"Overview"}),(0,k.jsx)(i.OK,{children:"Assertions"}),(0,k.jsx)(i.OK,{children:"Schema"})]}),(0,k.jsxs)(i.nP,{children:[(0,k.jsxs)(i.x4,{children:[(0,k.jsx)(A,{}),(0,k.jsxs)(r.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,k.jsx)(f.m,{tableDatum:$}),(0,k.jsx)(r.iz,{orientation:"vertical"}),(0,k.jsx)(f.m,{tableDatum:ee}),(0,k.jsx)(f.a,{description:null===$||void 0===$?void 0:$.description}),(0,k.jsx)(r.iz,{orientation:"vertical"}),(0,k.jsx)(f.a,{description:null===ee||void 0===ee?void 0:ee.description})]})]}),(0,k.jsxs)(i.x4,{children:[Number(ce)>0&&(0,k.jsx)(r.kC,{mb:5,children:(0,k.jsx)(D.z,{baseAssertionFailed:de,baseAssertionTotal:ce,targetAssertionFailed:me,targetAssertionTotal:xe})}),(0,k.jsx)(r.rj,{templateColumns:"1fr",gap:3,height:"100%",children:(0,k.jsx)(y.O,{filterString:N,caseSensitiveFilter:!0,comparableAssertions:Y,tableSize:"sm"})})]}),(0,k.jsxs)(i.x4,{children:[(0,k.jsx)(r.kC,{pb:3,children:(0,k.jsx)(v.Q,{fontWeight:"semibold",color:"gray.600",added:X.added,deleted:X.deleted,changed:X.changed})}),(0,k.jsx)(A,{}),(0,k.jsx)(r.rj,{templateColumns:"1fr",gap:3,height:"100%",children:(0,k.jsx)(b.r,{baseTableEntryDatum:J,targetTableEntryDatum:U,onSelect:function(){}})})]})]})]})]}):(0,k.jsxs)(r.rj,{templateColumns:"1fr 1fr",templateRows:"5em 5em 1fr 1fr",width:"100%",maxHeight:m.t4,overflowY:"auto",children:[(0,k.jsxs)(r.P4,{colSpan:2,rowSpan:2,p:9,children:[(0,k.jsx)(C.Q,{title:E,subtitle:null===ie||void 0===ie?void 0:ie.schema_type,mb:5,borderBottom:m.dx,icon:fe,iconColor:he}),(0,k.jsx)(A,{})]}),(0,k.jsx)(r.P4,{colSpan:2,px:9,py:2,bg:"gray.50",children:(0,k.jsxs)(r.rj,{templateColumns:"1fr 1fr",gap:8,minWidth:0,children:[(0,k.jsx)(d.t,{columnDatum:le}),(0,k.jsx)(d.t,{columnDatum:re})]})}),((0,h.jl)(ae)||(0,h.jl)(se))&&(0,k.jsx)(r.P4,{colSpan:2,gridRow:"span 1",px:9,py:2,bg:"gray.50",children:(0,k.jsxs)(r.rj,{templateColumns:"1fr 1fr",gap:8,children:[(0,k.jsx)(x.E,{columnDatum:le}),(0,k.jsx)(x.E,{columnDatum:re})]})}),((0,h.hG)(ae)||(0,h.hG)(se))&&(0,k.jsx)(r.P4,{colSpan:2,gridRow:"span 1",p:9,bg:"gray.50",children:(0,k.jsxs)(r.rj,{templateColumns:"1fr 1fr",gap:8,children:[(0,k.jsx)(j.M,{columnDatum:le}),(0,k.jsx)(j.M,{columnDatum:re})]})}),(0,k.jsx)(r.P4,{colSpan:2,gridRow:"span 1",minWidth:0,p:9,bg:"gray.50",children:(0,k.jsx)(c.r,{baseColumnDatum:le,targetColumnDatum:re,hasSplitView:!0,hasAnimation:!0,tabIndex:M,onSelectTab:function(e){return Z(e)}})})]})]})})}function A(){return(0,k.jsx)(r.rj,{templateColumns:"1fr 1fr",mb:2,gap:10,children:["Base","Target"].map((function(e,t){return(0,k.jsx)(r.kC,{alignItems:"center",w:"100%",children:(0,k.jsx)(r.xv,{fontWeight:"semibold",fontSize:"2xl",color:"gray.400",w:"100%",children:e})},t)}))})}}}]);
//# sourceMappingURL=914.caa4c123.chunk.js.map