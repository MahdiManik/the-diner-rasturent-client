import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      <div className="flex-1 font-bold text-2xl px-2 mx-2">The Diner</div>
      <div className="flex-none hidden lg:block">
        <div className="flex gap-4 ">
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
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-sm btn-primary" : "btn btn-ghost btn-sm"
            }
            to={"/contact"}
          >
            Contact
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-sm btn-primary" : "btn btn-ghost btn-sm"
            }
            to={"/login"}
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
