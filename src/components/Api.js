import axios from "axios";

const baseURl = "https://my-json-server.typicode.com/shaikhjaffar/myserver/Product";

const ProductService = {
  getAllProduct: function () {
    return axios.get(`${baseURl}`);
  },

  UpdateProduct: function (id, data) {
    return axios.put(
      `${baseURl}/${id}`,
      {
        body: data,
      },
      {
        Headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    );
  },

  DeleteProduct: function (id) {
    return axios.delete(`${baseURl}/${id}`, {
      Headers: { "Content-type": "application/json; charset=UTF-8" },
    });
  },
};

export { ProductService };
