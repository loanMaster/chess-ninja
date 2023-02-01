<template>
  <div class="relative-position column flex-1 self-stretch">
    <div class="flex-1 justify-center column items-center">
      <div class="text-h5 text-center">
        {{ $t('Move your knight to the target square') }}
      </div>
      <div class="relative-position justify-center column items-center">
        <div class="g-large-font g-full-width q-mt-md q-pa-md text-h5">
          <div>{{ 'The target square is' }} {{ target }}</div>
          <div>
            {{ 'Your knight is on square' }} <span>{{ knight }}</span>
          </div>
        </div>
        <div class="row q-gutter-md max-width-xs q-mt-md justify-center">
          <div v-for="move in moves" :key="move" class="text-h5">
            <q-btn push color="primary" @click="select(move, $event)" no-caps>{{
              move
            }}</q-btn>
          </div>
        </div>
        <div
          class="absolute-full no-pointer-events"
          style="opacity: 0"
          ref="correctAnswer"
        >
          <div class="column justify-center items-center" style="height: 100%">
            <div class="bg-white q-pa-md rounded-borders shadow-5">
              <q-icon
                :name="matCheckCircle"
                color="green"
                class="text-h1 margin-auto"
              ></q-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { matCheckCircle } from '@quasar/extras/material-icons';
import { ref, onBeforeMount, onMounted, computed, Ref } from 'vue';
import { exerciseUtils } from 'components/exercises/exercise.utils';
import { createExerciseContext } from 'components/exercises/register-defaults';
import { useRouter } from 'vue-router';
import { ChessUtils } from 'src/util/chess-utils';
import { useExerciseStore } from 'stores/exercise.store';
import { ChessGame } from 'src/engine/chess-game';
import { TweenService } from 'src/util/tween.service';

const { revealed, store, inputDisabled } = createExerciseContext();

const wasCorrect = ref(false);
const router = useRouter();
const knight = ref('');
const correctAnswer: Ref<HTMLElement> = ref('') as any;
const target = ref('');
const chessGame = new ChessGame();

onBeforeMount(() => {
  const numberOfQuestions = 5;
  exerciseUtils.createExercise(numberOfQuestions);
});

onMounted(async () => {
  inputDisabled.value = true;
  useExerciseStore().beginExercise();
  nextQuestion();
});

async function nextQuestion() {
  if (
    !(await exerciseUtils.prepareNewQuestion({
      inputDisabled,
      revealed,
      router,
    }))
  ) {
    return;
  }
  knight.value = ChessUtils.getOtherRandomSquare([]);
  chessGame.createNew({ pieces: { [knight.value]: 'N' } });
  const knightsMoves = chessGame.moves(knight.value);
  target.value = ChessUtils.getOtherRandomSquare([
    ...knightsMoves.map((m) => m.to),
    knight.value,
  ]);

  if (useExerciseStore().exercise.currentQuestion > 1) {
    await new TweenService().fadeOut(correctAnswer.value, 0.5);
  }

  inputDisabled.value = false;
}

async function select(selectedSquare: string, event: Event) {
  if (inputDisabled.value) {
    return;
  }
  event.stopPropagation();

  wasCorrect.value =
    target.value.toLocaleLowerCase() === selectedSquare.toLocaleLowerCase();

  if (wasCorrect.value) {
    inputDisabled.value = true;
    store.$patch((state) => state.exercise.correctAnswers++);
    await new TweenService().fadeIn(correctAnswer.value, 0.5);
    nextQuestion();
  } else {
    knight.value = selectedSquare;
    chessGame.createNew({ pieces: { [knight.value]: 'N' } });
  }
}

const moves = computed(() => {
  if (knight.value) {
    chessGame.createNew({ pieces: { [knight.value]: 'N' } });
    const squares = chessGame.moves(knight.value).map((s) => s.to);
    squares.sort((s1, s2) => (s1 > s2 ? 1 : -1));
    return squares;
  } else {
    return [];
  }
});
</script>
