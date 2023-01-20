import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { ref, onBeforeUnmount } from 'vue';
import { Subject } from 'rxjs';
import { useRoute } from 'vue-router';
import { useExerciseStore } from 'stores/exercise.store';

export function createExerciseContext() {
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

  return {
    revealed,
    inputDisabled,
    destroy,
    store,
    $q,
    route,
    t,
  };
}
