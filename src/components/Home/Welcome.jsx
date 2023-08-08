import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

export function Welcome(props) {
    const navigate = useNavigate();
    function salir() {
        auth.signOut;
        navigate('/');
    }
    
    return (
        <div className="welcome_box">
            <h1 className="welcome_title">
            {`Welcome ${props.name}!!`}
            </h1>
            <button onClick={salir} className="welcome_btn">Sign out</button>
        </div>
    )
}

