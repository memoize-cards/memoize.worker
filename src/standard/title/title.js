import { paint } from '@standard/h'
import component from './component'
import magic from '@standard/magic'

@paint(component)
class Title {
  get content () {
    return (Title[magic.content] ?? 'Memoize')
  }

  static change (content) {
    Title[magic.content] = content
    return Title
  }
}

export default Title
