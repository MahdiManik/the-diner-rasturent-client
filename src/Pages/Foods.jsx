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
    <div className="w-full max-w-[1250px]  px-[25px] mx-auto">
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5794766/pexels-photo-5794766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Welcome to The-Diner</h1>
            <p className="mb-5">
              At The-Diner, were dedicated to serving you the finest culinary
              delights that will tantalize your taste buds. were here to make
              your dining experience unforgettable. Join us in exploring the
              world of flavors and discovering your new favorite dishes. Bon
              appétit!
            </p>
            <div className="mt-8">
              <div className="form-control ">
                <div className="">
                  <input
                    type="text"
                    placeholder="Search Food with food category"
                    className="input input-bordered w-full"
                  />
                  <button className="btn btn-primary mt-5">Search Food</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      </div>
    </div>
  );
};

export default AllFoodItems;
