(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3437],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return h}});var r=a(67294),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n().createContext({}),c=function(e){var t=n().useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return n().createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n().createElement(n().Fragment,{},t)}},d=n().forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return a?n().createElement(h,s(s({ref:t},p),{},{components:a})):n().createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n().createElement.apply(null,o)}return n().createElement.apply(null,a)}d.displayName="MDXCreateElement"},86714:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=a(74034),n=a(79973),i=(a(67294),a(3905)),o={slug:"release-0.13.0",title:"Erxes v0.13.0 release information",author:"Munkhjargal Gankhuyag",author_title:"Project manager at Erxes Inc, an open source growth marketing platform",author_image_url:"https://secure.gravatar.com/avatar/73467e8b969211b33f8d7f8fa30dc854?s=96&d=mm&r=g",tags:["release note","open source"]},s={permalink:"/blog/release-0.13.0",source:"@site/blog/2020-03-017-release-note-v0.13.0.md",title:"Erxes v0.13.0 release information",description:"Welcome to the March 2020 release of Erxes. The number of updates and new features are highlighted in this version. Therefore, the breaking change has done in this release. Major features of the 0.13.0 series, compared to release 0.12.0\\.",date:"2020-03-01T00:00:00.000Z",formattedDate:"March 1, 2020",tags:[{label:"release note",permalink:"/blog/tags/release-note"},{label:"open source",permalink:"/blog/tags/open-source"}],readingTime:4.595,truncated:!0,prevItem:{title:"Install erxes with a 1-Click App on Heroku",permalink:"/blog/install-erxes-on-heroku"},nextItem:{title:"Erxes v0.12.0 release information",permalink:"/blog/release-0.12.0"}},l=[],p={toc:l};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the March 2020 release of Erxes. The number of updates and new features are highlighted in this version. Therefore, the breaking change has done in this release. Major features of the 0.13.0 series, compared to release 0.12.0","."),(0,i.kt)("h4",{id:"whats-new"},"What\u2019s new:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Added mandatory fields as BIRTHDAY and GENDER in customer basic info field.")," In gender field, there is options as Not known, Male, Female and not Applicable.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Deal, Ticket, Task cards can be shown their first 20 items list on each sections respectively.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Added activity logs on Deal, ticket, Task cards."),' It shows checklists log which created and deleted log in main activity tab by click on "show details".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Store environment variables into database.")," Updating environment variables like UPLOAD FILE TYPES requiring backend services to restarted. It is complicated that non-technical users manage to backend service variables. Now it would be simple to restore env variables from the database with frontend interfaces.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ability to call submit action in form from parent website as well as ability to change css from parent."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Changed UI of Gowthhack page entirely.")," Also UI of channel and brand pages are improved.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Erxes user manual has updated according to new release with novel features.")," Doing everything manually by ourselves is time-consuming and it can be frustrating as everyone does not have the proper knowledge to do so. There are added some technical tutorials on documentations such install the services, integrate the API services, set up our developed features. For instance, How to integrate Google API services, Nylas integration on Erxes etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Heroku deployment:")," Erxes has successfully built to supporting services on Heroku.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Erxes language has expanded to support by Indonesian and")," ",(0,i.kt)("strong",{parentName:"p"},"Italian languages."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The contacts feature is added more FILTER value BY BRAND.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The knowledgebase feature can be reacted reaction as a Happy, Sad, Like, Dislike go on. Also KB able to run without iframe.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Reimplement segments using elasticsearch.")," We introduced elasticsearch to our architecture. Using\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yougov/mongo-connector"},"https://github.com/yougov/mongo-connector"),"\xa0to sync customers and companies collection on MongoDB with elasticsearch. Every time if there is any change in these collections those changes will be synced to elasticsearch automatically. By doing this we are performing all customer and company-related filters using elasticsearch which is very efficient, fast and scalable segment method. Additionally we have implemented events feature in segments.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Added showErxesMessenger trigger in the messenger"),". It was complicated to fix the position of launcher icon to the bottom, especially on mobile, since it overlapped with other elements, particularly bottom navbar. Hence, while it is attached to the scope of the body on a single page app, it will remain on other pages as well. Now it would be great if a messenger can be launched programmatically like erxes.launch() on some user interaction, \u201clike clicking on request for help button\u201d. Rather than attaching to document, there should be an option to attach the erxes launcher to a specific element, as it causes the problem in single-page apps since it is not ideal to display the launcher icon in every page. Additionally, Erxes messenger has an ability to hide launcher from admin.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Erxes now supports video calls service.")," It allows us to easy to create and configure on-demand video call URLs by using the Daily.co API integration.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Added archive function in Deal, Task, Ticket and Growth hacking cards.")," All cards can be archived and then it can be looked back and sent to board task or list.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Added email verification service.")," Some email services such AWS SES possible to directly block for unverified emails. So it is necessary to verify email using email verification service like TrueMail before sending email in order to prevent the server would block verified emails."))),(0,i.kt)("h4",{id:"improvements-and-bug-fixes"},"Improvements and Bug fixes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Fixed copy card with labels in Deal, Ticket, Task , GrowthHack")," ",(0,i.kt)("strong",{parentName:"p"},"cards.")," It was lost labels on the copied version whilst copy the cards.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Allowed docker file permission.")," Docker allows the root user to change the owner and group assigned to files, directories and links.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Erxes alert to show wrong version information."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"In the form:")," It is checked whether multiple submit or not, then shows for loading information.Also fixed error of checkbox for event trigger when values are entered or changed in the input.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"While upload the forbidden file in the messenger, it alerts the error message.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Fixed bug in mail send and resolve button to send mail as to be resolved automatically.")," Therefore, if there is missed the argument for submitting, it will alert us the missed arguments.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fixed bug in async initialization of Rabbitmq and Redis server.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fixed bug in Pop-up can not cancelling.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"In the conversation will not be counted the number of left and joined message.")," We considered it is unnecessary information to count in messsageCount field.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rename locale files according to standard and load only selected translation file.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Reset submit state after fail for loading.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Fixed error to remove contacts from import history list.")," It was can not remove contacts if there were too many.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Fixed bug which shows activity log in Deal, Ticket, Task , GrowthHack")," ",(0,i.kt)("strong",{parentName:"p"},"cards."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There will be removed account automatically which is not integrated to any Erxes integrations."))),(0,i.kt)("h4",{id:"breaking-changes"},"Breaking changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Translation"),": Renamed some language codes (np -> hi, jp -> ja, kr -> ko, ptBr -> pt-br, vn -> vi, zh -> zh-cn)")),(0,i.kt)("h4",{id:"more-resources"},"More Resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/erxes/erxes/releases/tag/0.13.0"},"https://github.com/erxes/erxes/releases/tag/0.13.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/erxes/erxes-api/releases/tag/0.13.0"},"https://github.com/erxes/erxes-api/releases/tag/0.13.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/erxes/erxes-integrations/releases/tag/0.13.0"},"https://github.com/erxes/erxes-integrations/releases/tag/0.13.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://erxes.io/blog/posts/erxes-v0-12-0-release-information"},"https://erxes.io/blog/posts/erxes-v0-12-0-release-information"))))}c.isMDXComponent=!0}}]);