(this["webpackJsonpreact-pixbay"]=this["webpackJsonpreact-pixbay"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),a=c.n(r),i=(c(9),c(2)),l=c(0),o=function(e){var t=e.image,c=t.tags.split(",");return Object(l.jsxs)("div",{className:"max-w-sm rounded overflow-hidden shadow-lg p-7 mt-7 ",children:[Object(l.jsx)("img",{className:"w-full",src:t.webformatURL,alt:"name"}),Object(l.jsxs)("div",{className:"px-6 py-4",children:[Object(l.jsx)("div",{className:"font-bold text-green-600 text-xl mb-2",children:t.user}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Views:"}),t.views]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Downloads:"}),t.downloads]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Likes:"}),t.likes]})]})]}),Object(l.jsx)("div",{className:"py-4 px-6",children:c.map((function(e,t){return Object(l.jsxs)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2",children:["#",e]},t)}))})]})},d=function(e){var t=e.search,c=Object(n.useState)(""),s=Object(i.a)(c,2),r=s[0],a=s[1];return Object(l.jsx)("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto",children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(r)},className:"w-full max-w-sm",children:Object(l.jsxs)("div",{className:"flex items-center  border-b-2 border-red-500 py-2",children:[Object(l.jsx)("input",{className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Search Image Term...",value:r,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("button",{className:"flex-shrink-0 bg-red-400  border-red-500 text-sm border-4 py-1 px-2 rounded",type:"submit",children:"Search"})]})})})};var j=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!0),a=Object(i.a)(r,2),j=a[0],b=a[1],x=Object(n.useState)(""),u=Object(i.a)(x,2),m=u[0],h=u[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("20685637-0b45d9bf02aedf7dc0c3d1c4a","&q=").concat(m,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){s(e.hits),b(!1)})).catch((function(e){return console.log(e)}))}),[m]),Object(l.jsxs)("div",{className:"content-around mx-auto",children:[Object(l.jsx)("div",{children:Object(l.jsx)(d,{search:function(e){return h(e)}})}),!j&&0===c.length&&Object(l.jsx)("h1",{className:"text-6xl text-center mx-auto mt-32",children:"No Images Found"}),j?Object(l.jsx)("h1",{className:"text-6xl text-center mx-auto mt-32",children:"Loading.."}):Object(l.jsx)("div",{className:"grid grid-cols-4 gap-3",children:c.map((function(e){return Object(l.jsx)(o,{image:e},e.id)}))})]})};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.f4a58534.chunk.js.map