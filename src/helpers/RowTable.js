/* eslint-disable class-methods-use-this */
import React from 'react'
import _, { get } from 'lodash'
import { func } from 'prop-types'

function getAccessor(rowProps) {
  return get(rowProps, 'column.id')
}

function getValue(rowProps, accessor, defaultValue) {
  return get(rowProps, ['original', accessor].join('.'), defaultValue)
}

class MyRowTable {
  ViewMasterData(listMaster, column = 'nama', customAccessor) {
    return function _ViewMasterData(rowProps) {
      const { original } = rowProps
      const accessor = customAccessor || getAccessor(rowProps)
      const value = get(original, accessor)
      const item = listMaster.find((x) => x.id === value)
      const masterLabel = get(item, column)
      return masterLabel
    }
  }

  GET_CONFIG_ARRAY_TEXT = () => ({
    textEmptyArray: '-',
    defaultValue: '-',
    accessor: '',
    accessorItem: '',
    transformItem: (item, index, length, options) => {
      const { accessorItem, defaultvalue } = options

      if (_.isArray(accessorItem)) {
        return item.join(', ')
      }

      return get(item, accessorItem, defaultvalue)
    },
    format: (values, { textEmptyArray }) => {
      // if (_.isArray(values)) {
      //   return values.join(', ')
      // }

      return <div>{values.length > 0 ? values : textEmptyArray}</div>
    },
  })

  renderArrayText(options = this.GET_CONFIG_ARRAY_TEXT()) {
    const { formatArrayAccessor } = this
    const _options = Object.assign(this.GET_CONFIG_ARRAY_TEXT(), options)

    const {
      accessor,
      transformItem,
      format,
      accessorItem,
      defaultValue,
    } = _options

    return function _renderArrayText(rowProps) {
      const _accessor = accessor || getAccessor(rowProps)
      const values = getValue(rowProps, _accessor, [])

      const items = []

      for (let i = 0; i < values.length; i += 1) {
        const isLastItem = i + 1 === values.length
        const value = values[i]
        const extraOptions = {
          isLastItem,
          ..._options,
        }
        if (_.isArray(accessorItem)) {
          const curItem = formatArrayAccessor(
            { original: value },
            accessorItem,
            defaultValue,
          )
          items.push(transformItem(curItem, i, values.length, extraOptions))
        } else {
          items.push(transformItem(value, i, values.length, extraOptions))
        }
      }

      return format(items, _options)
    }
  }

  GET_CONFIG_TEXT = () => ({
    defaultValue: '-',
    accessor: '',
    format: (values) => {
      if (_.isArray(values)) {
        return values.join(', ')
      }

      return values
    },
  })

  formatArrayAccessor(rowProps, accessors, defaultValue) {
    const values = []
    for (let i = 0; i < accessors.length; i += 1) {
      const accessor = accessors[i]
      values.push(getValue(rowProps, accessor, defaultValue))
    }
    return values
  }

  renderText(options = this.GET_CONFIG_TEXT()) {
    const { formatArrayAccessor } = this
    const { accessor, format, defaultValue } = Object.assign(
      this.GET_CONFIG_TEXT(),
      options,
    )

    return function _renderText(rowProps) {
      if (_.isArray(accessor)) {
        return format(formatArrayAccessor(rowProps, accessor, defaultValue))
      }

      const _accessor = accessor || getAccessor(rowProps)
      return format(getValue(rowProps, _accessor, defaultValue))
    }
  }
}

const RowTable = new MyRowTable()

export default RowTable
