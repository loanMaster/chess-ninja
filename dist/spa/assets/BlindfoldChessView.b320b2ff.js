import{d as Y,r as G,C as z,am as o,a as u,aA as N,B as I,o as p,e as f,f as n,g as s,w as m,i as R,Q as v,F as W,ap as H,t as l,h as r,j as g,ao as y,av as S}from"./index.ba650283.js";import{_ as L}from"./ExerciseHeader.ec425761.js";import{_ as U}from"./PieceList.ac8171a5.js";import{_ as X}from"./ExerciseBoard.d4c8ba39.js";import{_ as M,a as Z,b as ee}from"./ToggleChessPieceNotation.dbbb3827.js";import{u as q}from"./exercise.store.2ef304f5.js";import{C as Q}from"./chess-utils.b3fbd426.js";import"./chess-board.interface.0e68ebe2.js";import"./dateTimestampProvider.aca62768.js";const te={class:"column flex-1"},se={class:"row flex-1",style:{"max-height":"100%",overflow:"hidden"}},ae={class:"col-lg-2 col-md-3 q-pb-sm sm-hide xs-hide",style:{"max-height":"100%","overflow-y":"hidden"}},oe={class:"col-lg-7 col-md-6 col-sm-12 col-xs-12 column justify-start align-start relative-position",style:{"max-height":"100%","max-width":"100%"}},ne={key:0,class:"text-center"},ie={class:"text-h5"},le={class:"row text-h5 q-my-md-xl q-my-sm-md q-my-xs-md justify-center q-gutter-md"},re={class:"column q-gutter-sm q-px-md"},ce={class:"q-mb-md-sm"},ue={class:"column q-gutter-sm q-px-md"},me={class:"q-mb-md-sm"},he={class:"text-h6 q-mb-lg"},de={key:1,class:"column full-height"},pe={class:"md-hide lg-hide xl-hide text-center y-mt-lg"},fe={class:"absolute-full no-pointer-events column justify-center items-center q-mx-auto",style:{"aspect-ratio":"1","max-height":"100%","max-width":"100%"}},ve={key:0,class:"text-h4 bg-secondary q-pa-md non-selectable",style:{opacity:"0.7"}},ge={class:"text-center"},_e={key:0},ye={class:"col-3 q-pt-lg items-center column justify-center xs-hide sm-hide q-gutter-sm"},Ge=Y({__name:"BlindfoldChessView",setup(ke){const _=G(!1),c=G(!1),V=H();z(()=>{q().$patch(e=>{e.board={...e.board,orientation:"white",pieces:{},highlightPositive:[],highlightNegative:[]}}),o().$subscribe(()=>{x.value&&(c.value=!0,k.value&&j.value!==h.value&&q().updateRating({nameOfTheGame:B.value,value:1})),q().$patch(e=>{e.board.pieces=J(o().position.pieces)})}),w()});function C(){return c.value=!0,o().$patch({gameOngoing:!1})}const E=u(()=>$(o().position.pieces,"white")),F=u(()=>$(o().position.pieces,"black"));function $(e,i){const a={};return Object.keys(o().position.pieces).forEach(t=>{(e[t].toUpperCase()===e[t]&&i==="white"||e[t].toUpperCase()!==e[t]&&i==="black")&&(a[t]=e[t])}),a}const x=u(()=>o().position.isFinished||Object.keys(o().position.pieces).length<3),k=u(()=>o().position.check),j=u(()=>o().position.turn),B=u(()=>V.params.game);async function w(){await o().setupBoard({playerColor:h.value,config:{turn:h.value,pieces:K()}}),o().start(),o().$patch({engineLevel:3}),c.value=!1,_.value=!1,o().$patch({gameOngoing:!0})}function K(){switch(B.value){case"queen-vs-rook":return{E7:"k",F7:"r",A3:"K",C1:"Q"};case"rook-vs-king":return b(["k","K","R"]);case"queen-vs-knights":return P();case"queen-vs-king":default:return b(["k","K","Q"])}}function P(){const e=new N;let i=!1,a=!1,t={};do{t=b(["k","K","Q","n"]);const d=Object.keys(t).find(D=>t[D]==="n");e.createNew({turn:"black",pieces:t});const O=e.moves(d),A=O[Math.floor(Math.random()*O.length)];t[A.to]="n",e.createNew({turn:"white",pieces:t}),i=e.exportJson().check,e.createNew({turn:"black",pieces:t}),a=e.exportJson().check}while(i||a||Object.keys(e.exportJson().pieces).length<4);return e.terminate(),t}function b(e){const i=new N;let a=Q.getRandomSquares(e.length),t={};do{a=Q.getRandomSquares(e.length),t={};for(let d=0;d<a.length;d++)t[a[d]]=e[d];i.createNew({turn:h.value==="white"?"black":"white",pieces:t})}while(i.exportJson().check);return i.terminate(),t}const h=u(()=>"white");function J(e){const i={};return Object.keys(e).forEach(a=>{const t=e[a]===e[a].toUpperCase()?"w":"b";i[a.toLowerCase()]=t+e[a].toUpperCase()}),i}async function T(){_.value=!0}return I(()=>{o().stopGame()}),(e,i)=>(p(),f(W,null,[n(L,{class:"self-stretch"}),s("div",te,[s("div",se,[s("div",ae,[n(R,{class:"q-pt-sm q-ma-sm",style:{height:"100%"}},{default:m(()=>[n(Z)]),_:1})]),s("div",oe,[n(R,{class:"q-mx-sm q-mt-sm q-pt-md-lg q-pt-sm-sm",style:{height:"100%"}},{default:m(()=>[_.value?y("",!0):(p(),f("div",ne,[s("div",ie,l(e.$t("Checkmate the opponent's king")),1),s("div",le,[s("div",re,[s("div",ce,l(e.$t("White pieces")),1),n(U,{pieces:r(E)},null,8,["pieces"])]),s("div",ue,[s("div",me,l(e.$t("Black pieces")),1),n(U,{pieces:r(F)},null,8,["pieces"])])]),s("div",he,l(e.$t("You play as"))+" "+l(e.$t(r(h))),1),s("div",null,[n(v,{color:"primary",onClick:T},{default:m(()=>[g(l(e.$t("Click here when you are ready")),1)]),_:1})])])),_.value?(p(),f("div",de,[s("div",{class:"flex-1",style:S([{"overflow-y":"auto"},{opacity:c.value?0:1}])},[n(ee)],4),s("div",pe,[n(v,{color:"primary",onClick:w},{default:m(()=>[g(l(e.$t("Restart")),1)]),_:1}),n(v,{color:"primary",onClick:C,disable:c.value},{default:m(()=>[g(l(e.$t("Give up")),1)]),_:1},8,["disable"]),n(M)])])):y("",!0),s("div",{class:"absolute-full",style:S([{opacity:c.value?1:0},{"pointer-events":"none"}])},[n(X)],4),s("div",fe,[r(x)?(p(),f("div",ve,[s("div",ge,l(e.$t(r(k)?"Checkmate":"Draw")),1),r(k)?(p(),f("div",_e,l(r(j)!==r(h)?e.$t("You won!"):e.$t("You lost")),1)):y("",!0)])):y("",!0)])]),_:1})]),s("div",ye,[n(v,{color:"primary",onClick:w},{default:m(()=>[g(l(e.$t("Restart")),1)]),_:1}),n(v,{color:"primary",onClick:C,disable:c.value},{default:m(()=>[g(l(e.$t("Give up")),1)]),_:1},8,["disable"]),n(M)])])])],64))}});export{Ge as default};
