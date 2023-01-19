<template>
  <div class="column flex-auto relative-position full-width items-center">
    <ExerciseHeader class="self-stretch" />
    <ExerciseHUD class="self-stretch" />
    <div ref="exercise" class="column justify-center flex-auto content">
      <router-view></router-view>
    </div>
    <ExerciseFooter />
  </div>
</template>

<script setup lang="ts">
import ExerciseInstructions from 'src/components/exercises/shared/ExerciseInstructions.vue';
import ExerciseHeader from 'src/components/exercises/shared/ExerciseHeader.vue';
import ExerciseHUD from 'src/components/exercises/shared/ExerciseHUD.vue';
import ExerciseFooter from 'src/components/exercises/shared/ExerciseFooter.vue';
import { TweenService } from 'src/util/tween.service';
import { onMounted, ref } from 'vue';
import { useExerciseStore } from 'stores/exercise.store';

const exercise = ref();
const store = useExerciseStore();

onMounted(async () => {
  store.playerReady();
});
</script>
