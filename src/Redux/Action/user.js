import axios from "axios";

export const login = (email, password) => {
  return {
    type: "LOGIN",
    payload: axios.post(`http://localhost:3000/user/login`, { email, password })
  };
};

export const register = (name, email, password) => {
  return {
    type: "REGISTER",
    payload: axios.post(`http://localhost:3000/user/register`, {
      name,
      email,
      password
    })
  };
};
