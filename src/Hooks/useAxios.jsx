import axios from "axios";

const axiosMethod = axios.create({
  baseURL: "http://localhost:7000",
  withCredentials: true,
});
const useAxios = () => {
  return axiosMethod;
};

export default useAxios;
