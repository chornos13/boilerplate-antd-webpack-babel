

const toValueStringify = (data) => {
  const keys = Object.keys(data)
  const obj = {}
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i]
    obj[key] = JSON.stringify(data[key])
  }
  return obj
}

const Objects = {
  toValueStringify
}

export default Objects
