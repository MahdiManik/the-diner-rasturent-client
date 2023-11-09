import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AiFillDelete } from "react-icons/ai";
import useAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

const MyOrderFoods = () => {
  const axiosMethod = useAxios();
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axiosMethod(`/my-order?email=${user?.email}`).then((res) => {
      setOrders(res.data);
    });
  }, [axiosMethod, user?.email]);

  const handleDelete = (id) => {
    axiosMethod.delete(`my-order/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            // Remove the deleted item from the orders list
            const updatedOrders = orders.filter((order) => order._id !== id);
            setOrders(updatedOrders);

            Swal.fire({
              title: "Deleted!",
              text: "Your order has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

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
            <tbody key={order._id}>
              {/* row 1 */}
              <tr className="bg-white text-black">
                <td>
                  <div className="flex items-center ">
                    <div className="avatar">
                      <div className="mask mask-decagon mr-2  w-20 h-20">
                        <img src={order.image} alt="The-Diner food" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order.name}</div>
                      <div className="text-sm opacity-50">{order.category}</div>
                    </div>
                  </div>
                </td>
                <td>{order.addManager}</td>
                <td>{order.date}</td>
                <td>${order.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-ghost font-bold text-3xl"
                  >
                    <AiFillDelete />
                  </button>
                </th>
              </tr>
            </tbody>
          ))}

          {/* foot */}
          <tfoot className="bg-white text-black">
            <tr>
              <th>Name</th>
              <th>Food Owner</th>
              <th>Order Date</th>
              <th>Price</th>
              <th>Order Delete</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyOrderFoods;
