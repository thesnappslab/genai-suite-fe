import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function Protected({ user, allowedRoles }) {
    const location = useLocation();
    const redirect= location?.pathname;
    return (
        user ? 
            allowedRoles.includes(user.role) 
            ? <Outlet />
            : <Navigate to="/unauthorized" state={{ from: location }} replace />
        :<Navigate to={`/login${redirect? '?redirect='+redirect : ''}`} state={{ from: location }} replace />
    );
}