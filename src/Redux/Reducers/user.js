const init = {
  user: {},
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

const user = (state = init, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "LOGIN_FULFILLED":
      localStorage.setItem(
        "response",
        JSON.stringify(action.payload.data.response)
      );
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
        user: action.payload.data.response
      };
    case "REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "REGISTER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true
      };
    default:
      return state;
  }
};

export default user;
