const args = require('command-line-args')

const definitions = [
  { name: 'babel', alias: 'b', type: Boolean },
  { name: 'exec', alias: 'e', type: String }
  { name: 'env', alias: 'd', type: String },
  { name: 'ignore', alias: 'i', type: String }
]

const options = args(definitions)

if (options.babel) require('../babel')

if (options.env === 'env' || process.env.NODE_ENV === 'development') {
  if (!require('piping')({
      hook: true,
      ignore: options.ignore || /(\/\.|~$|\.json|\.scss$)/i
    })) {
    return
  }
}

require(options.exec)
