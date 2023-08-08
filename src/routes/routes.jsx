import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Home } from "../components/Home/Home";
import { Signup } from "../components/SignUp/SignUp";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { Welcome } from "../components/Home/Welcome";

export function MyRoutes() {
    const [userName, setUserName] = useState([]);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                setUserName(user.displayName);
            }
            else setUserName("");
        })
    },[]);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home/> }/>
                <Route exact path="/welcome" element={ <Welcome name={userName}/> }/>
                <Route exact path="/login" element={ <Login/> }/>
                <Route exact path="/signup" element={ <Signup/> }/>
            </Routes>
        </BrowserRouter>
    )
}