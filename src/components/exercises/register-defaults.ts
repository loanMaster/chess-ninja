import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { ref, onBeforeUnmount } from 'vue';
import { Subject } from 'rxjs';
import { useRoute } from 'vue-router';
import { useExerciseStore } from 'stores/exercise.store';

export function createExerciseContext({
  nextQuestionCb,
  startCb,
}: {
  nextQuestionCb: () => any;
  startCb: () => any;
}) {
  const store = useExerciseStore();
  const $q = useQuasar();
  const { t } = useI18n();
  const route = useRoute();
  const inputDisabled = ref(true);
  const revealed = ref(false);
  const destroy = new Subject<void>();

  onBeforeUnmount(() => {
    store.$patch((store) => (store.exercise.state = 'created'));
    destroy.next();
    destroy.complete();
  });

  store.$onAction(({ name, after }) => {
    after(async () => {
      if (name === 'playerReady') {
        startCb();
      }
    });
  });

  function onSolutionConfirmed() {
    if (revealed.value) {
      nextQuestionCb();
    }
  }

  return {
    revealed,
    inputDisabled,
    destroy,
    store,
    $q,
    route,
    onSolutionConfirmed,
    t,
  };
}
