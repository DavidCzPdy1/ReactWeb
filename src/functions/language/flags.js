import { default as czFlag } from './locales/cz/flag.png';
import { default as enFlag } from './locales/en/flag.png';

const langOptions = [
  { code: 'cz', label: 'Čeština', img: czFlag },
  { code: 'en', label: 'English', img: enFlag },
].sort((a, b) => a.label.localeCompare(b.label));

export default langOptions;