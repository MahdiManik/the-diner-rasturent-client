import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useAuth();
  const axiosMethod = useAxios();
  const [name, setName] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    const userInfo = {
      name,
      email,
      photo,
    };
    console.log(userInfo);
    axiosMethod.post("/users", userInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        console.log(res.data);
        return Swal.fire({
          title: "Good job",
          text: "User Created successfully",
          icon: "success",
        });
      }
      if (
        !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~\\-]).{6,}$/.test(
          password
        )
      ) {
        return Swal.fire({
          title: "Oops!",
          text: "At least one uppercase letter, At least one special character, A minimum length of 6 characters",
          icon: "error",
        });
      }
    });

    createUser(email, password);
    console.log(email, password, name, photo).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <Link to={"/"} className="btn btn-outline btn-sm ml-16 mt-4">
        Go home
      </Link>
      <div className=" w-full max-w-[1200px] mx-auto my-16  bg-white">
        <h1 className="text-5xl text-center text-[#000000] font-bold">
          Register First!
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
                <form onSubmit={handleRegister} className="card-body bg-white">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="name"
                      placeholder="Name"
                      className="input input-bordered"
                      required
                      onBlur={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo</span>
                    </label>
                    <input
                      type="photo"
                      placeholder="Photo"
                      className="input input-bordered"
                      required
                      onBlur={(e) => setPhoto(e.target.value)}
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
                      className="flex justify-center items-center gap-2 mt-auto btn btn-primary"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <p className="pb-8 px-6 text-[#041e42] bg-white">
                  Already have an account?
                  <Link
                    className="ml-2 mt-auto hover:text-white
					btn btn-primary"
                    to={"/login"}
                  >
                    Please Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
