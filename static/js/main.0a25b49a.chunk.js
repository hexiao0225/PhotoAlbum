(this.webpackJsonpmolene=this.webpackJsonpmolene||[]).push([[0],{149:function(e,t,a){e.exports=a(252)},154:function(e,t,a){},252:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(146),c=a.n(l),i=a(66),o=(a(154),a(71)),s=a(12),m=new(a(147).DeliveryClient)({projectId:"993c2420-cd40-00b7-bcf7-21854072c41d"}),u=function(e){var t=e.url,a=e.titleSize,n=e.title;return r.a.createElement("div",{className:"introduction"},r.a.createElement("div",{className:"large"===a?"introduction-title unfold-to-right":"script-title"},n),r.a.createElement("img",{alt:"",className:"picture",src:t}))},d=a(253),g=function(e){return e.split("\n").map((function(e,t){return r.a.createElement("p",{key:t},e)}))},p=function(e){var t=e.text,a=e.title,l=Object(n.useRef)(null),c=Object(d.a)(l,{root:null,rootMargin:"0px",threshold:.2}),i=!(c&&c.intersectionRatio<.2);return r.a.createElement("div",{ref:l},a&&r.a.createElement("h3",{className:i?"script-title fade-in":"script-title"},a),t&&r.a.createElement("div",{className:i?"paragraph fade-in":"paragraph"},g(t)))},E=function(e){var t=e.text,a=e.image;return r.a.createElement("div",{className:"image-with-text scale-down-center"},r.a.createElement("img",{alt:"",className:"picture",src:a}),r.a.createElement(p,{text:t}))},f=function(e){var t=e.image,a=e.text,n=e.title;return r.a.createElement("div",{className:"fullbleed-image-with-text"},r.a.createElement("div",{className:"fullbleed-image"},r.a.createElement("img",{alt:"",className:"picture fade-in",src:t})),r.a.createElement("div",null,r.a.createElement(p,{title:n,text:a})))},v=function(e){var t=e.url;return r.a.createElement("div",{className:"gallery-image"},r.a.createElement("li",null,r.a.createElement("img",{alt:"",className:"picture",src:t})))},h=function(e){var t=e.landscapeUrls,a=e.portraitUrls;return r.a.createElement("div",{className:"gallery"},r.a.createElement("ul",{className:"gallery-landscape"},t.map((function(e,t){return r.a.createElement(v,{key:t,url:e})}))),r.a.createElement("ul",{className:"gallery-portrait"},a.map((function(e,t){return r.a.createElement(v,{key:t,url:e})}))))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.images,a=Object(n.useRef)(null),l=Object(d.a)(a,{root:null,rootMargin:"0px",threshold:.5}),c=!(l&&l.intersectionRatio<.5);return r.a.createElement("div",{ref:a,className:"three-images-in-row-gallery"},r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("img",{className:c?"portrait-picture scale-down-center":"portrait-picture",alt:"",src:e}))}))))},N=function(e){var t=e.content,a=t.title,n=t.coverImage,l=t.map,c=t.eightImages,i=t.threeImages,o=t.sectionCoverImages,s=t.p1,m=t.p2,d=t.p3;return r.a.createElement("div",{className:"country-page"},r.a.createElement(u,{titleSize:"large",url:n,title:a}),r.a.createElement(E,{image:l}),r.a.createElement(f,{image:o[0],text:s,title:"Lagunablanca"}),r.a.createElement(h,{portraitUrls:c.slice(0,4),landscapeUrls:c.slice(4,8)}),r.a.createElement(f,{image:o[2],title:"Fruity Soda",text:m}),r.a.createElement(f,{image:o[1],title:"Ceramics",text:d}),r.a.createElement(b,{images:i}),r.a.createElement("div",{className:"footer"}," "))},w=function(e){var t=e.quote,a=e.author;return r.a.createElement("div",{className:"block-quote"},r.a.createElement("p",{className:"block-quote-sentence"},t),a&&r.a.createElement("p",{className:"block-quote-author"},r.a.createElement("span",null)," ",a))},k=function(e){var t=e.content,a=t.title,n=t.coverImage,l=t.map,c=t.eightImages,i=t.threeImages,o=t.sectionCoverImages,s=t.quote1;return r.a.createElement("div",{className:"country-page"},r.a.createElement(u,{titleSize:"large",url:n,title:a}),r.a.createElement(E,{image:l}),r.a.createElement(w,{author:"New York, New York",quote:s}),r.a.createElement(f,{image:o[0],title:"Coffee"}),r.a.createElement(h,{portraitUrls:c.slice(0,4),landscapeUrls:c.slice(4,8)}),r.a.createElement(f,{image:o[1]}),r.a.createElement(b,{images:i}),r.a.createElement("div",{className:"footer"}," "))},y=function(e){var t=e.content,a=t.title,n=t.coverImage,l=t.map,c=t.horizontalImages,i=t.eightImages,o=t.threeImages,s=t.sectionCoverImages,m=t.p1,d=t.p2,g=t.quote1;return r.a.createElement("div",{className:"country-page"},r.a.createElement(u,{titleSize:"large",url:n,title:a}),r.a.createElement(E,{text:m,image:l}),r.a.createElement(f,{image:c[0],text:d,title:"Fragments"}),r.a.createElement(h,{portraitUrls:i.slice(0,4),landscapeUrls:i.slice(4,8)}),r.a.createElement(f,{image:s[0],title:"Al Maha"}),r.a.createElement(b,{images:o}),r.a.createElement(f,{image:c[1]}),r.a.createElement(w,{quote:g}),r.a.createElement("div",{className:"footer"}," "))},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.images,a=Object(n.useRef)(null),l=Object(d.a)(a,{root:null,rootMargin:"0px",threshold:.5}),c=!(l&&l.intersectionRatio<.5);return r.a.createElement("div",{ref:a,className:"three-horizontal-images-in-row-gallery"},r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("img",{className:c?"horizontal-picture scale-down-center":"horizontal-picture",alt:"",src:e}))}))))},j=function(e){var t=e.content,a=t.coverImage,n=t.sectionCoverImages,l=t.p1,c=t.p2,i=t.quote1;return r.a.createElement("div",{className:"country-page landing-page"},r.a.createElement(u,{titleSize:"large",url:a,title:"On the Road"}),r.a.createElement("div",{className:"script-title"},"Who"),r.a.createElement("div",{className:"landing-page-about"},g(l)),r.a.createElement(w,{author:"Charles Willson Peale",quote:i}),r.a.createElement(O,{images:n.slice(0,3)}),r.a.createElement(p,{text:c,title:"Measurement"}),r.a.createElement("div",{className:"footer"}," "))},x=function(e){var t=e.size;return r.a.createElement("div",{className:"".concat((function(){return"sm"===t?"spacer-sm":"md"===t?"spacer-md":"lg"===t?"spacer-lg":void 0}))})},I=function(e){var t=e.content,a=t.title,n=t.coverImage,l=t.map,c=t.eightImages,i=t.threeImages,o=t.sectionCoverImages,s=t.p1,m=t.p2,d=t.p3,g=t.quote1;return r.a.createElement("div",{className:"country-page"},r.a.createElement(u,{titleSize:"large",url:n,title:a}),r.a.createElement(x,{size:"sm"}),r.a.createElement(E,{text:s,image:l}),r.a.createElement(x,{size:"sm"}),r.a.createElement(f,{title:"Paella",text:m,image:o[0]}),r.a.createElement(b,{images:i}),r.a.createElement(x,{size:"sm"}),r.a.createElement(f,{title:"Gaudi",text:d,image:o[1]}),r.a.createElement(h,{portraitUrls:c.slice(0,4),landscapeUrls:c.slice(4,8)}),r.a.createElement(w,{author:"Vicky, Cristina, Barcelona",quote:g}),r.a.createElement(f,{image:o[2]}),r.a.createElement("div",{className:"footer"}," "))},q=function(e){var t=e.content,a=t.title,n=t.map,l=t.coverImage,c=t.eightImages,i=t.threeImages,o=t.sectionCoverImages,s=t.p1,m=t.p2,d=t.p3,g=t.p4,p=t.quote1;return r.a.createElement("div",{className:"country-page"},r.a.createElement(u,{titleSize:"large",url:l,title:a}),r.a.createElement(f,{title:"Confession of a Tile",text:s,image:n}),r.a.createElement(f,{image:o[0],text:m,title:"Guardian of L'Olivier"}),r.a.createElement(h,{portraitUrls:c.slice(0,4),landscapeUrls:c.slice(4,8)}),r.a.createElement(w,{quote:p}),r.a.createElement(b,{images:i}),r.a.createElement(f,{image:"",text:d,title:"Two Songs"}),r.a.createElement(f,{image:"",text:g}),r.a.createElement("div",{className:"footer"}," "))},C=a(19),z=function(e){var t=e.state,a=e.cities,l=e.setLightMode,c=e.setDarkMode,i=Object(n.useRef)(null),s=Object(n.useRef)(null),m=Object(n.useRef)(null),u=Object(n.useRef)(null),d=Object(n.useRef)(null),p=a.filter((function(e){return"On the Road"===e.name})).concat(a.filter((function(e){return"On the Road"!==e.name})));return Object(n.useEffect)((function(){var e,a,n;!1===t.clicked?(a=m,n=s,C.a.to([a,n],{duration:.8,height:0,ease:"power3.inOut",stagger:{amount:.07}}),C.b.to(i,{duration:1,css:{display:"none"}})):(!0===t.clicked||!0===t.clicked&&null===t.initial)&&(C.b.to(i,{duration:0,css:{display:"block"}}),C.b.to([s,m],{duration:0,opacity:1,height:"100%"}),function(e,t){C.a.from([e,t],{duration:.8,height:0,transformOrigin:"right top",skewY:2,ease:"power3.inOut",stagger:{amount:.1}})}(s,m),e=d,C.a.from(e,{y:60,duration:1,delay:.2,opacity:0,ease:"power3.inOut"}))}),[t]),r.a.createElement("div",{ref:function(e){return i=e},className:"hamburger-menu"},r.a.createElement("div",{ref:function(e){return s=e},className:"menu-secondary-background-color"}),r.a.createElement("div",{ref:function(e){return m=e},className:"menu-layer"},r.a.createElement("div",{ref:function(e){return u=e},className:"menu-city-background"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"menu-links"},r.a.createElement("nav",null,r.a.createElement("ul",null,p.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(o.b,{onClick:function(){window.scrollTo(0,0),"ontheroad"===e.value?l():c()},to:"".concat(e.value)},r.a.createElement("span",{key:e.name,onMouseEnter:function(){return t=e.coverImage,a=u,C.a.to(a,{duration:0,background:"url(".concat(t,") center center")}),C.a.to(a,{duration:.4,opacity:1,ease:"power3.inOut"}),void C.a.from(a,{duration:.4,skewY:2,transformOrigin:"right top"});var t,a},onMouseOut:function(){return e=u,C.a.to(e,{duration:0,skewY:0}),void C.a.to(e,{duration:.4,opacity:0,skewY:0});var e}},e.name)))})))),r.a.createElement("div",{ref:function(e){return d=e},className:"info"},r.a.createElement("h3",null,"On the Road"),r.a.createElement("p",null,g("A chain of threaded footprints \n A linear residue of the transitory, \n the fleeting, \n the contingent. ")),r.a.createElement("p",null,g("A tangible past \n in muted ballad \n whispering formless lyrics.")),r.a.createElement("p",null,g("A collage of light and dark \n capturing corners, glimpses, \n and the immovable,\n the eternal memory"))))))))},R=function(){return r.a.createElement("ul",{className:"header-socials"},r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:hexiao0225@gmail.com"},r.a.createElement("span",null),"Em")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/xiao.he.art/",target:"_blank"},r.a.createElement("span",null),"In")))},S=function(){return r.a.createElement("div",{className:"logo"},"\u5728\u8def\u4e0a")},U=Object(s.f)((function(e){var t=e.history,a=e.content,l=Object(n.useState)({initial:!1,clicked:null,menuName:"menu"}),c=Object(i.a)(l,2),o=c[0],s=c[1],m=Object.keys(a).map((function(e){var t=a[e];return{name:t.title,value:e.replace(" ",""),coverImage:t.coverImage}})),u=window.location.hash.includes("road")||"#/"===window.location.hash,d=Object(n.useState)(!1),g=Object(i.a)(d,2),p=g[0],E=g[1],f=Object(n.useState)(u),v=Object(i.a)(f,2),h=v[0],b=v[1];Object(n.useEffect)((function(){t.listen((function(){s({clicked:!1,menuName:"menu"})}))}),[t]);var N=function(){E(!p),setTimeout((function(){E(!1)}),1e3)};return r.a.createElement("header",{className:h?"light-mode":""},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"inner-header"},r.a.createElement("div",{className:"side-panel"},r.a.createElement("div",{disabled:p,onClick:function(){N(),b(!0),!1===o.initial?(s({initial:null,clicked:!0,menuName:"close"}),b(!0)):!0===o.clicked?(s({clicked:!o.clicked,menuName:"menu"}),u||b(!1)):!1===o.clicked&&(s({clicked:!o.clicked,menuName:"close"}),b(!0))},className:"menu"},r.a.createElement("div",{className:"menu-border"}),"menu"===o.menuName?r.a.createElement("div",{className:"menu-icon"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)):r.a.createElement("div",{className:"menu-close-icon"},r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement(R,null),r.a.createElement(S,null))))),r.a.createElement(z,{setLightMode:function(){b(!0)},setDarkMode:function(){b(!1)},cities:m,state:o}))})),M=function(e){for(var t={},a=e.map((function(e){var t=e.title,a=e.coverimage,n=e.map,r=e.horizontalimages,l=e.eightimages,c=e.threeimages,i=e.sectioncoverimages,o=e.p1,s=e.p2,m=e.p3,u=e.p4,d=e.quote1,g=e.quote2;return{title:t.value+""||" ",coverImage:a.value[0].url,map:n.value&&n.value.length?n.value[0].url:"",horizontalImages:r.rawData.value.map((function(e){return e.url}))||[],eightImages:l.rawData.value.map((function(e){return e.url}))||[],threeImages:c.rawData.value.map((function(e){return e.url}))||[],sectionCoverImages:i.rawData.value.map((function(e){return e.url}))||[],p1:o.value,p2:s.value,p3:m.value,p4:u.value,quote1:d.value,quote2:g.value}})),n=0;n<a.length;n++){var r=a[n];t["".concat(r.title.split(" ").join("").toLowerCase())]=r}return t},A=function(){var e=Object(n.useState)({loaded:!1,content:null,isHomePageOpen:!0}),t=Object(i.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){m.items().type("city_page").elementsParameter(["title","coverimage","map","horizontalimages","eightimages","threeimages","sectioncoverimages","p1","p2","p3","p4","quote1","quote2"]).toObservable().subscribe((function(e){l({loaded:!0,content:M(e.items)})}))};return r.a.createElement(o.a,{basename:""},r.a.createElement("div",{className:"App"},a.loaded&&r.a.createElement(U,{lightMode:a.isHomePageOpen,content:a.content}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"home"},a.loaded&&r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(j,Object.assign({content:a.content.ontheroad},e))}}),r.a.createElement(s.a,{exact:!0,path:"/dubai",render:function(e){return r.a.createElement(y,Object.assign({content:a.content.dubai},e))}}),r.a.createElement(s.a,{exact:!0,path:"/newyork",render:function(e){return r.a.createElement(k,Object.assign({content:a.content.newyork},e))}}),r.a.createElement(s.a,{exact:!0,path:"/santafe",render:function(e){return r.a.createElement(q,Object.assign({content:a.content.santafe},e))}}),r.a.createElement(s.a,{exact:!0,path:"/guadalajara",render:function(e){return r.a.createElement(N,Object.assign({content:a.content.guadalajara},e))}}),r.a.createElement(s.a,{exact:!0,path:"/barcelona",render:function(e){return r.a.createElement(I,Object.assign({content:a.content.barcelona},e))}}),r.a.createElement(s.a,{exact:!0,path:"/ontheroad",render:function(e){return r.a.createElement(j,Object.assign({content:a.content.ontheroad},e))}})))))))},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}},[[149,1,2]]]);
//# sourceMappingURL=main.0a25b49a.chunk.js.map