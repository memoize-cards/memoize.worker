class ClassName {
  static mapper (attrs) {
    attrs.class = []
      .concat(attrs.className)
      .flat(Infinity)
      .join(' ')
    delete attrs.className
    return attrs
  }
}

export default ClassName
