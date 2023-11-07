import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='h-screen w-full flex justify-center items-center pb-20'><span className='block h-24 w-24 rounded-full border-[15px] border-gray-300 border-t-gray-700 animate-spin'></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired,
}