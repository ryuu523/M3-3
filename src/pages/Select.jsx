import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getProfile, getResults, logout } from "../api/api";
function Select() {
    const navigate = useNavigate()
    const [nickname, setNickname] = useState("")
    const [username, setUsername] = useState("")
    const [playTime, setPlayTime] = useState(0)
    const handleProfile = () => {
        navigate("/profile")
    }
    const handleLogout = async () => {
        const res = await logout()
        sessionStorage.removeItem("token")
        navigate("/")
    }
    const handleDifficulty = (difficulty) => {
        sessionStorage.setItem("difficulty", difficulty)
        navigate("/game")
    }
    const getProfileData=async()=>{
        const data=await getProfile()
        setNickname(data.nickname)
    }
    const getResultsData=async()=>{
        const users=await getResults()
        let sum=0
        users.forEach(user => {
            if(user.user==username){
                sum+=user.time
            }
        });
        const min=Math.floor(sum/60)
        setPlayTime(min)
    }
    useEffect(()=>{
        getResultsData()
    },[username])
    useEffect(()=>{
        getProfileData()
        
    },[])
    return (
        <>
            <h1>{nickname}</h1>
            <h2>{playTime}</h2>
            <button onClick={() => handleProfile()}>profilesettings</button>
            <button onClick={() => handleLogout()}>logout</button>
            <button onClick={() => handleDifficulty("easy")}>easy</button>
            <button onClick={() => handleDifficulty("normal")}>normal</button>
        </>
    );
}

export default Select;
