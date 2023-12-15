const trait = new Proxy({}, {
  get: (target, prop) => (target[prop] ??= Symbol(prop))
})

export default trait
