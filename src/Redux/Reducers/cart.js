const init = {
  cartList: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

const cart = (state = init, action) => {
  switch (action.type) {
    case "GET_CART_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_CART_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "GET_CART_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
        cartList: action.payload.data.response.rows
      };
    case "POST_CART_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "POST_CART_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "POST_CART_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true
      };
    case "PATCH_CART_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "PATCH_CART_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "PATCH_CART_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true
      };
    case "DELETE_CART_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "DELETE_CART_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "DELETE_CART_FULFILLED":
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

export default cart;
