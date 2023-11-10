import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const ServiceProvider = ({ profile_img, area, username, email }) => {
  const [books, setBooks] = useState();
  const [orders, setOrders] = useState();
  useEffect(() => {
    fetch(`https://shelfbud-server.vercel.app/bookCount?email=${email}`)
      .then((res) => res.json())
      .then((data) => setBooks(data.count * 1));
    fetch(`https://shelfbud-server.vercel.app/sellerOrderCount?email=${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data.count * 1));
  }, [email]);
  console.log(books);
  return (
    <div className="bg-[#E8DFCA] mx-12 mt-10 p-8 space-y-3 text-gray-800 rounded-lg">
      <h1 className="text-3xl font-semibold text-center pb-2">
        Seller Information
      </h1>
      <div className="flex items-center justify-around gap-5">
        <img src={profile_img} alt="" className="w-40 h-40 rounded-xl mx-10" />
        <div className="flex-1 py-5 space-y-2 border-x-2 border-gray-800 px-5">
          <p className="text-xl text-gray-600 font-semibold">{username}</p>
          <p className="flex items-center gap-1 text-lg font-medium text-gray-900">
            <CiLocationOn className="text-4xl font-bold" />
            {area}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-lg font-medium">
            Total Listed Books: {books || 0}
          </p>
          <p className="text-lg font-medium">Total Orders: {orders || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;
ServiceProvider.propTypes = {
  profile_img: PropTypes.string,
  area: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
};
