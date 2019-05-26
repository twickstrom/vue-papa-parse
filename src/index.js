import * as Papa from 'papaparse'

const VuePapaParse = {
  install (Vue) {
    Vue.prototype.$papa = Papa
  }
}

export default VuePapaParse
