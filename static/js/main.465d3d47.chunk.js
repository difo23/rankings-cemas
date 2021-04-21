(this["webpackJsonpranking-cemas"]=this["webpackJsonpranking-cemas"]||[]).push([[0],{12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(6),o=c.n(r),s=c(2),i=c(3),l=c(0);function u(e){var t=e.estudiante,c=Object(n.useState)(""),a=Object(s.a)(c,2),r=a[0];a[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("li",{className:"list-group-item list-group-item-action ".concat(r),children:[Object(l.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(l.jsx)("h5",{className:"mb-1",children:t.nombre_estudiante}),Object(l.jsx)("small",{children:t.numero_estudiante})]}),Object(l.jsxs)("p",{className:"mb-1",children:[" Asignaturas: ",t.asignaturas.map((function(e){return Object(l.jsxs)("small",{children:[e.codigo_asignatura," "]})}))]}),Object(l.jsxs)("p",{className:"mb-1",children:[" Modulos: ",t.modulos.map((function(e){return Object(l.jsxs)("small",{children:[e.codigo_asignatura," "]})}))]}),Object(l.jsxs)("p",{className:"mb-1",children:[" ","Promedio Academico : ".concat(t.idx_academico)," "]}),Object(l.jsxs)("p",{className:"mb-1",children:[" ","Promedio Tecnico : ".concat(t.idx_tecnico)," "]}),Object(l.jsxs)("p",{className:"mb-1",children:[" ","Promedio General : ".concat(t.idx_general)," "]})]})})}var d=function(e){var t=0,c=0;return e?(e.forEach((function(e,n){t+=parseFloat(e.cf),c=n})),t/(c+1)):0},j=function(e,t){return e&&t?(t+e)/2:e&&!t?e:0},b=function(e,t){var c=0,n=0;switch(t[0]){case"4":case"5":return e.forEach((function(e,t){c+=parseFloat(e.acumulado),n=t})),c/(n+1);case"6":return e.forEach((function(e,t){if("MF0000_FCT"==e.codigo_asignatura){var a=100*parseFloat(e.acumulado)/e.total;c+=a}else c+=parseFloat(e.acumulado);n=t})),c/(n+1);default:return null}};function m(e){var t=e.url;console.log("Lista Boletines URL: ",t);var c=function(e){var t=Object(n.useRef)(!0),c=Object(n.useState)({data:null,loading:!0,error:null}),a=Object(s.a)(c,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){return function(){t.current=!1}}),[]),Object(n.useEffect)((function(){o({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){t.current&&o({loading:!1,error:null,data:e})})).catch((function(){o({data:null,loading:!1,error:"No se pudo cargar la info"})}))}),[e]),r}(t),a=c.data,r=c.loading,o=c.error;if(r&&t)return Object(l.jsx)("h1",{children:"Loading"});if(o)return console.log(o),Object(l.jsx)("h3",{children:o});console.log("Datos: ",a);var m=function(e){return e.sort((function(e,t){return e.idx_general<t.idx_general?1:e.idx_general>t.idx_general?-1:0}))}(a.data.filter((function(e){return e.asignaturas.length>2})).map((function(e){var t=d(e.asignaturas),c=b(null===e||void 0===e?void 0:e.modulos,null===e||void 0===e?void 0:e.curso),n=j(t,c);return Object(i.a)(Object(i.a)({},e),{},{idx_academico:t,idx_tecnico:c,idx_general:n})})));return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"list-group",children:m.map((function(e){return Object(l.jsx)(u,{estudiante:e},e._id)}))})})}var h=function(e,t){var c="/boletin/".concat(e,":").concat(t,":");return"".concat("https://cemasapi.herokuapp.com").concat("/reportes").concat(encodeURI(c))},f=c(4);function O(e){var t=e.handleUrl,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),c=Object(s.a)(t,2),a=c[0],r=c[1];return[a,function(e){var t=e.target;r(Object(i.a)(Object(i.a)({},a),{},Object(f.a)({},t.name,t.value)))},function(){r(e)}]}({curso:"",periodo:""}),a=Object(s.a)(c,3),r=a[0],o=a[1],u=a[2],d=r.curso,j=r.periodo;return Object(l.jsx)("div",{children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.info("Form Values: ",d,j);var c=h(d,j);console.info("URL: ",c),t(c),u()},children:Object(l.jsxs)("div",{className:"form-row ml-5",children:[Object(l.jsx)("div",{className:"col-5",children:Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Curso",name:"curso",value:d,onChange:o})}),Object(l.jsx)("div",{className:"col-5",children:Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Periodo",name:"periodo",value:j,onChange:o})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("button",{className:"btn btn-outline-success ",type:"submit",children:"Buscar"})})]})})})}var x=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),c=t[0],a=t[1];return console.log(c),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"row mt-4",children:Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("h1",{children:"Ranking:"}),Object(l.jsx)("hr",{})]})}),Object(l.jsx)("div",{className:"row mt-4",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(O,{handleUrl:function(e){a(e)}})})}),Object(l.jsx)("div",{className:"row mt-4",children:Object(l.jsxs)("div",{className:"col mt-4 ml-5 mr-5 mb-5",children:[Object(l.jsx)("h3",{children:"Lista de boletines:"}),Object(l.jsx)("hr",{}),c&&Object(l.jsx)(m,{url:c})]})})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),v()}},[[12,1,2]]]);
//# sourceMappingURL=main.465d3d47.chunk.js.map