import axios from "axios";

export const productFetch = (id) => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_API_URL + "/products/" + id)
      .then((res) => res);
  };
};

export const productsFetch = () => {
  return axios.get(process.env.REACT_APP_API_URL + "/store");
};

export const productsFetchOne = (id) => {
  return axios.get(process.env.REACT_APP_API_URL + "/store/edit/" + id);
};

export const productDelete = (id) => {
  return axios.delete(process.env.REACT_APP_API_URL + "/store/delete/" + id);
};

export const productCreate = (values) => {
  const UID = Math.random().toString(36).slice(2);
  const object = {
    name: values.name,
    detail: values.detail,
    price: values.price,
    file: values.file,
    UID,
  };
  return axios.post(process.env.REACT_APP_API_URL + "/store/add/", object, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};

export const productUpdate = (values) => {
  console.log('values',values);
  return axios.put(process.env.REACT_APP_API_URL + "/store/update/", values, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};
