import Head from "../../providers/Head";
import Banner from "./Banner";
import Faq from "./Faq";
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
      </div>
    </div>
  );
};

export default Home;
