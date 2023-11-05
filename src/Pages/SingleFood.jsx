import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { useParams } from "react-router-dom";

const SingleFood = () => {
  const axiosMethod = useAxios();
  const { id } = useParams();
  const [food, setFood] = useState([]);

  useEffect(() => {
    axiosMethod.get(`/foods${id}`).then((res) => {
      setFood(res.data);
      console.log(res.data);
    });
  }, [axiosMethod, id]);

  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={food?.image}
          alt=""
          className="w-full h-60 sm:h-96 dark:bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 text-center mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
          <div className="space-y-2">
            <p
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              {food?.name}
            </p>
            <p className=" dark:text-gray-400">{food?.shortDescription}</p>
          </div>
          <div className="dark:text-gray-100">
            <p>Category: {food?.category}</p>
          </div>
          <div className="dark:text-gray-100">
            <p>Price: ${food?.price}</p>
          </div>
          <div className="dark:text-gray-100">
            <p>Origin: {food?.foodOrigin}</p>
          </div>
          <div className="dark:text-gray-100">
            <p>Made By: {food?.addManager}</p>
          </div>
          <div className="dark:text-gray-100">
            <button className="btn btn-primary">Order Food</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
