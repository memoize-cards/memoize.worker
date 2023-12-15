import { paint } from '@standard/h'
import component from './component'
import trait from '@standard/trait'

@paint(component)
class Description {
  get content () {
    return (Description[trait.content] ?? '')
  }

  static change (newContent) {
    Description[trait.content] = newContent
    return Description
  }
}

export default Description
