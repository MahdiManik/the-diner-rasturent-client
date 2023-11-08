import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../Hooks/UseAuth";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { user, Login, googleLogin, profileUpdate } = useAuth();
  const axiosMethod = useAxios();
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const photo = user?.photoURL;
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("");
    try {
      await Login(email, password).then((res) => {
        console.log(email, password);
        const loggedUser = res.user;
        console.log(loggedUser);
        const user = { email };
        console.log(user);
        axiosMethod.post("/jwt", user).then((res) => {
          console.log(res.data);
        });
        toast.success("Successfully Logged!", { id: toastId });
        navigate(location?.state ? location.state : "/");
      });
    } catch (err) {
      console.log(err);
      toast.error(err.message, { id: toastId });
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        profileUpdate(name, photo, email).then((result) =>
          console.log("profile updated", result)
        );
        console.log(result.user);
        Swal.fire({
          title: "Great job!",
          text: "Sign-in successful.",
          imageUrl:
            "https://images.pexels.com/photos/5898313/pexels-photo-5898313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Welcome image",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.error(err.message));
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
              src="https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
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
                      className="flex justify-center items-center gap-2 mt-auto btn btn-primary "
                    >
                      Login
                    </button>
                  </div>
                </form>
                <p className="pb-8 px-6 text-[#041e42] bg-white">
                  Do Not have an account?
                  <Link
                    className="ml-2 mt-auto btn btn-primary"
                    to={"/register"}
                  >
                    Register
                  </Link>
                </p>
                <div className=" flex justify-center items-center bg-white">
                  <button
                    onClick={handleGoogleLogin}
                    className="flex items-center gap-2 px-8 mt-auto btn btn-primary"
                  >
                    <span className="text-3xl">
                      <FcGoogle></FcGoogle>
                    </span>
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
