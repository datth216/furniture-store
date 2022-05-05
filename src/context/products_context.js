import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import productApi from "../api/productApi";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  isOpenSidebar: false,
  isProductLoading: false,
  isProductError: false,
  productList: [],
  featuredProduct: [],
  isSingleProductLoading: false,
  isSingleProductError: false,
  singleProduct: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function openSidebar() {
    dispatch({ type: SIDEBAR_OPEN });
  }

  function closeSidebar() {
    dispatch({ type: SIDEBAR_CLOSE });
  }

  const fetchProduct = async () => {
    try {
      dispatch({ type: GET_PRODUCTS_BEGIN });
      const data = await productApi.getAll();
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (id) => {
    try {
      dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
      const data = await productApi.getById(id);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
