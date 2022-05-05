import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((item) => item.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      allProducts: action.payload,
      filterProducts: action.payload,
      filter: {
        ...state.filter,
        maxPrice,
        price: maxPrice,
      },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, gridView: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, gridView: false };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filterProducts } = state;
    let newProduct = [...filterProducts];

    if (sort === "price-lowest") {
      newProduct = newProduct.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price === b.price) return 0;
        if (a.price < b.price) return -1;
      });
    }

    if (sort === "price-highest") {
      newProduct = newProduct.sort((a, b) => b.price - a.price);
    }

    if (sort === "name-a") {
      newProduct = newProduct.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sort === "name-z") {
      newProduct = newProduct.sort((a, b) => b.name.localeCompare(a.name));
    }

    return { ...state, filterProducts: newProduct };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filter: { ...state.filter, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { allProducts } = state;
    const { text, category, company, color, price, shipping } = state.filter;
    let tempProducts = [...allProducts];

    //filter
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }

    if (category !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.category === category;
      });
    }

    if (company !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.company === company;
      });
    }

    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((item) => item === color);
      });
    }

    if (shipping) {
      tempProducts = tempProducts.filter((product) => {
        return product.shipping === true;
      });
    }

    tempProducts = tempProducts.filter((product) => {
      return product.price <= price;
    });

    return { ...state, filterProducts: tempProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filter: {
        ...state.filter,
        text: "",
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: state.filter.maxPrice,
        shipping: false,
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
