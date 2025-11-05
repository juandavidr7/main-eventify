import{j as a}from"./ui-vendor-Bebnk-Yx.js";import{N as o}from"./react-vendor-DGfSihPJ.js";import{c as r,a as t}from"./index-CI-cDGwI.js";import{C as l,S as n}from"./search-rKJkhb0s.js";import{B as i}from"./bell-Dx8eBQY2.js";import{S as d}from"./star-D8zGbeHH.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=r("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=r("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=r("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),x=[{icon:h,label:"Inicio",path:"/dashboard"},{icon:n,label:"Buscar eventos",path:"/dashboard/search"},{icon:p,label:"Crear evento",path:"/dashboard/create"},{icon:c,label:"Mis reportes",path:"/dashboard/reports"},{icon:i,label:"Notificaciones",path:"/dashboard/notifications"},{icon:d,label:"Calificar eventos",path:"/dashboard/rate"},{icon:m,label:"Perfil",path:"/dashboard/profile"}],k=()=>a.jsx("aside",{className:"w-64 border-r bg-muted/30 min-h-screen flex flex-col",children:a.jsxs("div",{className:"p-6",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-8",children:[a.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl gradient-primary",children:a.jsx(l,{className:"h-6 w-6 text-white"})}),a.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",children:"Eventify"})]}),a.jsx("nav",{className:"space-y-2",children:x.map(e=>a.jsx(o,{to:e.path,end:e.path==="/dashboard",className:({isActive:s})=>t("flex items-center gap-3 px-4 py-3 rounded-xl transition-base text-sm font-medium",s?"bg-primary text-primary-foreground shadow-card":"text-muted-foreground hover:bg-primary/10 hover:text-primary"),children:({isActive:s})=>a.jsxs(a.Fragment,{children:[a.jsx(e.icon,{className:t("h-5 w-5",s&&"animate-pulse")}),a.jsx("span",{children:e.label})]})},e.path))})]})});export{k as S};
