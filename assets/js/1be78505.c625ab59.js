(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[514],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7534:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ce}});var r=n(7294),a=n(3905),o=n(2263),l=n(6291),i=n(2273),c=n(6010),s=n(9343),u=n(3783),d=n(7898),p=n(5537),m=n(2122),h=function(e){return r.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},y=n(4973),f=n(9756),b=n(6742),g=n(3919),v=n(8617),k="menuLinkText_1J2g",E=["items"],C=["item"],Z=["item","onItemClick","collapsible","activePath"],_=["item","onItemClick","activePath","collapsible"],N=function e(t,n){return"link"===t.type?(0,s.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},j=(0,r.memo)((function(e){var t=e.items,n=(0,f.Z)(e,E);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(x,(0,m.Z)({key:t,item:e},n))})))}));function x(e){var t=e.item,n=(0,f.Z)(e,C);switch(t.type){case"category":return 0===t.items.length?null:r.createElement(O,(0,m.Z)({item:t},n));case"link":default:return r.createElement(S,(0,m.Z)({item:t},n))}}function O(e){var t,n=e.item,a=e.onItemClick,o=e.collapsible,l=void 0===o||o,i=e.activePath,u=(0,f.Z)(e,Z),d=n.items,p=n.label,h=N(n,i),y=(0,s.uR)({initialState:function(){var e;return!!l&&(!h&&(null==(e=n.collapsed)||e))}}),b=y.collapsed,g=y.setCollapsed,v=y.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,s.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n])}({isActive:h,collapsed:b,setCollapsed:g}),r.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":b})},r.createElement("a",(0,m.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&h},t[k]=!l,t)),onClick:l?function(e){e.preventDefault(),v()}:void 0,href:l?"#":void 0},u),p),r.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},r.createElement(j,{items:d,tabIndex:b?-1:0,onItemClick:a,collapsible:l,activePath:i})))}function S(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,(0,f.Z)(e,_)),l=t.href,i=t.label,s=N(t,a);return r.createElement("li",{className:"menu__list-item",key:i},r.createElement(b.Z,(0,m.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":s}),to:l},(0,g.Z)(l)&&{isNavLink:!0,exact:!0,onClick:n},o),(0,g.Z)(l)?i:r.createElement("span",null,i,r.createElement(v.Z,null))))}var T="sidebar_15mo",P="sidebarWithHideableNavbar_267A",I="sidebarHidden_2kNb",w="sidebarLogo_3h0W",L="menu_Bmed",B="menuWithAnnouncementBar_2WvA",D="collapseSidebarButton_1CGd",A="collapseSidebarButtonIcon_3E-R";function M(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,y.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,y.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",D),onClick:t},r.createElement(h,{className:A}))}function R(e){var t,n,a=e.path,o=e.sidebar,l=e.sidebarCollapsible,i=e.onCollapse,u=e.isHidden,m=function(){var e=(0,s.nT)().isClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,d.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),h=(0,s.LU)(),y=h.navbar.hideOnScroll,f=h.hideableSidebar,b=(0,s.nT)().isClosed;return r.createElement("div",{className:(0,c.Z)(T,(t={},t[P]=y,t[I]=u,t))},y&&r.createElement(p.Z,{tabIndex:-1,className:w}),r.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",L,(n={},n[B]=!b&&m,n))},r.createElement("ul",{className:"menu__list"},r.createElement(j,{items:o,collapsible:l,activePath:a}))),f&&r.createElement(M,{onClick:i}))}var W=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.sidebarCollapsible,o=e.path;return r.createElement("ul",{className:"menu__list"},r.createElement(j,{items:n,collapsible:a,activePath:o,onItemClick:function(){return t()}}))};function z(e){return r.createElement(s.Cv,{component:W,props:e})}var H=r.memo(R),F=r.memo(z);function U(e){var t=(0,u.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(H,e),a&&r.createElement(F,e))}var $={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},J={Prism:n(7410).Z,theme:$};function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Y=/\r\n|\r|\n/,G=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},X=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},q=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=V({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=V({},n,{backgroundColor:null}),a};function Q(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var ee=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),K(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?q(e.theme,e.language):void 0;return t.themeDict=n})),K(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=V({},Q(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?V({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),K(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),K(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=V({},Q(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?V({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),K(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=X(u,d.type),d.alias&&(u=X(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(Y),m=p.length;i.push({types:u,content:p[0]});for(var h=1;h<m;h++)G(i),c.push(i=[]),i.push({types:u,content:p[h]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return G(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var te=n(7594),ne=n.n(te),re={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},ae=n(5350),oe=function(){var e=(0,s.LU)().prism,t=(0,ae.Z)().isDarkTheme,n=e.theme||re,r=e.darkTheme||n;return t?r:n},le="codeBlockContainer_K1bP",ie="codeBlockContent_hGly",ce="codeBlockTitle_eoMF",se="codeBlock_23N8",ue="codeBlockWithTitle_2JqI",de="copyButton_Ue-o",pe="codeBlockLines_39YC",me=/{([\d,-]+)}/,he=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function ye(e){var t=e.children,n=e.className,a=e.metastring,o=e.title,l=(0,s.LU)().prism,i=(0,r.useState)(!1),u=i[0],d=i[1],p=(0,r.useState)(!1),h=p[0],f=p[1];(0,r.useEffect)((function(){f(!0)}),[]);var b=(0,s.bc)(a)||o,g=(0,r.useRef)(null),v=[],k=oe(),E=Array.isArray(t)?t.join(""):t;if(a&&me.test(a)){var C=a.match(me)[1];v=ne()(C).filter((function(e){return e>0}))}var Z=n&&n.replace(/language-/,"");!Z&&l.defaultLanguage&&(Z=l.defaultLanguage);var _=E.replace(/\n$/,"");if(0===v.length&&void 0!==Z){for(var N,j="",x=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return he(["js","jsBlock"]);case"jsx":case"tsx":return he(["js","jsBlock","jsx"]);case"html":return he(["js","jsBlock","html"]);case"python":case"py":return he(["python"]);default:return he()}}(Z),O=E.replace(/\n$/,"").split("\n"),S=0;S<O.length;){var T=S+1,P=O[S].match(x);if(null!==P){switch(P.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":j+=T+",";break;case"highlight-start":N=T;break;case"highlight-end":j+=N+"-"+(T-1)+","}O.splice(S,1)}else S+=1}v=ne()(j),_=O.join("\n")}var I=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(l.removeAllRanges(),l.addRange(i)),o&&o.focus()}(_),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.createElement(ee,(0,m.Z)({},J,{key:String(h),theme:k,code:_,language:Z}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.createElement("div",{className:le},b&&r.createElement("div",{style:a,className:ce},b),r.createElement("div",{className:(0,c.Z)(ie,Z)},r.createElement("pre",{tabIndex:0,className:(0,c.Z)(n,se,"thin-scrollbar",(t={},t[ue]=b,t)),style:a},r.createElement("code",{className:pe},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return v.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,m.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,m.Z)({key:t},i({token:e,key:t})))})))})))),r.createElement("button",{ref:g,type:"button","aria-label":(0,y.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(de,"clean-btn"),onClick:I},u?r.createElement(y.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(y.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var fe=n(6159),be={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(ye,e):r.createElement("code",e)},a:function(e){return r.createElement(b.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(ye,(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,fe.Z)("h1"),h2:(0,fe.Z)("h2"),h3:(0,fe.Z)("h3"),h4:(0,fe.Z)("h4"),h5:(0,fe.Z)("h5"),h6:(0,fe.Z)("h6")},ge=n(4608),ve=n(5977),ke={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function Ee(e){var t,n,l,u=e.currentDocRoute,d=e.versionMetadata,p=e.children,m=(0,o.Z)(),f=m.siteConfig,b=m.isClient,g=d.pluginId,v=d.version,k=u.sidebar,E=k?d.docsSidebars[k]:void 0,C=(0,r.useState)(!1),Z=C[0],_=C[1],N=(0,r.useState)(!1),j=N[0],x=N[1],O=(0,r.useCallback)((function(){j&&x(!1),_(!Z)}),[j]);return r.createElement(i.Z,{key:b,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:v,tag:(0,s.os)(g,v)}},r.createElement("div",{className:ke.docPage},E&&r.createElement("aside",{className:(0,c.Z)(ke.docSidebarContainer,(t={},t[ke.docSidebarContainerHidden]=Z,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(ke.docSidebarContainer)&&Z&&x(!0)}},r.createElement(U,{key:k,sidebar:E,path:u.path,sidebarCollapsible:f.themeConfig.sidebarCollapsible,onCollapse:O,isHidden:j}),j&&r.createElement("div",{className:ke.collapsedDocSidebar,title:(0,y.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,y.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:O,onClick:O},r.createElement(h,{className:ke.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,c.Z)(ke.docMainContainer,(n={},n[ke.docMainContainerEnhanced]=Z||!E,n))},r.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",ke.docItemWrapper,(l={},l[ke.docItemWrapperEnhanced]=Z,l))},r.createElement(a.Zo,{components:be},p)))))}var Ce=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,ve.LX)(a.pathname,e)}));return o?r.createElement(Ee,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n})):r.createElement(ge.default,e)}},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return p},Z:function(){return m}});var r=n(9756),a=n(2122),o=n(7294),l=n(6010),i=n(4973),c=n(9343),s="enhancedAnchor_2LWZ",u="h1Heading_27L5",d=["id"],p=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0,className:u}),t.children))},m=function(e){return"h1"===e?p:(t=e,function(e){var n,a=e.id,u=(0,r.Z)(e,d),p=(0,c.LU)().navbar.hideOnScroll;return a?o.createElement(t,u,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(n={},n[s]=!p,n)),id:a}),u.children,o.createElement("a",{className:"hash-link",href:"#"+a,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,u)});var t}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);