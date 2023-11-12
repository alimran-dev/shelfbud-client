import Head from "../../providers/Head";
import Banner from "./Banner";
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
      </div>
    </div>
  );
};

export default Home;
