(this["webpackJsonpabfrage-app"]=this["webpackJsonpabfrage-app"]||[]).push([[0],{50:function(e,a,t){e.exports=t(68)},55:function(e,a,t){},56:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),i=(t(55),t(14)),s=t(6);t(56);var o=Object(s.g)((function(e){return l.a.createElement("div",{className:"navigation"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("div",{className:"container"},l.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Abfrage App"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item  ".concat("/"===e.location.pathname?"active":"")},l.a.createElement(i.b,{className:"nav-link",to:"/"},"Start",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item  ".concat("/administration"===e.location.pathname?"active":"")},l.a.createElement(i.b,{className:"nav-link",to:"/administration"},"Administration")),l.a.createElement("li",{className:"nav-item  ".concat("/berichte"===e.location.pathname?"active":"")},l.a.createElement(i.b,{className:"nav-link",to:"/berichte"},"Berichte")))))))}));var m=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("footer",{class:"py-2 bg-dark fixed-bottom",style:{zIndex:0}},l.a.createElement("div",{class:"container"},l.a.createElement("p",{class:"m-0 text-center text-white"},"Powered by ITH/A Sindelfingen"))))},d=t(72),u=t(73),v=(t(62),[{id:1,label:"Abfrage 1",teilnehmer:[{id:1,vorname:"Cristina",nachname:"Severin",status:0,pnr:"123456"},{id:1,vorname:"Timor",nachname:"Bader",status:1,pnr:"236214"},{id:1,vorname:"Benjamin",nachname:"Koubik",status:2,pnr:"648831"},{id:1,vorname:"Cristina",nachname:"Severin",status:0,pnr:"123456"},{id:1,vorname:"Timor",nachname:"Bader",status:1,pnr:"236214"}],description:"Teilnehmer Abfrage 1"},{id:2,label:"Abfrage 2",teilnehmer:[{id:1,vorname:"Cristina",nachname:"Severin",status:2,pnr:"123456"},{id:1,vorname:"Timor",nachname:"Bader",status:2,pnr:"236214"},{id:1,vorname:"Benjamin",nachname:"Koubik",status:2,pnr:"648831"},{id:1,vorname:"Cristina",nachname:"Severin",status:0,pnr:"123456"},{id:1,vorname:"Timor",nachname:"Bader",status:2,pnr:"236214"},{id:1,vorname:"Benjamin",nachname:"Koubik",status:2,pnr:"648831"}],description:"Teilnehmer Abfrage 2"},{id:3,label:"Abfrage 3",teilnehmer:[{id:1,vorname:"Cristina",nachname:"Severin",status:2,pnr:"123456"},{id:1,vorname:"Timor",nachname:"Bader",status:1,pnr:"236214"},{id:1,vorname:"Benjamin",nachname:"Koubik",status:2,pnr:"648831"},{id:1,vorname:"Cristina",nachname:"Severin",status:2,pnr:"123456"}],description:"Teilnehmer Abfrage 3"}]),b=[{id:3,label:"Abfrage 4",teilnehmer:[{id:1,vorname:"Cristina",nachname:"Severin",status:2,pnr:"123456"},{id:1,vorname:"Timor",nachname:"Bader",status:2,pnr:"236214"},{id:1,vorname:"Benjamin",nachname:"Koubik",status:2,pnr:"648831"},{id:1,vorname:"Cristina",nachname:"Severin",status:2,pnr:"123456"}],description:"Teilnehmer Abfrage 3"}];var E=function(){return l.a.createElement("div",{className:"start"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row align-items-center my-5"},l.a.createElement("div",{class:"col-lg-12"},l.a.createElement("h3",{class:"whiteTxt"},"Sie haben ",v.length," offene Abfragen"),v.map((function(e){return l.a.createElement(d.a,{key:e.id},l.a.createElement(u.a,null,l.a.createElement(d.a.Toggle,{as:u.a.Header,eventKey:e.id,className:"accordionTitel"},e.label),l.a.createElement(d.a.Collapse,{eventKey:e.id},l.a.createElement(u.a.Body,null,l.a.createElement("div",{class:"col-lg-12"},e.teilnehmer.map((function(a){return l.a.createElement("div",{class:"col-lg-3 col-md-4 col-sm-6 col-xs-12"},l.a.createElement(i.b,{to:{pathname:"/info",user:a,abfrage:{id:e.id,label:e.label}}},l.a.createElement("div",{class:"thumbnail t2 thumbnailInactiv "},l.a.createElement("div",{className:"nameBlock"},a.vorname," ",l.a.createElement("br",null),l.a.createElement("b",null,a.nachname),l.a.createElement("br",null),"PNR: ",a.pnr),2==a.status?l.a.createElement("div",{className:"dataBlock"},l.a.createElement("span",{class:"glyphicon glyphicon-ok greenCheck"})):"")))})))))))}))),l.a.createElement("div",{class:"col-lg-12"},l.a.createElement("h3",{class:"whiteTxt"},"Sie haben ",b.length," abgeschlossene Abfragen"),b.map((function(e){return l.a.createElement(d.a,{key:e.id},l.a.createElement(u.a,null,l.a.createElement(d.a.Toggle,{as:u.a.Header,eventKey:e.id,className:"accordionTitelClosed"},e.label),l.a.createElement(d.a.Collapse,{eventKey:e.id},l.a.createElement(u.a.Body,null,l.a.createElement("div",{class:"col-lg-12"},e.teilnehmer.map((function(e){return l.a.createElement("div",{class:"col-lg-3 col-md-4 col-sm-6 col-xs-12"},l.a.createElement("div",{class:"thumbnail t2 thumbnailInactiv "},l.a.createElement("div",{className:"nameBlock"},e.vorname," ",l.a.createElement("br",null),l.a.createElement("b",null,e.nachname),l.a.createElement("br",null),"PNR: ",e.pnr),2==e.status?l.a.createElement("div",{className:"dataBlock"},l.a.createElement("span",{class:"glyphicon glyphicon-ok greenCheck"})):""))})))))))}))))))},g=t(48),p=t(74),h=t(70),f=t(22),y=(t(63),[{id:1,titel:"Abfrage 1",beschreibung:"Beschreibung Abfrage 1",start:"01.09.2020",ende:"31.12.2020",aktiv:!0,fragen:[],teilnehmer:[]},{id:2,titel:"Abfrage 2",beschreibung:"Beschreibung Abfrage 2",start:"02.09.2020",ende:"31.12.2020",aktiv:!1,fragen:[],teilnehmer:[]},{id:3,titel:"Abfrage 3",beschreibung:"Beschreibung Abfrage 2",start:"03.09.2020",ende:"31.12.2020",aktiv:!0,fragen:[],teilnehmer:[]},{id:4,titel:"Abfrage 4",beschreibung:"Beschreibung Abfrage 4",start:"04.09.2020",ende:"31.12.2020",aktiv:!0,fragen:[],teilnehmer:[]}]);var k=function(){var e=l.a.useState(!1),a=Object(g.a)(e,2),t=a[0],n=a[1],r=function(){return n(!1)};return l.a.createElement("div",{className:"Administration"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row align-items-center my-5"},l.a.createElement("div",{class:"col-lg-12"},l.a.createElement("h3",{class:"whiteTxt"},"Vorhandene Abfragen")),l.a.createElement("div",{class:"col-lg-12"},l.a.createElement(p.a,{style:{marginBottom:15},onClick:function(){return n(!0)}},"Neue Abfrage erstellen")),l.a.createElement("div",{class:"col-lg-12"},l.a.createElement(h.a,{responsive:!0,striped:!0,hover:!0,variant:"dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{key:1},"Titel"),l.a.createElement("th",{key:2},"Beschreibung"),l.a.createElement("th",{key:3},"Start"),l.a.createElement("th",{key:4},"Ende"),l.a.createElement("th",{key:5},"Aktiv"),l.a.createElement("th",{key:6},"Aktionen"))),l.a.createElement("tbody",null,y.map((function(e,a){return l.a.createElement("tr",null,l.a.createElement("td",null,e.titel),l.a.createElement("td",null,e.beschreibung),l.a.createElement("td",null,e.start),l.a.createElement("td",null,e.ende),l.a.createElement("td",null,e.aktiv),l.a.createElement("td",null,l.a.createElement(p.a,null,"Bearbeiten")))}))))),l.a.createElement(f.a,{style:{opacity:1},centered:!0,show:t,onHide:r},l.a.createElement(f.a.Header,{closeButton:!0},l.a.createElement(f.a.Title,null,"Modal heading")),l.a.createElement(f.a.Body,null,"Woohoo, you're reading this text in a modal!"),l.a.createElement(f.a.Footer,null,l.a.createElement(p.a,{variant:"secondary",onClick:r},"Close"),l.a.createElement(p.a,{variant:"primary",onClick:r},"Save Changes"))))))};var N=function(){return l.a.createElement("div",{className:"berichte"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row align-items-center my-5"})))},x=t(25),B=t(71),A=t(37),w=t(46),C=t.n(w),T=(t(64),function(e){return Object(x.a)(Object(x.a)({},e),{},{colors:Object(x.a)(Object(x.a)({},e.colors),{},{primary25:"#f3f3f3",primary50:"#f3f3f3",primary:"black"})})});var S=function(e){var a=Object(s.f)();null==a.user&&(a={user:{id:1,nachname:"Severin",pnr:"123456",status:0,vorname:"Cristina"},abfrage:{id:1,label:"Abfrage 1"}}),console.log(a.user),console.log(a.abfrage);for(var t=[{id:1,titel:"M\xf6chten Sie Homeoffice machen?",description:"description 1",type:1,options:[],text:""},{id:2,titel:"Wann k\xf6nnen Sie arbeiten?",description:"description 2",type:2,options:[{value:1,label:"morgens"},{value:2,label:"mittags"},{value:3,label:"abends"}],text:""},{id:3,titel:"Welche Ger\xe4te brauchen Sie?",description:"description 3",type:3,options:[{value:1,label:"Laptop"},{value:2,label:"Handy"},{value:3,label:"2 Monitore"},{value:4,label:"Papiere und Stifte"}],text:""},{id:4,titel:"Wie gef\xe4llt Ihnen Homeoffice?",description:"description 4",type:4,options:[],text:"5"},{id:41,titel:"Wie gef\xe4llt Ihnen Homeoffice?",description:"description 41",type:4,options:[],text:"6"},{id:5,titel:"Weitere Kommentare",type:5,description:"description 5",options:[],text:""}],n=0;n<t.length;n++)if(4==t[n].type)for(var r=0;r<parseInt(t[n].text);r++)t[n].options.push({value:r+1});return console.log(t),l.a.createElement("div",{className:"info"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row align-items-center"},l.a.createElement("div",{class:"col-lg-12"},l.a.createElement("h3",{class:"whiteTxt"},a.user.nachname,", ",a.user.vorname)),l.a.createElement("div",{class:"col-lg-12"},l.a.createElement("h3",{class:"whiteTxt"},a.abfrage.label)),l.a.createElement("div",{className:"row",style:{paddingLeft:10,paddingRight:10}},t.map((function(e,a){return l.a.createElement(l.a.Fragment,null,1==e.type?l.a.createElement("div",{class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},l.a.createElement(B.a.Label,{className:"abfrageLabel"},a+1,". ",e.titel,": "),l.a.createElement(C.a,{className:"switchAbfrage",checked:!1,onlabel:"Ja",offlabel:"Nein"})," "):"",2==e.type?l.a.createElement("div",{class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},l.a.createElement(B.a.Label,{className:"abfrageLabel"},a+1,". ",e.titel,": "),l.a.createElement(A.a,{defaultValue:[],name:"multi",options:e.options,className:"basic-multi-select select-info",classNamePrefix:"select",theme:T})," "):"",3==e.type?l.a.createElement("div",{class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},l.a.createElement(B.a.Label,{className:"abfrageLabel"},a+1,". ",e.titel,": "),l.a.createElement(A.a,{defaultValue:[],isMulti:!0,name:"multi",options:e.options,className:"basic-multi-select select-info",classNamePrefix:"select",theme:T})," "):"",4==e.type?l.a.createElement("div",{class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},l.a.createElement(B.a.Label,{className:"abfrageLabel"},a+1,". ",e.titel,": "),e.options.map((function(a,t){return l.a.createElement("div",{"data-toggle":"tooltip",title:"question",id:"ratingElem"+e.id+"_"+a.value,onClick:function(t){return function(e,a,t){for(var n=document.getElementsByClassName("rationgBlock"+a),l=0;l<n.length;l++)n[l].classList.remove("ratingClicked");document.getElementById("ratingElem"+a+"_"+t).classList.add("ratingClicked")}(0,e.id,a.value)},className:"ratingBlock rating rationgBlock"+e.id,"data-original-title":"Sehr gut (Liegt weit \xfcber den Erwartungen, au\xdfergew\xf6hnlicher Einsatz)",status:""},a.value)}))):"",5==e.type?l.a.createElement("div",{class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},l.a.createElement(B.a.Label,{className:"abfrageLabel"},a+1,". ",e.titel,": "),l.a.createElement(B.a.Control,{as:"textarea",rows:"3"})):"")}))),l.a.createElement("div",{class:"col-lg-12"},l.a.createElement(i.b,{to:{pathname:"/"}},l.a.createElement(p.a,null,"Zur\xfcck"))))))};var L=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null,l.a.createElement(o,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",exact:!0,component:function(){return l.a.createElement(E,null)}}),l.a.createElement(s.a,{path:"/administration",exact:!0,component:function(){return l.a.createElement(k,null)}}),l.a.createElement(s.a,{path:"/berichte",exact:!0,component:function(){return l.a.createElement(N,null)}}),l.a.createElement(s.a,{path:"/info",exact:!0,component:function(){return l.a.createElement(S,null)}})),l.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(66),t(67);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.212c51e2.chunk.js.map