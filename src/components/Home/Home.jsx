import { Link } from "react-router-dom";
import styles from "../Home/HomeStyles.css"


export function Home() {
    return (
        <div className="home_box">
            <h1 className="home_hello">Hi there!</h1>
            
            <div className="home">
                <div className="home_btn">
                    <Link to="/login" className="home_link">Log in</Link>
                </div>
                <br></br>
                <div className="home_btn">
                    <Link to="/signup" className="home_link">Register</Link>
                </div>
            </div>
            <h2 className="home_title">Please login or create new account.</h2>
        </div>
    )
}