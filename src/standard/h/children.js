import Instance from './instance'

class Children {
  static async mapper (children) {
    children = await Promise.all(children)
    children = children.flat(Infinity)
    children = children.filter(Boolean)
    children = Instance.mapper(children)
    return children
  }

  static stringify (children) {
    return children.join('')
  }
}

export default Children
