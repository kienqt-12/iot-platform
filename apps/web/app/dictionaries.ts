import 'server-only';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  vi: () => import('../dictionaries/vi.json').then((module) => module.default),
};

type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: string) =>
  dictionaries[locale as Locale]();

