"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8788],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2212:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(4137)),o=["components"],c={title:"Bridging batch and stream processing for the Recruiter usage statistics dashboard",author:"LinkedIn",author_title:"LinkedIn Engineering Team",author_url:"https://engineering.linkedin.com/blog/topic/pinot",author_image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/512px-Linkedin_icon.svg.png",description:"Focus on using large set intersection cardinality approximations with Apache Pinot and Theta Sketches, which allow us to efficiently figure out the unique size of a targeted audience when factoring in multiple criteria of an advertising campaign.",keywords:["Pinot","LinkedIn","Batch Realtime Data Pipelines","User-Facing Analytics","Real-time data platform"],tags:["Pinot","LinkedIn","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},l=void 0,s={permalink:"/blog/2020/07/14/LinkedIn-BatchRealtime",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2020-07-14-LinkedIn-BatchRealtime.md",source:"@site/blog/2020-07-14-LinkedIn-BatchRealtime.md",title:"Bridging batch and stream processing for the Recruiter usage statistics dashboard",description:"Focus on using large set intersection cardinality approximations with Apache Pinot and Theta Sketches, which allow us to efficiently figure out the unique size of a targeted audience when factoring in multiple criteria of an advertising campaign.",date:"2020-07-14T00:00:00.000Z",formattedDate:"July 14, 2020",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"LinkedIn",permalink:"/blog/tags/linked-in"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.205,truncated:!1,prevItem:{title:"Moving developers up the stack with Apache Pinot",permalink:"/blog/2020/07/28/DevBlog-DevUpStack"},nextItem:{title:"Building LinkedIn Talent Insights to democratize data-driven decision making",permalink:"/blog/2020/06/29/LinkedIn-TalentInsight"}},p=[],g={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Batch and streaming computations are often combined together in the Lambda architecture,\nbut carry the cost of maintaining two different code bases for the same logic."),(0,a.kt)("p",null,"Read More at ",(0,a.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2020/bridging-batch-and-stream-processing"},"https://engineering.linkedin.com/blog/2020/bridging-batch-and-stream-processing")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2020/07/bridging-1.png",alt:"Bridging batch and stream processing for the Recruiter usage statistics dashboard"})))}u.isMDXComponent=!0}}]);