import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import PropTypes from "prop-types";

const Modal = ({ isOpen, setIsOpen }) => {
  const [service] = useLoaderData();
  const { user } = useContext(AuthContext);
  const { book_name, img, email, price } = service || {};
  const handlePurchase = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const instruction = e.target.instruction.value;
    const provider_email = email;
    const customer_email = user.email;
    const order = {
      provider_email,
      customer_email,
      book_name,
      img,
      price,
      date,
      instruction,
    };
    console.log(order);
    fetch("https://shelfbud-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setIsOpen(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order placed successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`h-screen w-full fixed inset-0 flex items-center justify-center ${
        isOpen ? "visible bg-black bg-opacity-60" : "invisible"
      }`}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handlePurchase}
        className="bg-[#E8DFCA] border-2 border-gray-600 lg:w-[700px] p-10 rounded-md overflow-y-auto transition ease-in duration-1000"
      >
        <div className="grid grid-cols-2 pb-3">
          <div className="space-y-1">
            <label htmlFor="book_name" className="block text-lg font-semibold">
              Book Name
            </label>
            <input
              type="text"
              defaultValue={book_name}
              disabled
              className="bg-[#f7f2e6] py-1.5 rounded-md w-4/5"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="img" className="block text-lg font-semibold">
              Book Image
            </label>
            <input
              type="text"
              defaultValue={img}
              disabled
              className="bg-[#f7f2e6] py-1.5 rounded-md w-4/5"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 pb-3">
          <div className="space-y-1">
            <label
              htmlFor="provider_email"
              className="block text-lg font-semibold"
            >
              Provider Email
            </label>
            <input
              type="email"
              defaultValue={email}
              disabled
              className="bg-[#f7f2e6] py-1.5 rounded-md w-4/5"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="user_email" className="block text-lg font-semibold">
              Your Email
            </label>
            <input
              type="email"
              defaultValue={user.email}
              disabled
              className="bg-[#f7f2e6] py-1.5 rounded-md w-4/5"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 pb-3">
          <div className="space-y-1">
            <label htmlFor="price" className="block text-lg font-semibold">
              Price
            </label>
            <input
              type="text"
              defaultValue={`${price}$`}
              disabled
              className="bg-[#f7f2e6] py-1.5 rounded-md  w-4/5"
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="taking_date"
              className="block text-lg font-semibold"
            >
              Service Taking Date
            </label>
            <input
              type="date"
              name="date"
              required
              className="bg-[#f7f2e6] py-1.5 rounded-md hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label htmlFor="instruction" className="block text-lg font-semibold">
            Your Special Instruction
          </label>
          <textarea
            type="text"
            name="instruction"
            required
            placeholder="Please provide some extra information like address , area, customized service plan"
            className="bg-[#f7f2e6] py-1.5 rounded-md w-full h-auto"
          />
        </div>
        <button
          type="submit"
          className="text-lg font-medium bg-gray-800 text-white py-1.5 px-3 rounded-md block mx-auto mt-4"
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default Modal;
Modal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
