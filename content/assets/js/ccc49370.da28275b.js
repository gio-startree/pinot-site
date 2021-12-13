"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103],{4532:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),l=a(4175),i=a(3074),o=a(5191),r=a(7325),s=a(3699);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(1297),v=a(9260);var g=function(e){var t,a=e.content,r=e.sidebar,s=a.frontMatter,g=a.assets,d=a.metadata,p=d.title,u=d.description,b=d.nextItem,_=d.prevItem,f=d.date,N=d.tags,h=d.authors,E=s.hide_table_of_contents,k=s.keywords,C=s.toc_min_heading_level,Z=s.toc_max_heading_level,L=null!=(t=g.image)?t:s.image;return n.createElement(i.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:r,toc:!E&&a.toc&&a.toc.length>0?n.createElement(v.Z,{toc:a.toc,minHeadingLevel:C,maxHeadingLevel:Z}):void 0},n.createElement(l.Z,{title:p,description:u,keywords:k,image:L},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:f}),h.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:h.map((function(e){return e.url})).filter(Boolean).join(",")}),N.length>0&&n.createElement("meta",{property:"article:tag",content:N.map((function(e){return e.label})).join(",")})),n.createElement(o.Z,{frontMatter:s,assets:g,metadata:d,isBlogPostPage:!0},n.createElement(a,null)),(b||_)&&n.createElement(c,{nextItem:b,prevItem:_}))}},9260:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),l=a(3366),i=a(7294),o=a(6010),r=a(4202),s="tableOfContents_vrFS",c=["className"];var m=function(e){var t=e.className,a=(0,l.Z)(e,c);return i.createElement("div",{className:(0,o.Z)(s,"thin-scrollbar",t)},i.createElement(r.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},4202:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),i=a(7294),o=a(1297),r=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,v=void 0===m?"table-of-contents__link":m,g=e.linkActiveClassName,d=void 0===g?void 0:g,p=e.minHeadingLevel,u=e.maxHeadingLevel,b=(0,l.Z)(e,r),_=(0,o.LU)(),f=null!=p?p:_.tableOfContents.minHeadingLevel,N=null!=u?u:_.tableOfContents.maxHeadingLevel,h=(0,o.DA)({toc:t,minHeadingLevel:f,maxHeadingLevel:N}),E=(0,i.useMemo)((function(){if(v&&d)return{linkClassName:v,linkActiveClassName:d,minHeadingLevel:f,maxHeadingLevel:N}}),[v,d,f,N]);return(0,o.Si)(E),i.createElement(s,(0,n.Z)({toc:h,className:c,linkClassName:v},b))}}}]);