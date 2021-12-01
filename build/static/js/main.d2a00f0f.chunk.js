(this["webpackJsonpapi-github"]=this["webpackJsonpapi-github"]||[]).push([[0],{56:function(n,e,t){"use strict";t.r(e);var i,r,o,a,s,c,l,d,b,h,p,u,j,g,f,x,m,O,v=t(1),y=t.n(v),w=t(23),k=t.n(w),S=t(2),C=t(3),z=Object(C.a)(i||(i=Object(S.a)(['\n/*! destyle.css v3.0.0 | MIT License | https://github.com/nicolas-cusan/destyle.css */\n\n/* Reset box-model and set borders */\n/* ============================================ */\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  border-style: solid;\n  border-width: 0;\n}\n\n/* Document */\n/* ============================================ */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n * 3. Remove gray overlay on links for iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -webkit-tap-highlight-color: transparent; /* 3*/\n}\n\n/* Sections */\n/* ============================================ */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n  font-family: \'Yaldevi\', sans-serif;\n}\n\n/**\n * Render the main element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/* Vertical rhythm */\n/* ============================================ */\n\np,\ntable,\nblockquote,\naddress,\npre,\niframe,\nform,\nfigure,\ndl {\n  margin: 0;\n}\n\n/* Headings */\n/* ============================================ */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n  margin: 0;\n}\n\n/* Lists (enumeration) */\n/* ============================================ */\n\nul,\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n/* Lists (definition) */\n/* ============================================ */\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-left: 0;\n}\n\n/* Grouping content */\n/* ============================================ */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n  border-top-width: 1px;\n  margin: 0;\n  clear: both;\n  color: inherit;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd em font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: inherit; /* 2 */\n}\n\naddress {\n  font-style: inherit;\n}\n\n/* Text-level semantics */\n/* ============================================ */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n  text-decoration: none;\n  color: inherit;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd em font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: inherit; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent sub and sup elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Replaced content */\n/* ============================================ */\n\n/**\n * Prevent vertical alignment issues.\n */\n\nsvg,\nimg,\nembed,\nobject,\niframe {\n  vertical-align: bottom;\n}\n\n/* Forms */\n/* ============================================ */\n\n/**\n * Reset form fields to make them styleable.\n * 1. Make form elements stylable across systems iOS especially.\n * 2. Inherit text-transform from parent.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  -webkit-appearance: none; /* 1 */\n  appearance: none;\n  vertical-align: middle;\n  color: inherit;\n  font: inherit;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n  text-align: inherit;\n  text-transform: inherit; /* 2 */\n}\n\n/**\n * Reset radio and checkbox appearance to preserve their look in iOS.\n */\n\n[type="checkbox"] {\n  -webkit-appearance: checkbox;\n  appearance: checkbox;\n}\n\n[type="radio"] {\n  -webkit-appearance: radio;\n  appearance: radio;\n}\n\n/**\n * Correct cursors for clickable elements.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  cursor: pointer;\n}\n\nbutton:disabled,\n[type="button"]:disabled,\n[type="reset"]:disabled,\n[type="submit"]:disabled {\n  cursor: default;\n}\n\n/**\n * Improve outlines for Firefox and unify style with input elements & buttons.\n */\n\n:-moz-focusring {\n  outline: auto;\n}\n\nselect:disabled {\n  opacity: inherit;\n}\n\n/**\n * Remove padding\n */\n\noption {\n  padding: 0;\n}\n\n/**\n * Reset to invisible\n */\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  outline-offset: -2px; /* 1 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Fix font inheritance.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/**\n * Clickable labels\n */\n\nlabel[for] {\n  cursor: pointer;\n}\n\n/* Interactive */\n/* ============================================ */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/*\n * Remove outline for editable content.\n */\n\n[contenteditable]:focus {\n  outline: auto;\n}\n\n/* Tables */\n/* ============================================ */\n\n/**\n1. Correct table border color inheritance in all Chrome and Safari.\n*/\n\ntable {\n  border-color: inherit; /* 1 */\n}\n\ncaption {\n  text-align: left;\n}\n\ntd,\nth {\n  vertical-align: top;\n  padding: 0;\n}\n\nth {\n  text-align: left;\n  font-weight: bold;\n}']))),R=t(5),_=t(6),U=t(27),E=t.n(U).a.create({baseURL:"https://api.github.com/"}),F=t(0),I=Object(v.createContext)({loading:!1,user:{},repositories:[],starred:[]}),A=function(n){var e=n.children,t=Object(v.useState)({hasUser:!1,loading:!1,user:{id:void 0,avatar:void 0,login:void 0,name:void 0,html_url:void 0,blog:void 0,company:void 0,location:void 0,followers:0,following:0,public_gists:0,public_repos:0,bio:0},repositories:[],starred:[]}),i=Object(_.a)(t,2),r=i[0],o=i[1],a={githubState:r,getUser:Object(v.useCallback)((function(n){return function(n){o((function(n){return Object(R.a)(Object(R.a)({},n),{},{loading:!n.loading})})),E.get("users/".concat(n)).then((function(n){var e=n.data;o((function(n){return Object(R.a)(Object(R.a)({},n),{},{hasUser:!0,user:{id:e.id,avatar:e.avatar_url,login:e.login,name:e.name,html_url:e.html_url,blog:e.blog,company:e.company,location:e.location,bio:e.bio,followers:e.followers,following:e.following,public_gists:e.public_gists,public_repos:e.public_repos}})}))})).finally((function(){o((function(n){return Object(R.a)(Object(R.a)({},n),{},{loading:!n.loading})}))}))}(n)}),[]),getUserRepos:Object(v.useCallback)((function(n){return function(n){E.get("users/".concat(n,"/repos")).then((function(n){var e=n.data;console.log("data: "+JSON.stringify(e)),o((function(n){return Object(R.a)(Object(R.a)({},n),{},{repositories:e})}))}))}(n)}),[]),getUserStarred:Object(v.useCallback)((function(n){return function(n){E.get("users/".concat(n,"/starred")).then((function(n){var e=n.data;console.log("data: "+JSON.stringify(e)),o((function(n){return Object(R.a)(Object(R.a)({},n),{},{starred:e})}))}))}(n)}),[])};return Object(F.jsxs)(I.Provider,{value:a,children:[" ",e," "]})},N=C.b.section(r||(r=Object(S.a)(["\nmargin:15px 15px;\npadding: 5px \n\n"]))),T=function(){var n=Object(v.useContext)(I);return{githubState:n.githubState,getUser:n.getUser,getUserRepos:n.getUserRepos,getUserStarred:n.getUserStarred}},L=C.b.div(o||(o=Object(S.a)(["\ndisplay:flex;\nwidth:100%;\n\n\ninput {\n    border: 1px solid #ccc;\n    border-radius: 10px;\n    width:100%;\n    height:45px;\n    padding:8px;\n    caret-color:red;\n    \n  \n}\n button {\n     background-color:#1A29B8;\n     padding:8px  12px;\n     margin:0 16px;\n     border-radius:10px;\n     height:45px;\n\n     &:hover {\n        background-color:#2135EB;\n        \n     }\n\n     span {\n         color:white;\n         font-weight:bold;\n     }\n }\n\n"]))),B=function(){var n=T().getUser,e=Object(v.useState)(),t=Object(_.a)(e,2),i=t[0],r=t[1];return Object(F.jsx)("header",{children:Object(F.jsxs)(L,{children:[Object(F.jsx)("input",{type:"text",placeholder:"Digite aqui",onChange:function(n){return r(n.target.value)}}),Object(F.jsx)("button",{type:"submit",onClick:function(){if(i)return n(i)},children:Object(F.jsx)("span",{children:" BUSCAR"})})]})})},P=function(n){var e=n.children;return Object(F.jsxs)(N,{children:[Object(F.jsx)(B,{}),e]})},J=C.b.div(a||(a=Object(S.a)(["\njustify-content:center;\ndisplay:flex;\n\n\nh1 {\n    font-weight:bold;\n    font-size:30px;\n    margin-top:5px;\n    \n}\n"]))),M=function(){return Object(F.jsx)(J,{children:Object(F.jsx)("h1",{children:"Nenhum usu\xe1rio encontrado"})})},q=C.b.div(s||(s=Object(S.a)(["\ndisplay:flex;\nalign-items:flex-start;\n"]))),D=C.b.div(c||(c=Object(S.a)(["\ndisplay:flex;\nalign-items:center;\ndiv {\n    margin:8px;\n    text-align:center;\n}\n\n"]))),G=C.b.div(l||(l=Object(S.a)(["\ndisplay:flex;\nalign-items:center;\nmargin-top:8px;\n\nh3 {\n    margin-right:8px;\n}\n\na { \n    color:blue;\n    font-weight:bold;\n    font-size:18px;\n}\n"]))),H=C.b.div(d||(d=Object(S.a)(["\ndisplay:flex;\nflex-direction:column;\nalign-items:flex-start;\njustify-content:space-between;\nheight:auto;\nmargin-left:8px;\nheight:200px;\n\nh1 {\n    font-size:30px;\n    font-weight:bold;\n}\n\nh3 {\n    font-size:18px;\n    font-weight:bold;\n}\nn\nh4 {\n    font-size:16px;\n    font-weight:bold;\n}\n"]))),V=C.b.img(b||(b=Object(S.a)(["\nborder-radius:50%;\nwidth:200px;\nmargin:8px;\n"]))),Y=function(){var n=T().githubState;return Object(F.jsxs)(q,{children:[Object(F.jsx)(V,{src:n.user.avatar,alt:"avatar"}),Object(F.jsxs)(H,{children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:n.user.name}),Object(F.jsxs)(G,{children:[Object(F.jsx)("h3",{children:"Username:"}),Object(F.jsx)("a",{href:n.user.html_url,target:"_blank",rel:"noreferrer",children:n.user.login})]}),Object(F.jsxs)(G,{children:[Object(F.jsx)("h3",{children:"Location:"}),Object(F.jsx)("span",{children:n.user.location})]}),Object(F.jsxs)(G,{children:[Object(F.jsx)("h3",{children:"Company:"}),Object(F.jsx)("span",{children:n.user.company})]}),Object(F.jsxs)(G,{children:[Object(F.jsx)("h3",{children:"Blog:"}),Object(F.jsxs)("a",{href:n.user.blog,target:"_blank",rel:"noreferrer",children:[" ",n.user.blog]})]})]}),Object(F.jsxs)(D,{children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("h4",{children:"Followers"}),Object(F.jsx)("span",{children:n.user.followers})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("h4",{children:"Gists"}),Object(F.jsx)("span",{children:n.user.public_gists})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("h4",{children:"Following"}),Object(F.jsx)("span",{children:n.user.following})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("h4",{children:"Repos"}),Object(F.jsx)("span",{children:n.user.public_repos})]})]})]})]})},K=C.b.div(h||(h=Object(S.a)(["\n\npadding:8px ;\nborder-radius:8px;\nborder: 1px solid #ccc;\nmargin: 10px 10px;\nwidth:350px;\nheight:150px;\nalign-content:center;\n"]))),Q=C.b.h2(p||(p=Object(S.a)(["\nfont-size:20px;\nfont-weight:bold;\nmargin: 8px 0;\n"]))),W=C.b.h2(u||(u=Object(S.a)(["\nfont-size: 17px;\nmargin:8px 0;\ncolor:red;\n"]))),X=C.b.a(j||(j=Object(S.a)(["\ncolor:blue;\nfont-size:16px;\nmargin: 8px 0 ;\nfont-weight:bold;\n"]))),Z=function(n){var e=n.name,t=n.linkToRepo,i=n.fullName;return Object(F.jsxs)(K,{children:[Object(F.jsxs)(Q,{children:[" ",e," "]}),Object(F.jsx)(W,{children:"projeto: "}),Object(F.jsx)(X,{href:t,target:"_blank",rel:"noreferrer",children:i})]})},$=t(8),nn=Object(C.b)($.d)(g||(g=Object(S.a)(["\nfont-size:16px;\nwidth:100%;\nmargin-top:16px ;\n\n"]))),en=Object(C.b)($.b)(f||(f=Object(S.a)(["\nlist-style-type:none;\npadding:4px;\ndisplay:flex;\nmargin:0;\n"]))),tn=Object(C.b)($.a)(x||(x=Object(S.a)(["\nborder-radius:16px;\nborder:1px solid #ccc;\npadding:14px;\nuser-select:none;\ncursor:pointer;\nmargin:8px;\nz-index:9999;\nfont-weight:bold;\n\n&.is-selected {\n    box-shadow: 2px 3px 1px;\n}\n"]))),rn=Object(C.b)($.c)(m||(m=Object(S.a)(["\npadding:14px;\nborder:1px solid #ccc;\ndisplay:none;\n\n&.is-selected {\n    display:block;\n}\n\n"]))),on=C.b.div(O||(O=Object(S.a)(["\ndisplay:flex;\njustify-content:space-evenly;\n\nflex-wrap: wrap;\n"]))),an=function(){var n=T(),e=n.githubState,t=n.getUserRepos,i=n.getUserStarred,r=Object(v.useState)(!1),o=Object(_.a)(r,2),a=o[0],s=o[1];return Object(v.useEffect)((function(){e.user.login&&(t(e.user.login),i(e.user.login)),s(e.repositories)}),[e.user.login]),Object(F.jsx)(F.Fragment,{children:a?Object(F.jsxs)(nn,{selectedTabClassName:"is-selected",selectedTabPanelClassName:"is-selected",children:[Object(F.jsxs)(en,{children:[Object(F.jsx)(tn,{children:"Repositories"}),Object(F.jsx)(tn,{children:"Starred"})]}),Object(F.jsx)(rn,{children:Object(F.jsx)(on,{children:e.repositories.map((function(n){return Object(F.jsx)(Z,{name:n.name,linkToRepo:n.html_url,fullName:n.full_name},n.id)}))})}),Object(F.jsx)(rn,{children:Object(F.jsx)(on,{children:e.starred.map((function(n){return Object(F.jsx)(Z,{name:n.name,linkToRepo:n.html_url,fullName:n.full_name},n.id)}))})})]}):Object(F.jsx)(F.Fragment,{})})},sn=function(){var n=T().githubState;return Object(F.jsx)(P,{children:n.hasUser?Object(F.jsx)(F.Fragment,{children:n.loading?Object(F.jsx)("p",{children:"Loading"}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Y,{}),Object(F.jsx)(an,{})]})}):Object(F.jsx)(M,{})})},cn=function(){return Object(F.jsx)("main",{children:Object(F.jsxs)(A,{children:[Object(F.jsx)(z,{}),Object(F.jsx)(sn,{})]})})};k.a.render(Object(F.jsx)(y.a.StrictMode,{children:Object(F.jsx)(cn,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.d2a00f0f.chunk.js.map