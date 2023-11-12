import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(name, photo);
    updateUser(name, photo)
      .then(() => {
        const tmpUser = { ...user };
        tmpUser.displayName = name;
        tmpUser.photoURL = photo;
        setUser(tmpUser);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Profile updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Profile update failed",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="col-span-10">
      <h1 className="text-4xl md:text-5xl text-center font-semibold text-gray-800">
        Your Profile
      </h1>
      <img
        src={user?.photoURL}
        alt=""
        className="w-48 rounded-xl block mx-auto py-5"
      />
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-xl font-semibold mr-3">
            Your Name :
          </label>
          <input
            type="text"
            name="name"
            required
            className="py-1.5 px-4 rounded-md font-medium"
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="photo" className="text-xl font-semibold mr-3">
            Photo URL :
          </label>
          <input
            type="text"
            name="photo"
            required
            className="py-1.5 px-4 rounded-md font-medium"
            placeholder="https://url.com"
          />
        </div>
        <button className="bg-gray-800 text-white font-medium py-1.5 px-3 rounded-md block mx-auto">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
