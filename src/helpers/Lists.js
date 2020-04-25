function masterToLabelValue(list, mapExtraObjByValue) {
  const curMapExtraObjByValue = mapExtraObjByValue || {}
  return list.map(({ nama, id }) => ({
    label: nama,
    value: id,
    ...(curMapExtraObjByValue[id] || {}),
  }))
}

const Lists = {
  masterToLabelValue,
}

export default Lists
