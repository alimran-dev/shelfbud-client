import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MoreServiceCard = ({ service }) => {
    const navigate = useNavigate();
    const {
      _id,
    book_name,
    img,
    username,
    price,
    profile_img,
  } = service || {};
  return (
    <div onClick={()=>navigate(`/services/${_id}`)} className="flex items-center gap-5 bg-[#F5EFE6] p-5 rounded-md cursor-pointer shadow-md">
      <img src={img} alt="" className="w-36 h-52" />
      <div className="w-full space-y-3">
        <h2 className="text-xl font-bold text-gray-800">{book_name}</h2>
        <p className="text-lg font-medium text-gray-700">Price: {price}$</p>
        <p className="text-xl font-semibold text-gray-700 mt-1">Provider:</p>
        <div className="flex items-center gap-3">
          <img src={profile_img} alt="" className="w-12 h-12 rounded-xl" />
          <p className="text-lg font-medium text-gray-600">{username}</p>
        </div>
      </div>
    </div>
  );
};

export default MoreServiceCard;
MoreServiceCard.propTypes = {
  service: PropTypes.object,
};
