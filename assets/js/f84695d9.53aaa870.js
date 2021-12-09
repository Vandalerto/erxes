(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4951],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return y}});var a=n(67294),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r().createContext({}),u=function(e){var t=r().useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r().createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r().createElement(r().Fragment,{},t)}},m=r().forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,y=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?r().createElement(y,l(l({ref:t},p),{},{components:n})):r().createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r().createElement.apply(null,i)}return r().createElement.apply(null,n)}m.displayName="MDXCreateElement"},61592:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),i={id:"aws",title:"AWS Marketplace"},l={unversionedId:"installation/aws",id:"installation/aws",isDocsHomePage:!1,title:"AWS Marketplace",description:"Launch an EC2 instance using erxes in the AWS Marketplace.",source:"@site/docs/installation/aws.md",sourceDirName:"installation",slug:"/installation/aws",permalink:"/installation/aws",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/installation/aws.md",version:"current",lastUpdatedBy:"BatAmar Battulga",lastUpdatedAt:1606318468,formattedLastUpdatedAt:"11/25/2020",frontMatter:{id:"aws",title:"AWS Marketplace"}},s=[{value:"Create an admin user",id:"create-an-admin-user",children:[]},{value:"Load initial data",id:"load-initial-data",children:[]},{value:"Use your own domain",id:"use-your-own-domain",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Launch an EC2 instance using ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/marketplace/pp/B086MZ9FVS/"},"erxes")," in the AWS Marketplace.",(0,o.kt)("br",{parentName:"p"}),"\n","Once you have created the EC2 instance using erxes AMI product in the AWS Marketplace, you will then have erxes up and running and it will be accessible by public hostname of the EC2 instance."),(0,o.kt)("h2",{id:"create-an-admin-user"},"Create an admin user"),(0,o.kt)("p",null,"Connect to your EC2 instance via ssh."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ssh -i your.pem ubuntu@your-instance-dns")),(0,o.kt)("p",null,"Run the following commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo su erxes\ncd ~/erxes-api\nexport MONGO_URL=mongodb://localhost/erxes?replicaSet=rs0\n")),(0,o.kt)("p",null,"The following will create an admin user ",(0,o.kt)("a",{parentName:"p",href:"mailto:admin@erxes.io"},"admin@erxes.io")," with a random password (check your console to grab the password)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn initProject\n")),(0,o.kt)("h2",{id:"load-initial-data"},"Load initial data"),(0,o.kt)("p",null,"The below command will create initial permission groups, permissions, growth hack templates, email templates and some sample data and reset the admin password (check your console to grab the password)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn loadInitialData\n")),(0,o.kt)("p",null,"If do not want to load sample data then you can run the following command just to load permissions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn loadPermission\n")),(0,o.kt)("p",null,"Now you can access erxes using the EC2 public hostname.",(0,o.kt)("br",{parentName:"p"}),"\n","Hooray!!!"),(0,o.kt)("h2",{id:"use-your-own-domain"},"Use your own domain"),(0,o.kt)("p",null,"To be able to use your own domain with erxes, you will need to do a few steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update your domain DNS records - point your domain to your EC2 public IP address. The DNS changes may take up to 72 hours to propagate worldwide.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log in to your server as ",(0,o.kt)("inlineCode",{parentName:"p"},"erxes")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/erxes/erxes/ui/build/js/env.js")," file where env vars for frontend app are stored.\nThe content of the file should be as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'window.env = {\n  PORT: 3000,\n  NODE_ENV: "production",\n  REACT_APP_API_URL: "http://your_domain/api",\n  REACT_APP_API_SUBSCRIPTION_URL: "ws://your_domain/api/subscriptions",\n  REACT_APP_CDN_HOST: "http://your_domain/widgets"\n};\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update all env vars with HTTP url in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/erxes/ecosystem.json")," file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now, you need to restart pm2 erxes processes by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pm2 restart ecosystem.json\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Switch to ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," user and update your nginx config\n",(0,o.kt)("inlineCode",{parentName:"p"},"server_name")," with your domain.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Lastly reload your nginx service by running ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl reload nginx")))),(0,o.kt)("p",null,"Now you can use erxes with your own domain."))}u.isMDXComponent=!0}}]);