import axios from 'axios'

axios.defaults.baseURL = `${API_URL}`
axios.defaults.headers.common.Authorization = localStorage.getItem('token')

export const AUTHENTICATED = 'authenticated_user'
export const UNAUTHENTICATED = 'unauthenticated_user'
export const AUTHENTICATION_ERROR = 'authentication_error'
export const SIGNUP_SUCCESS = 'signup_success'
export const SIGNUP_ERROR = 'signup_error'
export const FORGOT_PASSWORD_SUCCESS = 'forgot_password_success'
export const FORGOT_PASSWORD_ERROR = 'forgot_password_error'
export const RESET_PASSWORD_SUCCESS = 'reset_password_success'
export const RESET_PASSWORD_ERROR = 'reset_password_error'
export const CHANGE_PASSWORD_SUCCESS = 'change_password_success'
export const CHANGE_PASSWORD_ERROR = 'change_password_error'

export const signIn = (credentials) => async (dispatch) => {
  try {
    const res = await axios.post('/auth/signin', credentials)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('uid', res.data.uid)
    localStorage.setItem('rid', res.data.rid)
    dispatch({ type: AUTHENTICATED })
  } catch (err) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: err.response.data.message,
    })
  }
}

export const signUp = (rowData) => async (dispatch) => {
  const store = {
    fullName: rowData.fullName,
    username: rowData.username,
    email: rowData.email,
    password: rowData.password,
    phone: rowData.phone,
  }

  let ObjError = ''
  const paramsResponse = {}

  try {
    const res = await axios.post('/auth/signup', store)
    dispatch({ type: SIGNUP_SUCCESS, rowData, success: true })

    paramsResponse.title = res.statusText
    paramsResponse.text = 'Kamu sudah terdaftar'
    paramsResponse.icon = 'success'
    AlertSuccess(paramsResponse)
  } catch (err) {
    ObjError = err.response.data

    dispatch({ type: SIGNUP_ERROR, payload: ObjError, success: false })
    AlertError(err)
  }
}

export const changePassword = (rowData, id) => async (dispatch) => {
  let ObjError = ''
  const paramsResponse = {}

  try {
    const res = await axios.put(`/auth/change-password/${id}`, rowData)
    dispatch({ type: CHANGE_PASSWORD_SUCCESS, rowData, success: true })

    paramsResponse.title = 'Success'
    paramsResponse.text = res.data.message
    paramsResponse.icon = 'success'
    AlertSuccess(paramsResponse)
  } catch (err) {
    ObjError = err.response && err.response.data.message

    dispatch({ type: CHANGE_PASSWORD_ERROR, payload: ObjError, success: false })
    AlertError(err)
  }
}

export const forgotPass = (rowData) => async (dispatch) => {
  const store = {
    email: rowData.email,
  }

  try {
    const res = await axios.post('/auth/forgotpassword', store)
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, rowData })
    console.log(res)
    if (res.status === 201) {
      Swal.fire({
        title: res.statusText,
        text: 'Cek link reset password di Email kamu',
        type: 'success',
        button: 'Oke',
      })
        .then(() => {
          console.log('berhasil!')
        })
        .catch((err) => {
          console.log('ups, ada masalah', err)
        })
    } else {
      console.log('Oops, ada masalah lagi')
    }
  } catch (err) {
    console.log(err.response)
    dispatch({
      type: FORGOT_PASSWORD_ERROR,
      payload: err.response.data.message,
    })
    Swal.fire('Gagal!', err.response.data.message)
  }
}

export const ResetPassword = (rowData, email) => async (dispatch) => {
  const store = {
    email: rowData.email,
    password: rowData.password,
  }

  try {
    const res = await axios.put(`/auth/forgotpassword/${email}`, store)
    dispatch({ type: RESET_PASSWORD_SUCCESS, rowData })
    console.log(res)
    if (res.status === 200) {
      Swal.fire({
        title: res.statusText,
        text: res.data.message,
        type: 'success',
        button: 'Oke',
      })
        .then(() => {
          window.location.href = '/login'
        })
        .catch((err) => {
          console.log('ups, ada masalah', err)
        })
    } else {
      console.log('Oops, ada masalah lagi')
    }
  } catch (err) {
    console.log(err.response)
    dispatch({ type: RESET_PASSWORD_ERROR, payload: err.response.data.message })
    Swal.fire('Gagal!', err.response.data.message)
  }
}

export const signOut = () => (dispatch) => {
  localStorage.removeItem('token')
  localStorage.removeItem('uid')
  localStorage.removeItem('rid')
  dispatch({ type: UNAUTHENTICATED })
  window.location.reload()
}
