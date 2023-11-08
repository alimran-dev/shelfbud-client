import { useEffect, useState } from "react";
import Head from "../../providers/Head";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState();
  const [servicesDis, setServicesDis] = useState();
  const [isMore, setIsMore] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.text.value);
    const text = e.target.text.value;
    const newServices = services?.filter(
      (service) => service.book_name === text
    );
    setServicesDis(newServices);
  };
  const handleMore = () => {
    setServicesDis(services);
    setIsMore(false);
  };
  useEffect(() => {
    fetch("https://shelfbud-server.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        if (data?.length > 6) {
          setServicesDis(data.slice(0, 6));
          setIsMore(true);
        } else {
          setServicesDis(data);
        }
      });
  }, []);
  return (
    <div>
      <Head title="Services" />
      <h1 className="text-4xl md:text-5xl text-center font-semibold mt-10 text-gray-800">
        All available Services
      </h1>
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center relative w-[550px] mx-auto"
      >
        <input
          type="text"
          name="text"
          className="w-full border-2 border-gray-500 rounded-md my-4 text-center font-medium"
          placeholder="Search any book with name"
        />
        <button
          type="submit"
          className="bg-gray-800 text-white py-2.5 px-3 absolute right-0 top-4 rounded-r font-medium hover:cursor-pointer"
        >
          Search
        </button>
      </form>
      <div>
        {servicesDis?.map((service) => (
          <ServicesCard key={service._id} service={service} />
        ))}
      </div>
      {isMore ? (
        <button
          onClick={handleMore}
          className="block mx-auto py-1.5 px-4 font-medium bg-gray-700 text-white rounded-md mb-10"
        >
          More
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Services;
