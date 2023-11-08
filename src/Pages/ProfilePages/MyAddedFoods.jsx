import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/UseAuth";
import MyAddedCard from "./MyAddedCard";

const MyAddedFoods = () => {
  const axiosMethod = useAxios();
  const [food, setFood] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axiosMethod(`/add-food?email=${user?.email}`).then((res) => {
      setFood(res.data);
    });
  }, [axiosMethod, user?.email]);
  console.log(food);
  return (
    <div>
      <div className="flex flex-col max-w-[1200px] mx-auto gap-8 p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-5xl font-bold">Your Added Food</h2>
        <div className="flex flex-col divide-y divide-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 py-6 gap-12 sm:flex-row sm:justify-between">
            {food?.map((item) => (
              <MyAddedCard key={item?._id} item={item}></MyAddedCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddedFoods;
