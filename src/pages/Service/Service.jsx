import { useLoaderData } from "react-router-dom";
import Head from "../../providers/Head";
import ServiceProvider from "./ServiceProvider";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import MoreServiceCard from "./MoreServiceCard";

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [moreServices, setMoreServices] = useState();
  const [service] = useLoaderData();
  const {
    _id,
    book_name,
    img,
    username,
    email,
    price,
    area,
    description,
    profile_img,
  } = service || {};
  console.log(service);

  useEffect(() => {
    fetch(`https://shelfbud-server.vercel.app/moreFromSeller?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const restServices = data.filter((sData) => sData._id !== _id);
        setMoreServices(restServices);
      });
  }, [_id, email]);
  return (
    <div>
      <Head title={book_name || ""} />
      <ServiceProvider
        area={area}
        profile_img={profile_img}
        username={username}
        email={email}
      />
      <div className="mx-12 relative flex gap-10 bg-[#E8DFCA] p-10 pb-5 mt-10 rounded-t-lg">
        <img src={img} alt="" className="h-64 w-56 relative top-0 left-0" />
        <div className="flex-1 pt-3 space-y-3">
          <p className="text-3xl font-semibold text-gray-700">{book_name}</p>
          <p className="font-medium">Price: {price}$</p>
          <p className="text-xl font-semibold text-gray-700 mt-1">Provider:</p>
          <div className="flex items-center gap-3">
            <img src={profile_img} alt="" className="w-12 h-12 rounded-xl" />
            <p className="text-lg font-medium text-gray-600">{username}</p>
          </div>
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="text-lg font-medium bg-gray-800 text-white py-1.5 px-3 rounded-md"
            >
              Book Now
            </button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
      <p className="mx-12 py-3 bg-[#E8DFCA] p-10 pt-0 mb-10 rounded-b-lg">
        {description}
      </p>
      {moreServices?.length > 0 && (
        <div>
          <h1 className="text-4xl md:text-5xl text-center font-semibold mt-10 text-gray-800">
            More Books from the seller
          </h1>
          <div className="grid grid-cols-2 gap-6 mx-12 my-10">
            {moreServices?.map((service) => (
              <MoreServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
