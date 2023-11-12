import { useState } from "react";
import Profile from "./Profile";
import Password from "./Password";

const Settings = () => {
  const [proActive, setProActive] = useState(true);
  const [passActive, setPassActive] = useState(false);
  return (
    <div className="grid grid-cols-12 gap-7 mx-12 my-10">
      <div className="col-span-2 mt-10">
        <button
          onClick={() => {
            setProActive(true);
            setPassActive(false);
          }}
          className={`block w-full rounded-t text-xl font-medium py-1.5 px-4 border-2 border-gray-800 ${
            proActive ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => {
            setPassActive(true);
            setProActive(false);
          }}
          className={`block w-full rounded-b text-xl font-medium py-1.5 px-4 border-2 border-gray-800 ${
            passActive ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          Password
        </button>
      </div>
      {proActive && <Profile />}
      {passActive && <Password />}
    </div>
  );
};

export default Settings;
