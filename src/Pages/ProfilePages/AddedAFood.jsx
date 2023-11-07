import { useState } from "react";
import useAuth from "../../Hooks/UseAuth";

const AddedAFood = () => {
  const { user } = useAuth;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { user, name, email, date, timeSlot, address };
    console.log(data);
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
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                onBlur={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                required
                onBlur={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Time Slot</span>
              </label>
              <select
                className="input input-bordered"
                onChange={(e) => setTimeSlot(e.target.value)}
              >
                <option>8am. - 12pm.</option>
                <option>12pm. - 6pm.</option>
                <option>6pm. - 10pm.</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <textarea
                rows={12}
                className="input input-bordered"
                onBlur={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>

            <div className="form-control mt-2">
              <button className="btn btn-primary">Add Food</button>
            </div>
          </form>
        </div>
		<div>
			<img src="" alt="" />
		</div>
      </div>
    </div>
  );
};
export default AddedAFood;
