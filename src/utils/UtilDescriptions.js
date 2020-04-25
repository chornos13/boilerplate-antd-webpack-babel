import ReactDOM from 'react-dom'

function setSizeColFromRef(...sizePerCol) {
  let isAppended = false
  return {
    ref: (ref) => {
      // eslint-disable-next-line react/no-find-dom-node
      const dom = ReactDOM.findDOMNode(ref)
      if (!dom || isAppended) return
      isAppended = true
      const table = dom.getElementsByTagName('table')[0]
      const colgroup = document.createElement('colgroup')
      for (let i = 0; i < sizePerCol.length; i += 1) {
        const col = document.createElement('col')
        col.width = sizePerCol[i]
        colgroup.appendChild(col)
      }
      table.appendChild(colgroup)
    },
  }
}

export default {
  setSizeColFromRef,
}
