const tape = require('tape')
const fs = require('fs')
const mid = require('.')

function load (url) {
  return fs
    .readFileSync(url, { encoding: 'utf8' })
    .split('\n')
    .map(line => line.split(',').map(v => +v))
    .filter(row => row[0] !== undefined && row[1] !== undefined)
    .reduce((acc, row) => {
      acc[0].push(row[0])
      acc[1].push(row[1])
      return acc
    }, [[], []])
}

tape('Linear data', function (t) {
  const [x, y] = load('./sampledata/linear.csv')
  t.plan(1)
  t.assert(Math.abs(mid(x, y) - 0.99469) < 0.0001)
})

tape('Noise data', function (t) {
  const [x, y] = load('./sampledata/noise.csv')
  t.plan(1)
  t.assert(Math.abs(mid(x, y) - 0.23625) < 0.0001)
})
