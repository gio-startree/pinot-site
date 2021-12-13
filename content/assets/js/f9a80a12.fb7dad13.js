"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8660],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),l=n(1048),o=n(2713);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(1297),s=n(6010),p="tabItem_vU9c";function c(e){var t,n,a,l=e.lazy,o=e.block,c=e.defaultValue,m=e.values,d=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,u.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(t=null!=c?c:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=b[0])?void 0:a.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),N=g.tabGroupChoices,y=g.setTabGroupChoices,P=(0,r.useState)(v),w=P[0],S=P[1],T=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=N[d];null!=E&&E!==w&&f.some((function(e){return e.value===E}))&&S(E)}var C=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==w&&(O(t),S(a),null!=d&&y(d,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},k)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":w===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:C,onClick:C},null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},6591:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(4137)),o=n(7225),i=n(8448),u=["components"],s={title:"Running Pinot in Docker",sidebar_label:"Docker",description:"Using Pinot on Docker",source_url:"https://github.com/",draft:!0},p=void 0,c={unversionedId:"administration/installation/containers/docker",id:"administration/installation/containers/docker",title:"Running Pinot in Docker",description:"Using Pinot on Docker",source:"@site/docs/administration/installation/containers/docker.md",sourceDirName:"administration/installation/containers",slug:"/administration/installation/containers/docker",permalink:"/docs/administration/installation/containers/docker",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/administration/installation/containers/docker.md",tags:[],version:"current",frontMatter:{title:"Running Pinot in Docker",sidebar_label:"Docker",description:"Using Pinot on Docker",source_url:"https://github.com/",draft:!0},sidebar:"docs",previous:{title:"Running Pinot locally",permalink:"/docs/administration/running_locally"},next:{title:"Kubernetes",permalink:"/docs/administration/installation/cloud/on-premise"}},m=[{value:"Running",id:"running",children:[],level:2}],d={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Apache Pinot started maintaing the ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apachepinot/pinot"},(0,l.kt)("inlineCode",{parentName:"a"},"apachepinot/pinot"))," Docker images\navailable on ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apachepinot/pinot/tags"},"Docker Hub")),(0,l.kt)("blockquote",null,(0,l.kt)("b",null,"Prerequisites:")," ",(0,l.kt)("br",null)," ",(0,l.kt)("p",null,"\xa0 ",(0,l.kt)("a",{href:"https://hub.docker.com/editions/community/docker-ce-desktop-mac",target:"_blank"},"Install Docker"),(0,l.kt)("br",null)," \xa0Try ",(0,l.kt)("a",{href:"https://hub.docker.com/editions/community/docker-ce-desktop-mac",target:"_blank"},"Kubernetes Quickstart")," if you already have a minikube cluster or docker kubernetes setup.")),(0,l.kt)("h2",{id:"running"},"Running"),(0,l.kt)("p",null,"Create an isolated bridge network in docker"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker network create -d bridge pinot-demo\n")),(0,l.kt)("p",null,"We'll be running a docker image apachepinot/pinot:latest to run a quick start, which does the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sets up the Pinot cluster QuickStartCluster"),(0,l.kt)("li",{parentName:"ul"},"Creates a sample table and loads sample data")),(0,l.kt)("p",null,"There's 3 types of quick start"),(0,l.kt)(o.Z,{block:!0,defaultValue:"Batch",urlKey:"arch",values:[{label:"Batch",value:"Batch"},{label:"Streaming",value:"Streaming"},{label:"Hybrid",value:"Hybrid"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Batch",mdxType:"TabItem"},(0,l.kt)("p",null,"Batch"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Starts Pinot deployment by starting:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache Zookeeper"),(0,l.kt)("li",{parentName:"ul"},"Pinot Controller"),(0,l.kt)("li",{parentName:"ul"},"Pinot Broker"),(0,l.kt)("li",{parentName:"ul"},"Pinot Server"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Creates a demo table:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"baseballStats"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Launches a standalone data ingestion job:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"build one Pinot segment for a given csv data file for table baseballStats"),(0,l.kt)("li",{parentName:"ul"},"push built segment to Pinot controller"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Issues sample queries to Pinot"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  --network=pinot-demo \\\n  --name pinot-quickstart \\\n  -p 9000:9000 \\\n  -d apachepinot/pinot:latest QuickStart \\\n  -type batch\n"))))),(0,l.kt)(i.Z,{value:"Streaming",mdxType:"TabItem"},(0,l.kt)("p",null,"Streaming:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Starts Pinot deployment by starting:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache Kafka"),(0,l.kt)("li",{parentName:"ul"},"Apache Zookeeper"),(0,l.kt)("li",{parentName:"ul"},"Pinot Controller"),(0,l.kt)("li",{parentName:"ul"},"Pinot Broker"),(0,l.kt)("li",{parentName:"ul"},"Pinot Server"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Creates a demo table: ",(0,l.kt)("strong",{parentName:"p"},"meetupRsvp"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Launches a ",(0,l.kt)("strong",{parentName:"p"},"meetup")," stream and publish data to a Kafka: ",(0,l.kt)("strong",{parentName:"p"},"meetupRSVPEvents")," to be subscribed by Pinot")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Issues sample queries to Pinot")))),(0,l.kt)(i.Z,{value:"Hybrid",mdxType:"TabItem"},(0,l.kt)("p",null,"Hybrid:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Starts Pinot deployment by starting:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache Kafka"),(0,l.kt)("li",{parentName:"ul"},"Apache Zookeeper"),(0,l.kt)("li",{parentName:"ul"},"Pinot Controller"),(0,l.kt)("li",{parentName:"ul"},"Pinot Broker"),(0,l.kt)("li",{parentName:"ul"},"Pinot Server"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Creates a demo table: ",(0,l.kt)("strong",{parentName:"p"},"airlineStats"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Launches a standalone data ingestion job:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"build Pinot segments under a given directory of Avro files for table airlineStats"),(0,l.kt)("li",{parentName:"ul"},"push built segments to Pinot controller"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Launches a stream of flights stats and publish data to a Kafka topic airlineStatsEvents to be subscribed by Pinot")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Issues sample queries to Pinot"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Stop previous container, if any, or use different network\ndocker run \\\n    --network=pinot-demo \\\n    --name pinot-quickstart \\\n    -p 9000:9000 \\\n    -d apachepinot/pinot:latest QuickStart \\\n    -type hybrid\n")))),(0,l.kt)("p",null,"That's it! We've spun up a Pinot cluster."),(0,l.kt)("p",null,"It may take a while for all Pinot components to start and for the sample data to be loaded. Use the below command to check the container logs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs pinot-quickstart -f\n")),(0,l.kt)("p",null,"You can head over to  Exploring Pinot to check out the data in the ",(0,l.kt)("inlineCode",{parentName:"p"},"baseballStats"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"meetupRSVP")," or the ",(0,l.kt)("inlineCode",{parentName:"p"},"airlineStats")," table."))}k.isMDXComponent=!0}}]);