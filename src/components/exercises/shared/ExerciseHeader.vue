<template>
  <q-toolbar class="bg-secondary text-white no-pointer-events non-selectable">
    <q-toolbar-title>
      {{ $t('exercises.' + nameOfTheGame + '.title') }}
    </q-toolbar-title>
  </q-toolbar>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const nameOfTheGame = computed(() => useRoute().params?.game as string);
</script>
