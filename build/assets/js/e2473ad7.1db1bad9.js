"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[1691],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(7462),a=r(7294),o=r(6010),l=r(2389),i=r(7392),c=r(7094),s=r(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:r,defaultValue:l,values:m,groupId:f,className:d}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,i.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,c.U)(),[w,O]=(0,a.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==w&&g.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,r=N.indexOf(t),n=g[r].value;n!==w&&(E(t),O(n),null!=f&&k(f,String(n)))},T=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=N.indexOf(e.currentTarget)+1;t=N[r]??N[0];break}case"ArrowLeft":{const r=N.indexOf(e.currentTarget)-1;t=N[r]??N[N.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},d)},g.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:T,onClick:x},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function f(e){const t=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},3386:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(5488),r(5162);const o={title:"\u57fa\u4e8e Nacos \u5b9e\u73b0\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u914d\u7f6e\u4e2d\u5fc3",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6","Nacos"],date:"2019-8-18",hide_table_of_contents:!1,slug:"pangu-dev-framework-configuration-center"},l=void 0,i={permalink:"/blog/blog/pangu-dev-framework-configuration-center",source:"@site/blog/\u57fa\u4e8e Nacos \u5b9e\u73b0\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u914d\u7f6e\u4e2d\u5fc3.md",title:"\u57fa\u4e8e Nacos \u5b9e\u73b0\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u914d\u7f6e\u4e2d\u5fc3",description:"\u914d\u7f6e\u4e2d\u5fc3\u4f5c\u4e3a\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u5f00\u53d1\u7684\u6807\u914d\u7ec4\u4ef6\uff0c\u4e1a\u754c\u5df2\u6709\u5f88\u591a\u6210\u529f\u7684\u5178\u578b\u5e94\u7528\uff0c\u5982\uff1a\u643a\u7a0b Apollo \u5206\u5e03\u5f0f\u914d\u7f6e\u4e2d\u5fc3\u3001\u767e\u5ea6 Disconf \u5206\u5e03\u5f0f\u914d\u7f6e\u4e2d\u5fc3\u7b49\u3002\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 \u914d\u7f6e\u4e2d\u5fc3\u57fa\u4e8e\u963f\u91cc\u7684 Nacos \u63d0\u4f9b\u52a8\u6001\u914d\u7f6e\u670d\u52a1\u3002",date:"2019-08-18T00:00:00.000Z",formattedDate:"2019\u5e748\u670818\u65e5",tags:[{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/blog/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"},{label:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6",permalink:"/blog/blog/tags/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"},{label:"Nacos",permalink:"/blog/blog/tags/nacos"}],readingTime:9.985,hasTruncateMarker:!0,authors:[{name:"\u7a0b\u5e8f\u5458\u5927\u718a",title:"Pangu Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://xiongchun.pulanit.com/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u57fa\u4e8e Nacos \u5b9e\u73b0\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u914d\u7f6e\u4e2d\u5fc3",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6","Nacos"],date:"2019-8-18",hide_table_of_contents:!1,slug:"pangu-dev-framework-configuration-center"},prevItem:{title:"\u57fa\u4e8e ShardingSphere \u7684\u8bfb\u5199\u5206\u79bb\u6570\u636e\u6cbb\u7406",permalink:"/blog/blog/pangu-dev-framework-readwrite-splitting"},nextItem:{title:"\u57fa\u4e8e Nacos \u5b9e\u73b0\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3",permalink:"/blog/blog/pangu-dev-framework-service-discovery-center"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u914d\u7f6e\u4e2d\u5fc3\u4f5c\u4e3a\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u5f00\u53d1\u7684\u6807\u914d\u7ec4\u4ef6\uff0c\u4e1a\u754c\u5df2\u6709\u5f88\u591a\u6210\u529f\u7684\u5178\u578b\u5e94\u7528\uff0c\u5982\uff1a\u643a\u7a0b Apollo \u5206\u5e03\u5f0f\u914d\u7f6e\u4e2d\u5fc3\u3001\u767e\u5ea6 Disconf \u5206\u5e03\u5f0f\u914d\u7f6e\u4e2d\u5fc3\u7b49\u3002",(0,a.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6")," \u914d\u7f6e\u4e2d\u5fc3\u57fa\u4e8e\u963f\u91cc\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/index.html"},"Nacos")," \u63d0\u4f9b\u52a8\u6001\u914d\u7f6e\u670d\u52a1\u3002"))}p.isMDXComponent=!0}}]);