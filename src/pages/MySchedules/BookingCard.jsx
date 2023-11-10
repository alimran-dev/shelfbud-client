import PropTypes from "prop-types";

const BookingCard = ({ booking }) => {
  const { customer_email, book_name, img, price, date, status } = booking || {};
  return (
    <div className="flex items-center gap-8 bg-[#E8DFCA] p-5 rounded">
      <div className="w-40 h-60">
        <img src={img} alt="" className="h-full w-full" />
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-semibold text-gray-800">{book_name}</p>
        <p className="text-lg font-medium">Price: {price}$</p>
        <p className="font-medium text-lg">Date: {date}</p>
        <p className="text-lg font-medium">Purchased with: {customer_email}</p>
        <p className="text-xl font-medium capitalize">
          Order status:{" "}
          <span
            className={`font-bold ${
              status === "pending"
                ? "text-yellow-400"
                : status === "in progress"
                ? "text-sky-600"
                : status === "completed"
                ? "text-green-600"
                : ""
            }`}
          >
            {status}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BookingCard;
BookingCard.propTypes = {
  booking: PropTypes.object,
};
