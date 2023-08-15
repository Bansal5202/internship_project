
import axios from "axios";
import {toast} from 'react-toastify'

const request = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 12400000,
  responseType: "json",
});

let requests = [];
let conflictRequest = "";

//Request interceptor customize based on your need

request.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      config.headers["Content-Type"] = "application/json";
      config.headers["lang"] = "en";
    }
    requests.push(config.url);
    if (config.headers["isDisableloader"] !== true) {
      requests.push(config.url);
      showLoader();
    }
    return config;
  },
  (error) => {
    alert(error);
    Promise.reject(error);
  }
);

//response interceptors customize based on your need
request.interceptors.response.use(
  (response) => {
    console.log(response)
    const { data } = response;
    console.log("responseeee,", response);
    removeRequest(response.config.url);
    if (data?.code && data?.code !== 200) {
      toast.error(
        response.data.error ?? "Somthing went wrong. Please try again!"
      );
      return Promise.reject(new Error(data?.error || "Error"));
    } else {
      return Promise.resolve(response.data.result);
    }
  },
  (error) => {
    console.log(error)
    removeRequest(error.config.url);
    toast.error(error?.response?.data?.error ?? "Somthing went wrong");
    return Promise.reject(error);
  }
);

function showLoader() {
  document.body.classList.add("loader-open");
}

function hideLoader() {
  document.body.classList.remove("loader-open");
}

// remove completed request
function removeRequest(req) {
  const i = requests.indexOf(req);
  if (i >= 0) {
    requests.splice(i, 1);
  }
  if (requests.length > 0) {
    showLoader();
  } else {
    hideLoader();
  }
  if (req === conflictRequest) {
    conflictRequest = "";
    requests = requests.filter((request) => request !== req);
  }
}

export default request;