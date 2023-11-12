import { useNavigate } from "react-router-dom";
import banner from "../../assets/shelfbud-banner.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="bg-[#E8DFCA] md:h-[400px] lg:h-[550px] mx-12 my-10 p-10 rounded-md flex flex-col md:flex-row items-center"
    >
      <div className="flex-1 space-y-5">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-700">
          Discover ShelfBud: Dive into Your Next{" "}
          <span className="text-sky-600">
            <Typewriter
              words={["Chapter!", "Mystery!", "Romance!", "Sci-Fi Adventure!"]}
              cursor
              loop={0}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="font-medium">
          Immerse yourself in ShelfBud&apos;s literary marketplace, where every
          book tells a story waiting to be discovered. Buy, sell, and embark on
          a captivating journey with your next favorite read!
        </p>
        <button
          onClick={() => navigate("/services")}
          className="bg-gray-800 text-lg text-white py-2 px-3 font-medium rounded-md"
        >
          Explore Now
        </button>
      </div>
      <div className="flex-1">
        <img src={banner} alt="" className="w-full" />
      </div>
    </motion.div>
  );
};

export default Banner;
