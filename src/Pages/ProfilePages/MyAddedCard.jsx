import PropTypes from "prop-types";

const MyAddedCard = ({ item }) => {
  const { image, name, price, category } = item || {};
  return (
    <div className="flex w-full space-x-2 sm:space-x-4 border-2">
      <img
        className=" object-cover w-52 h-40 dark:border-transparent rounded outline-none  dark:bg-gray-500"
        src={image}
        alt="Set of travel chargers"
      />
      <div className="flex flex-col justify-between w-full p-4">
        <div className="flex justify-between w-full">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold sm:pr-8">{name}</h3>
            <p className="text-sm dark:text-gray-400">{category}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">${price}</p>
          </div>
        </div>
        <div className="flex text-sm divide-x">
          <button
            type="button"
            className="flex items-center btn btn-primary btn-sm"
          >
            Update Food
          </button>
        </div>
      </div>
    </div>
  );
};

MyAddedCard.propTypes = {
  item: PropTypes.object,
};

export default MyAddedCard;
