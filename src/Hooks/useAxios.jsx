import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "./UseAuth";

const axiosMethod = axios.create({
  baseURL: "https://the-diner-server-site.vercel.app",
  withCredentials: true,
});
const useAxios = () => {
  const navigate = useNavigate();
  const { logOut, isLoading } = useAuth();
  useEffect(() => {
    axiosMethod.interceptors.response.use(
      (res) => {
        return res;
      },

      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logOut();
          navigate("/login");
        }
      }
    );
  }, [logOut, navigate, isLoading]);
  return axiosMethod;
};

export default useAxios;
