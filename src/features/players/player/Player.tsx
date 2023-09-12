import {Typography} from "../../../components/ui/typography";
import {useNavigate} from "react-router-dom";

export const Player = () => {

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
