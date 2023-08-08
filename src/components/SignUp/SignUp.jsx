import styles from "../SignUp/Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { InputControl } from "../InputControl/InputControl";

export function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name:"",
        email: "",
        pass: ""
    });
    const [errorMsg, setErrorMsg] = useState([]);
    const [submitDisabled, setSubmitDisabled] = useState(false);

    const  registro = () => {
        if(!values.name || !values.email || !values.pass) {
            setErrorMsg("Missing info!")
            return;
        }
        setErrorMsg("");
        setSubmitDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitDisabled(false);
                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name
                });
                navigate("/welcome");
            }).catch((err) => {
                setSubmitDisabled(false);
                setErrorMsg(err.message);
            });
    };

    return (
        <div className={styles.container}>
            <div className={styles.signup_box}>
                <h1 className={styles.signup_title}>Register new account</h1>
                <InputControl label="Name " placeholder="Insert your name" onChange={(event) => setValues((prev) => ({...prev, name: event.target.value}))}/>
                <InputControl label="E-mail " placeholder="Insert your email" onChange={(event) => setValues((prev) => ({...prev, email: event.target.value}))}/>
                <InputControl label="Password " placeholder="Insert password" onChange={(event) => setValues((prev) => ({...prev, pass: event.target.value}))}/>
                <div className={styles.footer}>
                    <button onClick={registro} disabled={submitDisabled}>Register</button>
                    <b className={styles.error}>{ errorMsg }</b>
                    <p>
                        If you already have an account, <span>
                            <Link to="/login" className={styles.link}>Login.</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}