import axios from "axios";

const auth = JSON.parse(localStorage.getItem("response"));

export const getCart = id => {
  return {
    type: "GET_CART",
    payload: axios.get(`http://localhost:3000/cart/${id}`, {
      headers: { header_key: "4N3K4-MUS1K", access_token: auth.access_token }
    })
  };
};

export const postCart = ProductId => {
  return {
    type: "POST_CART",
    payload: axios.post(
      `http://localhost:3000/cart`,
      { UserId: auth.id, ProductId },
      {
        headers: { header_key: "4N3K4-MUS1K", access_token: auth.access_token }
      }
    )
  };
};

export const patchCart = (ProductId, qty) => {
  return {
    type: "PATCH_CART",
    payload: axios.patch(
      `http://localhost:3000/cart`,
      {
        UserId: auth.id,
        ProductId,
        qty
      },
      {
        headers: { header_key: "4N3K4-MUS1K", access_token: auth.access_token }
      }
    )
  };
};

export const deleteCart = ProductId => {
  return {
    type: "DELETE_CART",
    payload: axios.delete(
      `http://localhost:3000/cart`,
      {
        UserId: auth.id,
        ProductId
      },
      {
        headers: { header_key: "4N3K4-MUS1K", access_token: auth.access_token }
      }
    )
  };
};
