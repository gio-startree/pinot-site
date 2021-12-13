/*! For license information please see 3d8d21df.237ef791.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6535],{4137:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||l[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9342:function(e,t,r){"use strict";var n=r(7294),o=r(3699),a=r(4184),i=r.n(a);t.Z=function(e){var t=e.children,r=e.className,a=e.badge,c=e.icon,u=e.size,s=e.target,p=e.to,l=i()("jump-to","jump-to--"+u,r),f=n.createElement("div",{className:"jump-to--inner"},n.createElement("div",{className:"jump-to--inner-2"},n.createElement("div",{className:"jump-to--main"},a?n.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),n.createElement("div",{className:"jump-to--right"},n.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return s?n.createElement("a",{href:p,target:s,className:l},f):n.createElement(o.Z,{to:p,className:l},f)}},5411:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(4137)),i=r(9342),c=["components"],u={title:"About",description:"About Pinot",sidebar_label:"hidden",hide_pagination:!0,draft:!0},s=void 0,p={unversionedId:"about",id:"about",title:"About",description:"About Pinot",source:"@site/docs/about.md",sourceDirName:".",slug:"/about",permalink:"/docs/about",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/about.md",tags:[],version:"current",frontMatter:{title:"About",description:"About Pinot",sidebar_label:"hidden",hide_pagination:!0,draft:!0}},l=[],f={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provide basic foundation of Pinot."),(0,a.kt)(i.Z,{to:"/docs/about/what_is_pinot/",mdxType:"Jump"},"What is Pinot?"),(0,a.kt)(i.Z,{to:"/docs/about/features_of_pinot/",mdxType:"Jump"},"Features of Pinot"),(0,a.kt)(i.Z,{to:"/docs/about/guarantees/",mdxType:"Jump"},"Who is using Pinot?"))}m.isMDXComponent=!0},4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}}]);