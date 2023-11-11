import PropTypes from "prop-types";
import Swal from "sweetalert2";

const OrderCard = ({ order }) => {
  const { _id, customer_email, book_name, img, price, date, status } =
    order || {};
  console.log(order);
  const handleUpdateStatus = (e) => {
    e.preventDefault();
    const status = e.target.status.value;
    console.log(status);
    fetch(`https://shelfbud-server.vercel.app/orderStatus?id=${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Status updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
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
        <form onSubmit={handleUpdateStatus}>
          <label className="text-xl font-medium capitalize">
            Order status:{" "}
            <select
              name="status"
              className={`font-bold bg-gray-200 py-1.5 px-3 rounded-md ${
                status === "pending"
                  ? "text-yellow-400"
                  : status === "in progress"
                  ? "text-sky-600"
                  : status === "completed"
                  ? "text-green-600"
                  : ""
              }`}
              defaultValue={status}
            >
              {status}
              <option value={"pending"} className="text-yellow-400 font-medium">
                Pending
              </option>
              <option
                value={"in progress"}
                className="text-sky-600 font-medium"
              >
                In Progress
              </option>
              <option
                value={"completed"}
                className="text-green-600 font-medium"
              >
                Completed
              </option>
            </select>
          </label>
          <button
            type="submit"
            className="block bg-gray-800 text-white font-medium py-2 px-3 rounded-md mx-auto my-4"
          >
            Update Status
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderCard;
OrderCard.propTypes = {
  order: PropTypes.object,
};
