import { colors, getCssVar, setCssVar } from 'quasar';

const primary_backup = getCssVar('primary');
const secondary_backup = getCssVar('secondary');
const accent_backup = getCssVar('accent');

export const setDarkMode = ($q: any, value: boolean) => {
  $q.dark.set(value);
  const { lighten } = colors;
  if ($q.dark.isActive) {
    setCssVar('primary', lighten(primary_backup!, -50));
    setCssVar('secondary', lighten(secondary_backup!, -50));
    setCssVar('accent', lighten(accent_backup!, -60));
  } else {
    setCssVar('primary', primary_backup!);
    setCssVar('secondary', secondary_backup!);
    setCssVar('accent', accent_backup!);
  }
};
