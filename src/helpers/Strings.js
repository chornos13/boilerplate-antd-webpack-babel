function getInitialName(str) {
  return (
    str
      // Pisah berdasarkan spasi
      .split(' ')
      // Ambil kata pertama
      .map((x) => (x || '').substring(0, 1).toUpperCase())
      .join('')
      // Limit Initial 3 huruf saja, misal ABCD -> ABC
      .substring(0, 3)
  )
}

const Strings = {
  getInitialName,
}
export default Strings
