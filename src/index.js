import * as Papa from 'papaparse';

export function install (Vue) {
  Vue.component('VuePapaParse', Papa);
  Vue.prototype.$papa = Papa;
}
