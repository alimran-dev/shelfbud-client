import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MyServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const { _id, book_name, img, price, description } = service || {};
  return (
    <div className="flex items-center gap-5 bg-[#E8DFCA] p-8 rounded-md">
      <div className="w-2/3 h-full">
        <img src={img} alt="" className="h-full w-full" />
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-semibold text-gray-700">{book_name}</h1>
        <p className="font-medium">Price: {price}$</p>
        <p className="text-gray-600">
          {description.length > 100 ? (
            `${description.slice(0, 100)}....`
          ) : (
            <></>
          )}
        </p>
        <div className="flex items-center justify-center gap-16">
          <button
            onClick={() => navigate(`/editService/${_id}`)}
            className="font-medium bg-gray-700 text-white py-1.5 px-3 rounded-md"
          >
            Edit
          </button>
          <button className="font-medium bg-red-700 text-white py-1.5 px-3 rounded-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyServiceCard;
MyServiceCard.propTypes = {
  service: PropTypes.object,
};
