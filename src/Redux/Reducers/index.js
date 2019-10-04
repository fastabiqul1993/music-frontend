import { combineReducers } from "redux";

import user from "./user";
import category from "./category";
import branch from "./branch";
import product from "./product";
import cart from "./cart";

const rootReducer = combineReducers({ user, category, branch, product, cart });

export default rootReducer;
