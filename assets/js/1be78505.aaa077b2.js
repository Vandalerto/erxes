(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9514,7420],{63616:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ae}});var n=a(67294),r=a.n(n),i=a(3905),l=a(52263),o=a(46291),c=a(48648),s=a(74034),d=a(79973),u=a(86010),m=a(86700),h=a(80944),p=a(31839),b=a(93783),f=a(77898),v=a(36742),E=a(13919),g=a(55537),k=function(e){return r().createElement("svg",(0,s.Z)({width:"20",height:"20",role:"img"},e),r().createElement("g",{fill:"#7a7a7a"},r().createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r().createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},_=a(84478),C=a(24973),Z="sidebar_15mo",N="sidebarWithHideableNavbar_267A",S="sidebarHidden_2kNb",I="sidebarLogo_3h0W",x="menu_Bmed",y="menuLinkText_2aKo",B="menuWithAnnouncementBar_2WvA",w="collapseSidebarButton_1CGd",T="collapseSidebarButtonIcon_3E-R",P="sidebarMenuIcon_fgN0",A="sidebarMenuCloseIcon_1lpH",L="menuLinkExternal_1OhN";var R=function e(t,a){return"link"===t.type?(0,m.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},M=(0,n.memo)((function(e){var t=e.items,a=(0,d.Z)(e,["items"]);return t.map((function(e,t){return r().createElement(O,(0,s.Z)({key:t,item:e},a))}))}));function O(e){switch(e.item.type){case"category":return r().createElement(D,e);case"link":default:return r().createElement(F,e)}}function D(e){var t,a,i,l=e.item,o=e.onItemClick,c=e.collapsible,m=e.activePath,h=(0,d.Z)(e,["item","onItemClick","collapsible","activePath"]),p=l.items,b=l.label,f=R(l,m),v=(a=f,i=(0,n.useRef)(a),(0,n.useEffect)((function(){i.current=a}),[a]),i.current),E=(0,n.useState)((function(){return!!c&&(!f&&l.collapsed)})),g=E[0],k=E[1],_=(0,n.useRef)(null),C=(0,n.useState)(void 0),Z=C[0],N=C[1],S=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=_.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){f&&!v&&g&&k(!1)}),[f,v,g]);var I=(0,n.useCallback)((function(e){e.preventDefault(),Z||S(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[Z]);return 0===p.length?null:r().createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":g})},r().createElement("a",(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":c,"menu__link--active":c&&f},t[y]=!c,t)),onClick:c?I:void 0,href:c?"#!":void 0},h),b),r().createElement("ul",{className:"menu__list",ref:_,style:{height:Z},onTransitionEnd:function(){g||S(!1)}},r().createElement(M,{items:p,tabIndex:g?"-1":"0",onItemClick:o,collapsible:c,activePath:m})))}function F(e){var t,a=e.item,n=e.onItemClick,i=e.activePath,l=(e.collapsible,(0,d.Z)(e,["item","onItemClick","activePath","collapsible"])),o=a.href,c=a.label,m=R(a,i);return r().createElement("li",{className:"menu__list-item",key:c},r().createElement(v.Z,(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[L]=!(0,E.Z)(o),t)),to:o},(0,E.Z)(o)&&{isNavLink:!0,exact:!0,onClick:n},l),c))}function H(e){var t=e.onClick;return r().createElement("button",{type:"button",title:(0,C.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",w),onClick:t},r().createElement(k,{className:T}))}function W(e){var t=e.responsiveSidebarOpened,a=e.onClick;return r().createElement("button",{"aria-label":t?(0,C.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,C.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?r().createElement("span",{className:(0,u.Z)(P,A)},"\xd7"):r().createElement(_.Z,{className:P,height:24,width:24}))}var K=function(e){var t,a,i=e.path,l=e.sidebar,o=e.sidebarCollapsible,c=void 0===o||o,s=e.onCollapse,d=e.isHidden,v=function(){var e=(0,h.Z)().isAnnouncementBarClosed,t=(0,n.useState)(!e),a=t[0],r=t[1];return(0,f.Z)((function(t){var a=t.scrollY;e||r(0===a)})),a}(),E=(0,m.LU)(),k=E.navbar.hideOnScroll,_=E.hideableSidebar,C=(0,h.Z)().isAnnouncementBarClosed,y=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,p.Z)(t);var r=(0,b.Z)();return(0,n.useEffect)((function(){r===b.D.desktop&&a(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),w=y.showResponsiveSidebar,T=y.closeResponsiveSidebar,P=y.toggleResponsiveSidebar;return r().createElement("div",{className:(0,u.Z)(Z,(t={},t[N]=k,t[S]=d,t))},k&&r().createElement(g.Z,{tabIndex:-1,className:I}),r().createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",x,(a={"menu--show":w},a[B]=!C&&v,a))},r().createElement(W,{responsiveSidebarOpened:w,onClick:P}),r().createElement("ul",{className:"menu__list"},r().createElement(M,{items:l,onItemClick:T,collapsible:c,activePath:i}))),_&&r().createElement(H,{onClick:s}))},U=a(3009),V=a(24608),z=a(5977),J="docPage_31aa",Y="docMainContainer_3ufF",G="docMainContainerEnhanced_3NYZ",Q="docSidebarContainer_3Kbt",X="docSidebarContainerHidden_3pA8",j="collapsedDocSidebar_2JMH",q="expandSidebarButtonIcon_1naQ",$="docItemWrapperEnhanced_2vyJ",ee="docItemWrapper_3FMP";function te(e){var t,a,o,s,d,h=e.currentDocRoute,p=e.versionMetadata,b=e.children,f=(0,l.default)(),v=f.siteConfig,E=f.isClient,g=p.pluginId,_=p.permalinkToSidebar,Z=p.docsSidebars,N=p.version,S=_[h.path],I=Z[S],x=(0,n.useState)(!1),y=x[0],B=x[1],w=(0,n.useState)(!1),T=w[0],P=w[1],A=(0,n.useCallback)((function(){T&&P(!1),B(!y)}),[T]);return r().createElement(c.Z,{key:E,wrapperClassName:m.kM.wrapper.docPages,pageClassName:m.kM.page.docPage,searchMetadatas:{version:N,tag:(0,m.os)(g,N)}},r().createElement("div",{className:J},I&&r().createElement("div",{className:(0,u.Z)(Q,(t={},t[X]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q)&&y&&P(!0)},role:"complementary"},r().createElement(K,{key:S,sidebar:I,path:h.path,sidebarCollapsible:null==(a=null==(o=v.themeConfig)?void 0:o.sidebarCollapsible)||a,onCollapse:A,isHidden:T}),T&&r().createElement("div",{className:j,title:(0,C.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:A,onClick:A},r().createElement(k,{className:q}))),r().createElement("main",{className:(0,u.Z)(Y,(s={},s[G]=y||!I,s))},r().createElement("div",{className:(0,u.Z)("container padding-vert--lg",ee,(d={},d[$]=y,d))},r().createElement(i.Zo,{components:U.Z},b)))))}var ae=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,i=t.find((function(e){return(0,z.LX)(n.pathname,e)}));return i?r().createElement(te,{currentDocRoute:i,versionMetadata:a},(0,o.Z)(t)):r().createElement(V.default,e)}},3009:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var n=a(67294),r=a.n(n),i=a(36742),l=a(50210),o=a(79973),c=a(86010),s=a(24973),d=a(86700),u="enhancedAnchor_2LWZ",m=function(e){return function(t){var a,n=t.id,i=(0,o.Z)(t,["id"]),l=(0,d.LU)().navbar.hideOnScroll;return n?r().createElement(e,i,r().createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,c.Z)("anchor",(a={},a[u]=!l,a)),id:n}),i.children,r().createElement("a",{className:"hash-link",href:"#"+n,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r().createElement(e,i)}},h={code:function(e){var t=e.children;return(0,n.isValidElement)(t)?t:t.includes("\n")?r().createElement(l.Z,e):r().createElement("code",e)},a:function(e){return r().createElement(i.Z,e)},pre:function(e){var t,a=e.children;return(0,n.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?null==a?void 0:a.props.children:r().createElement(l.Z,(0,n.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:m("h1"),h2:m("h2"),h3:m("h3"),h4:m("h4"),h5:m("h5"),h6:m("h6")}},24608:function(e,t,a){"use strict";a.r(t);var n=a(67294),r=a.n(n),i=a(48648),l=a(24973);t.default=function(){return r().createElement(i.Z,{title:"Page Not Found"},r().createElement("main",{className:"container margin-vert--xl"},r().createElement("div",{className:"row"},r().createElement("div",{className:"col col--6 col--offset-3"},r().createElement("h1",{className:"hero__title"},r().createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r().createElement("p",null,r().createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r().createElement("p",null,r().createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},6979:function(e,t,a){"use strict";var n=a(67294),r=a.n(n),i=a(94184),l=a.n(i),o=a(52263),c=a(5977),s=a(2644);t.Z=function(e){var t=(0,n.useState)(!1),i=t[0],d=t[1],u=(0,n.useRef)(null),m=(0,o.default)().siteConfig,h=(void 0===m?{}:m).themeConfig.algolia,p=(0,c.k6)(),b=(0,s.Z)().navigateToSearchPage;var f=function(e){void 0===e&&(e=!0),i||Promise.all([Promise.all([a.e(4362),a.e(5525)]).then(a.t.bind(a,14362,23)),Promise.all([a.e(532),a.e(3343)]).then(a.bind(a,53343))]).then((function(t){var a=t[0].default;d(!0),window.docsearch=a,function(e){window.docsearch({appId:h.appId,apiKey:h.apiKey,indexName:h.indexName,inputSelector:"#search_input_react",algoliaOptions:h.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1},handleSelected:function(e,t,a){t.stopPropagation();var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;p.push(r)}}),e&&u.current.focus()}(e)}))},v=(0,n.useCallback)((function(){f(),i&&u.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),E=(0,n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),g=(0,n.useCallback)((function(e){var t="mouseover"!==e.type;f(t)})),k=(0,n.useCallback)((function(e){e.defaultPrevented||"Enter"!==e.key||b(e.target.value)}));return r().createElement("div",{className:"navbar__search",key:"search-box"},r().createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:v,onKeyDown:v,tabIndex:0}),r().createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:g,onFocus:g,onBlur:E,onKeyDown:k,ref:u}))}}}]);