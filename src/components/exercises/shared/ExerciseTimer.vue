<template>
  <span class="text-h6 non-selectable">{{ elapsedTimeFormatted }}</span
  ><q-icon :name="matTimer" tag="timer-outline" size="2rem"></q-icon>
</template>

<script setup lang="ts">
import { matTimer } from '@quasar/extras/material-icons';
import { ref, onBeforeMount, onMounted, computed } from 'vue';
import { Subject, takeUntil, interval } from 'rxjs';
import { padNumber } from 'src/util/format-number';
import { useExerciseStore } from 'stores/exercise.store';

const store = useExerciseStore();
const destroy = new Subject<void>();
let timeElapsed = ref(0);

let lastTick = Date.now();
onMounted(() => {
  interval(200)
    .pipe(takeUntil(destroy))
    .subscribe(() => {
      if (store.exercise.state === 'started' && !store.exercise.paused) {
        timeElapsed.value += Date.now() - lastTick;
        lastTick = Date.now();
      }
    });
});

const elapsedTimeFormatted = computed(() => {
  const minutes = Math.floor(timeElapsed.value / 1000 / 60);
  const seconds = Math.floor((timeElapsed.value - 60000 * minutes) / 1000);
  return `${padNumber(minutes, 2)}:${padNumber(seconds, 2)}`;
});

store.$onAction(({ name }) => {
  if (name === 'beginExercise') {
    lastTick = Date.now();
  }
});

onBeforeMount(() => {
  destroy.next();
  destroy.complete();
});
</script>
