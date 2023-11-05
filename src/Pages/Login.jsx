import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { user, Login } = useAuth();
  const navigate = useNavigate(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("");
    try {
      await Login(email, password);
      console.log(email, password);
      console.log("logged in", user);
      toast.success("Successfully Logged!", { id: toastId });
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err.message, { id: toastId });
    }
  };

  return (
    <>
      <Link to={"/"} className="btn btn-outline btn-sm ml-16 mt-4">
        Go home
      </Link>
      <div className=" w-full max-w-[1200px] mx-auto my-16  bg-white">
        <h1 className="text-5xl text-center text-[#000000] font-bold">
          Login now!
        </h1>
        <div className="md:flex mx-6 mt-10 justify-center items-center gap-6">
          <div className="flex-[1] mb-6 h-[600px] rounded-md overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src="https://media.istockphoto.com/id/486766885/photo/sign-in.jpg?s=1024x1024&w=is&k=20&c=4vCFwjDdHBDENAEEhpE-xbyFW-y1nXcowGFGMcHK9L4="
              alt=""
            />
          </div>
          <div className="flex-[1] mb-6">
            <div className="flex flex-col w-full">
              <div className="text-center lg:text-left">
                <p className="text-red-600 "></p>
              </div>
              <div className="card-body  h-[600px] rounded-md overflow-hidden  shadow-2xl">
                <form onSubmit={handleLogin} className="card-body bg-white">
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
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                      onBlur={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className="flex justify-center items-center gap-2 mt-auto hover:text-white
			hover:bg-[#041e42] border-2 py-2 px-6 text-[#041e42] rounded-xl border-[#041e42]"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <p className="pb-8 px-6 text-[#041e42] bg-white">
                  Do Not have an account?
                  <Link
                    className="ml-2 mt-auto hover:text-white
				hover:bg-[#041e42] border-2 py-2 px-6 text-[#041e42] rounded-xl border-[#041e42]"
                    to={"/register"}
                  >
                    Register
                  </Link>
                </p>
                <div className=" flex justify-center items-center bg-white">
                  <button
                    className="flex items-center gap-2 mt-auto hover:text-white
			  hover:bg-[#041e42] border-2 py-2 px-6 text-[#041e42] rounded-xl border-[#041e42]"
                  >
                    <p className="font-bold text-2xl"></p> Login with google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
