import axios from "axios";
import { baseURL, TIMEOUT } from "./request/config";
import useMainStore from "@/stores/modules/main";
const mainStore = useMainStore();

function changeIsLoading() {
  setTimeout(() => {
    mainStore.isLoading = false;
  }, 300);
}
class Request {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    this.instance.interceptors.request.use(
      (config) => {
        mainStore.isLoading = true;
        return config;
      },
      (err) => err
    );

    this.instance.interceptors.response.use(
      (config) => {
        changeIsLoading();
        return config;
      },
      (err) => {
        changeIsLoading();
        return err;
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new Request(baseURL, TIMEOUT);
export * from "./modules/city";
export * from "./modules/home";
export * from "./modules/detail";
