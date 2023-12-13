import h from '@standard/h'
import Master from '@standard/master'
import text from '@elements/text'

function component (address) {
  return (
    <Master>
      <address>
        <text.P>{address.value}</text.P>
      </address>
      <button data-action='/api/click-me' data-for='#shelf' data-morph='afterbegin'>Click Me</button>
      <div id='shelf' />
    </Master>
  )
}

export default component
