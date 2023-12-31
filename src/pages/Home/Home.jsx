import Head from "../../providers/Head";
import Banner from "./Banner";
import Faq from "./Faq";
import Location from "./Location";
import Offers from "./Offers";
import Popular from "./Popular";

const Home = () => {
  return (
    <div>
      <Head title="Home" />
      <div>
        <Banner />
        <Popular />
        <Offers />
        <Faq />
        <Location />
      </div>
    </div>
  );
};

export default Home;
