import axios from "axios";

export const getAllBranch = () => {
  return {
    type: "GET_ALL_BRANCH",
    payload: axios.get(`http://localhost:3000/branch`)
  };
};
