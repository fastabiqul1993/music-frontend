import axios from "axios";

export const getAllCategory = () => {
  return {
    type: "GET_ALL_CATEGORY",
    payload: axios.get(`http://localhost:3000/category`)
  };
};
