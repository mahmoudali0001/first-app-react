import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios, { Axios } from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (requestConfig) => {
    console.log(requestConfig);

    return requestConfig;
  },
  (error) => {
    console.log(error);

    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (responseConfig) => {
    console.log(responseConfig);

    return responseConfig;
  },
  (error) => {
    console.log(error);

    return Promise.reject(error);
  }
);

const root = createRoot(document.getElementById("root"));

root.render(<App />);
registerServiceWorker();
