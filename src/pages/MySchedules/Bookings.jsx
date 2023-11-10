import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingCard from "./BookingCard";

const Bookings = () => {
    const [bookings, setBookings] = useState();
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://shelfbud-server.vercel.app/bookings?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setBookings(data);
          });
      }, [user.email]);
    return (
        <div>
        {bookings?.length > 0 || (
          <div className="h-screen w-full flex items-center justify-center pb-16">
            <p className="text-4xl font-bold text-gray-800">Empty Bookings</p>
          </div>
        )}
        <div className="grid md:grid-cols-2 mx-12 gap-8 mt-10">
          {bookings?.length > 0 &&
            bookings?.map((booking) => (
              <BookingCard key={booking._id} booking={booking} />
            ))}
        </div>
      </div>
    );
};

export default Bookings;