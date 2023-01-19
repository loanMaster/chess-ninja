<template>
  <router-view />
</template>

<script setup lang="ts">
import { useAppStore } from './stores/app-store';
import { useI18n } from 'vue-i18n';
import { onBeforeMount, onMounted } from 'vue';
import {
  NavigationGuardNext,
  RouteLocationNormalized,
  useRoute,
  useRouter,
} from 'vue-router';
import { useQuasar, useMeta } from 'quasar';
import { getCurrentInstance } from 'vue';

const store = useAppStore();
const router = useRouter();
const route = useRoute();
const $q = useQuasar();
const i18n = useI18n();
const { t } = useI18n();

onBeforeMount(() => {
  $q.dark.set(store.themePreference === 'dark');
  getCurrentInstance()!.appContext.app.config.errorHandler = (err) => {
    console.error(err);
    $q.dialog({
      persistent: true,
      message: t(
        'An error has occurred. Please refresh this site or try again later.'
      ),
    }).onOk(() => location.reload());
  };
});

const removeTrailingSlash = (path: string) => {
  return path.length > 1 && path.endsWith('/')
    ? path.substring(0, path.length - 1)
    : path;
};

router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const language = to.params.language;
    if (!language) {
      next({
        name: to.name as string,
        params: { ...to.params, language: language || store.language },
        query: to.query,
      });
    } else {
      if (language && useAppStore().language !== language) {
        useAppStore().setLanguage(i18n, language as string, false);
      }
      next();
    }
  }
);

router.beforeEach((to, from, next) => {
  if (to !== from) {
    $q.loading.show({
      delay: 300, // ms
    });
  }
  next();
});

useMeta(() => {
  return {
    title: t('APP_NAME') + ' - ' + t('Learn to play blind chess'),
    meta: {
      description: {
        name: 'description',
        content: t(
          'ChessNinja is a website that teaches you to play chess blind.'
        ),
      },
      keywords: {
        name: 'keywords',
        content:
          'Chess, learn, blind, blind chess, play, exercises, Schach, lernen, Blindschach, spielen, Übungen',
      },
    },
  };
});

router.afterEach(() => {
  $q.loading.hide();
});

store.$onAction(({ name, after, args }) => {
  after(() => {
    if (name == 'setLanguage' && (args.length < 3 || args[2])) {
      const language = route.params.language;
      if (store.language !== language) {
        const withoutLangPath = (router.currentRoute.value.fullPath + '/')
          .replaceAll('//', '')
          .replace(`/${language}/`, '/');
        router.push(
          removeTrailingSlash(`/${store.language}${withoutLangPath}`)
        );
      }
    }
  });
});
</script>
