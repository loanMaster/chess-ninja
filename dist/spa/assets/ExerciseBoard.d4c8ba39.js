import{C as c}from"./chess-board.interface.0e68ebe2.js";import{u as s}from"./exercise.store.2ef304f5.js";import{d as l,C as d,a as h,B as g,o as u,e as m,aG as f,g as p}from"./index.ba650283.js";const _={style:{"aspect-ratio":"1","max-width":"100%","max-height":"100%",margin:"auto"}},v=p("div",{class:"g-board"},null,-1),B=[v],C=l({__name:"ExerciseBoard",emits:["square-clicked"],setup(b,{emit:r}){let e;async function n(){const o={draggable:!1,onClick:i=>{r("square-clicked",i)}};e=new c(".g-board",o),await e.initialized.pipe(f(1)).toPromise()}d(async()=>{s().$subscribe(()=>{t()}),await n(),t()});async function t(){e.clear(),e.removeHighlighting(),e.position(a.value.pieces,!1),e.orientation(a.value.orientation);for(const o of a.value.highlightPositive)e.highlight(o);for(const o of a.value.highlightNegative)e.highlight(o,!1)}const a=h(()=>s().board);return g(()=>{e&&e.destroy()}),(o,i)=>(u(),m("div",_,B))}});export{C as _};
