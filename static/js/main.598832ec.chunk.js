(this["webpackJsonpreact-reddit-pics"]=this["webpackJsonpreact-reddit-pics"]||[]).push([[0],{117:function(t,e,n){"use strict";n.r(e);var a=n(3),o=n(0),c=n.n(o),i=n(8),r=n.n(i),s=(n(85),n(46)),l=n(47),d=n.n(l),u=n(61),j=n(19),b=n(14),h=n(62),p=n.n(h),m=n(152),O=n(155),g=n(151),x=n(15),f=n(161),v=n(162),w=n(167),y=n(66),k=n.n(y),C=n(165),N=n(164),B=n(69),S=n(163),I=n(170),W=n(169),R=n(156),M=n(157),A=n(160),T=n(159),E=n(158),P=n(168),_=n(154),D=n(120),F=n(166),J=Object(g.a)((function(t){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",width:"vw",height:"vh",backgroundColor:t.palette.common.white,textAlign:"center"},imageModalBox:{margin:"0 auto",textAlign:"center","&:active":{outline:"none"}},imageModal:{padding:10,maxWidth:340,maxHeight:500,"@media (min-width: 1280px)":{maxWidth:500},height:"auto"},modalBoxTitle:{padding:10,fontSize:"1.5em",maxWidth:340,"@media (min-width: 1280px)":{maxWidth:500}},modalBox:{backgroundColor:t.palette.common.white},button:{backgroundColor:"#3F51B5","&:hover":{backgroundColor:Object(x.b)("#3F51B5",.75)},color:t.palette.common.white}}}));function H(t){var e=t.item,n=J(),o=c.a.useState(!1),i=Object(j.a)(o,2),r=i[0],s=i[1],l=e.data?e.data:"Test Post Plz Ignore";return Object(a.jsxs)("div",{children:[Object(a.jsx)(m.a,{type:"button",onClick:function(){s(!0)},className:n.button,children:"MORE INFO!"}),Object(a.jsx)(P.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:n.modal,open:r,onClose:function(){s(!1)},closeAfterTransition:!0,BackdropComponent:_.a,BackdropProps:{timeout:500},children:Object(a.jsx)(D.a,{in:r,children:Object(a.jsxs)(F.a,{className:n.modalBox,children:[Object(a.jsx)("div",{className:n.imageModalBox,children:Object(a.jsx)("img",{src:l.url,alt:l.title,className:n.imageModal})}),Object(a.jsx)(O.a,{className:n.modalBoxTitle,children:l.title}),Object(a.jsxs)(O.a,{children:["Author: ",l.author]}),Object(a.jsxs)(O.a,{children:["Upvotes: ",l.ups]}),Object(a.jsxs)(O.a,{children:["Ratio Upvotes to Downvotes: ",l.upvote_ratio]}),Object(a.jsxs)(O.a,{children:["Number of Awards Given (total): ",l.total_awards_received]}),Object(a.jsx)(F.a,{pb:"10px"})]})})})]})}var z=Object(g.a)({root:{maxWidth:340,height:525,margin:"10px 10px 10px 10px"},media:{height:340,width:340}});function L(t){var e=t.item,n=e.data,o=z(),c="https://www.reddit.com".concat(n.permalink),i=n.selftext,r=-1!==n.url.indexOf(".jpg")||-1!==n.url.indexOf(".gif")&&-1===n.url.indexOf(".gifv")||-1!==n.url.indexOf(".png"),s=n.title.length>50?"".concat(n.title.substring(0,42),"..."):n.title;return Object(a.jsx)("div",{children:i.length<2&&r&&Object(a.jsxs)(R.a,{className:o.root,children:[Object(a.jsxs)(M.a,{target:"_blank",href:c,children:[Object(a.jsx)(E.a,{className:o.media,image:n.url,title:n.title}),Object(a.jsxs)(T.a,{children:[Object(a.jsx)(O.a,{gutterBottom:!0,variant:"h6",component:"h2",children:s}),Object(a.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:n.author})]})]}),Object(a.jsxs)(A.a,{children:[Object(a.jsx)(H,{item:e}),Object(a.jsx)(m.a,{size:"small",color:"primary",target:"_blank",href:c,children:"See it on Reddit"})]})]})},e.id)}var U=function(t){var e=t.photos;return Object(a.jsx)("div",{className:"dashboard-container",children:e&&e.map((function(t){return Object(a.jsx)(L,{item:t},t.data.id)}))})},G=Object(g.a)((function(t){var e,n;return{search:Object(b.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(x.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(x.b)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(b.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"}),navButton:(e={display:"none"},Object(b.a)(e,t.breakpoints.up("sm"),{display:"block"}),Object(b.a)(e,"backgroundColor",t.palette.common.white),Object(b.a)(e,"&:hover",{backgroundColor:Object(x.b)(t.palette.common.white,.75)}),Object(b.a)(e,"color","#3F51B5"),Object(b.a)(e,"fontWeight","bold"),Object(b.a)(e,"marginRight",10),e),title:{fontWeight:"bold",color:t.palette.common.white},form:(n={display:"none"},Object(b.a)(n,t.breakpoints.up("sm"),{display:"block"}),Object(b.a)(n,"marginBlockEnd","0em"),n),subMenu:{zIndex:"2"}}}));var q=function(){var t=G(),e=Object(o.useState)(!0),n=Object(j.a)(e,2),c=n[0],i=n[1],r=Object(o.useState)({photos:[]}),l=Object(j.a)(r,2),b=l[0],h=l[1],g=Object(o.useState)("pics"),x=Object(j.a)(g,2),y=x[0],R=x[1],M=Object(o.useState)(""),A=Object(j.a)(M,2),T=A[0],E=A[1],P=Object(o.useState)(null),_=Object(j.a)(P,2),D=_[0],F=_[1];Object(o.useEffect)((function(){(function(){var t=Object(u.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=D?"https://www.reddit.com/r/".concat(y,"/search.json?q=").concat(D,"&restrict_sr=on&include_over_18=on&sort=relevance&t=all"):"https://www.reddit.com/r/".concat(y,"/.json?jsonp="),t.next=3,p()(e);case 3:n=t.sent,h({photos:n.data.data.children}),console.log(n.data.data.children),i(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[y,D]);var J=Object(o.useState)(!1),H=Object(j.a)(J,2),z=H[0],L=H[1],q=Object(o.useRef)(null),K=function(t){q.current&&q.current.contains(t.target)||L(!1)},Y=function(t,e){R(e),K(t)};function Q(t){"Tab"===t.key&&(t.preventDefault(),L(!1))}var V=Object(o.useRef)(z);Object(o.useEffect)((function(){!0===V.current&&!1===z&&q.current.focus(),V.current=z}),[z]);var X=Object(o.useMemo)((function(){return Object(a.jsx)(U,{photos:b.photos})}),[b.photos]);return Object(a.jsxs)("div",{className:"dashboard",children:[Object(a.jsx)(f.a,{position:"static",children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(m.a,{onClick:function(){F(null),R("pics")},children:Object(a.jsx)(O.a,{variant:"h6",className:t.title,children:"Prettier Reddit Pics!!"})}),Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),console.log(T),F(T)},className:t.form,children:Object(a.jsxs)("div",{className:t.search,children:[Object(a.jsx)("div",{className:t.searchIcon,children:Object(a.jsx)(k.a,{})}),Object(a.jsx)(w.a,{onChange:function(t){var e;e=t.target.value,E(e)},placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})]})}),Object(a.jsx)(m.a,{className:t.navButton,onClick:function(){return i(!0),R("catsstandingup"===y?"pics":"catsstandingup"),void F(null)},children:"CHANGE SUB"}),Object(a.jsxs)("div",{className:t.subMenu,children:[Object(a.jsx)(m.a,{ref:q,"aria-controls":z?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){L((function(t){return!t}))},className:t.navButton,children:"SHOW ME ANIMALS WITH JOBS!"}),Object(a.jsx)(S.a,{open:z,anchorEl:q.current,role:void 0,transition:!0,disablePortal:!0,children:function(t){var e=t.TransitionProps,n=t.placement;return Object(a.jsx)(N.a,Object(s.a)(Object(s.a)({},e),{},{style:{transformOrigin:"bottom"===n?"center top":"center bottom"},children:Object(a.jsx)(B.a,{children:Object(a.jsx)(C.a,{onClickAway:K,children:Object(a.jsxs)(W.a,{autoFocusItem:z,id:"menu-list-grow",onKeyDown:Q,children:[Object(a.jsx)(I.a,{onClick:function(t){return Y(t,"dogswithjobs")},value:"dogswithjobs",children:"Dogs With Jobs"}),Object(a.jsx)(I.a,{onClick:function(t){return Y(t,"catswithjobs")},value:"catswithjobs",children:"Cats With Jobs"}),Object(a.jsx)(I.a,{onClick:function(t){return Y(t,"turtleswithjobs")},value:"turtleswithjobs",children:"Turtles With Jobs"})]})})})}))}})]})]})}),c?Object(a.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"...loading"}):Object(a.jsx)(a.Fragment,{children:X})]})},K=function(){var t=(new Date).getDay();return console.log("*******************"),console.log("Oh hello there!! You're looking especially lovely on this fine ".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t],"!!")),console.log("But really, thanks for stopping by. Until we meet again, be kind, be curious, bring a snack, and always pet any cats you find along your way. Here's hoping our adventures intertwine in the future!"),console.log("If you want to see other fun flotsam and jetsam, drop by kendraosburn.com."),console.log("*******************"),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(q,{})})};r.a.render(Object(a.jsx)(K,{}),document.getElementById("root"))},85:function(t,e,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.598832ec.chunk.js.map