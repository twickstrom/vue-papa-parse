import * as Papa from 'papaparse'

const _downloadCsv = (csv, title) => {
  try {
    const csvData = new Blob([csv], { type: 'text/csv' })
    const csvUrl = URL.createObjectURL(csvData)
    const link = document.createElement('a')

    link.id = `csv-${parseInt(Math.random().toString().slice(2,16))}`
    link.href = csvUrl

    document.body.appendChild(link)

    const $el = document.getElementById(link.id)


    $el.style.visibility = 'hidden'
    $el.download = `${title}.csv`
    $el.click()

    setTimeout(() => {
      document.body.removeChild(link)
    }, 1)

    return true
  } catch (err) {
    return false
  }
}

const _dedupe = (arr) => {
  return arr.map(obj => JSON.stringify(obj)).reduce((all, item) => {
    if (!all.find(obj => obj === item)) {
      all.push(item)
    }
    return all
  }, []).map(obj => JSON.parse(obj))
}

const VuePapaParse = {
  install (app, options) {
    const ExtendPapa = {
      download: _downloadCsv,
      dedupe: _dedupe
    }

    const DupedPapa = Object.entries(Papa)
      .reduce((local, [key, value]) => {
        local[key] = value
        return local
    }, {})

    const localPapa = Object.assign(DupedPapa, ExtendPapa)

    if ('config' in app && 'globalProperties' in app.config) {
      app.config.globalProperties.$papa = localPapa
    } else {
      app.prototype.$papa = localPapa
    }
  }
}

export default VuePapaParse
