
const initialState = {
  token: localStorage.getItem('token'),
  isAuthnticated: null,
  isLoading: false,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.user
      }
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.token);
      return {
        ...state,
        ...action.user,
        isAuthenticated: true,
        isLoading: false
      }
    case 'AUTH_ERROR':
    case 'LOGIN_FAIL':
    case 'LOGOUT_SUCCESS':
    case 'REGISTER_FAIL':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      }
    default:
      return state;
  }
}