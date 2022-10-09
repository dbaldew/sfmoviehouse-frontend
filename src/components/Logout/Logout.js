import "./Logout.css"
import {AuthContext} from "../../context/AuthContext";
import {useContext} from "react";

function Logout(){
    const {logout} = useContext(AuthContext);

    return(
        <button type="button"
                onClick={logout}
        >logout
        </button>
    )
}
export default Logout;