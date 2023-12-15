import trait from '@standard/trait'

function resolveTrait (functionRef) {
  return function (...args) {
    const method = trait[functionRef.name]
    const evaluate = (value) => (value?.[method]?.() ?? value)
    return functionRef(...args.map(evaluate))
  }
}

export default resolveTrait
