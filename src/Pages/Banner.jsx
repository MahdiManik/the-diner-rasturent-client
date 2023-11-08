import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import BannerCard from "./BannerCard";
import { Link } from "react-router-dom";

const Banner = () => {
  const axiosMethod = useAxios();
  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    axiosMethod
      .get(`/foods?sortField=orderCount&sortOrder=desc`)
      .then((res) => {
        setTopFoods(res.data);
      });
  }, [axiosMethod]);

  return (
    <>
      <div className="py-6 my-20 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-4 mx-auto space-y-16 sm:p-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold leadi sm:text-5xl">
              Our Top Foods
            </h3>
            <p className="max-w-2xl dark:text-gray-400">
              Our Top Foods selection features a curated list of delectable
              dishes that have won the hearts of our customers. These
              mouthwatering delights are sure to satisfy your cravings and leave
              you wanting more. Explore our top-rated dishes and treat yourself
              to a culinary experience like no other.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {topFoods.slice(0, 6).map((food) => (
              <BannerCard key={food?._id} food={food}></BannerCard>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link to={"/foods"} className="btn btn-primary my-6 ">
            All Foods
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
