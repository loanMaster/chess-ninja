<template>
  <q-layout view="hHh lpR fFf" class="column">
    <q-header elevated class="bg-primary">
      <q-toolbar class="justify-between">
        <div class="row">
          <q-toolbar-title class="non-selectable no-padding-left">
            <router-link
              :to="{ name: 'home', params: { language: store.language } }"
              class="text-white"
            >
              <q-avatar>
                <img src="/chessninja.png" />
              </q-avatar>
              <span class="q-ml-sm">{{ $t('APP_NAME') }}</span>
            </router-link>
          </q-toolbar-title>
        </div>

        <div
          class="desktop-only"
          style="
             {
              flex: 1 0 auto;
            }
          "
        ></div>

        <div class="row no-wrap">
          <q-btn
            flat
            dense
            @click="$q.fullscreen.toggle()"
            data-testid="fullScreenToggle"
            :icon="$q.fullscreen.isActive ? matFullscreenExit : matFullscreen"
          />
          <q-toggle
            :modelValue="lightMode"
            data-testid="darkModeToggle"
            @update:modelValue="toggleDarkMode($event)"
            :checked-icon="matLightMode"
            color="secondary"
            :unchecked-icon="matDarkMode"
          />
          <q-btn
            flat
            round
            dense
            :icon="matLanguage"
            class="q-mr-xs"
            data-testid="languageDropdown"
          >
            <q-menu>
              <q-list dense style="min-width: 100px">
                <q-item
                  clickable
                  v-close-popup
                  @click="setLanguage('en')"
                  data-testid="select-language-en"
                >
                  <q-item-section>English</q-item-section>
                </q-item>
                <q-item
                  clickable
                  v-close-popup
                  @click="setLanguage('de')"
                  data-testid="select-language-de"
                >
                  <q-item-section>deutsch</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container
      class="column flex-auto"
      style="max-width: 100vw; overflow-x: hidden"
    >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import {
  matLightMode,
  matDarkMode,
  matLanguage,
  matFullscreen,
  matFullscreenExit,
} from '@quasar/extras/material-icons';
import { ref, onMounted, computed } from 'vue';
import { useAppStore } from 'stores/app-store';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import { setDarkMode } from 'src/util/dark-mode.toggle';
const leftDrawerOpen = ref(false);

const $q = useQuasar();
const store = useAppStore();

onMounted(() => {
  leftDrawerOpen.value = false;
});

const lightMode = computed(() => {
  return !$q.dark.isActive;
});

function toggleDarkMode() {
  setDarkMode($q, !$q.dark.isActive);
  store.setThemePreference($q.dark.isActive ? 'dark' : 'light');
}

const i18n = useI18n();

function setLanguage(lang: string) {
  store.setLanguage(i18n, lang);
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: unset;
}

.router-link-active button {
  text-decoration: underline;
  text-underline-color: white;
  text-decoration-width: 2px;
}
.no-padding-left {
  padding-left: 0;
}
</style>
