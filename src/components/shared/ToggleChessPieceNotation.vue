<template>
  <div class="q-mt-md">
    {{ t('Chess pieces notation:') }}
    {{ showPieceSymbols ? t('Symbols') : t('Letters') }}
  </div>
  <q-toggle
    style="margin-top: 0; padding-top: 0"
    :model-value="showPieceSymbols"
    @update:model-value="toggleShowPieceSymbols"
    color="secondary"
  ></q-toggle>
</template>

<script lang="ts" setup>
import { useAppStore } from 'stores/app-store';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const showPieceSymbols = computed(() => {
  return useAppStore().showChessPieceSymbols;
});

function toggleShowPieceSymbols() {
  useAppStore().setShowChessPieceSymbols(!useAppStore().showChessPieceSymbols);
}
</script>
