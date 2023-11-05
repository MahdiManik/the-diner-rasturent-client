import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const {
    name,
    image,
    addManager,
    category,
    email,
    foodOrigin,
    orderCount,
    price,
    quantity,
    shortDescription,
  } = food || {};

  return (
    <div className="border-2 border-primary  h-[500px] flex flex-col rounded-[15px] overflow-hidden transition-all hover:scale-105  hover:shadow-2xl group">
      <img className="w-full h-60" src={image} alt="" />
      <div className="w-full  flex-1 flex justify-center items-center">
        <h1 className="text-2xl font-semibold">{name}</h1>
      </div>
      <div className="h-[200px] flex-[2] flex flex-col justify-between bg-white rounded-[12px] p-[15px] transition-all">
        <div className="h-[130px] text-xl text-center flex items-center">
        </div>
          <p className="text-center text-2xl mb-2">{category}</p>
        <p className="text-center text-2xl mb-2">{price}</p>
        <p className="text-center text-2xl mb-2">{quantity}</p>
        <button className="btn btn-primary w-full">Show details</button>
      </div>
    </div>
  );
};

export default FoodCard;
