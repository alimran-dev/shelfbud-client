import { useState } from "react";
import Head from "../../providers/Head";
import Bookings from "./Bookings";
import PendingOrders from "./PendingOrders";

const MySchedules = () => {
  const [bookingsActive, setBookingsActive] = useState(true);
  return (
    <div>
      <Head title={"My Schedules"} />
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setBookingsActive(true)}
          className={`text-xl font-medium border-2 border-gray-800 py-1.5 px-3 rounded-l-md ${
            bookingsActive ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          My Bookings
        </button>
        <button
          onClick={() => setBookingsActive(false)}
          className={`text-xl font-medium border-2 border-gray-800 py-1.5 px-3 rounded-r-md ${
            bookingsActive ? "bg-white text-gray-800" : "bg-gray-800 text-white"
          }`}
        >
          My pending orders
        </button>
      </div>
      {bookingsActive ? <Bookings /> : <PendingOrders />}
    </div>
  );
};

export default MySchedules;
