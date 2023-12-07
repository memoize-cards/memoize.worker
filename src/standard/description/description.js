import { paint } from '@standard/h'
import component from './component'
import magic from '@standard/magic'

@paint(component)
class Description {
  get content () {
    return (Description[magic.content] ?? '')
  }

  static change (newContent) {
    Description[magic.content] = newContent
    return Description
  }
}

export default Description
