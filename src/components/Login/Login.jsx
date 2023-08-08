import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { InputControl } from "../InputControl/InputControl";
import styles from "../Login/Login.module.css";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: ""
    });
    const [errorMsg, setErrorMsg] = useState([]);
    const [submitDisabled, setSubmitDisabled] = useState(false);

    const login = () => {
        if(!values.email || !values.pass) {
            setErrorMsg("Missing info!");
            return;
        }
        setErrorMsg("");
        setSubmitDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async() => {
            setSubmitDisabled(false)
            navigate("/Welcome")
        })
        .catch((err) => {
            setSubmitDisabled(false);
            setErrorMsg(err.message);
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.login_box}>
                <h1 className={styles.login_title}>Login</h1>
                <InputControl label="E-mail " placeholder="Insert your email" onChange={(event) => setValues((prev) => ({...prev, email: event.target.value}))}/>
                <InputControl label="Password " placeholder="Insert password" onChange={(event) => setValues((prev) => ({...prev, pass: event.target.value}))}/>
                <div className={styles.footer}>
                    <button onClick={login} disabled={submitDisabled}>Access</button>
                    <b className={styles.error}>{errorMsg}</b>
                </div>
                    <p>If you don´t have an account,
                        <span>
                            <Link to="/signup" className={styles.link}> Signup!</Link>
                        </span>
                    </p>
            </div>
        </div>
    )
}