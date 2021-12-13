/*! For license information please see f5cd6b6b.fd3a604d.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7601],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8448:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},7225:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),l=n(1048),o=n(2713);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(1297),u=n(6010),c="tabItem_vU9c";function p(e){var t,n,a,l=e.lazy,o=e.block,p=e.defaultValue,d=e.values,m=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=i(),y=v.tabGroupChoices,N=v.setTabGroupChoices,w=(0,r.useState)(g),P=w[0],S=w[1],E=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=y[m];null!=C&&C!==P&&f.some((function(e){return e.value===C}))&&S(C)}var q=function(e){var t=e.currentTarget,n=E.indexOf(t),a=f[n].value;a!==P&&(x(t),S(a),null!=m&&N(m,a))},K=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},k)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":P===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:K,onFocus:q,onClick:q},null!=n?n:t)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function d(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},9342:function(e,t,n){"use strict";var a=n(7294),r=n(3699),l=n(4184),o=n.n(l);t.Z=function(e){var t=e.children,n=e.className,l=e.badge,i=e.icon,s=e.size,u=e.target,c=e.to,p=o()("jump-to","jump-to--"+s,n),d=a.createElement("div",{className:"jump-to--inner"},a.createElement("div",{className:"jump-to--inner-2"},a.createElement("div",{className:"jump-to--main"},l?a.createElement("span",{className:"badge badge--primary badge--right"},l):"",t),a.createElement("div",{className:"jump-to--right"},a.createElement("i",{className:"feather icon-"+(i||"chevron-right")+" arrow"}))));return u?a.createElement("a",{href:c,target:u,className:p},d):a.createElement(r.Z,{to:c,className:p},d)}},8955:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(4137)),o=(n(7225),n(8448),n(9342)),i=["components"],s={title:"Running Pinot in Kubernetes",sidebar_label:"Kubernetes",description:"Running Pinot in Kubernetes",draft:!0},u=void 0,c={unversionedId:"administration/installation/cloud/on-premise",id:"administration/installation/cloud/on-premise",title:"Running Pinot in Kubernetes",description:"Running Pinot in Kubernetes",source:"@site/docs/administration/installation/cloud/on-premise.md",sourceDirName:"administration/installation/cloud",slug:"/administration/installation/cloud/on-premise",permalink:"/docs/administration/installation/cloud/on-premise",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/administration/installation/cloud/on-premise.md",tags:[],version:"current",frontMatter:{title:"Running Pinot in Kubernetes",sidebar_label:"Kubernetes",description:"Running Pinot in Kubernetes",draft:!0},sidebar:"docs",previous:{title:"Docker",permalink:"/docs/administration/installation/containers/docker"},next:{title:"AWS",permalink:"/docs/administration/installation/cloud/aws"}},p=[{value:"Setup a Pinot cluster for demo",id:"setup-a-pinot-cluster-for-demo",children:[{value:"Update helm dependency",id:"update-helm-dependency",children:[],level:3},{value:"Start Pinot with Helm",id:"start-pinot-with-helm",children:[],level:3}],level:2},{value:"Troubleshooting (For helm v2.12.1)",id:"troubleshooting-for-helm-v2121",children:[],level:2},{value:"Load data into Pinot through Kafka",id:"load-data-into-pinot-through-kafka",children:[{value:"Bring up a Kafka Cluster for realtime data ingestion",id:"bring-up-a-kafka-cluster-for-realtime-data-ingestion",children:[],level:3},{value:"Check Kafka deployment status",id:"check-kafka-deployment-status",children:[],level:3},{value:"Create Kafka topics",id:"create-kafka-topics",children:[],level:3},{value:"Load data into Kafka and Create Pinot Schema/Tables",id:"load-data-into-kafka-and-create-pinot-schematables",children:[],level:3}],level:2},{value:"How to query pinot data",id:"how-to-query-pinot-data",children:[{value:"Pinot Query Console",id:"pinot-query-console",children:[],level:3}],level:2},{value:"Use Superset to query Pinot",id:"use-superset-to-query-pinot",children:[{value:"Bring up Superset",id:"bring-up-superset",children:[],level:3},{value:"(First time) Set up Admin account",id:"first-time-set-up-admin-account",children:[],level:3},{value:"(First time) Init Superset",id:"first-time-init-superset",children:[],level:3},{value:"Load Demo Data source",id:"load-demo-data-source",children:[],level:3},{value:"Access Superset UI",id:"access-superset-ui",children:[],level:3}],level:2},{value:"Access Pinot Using Presto",id:"access-pinot-using-presto",children:[{value:"Deploy Presto with Pinot connector",id:"deploy-presto-with-pinot-connector",children:[],level:3},{value:"Query Presto using Presto CLI",id:"query-presto-using-presto-cli",children:[],level:3},{value:"Sample queries to execute",id:"sample-queries-to-execute",children:[],level:3},{value:"How to clean up Pinot deployment",id:"how-to-clean-up-pinot-deployment",children:[],level:3}],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This QuickStart assumes the existence of Kubernetes Cluster. Please follow below links to setup your Kubernetes cluster in local or major cloud vendors."),(0,l.kt)("blockquote",null,(0,l.kt)("b",null,"Prerequisites:")," ",(0,l.kt)("br",null),(0,l.kt)("p",null,"\xa0 ",(0,l.kt)("a",{href:"https://docs.docker.com/docker-for-mac/kubernetes/",target:"_blank"},"Enable Kubernetes on Docker-Desktop"),(0,l.kt)("br",null),"\xa0 ",(0,l.kt)("a",{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/",target:"_blank"},"Setup a Kubernetes Cluster using Amazon Elastic Kubernetes Service (Amazon EKS)")," ",(0,l.kt)("br",null),"\xa0 ",(0,l.kt)("a",{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/",target:"_blank"},"Setup a Kubernetes Cluster using Google Kubernetes Engine(GKE)")," ",(0,l.kt)("br",null),"\xa0 ",(0,l.kt)("a",{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/",target:"_blank"},"Setup a Kubernetes Cluster using Azure Kubernetes Service (AKS)")," ",(0,l.kt)("br",null)," ")),(0,l.kt)("h2",{id:"setup-a-pinot-cluster-for-demo"},"Setup a Pinot cluster for demo"),(0,l.kt)("h3",{id:"update-helm-dependency"},"Update helm dependency"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm dependency update\n")),(0,l.kt)("h3",{id:"start-pinot-with-helm"},"Start Pinot with Helm"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For Helm v2.12.1")),(0,l.kt)("p",null,"If cluster is just initialized, ensure helm is initialized by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm init --service-account tiller\n")),(0,l.kt)("p",null,"Then deploy pinot cluster by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'helm install --namespace "pinot-quickstart" --name "pinot" .\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For Helm v3.0.0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns pinot-quickstart\nhelm install -n pinot-quickstart pinot .\n")),(0,l.kt)("h2",{id:"troubleshooting-for-helm-v2121"},"Troubleshooting (For helm v2.12.1)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Error: Please run below command if encountering issue:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Error: could not find tiller".\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Resolution:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n kube-system delete deployment tiller-deploy\nkubectl -n kube-system delete service/tiller-deploy\nhelm init --service-account tiller\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Error: Please run below command if encountering permission issue:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Error: release pinot failed: namespaces "pinot-quickstart" is forbidden: User "system:serviceaccount:kube-system:default" cannot get resource "namespaces" in API group "" in the namespace "pinot-quickstart"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Resolution:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f helm-rbac.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check deployment status")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get all -n pinot-quickstart\n")),(0,l.kt)("h2",{id:"load-data-into-pinot-through-kafka"},"Load data into Pinot through Kafka"),(0,l.kt)("h3",{id:"bring-up-a-kafka-cluster-for-realtime-data-ingestion"},"Bring up a Kafka Cluster for realtime data ingestion"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For helm v2.12.1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'helm repo add incubator https://charts.helm.sh/incubator\nhelm install --namespace "pinot-quickstart"  --name kafka incubator/kafka\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For helm v3.0.0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add incubator https://charts.helm.sh/incubator\nhelm install -n pinot-quickstart kafka incubator/kafka --set replicas=1\n")),(0,l.kt)("h3",{id:"check-kafka-deployment-status"},"Check Kafka deployment status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get all -n pinot-quickstart |grep kafka\n")),(0,l.kt)("p",null,"Ensure Kafka deployment is ready before executing the scripts in next steps:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pod/kafka-0                                                 1/1     Running     0          2m\npod/kafka-zookeeper-0                                       1/1     Running     0          10m\npod/kafka-zookeeper-1                                       1/1     Running     0          9m\npod/kafka-zookeeper-2                                       1/1     Running     0          8m\n")),(0,l.kt)("h3",{id:"create-kafka-topics"},"Create Kafka topics"),(0,l.kt)("p",null,"Below scripts will create two Kafka topics for data ingestion:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n pinot-quickstart exec kafka-0 -- kafka-topics --zookeeper kafka-zookeeper:2181 --topic flights-realtime --create --partitions 1 --replication-factor 1\nkubectl -n pinot-quickstart exec kafka-0 -- kafka-topics --zookeeper kafka-zookeeper:2181 --topic flights-realtime-avro --create --partitions 1 --replication-factor 1\n")),(0,l.kt)("h3",{id:"load-data-into-kafka-and-create-pinot-schematables"},"Load data into Kafka and Create Pinot Schema/Tables"),(0,l.kt)("p",null,"Below script will deploy 3 batch jobs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ingest 19492 Json messages to Kafka topic ",(0,l.kt)("inlineCode",{parentName:"li"},"flights-realtime"),"  at a speed of 1 msg/sec"),(0,l.kt)("li",{parentName:"ul"},"Ingest 19492 Avro messages to Kafka topic ",(0,l.kt)("inlineCode",{parentName:"li"},"flights-realtime-avro"),"  at a speed of 1 msg/sec"),(0,l.kt)("li",{parentName:"ul"},"Upload Pinot schema ",(0,l.kt)("inlineCode",{parentName:"li"},"airlineStats")),(0,l.kt)("li",{parentName:"ul"},"Create Pinot Table ",(0,l.kt)("inlineCode",{parentName:"li"},"airlineStats")," to ingest data from Json encoded Kafka topic ",(0,l.kt)("inlineCode",{parentName:"li"},"flights-realtime")),(0,l.kt)("li",{parentName:"ul"},"Create Pinot Table ",(0,l.kt)("inlineCode",{parentName:"li"},"airlineStatsAvro"),"  to ingest data from Avro encoded Kafka topic ",(0,l.kt)("inlineCode",{parentName:"li"},"flights-realtime-avro"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f pinot-realtime-quickstart.yml\n")),(0,l.kt)("h2",{id:"how-to-query-pinot-data"},"How to query pinot data"),(0,l.kt)("h3",{id:"pinot-query-console"},"Pinot Query Console"),(0,l.kt)("p",null,"Please use below script to do local port-forwarding and open Pinot query console on your web browser."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./query-pinot-data.sh\n")),(0,l.kt)("h2",{id:"use-superset-to-query-pinot"},"Use Superset to query Pinot"),(0,l.kt)("h3",{id:"bring-up-superset"},"Bring up Superset"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f superset.yaml\n")),(0,l.kt)("h3",{id:"first-time-set-up-admin-account"},"(First time) Set up Admin account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it pod/superset-0 -n pinot-quickstart -- bash -c 'export FLASK_APP=superset:app && flask fab create-admin'\n")),(0,l.kt)("h3",{id:"first-time-init-superset"},"(First time) Init Superset"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it pod/superset-0 -n pinot-quickstart -- bash -c 'superset db upgrade'\nkubectl exec -it pod/superset-0 -n pinot-quickstart -- bash -c 'superset init'\n")),(0,l.kt)("h3",{id:"load-demo-data-source"},"Load Demo Data source"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it pod/superset-0 -n pinot-quickstart -- bash -c 'superset import_datasources -p /etc/superset/pinot_example_datasource.yaml'\nkubectl exec -it pod/superset-0 -n pinot-quickstart -- bash -c 'superset import_dashboards -p /etc/superset/pinot_example_dashboard.json'\n")),(0,l.kt)("h3",{id:"access-superset-ui"},"Access Superset UI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./open-superset-ui.sh\n")),(0,l.kt)("p",null,"You can open the imported dashboard by click Dashboards banner then click on AirlineStats."),(0,l.kt)("h2",{id:"access-pinot-using-presto"},"Access Pinot Using Presto"),(0,l.kt)("h3",{id:"deploy-presto-with-pinot-connector"},"Deploy Presto with Pinot connector"),(0,l.kt)("p",null,"You can run below command to deploy a customized Presto with Pinot plugin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f presto-coordinator.yaml\n")),(0,l.kt)("h3",{id:"query-presto-using-presto-cli"},"Query Presto using Presto CLI"),(0,l.kt)("p",null,"Once Presto is deployed, you could run below command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./pinot-presto-cli.sh\n")),(0,l.kt)("h3",{id:"sample-queries-to-execute"},"Sample queries to execute"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"List all catalogs")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"presto:default> show catalogs;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Catalog\n---------\n pinot\n system\n(2 rows)\n\nQuery 20191112_050827_00003_xkm4g, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:01 [0 rows, 0B] [0 rows/s, 0B/s]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"List All tables")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"presto:default> show tables;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"    Table\n--------------\n airlinestats\n(1 row)\n\nQuery 20191112_050907_00004_xkm4g, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:01 [1 rows, 29B] [1 rows/s, 41B/s]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Show schema")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"presto:default> DESCRIBE pinot.dontcare.airlinestats;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"        Column        |  Type   | Extra | Comment\n----------------------+---------+-------+---------\n flightnum            | integer |       |\n origin               | varchar |       |\n quarter              | integer |       |\n lateaircraftdelay    | integer |       |\n divactualelapsedtime | integer |       |\n......\n\nQuery 20191112_051021_00005_xkm4g, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:02 [80 rows, 6.06KB] [35 rows/s, 2.66KB/s]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Count total documents")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"presto:default> select count(*) as cnt from pinot.dontcare.airlinestats limit 10;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," cnt\n------\n 9745\n(1 row)\n\nQuery 20191112_051114_00006_xkm4g, FINISHED, 1 node\nSplits: 17 total, 17 done (100.00%)\n0:00 [1 rows, 8B] [2 rows/s, 19B/s]\n")),(0,l.kt)("h3",{id:"how-to-clean-up-pinot-deployment"},"How to clean up Pinot deployment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete ns pinot-quickstart\n")),(0,l.kt)(o.Z,{to:"/docs/administration/",mdxType:"Jump"},"Administration"))}m.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var i in n)a.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);