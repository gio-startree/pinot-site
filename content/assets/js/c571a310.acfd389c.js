/*! For license information please see c571a310.acfd389c.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6900],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6261:function(e,t,n){"use strict";var a=n(7294),r=n(4184),l=n.n(r);t.Z=function(e){var t=e.children,n=e.classNames,r=e.fill,i=e.icon,s=e.type,o=null;switch(s){case"danger":case"warning":o="alert-triangle";break;case"success":o="check-circle";break;default:o="info"}return a.createElement("div",{className:l()(n,"alert","alert--"+s,{"alert--fill":r,"alert--icon":!1!==i}),role:"alert"},!1!==i&&a.createElement("i",{className:l()("feather","icon-"+(i||o))}),t)}},9342:function(e,t,n){"use strict";var a=n(7294),r=n(3699),l=n(4184),i=n.n(l);t.Z=function(e){var t=e.children,n=e.className,l=e.badge,s=e.icon,o=e.size,c=e.target,u=e.to,p=i()("jump-to","jump-to--"+o,n),m=a.createElement("div",{className:"jump-to--inner"},a.createElement("div",{className:"jump-to--inner-2"},a.createElement("div",{className:"jump-to--main"},l?a.createElement("span",{className:"badge badge--primary badge--right"},l):"",t),a.createElement("div",{className:"jump-to--right"},a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return c?a.createElement("a",{href:u,target:c,className:p},m):a.createElement(r.Z,{to:u,className:p},m)}},6546:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(4137)),i=n(6261),s=n(9342),o=["components"],c={title:"AWS Quickstart",sidebar_label:"AWS",description:"Run Pinot on AWS",draft:!0},u=void 0,p={unversionedId:"administration/installation/cloud/aws",id:"administration/installation/cloud/aws",title:"AWS Quickstart",description:"Run Pinot on AWS",source:"@site/docs/administration/installation/cloud/aws.md",sourceDirName:"administration/installation/cloud",slug:"/administration/installation/cloud/aws",permalink:"/docs/administration/installation/cloud/aws",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/administration/installation/cloud/aws.md",tags:[],version:"current",frontMatter:{title:"AWS Quickstart",sidebar_label:"AWS",description:"Run Pinot on AWS",draft:!0},sidebar:"docs",previous:{title:"Kubernetes",permalink:"/docs/administration/installation/cloud/on-premise"},next:{title:"GCP",permalink:"/docs/administration/installation/cloud/gcp"}},m=[{value:"Tooling Installation",id:"tooling-installation",children:[],level:2},{value:"(Optional) Login to your AWS account",id:"optional-login-to-your-aws-account",children:[{value:"(Optional) Create a Kubernetes cluster(EKS) in AWS",id:"optional-create-a-kubernetes-clustereks-in-aws",children:[],level:3}],level:2},{value:"Connect to an existing cluster",id:"connect-to-an-existing-cluster",children:[],level:2},{value:"Pinot Quickstart",id:"pinot-quickstart",children:[],level:2},{value:"Delete a Kubernetes Cluster",id:"delete-a-kubernetes-cluster",children:[],level:2}],d={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document provides the basic instruction to set up a Kubernetes Cluster on ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/eks/"},"Amazon Elastic Kubernetes Service (Amazon EKS)")),(0,l.kt)(i.Z,{type:"info",mdxType:"Alert"}," Because Pinot must be manually updated on Nix, new Pinot releases will be delayed. Generally new Pinot releases are made available within a few days."),(0,l.kt)("h2",{id:"tooling-installation"},"Tooling Installation"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install Pinot"),(0,l.kt)("p",{parentName:"li"},"Please follow this link (",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl"},"https://kubernetes.io/docs/tasks/tools/install-kubectl"),") to install kubectl."),(0,l.kt)("p",{parentName:"li"},"For Mac User"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kubernetes-cli\n")),(0,l.kt)("p",{parentName:"li"},"Please check kubectl version after installation:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl version\n")),(0,l.kt)(i.Z,{icon:!1,type:"info",mdxType:"Alert"},"QuickStart scripts are tested under kubectl client version v1.16.3 and server version v1.13.12")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install Helm"),(0,l.kt)("p",{parentName:"li"},"Please follow this link (",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/using_helm/#installing-helm"},"https://helm.sh/docs/using_helm/#installing-helm"),") to install helm."),(0,l.kt)("p",{parentName:"li"},"For Mac User"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kubernetes-helm\n")),(0,l.kt)("p",{parentName:"li"},"Please check helm version after installation."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm version\n")),(0,l.kt)(i.Z,{icon:!1,type:"info",mdxType:"Alert"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This QuickStart provides helm supports for helm v3.0.0 and v2.12.1."),(0,l.kt)("li",{parentName:"ul"},"Please pick the script based on your helm version.")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install AWS CLI"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"(https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html#install-tool-bundled)"},"Install AWS CLI")),(0,l.kt)("p",{parentName:"li"},"For Mac User"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://d1vvhvl2y92vvt.cloudfront.net/awscli-exe-macos.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install Eksctl"),(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html#installing-eksctl"},"AWS CLI")),(0,l.kt)("p",{parentName:"li"},"For Mac User"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap weaveworks/tap\nbrew install weaveworks/tap/eksctl\n")))),(0,l.kt)("h2",{id:"optional-login-to-your-aws-account"},"(Optional) Login to your AWS account"),(0,l.kt)("p",null,"For first time AWS user, please register your ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/"},"aws account")),(0,l.kt)("p",null,"Once created the account, you can go to ",(0,l.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home#/home"},"AWS Identity and Access Management (IAM)")," to create a user and create access keys under Security Credential tab."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"aws configure\n")),(0,l.kt)(i.Z,{type:"info",mdxType:"Alert"}," Environment variables AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY will override  AWS configuration stored in file ~/.aws/credentials"),(0,l.kt)("h3",{id:"optional-create-a-kubernetes-clustereks-in-aws"},"(Optional) Create a Kubernetes cluster(EKS) in AWS"),(0,l.kt)("p",null,"Below script will create a 3 nodes cluster named pinot-quickstart in us-west-2 with t3.small machines for demo purposes.\nPlease modify the parameters in the example command below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"EKS_CLUSTER_NAME=pinot-quickstart\neksctl create cluster \\\n  --name ${EKS_CLUSTER_NAME} \\\n  --version 1.14 \\\n  --region us-west-2 \\\n  --nodegroup-name standard-workers \\\n  --node-type t3.small \\\n  --nodes 3 \\\n  --nodes-min 3 \\\n  --nodes-max 4 \\\n  --node-ami auto\n")),(0,l.kt)("p",null,"You can monitor cluster status by command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"EKS_CLUSTER_NAME=pinot-quickstart\naws eks describe-cluster --name ${EKS_CLUSTER_NAME}\n")),(0,l.kt)("p",null,"Once the cluster is in ACTIVE status, it's ready to be used."),(0,l.kt)("h2",{id:"connect-to-an-existing-cluster"},"Connect to an existing cluster"),(0,l.kt)("p",null,"Simply run below command to get the credential for the cluster pinot-quickstart that you just created or your existing cluster."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"EKS_CLUSTER_NAME=pinot-quickstart\naws eks update-kubeconfig --name ${EKS_CLUSTER_NAME}\n")),(0,l.kt)("p",null,"To verify the connection, you can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes\n")),(0,l.kt)("h2",{id:"pinot-quickstart"},"Pinot Quickstart"),(0,l.kt)("p",null,"Please follow this ",(0,l.kt)("a",{parentName:"p",href:"/docs/administration/installation/cloud/on-premises"},"Kubernetes QuickStart")," to deploy your Pinot Demo."),(0,l.kt)(s.Z,{to:"/docs/administration/installation/cloud/on-premises",mdxType:"Jump"},"Kubernetes Quickstart"),(0,l.kt)("h2",{id:"delete-a-kubernetes-cluster"},"Delete a Kubernetes Cluster"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"EKS_CLUSTER_NAME=pinot-quickstart\naws eks delete-cluster --name ${EKS_CLUSTER_NAME}\n")))}k.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var s in n)a.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);