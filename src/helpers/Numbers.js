import numeral from 'numeral'

const format = {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'ribu',
    million: 'juta',
    billion: 'miliar',
    trillion: 'triliun',
  },
  ordinal: function(number) {
    return number === 1 ? 'se' : 'se'
  },
  currency: {
    symbol: 'Rp',
  },
}

numeral.register('locale', 'id', format)
numeral.locale('id')

function toUang(num) {
  // return numeral(num).format('$ 0,0.00')
  return numeral(num).format('$0,0')
}

const Numbers = {
  toUang,
}

export default Numbers
