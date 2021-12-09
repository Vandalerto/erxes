(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5222],{82964:function(e,t,n){"use strict";n.d(t,{u:function(){return i},P:function(){return c}});var r=n(67294),a=n.n(r),l=n(69713).Z,o=n(50210);function i(e,t){return a().createElement(a().Fragment,null,e&&a().createElement(o.Z,{className:"language-javascript"},"import "+e+' from "erxes-ui/lib/components/'+e+'";'),t&&a().createElement(a().Fragment,null,a().createElement("p",null,a().createElement("required",null,"* required prop")),a().createElement(l,null,a().createElement("thead",null,a().createElement("tr",null,a().createElement("th",null,"Name"),a().createElement("th",null,"Type"),a().createElement("th",null,"Default"),a().createElement("th",null,"Description"))),a().createElement("tbody",null,t.map((function(e,t){return a().createElement("tr",{key:t},e.map((function(e,t){return a().createElement("td",{key:t},"*"===e[e.length-1]?a().createElement(a().Fragment,null,e.slice(0,-1),a().createElement("required",null,"*")):a().createElement(a().Fragment,null,e))})))}))))))}function c(e){var t=JSON.stringify(e);return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/{}/g,"")).replace(/{"/g,"")).replace(/":/g,"=")).replace(/,"/g," ")).replace(/}/g,"")).replace(/=true/g,"")).replace(/"</g,"{<")).replace(/>"/g,">}")).replace(/true/g,"{true}")).replace(/false/g,"{false}")}},7125:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return h}});var r=n(74034),a=n(79973),l=n(67294),o=n.n(l),i=n(3905),c=n(31106),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function u(e){return o().createElement(c.X,s({},e))}function p(e){return o().createElement(c.P,s({},e))}var d=n(50210),m=n(82964);function b(e){var t=e.type,n=e.table,r=void 0===n?[]:n,a=["Tab 1","Tab 2","Tab 3"],i=(0,l.useState)(),c=i[0],s=i[1],b=function(e){var t;return(t={})[e]=!0,t},f=function(e){return o().createElement(o().Fragment,null,o().createElement(u,b(e),a.map((function(e,t){return o().createElement(o().Fragment,null,o().createElement(p,{onClick:function(){return function(e){s("Content of tab"+(e+1))}(t)},key:t},e))}))),o().createElement("div",null,c),o().createElement("br",null),o().createElement(d.Z,{className:"language-jsx"},"<>\n\t<Tabs "+(t=b(e),JSON.stringify(t).replace(/{}/g,"").replace(/{"/g,"").replace(/":/g,"=").replace(/,"/g," ").replace(/}/g,"").replace(/=true/g,"").replace(/id/g,"")+">\n         ")+a.map((function(e,t){return" <TabTitle onClick={() => handleSelect("+t+")}>"+e+"</TabTitle>\n\t"})).join("")+"</Tabs>\n\t<div>{content}</div>\n</>"));var t};return"full"===t?f("full"):"border"===t?f("grayBorder"):"id"===t?f("id"):"APItabs"===t?o().createElement(o().Fragment,null,o().createElement(d.Z,{className:"language-javascript"},'import Tabs from "erxes-ui/lib/components/tabs/index";'),(0,m.u)("",r)):"before"===t?o().createElement(o().Fragment,null,o().createElement(d.Z,{className:"language-javascript"},'import React, {useState} from "react";'),o().createElement(d.Z,{className:"language-javascript"},'const [content, setContent] = useState();\nconst handleSelect = (index) => {\n      setContent("Content of tab" + (index + 1));\n    };')):"APItabtitle"===t?o().createElement(o().Fragment,null,o().createElement(d.Z,{className:"language-javascript"},'import TabTitle from "erxes-ui/lib/components/tabs/index";'),(0,m.u)("",r)):f()}var f={id:"tabs",title:"Tabs"},g={unversionedId:"components/Tabs/tabs",id:"components/Tabs/tabs",isDocsHomePage:!1,title:"Tabs",description:"Dynamic tabbed interfaces.",source:"@site/docs/components/Tabs/tabs.md",sourceDirName:"components/Tabs",slug:"/components/Tabs/tabs",permalink:"/components/Tabs/tabs",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/components/Tabs/tabs.md",version:"current",lastUpdatedBy:"enkhzule",lastUpdatedAt:1638773199,formattedLastUpdatedAt:"12/6/2021",frontMatter:{id:"tabs",title:"Tabs"},sidebar:"components",previous:{title:"Table",permalink:"/components/Table/table"},next:{title:"Tags",permalink:"/components/Tag/tag"}},h=[{value:"Example",id:"example",children:[]},{value:"Full",id:"full",children:[]},{value:"Border",id:"border",children:[]},{value:"API",id:"api",children:[{value:"Tabs",id:"tabs",children:[]},{value:"TabTitle",id:"tabtitle",children:[]}]}],x={toc:h};function T(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dynamic tabbed interfaces."),(0,i.kt)("p",null,(0,i.kt)("code",null,"handleSelect")," is triggered when tab is clicked."),(0,i.kt)(b,{type:"before",mdxType:"TabsComponent"}),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Simple example of tabs. "),(0,i.kt)(b,{type:"id",mdxType:"TabsComponent"}),(0,i.kt)("h2",{id:"full"},"Full"),(0,i.kt)("p",null,"Display tab title full length."),(0,i.kt)(b,{type:"full",mdxType:"TabsComponent"}),(0,i.kt)("h2",{id:"border"},"Border"),(0,i.kt)("p",null,"Make border darker."),(0,i.kt)(b,{type:"border",mdxType:"TabsComponent"}),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"tabs"},"Tabs"),(0,i.kt)(b,{type:"APItabs",table:[["children*","React.ReactNode","","Contain TabTitle components"],["grayborder","boolean","","Make border darker"],["full","boolean","","Display context full screen"]],mdxType:"TabsComponent"}),(0,i.kt)("h3",{id:"tabtitle"},"TabTitle"),(0,i.kt)(b,{type:"APItabtitle",table:[["children*","React.ReactNode","","Shows tab content"],["onClick","function","","Define click handler function"],["className","string","","Define className"]],mdxType:"TabsComponent"}))}T.isMDXComponent=!0},31106:function(e,t,n){"use strict";n.d(t,{X:function(){return u},P:function(){return p}});var r,a,l=n(29163),o=n(131),i=n.n(o),c=n(76091),s=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},u=i()(l.ZP.div)(r||(r=s(["\n  border-bottom: 1px solid\n    ",";\n  margin-bottom: -1px;\n  position: relative;\n  z-index: 2;\n  display: flex;\n  justify-content: ",";\n  flex-shrink: 0;\n  height: ","px;\n"],["\n  border-bottom: 1px solid\n    ",";\n  margin-bottom: -1px;\n  position: relative;\n  z-index: 2;\n  display: flex;\n  justify-content: ",";\n  flex-shrink: 0;\n  height: ","px;\n"])),(function(e){return e.grayBorder?c.O9.borderDarker:c.O9.borderPrimary}),(function(e){return e.full&&"space-evenly"}),c.MB.headerSpacing),p=l.ZP.span(a||(a=s(["\n  cursor: pointer;\n  display: inline-block;\n  color: ",";\n  font-weight: ",";\n  padding: 15px ","px;\n  position: relative;\n  transition: all ease 0.3s;\n\n  &:hover {\n    color: ",";\n  }\n\n  i {\n    margin-right: 3px;\n  }\n\n  &.active {\n    color: ",";\n    font-weight: 500;\n\n    &:before {\n      border-bottom: 3px solid ",";\n      content: '';\n      width: 100%;\n      position: absolute;\n      z-index: 1;\n      left: 0;\n      bottom: -1px;\n    }\n  }\n"],["\n  cursor: pointer;\n  display: inline-block;\n  color: ",";\n  font-weight: ",";\n  padding: 15px ","px;\n  position: relative;\n  transition: all ease 0.3s;\n\n  &:hover {\n    color: ",";\n  }\n\n  i {\n    margin-right: 3px;\n  }\n\n  &.active {\n    color: ",";\n    font-weight: 500;\n\n    &:before {\n      border-bottom: 3px solid ",";\n      content: '';\n      width: 100%;\n      position: absolute;\n      z-index: 1;\n      left: 0;\n      bottom: -1px;\n    }\n  }\n"])),c.O9.textSecondary,c.cp.fontWeightRegular,c.MB.coreSpacing,c.O9.textPrimary,c.O9.textPrimary,c.O9.colorSecondary)}}]);