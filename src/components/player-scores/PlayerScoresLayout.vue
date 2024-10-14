<template>
  <div class="bg-gradient flex-1 column justify-center items-center">
    <q-toolbar class="bg-secondary text-white no-pointer-events non-selectable">
      <q-toolbar-title>{{ $t('Progress') }}</q-toolbar-title>
    </q-toolbar>
    <PlayerScoresView class="max-width-sm" />
  </div>
</template>

<script setup lang="ts">
import PlayerScoresView from './PlayerScoresView.vue';
</script>
