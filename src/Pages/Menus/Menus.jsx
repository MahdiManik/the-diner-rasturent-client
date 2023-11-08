import { useEffect, useState } from "react";
import Menu from "./Menu";

const Menus = () => {
  const [menus, setMenus] = useState({});

  useEffect(() => {
    fetch("/menus.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenus(data);
      });
  }, []);

  console.log(menus);

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto p-6 overflow-x-auto">
        <table className="w-full">
          <div>
            <tr>
              <div>
                <h3>The-Diner All Foods Menu</h3>
                <p></p>
              </div>
            </tr>
          </div>
          <div>
            {menus.map((menu) => (
              <Menu key={menu?._id} menu={menu}></Menu>
            ))}
          </div>
        </table>
      </div>
    </section>
  );
};

export default Menus;
