import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const AuthInfo = {test:"test"};
  return (
    <>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
