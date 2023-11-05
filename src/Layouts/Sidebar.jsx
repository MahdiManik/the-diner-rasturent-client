import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

const Sidebar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="flex flex-col gap-4 bg-base-200 menu p-4 w-80 min-h-full">
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
  );
};

export default Sidebar;
