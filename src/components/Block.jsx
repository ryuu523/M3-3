import block from "../images/block.jpeg"
import flag from "../images/flag.png"
import player from "../images/player.png"
import wall from "../images/wall.jpeg"
import "../styles/block.css"

function Block({ type }) {

    const selectSrc = () => {
        let src = ""
        switch (type) {
            case 1:
                src = wall
            case 2:
                src = player
            case 3:
                src = block
            case 4:
                src = flag
        }
        return src
    }
    return (
        <div className="relative">
            <div className="Back Block"></div>
            <img className="Block" src={selectSrc()} />
        </div>
    );
}

export default Block;
