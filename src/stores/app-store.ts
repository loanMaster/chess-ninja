import { defineStore } from 'pinia';
import { Composer } from 'vue-i18n';

export interface IAppState {
  machineId: string;
  _language: string;
  _themePreference: string;
  _orientation: string;
  _neverPlayed: boolean;
  _showChessPieceSymbols: boolean;
}

const getBrowserLanguage = (): string => {
  const lang = navigator.language || (navigator as any).userLanguage || 'en';
  const short = lang.toLowerCase().substring(0, 2);
  switch (short) {
    case 'de':
      return 'de';
    default:
      return 'en';
  }
};

export const useAppStore = defineStore('main', {
  state: (): IAppState => {
    return {
      _language: localStorage.getItem('language') || getBrowserLanguage(),
      _themePreference: localStorage.getItem('themePreference') || 'dark',
      _orientation: window.matchMedia('(orientation: portrait)').matches
        ? 'portrait'
        : 'landscape',
      _neverPlayed: localStorage.getItem('neverPlayed') !== 'false',
      _showChessPieceSymbols:
        localStorage.getItem('showChessPieceSymbols') === 'true',
    } as IAppState;
  },
  getters: {
    orientation(): string {
      return this._orientation;
    },
    themePreference(): string {
      return this._themePreference;
    },
    language(): string {
      return this._language;
    },
    neverPlayed(): boolean {
      return this._neverPlayed;
    },
    showChessPieceSymbols(): boolean {
      return this._showChessPieceSymbols;
    },
  },
  actions: {
    setShowChessPieceSymbols(value: boolean) {
      this._showChessPieceSymbols = value;
      localStorage.setItem('showChessPieceSymbols', String(value));
    },
    playerStartedPlaying() {
      if (this._neverPlayed) {
        this._neverPlayed = false;
        localStorage.setItem('neverPlayed', 'false');
      }
    },
    setLanguage(i18n: Composer<any>, lang: string, _redirect = true) {
      console.log(_redirect);
      i18n.locale.value = lang;
      this._language = lang;
      localStorage.setItem('language', lang);
    },
    orientationChange(angle: number) {
      this._orientation =
        angle === 0 || angle === 180 ? 'portrait' : 'landscape';
    },
    setThemePreference(theme: 'light' | 'dark') {
      this._themePreference = theme;
      localStorage.setItem('themePreference', theme);
    },
  },
});

window.addEventListener('orientationchange', (event: any) => {
  setTimeout(() => {
    useAppStore().orientationChange(event.target.screen.orientation.angle);
  });
});
