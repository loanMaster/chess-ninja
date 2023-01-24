import{d as B,r as c,b1 as E,C as Q,o as p,e as g,h as x,g as a,t as l,f as h,w as b,Q as C,ao as P,av as w,an as S,j as k}from"./index.ba650283.js";import{_ as V}from"./ExerciseBoard.d4c8ba39.js";import{c as z,e as d}from"./register-defaults.d047cdc2.js";import{C as _}from"./chess-utils.b3fbd426.js";import{u}from"./exercise.store.2ef304f5.js";import"./chess-board.interface.0e68ebe2.js";import"./dateTimestampProvider.aca62768.js";const M={key:0,class:"flex-1 justify-center column items-center"},O={class:"text-h5 text-center"},W={class:"row q-gutter-xl q-mt-sm"},j={class:"flex-1",style:{"max-height":"100%"}},D={class:"column items-center"},J=B({__name:"GuessColorView",setup(R){const{revealed:o,store:y,inputDisabled:i}=z(),n=c(!1),$=S(),s=c(""),v=c([]);E(()=>{d.createExercise(10)}),Q(async()=>{i.value=!0,u().beginExercise(),f()});async function f(){!await d.prepareNewQuestion({inputDisabled:i,revealed:o,router:$})||(s.value=_.getOtherRandomSquare(v.value),v.value.push(s.value),u().$patch(e=>{e.board={orientation:"white",pieces:{},highlightPositive:[s.value],highlightNegative:[]}}),i.value=!1)}function m(e,r){i.value||(r.stopPropagation(),n.value=_.getColor(s.value)===e,n.value?(i.value=!0,y.$patch(t=>t.exercise.correctAnswers++),u().$patch(t=>{t.board.highlightPositive=[s.value],t.board.highlightNegative=[]})):(d.handleMistake(q,void 0),u().$patch(t=>{t.board.highlightPositive=[],t.board.highlightNegative=[s.value]})),o.value=!0)}function q(){o.value=!0,i.value=!0}function N(e){o.value&&(e.stopPropagation(),f())}return(e,r)=>(p(),g("div",{class:"relative-position column flex-1 self-stretch",onClick:N,ref:"coreExercise"},[x(o)?P("",!0):(p(),g("div",M,[a("div",O,l(e.$t("What color does square { square } have?",{square:s.value})),1),a("div",W,[h(C,{class:"text-black bg-white shadow-5",size:"xl",outline:"",rounded:"",onClick:r[0]||(r[0]=t=>m("white",t))},{default:b(()=>[k(l(e.$t("White")),1)]),_:1}),h(C,{class:"text-white bg-black shadow-5",size:"xl",outline:"",rounded:"",onClick:r[1]||(r[1]=t=>m("black",t))},{default:b(()=>[k(l(e.$t("Black")),1)]),_:1})])])),a("div",{style:w({opacity:x(o)?1:0}),class:"no-pointer-events absolute-full column items-stretch q-pa-lg"},[a("div",{class:"text-h5 text-center",style:w({color:n.value?"green":"red"})},l(n.value?e.$t("Correct"):e.$t("Wrong")),5),a("div",j,[h(V)]),a("div",D,[a("span",null,l(e.$t("Click to continue")),1)])],4)],512))}});export{J as default};
