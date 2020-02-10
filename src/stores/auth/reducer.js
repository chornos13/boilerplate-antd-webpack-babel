import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from './types'

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    case AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      }
    case UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
      }
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default authReducer
