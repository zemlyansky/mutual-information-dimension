const Module = require('./wasm/mid.js')
const bin = require('./dist/mid.bin.js')
const m = Module({ wasmBinary: bin })

const _mid = m.cwrap('mid', 'number', ['array', 'array', 'number'])

function uintify (arr) {
  return new Uint8Array(Float64Array.from(arr).buffer)
}

module.exports = function mid (x, y) {
  return _mid(uintify(y), uintify(x), y.length)
}
