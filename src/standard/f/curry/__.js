const __ = Symbol('__')

Object.assign(__, {
  is: (value) => value === __
})

export default __
