import { Style } from '@standard/css'
import Desciption from '@standard/description'
import h from '@standard/h'
import Scripts from '@standard/scripts'
import Title from '@standard/title'

function component (_props, children) {
  return (
    <html lang='en-US'>
      <head>
        <Title />
        <Desciption />
        <Style />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

export default component
