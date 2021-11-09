import * as Papa from 'papaparse'
import { isVue2, isVue3 } from 'vue-demi';

const _downloadCsv = (csv, title) => {
  try {
    let csvData = new Blob([csv], { type: 'text/csv' })
    let csvUrl = URL.createObjectURL(csvData)

    let link = document.createElement('a')
    link.id = 'csv-' + parseInt(Math.random().toString().slice(2,16))
    link.href = csvUrl

    document.body.appendChild(link)

    let $el = document.getElementById(link.id)


    $el.style.visibility = 'hidden'
    $el.download = title + '.csv'
    $el.click()

    setTimeout(function () {
      document.body.removeChild(link)
    })

    return true
  } catch (err) {
    return false
  }
}

const _dedupe = (arr) => {
  let flatData = arr.map(obj => JSON.stringify(obj))
  let output = []

  flatData.forEach(item => {
    if (!output.find(obj => obj === item)) {
      output.push(item)
    }
  })

  return output.map(obj => JSON.parse(obj))
}

const VuePapaParse = {
  install (Vue) {
    console.log(Vue)
    Papa.download = _downloadCsv
    Papa.dedupe = _dedupe
    if (isVue2) {
      Vue.prototype.$papa = Papa
    }
  }
}

export default VuePapaParse
