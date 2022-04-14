import * as Papa from 'papaparse'
import { cloneDeep } from 'lodash'
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
  install (app, options) {
    let localPapa = cloneDeep(Papa)
    localPapa.download = _downloadCsv
    localPapa.dedupe = _dedupe
    if ('config' in app && 'globalProperties' in app.config) {
      app.config.globalProperties.$papa = localPapa
    } else {
      app.prototype.$papa = localPapa
    }
  }
}

export default VuePapaParse
