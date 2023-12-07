function middleware (functionRef) {
  return function (ClassRef) {
    return new Proxy(
      function () {
        return new Promise(async function (resolve) {
          const instance = await new ClassRef(...arguments)
          const next = () => resolve(instance)
          functionRef(instance, next)
        })
      },
      {
        get: (_, key) => Reflect.get(ClassRef, key),
        set: (_, key, value) => (Reflect.set(ClassRef, key, value), true)
      }
    )
  }
}

export default middleware
