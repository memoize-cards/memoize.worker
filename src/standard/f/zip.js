import arity from './arity'
import curry from './curry'
import resolveTrait from './internal/resolveTrait'
import trait from '@standard/trait'

function zip (x, y) {
  const n = Math.max(x.length, y.length)
  return Array(n).fill(undefined).map((_, i) => [x[i], y[i]])
}

Object.assign(zip, {
  __: trait.zip
})

export default curry(arity(2, resolveTrait(zip)))
