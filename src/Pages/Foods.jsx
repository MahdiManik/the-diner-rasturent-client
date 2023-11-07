

import { useEffect, useState } from "react";

import useAxios from "../Hooks/useAxios";
import FoodCard from "./FoodCard";

const AllFoodItems = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [count, setCount] = useState(0);
  const axiosMethod = useAxios();

  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    axiosMethod.get("/foodsCount").then((res) => {
      setCount(res.data.count);
    });
  }, [axiosMethod]);

  const handleItemsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(0);
    // console.log(value);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    axiosMethod
      .get(`/foods?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => {
        setAllFoods(res.data);
      });
  }, [axiosMethod, currentPage, itemsPerPage]);

  return (
    <div className="w-full max-w-[1250px] px-[25px] mx-auto">
      <h2 className="text-center text-4xl font-bold mt-8">
        Choose your favorite food
      </h2>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
          {allFoods?.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="mb-4">Current page: {currentPage + 1}</p>
        <button
          className="btn btn-sm mr-2 btn-outline btn-info"
          onClick={handlePrevPage}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            className={
              currentPage === page
                ? "btn btn-error mr-2 btn-sm"
                : "btn btn-primary mr-2 btn-sm"
            }
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page + 1}
          </button>
        ))}
        <button
          className="btn btn-sm mr-2 btn-outline btn-info"
          onClick={handleNextPage}
        >
          Next
        </button>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  );
};

export default AllFoodItems;
