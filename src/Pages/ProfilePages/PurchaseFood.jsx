import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
//import Swal from "sweetalert2";
import useAuth from "../../Hooks/UseAuth";

const PurchaseFood = () => {
  const { user } = useAuth;
  const axiosMethod = useAxios();
  const { id } = useParams();

  const [food, setFood] = useState([]);

  const handlePurchase = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const buy = form.buy.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const foodValue = {
      name,
      buy,
      category,
      quantity,
      taste,
      details,
      photo,
    };
    console.log(foodValue);
  };

  useEffect(() => {
    axiosMethod.get(`/foods/${id}`).then((res) => {
      setFood(res.data);
      console.log(res.data);
    });
  }, [axiosMethod, id]);

  return (
    <div className=" p-20">
      <h2 className="text-4xl font-bold text-center ">Food Order Page</h2>
      <p className=" text-center  p-10 font-sans">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking <br /> at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal distribution
        of letters, <br /> as opposed to using Content here.
      </p>
      <form onSubmit={handlePurchase}>
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
                name="photo"
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
            <label className="label ">quantity</label>
            <label className="input-group input-group-vertical ">
              <input
                type="text"
                name="quantity"
                placeholder="Enter Food quantity"
                className="input input-bordered"
              />
            </label>

            <label className="label ">Buyer Name</label>
            <label className="input-group input-group-vertical ">
              <input
                defaultValue={user?.displayName}
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
            name="email"
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
