(this["webpackJsonpchinese-zodiac"]=this["webpackJsonpchinese-zodiac"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('{"animals":{"monkey":{"emoji":" \ud83d\udc12","character":"\u7334"},"rooster":{"emoji":"\ud83d\udc13","character":"\u9e21"},"dog":{"emoji":"\ud83d\udc15","character":"\u72d7"},"pig":{"emoji":"\ud83d\udc16","character":"\u732a"},"rat":{"emoji":"\ud83d\udc00","character":"\u9f20"},"ox":{"emoji":"\ud83d\udc04","character":"\u725b"},"tiger":{"emoji":"\ud83d\udc05","character":"\u864e"},"rabbit":{"emoji":"\ud83d\udc07","character":"\u5154"},"dragon":{"emoji":"\ud83d\udc09","character":"\u9f99"},"snake":{"emoji":"\ud83d\udc0d","character":"\u86c7"},"horse":{"emoji":" \ud83d\udc0e","character":"\u9a6c"},"sheep":{"emoji":" \ud83d\udc10","character":"\u7f8a"}}}')},17:function(e,a,t){e.exports=t(33)},22:function(e,a,t){},23:function(e,a,t){},3:function(e,a,t){},30:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),l=t.n(c),o=(t(22),t(1)),i=t(2);t(23);var m=function(e){var a=Object(i.c)();return r.a.createElement("main",{className:"main"},r.a.createElement("h1",null,"\u4f60\u5c5e\u4ec0\u4e48\u7684?"),r.a.createElement("h3",null,"Which Chinese Zodiac Animal Are You?"),r.a.createElement("button",{onClick:function(){a.push("/start")}},"\u2192"))},u=(t(3),["\u96f6","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d"]);function s(e){var a=Array.from(e).map((function(e){return u[e]}));return r.a.createElement("header",null,r.a.createElement("h4",null,a.join("")))}function h(e,a,t){e.length>t?a(e.slice(0,t)):a(e)}var E=4;var d=function(e){return r.a.createElement("div",null,s(e.year),r.a.createElement("input",{autoFocus:!0,value:e.year,type:"number",maxLength:E,placeholder:"\u8f93\u5165\u51fa\u751f\u5e74",onChange:function(a){return h(a.target.value,e.setYear,E)}}))},b=t(4),f=t.n(b);var y=function(e){var a=e.year,t=e.setYear,n=4!==a.length||a<1920||a>f()().format("Y"),c=Object(i.c)();function l(){c.push("/almost")}return r.a.createElement("main",{onKeyDown:function(e){13!==e.keyCode||n||l()}},r.a.createElement(d,{year:a,setYear:t}),r.a.createElement("h3",null,"Enter your birth year"),r.a.createElement("button",{disabled:n,onClick:l},"\u2192"))},p=2;var v=function(e){return r.a.createElement("div",null,s(e.month),r.a.createElement("input",{autoFocus:!0,value:e.month,type:"number",maxLength:p,placeholder:"\u6708\u4efd",onChange:function(a){return h(a.target.value,e.setMonth,p)}}))},g=2;var j=function(e){return r.a.createElement("div",null,s(e.day),r.a.createElement("input",{value:e.day,type:"number",maxLength:g,placeholder:"\u65e5\u5b50",onChange:function(a){return h(a.target.value,e.setDay,g)}}))};var k=function(e){var a=e.month,t=e.setMonth,n=e.day,c=e.setDay,l=a.length<1||n.length<1||a<1||a>12||n<1||n>31,o=Object(i.c)();function m(){o.push("/result")}return r.a.createElement("main",{onKeyDown:function(e){13!==e.keyCode||l||m()}},r.a.createElement("section",{className:"month-day"},r.a.createElement("article",null,r.a.createElement(v,{month:a,setMonth:t}),r.a.createElement("h3",null,"Month")),r.a.createElement("article",null,r.a.createElement(j,{day:n,setDay:c}),r.a.createElement("h3",null,"Day"))),r.a.createElement("button",{className:"back",onClick:function(){o.goBack()}},"\u2190"),r.a.createElement("button",{disabled:l,className:"forward",onClick:m},"\u2192"))},N=t(16),O=(t(30),t(15));t(31);var w=function(e){var a=e.birthday,t=function(e){var a=e.year,t=e.month,n=e.day,r=f()().year(a).month(0).date(1).solar().format("YYYY-MM-DD").split("-"),c=Object(o.a)(r,3),l=(c[0],c[1]),i=c[2],m=O.animals,u=a%12;(t<Number(l)||t===Number(l)&&n<Number(i))&&u--,u<0&&(u=11);var s=Object.keys(m)[u];return Object(N.a)({},m[s],{name:s})}(a),n=t.emoji,c=t.character,l=t.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",null,r.a.createElement("a",{href:"https://sharonzheng.com/",target:"_blank",rel:"noopener noreferrer"},"\u798f")),r.a.createElement("div",{className:"result"},r.a.createElement("h5",null,a.year,"/",a.month,"/",a.day),r.a.createElement("div",{className:"ani"},r.a.createElement("div",{className:"moji"},r.a.createElement("span",{role:"img","aria-label":l},n),r.a.createElement("span",{role:"img","aria-label":l},n),r.a.createElement("span",{role:"img","aria-label":l},n)),r.a.createElement("div",{className:"text"},c),r.a.createElement("div",{className:"moji right"},r.a.createElement("span",{role:"img","aria-label":l},n),r.a.createElement("span",{role:"img","aria-label":l},n),r.a.createElement("span",{role:"img","aria-label":l},n)))))};t(32);function C(e,a,t){return{year:parseInt(e,10),month:parseInt(a,10),day:parseInt(t,10)}}var Y=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),s=u[0],h=u[1],E=Object(n.useState)(""),d=Object(o.a)(E,2),b=d[0],f=d[1];function p(){c(""),h(""),f("")}return r.a.createElement(i.a,null,r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(m,null)}}),r.a.createElement(i.b,{path:"/start",render:function(){return r.a.createElement(y,{year:t,setYear:c})}}),r.a.createElement(i.b,{path:"/almost",render:function(){return r.a.createElement(k,{month:s,setMonth:h,day:b,setDay:f})}}),r.a.createElement(i.b,{path:"/result",render:function(){return r.a.createElement(w,{birthday:C(t,s,b),clearBirthday:p})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.d13e8479.chunk.js.map