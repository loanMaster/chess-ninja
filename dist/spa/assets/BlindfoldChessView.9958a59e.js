import{d as A,r as N,C as D,am as a,a as u,aA as R,B as Y,o as m,e as d,f as n,g as s,w as h,i as U,Q as _,F as I,ap as W,t as r,h as c,j as g,ao as v}from"./index.0fe2c947.js";import{_ as z}from"./ExerciseHeader.69520f4a.js";import{_ as M}from"./PieceList.09a45bcd.js";import{_ as H}from"./ExerciseBoard.d7cf5329.js";import{_ as L,a as X,b as Z}from"./ToggleChessPieceNotation.45273ce1.js";import{u as w}from"./exercise.store.bc5badd9.js";import{C as Q}from"./chess-utils.fdc962dd.js";import"./chess-board.interface.2e7b4fa6.js";import"./dateTimestampProvider.aca62768.js";const ee={class:"column flex-1"},te={class:"row flex-1",style:{"max-height":"100%",overflow:"hidden"}},se={class:"col-lg-2 col-md-3 q-pb-sm sm-hide xs-hide",style:{"max-height":"100%","overflow-y":"hidden"}},oe={class:"col-lg-7 col-md-6 col-sm-12 col-xs-12 column justify-start align-start relative-position",style:{"max-height":"100%","max-width":"100%"}},ae={key:0,class:"text-center q-mb-sm"},ne={class:"text-h5"},ie={class:"row text-h5 q-my-md-xl q-my-sm-md q-my-xs-md justify-center q-gutter-md"},re={class:"column q-gutter-sm q-px-md"},le={class:"q-mb-md-sm"},ce={class:"column q-gutter-sm q-px-md"},ue={class:"q-mb-md-sm"},me={class:"text-h6 q-mb-lg"},de={key:1,class:"column full-height"},he={key:0,class:"flex-1",style:{"overflow-y":"auto"}},fe={key:1,class:"flex-1 q-my-md position-relative"},pe={class:"absolute-full no-pointer-events column justify-center items-center q-mx-auto",style:{"aspect-ratio":"1","max-height":"100%","max-width":"100%"}},ve={key:0,class:"text-h4 bg-secondary q-pa-md non-selectable",style:{opacity:"0.7"}},_e={class:"text-center"},ge={key:0},ke={class:"column md-hide q-mb-sm lg-hide xl-hide items-center q-gutter-sm"},ye={class:"col-3 q-pt-lg items-center column justify-center xs-hide sm-hide q-gutter-sm"},Ne=A({__name:"BlindfoldChessView",setup(qe){const k=N(!1),l=N(!1),S=W();D(()=>{w().$patch(e=>{e.board={...e.board,orientation:"white",pieces:{},highlightPositive:[],highlightNegative:[]}}),a().$subscribe(()=>{$.value&&(l.value=!0,y.value&&j.value!==f.value&&w().updateRating({nameOfTheGame:B.value,value:1})),w().$patch(e=>{e.board.pieces=P(a().position.pieces)})}),q()});function C(){return l.value=!0,a().$patch({gameOngoing:!1})}const V=u(()=>x(a().position.pieces,"white")),E=u(()=>x(a().position.pieces,"black"));function x(e,i){const o={};return Object.keys(a().position.pieces).forEach(t=>{(e[t].toUpperCase()===e[t]&&i==="white"||e[t].toUpperCase()!==e[t]&&i==="black")&&(o[t]=e[t])}),o}const $=u(()=>a().position.isFinished||Object.keys(a().position.pieces).length<3),y=u(()=>a().position.check),j=u(()=>a().position.turn),B=u(()=>S.params.game);async function q(){await a().setupBoard({playerColor:f.value,config:{turn:f.value,pieces:F()}}),a().start(),a().$patch({engineLevel:3}),l.value=!1,k.value=!1,a().$patch({gameOngoing:!0})}function F(){switch(B.value){case"queen-vs-rook":return{E7:"k",F7:"r",A3:"K",C1:"Q"};case"rook-vs-king":return b(["k","K","R"]);case"queen-vs-knights":return K();case"queen-vs-king":default:return b(["k","K","Q"])}}function K(){const e=new R;let i=!1,o=!1,t={};do{t=b(["k","K","Q","n"]);const p=Object.keys(t).find(T=>t[T]==="n");e.createNew({turn:"black",pieces:t});const O=e.moves(p),G=O[Math.floor(Math.random()*O.length)];!G||(t[G.to]="n",e.createNew({turn:"white",pieces:t}),i=e.exportJson().check,e.createNew({turn:"black",pieces:t}),o=e.exportJson().check)}while(i||o||Object.keys(e.exportJson().pieces).length<5);return e.terminate(),t}function b(e){const i=new R;let o=Q.getRandomSquares(e.length),t={};do{o=Q.getRandomSquares(e.length),t={};for(let p=0;p<o.length;p++)t[o[p]]=e[p];i.createNew({turn:f.value==="white"?"black":"white",pieces:t})}while(i.exportJson().check);return i.terminate(),t}const f=u(()=>"white");function P(e){const i={};return Object.keys(e).forEach(o=>{const t=e[o]===e[o].toUpperCase()?"w":"b";i[o.toLowerCase()]=t+e[o].toUpperCase()}),i}async function J(){k.value=!0}return Y(()=>{a().stopGame()}),(e,i)=>(m(),d(I,null,[n(z,{class:"self-stretch"}),s("div",ee,[s("div",te,[s("div",se,[n(U,{class:"q-pt-sm q-ma-sm",style:{height:"100%"}},{default:h(()=>[n(X)]),_:1})]),s("div",oe,[n(U,{class:"q-mx-sm q-mt-sm q-pt-md-lg q-pt-sm-sm q-mb-md-none q-mb-xs-sm q-mb-sm-sm",style:{height:"100%",overflow:"auto"}},{default:h(()=>[!k.value&&!l.value?(m(),d("div",ae,[s("div",ne,r(e.$t("Checkmate the opponent's king")),1),s("div",ie,[s("div",re,[s("div",le,r(e.$t("White pieces")),1),n(M,{pieces:c(V)},null,8,["pieces"])]),s("div",ce,[s("div",ue,r(e.$t("Black pieces")),1),n(M,{pieces:c(E)},null,8,["pieces"])])]),s("div",me,r(e.$t("You play as"))+" "+r(e.$t(c(f))),1),s("div",null,[n(_,{color:"primary",onClick:J},{default:h(()=>[g(r(e.$t("Click here when you are ready")),1)]),_:1})])])):v("",!0),k.value||l.value?(m(),d("div",de,[l.value?v("",!0):(m(),d("div",he,[n(Z)])),l.value?(m(),d("div",fe,[n(H),s("div",pe,[c($)?(m(),d("div",ve,[s("div",_e,r(e.$t(c(y)?"Checkmate":"Draw")),1),c(y)?(m(),d("div",ge,r(c(j)!==c(f)?e.$t("You won!"):e.$t("You lost")),1)):v("",!0)])):v("",!0)])])):v("",!0),s("div",ke,[n(_,{color:"primary",onClick:q},{default:h(()=>[g(r(e.$t("Restart")),1)]),_:1}),n(_,{color:"primary",onClick:C,disable:l.value},{default:h(()=>[g(r(e.$t("Give up")),1)]),_:1},8,["disable"])])])):v("",!0)]),_:1})]),s("div",ye,[n(_,{color:"primary",onClick:q},{default:h(()=>[g(r(e.$t("Restart")),1)]),_:1}),n(_,{color:"primary",onClick:C,disable:l.value},{default:h(()=>[g(r(e.$t("Give up")),1)]),_:1},8,["disable"]),n(L)])])])],64))}});export{Ne as default};
