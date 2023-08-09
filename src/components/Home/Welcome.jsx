import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import styles from "../Home/WelcomeStyles.css";

export function Welcome(props) {
    const navigate = useNavigate();
    function salir() {
        auth.signOut;
        navigate('/');
    }
    
    return (
        <div className="welcome">
            <div className="welcome_box">
                <h1 className="welcome_title">
                {`Hi ${props.name}, welcome back!`}
                </h1>
                <button onClick={salir} className="welcome_btn">Sign out</button>
            </div>
        </div>
    )
}

