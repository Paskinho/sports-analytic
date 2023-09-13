import {Typography} from "../../../components/ui/typography";
import {useNavigate} from "react-router-dom";
import {PlayerType} from "./player.slice";




export const Player = (props: PlayerType) => {

    const navigate = useNavigate()

    const Virg = () => {
        return navigate("/Virgil")
    }

    return <div>
        <div>
            <Typography variant={'caption'} onClick={Virg}>Virgil Van Dijk</Typography>

            </div>
        <div>Salah</div>
        <div>Alisson</div>
        <div>Gomez</div>
    </div>
}
