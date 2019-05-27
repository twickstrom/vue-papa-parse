import * as Papa from 'papaparse'

const _downloadCsv = (csv, title) => {
  try {
    let uri = 'data:text/csv;charset=utf-8,' + '\uFEFF' + encodeURI(csv)

    let link = document.createElement('a')
    link.id = 'csv-' + parseInt(Math.random().toString().slice(2,16))
    link.href = uri

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

const VuePapaParse = {
  install (Vue) {
    Papa.download = _downloadCsv
    Vue.prototype.$papa = Papa
    Vue.component('PapaPreview', GChart)
  }
}

export default VuePapaParse
