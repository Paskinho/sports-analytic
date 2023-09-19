import {Typography} from "../../../components/ui/typography";
import {useNavigate} from "react-router-dom";
import {PlayerType} from "./player.slice";




export const Player = (props: PlayerType) => {

    const navigate = useNavigate()

    const Virg = () => {
        return navigate("/Virgil")
    }

    return <table>
        <td>
        <div>
            <Typography variant={'caption'} onClick={Virg}>Virgil Van Dijk</Typography>
            </div>
        <div><Typography variant={'caption'} onClick={Virg}>Mohamed Salah</Typography></div>
        <div><Typography variant={'caption'} onClick={Virg}>Darwin Nunez</Typography></div>
        <div><Typography variant={'caption'} onClick={Virg}>Alisson Becker</Typography></div>
        </td>
        <td>
            <Typography variant={'caption'}>Netherlands</Typography>
            <Typography variant={'caption'}>Egypt</Typography>
            <Typography variant={'caption'}>Uruguay</Typography>
            <Typography variant={'caption'}>Brazil</Typography>
        </td>
        <td>
            <Typography variant={'caption'}>Liverpool</Typography>
            <Typography variant={'caption'}>Liverpool</Typography>
            <Typography variant={'caption'}>Liverpool</Typography>
            <Typography variant={'caption'}>Liverpool</Typography>
        </td>
    </table>
}
