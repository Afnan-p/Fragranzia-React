import { useEffect } from "react";
import { axiosPrivate } from "../axios";

const useAxiosPrivate = () => {

  useEffect(() => {
    axiosPrivate.interceptors.request.use(
      config => {

        const token = localStorage.getItem("accessToken");

        if (token) {
          config.headers["Authorization"] = token; // ✅ IMPORTANT
        }

        return config;
      },
      error => Promise.reject(error)
    );

  }, []);

  return axiosPrivate;
};

export default useAxiosPrivate;