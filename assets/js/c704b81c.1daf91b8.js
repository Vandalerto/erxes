(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5615],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return p},kt:function(){return m}});var n=i(67294),r=i.n(n);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function u(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=r().createContext({}),c=function(e){var t=r().useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=c(e.components);return r().createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},g=r().forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(i),g=n,m=p["".concat(a,".").concat(g)]||p[g]||d[g]||o;return i?r().createElement(m,s(s({ref:t},l),{},{components:i})):r().createElement(m,s({ref:t},l))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return r().createElement.apply(null,a)}return r().createElement.apply(null,i)}g.displayName="MDXCreateElement"},62793:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var n=i(74034),r=i(79973),o=(i(67294),i(3905)),a={id:"contributing-guide",title:"Contributing guide"},s={unversionedId:"getting-started/contributing-guide",id:"getting-started/contributing-guide",isDocsHomePage:!1,title:"Contributing guide",description:"Contributing to Erxes",source:"@site/docs/getting-started/contributing-guide.md",sourceDirName:"getting-started",slug:"/getting-started/contributing-guide",permalink:"/getting-started/contributing-guide",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/getting-started/contributing-guide.md",version:"current",lastUpdatedBy:"M. Munkhsaihan",lastUpdatedAt:1621341581,formattedLastUpdatedAt:"5/18/2021",frontMatter:{id:"contributing-guide",title:"Contributing guide"},sidebar:"docs",previous:{title:"Upgrade",permalink:"/installation/upgrade"},next:{title:"How to send pull requests",permalink:"/getting-started/submitting"}},u=[{value:"Contributing to Erxes",id:"contributing-to-erxes",children:[{value:"Found a Bug?",id:"found-a-bug",children:[]},{value:"Missing a Feature?",id:"missing-a-feature",children:[]}]},{value:"Submission Guidelines",id:"submission-guidelines",children:[{value:"Submitting an Issue",id:"submitting-an-issue",children:[]},{value:"Your First Contribution",id:"your-first-contribution",children:[]}]},{value:"Swag for Contributions",id:"swag-for-contributions",children:[]}],l={toc:u};function c(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"contributing-to-erxes"},"Contributing to Erxes"),(0,o.kt)("p",null,"We would love for you to contribute to Erxes and help make it even better than it is today! As a contributor, here are the guidelines we would like you to follow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#found-a-bug"},"Issues and Bugs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#missing-a-feature"},"Feature Requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#submission-guidelines"},"Submission Guidelines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#coding-standards"},"Coding Standards")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#commit-message-guidelines"},"Commit Message Guidelines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#swag-for-contributions"},"Swag for Contributions"))),(0,o.kt)("h3",{id:"found-a-bug"},"Found a Bug?"),(0,o.kt)("p",null,"If you find a bug in the source code, you can help us by ",(0,o.kt)("a",{parentName:"p",href:"#submitting-an-issue"},"submitting an issue")," to our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/erxes/erxes"},"GitHub Repository"),". Even better, you can ",(0,o.kt)("a",{parentName:"p",href:"#submitting-a-pull-request-pr"},"submit a Pull Request")," with a fix."),(0,o.kt)("h3",{id:"missing-a-feature"},"Missing a Feature?"),(0,o.kt)("p",null,"You can request a new feature by ","[submitting an issue]"," to our GitHub Repository. If you would like to ",(0,o.kt)("em",{parentName:"p"},"implement")," a new feature, please submit an issue with a proposal for your work first, to be sure that we can use it. Please consider what kind of change it is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For a ",(0,o.kt)("strong",{parentName:"p"},"Major Feature"),", first open an issue and outline your proposal so that it can be discussed. This will also allow us to better coordinate our efforts, prevent duplication of work, and help you to craft the change so that it is successfully accepted into the project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Small Features")," can be crafted and directly ",(0,o.kt)("a",{parentName:"p",href:"#submitting-a-pull-request-pr"},"submitted as a Pull Request"),"."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"submission-guidelines"},"Submission Guidelines"),(0,o.kt)("h3",{id:"submitting-an-issue"},"Submitting an Issue"),(0,o.kt)("p",null,"Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available."),(0,o.kt)("p",null,"We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. In order to reproduce bugs, we will systematically ask you to provide a minimal reproduction. Having a minimal reproducible scenario gives us a wealth of important information without going back & forth to you with additional questions."),(0,o.kt)("p",null,"A minimal reproduction allows us to quickly confirm a bug (or point out a coding problem) as well as confirm that we are fixing the right problem."),(0,o.kt)("p",null,"We will be insisting on a minimal reproduction scenario in order to save maintainers time and ultimately be able to fix more bugs. Interestingly, from our experience users often find coding problems themselves while preparing a minimal reproduction. We understand that sometimes it might be hard to extract essential bits of code from a larger code-base but we really need to isolate the problem before we can fix it."),(0,o.kt)("p",null,"Unfortunately, we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you we are going to close an issue that doesn't have enough info to be reproduced."),(0,o.kt)("p",null,"You can file new issues by selecting from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/erxes/erxes/issues/new/choose"},"new issue templates")," and filling out the issue template."),(0,o.kt)("h3",{id:"your-first-contribution"},"Your First Contribution"),(0,o.kt)("p",null,"Working on your first Pull Request? You can learn how from this ",(0,o.kt)("em",{parentName:"p"},"free")," series, ",(0,o.kt)("a",{parentName:"p",href:"https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github"},"How to Contribute to an Open Source Project on GitHub"),"."),(0,o.kt)("h2",{id:"swag-for-contributions"},"Swag for Contributions"),(0,o.kt)("p",null,"To show our appreciation, we are sending everyone who contributes to erxes a special package, which includes a t-shirt and stickers. ",(0,o.kt)("a",{parentName:"p",href:"https://erxes.io/hubspot-alternative-erxes-swag"},"Click here")," to claim your swag. (Worldwide free shipping included!)"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://erxes.io/static/images/swag.gif",alt:"erxes Swag"})))}c.isMDXComponent=!0}}]);