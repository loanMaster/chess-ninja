import {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';
import MainLayout from 'src/layouts/MainLayout.vue';
import { useChessGameStore } from 'stores/chess-game.store';

const routes: RouteRecordRaw[] = [
  {
    path: '/:language(es|de|en)?',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('components/home/HomeComponent.vue'),
      },
      {
        path: 'play',
        name: 'play',
        component: () => import('components/play/PlayChess.vue'),
        beforeEnter: async (
          to: RouteLocationNormalized,
          from: RouteLocationNormalized,
          next: NavigationGuardNext
        ) => {
          if (!from.path.endsWith('setup-board')) {
            await useChessGameStore().new();
          }
          next();
        },
      },
      {
        path: 'setup-board',
        name: 'setup-board',
        component: () => import('components/setup/SetupBoard.vue'),
      },
      {
        path: 'scenario',
        children: [
          {
            path: ':game(queen-vs-king)',
            name: 'queen-vs-king',
            component: () =>
              import('components/exercises/BlindfoldChessView.vue'),
          },
          {
            path: ':game(queen-vs-rook)',
            name: 'queen-vs-rook',
            component: () =>
              import('components/exercises/BlindfoldChessView.vue'),
          },
          {
            path: ':game(rook-vs-king)',
            name: 'rook-vs-king',
            component: () =>
              import('components/exercises/BlindfoldChessView.vue'),
          },
          {
            path: ':game(queen-vs-knights)',
            name: 'queen-vs-knights',
            component: () =>
              import('components/exercises/BlindfoldChessView.vue'),
          },
        ],
      },
      {
        path: 'exercise',
        component: () => import('components/exercises/ExerciseView.vue'),
        children: [
          {
            path: ':game(guess-color)',
            name: 'guess-color',
            component: () => import('components/exercises/GuessColorView.vue'),
          },
          {
            path: ':game(same-diagonal)',
            name: 'same-diagonal',
            component: () =>
              import('components/exercises/SameDiagonalView.vue'),
          },
          {
            path: ':game(attack-with-bishop)',
            name: 'attack-with-bishop',
            component: () =>
              import('components/exercises/AttackWithBishopView.vue'),
          },
          {
            path: ':game(attack-with-knight)',
            name: 'attack-with-knight',
            component: () =>
              import('components/exercises/AttackWithKnightView.vue'),
          },
          {
            path: ':game(save-the-king)',
            name: 'save-the-king',
            component: () => import('components/exercises/SaveTheKingView.vue'),
          },
          {
            path: ':game(find-the-square)',
            name: 'find-the-square',
            component: () => import('components/exercises/FindSquareView.vue'),
          },
        ],
      },
      {
        path: 'score-screen',
        name: 'score-screen',
        component: () => import('components/score-screen/ScoreScreenView.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
