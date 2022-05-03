(this["webpackJsonpdemo-website-on-react"]=this["webpackJsonpdemo-website-on-react"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"textBox_subject":{"id":"subject","title":"Subject","min":"10","max":"50","pattern":"^[a-zA-Z ]+$","displayError":false,"errMessage":"Error - Please follow the rules : Enter only alphabets, atleast 10 characters and maximum 50 characters!"},"selectBox_reasonOfContact":{"id":"reasonOfContact","title":"Reason For Contact","option1":"rudeness","option2":"vegetables","option3":"lift","option4":"united","option5":"I just want to talk","displayError":false,"errMessage":"No Error"},"textAreaBox_confessionDetail":{"id":"confessionDetail","title":"Confession Detail","min":10,"max":200,"displayError":false,"errMessage":"Error - Please follow the rules : Enter atleast 10 characters and maximum 200 characters!"}}')},23:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(13),a=n.n(s),i=(n(23),n(6)),o=n(2),l=n(0),j=function(){var e={textDecoration:"underline",color:"blue"},t={color:"purple"};return Object(l.jsx)("nav",{className:"is-flex is-flex-grow-1 is-align-items-center",style:{width:"100%"},children:Object(l.jsxs)("ul",{style:{width:"100%"},className:"is-flex is-flex-direction-row is-justify-content-space-evenly is-justify-content-space-evenly",children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/",style:function(n){return n.isActive?e:t},children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/misdeamnour",style:function(n){return n.isActive?e:t},children:"Misdemeanours"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/confession",style:function(n){return n.isActive?e:t},children:"Confess To Us"})})]})})},d=function(){return Object(l.jsxs)("header",{"data-testid":"headerid",className:"header has-background-primary is-flex is-align-items-center is-justify-content-center",children:[Object(l.jsx)("h1",{className:"title",children:"FakeLandia Justice Department"}),Object(l.jsx)(j,{})]})},u=function(){return Object(l.jsx)("footer",{className:"has-background-dark p-5 has-text-light has-text-centered",children:Object(l.jsx)("p",{children:"\xa9 copyright DB 2022"})})},b=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsx)("main",{className:"p-6",style:{flex:"1"},children:Object(l.jsx)(o.a,{})}),Object(l.jsx)(u,{})]})},h=function(){return Object(l.jsxs)("section",{className:"content",children:[Object(l.jsx)("p",{children:"Welcome to the home of the Justice Department of Fakelandia"}),Object(l.jsx)("p",{children:"Here you can browse a list if recent misdemeanours committed by our citizens, or you can confess to your own misdemeanour"})]})},x=n(8),m=n(4),O=n(14),p=n(5),f=n.n(p),g=["rudeness","vegetables","lift","united"];function v(e){return y.apply(this,arguments)}function y(){return(y=Object(x.a)(f.a.mark((function e(t){var n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(1500);case 2:for(n=null!==t&&void 0!==t?t:50,r=[],c=0;c<n;c++)r.push({citizenId:Math.floor(c+w(37)*w(967)),misdemeanour:C([].concat(g)),date:(new Date).toLocaleDateString(),imagesrc:"https://picsum.photos/50"+c+"/50"+c});return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return Math.random()*e}function C(e){return e||(e=[]),e[Math.floor(Math.random()*e.length)]}var N=function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.citizenId,n=e.misdemeanour,r=e.date,c=e.imagesrc;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("h5",{children:t})}),Object(l.jsx)("td",{children:Object(l.jsx)("h5",{children:n})}),Object(l.jsx)("td",{children:Object(l.jsx)("h5",{children:r})}),Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:c,alt:"picsum image showing punishment"})})]})},D=function(e){var t=e.tabledata;return Object(l.jsx)("div",{className:"table__container",children:Object(l.jsx)("table",{children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{className:"table__header",children:[Object(l.jsx)("td",{children:Object(l.jsx)("h4",{children:"Citizen ID"})}),Object(l.jsx)("td",{children:Object(l.jsx)("h4",{children:"Misdemeanour"})}),Object(l.jsx)("td",{children:Object(l.jsx)("h4",{children:"Date"})}),Object(l.jsx)("td",{children:Object(l.jsx)("h4",{children:"Punishment Idea"})})]}),t.map((function(e){return Object(l.jsx)(E,{citizenId:e.citizenId,date:e.date,misdemeanour:e.misdemeanour,imagesrc:e.imagesrc})}))]})})})},F=c.a.createContext([]),M=c.a.createContext((function(e){Object(O.a)(e)})),I=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),a=Object(m.a)(s,2),i=a[0],o=a[1];Object(r.useEffect)((function(){j()}),[]);var j=function(){var e=Object(x.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(10);case 2:t=e.sent,i||t.push(i[0]),c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(F.Provider,{value:i,children:Object(l.jsx)(M.Provider,{value:o,children:Object(l.jsx)(D,{tabledata:n})})})})},S=function(e){var t=e.textboxObject,n=e.onChange;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"form-control",htmlFor:t.id,children:t.title}),Object(l.jsx)("input",{className:"form-control","data-testid":t.id,type:"text",min:t.min,max:t.max,pattern:t.pattern,onChange:n,required:!0}),Object(l.jsx)("p",{"data-testid":"errormessage",hidden:!t.displayError,className:"error",children:t.errMessage})]})},k=function(e){var t=e.selectboxObject,n=e.onChange;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"form-control",htmlFor:t.id,children:t.title}),Object(l.jsxs)("select",{className:"form-control","data-testid":t.id,onChange:n,children:[Object(l.jsx)("option",{selected:!0,children:t.option1}),Object(l.jsx)("option",{children:t.option2}),Object(l.jsx)("option",{children:t.option3}),Object(l.jsx)("option",{children:t.option4}),Object(l.jsx)("option",{children:t.option5})]}),Object(l.jsx)("p",{"data-testid":"errormessage",hidden:!t.displayError,className:"error",children:t.errMessage})]})},_=function(e){var t=e.textareaObject,n=e.onChange;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"form-control",htmlFor:t.id,children:t.title}),Object(l.jsx)("p",{children:Object(l.jsx)("textarea",{className:"form-control","data-testid":t.id,minLength:t.min,maxLength:t.max,onChange:n,required:!0})}),Object(l.jsx)("p",{"data-testid":"errormessage",hidden:!t.displayError,className:"error",children:t.errMessage})]})},B=n(11),L=function(){Object(r.useContext)(F);var e=Object(r.useContext)(M),t=Object(r.useState)(""),n=Object(m.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(""),i=Object(m.a)(a,2),o=i[0],j=i[1],d=Object(r.useState)(""),u=Object(m.a)(d,2),b=u[0],h=u[1],x=Object(r.useState)(""),O=Object(m.a)(x,2),p=O[0],f=O[1],v=Object(r.useState)(!1),y=Object(m.a)(v,2),w=y[0],C=y[1],N=B.textBox_subject,E=B.selectBox_reasonOfContact,D=B.textAreaBox_confessionDetail,I=[N],L=[E],P=[D],z=function(e,t,n,r,c){if(e.length>0&&!new RegExp(e).test(t))return!0;if(-1!==c){if(0!==c)return!0}else if(-1!==n&&-1!==r&&(t.length<n||t.length>r))return!0;return!1},A=function(e){var t=Number.parseInt(e.target.min),n=Number.parseInt(e.target.max);I[0].displayError=z(e.target.pattern,e.target.value,t,n,-1),s(e.target.value)},J=function(e){j(e.target.options.selectedIndex+","+e.target.value)},T=function(e){h(e.target.value),P[0].displayError=z("",e.target.value,e.target.minLength,e.target.maxLength,-1),P[0].displayError||C(!0)};return Object(l.jsxs)("form",{onSubmit:function(t){var n="";if(!I[0].displayError&&!P[0].displayError){var r=0;if((r=Number.parseInt(o.split(",")[0]))||(r=0),r<=3){var s=[];s.push({citizenId:0,misdemeanour:g[r],date:(new Date).toLocaleDateString(),imagesrc:"https://picsum.photos/50/50"}),e(s)}else n=c.concat(",").concat(o.split(",")[1]).concat(",").concat(b),f(n),console.log(n)}t.preventDefault()},"data-testid":"w12MConfessionForm",className:"w12MConfessionForm",children:[I.map((function(e){return Object(l.jsx)(S,{textboxObject:e,onChange:A})})),L.map((function(e){return Object(l.jsx)(k,{selectboxObject:e,onChange:J})})),P.map((function(e){return Object(l.jsx)(_,{textareaObject:e,onChange:T})})),Object(l.jsx)("input",{type:"submit","data-testid":"submit",value:"Confess",className:"btn btn-primary",disabled:!w}),Object(l.jsx)("p",{"data-testid":"data-onsubmit",children:p})]})},P=function(){return Object(l.jsx)(o.d,{children:Object(l.jsxs)(o.b,{path:"/",element:Object(l.jsx)(b,{}),children:[Object(l.jsx)(o.b,{index:!0,element:Object(l.jsx)(h,{})}),Object(l.jsx)(o.b,{path:"misdeamnour",element:Object(l.jsx)(I,{})}),Object(l.jsx)(o.b,{path:"confession",element:Object(l.jsx)(L,{})}),Object(l.jsx)(o.b,{path:"*",element:Object(l.jsx)("p",{children:"Page 404"})})]})})};n(26);var z=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(P,{})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(z,{})})),A()}},[[27,1,2]]]);
//# sourceMappingURL=main.211ac49a.chunk.js.map