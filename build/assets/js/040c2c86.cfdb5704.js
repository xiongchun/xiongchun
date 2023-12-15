"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[5704],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(k,p(p({ref:t},u),{},{components:a})):n.createElement(k,p({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function p(e){let{children:t,hidden:a,className:p}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,p),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),l=a(6010),p=a(2389),i=a(7392),o=a(7094),s=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:p,values:c,groupId:m,className:k}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,i.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:P}=(0,o.U)(),[N,w]=(0,r.useState)(f),A=[],{blockElementScrollPositionUntilNextRender:y}=(0,s.o5)();if(null!=m){const e=v[m];null!=e&&e!==N&&g.some((t=>t.value===e))&&w(e)}const Z=e=>{const t=e.currentTarget,a=A.indexOf(t),n=g[a].value;n!==N&&(y(t),w(n),null!=m&&P(m,String(n)))},T=e=>{let t=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const a=A.indexOf(e.currentTarget)+1;t=A[a]??A[0];break}case"ArrowLeft":{const a=A.indexOf(e.currentTarget)-1;t=A[a]??A[A.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},k)},g.map((e=>{let{value:t,label:a,attributes:p}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>A.push(e),onKeyDown:T,onClick:Z},p,{className:(0,l.Z)("tabs__item",d,p?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,p.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},6633:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>c,assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),p=a(5162);const i={title:"\u76d8\u53e4 APP Starter \u7b80\u4ecb\u53ca\u5feb\u901f\u5165\u95e8",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6","\u5ba2\u6237\u7aef\u5f00\u53d1","APP"],date:"2023-1-2",hide_table_of_contents:!1,slug:"pangu-app-intro-quickstart"},o=void 0,s={permalink:"/blog/blog/pangu-app-intro-quickstart",source:"@site/blog/\u76d8\u53e4 APP Starter \u7b80\u4ecb\u53ca\u5feb\u901f\u5165\u95e8.md",title:"\u76d8\u53e4 APP Starter \u7b80\u4ecb\u53ca\u5feb\u901f\u5165\u95e8",description:"\u76d8\u53e4 APP Starter \u662f\u96c6\u6210\u4e86 uni-app \u5185\u7f6e\u7ec4\u4ef6\u3001\u5b98\u65b9\u6269\u5c55\u7ec4\u4ef6\u548c\u5168\u9762\u517c\u5bb9 nvue \u7684 uni-app \u751f\u6001\u6846\u67b6 uView UI \u7684\u79fb\u52a8\u7aef\u591a\u5e73\u53f0\u5feb\u901f\u5f00\u53d1\u811a\u624b\u67b6\u3002\u7528\u6237\u53ef\u4ee5\u57fa\u4e8e\u6b64\u5b8c\u6210Android/IOS App\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001H5 \u5e94\u7528\u7684\u5feb\u901f\u5f00\u53d1\u3002\uff08\u4e00\u6b21\u5f00\u53d1\uff0c\u9488\u5bf9\u4e0d\u540c\u5e73\u53f0\u7f16\u8bd1\u53d1\u5e03\u7248\u672c\uff09",date:"2023-01-02T00:00:00.000Z",formattedDate:"2023\u5e741\u67082\u65e5",tags:[{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/blog/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"},{label:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6",permalink:"/blog/blog/tags/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"},{label:"\u5ba2\u6237\u7aef\u5f00\u53d1",permalink:"/blog/blog/tags/\u5ba2\u6237\u7aef\u5f00\u53d1"},{label:"APP",permalink:"/blog/blog/tags/app"}],readingTime:8.63,hasTruncateMarker:!0,authors:[{name:"\u7a0b\u5e8f\u5458\u5927\u718a",title:"Pangu Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://xiongchun.pulanit.com/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u76d8\u53e4 APP Starter \u7b80\u4ecb\u53ca\u5feb\u901f\u5165\u95e8",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6","\u5ba2\u6237\u7aef\u5f00\u53d1","APP"],date:"2023-1-2",hide_table_of_contents:!1,slug:"pangu-app-intro-quickstart"},prevItem:{title:"\u76d8\u53e4 Admin \u7b80\u4ecb\u53ca\u5feb\u901f\u5165\u95e8",permalink:"/blog/blog/pangu-dev-framework-admin-intro-quickstart"},nextItem:{title:"\u5f00\u6e90\u5341\u5e74\uff0cAOSuite \u5f00\u53d1\u5e73\u53f0\u505c\u6b62\u7ef4\u62a4 [EOL]",permalink:"/blog/blog/aosuite-eol"}},u={authorsImageUrls:[void 0]},d=[{value:"\u642d\u5efa\u5f00\u53d1\u73af\u5883",id:"\u642d\u5efa\u5f00\u53d1\u73af\u5883",level:2},{value:"\u5de5\u7a0b\u7ed3\u6784\u8bf4\u660e",id:"\u5de5\u7a0b\u7ed3\u6784\u8bf4\u660e",level:3},{value:"\u5f00\u53d1\u73af\u5883\u642d\u5efa",id:"\u5f00\u53d1\u73af\u5883\u642d\u5efa",level:3},{value:"\u5bfc\u5165\u6a21\u7248\u5de5\u7a0b",id:"\u5bfc\u5165\u6a21\u7248\u5de5\u7a0b",level:4},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:4},{value:"H5 Web \u6d4f\u89c8\u5668\u8c03\u8bd5\u542f\u52a8",id:"h5-web-\u6d4f\u89c8\u5668\u8c03\u8bd5\u542f\u52a8",level:4},{value:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6a21\u62df\u5668\u8c03\u8bd5\u542f\u52a8",id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6a21\u62df\u5668\u8c03\u8bd5\u542f\u52a8",level:4},{value:"Android APP \u771f\u673a\u8c03\u8bd5\u542f\u52a8",id:"android-app-\u771f\u673a\u8c03\u8bd5\u542f\u52a8",level:4},{value:"\u5feb\u901f\u5165\u95e8\u6307\u5357",id:"\u5feb\u901f\u5165\u95e8\u6307\u5357",level:2},{value:"\u914d\u7f6e\u5e95\u90e8\u5bfc\u822a\u83dc\u5355",id:"\u914d\u7f6e\u5e95\u90e8\u5bfc\u822a\u83dc\u5355",level:3},{value:"\u914d\u7f6e\u83dc\u5355\u8282\u70b9\u4fe1\u606f",id:"\u914d\u7f6e\u83dc\u5355\u8282\u70b9\u4fe1\u606f",level:4},{value:"\u914d\u7f6e\u83dc\u5355\u8def\u7531\u4fe1\u606f",id:"\u914d\u7f6e\u83dc\u5355\u8def\u7531\u4fe1\u606f",level:4},{value:"\u65b0\u589e\u4e1a\u52a1\u6a21\u5757\u9875\u9762\u8def\u7531",id:"\u65b0\u589e\u4e1a\u52a1\u6a21\u5757\u9875\u9762\u8def\u7531",level:3},{value:"\u90e8\u7f72\u8fd0\u7ef4\u53c2\u8003",id:"\u90e8\u7f72\u8fd0\u7ef4\u53c2\u8003",level:2},{value:"\u53d1\u5e03 H5 Web \u5e94\u7528",id:"\u53d1\u5e03-h5-web-\u5e94\u7528",level:3},{value:"\u53d1\u5e03\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528",id:"\u53d1\u5e03\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528",level:3},{value:"\u7b2c\u4e00\u6b65\uff1a\u6ce8\u518c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8d26\u6237",id:"\u7b2c\u4e00\u6b65\u6ce8\u518c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8d26\u6237",level:5},{value:"\u7b2c\u4e8c\u6b65\uff1a\u7f16\u8bd1\u8f93\u51fa\u5c0f\u7a0b\u5e8f\u6587\u4ef6",id:"\u7b2c\u4e8c\u6b65\u7f16\u8bd1\u8f93\u51fa\u5c0f\u7a0b\u5e8f\u6587\u4ef6",level:5},{value:"\u53d1\u5e03 Android APP \u5e94\u7528",id:"\u53d1\u5e03-android-app-\u5e94\u7528",level:3},{value:"\u76d8\u53e4 APP Starter \u622a\u5c4f",id:"\u76d8\u53e4-app-starter-\u622a\u5c4f",level:2}],c=e=>{let{children:t,color:a}=e;return(0,r.kt)("span",{style:{backgroundColor:a,borderRadius:"3px",color:"#fff",padding:"0.1rem",margin:"0.2rem"}},t)},m={toc:d,Highlight:c};function k(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework/app/intro"},"\u76d8\u53e4 APP Starter")," \u662f\u96c6\u6210\u4e86 uni-app \u5185\u7f6e\u7ec4\u4ef6\u3001\u5b98\u65b9\u6269\u5c55\u7ec4\u4ef6\u548c\u5168\u9762\u517c\u5bb9 nvue \u7684 uni-app \u751f\u6001\u6846\u67b6 uView UI \u7684\u79fb\u52a8\u7aef\u591a\u5e73\u53f0\u5feb\u901f\u5f00\u53d1\u811a\u624b\u67b6\u3002\u7528\u6237\u53ef\u4ee5\u57fa\u4e8e\u6b64\u5b8c\u6210Android/IOS App\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001H5 \u5e94\u7528\u7684\u5feb\u901f\u5f00\u53d1\u3002\uff08\u4e00\u6b21\u5f00\u53d1\uff0c\u9488\u5bf9\u4e0d\u540c\u5e73\u53f0\u7f16\u8bd1\u53d1\u5e03\u7248\u672c\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"uni-app \u4ecb\u7ecd"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://uniapp.dcloud.net.cn"},"uni-app")," \u662f\u4e00\u4e2a\u4f7f\u7528 Vue.js \u5f00\u53d1\u6240\u6709\u524d\u7aef\u5e94\u7528\u7684\u6846\u67b6\uff0c\u5f00\u53d1\u8005\u7f16\u5199\u4e00\u5957\u4ee3\u7801\uff0c\u53ef\u53d1\u5e03\u5230 iOS\u3001Android\u3001Web\uff08\u54cd\u5e94\u5f0f\uff09\u3001\u4ee5\u53ca\u5404\u79cd\u5c0f\u7a0b\u5e8f\uff08\u5fae\u4fe1/\u652f\u4ed8\u5b9d/\u767e\u5ea6/\u5934\u6761/\u98de\u4e66/QQ/\u5feb\u624b/\u9489\u9489/\u6dd8\u5b9d\uff09\u3001\u5feb\u5e94\u7528\u7b49\u591a\u4e2a\u5e73\u53f0\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"uView UI \u4ecb\u7ecd"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.uviewui.com/components/intro.html"},"uView UI")," \u662f\u5168\u9762\u517c\u5bb9 nvue \u7684 uni-app \u751f\u6001\u6846\u67b6\uff0c\u5168\u9762\u7684\u7ec4\u4ef6\u548c\u4fbf\u6377\u7684\u5de5\u5177\u4f1a\u8ba9\u60a8\u4fe1\u624b\u62c8\u6765\uff0c\u5982\u9c7c\u5f97\u6c34\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HBuilderX \u4ecb\u7ecd"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://hx.dcloud.net.cn"},"HbuilderX")," \u662f\u4e00\u6b3e\u514d\u8d39\u7684\u524d\u7aef\u5f00\u53d1 IDE\u3002uni-app \u7684\u591a\u7aef\u7f16\u8bd1\u90e8\u7f72\u80fd\u529b\u4f9d\u8d56\u4e8e\u5b83\u3002\u6240\u4ee5\uff0c\u76d8\u53e4 APP Starter \u7684\u6807\u51c6\u5f00\u53d1\u5de5\u5177\u4e5f\u5c31\u662f HBuilderX\u3002"))),(0,r.kt)("h2",{id:"\u642d\u5efa\u5f00\u53d1\u73af\u5883"},"\u642d\u5efa\u5f00\u53d1\u73af\u5883"),(0,r.kt)("h3",{id:"\u5de5\u7a0b\u7ed3\u6784\u8bf4\u660e"},"\u5de5\u7a0b\u7ed3\u6784\u8bf4\u660e"),(0,r.kt)("p",null,"\u76d8\u53e4 App \u4ed3\u5e93\u4ee3\u7801\u8def\u5f84\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"pangu-framework/pangu-app-starter"),"\u3002"),(0,r.kt)("h3",{id:"\u5f00\u53d1\u73af\u5883\u642d\u5efa"},"\u5f00\u53d1\u73af\u5883\u642d\u5efa"),(0,r.kt)("p",null,"\u7531\u4e8e uni-app \u4f9d\u8d56 HbuilderX\uff0c\u56e0\u6b64\uff0c\u6211\u4eec\u5f00\u53d1\u76d8\u53e4 APP \u7684 IDE \u9009\u62e9\u4e3a HbuilderX\u3002"),(0,r.kt)("h4",{id:"\u5bfc\u5165\u6a21\u7248\u5de5\u7a0b"},"\u5bfc\u5165\u6a21\u7248\u5de5\u7a0b"),(0,r.kt)("p",null,"\u4f7f\u7528 HbuilderX\u300c\u6587\u4ef6 -> \u5bfc\u5165 -> \u4ece\u672c\u5730\u76ee\u5f55\u5bfc\u5165\u300d\u83dc\u5355\uff0c\u5bfc\u5165 pangu-app-starter \u6a21\u7248\u5de5\u7a0b\u3002"),(0,r.kt)("h4",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b89\u88c5\u4f9d\u8d56\u548c\u542f\u52a8\u9700\u4f9d\u8d56npm\u3002\u5b89\u88c5\u65b9\u6cd5\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/zh-cn/"},"https://nodejs.org/zh-cn"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fdb\u5165\u9879\u76ee\u76ee\u5f55\ncd pangu-framework/pangu-app-starter\n# \u5b89\u88c5\u4f9d\u8d56\nnpm i\n")),(0,r.kt)("h4",{id:"h5-web-\u6d4f\u89c8\u5668\u8c03\u8bd5\u542f\u52a8"},"H5 Web \u6d4f\u89c8\u5668\u8c03\u8bd5\u542f\u52a8"),(0,r.kt)("p",null,"\u4f7f\u7528 HbuilderX\u300c\u8fd0\u884c -> \u8fd0\u884c\u5230\u6d4f\u89c8\u5668 -> Chrome\u300d\u83dc\u5355\uff0c\u542f\u52a8\u5de5\u7a0b\u5e76\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)("img",{width:"800",src:a(6296).Z,alt:"\u76d8\u53e4 APP"}),(0,r.kt)("h4",{id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6a21\u62df\u5668\u8c03\u8bd5\u542f\u52a8"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6a21\u62df\u5668\u8c03\u8bd5\u542f\u52a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 HbuilderX \u300c\u8fd0\u884c -> \u8fd0\u884c\u5230\u5c0f\u7a0b\u5e8f\u6a21\u62df\u5668 -> \u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177\u300d\u83dc\u5355\uff0cHbuilderX \u4f1a\u7f16\u8bd1\u8f93\u51fa\u5c0f\u7a0b\u5e8f\u5e94\u7528\u5e76\u8fde\u63a5\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177\u542f\u52a8\u8c03\u8bd5\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002")),(0,r.kt)("img",{width:"800",src:a(4861).Z,alt:"\u76d8\u53e4 APP"}),(0,r.kt)("h4",{id:"android-app-\u771f\u673a\u8c03\u8bd5\u542f\u52a8"},"Android APP \u771f\u673a\u8c03\u8bd5\u542f\u52a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06 Android \u624b\u673a\u7528\u6570\u636e\u7ebf\u4e0e\u7535\u8111\u8fde\u63a5\uff0c\u6253\u5f00\u624b\u673a\u5f00\u53d1\u8005\u8c03\u8bd5\u6a21\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 HbuilderX \u300c\u8fd0\u884c -> \u8fd0\u884c\u5230\u624b\u673a\u6216\u6a21\u62df\u5668 -> \u8fd0\u884c\u5230 Android App \u57fa\u5ea7\u300d\u83dc\u5355\uff0cHbuilderX \u4f1a\u5c06 Android \u57fa\u5ea7\u58f3\u5b50\u5b89\u88c5\u5230\u76ee\u6807\u624b\u673a\uff0c\u5e76\u542f\u52a8\u52a0\u8f7d\u9875\u9762\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002")),(0,r.kt)("img",{width:"350",src:a(5981).Z,alt:"\u76d8\u53e4 APP"}),(0,r.kt)("h2",{id:"\u5feb\u901f\u5165\u95e8\u6307\u5357"},"\u5feb\u901f\u5165\u95e8\u6307\u5357"),(0,r.kt)("h3",{id:"\u914d\u7f6e\u5e95\u90e8\u5bfc\u822a\u83dc\u5355"},"\u914d\u7f6e\u5e95\u90e8\u5bfc\u822a\u83dc\u5355"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5\u8303\u4f8b APP \u5e95\u90e8\u7684\u300c\u7ec4\u4ef6\u300d\u5bfc\u822a\u83dc\u5355\u4e3a\u4f8b\uff0c\u8bf4\u660e\u5982\u4f55\u914d\u7f6e\u9996\u9875\u5e95\u90e8\u7684\u5bfc\u822a\u83dc\u5355\u3002")),(0,r.kt)("h4",{id:"\u914d\u7f6e\u83dc\u5355\u8282\u70b9\u4fe1\u606f"},"\u914d\u7f6e\u83dc\u5355\u8282\u70b9\u4fe1\u606f"),(0,r.kt)("p",null,"\u6253\u5f00 pages.json \u914d\u7f6e\u6587\u4ef6\uff0c\u627e\u5230 tabBar \u8282\u70b9\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"tabBar": {\n  "color": "#303133",\n  "selectedColor": "#529b2e",\n  "borderStyle": "black",\n  "backgroundColor": "#f4f4f5",\n  "list": [{\n   "pagePath": "pages/example/components",\n   "iconPath": "static/common/img/nav/component.png",\n   "selectedIconPath": "static/common/img/nav/component-selected.png",\n   "text": "\u7ec4\u4ef6"\n   }\n   // ...\u5176\u5b83\u83dc\u5355\u914d\u7f6e...\n  ]\n }\n')),(0,r.kt)("h4",{id:"\u914d\u7f6e\u83dc\u5355\u8def\u7531\u4fe1\u606f"},"\u914d\u7f6e\u83dc\u5355\u8def\u7531\u4fe1\u606f"),(0,r.kt)("p",null,"\u914d\u7f6e\u8def\u5f84 pages/example/components \u7684\u8def\u7531\u4fe1\u606f\u3002\u5728 pages.json \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u627e\u5230 pages \u8282\u70b9\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    "pages": [ \n    //pages\u6570\u7ec4\u4e2d\u7b2c\u4e00\u9879\u8868\u793a\u5e94\u7528\u542f\u52a8\u9875\n        {\n            "path": "pages/example/components",\n            "style": {\n                "navigationBarTitleText": "\u7ec4\u4ef6"\n            }\n        }\n    // ...\u5176\u5b83\u8def\u7531\u914d\u7f6e...\n  ]\n')),(0,r.kt)("p",null,"\u8be5\u8def\u7531\u914d\u7f6e\u5bf9\u5e94\u89c6\u56fe\u6587\u4ef6\uff1apages/example/components.nvue\u3002"),(0,r.kt)("h3",{id:"\u65b0\u589e\u4e1a\u52a1\u6a21\u5757\u9875\u9762\u8def\u7531"},"\u65b0\u589e\u4e1a\u52a1\u6a21\u5757\u9875\u9762\u8def\u7531"),(0,r.kt)("p",null,"\u53c2\u8003 pages.json \u76f8\u5173\u914d\u7f6e\u6587\u4ef6\u5373\u53ef\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u5173\u4e8e pages.json \u7684\u914d\u7f6e\uff0c\u8bf7\u67e5\u9605 uni-app ",(0,r.kt)("a",{parentName:"p",href:"https://uniapp.dcloud.net.cn/collocation/pages.html"},"\u76f8\u5173\u6587\u6863"),"\u3002")),(0,r.kt)("h2",{id:"\u90e8\u7f72\u8fd0\u7ef4\u53c2\u8003"},"\u90e8\u7f72\u8fd0\u7ef4\u53c2\u8003"),(0,r.kt)("h3",{id:"\u53d1\u5e03-h5-web-\u5e94\u7528"},"\u53d1\u5e03 H5 Web \u5e94\u7528"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5c06\u5de5\u7a0b\u53d1\u5e03\u4e3a\u624b\u673a H5 Web \u5e94\u7528\u90e8\u7f72\u5230\u9759\u6001\u8d44\u6e90\u670d\u52a1\u5668\uff0c\u53ef\u901a\u8fc7\u5fae\u4fe1/\u624b\u673a\u6d4f\u89c8\u5668\u7b49\u8bbf\u95ee\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 HbuilderX\u300c\u53d1\u884c -> \u7f51\u7ad9 PC-Web \u6216\u624b\u673a H5\u300d\u83dc\u5355\uff0c\u7f16\u8bd1\u6210\u529f\u540e\u6267\u884c\u6587\u4ef6\u5c06\u4f1a\u8f93\u51fa\u5230 unpackage/build/dist/h5 \u76ee\u5f55\u4e0b\u3002\u5c06\u8be5\u76ee\u5f55\u4e0b\u6587\u4ef6\u76f4\u63a5\u53d1\u5e03\u5230 Web \u670d\u52a1\u5668\u5373\u53ef\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u4e0b\u4e3a\u53d1\u5e03\u6210\u529f\u7684\u76d8\u53e4 APP Starter \u6a21\u677f\u5de5\u7a0b\u7684 H5 Web \u5e94\u7528\u3002 "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u5fae\u4fe1\u6216\u624b\u673a\u6d4f\u89c8\u5668\u626b\u7801\u8bbf\u95ee"),(0,r.kt)("img",{width:"150",src:a(7663).Z,alt:"\u76d8\u53e4 APP Starter"})),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u7535\u8111\u7aef\u6d4f\u89c8\u5668\u6a21\u62df\u8bbf\u95ee",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://pangu-app-starter.pulanit.com/h5.html"},"https://pangu-app-starter.pulanit.com/h5.html")," ")))),(0,r.kt)("h3",{id:"\u53d1\u5e03\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528"},"\u53d1\u5e03\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u4e8b\u5148\u5b89\u88c5\u597d\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177\u3002",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html"},"\u4e0b\u8f7d\u5b89\u88c5"))),(0,r.kt)("h5",{id:"\u7b2c\u4e00\u6b65\u6ce8\u518c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8d26\u6237"},"\u7b2c\u4e00\u6b65\uff1a\u6ce8\u518c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8d26\u6237"),(0,r.kt)("p",null,"\u5728\u5fae\u4fe1 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com"},"\u516c\u4f17\u5e73\u53f0")," \u6ce8\u518c\u5c0f\u7a0b\u5e8f\u8d26\u6237\u3002\uff08\u6ce8\u610f\uff1a\u4e00\u4e2a\u90ae\u7bb1\u5730\u5740\u6ce8\u518c\u4e00\u4e2a\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8d26\u6237\uff09\u3002\u767b\u5f55\u540e\u6839\u636e\u63d0\u793a\u751f\u6210\u5fae\u4fe1\u5c0f\u7a0b\u5e8f AppID\u3002\uff08\u540e\u7eed\u53d1\u5e03\u5c06\u4f1a\u4f7f\u7528\uff09"),(0,r.kt)("h5",{id:"\u7b2c\u4e8c\u6b65\u7f16\u8bd1\u8f93\u51fa\u5c0f\u7a0b\u5e8f\u6587\u4ef6"},"\u7b2c\u4e8c\u6b65\uff1a\u7f16\u8bd1\u8f93\u51fa\u5c0f\u7a0b\u5e8f\u6587\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 HbuilderX\u300c\u53d1\u884c -> \u5c0f\u7a0b\u5e8f-\u5fae\u4fe1\u300d\u83dc\u5355\uff0c\u5728\u5f39\u51fa\u7684\u5bf9\u8bdd\u6846\u4e2d\u586b\u5165\u4e0a\u4e00\u6b65\u7684 AppID\u3002\uff08\u6ce8\u610f\uff1a\u4e0d\u8981\u9009\u62e9\u81ea\u52a8\u4e0a\u4f20\u5230\u5fae\u4fe1\u5e73\u53f0\u9009\u9879\u3002\uff09\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)("img",{width:"500",src:a(9122).Z,alt:"\u76d8\u53e4 APP"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb\u300c\u53d1\u884c\u300d\u6309\u94ae\u540e\u4f1a\u5f00\u59cb\u7f16\u8bd1\u5c0f\u7a0b\u5e8f\u8f93\u51fa\u6587\u4ef6\u5e76\u81ea\u52a8\u6253\u5f00\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177\u5bfc\u5165\u5c0f\u7a0b\u5e8f\u6587\u4ef6\u3002\u63a5\u7740\u4f7f\u7528\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177\u7684\u300c\u4e0a\u4f20\u4ee3\u7801\u300d\u6309\u94ae\uff0c\u5c06\u5c0f\u7a0b\u5e8f\u6587\u4ef6\u4e0a\u4f20\u5230\u5fae\u4fe1\u516c\u4f17\u5e73\u53f0\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)("img",{width:"600",src:a(8231).Z,alt:"\u76d8\u53e4 APP"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6700\u540e\u5c31\u662f\u4e00\u4e2a\u5fae\u4fe1\u5e73\u53f0\u7684\u4ee3\u7801\u5ba1\u6838\u3001\u53d1\u5e03\u4e0a\u7ebf\u7684\u6d41\u7a0b\u5373\u53ef\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002\u6839\u636e\u540e\u53f0\u63d0\u793a\u64cd\u4f5c\u5373\u53ef\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u4e0b\u4e8c\u7ef4\u7801\u662f\u53d1\u5e03\u6210\u529f\u7684\u76d8\u53e4 APP Starter \u6a21\u677f\u5de5\u7a0b\u7684\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u793a\u4f8b\u3002"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u5fae\u4fe1\u626b\u7801\u4f53\u9a8c"),(0,r.kt)("img",{width:"150",src:a(3114).Z,alt:"\u76d8\u53e4 APP"})))),(0,r.kt)("h3",{id:"\u53d1\u5e03-android-app-\u5e94\u7528"},"\u53d1\u5e03 Android APP \u5e94\u7528"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5c06\u5de5\u7a0b\u6253\u5305\u53d1\u5e03\u4e3a\u539f\u751f Android APP \u5e94\u7528\u3002\u5bf9\u4e8e.vue \u9875\u9762\u5c06\u4f7f\u7528 webview \u6e32\u67d3\u673a\u5236\uff1b\u5982\u679c\u4f7f\u7528 .nvue \u9875\u9762(native vue \u7684\u7f29\u5199)\uff0c\u5219\u4f7f\u7528\u539f\u751f\u6e32\u67d3\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 HbuilderX \u300c\u8fd0\u884c -> \u539f\u751fAPP-\u4e91\u6253\u5305\u300d\u83dc\u5355\uff0c\u6253\u5f00\u6253\u5305\u914d\u7f6e\u7a97\u53e3\u3002\u5982\u4e0b\u56fe\u6240\u793a\u4e3a\u6700\u4fbf\u6377\u7684\u914d\u7f6e\u7a97\u53e3\u3002\uff08\u9ad8\u7ea7\u7528\u6cd5\uff1a\u81ea\u5b9a\u4e49\u8bc1\u4e66\u3001\u81ea\u5b9a\u4e49\u57fa\u5ea7\u7b49\u53ef\u53c2\u8003uni-app \u548c HbuilderX \u76f8\u5173\u6587\u6863\uff09"),(0,r.kt)("img",{width:"600",src:a(1761).Z,alt:"\u76d8\u53e4 APP"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb\u300c\u6253\u5305\u300d\u6309\u94ae\uff0cIDE \u5c06\u5b8c\u6210\u4e91\u7aef\u6253\u5305\u3002\u6253\u5305\u7ed3\u675f\u540e\uff0c.apk \u5b89\u88c5\u5305\u5c06\u8f93\u51fa\u5230\uff1aunpackage/release/apk \u76ee\u5f55\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u4e0b\u662f\u53d1\u5e03\u6210\u529f\u7684\u76d8\u53e4 APP Starter \u6a21\u677f\u5de5\u7a0b\u7684 Android \u539f\u751f APP \u793a\u4f8b\u3002 "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u624b\u673a\u6d4f\u89c8\u5668\u626b\u7801\u4e0b\u8f7d\u5b89\u88c5\uff08\u5fae\u4fe1\u626b\u7801\u65e0\u6548\uff09"),(0,r.kt)("img",{width:"150",src:a(8953).Z,alt:"\u76d8\u53e4 APP Starter"})))),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u7c7b\u578b\u7684\u5e94\u7528\u53d1\u5e03\u65b9\u5f0f\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://uniapp.dcloud.net.cn/"},"uni-app")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://hx.dcloud.net.cn/"},"HbuilderX")," \u76f8\u5173\u6587\u6863\u3002")),(0,r.kt)("h2",{id:"\u76d8\u53e4-app-starter-\u622a\u5c4f"},"\u76d8\u53e4 APP Starter \u622a\u5c4f"),(0,r.kt)("p",null,"\u5982\u4e0b\u4e3a\u76d8\u53e4 APP Starter \u7684\u90e8\u5206\u622a\u5c4f\u3002\u5b8c\u6574\u4f53\u9a8c\u8bf7\u8bbf\u95ee\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework/online-demo-app"},"\u5728\u7ebf\u6f14\u793a"),"\u3002"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"1",label:"1",mdxType:"TabItem"},(0,r.kt)("img",{width:"350",src:a(5981).Z,alt:"\u76d8\u53e4 APP Starter"})),(0,r.kt)(p.Z,{value:"2",label:"2",mdxType:"TabItem"},(0,r.kt)("img",{width:"350",src:a(3946).Z,alt:"\u76d8\u53e4 APP Starter"})),(0,r.kt)(p.Z,{value:"3",label:"3",mdxType:"TabItem"},(0,r.kt)("img",{width:"350",src:a(3699).Z,alt:"\u76d8\u53e4 APP Starter"})),(0,r.kt)(p.Z,{value:"4",label:"4",mdxType:"TabItem"},(0,r.kt)("img",{width:"350",src:a(5807).Z,alt:"\u76d8\u53e4 APP Starter"})),(0,r.kt)(p.Z,{value:"5",label:"5",mdxType:"TabItem"},(0,r.kt)("img",{width:"350",src:a(2262).Z,alt:"\u76d8\u53e4 APP Starter"})),(0,r.kt)(p.Z,{value:"6",label:"6",mdxType:"TabItem"},(0,r.kt)("img",{width:"350",src:a(2245).Z,alt:"\u76d8\u53e4 APP Starter"})),(0,r.kt)(p.Z,{value:"7",label:"7",mdxType:"TabItem"},(0,r.kt)("img",{width:"350",src:a(3979).Z,alt:"\u76d8\u53e4 APP Starter"})),(0,r.kt)(p.Z,{value:"8",label:"8",mdxType:"TabItem"},(0,r.kt)("img",{width:"350",src:a(1346).Z,alt:"\u76d8\u53e4 APP Starter"})),(0,r.kt)(p.Z,{value:"9",label:"9",mdxType:"TabItem"},(0,r.kt)("img",{width:"350",src:a(6096).Z,alt:"\u76d8\u53e4 APP Starter"})),(0,r.kt)(p.Z,{value:"10",label:"10",mdxType:"TabItem"},(0,r.kt)("img",{width:"350",src:a(3738).Z,alt:"\u76d8\u53e4 APP Starter"})),(0,r.kt)(p.Z,{value:"11",label:"11",mdxType:"TabItem"},(0,r.kt)("img",{width:"350",src:a(2163).Z,alt:"\u76d8\u53e4 APP Starter"}))))}k.isMDXComponent=!0},5981:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1-a66c1c9ac895da03cb67006e0dba5393.jpeg"},3738:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/10-78aa79e0ec0105a8c773f1b17828b0c6.jpeg"},2163:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/11-77bb921162f22118f1c7940bf77aa36d.jpeg"},6296:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-483177a151537512bcb0dda8c77720a5.png"},4861:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/13-d3c87c571e2086e807ec8019b4cff93e.png"},9122:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/14-06e4a2531fb7f5d5290658e1a31f0bb6.png"},8231:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/15-4bc1543375d44cc94dc026486f708e39.png"},3114:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/16-f10759511517d51d1a3dfa8884d50518.jpg"},1761:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/17-ecdc1e420d96165e4f82e9a2a6cddbf0.png"},7663:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/18-dc6e887dbaa8688dd6e9811eecb10812.png"},8953:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/19-a670486ab8f869101147654e07a77bf6.png"},3946:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2-3d796ddba72dc141d18e7c2c9c4f5538.jpeg"},3699:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/3-82097038c31269abcadc0a6d9d9d1f41.jpeg"},5807:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4-1fecc381a305e02030b78faa8693f8c1.jpeg"},2262:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/5-d059e621d4c6229ef840d2e6193649a0.jpeg"},2245:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/6-99fd5a827eeb40285ce1ecb100d9962b.jpeg"},3979:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/7-5910dbb0670a8d290a62971eaf6229d6.jpeg"},1346:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/8-947312dc5cb9091b2d6e6a06637ff5c5.jpeg"},6096:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/9-dd795eaf37ba0d1e7e1a59bc5eb68577.jpeg"}}]);