import Head from "../../providers/Head";
import Popular from "./Popular";

const Home = () => {
    return (
        <div>
            <Head title="Home" />
            <div>
                <Popular />
            </div>
        </div>
    );
};

export default Home;