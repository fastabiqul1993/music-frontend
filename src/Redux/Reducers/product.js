const init = {
  productList: [],
  productName: [],
  product: {},
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

const product = (state = init, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_ALL_PRODUCT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "GET_ALL_PRODUCT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
        productList: action.payload.data.response.rows
      };
    case "GET_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_PRODUCT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "GET_PRODUCT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
        product: action.payload.data.response
      };
    case "GET_PRODUCT_NAME_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_PRODUCT_NAME_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "GET_PRODUCT_NAME_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
        productName: action.payload.data.response
      };
    case "POST_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "POST_PRODUCT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "POST_PRODUCT_FULFILLED":
      state.productList.push(action.payload.data.response);
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
        productName: state.product
      };
    case "UPDATE_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "UPDATE_PRODUCT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "UPDATE_PRODUCT_FULFILLED":
      // const dataAfterEdit = state.productList.map(product => {
      //   if (product.id === action.paylod.data.response.id) {
      //     return action.payload.data.response;
      //   }
      //   return product;
      // });
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true
        // productList: dataAfterEdit
      };
    case "DELETE_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "DELETE_PRODUCT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "DELETE_PRODUCT_FULFILLED":
      const dataAfterDelete = state.productList.filter(
        product => product.id !== action.payload.data.response.id
      );
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
        productList: dataAfterDelete
      };

    default:
      return state;
  }
};

export default product;
