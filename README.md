# Snippet Cutter
Returns a subset of a _string_, composed by complete subsets found using `delimeter` between `min` and `max` _length_. If no complete subsets are found, returns a subset using _length_ `max` and `ellipsis`.

## Get Started
```
npm install snippet-cutter
```

## API
### cutter(string, [options])
Returns `string` processed. The `options` parameter is optional, but must be an Object if specified, containing zero or more of the following properties:
* `delimiter`: String used to split subsets. (**String**; default: `'.'`)
* `min`: Min _string length_ for valid subset match. (**Number**; default: `1`)
* `max`: Max _string length_ for valid subset match. (**Number**; default: `140`)
* `ellipsis`: Ending string when no complete subset is found. (**String**; default: `'...'`)

### Usage
```
var cutter = require('snippet-cutter')

cutter(string, options)
// → 'result subset of string'
```

## License
See the [License](LICENSE) file.
