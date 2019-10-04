const init = {
  branchList: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

const branch = (state = init, action) => {
  switch (action.type) {
    case "GET_ALL_BRANCH_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_ALL_BRANCH_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "GET_ALL_BRANCH_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
        branchList: action.payload.data.response.rows
      };
    default:
      return state;
  }
};

export default branch;
