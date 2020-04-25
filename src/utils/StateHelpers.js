import { get, set } from 'lodash'

function Toggle(key, value = undefined) {
  return (prevState, props) => {
    const arrKeys = key.split('.')
    const curValue = value === undefined ? !get(prevState, key) : value
    if (arrKeys.length > 1) {
      const parentKey = arrKeys[1]
      const parentObj = get(prevState, parentKey)
      set(parentObj, key, curValue)
      return {
        [parentKey]: parentObj,
      }
    }

    return {
      [key]: curValue,
    }
  }
}

export default {
  Toggle,
}
