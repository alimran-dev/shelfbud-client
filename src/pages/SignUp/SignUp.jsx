import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import Head from "../../providers/Head";

const SignUp = () => {
  const [error, setError] = useState();
  const { user, setUser, googleLogin, signUp, auth, updateUser } =
    useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    setError(null);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        updateUser(name, photo)
          .then(() => {
            setUser(auth.currentUser);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Logged in successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.error(error.message);
            setError(error.message);
          });
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };
  const handleGoogle = () => {
    setError(null);
    googleLogin()
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };
  console.log(user);
  return (
    <div className="flex flex-col items-center my-10 mx-10">
      <Head title="SignUp" />
      <div className="w-full max-w-md p-4 rounded-md shadow-xl sm:p-8 bg-[#E8DFCA] text-gray-700">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Create a new account
        </h2>
        <p className="text-sm text-center text-gray-600">
          Already have an account?
          <Link to={"/login"} className="focus:underline hover:underline">
            Login here
          </Link>
        </p>
        <div className="my-3 space-y-4">
          <button
            aria-label="Login with Google"
            type="button"
            onClick={handleGoogle}
            className="flex items-center justify-center w-full p-2.5 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 focus:ri"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-2">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-600">OR</p>
          <hr className="w-full text-gray-500" />
        </div>
        <form onSubmit={handleSignUp} className="space-y-5">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Abul Ahmed"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-[#E8DFCA] text-gray-600 focus:border-gray-800"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="photo" className="block text-sm">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="https://photourl.com"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-[#E8DFCA] text-gray-600 focus:border-gray-800"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@email.com"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-[#E8DFCA] text-gray-600 focus:border-gray-800"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link
                  to={"/"}
                  className="text-xs hover:underline text-gray-600"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                placeholder="*****"
                required
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-[#E8DFCA] text-gray-600 focus:border-gray-800"
              />
            </div>
          </div>
          <div>
            {error && (
              <p className="text-lg font-semibold text-red-500 text-center">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full px-8 py-3 font-bold rounded-md bg-[#AEBDCA] text-gray-900"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
