import { Navigate } from "react-router";

function Auth({ children }) {
    const token = sessionStorage.getItem("token")
    if (!token) {
        <Navigate to={"/"} replace></Navigate>
    }
    else {
        return children
    }

}

export default Auth;
