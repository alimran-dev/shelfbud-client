import { useContext, useEffect, useState } from "react";
import Head from "../../providers/Head";
import { AuthContext } from "../../providers/AuthProvider";
import MyServiceCard from "./MyServiceCard";

const MyServices = () => {
  const [services, setServices] = useState();
  const { user } = useContext(AuthContext);
  const { email } = user || {};
  useEffect(() => {
    fetch(`https://shelfbud-server.vercel.app/myBooks?email=${email}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [email]);
  console.log(services);
  return (
    <div>
      <Head title={"My Services"} />
      <h1 className="text-5xl font-semibold text-center text-gray-800 my-8">
        Manage Services
      </h1>
      <div className="grid md:grid-cols-2 gap-5 mx-12">
        {services?.map((service) => (
          <MyServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default MyServices;
