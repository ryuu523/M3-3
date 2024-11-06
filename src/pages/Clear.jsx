import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getResults } from "../api/api";
import { formatTime } from "../components/formatTime";

function Clear() {
    const navigate = useNavigate()
    const [runking, setRunking] = useState([])
    const handleReplay = () => {
        navigate("/select")
    }

    const getResultsData = async () => {
        try {
            const data = await getResults()
            let runk = 0
            let oldTime = null
            const runkings = []
            for (let item of data) {
                if (oldTime != item.time) {
                    oldTime = item.time
                    runk += 1
                }
                if (runk > 3) {
                    break
                }
                runkings.push({ runk: runk, username: item.user, time: item.time })
            }
            setRunking(runkings)
        } catch (e) {
            alert(e.message)
        }

    }
    useEffect(() => {

        getResultsData()
    }, [])
    return (
        <>
            <h1>runking</h1>
            {runking.map((user) => {
                return (
                    <>
                        <h3>{user.runk}. {user.username} {formatTime(user.time)}</h3>
                    </>
                )
            })}
            <button onClick={() => handleReplay()}>replay</button>
        </>
    );
}

export default Clear;
