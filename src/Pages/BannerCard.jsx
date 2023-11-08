import PropTypes from "prop-types";

const BannerCard = ({ food }) => {
  console.log(food);
  const {
    image,
    name,
    quantity,
    orderCount,
    foodOrigin,
    category,
    addManager,
  } = food || {};
  return (
    <div className="flex space-x-6">
      <img
        alt=""
        className="flex-1 flex-shrink-0 object-cover w-40 h-52 mb-4 bg-center rounded-sm dark:bg-gray-500"
        src={image}
      />
      <div className="flex flex-col">
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-sm dark:text-gray-400">Order: {orderCount}</p>
        <div className="flex mt-2 space-x-2"></div>
      </div>
    </div>
  );
};

BannerCard.propTypes = {
  food: PropTypes.object,
};

export default BannerCard;
