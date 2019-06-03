# VuePapaParse

> A simple wrapper for for the original PapaParse built for VueJs

## Table of contents
* [VuePapaParse](#vuepapaparse)
* [Installation](#installation)
* [Default import](#default-import)
* [Usage](#usage)
  * [Parse String](#parse-string)
  * [Parse Local Files](#parse-local-files)
  * [Parse Remote File](#parse-remote-file)
  * [Unparse](#unparse)
  * [Download](#download)
  * [Dedupe](#dedupe)
* [PapaParse Docs](#papaparsedocs)
* [Example Vue Component](#example)

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
read the docs for [parsing csv strings](https://www.papaparse.com/docs#strings)

### PARSE LOCAL FILES
```javascript
this.$papa.parse(file, config)
```
read the docs for [parsing local files](https://www.papaparse.com/docs#local-files)

### PARSE REMOTE FILE
```javascript
this.$papa.parse(url, {
	download: true,
	// rest of config ...
})
```
read the docs for [parsing remote files](https://www.papaparse.com/docs#remote-files)
>**PARSE Converts CSV to JSON**

>**The Parse Result Object**
>A parse result always contains three objects: data, errors, and meta. Data and errors are arrays, and meta is an object. In the step callback, the data array will only contain one element. [See the parse results object docs.](https://www.papaparse.com/docs#results)

>**The Parse Config Object**
>The  `parse`  function may be passed a configuration object. It defines settings, behavior, and callbacks used during parsing. Any properties left unspecified will resort to their default values. [See all config options for parse.](https://www.papaparse.com/docs#config)

### UNPARSE
```javascript
this.$papa.unparse(data[, config])
```
read the docs for [unparsing data](https://www.papaparse.com/docs#unparse)

>**UNPARSE Converts JSON to CSV**

> Papa's  `unparse`  utility writes out correct delimited text strings given an array of arrays or an array of objects. [See all config options for unparse.](https://www.papaparse.com/docs#unparse-config-default)

### DOWNLOAD
*Extended Papa to include a simple download method. This allows you to easily download a ```.csv``` file for JSON that has been converted to CSV.*

> This method takes two arguments:
>
> - ```csv``` usually the the results from ```this.$papa.unparse(data[, config])```)
> - ```title``` The title of the downloaded .csv.
	 note: no need to add the .csv extension.

```javascript
this.$papa.download(csv, title)
```

### DEDUPE
*Extended Papa to include a simple deduplication method. This allows you to simply remove exact duplicate entries from a parsed CSV file.*

> This method takes one argument:
>
> - ```data``` usually the data key from the result object returned from ```this.$papa.parse(mixed[, config])```)

### PAPAPARSE DOCS
View all available PapaParse options by visiting [the Official Papa docs](https://www.papaparse.com/docs)
