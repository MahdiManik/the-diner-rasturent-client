import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AiFillDelete } from "react-icons/ai";
const MyOrderFoods = () => {
  const axiosMethod = useAxios();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axiosMethod("/my-order").then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  }, [axiosMethod]);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-6">
      <h3>My order foods {orders.length}</h3>

      <div>
        <table className="table mt-6">
          {/* head */}
          <thead className="bg-white text-black ">
            <tr>
              <th>Name</th>
              <th>Food Owner</th>
              <th>Order Time</th>
              <th>Price</th>
              <th>Delete order</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tbody key={order?._id}>
              {/* row 1 */}
              <tr className="bg-white text-black">
                <td>
                  <div className="flex items-center ">
                    <div className="avatar">
                      <div className="mask mask-decagon mr-2  w-20 h-20">
                        <img src={order?.image} alt="The-Diner food" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order?.name}</div>
                      <div className="text-sm opacity-50">
                        {order?.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{order?.bName}</td>
                <td>{order?.date}</td>
                <td>${order?.price}</td>
                <th>
                  <button className="btn btn-ghost font-bold text-3xl">
                    <AiFillDelete />
                  </button>
                </th>
              </tr>
            </tbody>
          ))}

          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyOrderFoods;
