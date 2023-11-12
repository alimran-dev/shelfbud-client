import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import { useNavigate } from "react-router-dom";

const Popular = () => {
  const [services, setServices] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://shelfbud-server.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        if (data?.length > 4) {
          setServices(data.slice(0, 4));
        } else {
          setServices(data);
        }
      });
  }, []);
  return (
    <div>
      <h1 className="text-4xl lg:text-5xl text-gray-700 font-bold text-center pt-8">
        Most Popular
      </h1>
      <div>
        {services?.map((service) => (
          <PopularCard key={service._id} service={service} />
        ))}
      </div>
      <button
        onClick={() => navigate("/services")}
        className="bg-gray-800 text-white text-lg font-medium py-1.5 px-3 block mx-auto rounded-md"
      >
        Show All
      </button>
    </div>
  );
};

export default Popular;
