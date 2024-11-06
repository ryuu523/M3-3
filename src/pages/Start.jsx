import { useState } from "react";
import { useNavigate } from "react-router";
import {  login } from "../api/api";
function Start() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const Requestlogin = async () => {
        try {
            const data = await login(name, pass)
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", data.username)
            navigate("/select")

        } catch (e) {
            alert(e.message)
        }
    }

    return (
        <>
            username<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            password<input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            <button onClick={() => Requestlogin()}>login</button>
        </>
    );
}

export default Start;
