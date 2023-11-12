import Head from "../../providers/Head";
import Banner from "./Banner";
import Popular from "./Popular";

const Home = () => {
    return (
        <div>
            <Head title="Home" />
            <div>
                <Banner />
                <Popular />
            </div>
        </div>
    );
};

export default Home;