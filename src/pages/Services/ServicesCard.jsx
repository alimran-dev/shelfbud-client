import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const {
    _id,
    book_name,
    img,
    username,
    price,
    area,
    description,
    profile_img,
  } = service || {};
  const navigate = useNavigate();
  return (
    <div className="flex bg-[#E8DFCA] my-5 mx-12 p-10 rounded-md">
      <div className="w-1/3 flex justify-center items-center">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col justify-center space-y-4 px-20 w-full">
        <p className="text-2xl font-semibold text-gray-700">{book_name}</p>
        <p className="text-lg font-medium text-gray-900">Price: {price}$</p>
        <p className="text-lg">
          {description?.length > 100
            ? `${description.slice(0, 100)}....`
            : description}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-gray-800">Area: </span>
          {area}
        </p>
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <span className="text-xl font-semibold text-gray-800">
              Posted by:{" "}
            </span>
            <img src={profile_img} alt="" className="w-16 rounded-xl" />
            <p className="text-lg font-medium text-gray-800">{username}</p>
          </div>

          <button
            onClick={() => navigate(`/services/${_id}`)}
            className="bg-gray-800 py-1.5 px-3 rounded-md text-white text-lg font-medium"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
ServicesCard.propTypes = {
  service: PropTypes.object.isRequired,
};
