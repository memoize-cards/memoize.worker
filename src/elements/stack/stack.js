import align from './align'
import alignItems from './alignItems'
import direction from './direction'
import gap from './gap'
import justify from './justify'
import justifyContent from './justifyContent'
import styled from '@standard/styled'

const stack = new Proxy({}, {
  get (_, key) {
    return styled[key]`
      display: flex;
      flex-direction: ${direction};
      gap: ${gap};
      width: 100%;
      
      ${alignItems}: ${align};
      ${justifyContent}: ${justify};
    `
  }
})

export default stack
