import * as Messages from '../resources/messages';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  message: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_EMAIL':
    return { ...state, email: action.payload }
    case 'ADD_PASSWORD':
    return { ...state, password: action.payload }
    case 'ADD_NAME':
    return { ...state, name: action.payload }
    case 'FAILURE_REGISTER':
    switch (action.payload)
    {
      case 'auth/email-already-in-use':
      return { ...state, message: Messages.email_already_in_use }
      case 'auth/invalid-email':
      return { ...state, message: Messages.invalid_email }
      case 'auth/operation-not-allowed':
      return { ...state, message: Messages.operation_not_allowed }
      case 'auth/weak-password':
      return { ...state, message: Messages.weak_password }
      default:
      return { ...state, message: Messages.undefined_register_error }
    }
    case 'SUCCESS_REGISTER':
    return { ...state, name: '' }
    case 'AUTH_SUCCESS':
    return { ...state, email: '', password: '' }
    case 'AUTH_FAILURE':
    switch (action.payload)
    {
      case 'auth/invalid-email':
      return { ...state, message: Messages.invalid_email }
      case 'auth/user-disabled':
      return { ...state, message: Messages.user_disabled }
      case 'auth/user-not-found':
      return { ...state, message: Messages.user_not_found }
      case 'auth/wrong-password':
      return { ...state, message: Messages.wrong_password }
      default:
      return { ...state, message: Messages.undefined_register_error }
    }
    default:
    return state;
  }
}
