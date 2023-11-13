import { useContext, useEffect, useState } from "react";
import Head from "../../providers/Head";
import { AuthContext } from "../../providers/AuthProvider";
import MyServiceCard from "./MyServiceCard";
import Swal from "sweetalert2";

const MyServices = () => {
  const [services, setServices] = useState();
  const { user } = useContext(AuthContext);
  const { email } = user || {};
  useEffect(() => {
    fetch(`https://shelfbud-server.vercel.app/myBooks?email=${email}`,{credentials:"include"})
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [email]);
  console.log(services);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#374151",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://shelfbud-server.vercel.app/deleteBook/${id}`, {
          method: "DELETE",
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const newServices = services.filter(
                (service) => service._id !== id
              );
              setServices(newServices);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <Head title={"My Services"} />
      <h1 className="text-5xl font-semibold text-center text-gray-800 my-8">
        Manage Services
      </h1>
      <div className="grid md:grid-cols-2 gap-5 mx-12">
        {services?.map((service) => (
          <MyServiceCard
            key={service._id}
            service={service}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyServices;
