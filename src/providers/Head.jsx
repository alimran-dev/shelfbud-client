import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const Head = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>ShelfBud | {title}</title>
            </Helmet>
        </div>
    );
};

export default Head;
Head.propTypes = {
    title: PropTypes.string.isRequired,
}