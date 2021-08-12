"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2315],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6055:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(4137)),o=["components"],l={title:"Monitoring business performance data with ThirdEye smart alerts",author:"LinkedIn",author_title:"LinkedIn Engineering Team",author_url:"https://engineering.linkedin.com/blog/topic/pinot",author_image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/512px-Linkedin_icon.svg.png",description:"Focus on using large set intersection cardinality approximations with Apache Pinot and Theta Sketches, which allow us to efficiently figure out the unique size of a targeted audience when factoring in multiple criteria of an advertising campaign.",keywords:["Pinot","LinkedIn","User-Facing Analytics","Smart alerts","Automated User facing dashboards","Real-time data platform"],tags:["Pinot","LinkedIn","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},s=void 0,c={permalink:"/blog/2020/06/25/LinkedIn-SmartAlerts",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2020-06-25-LinkedIn-SmartAlerts.md",source:"@site/blog/2020-06-25-LinkedIn-SmartAlerts.md",title:"Monitoring business performance data with ThirdEye smart alerts",description:"Focus on using large set intersection cardinality approximations with Apache Pinot and Theta Sketches, which allow us to efficiently figure out the unique size of a targeted audience when factoring in multiple criteria of an advertising campaign.",date:"2020-06-25T00:00:00.000Z",formattedDate:"June 25, 2020",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"LinkedIn",permalink:"/blog/tags/linked-in"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.22,truncated:!1,prevItem:{title:"Building LinkedIn Talent Insights to democratize data-driven decision making",permalink:"/blog/2020/06/29/LinkedIn-TalentInsight"},nextItem:{title:"Using Apache Pinot and Kafka to Analyze GitHub Events",permalink:"/blog/2020/04/10/DevBlog-AnalyzeGitEvents"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Explain how ThirdEye smart alerts and automated dashboards helped the LinkedIn Premium business operations team monitor key metrics\u2014such as new free trial signups\u2014for the timely detection of outliers in business performance data."),(0,a.kt)("p",null,"Read More at ",(0,a.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2020/monitoring-business-performance-data-with-thirdeye-smart-alerts"},"https://engineering.linkedin.com/blog/2020/monitoring-business-performance-data-with-thirdeye-smart-alerts")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2020/06/thirdeye_business_performance-3.png",alt:"Monitoring business performance data with ThirdEye smart alerts"})))}m.isMDXComponent=!0}}]);