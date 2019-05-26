# VuePapaParse

> A simple wrapper for PapaParse for VueJs.

## Installation

```bash
npm i vue-papa-parse

# or

yarn add vue-papa-parse
```

```javascript
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

View all available PapaParse options by visiting [https://www.papaparse.com/docs]
