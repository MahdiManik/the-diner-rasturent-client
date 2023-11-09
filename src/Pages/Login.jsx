import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { Login, googleLogin, profileUpdate } = useAuth();
  const location = useLocation();
  const axiosMethod = useAxios();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    Login(email, password)
      .then((result) => {
        console.log(result);

        Swal.fire({
          title: "Great job!",
          text: "Sign-in successful.",
          imageUrl:
            "https://images.pexels.com/photos/5898313/pexels-photo-5898313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Welcome image",
        });

        const user = { email };

        axiosMethod
          .post("/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res?.data?.success) {
              navigate(location?.state ? location.state : "/");
            }
          });
      })

      .catch((err) => console.log(err.message));
    form.reset();
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        profileUpdate().then((result) =>
          console
            .log("profile updated", result)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        );
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
      <Link to={"/"} className="btn btn-primary mt-6 ml-12">
        Go home
      </Link>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-6">
          <div className="text-center lg:text-left">
            <img
              src="https://media.istockphoto.com/id/905301022/photo/login-screen-username-and-password-in-internet-browser-on-computer-screen.webp?s=1024x1024&w=is&k=20&c=IoZ47fIGm_-qnQtrUgvWmUOOabKvE61rkWcy6HMXVzk="
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border-2">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl font-bold py-5 text-black text-center">
                Login
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-black">
                    Email
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="input  input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold ">
                    Confirm Password
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Your password"
                  className="input   input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="py-1 px-5 btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="">
                <p className="text-center text-black py-5">Or Sign In with</p>
                <div
                  onClick={handleGoogleLogin}
                  className="flex justify-center btn btn-primary items-center gap-5  
				"
                >
                  SignIn with google
                  <span className=" rounded-full p-2 bg-white text-xl">
                    <FcGoogle />
                  </span>
                </div>
                <p className="text-center py-5">
                  New in Our Site?{" "}
                  <Link className="btn btn-primary" to={"/register"}>
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
