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
    <div className=" h-[500px] flex flex-col justify-center items-center">
      <img
        className="w-full h-60 border-2 border-primary overflow-hidden transition-all hover:scale-105"
        src={image}
        alt=""
      />
      <div className=" w-full flex-[0.4] text-lg flex justify-center items-center"></div>
      <h1 className="text-center font-semibold">{name}</h1>
      <div className="h-32 flex-[2] flex flex-col justify-between  p-[15px] transition-all">
        <p className="text-center">Category: {category}</p>
        <p className="text-center">Price: ${price}</p>
        <p className="text-center  mb-8">Quantity: {quantity}</p>
        <Link to={'/single-food'} className="btn btn-primary w-full">Show details</Link>
      </div>
    </div>
  );
};

export default FoodCard;
