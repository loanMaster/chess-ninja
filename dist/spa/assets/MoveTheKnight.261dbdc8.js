import{d as j,r as i,aA as B,b1 as E,C as L,a as M,o as d,e as m,g as e,t as r,j as f,F as O,l as T,h as p,f as _,x as A,an as S,w as R,Q as V,b4 as D}from"./index.6ff21238.js";import{c as F,e as w,T as g}from"./register-defaults.d875a0b7.js";import{C as x}from"./chess-utils.a8ad9ddf.js";import{u as y}from"./exercise.store.19be2c94.js";const G={class:"relative-position column flex-1 self-stretch"},I={class:"flex-1 justify-center column items-center"},U={class:"text-h5 text-center"},$={class:"relative-position justify-center column items-center"},K={class:"g-large-font g-full-width q-mt-md q-pa-md text-h5"},P={class:"row q-gutter-md max-width-xs q-mt-md justify-center"},Y={class:"column justify-center items-center",style:{height:"100%"}},z={class:"bg-white q-pa-md rounded-borders shadow-5"},ee=j({__name:"MoveTheKnight",setup(H){const{revealed:C,store:k,inputDisabled:n}=F(),v=i(!1),q=S(),t=i(""),u=i(""),l=i(""),c=new B;E(()=>{w.createExercise(5)}),L(async()=>{n.value=!0,y().beginExercise(),h()});async function h(){if(!await w.prepareNewQuestion({inputDisabled:n,revealed:C,router:q}))return;t.value=x.getOtherRandomSquare([]),c.createNew({pieces:{[t.value]:"N"}});const s=c.moves(t.value);l.value=x.getOtherRandomSquare([...s.map(a=>a.to),t.value]),y().exercise.currentQuestion>1&&await new g().fadeOut(u.value,.5),n.value=!1}async function N(s,a){n.value||(a.stopPropagation(),v.value=l.value.toLocaleLowerCase()===s.toLocaleLowerCase(),v.value?(n.value=!0,k.$patch(o=>o.exercise.correctAnswers++),await new g().fadeIn(u.value,.5),h()):(t.value=s,c.createNew({pieces:{[t.value]:"N"}})))}const b=M(()=>{if(t.value){c.createNew({pieces:{[t.value]:"N"}});const s=c.moves(t.value).map(a=>a.to);return s.sort((a,o)=>a>o?1:-1),s}else return[]});return(s,a)=>(d(),m("div",G,[e("div",I,[e("div",U,r(s.$t("Move your knight to the target square")),1),e("div",$,[e("div",K,[e("div",null,r("The target square is")+" "+r(l.value),1),e("div",null,[f(r("Your knight is on square")+" "),e("span",null,r(t.value),1)])]),e("div",P,[(d(!0),m(O,null,T(p(b),o=>(d(),m("div",{key:o,class:"text-h5"},[_(V,{push:"",color:"primary",onClick:Q=>N(o,Q),"no-caps":""},{default:R(()=>[f(r(o),1)]),_:2},1032,["onClick"])]))),128))]),e("div",{class:"absolute-full no-pointer-events",style:{opacity:"0"},ref_key:"correctAnswer",ref:u},[e("div",Y,[e("div",z,[_(A,{name:p(D),color:"green",class:"text-h1 margin-auto"},null,8,["name"])])])],512)])])]))}});export{ee as default};
