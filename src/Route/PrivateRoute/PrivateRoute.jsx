import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {

      const { user, loading } = UseAuth();
      const location = useLocation();
      console.log(location.pathname);

      if (loading) {
            return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
      }

      if (!user) {
            return <Navigate state={location.pathname} to='/login'></Navigate>
      }

      return children;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
      children: PropTypes.node
}