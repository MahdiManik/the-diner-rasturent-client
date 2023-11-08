import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BannerCard = ({ food }) => {
  const { foodId, image, name, orderCount, category, price } = food || {};
  return (
    <div className=" md:flex space-x-6 ">
      <img
        alt=""
        className=" flex-shrink-0 object-cover h-60 w-96 mb-4 bg-center rounded-sm dark:bg-gray-500"
        src={image}
      />
      <div className="flex flex-col justify-center items-start gap-1">
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-sm dark:text-gray-400">Order: {orderCount}</p>
        <p className="text-sm dark:text-gray-400">Category: {category}</p>
        <p className="text-sm dark:text-gray-400">Price: {price}</p>
        <div className="flex mt-2 space-x-2">
          <Link
            to={`/single-food/${foodId}`}
            className="btn btn-primary btn-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

BannerCard.propTypes = {
  food: PropTypes.object,
};

export default BannerCard;
