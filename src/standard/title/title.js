import { paint } from '@standard/h'
import component from './component'
import trait from '@standard/trait'

@paint(component)
class Title {
  get content () {
    return (Title[trait.content] ?? 'Memoize')
  }

  static change (content) {
    Title[trait.content] = content
    return Title
  }
}

export default Title
