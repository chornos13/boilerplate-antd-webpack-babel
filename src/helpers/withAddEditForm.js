import React from 'react'
import { get } from 'lodash'
import { withRouter } from 'react-router-dom'
import { Modal, Spin } from 'antd'
import mvBaseMaster from 'validations/mvBaseMaster'
import ApiCall from 'services/ApiCall'
import PropTypes from 'prop-types'
import ReactRouterProps from './ReactRouterProps'

const GET_CONFIG = () => ({
  Component: null,
  getByIdAPI: null,
  createAPI: null,
  updateAPI: null,
  createSchema: mvBaseMaster.getCreateSchema(),
  updateSchema: mvBaseMaster.getUpdateSchema(),
  redirectURL: '',
  manualHandleLoading: false,
  loadingComponent: () => {
    return (
      <div className="loading">
        <Spin size="large" />
        <p>Loading Data...</p>
      </div>
    )
  },
  initialValues: {},
})

function WithAddEditForm(configs = GET_CONFIG()) {
  const {
    Component,
    getByIdAPI,
    createAPI,
    updateAPI,
    createSchema,
    updateSchema,
    redirectURL,
    initialValues,
    manualHandleLoading,
    loadingComponent,
  } = { ...GET_CONFIG(), ...configs }

  class _withAddEditForm extends React.Component {
    constructor(props) {
      super(props)
      this.dataId = get(this.props, 'match.params.id', false)
      this.isEdit = Boolean(this.dataId)
      this.state = {
        isLoading: true,
        initialValues,
      }
      this.validationSchema = undefined
    }

    componentDidMount() {
      this.validationSchema = this.isEdit ? updateSchema : createSchema

      if (this.isEdit) {
        getByIdAPI(this.dataId)
          .then((res) => {
            this.setState({
              isLoading: false,
              initialValues: {
                ...res.data.data,
              },
            })
          })
          .catch((err) => {
            Modal.error({
              title: 'Get data error',
              content: err.message,
            })
          })
      } else {
        this.setState({
          isLoading: false,
        })
      }
    }

    onSubmit = (values, formikBag) => {
      const { history } = this.props

      if (this.isEdit) {
        updateAPI(this.dataId, values)
          .then(() => {
            Modal.success({
              title: `Berhasil Edit Data`,
              onOk() {
                history.push(redirectURL)
              },
            })
          })
          .catch((err) => {
            formikBag.setSubmitting(false)
            Modal.error({
              title: 'Error',
              content: err.response.data.message,
            })
          })
      } else {
        createAPI(values)
          .then(() => {
            Modal.success({
              title: `Berhasil Tambah Data`,
              onOk() {
                history.push(redirectURL)
              },
            })
          })
          .catch((err) => {
            formikBag.setSubmitting(false)
            Modal.error({
              title: 'Error',
              content: err.response.data.message,
            })
          })
      }
    }

    render() {
      const { isEdit, dataId, state, onSubmit, validationSchema } = this
      const { isLoading, initialValues } = state
      const extraProps = {
        formProps: {
          isEdit,
          dataId,
          isLoading,
          initialValues,
          onSubmit,
          validationSchema,
        },
      }

      if (!manualHandleLoading && isLoading) {
        return loadingComponent()
      }

      return <Component {...this.props} {...extraProps} />
    }
  }

  _withAddEditForm.propTypes = {
    history: ReactRouterProps.history,
  }

  return withRouter(_withAddEditForm)
}

export const PropWithAddEditForm = PropTypes.shape({
  formProps: PropTypes.shape({
    isEdit: PropTypes.bool,
    dataId: PropTypes.string,
    isLoading: PropTypes.bool,
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func,
    validationSchema: PropTypes.object,
  }),
})

const withAddEditForm = WithAddEditForm

export default withAddEditForm
