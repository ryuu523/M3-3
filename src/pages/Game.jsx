import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Field from "../components/Field";
import { formatTime } from "../components/formatTime";
import { getField, postResult } from "../api/api";
function Game() {
    const navigate = useNavigate()
    const [field, setField] = useState([])
    const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 })
    const [time, setTime] = useState(0)
    const [moveBlock, setMoveBlock] = useState(0)
    const [clearFlag, setClearFlag] = useState(false)
    const Air = 0
    const Wall = 1
    const Player = 2
    const Block = 3
    const Flag = 4
    const PostResultData = async () => {
        try {
            const data = await postResult(time, moveBlock)
        }catch(e){
            alert(e.message)
        }
    }
    const getFieldData = async () => {
        try {
            const data = await getField()
            const difficulty=sessionStorage.getItem("difficulty")
            if (difficulty == "normal") {

                setField(data.normal)
            } else {
                setField(data.easy)

            }
            setPlayerPos({ x: 1, y: 1 })
        } catch (e) {
            alert(e.message)
        }
    }
    useEffect(() => {
        const handleKeydown = (e) => {
            const vec = { x: 0, y: 0 }
            switch (e.key) {
                case "ArrowUp":
                    vec.y = 1
                    break;
                case "ArrowDown":
                    vec.y = -1
                    break;
                case "ArrowLeft":
                    vec.x = 1
                    break;
                case "ArrowRight":
                    vec.x = -1
                    break;
            }
            if (field[playerPos.y + vec.y][playerPos.x + vec.x] == Wall) return
            if (field[playerPos.y + vec.y][playerPos.x + vec.x] == Block) {
                if (field[playerPos.y + vec.y * 2][playerPos.x + vec.x * 2] != Air) return
                setField((prev) => {
                    const clone = prev.map((row) => row.concat())
                    clone[playerPos.y + vec.y][playerPos.x + vec.x] = Air
                    clone[playerPos.y + vec.y * 2][playerPos.x + vec.x * 2] = Block
                    return clone
                })
                setMoveBlock((prev) => prev + 1)
                return
            }
            setField((prev) => {
                const clone = prev.map((row) => row.concat())
                if (clone[playerPos.y + vec.y][playerPos.x + vec.x] == Flag) {
                    setClearFlag(true)
                }
                clone[playerPos.y + vec.y][playerPos.x + vec.x] = Air
                clone[playerPos.y + vec.y * 2][playerPos.x + vec.x * 2] = Player
                return clone
            })
            setPlayerPos((prev) => ({ ...prev, x: prev.x + vec.x, y: prev.y + vec.y }))
        }
        window.addEventListener("keydown", handleKeydown)
        return () => window.removeEventListener("keydown", handleKeydown)

    }, [field])
    useEffect(() => {
        if (clearFlag) {
            PostResultData()
            navigate("/clear")
        }
    }, [clearFlag])
    useEffect(() => {
        getFieldData()
        const interval = setInterval(() => {
            setTime((prev) => prev + 1)
        }, 1000);
        return () => clearInterval(interval)

    }, [])

    return (
        <>
            <h1>time:{formatTime(time)}</h1>
            <Field field={field} />
        </>
    );
}

export default Game;
