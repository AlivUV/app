import { useLocation, Navigate } from "react-router-dom";

function RequireAuth({ children }) {
    const location = useLocation();
    const userToken = sessionStorage.getItem('userToken');
    const isStaff = sessionStorage.getItem('staff');

    if (!userToken) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!isStaff) {
        return <Navigate to="/applicant" state={{ from: location }} replace />;
    }

    return children;
}
export default RequireAuth;
export { RequireAuth };