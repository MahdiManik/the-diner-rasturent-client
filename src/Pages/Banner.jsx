import { useEffect } from "react";
import useAxios from "../Hooks/useAxios";
import { useParams } from "react-router-dom";

const Banner = () => {
  const axiosMethod = useAxios();
  const { foodId } = useParams();

  useEffect(() => {
    axiosMethod.get(`/my-order/${foodId}`).then((res) => {
      console.log(res.data);
    });
  }, [axiosMethod, foodId]);

  return <div></div>;
};

export default Banner;
