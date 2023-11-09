import { useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const AddedAFood = () => {
  const { user } = useAuth();
  const axiosMethod = useAxios();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [origin, setOrigin] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [addedBy, setAddedBy] = useState("");
  const email = user?.email;
  const [orderCount, setOrderCount] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      image,
      origin,
      quantity,
      category,
      price,
      shortDescription,
      addedBy,
      orderCount,
      email,
    };
    console.log(data);

    axiosMethod.post("/add-food", data).then((res) => {
      if (res.data.insertedId) {
        console.log(res.data);
        return Swal.fire({
          title: "Good job",
          text: "This food item added on order page",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="py-40 w-full max-w-[1250px] px-[25px] mx-auto bg-white ">
      <div className="md:flex gap-10">
        <div className="flex-[0.90] flex flex-col ml-16 justify-between text-black">
          <div>
            <h1 className="text-3xl font-bold">Add a Food</h1>
            <p className="max-w-[60ch] text-xl pr-4 mt-5">
              Welcome to the Add a Food page. You can use this form to add a new
              food item to our platform. Please fill out the following details
              to provide information about your food item:
            </p>
            <div className="space-y-4 mt-10">Features</div>
          </div>
        </div>
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
                onBlur={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Origin</span>
              </label>
              <input
                type="origin"
                placeholder="origin"
                className="input input-bordered"
                required
                onBlur={(e) => setOrigin(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                placeholder="Image"
                className="input input-bordered"
                required
                onBlur={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">category</span>
              </label>
              <input
                placeholder="category"
                type="category"
                className="input input-bordered"
                required
                onBlur={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">quantity</span>
              </label>
              <input
                placeholder="quantity"
                type="quantity"
                className="input input-bordered"
                required
                onBlur={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                placeholder="price"
                required
                type="price"
                className="input input-bordered"
                onBlur={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">orderCount</span>
              </label>
              <input
                placeholder="orderCount"
                required
                type="orderCount"
                className="input input-bordered"
                onBlur={(e) => setOrderCount(e.target.value)}
              ></input>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">addedBy</span>
              </label>
              <input
                required
                defaultValue={user?.displayName}
                readOnly
                type="addedBy"
                className="input input-bordered"
                onBlur={(e) => setAddedBy(e.target.value)}
              ></input>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                defaultValue={user?.email}
                readOnly
                type="email"
                className="input input-bordered"
                //onBlur={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">shortDescription</span>
              </label>
              <textarea
                placeholder="description"
                className="input input-bordered"
                onBlur={(e) => setShortDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="form-control mt-2">
              <button className="btn btn-primary">Add Food</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddedAFood;
