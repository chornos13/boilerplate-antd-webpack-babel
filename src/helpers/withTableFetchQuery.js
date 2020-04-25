import React from 'react'
import PropTypes from 'prop-types'
import isError from 'lodash/isError'
import queryString from './queryString'
import QueryTableManager from './QueryTableManager'

const GET_CONFIG = () => ({
  idProps: 'fetchQueryProps',
  Component: null,
  API: null,
  initFilter: {},
  defaultFilter: {},
})

function WithTableFetchQuery(options = GET_CONFIG()) {
  const { idProps, Component, API, initFilter, defaultFilter } = Object.assign(
    GET_CONFIG(),
    options,
  )

  const queryManager = new QueryTableManager({
    initFilter,
    defaultFilter,
  })

  return class _withQueryPagination extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: [],
        loading: false,
        page: 0,
        pageSize: 5,
      }
      this.queryManager = queryManager
    }

    onFetchData = (state, instance) => {
      const { page, pageSize, sorted } = state
      // show the loading overlay
      this.setState({ loading: true })
      // fetch your data
      if (instance) {
        this.queryManager.setSorted(sorted)
      }

      return API(
        queryString.stringify({
          page,
          pageSize,
          ...this.queryManager.getStringifyQuery(),
        }),
      )
        .then((res) => {
          return res
        })
        .catch((err) => {
          return err
        })
        .then((resOrError) => {
          if (isError(resOrError)) {
            this.setState({ loading: false, page, pageSize })
          } else {
            const res = resOrError
            this.setState({
              data: res.data.data,
              totalRow: res.data.totalRow,
              loading: false,
              page,
              pageSize,
            })
          }
        })
    }

    doFilter = async (id, value) => {
      this.queryManager.setFilteredValue(id, value, () => {
        this.onFetchData(this.state)
      })
    }

    refresh = () => {
      this.onFetchData(this.state)
    }

    isFilter = (key) => {
      return this.queryManager.filtered.some((x) => x.id === key)
    }

    getFilterByKey = (key) => {
      return this.queryManager.filtered.find((x) => x.id === key)
    }

    render() {
      const { getFilterByKey, isFilter, refresh } = this
      const { data, totalRow, loading, page, pageSize } = this.state
      const queryProps = {
        [idProps]: {
          tableProps: {
            manual: true,
            data,
            totalRow,
            loading,
            onFetchData: this.onFetchData,
            page,
            pageSize,
          },
          doFilter: this.doFilter,
          refresh,
          getFilterByKey,
          isFilter,
        },
      }

      return <Component {...this.props} {...queryProps} />
    }
  }
}

const withTableFetchQuery = WithTableFetchQuery

export const PropWithTableFetchQuery = PropTypes.shape({
  tableProps: PropTypes.shape({
    manual: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object),
    totalRow: PropTypes.number,
    onFetchData: PropTypes.func,
    loading: PropTypes.bool,
    page: PropTypes.number,
    pageSize: PropTypes.number,
  }),
  doFilter: PropTypes.func,
  refresh: PropTypes.func,
  getFilterByKey: PropTypes.func,
  isFilter: PropTypes.func,
})

export default withTableFetchQuery
