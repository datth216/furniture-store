import axiosClient from "./axiosClient";

const productApi = {
  getAll(params) {
    const url = "/react-store-products";
    return axiosClient.get(url, { params });
  },

  getById(id) {
    const url = `react-store-single-product?id=${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;
