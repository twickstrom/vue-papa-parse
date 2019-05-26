# VuePapaParse

> A simple wrapper for for the original PapaParse built for VueJs.

## Installation

```bash
npm i vue-papa-parse

# or

yarn add vue-papa-parse
```
## Default import
```javascript
import Vue from 'vue'
import VuePapaParse from 'vue-papa-parse'
Vue.use(VuePapaParse)
```

## Usage

### PARSE STRING
```javascript
this.$papa.parse(csvString[, config])
```

### PARSE LOCAL FILES
```javascript
this.$papa.parse(file, config)
```

### PARSE REMOTE FILE
```javascript
this.$papa.parse(url, {
	download: true,
	// rest of config ...
})
```

### UNPARSE
```javascript
this.$papa.unparse(data[, config])
```

### Config Options
```javascript
{
	delimiter: "",	// auto-detect
	newline: "",	// auto-detect
	quoteChar: '"',
	escapeChar: '"',
	header: false,
	transformHeader: undefined,
	dynamicTyping: false,
	preview: 0,
	encoding: "",
	worker: false,
	comments: false,
	step: undefined,
	complete: undefined,
	error: undefined,
	download: false,
	downloadRequestHeaders: undefined,
	skipEmptyLines: false,
	chunk: undefined,
	fastMode: undefined,
	beforeFirstChunk: undefined,
	withCredentials: undefined,
	transform: undefined,
	delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
}
```

View all available PapaParse options by visiting [the docs](https://www.papaparse.com/docs)
