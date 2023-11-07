import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
import useAuth from "../Hooks/UseAuth";

const PurchaseFood = () => {
  const { user } = useAuth();
  const axiosMethod = useAxios();
  const { id } = useParams();

  const [food, setFood] = useState({});

  useEffect(() => {
    axiosMethod.get(`/foods/${id}`).then((res) => {
      setFood(res.data);
      console.log(res.data);
    });
  }, [axiosMethod, id]);

  const { foodId, name, image, addManager, orderCount, quantity } = food || {};

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const category = form.category.value;
    const price = form.price.value;
    const date = form.date.value;
    const foodValue = {
      foodId,
      name,
      category,
      quantity,
      email,
      price,
      date,
      image,
      orderCount,
      addManager,
    };
    console.log(foodValue);
	const updatedValue = {
        
	};

    axiosMethod.post("/my-order", foodValue).then((res) => {

      
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "welcome",
          text: "Your food added successfully!",
        });
      }
    });
  };

  return (
    <div className=" p-20">
      <h2 className="text-4xl font-bold text-center ">Food Order Page</h2>
      <p className=" text-center  p-10 font-sans">
      
      </p>
      <form onSubmit={handleOrder}>
        <div className="form-control grid grid-rows-1 md:grid-cols-2 gap-8 w-max-6xl mx-auto font-sans">
          <div>
            <label className="label ">Food Name</label>
            <label className="input-group input-group-vertical ">
              <input
                defaultValue={food?.name}
                type="text"
                name="name"
                placeholder="Enter food name"
                className="input input-bordered "
              />
            </label>

            <label className="label  font-sans">Price</label>
            <label className="input-group input-group-vertical ">
              <input
                type="text"
                defaultValue={food?.price}
                name="price"
                placeholder="Enter food price"
                className="input input-bordered font-sans"
              />
            </label>

            <label className="label ">Category</label>
            <label className="input-group input-group-vertical ">
              <input
                type="text"
                defaultValue={food?.category}
                name="category"
                placeholder="Enter food category"
                className="input input-bordered"
              />
            </label>
          </div>
          <div>
            <label className="label ">Food quantity</label>
            <label className="input-group input-group-vertical ">
              <input
                type="text"
                defaultValue={1}
                name="quantity"
                placeholder="Enter Food quantity"
                className="input input-bordered"
              />
            </label>

            <label className="label ">Buyer Name</label>
            <label className="input-group input-group-vertical ">
              <input
                defaultValue={addManager}
                type="text"
                name="name"
                placeholder="Enter Buyer Name"
                className="input input-bordered"
              />
            </label>
            <label className="label ">Buyer Email</label>
            <label className="input-group input-group-vertical ">
              <input
                defaultValue={user?.email}
                type="text"
                name="email"
                placeholder="Enter Buyer Email"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        <label className="label ">Order Date</label>
        <label className="input-group input-group-vertical ">
          <input
            type="date"
            name="date"
            placeholder="Enter Order Date"
            className="input input-bordered"
          />
        </label>

        <input
          className="w-full text-center font-bold text-xl btn btn-outline mt-8"
          type="submit"
          value="Order Confirm"
        />
      </form>
    </div>
  );
};

export default PurchaseFood;
