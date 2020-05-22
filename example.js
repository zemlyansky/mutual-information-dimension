const make = require('mkdata')
const mid = require('.')

const [X, y] = make.friedman3({ nSamples: 5000 })

X[0].forEach((_, ci) => {
  const x = X.map(row => row[ci])
  console.log('x' + ci + ': ' + mid(x, y), '\n')
})

const a = Array(30000).fill(0).map(v => Math.random() - 0.5)
const b = a.map(v => Math.random())
const c = a.map(v => v * v)
const d = a.map(v => Math.sin(v) / v + Math.random() / 1000)

console.log(mid(a, b), mid(a, c), mid(a, d))
