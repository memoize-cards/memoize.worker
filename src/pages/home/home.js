import { paint } from '@standard/h'
import result from '@standard/result'
import storage from './storage'
import component from './component'

@paint(component)
@storage
class Home {
  #data

  get value () {
    return `${this.#data?.logradouro}, ${this.#data?.bairro} - ${this.#data?.localidade}`
  }

  [result.Ok] (data) {
    this.#data = data
    return this
  }
}

export default Home
