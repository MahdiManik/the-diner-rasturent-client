import axios from "axios";

const axiosMethod = axios.create({
  baseURL: "http://localhost:7000",
});
const useAxios = () => {
  return axiosMethod;
};

export default useAxios;
