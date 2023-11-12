import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Password = () => {
  const { user, loginUser, updatePass, setLoading } = useContext(AuthContext);
  const handleUpdatePass = (e) => {
    e.preventDefault();
    const form = e.target;
    const oldPass = form.prevPassword.value;
    const newPass = form.newPass.value;
    const confPass = form.confPass.value;
    console.log(oldPass, newPass, confPass);
    if (newPass !== confPass) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "New Password and Confirm password doesn't match.",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    loginUser(user.email, oldPass)
      .then(() => {
        updatePass(newPass).then(() => {
          setLoading(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Password updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Wrong Password!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="col-span-10">
      <h1 className="text-4xl md:text-5xl text-center font-semibold text-gray-800">
        Change Your Password
      </h1>
      <form onSubmit={handleUpdatePass} className="space-y-4 mt-8">
        <div>
          <label htmlFor="prevPassword" className="text-xl font-semibold mr-3">
            Current Password :
          </label>
          <input
            type="password"
            name="prevPassword"
            className="py-1.5 px-4 rounded-md font-medium"
            placeholder="Current Password"
          />
        </div>
        <div>
          <label htmlFor="newPass" className="text-xl font-semibold mr-3">
            New Password :
          </label>
          <input
            type="password"
            name="newPass"
            className="py-1.5 px-4 rounded-md font-medium"
            placeholder="New Password"
          />
        </div>
        <div>
          <label htmlFor="confPass" className="text-xl font-semibold mr-3">
            Confirm Password :
          </label>
          <input
            type="password"
            name="confPass"
            className="py-1.5 px-4 rounded-md font-medium"
            placeholder="Confirm Password"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-800 text-white font-medium py-1.5 px-3 rounded-md block mx-auto"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default Password;
