import PropTypes from "prop-types";

const Menu = ({ menu }) => {
  console.log(menu);
  const { _id, category, foodName, price } = menu || {};
  return (
    <tr>
      <th scope="row" className="text-left">
        <h3 className="py-3">{_id}</h3>
      </th>
      <td>
        <span className="block text-sm">{foodName}</span>
      </td>
      <td>
        <span className="block text-sm">{category}</span>
      </td>
      <td>
        <span className="block text-sm">{price}</span>
      </td>
    </tr>
  );
};

Menu.propTypes = {
  menu: PropTypes.object,
};

export default Menu;
