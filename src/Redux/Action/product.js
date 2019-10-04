import axios from "axios";

const auth = JSON.parse(localStorage.getItem("response"));

export const getAllProduct = id => {
  return {
    type: "GET_ALL_PRODUCT",
    payload: axios.get(`http://localhost:3000/product`, {
      params: {
        CategoryId: id
      }
    })
  };
};

export const getProduct = name => {
  return {
    type: "GET_PRODUCT",
    payload: axios.get(`http://localhost:3000/product/${name}`)
  };
};

export const getProductName = () => {
  return {
    type: "GET_PRODUCT_NAME",
    payload: axios.get(`http://localhost:3000/product/search`)
  };
};

export const postProduct = formData => {
  return {
    type: "POST_PRODUCT",
    payload: axios.post(`http://localhost:3000/product/`, formData, {
      headers: { header_key: "4N3K4-MUS1K", access_token: auth.access_token }
    })
  };
};

export const updateProduct = (
  id,
  name,
  qty,
  price,
  CategoryId,
  BranchId,
  description
) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: axios.patch(
      `http://localhost:3000/product/${id}`,
      { name, qty, price, CategoryId, BranchId, description }
      // {
      //   headers: { header_key: "4N3K4-MUS1K", access_token: auth.access_token }
      // }
    )
  };
};

export const deleteProduct = id => {
  return {
    type: "DELETE_PRODUCT",
    payload: axios.delete(`http://localhost:3000/product/${id}`, {
      headers: { header_key: "4N3K4-MUS1K", access_token: auth.access_token }
    })
  };
};
