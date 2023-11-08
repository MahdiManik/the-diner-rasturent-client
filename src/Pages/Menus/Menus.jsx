import { useEffect, useState } from "react";
import Menu from "./Menu";
import useAxios from "../../Hooks/useAxios";

const Menus = () => {
  const [menus, setMenus] = useState([]);

  const axiosMethod = useAxios();

  useEffect(() => {
    axiosMethod.get("menus").then((res) => {
      setMenus(res.data);
    });
  }, [axiosMethod]);

  console.log(menus);

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 py-10 my-10">
      <div className="container mx-auto p-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th></th>
              <th scope="col">
                <h2 className="px-2 text-xl font-bold pb-10">Number</h2>
              </th>
              <th scope="col">
                <h2 className="px-2 text-xl font-bold pb-10">Name</h2>
              </th>
              <th scope="col">
                <h2 className="px-2 text-xl font-bold pb-10">Category</h2>
              </th>
              <th scope="col">
                <h2 className="px-2 text-xl font-bold pb-10">Price</h2>
              </th>
            </tr>
          </thead>
          <tbody className="space-y-6  text-center divide-y divide-gray-700">
            {menus.map((menu) => (
              <Menu key={menu?._id} menu={menu}></Menu>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Menus;
