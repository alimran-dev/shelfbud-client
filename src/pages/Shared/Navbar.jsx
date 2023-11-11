import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  const { user, setUser, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [openDas, setOpenDas] = useState(false);
  const { displayName, photoURL, email } = user || {};
  const navigate = useNavigate();
  const menuRef = useRef();
  const dasRef = useRef();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  useEffect(() => {
    document.addEventListener("click", (e) => {
      const menu = menuRef.current.contains(e.target);
      const das = dasRef.current.contains(e.target);
      if (!menu) {
        setIsOpen(false);
      }
      if (!das) {
        setOpenDas(false);
      }
    });
  }, []);
  return (
    <nav className="bg-[#E8DFCA] border border-gray-200 shadow-md dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Logo" />
        </Link>
        <div className="flex items-center md:order-2">
          {user ? (
            <>
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                  setOpenDas(false);
                }}
                className="relative hidden md:block hover:cursor-pointer"
              >
                <img
                  ref={menuRef}
                  src={photoURL}
                  alt=""
                  className="h-12 w-12 rounded-full mr-3"
                />
                <div className={`${isOpen ? "static" : "hidden"}`}>
                  <div className="z-50 absolute top-10 right-0 my-4 text-base list-none bg-[#F5EFE6] divide-y divide-gray-300 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                    <div className="px-4 py-3">
                      <span className="block text-lg font-bold text-gray-900 dark:text-white">
                        {displayName}
                      </span>
                      <span className="block text-sm  text-gray-500 truncate font-medium">
                        {email}
                      </span>
                    </div>
                    <ul className="py-2">
                      <li>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to={"/settings"}
                          className="block px-4 py-1 font-medium text-gray-700 hover:bg-gray-100"
                        >
                          Settings
                        </Link>
                      </li>
                      <button
                        onClick={handleLogOut}
                        className="block bg-gray-700 text-white py-1 px-3 rounded font-semibold my-1 w-4/5 mx-auto"
                      >
                        Log Out
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                  setOpenDas(false);
                }}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 hover:cursor-pointer"
                aria-controls="navbar-user"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
                <div className={`${isOpen ? "static" : "hidden"}`}>
                  <div className="z-50 absolute top-12 right-5 my-4 text-base list-none bg-[#F5EFE6] divide-y divide-gray-300 rounded-lg shadow">
                    <div className="px-4 py-3">
                      <img
                        src={photoURL}
                        alt=""
                        className="h-10 w-10 rounded-full block mx-auto"
                      />
                      <span className="block text-lg font-bold text-gray-900 dark:text-white">
                        {displayName}
                      </span>
                      <span className="block text-sm  text-gray-500 truncate font-medium">
                        {email}
                      </span>
                    </div>
                    <ul className="py-1">
                      <li>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to={"/"}
                          className="block px-4 py-1 font-medium text-sm text-gray-700 hover:bg-gray-200"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to={"/services"}
                          className="block px-4 py-1 font-medium text-sm text-gray-700 hover:bg-gray-200"
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to={"/myServices"}
                          className="block px-4 py-1 font-medium text-sm text-gray-700 hover:bg-gray-200"
                        >
                          My Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to={"/addServices"}
                          className="block px-4 py-1 font-medium text-sm text-gray-700 hover:bg-gray-200"
                        >
                          Add Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to={"/mySchedules"}
                          className="block px-4 py-1 font-medium text-sm text-gray-700 hover:bg-gray-200"
                        >
                          My Schedules
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to={"/settings"}
                          className="block px-4 py-1 font-medium text-sm text-gray-700 hover:bg-gray-200"
                        >
                          Settings
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="block bg-gray-700 text-white py-1 px-3 rounded font-semibold my-1 w-4/5 mx-auto"
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-gray-700 text-white py-1.5 px-3 rounded font-semibold ml-4 hidden md:block"
              >
                Login
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
                <div className={`${isOpen ? "static" : "hidden"}`}>
                  <div className="z-50 absolute top-12 right-5 my-4 text-base list-none bg-[#F5EFE6]">
                    <ul className="py-2">
                      <li>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to={"/"}
                          className="block px-4 py-1 font-medium text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to={"/services"}
                          className="block px-4 py-1 font-medium text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to={"/login"}
                          className="block bg-gray-700 text-white py-1 px-3 rounded font-semibold mx-2 my-1"
                        >
                          Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </button>
            </>
          )}
        </div>
        {/* Desktop  */}
        <div
          className="md:flex justify-end items-center hidden flex-1 mr-5"
          id="navbar-user"
        >
          <ul className="flex flex-col justify-end items-center font-medium p-4 md:p-0 mt-4 border text-gray-800 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {user ? (
              <>
                <li className="relative group">
                  <NavLink
                    onClick={() => {
                      setIsOpen(false);
                      setOpenDas(false);
                    }}
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-700 block py-2 pl-3 pr-4 md:p-0"
                        : "block py-2 pl-3 pr-4 md:p-0"
                    }
                  >
                    Home
                  </NavLink>
                  <span className="absolute rounded bottom-0 left-1/2 w-0 h-[2.5px] bg-blue-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300"></span>
                  <span className="absolute rounded bottom-0 right-1/2 w-0 h-[2.5px] bg-blue-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300"></span>
                </li>
                <li className="relative group">
                  <NavLink
                    onClick={() => {
                      setIsOpen(false);
                      setOpenDas(false);
                    }}
                    to={"/services"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-700 block py-2 pl-3 pr-4 md:p-0"
                        : "block py-2 pl-3 pr-4 md:p-0"
                    }
                  >
                    Services
                  </NavLink>
                  <span className="absolute rounded bottom-0 left-1/2 w-0 h-[2.5px] bg-blue-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300"></span>
                  <span className="absolute rounded bottom-0 right-1/2 w-0 h-[2.5px] bg-blue-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300"></span>
                </li>
                <li className="relative">
                  <button
                    ref={dasRef}
                    onClick={() => {
                      setOpenDas(!openDas);
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 hover:border-gray-300 rounded-md"
                  >
                    Dashboard <BsChevronDown />
                  </button>
                  <div className={`${openDas ? "static" : "hidden"}`}>
                    <div className="z-20 absolute top-4 left-1/2 -translate-x-1/2 my-4 text-base list-none bg-[#F5EFE6] w-36">
                      <ul className="py-2">
                        <li>
                          <Link
                            onClick={() => setOpenDas(false)}
                            to={"/myServices"}
                            className="block px-4 py-1 font-medium text-gray-700 hover:bg-gray-100"
                          >
                            My Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => setOpenDas(false)}
                            to={"/addServices"}
                            className="block px-4 py-1 font-medium text-gray-700 hover:bg-gray-100"
                          >
                            Add Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => setOpenDas(false)}
                            to={"/mySchedules"}
                            className="block px-4 py-1 font-medium text-gray-700 hover:bg-gray-100"
                          >
                            My Schedules
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="relative group">
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-700 block py-2 pl-3 pr-4 md:p-0"
                        : "block py-2 pl-3 pr-4 md:p-0"
                    }
                  >
                    Home
                  </NavLink>
                  <span className="absolute rounded bottom-0 left-1/2 w-0 h-[2.5px] bg-blue-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300"></span>
                  <span className="absolute rounded bottom-0 right-1/2 w-0 h-[2.5px] bg-blue-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300"></span>
                </li>
                <li className="relative group">
                  <NavLink
                    to={"/services"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-700 block py-2 pl-3 pr-4 md:p-0"
                        : "block py-2 pl-3 pr-4 md:p-0"
                    }
                  >
                    Services
                  </NavLink>
                  <span className="absolute rounded bottom-0 left-1/2 w-0 h-[2.5px] bg-blue-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300"></span>
                  <span className="absolute rounded bottom-0 right-1/2 w-0 h-[2.5px] bg-blue-700 group-hover:w-1/2 group-hover:transition-all group-hover:duration-300"></span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
