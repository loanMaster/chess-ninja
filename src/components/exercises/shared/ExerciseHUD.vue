<template>
  <div class="row justify-between q-pa-xs">
    <StrikeCounter ref="strikeCounter" />
    <div class="relative-position row col-grow q-px-sm items-center">
      <QuestionNumberIndicator />
    </div>
  </div>
</template>

<script setup lang="ts">
import StrikeCounter from './StrikeCounter.vue';
import QuestionNumberIndicator from './QuestionNumberIndicator.vue';
</script>
