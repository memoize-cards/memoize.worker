const alignments = [
  'left',
  'center',
  'right'
]

const mapper = {
  left: 'start',
  center: 'center',
  right: 'end'
}

function justify (props) {
  return mapper[alignments.find((key) => props[key])] ?? mapper.left
}

export default justify
