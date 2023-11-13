import { useContext, useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import { AuthContext } from "../../providers/AuthProvider";

const PendingOrders = () => {
  const [orders, setOrders] = useState();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://shelfbud-server.vercel.app/myOrders?email=${user.email}`,{credentials:"include"})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [user.email]);
  return (
    <div>
      {orders?.length > 0 || (
        <div className="h-screen w-full flex items-center justify-center pb-16">
          <p className="text-4xl font-bold text-gray-800">Empty Orders</p>
        </div>
      )}
      <div className="grid md:grid-cols-2 mx-12 gap-8 mt-10">
        {orders?.length > 0 &&
          orders?.map((order) => <OrderCard key={order._id} order={order} />)}
      </div>
    </div>
  );
};

export default PendingOrders;
