import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
} from "./actionType";

// Get All Products
export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });

    let link = `/api/v1/products`;

    const { data } = await axios.get(link);

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
