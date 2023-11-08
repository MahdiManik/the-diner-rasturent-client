import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const [users, setUsers] = useState({});
  const axiosMethod = useAxios();
  useEffect(() => {
    axiosMethod.get(`/users/${user?.email}`).then((res) => {
      setUsers(res.data);
    });
  }, [axiosMethod, user]);
  //  console.log(users);

  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 flex justify-start items-center  px-2 mx-2">
        <img
          className="w-12 rounded-full h-12 p-2"
          src="https://logo.com/image-cdn/images/kts928pd/production/7ab5def0ab1dad26a90bc35cb7eed9e628f7f201-430x430.png?w=640&q=72"
          alt=""
        />
        <h3 className="text-2xl font-bold ">
          The<span className="text-primary">-Diner</span>
        </h3>
      </div>
      <div className="flex-none hidden lg:block mr-20">
        <div className="flex gap-4 justify-center ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-sm btn-primary" : "btn btn-ghost btn-sm"
            }
            to={"/"}
          >
            home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-sm btn-primary" : "btn btn-ghost btn-sm"
            }
            to={"/foods"}
          >
            All Foods
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-sm btn-primary" : "btn btn-ghost btn-sm"
            }
            to={"/blog"}
          >
            Blog
          </NavLink>

          {user ? (
            <button onClick={handleLogout} className="btn btn-ghost btn-sm">
              Logout
            </button>
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-primary" : "btn btn-ghost btn-sm"
              }
              to={"/login"}
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
      {user && (
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={users?.photo} />
            </div>
          </label>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-primary" : "btn btn-ghost btn-sm"
              }
              to={"/added-a-food"}
            >
              Add Food
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-primary" : "btn btn-ghost btn-sm"
              }
              to={"/my-added-foods"}
            >
              My Added
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-sm btn-primary" : "btn btn-ghost btn-sm"
              }
              to={"/my-order-foods"}
            >
              My Order
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
