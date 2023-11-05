import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/foods").then((res) => {
      setFoods(res.data);
    });
  }, []);

  return (
    <>
      <div className="mt-10 ">
        <div title="Foods"></div>
      </div>
      <div className="mb-64">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 w-full max-w-[1200px] mx-auto">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Foods;
