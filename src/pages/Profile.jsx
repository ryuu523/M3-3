import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../api/api";
function Profile() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [nickname, setNickname] = useState("")
    const [validateFlag, setValidateFlag] = useState(false)
    const handleUpdate = async () => {
        try {
            const res = await updateProfile(username, nickname)
            if (res.success) {
                navigate("/select")
            }
        } catch (e) {
            alert(e.message)
        }

    }
    useEffect(() => {
        const reg = RegExp("\^a-zA-z0-9\$")
        if (reg.test(username) && username.length >= 5 && nickname.length >= 4) {
            setValidateFlag(true)
        }
        else {
            setValidateFlag(false)
        }
    }, [username, nickname])
    return (
        <>
            username<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            password<input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <button disabled={validateFlag} onClick={() => handleUpdate()}>更新</button>
        </>
    );
}

export default Profile;
