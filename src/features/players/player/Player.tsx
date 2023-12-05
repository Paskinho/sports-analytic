import {Typography} from "../../../components/ui/typography";
import {useNavigate} from "react-router-dom";
import {PlayerType} from "./player.slice";
import {StyledTable, StyledTd, StyledTh} from "../../../components/StyledTable";
import {Button} from "../../../components/ui/button";
import {useState} from "react";
import Eye from "../../../assets/icons/eye";
import {Root} from "../../../components/ui/table";


export const Player = (props: PlayerType) => {

    const navigate = useNavigate()

    const Virg = () => {
        return navigate("/Virgil")
    }

    const [like, setLike] = useState(0)

    // useEffect(()=>{
    //     setLike(like+1)
    // },[like])

    const addLike = () => {
        setLike(like => like + 1)
    }

    // type AddToWatchType = {
    //     player: any,
    //     onAddPlayerToFav: (player)=> void
    // }

    const addToWatch = ({player, onAddPlayerToFav}) => {
       onAddPlayerToFav(player)
        alert('Succesfully added to favorite players')
    }

    return <StyledTable>
        <StyledTd>
            <StyledTh>Player</StyledTh>
            <div>
                <Typography variant={'caption'} onClick={Virg}>Virgil Van Dijk</Typography>
            </div>
            <div><Typography variant={'caption'} onClick={Virg}>Mohamed Salah</Typography></div>
            <div><Typography variant={'caption'} onClick={Virg}>Darwin Nunez</Typography></div>
            <div><Typography variant={'caption'} onClick={Virg}>Alisson Becker</Typography></div>
        </StyledTd>
        <StyledTd>
            <StyledTh>Country</StyledTh>
            <Typography variant={'caption'}>Netherlands</Typography>
            <Typography variant={'caption'}>Egypt</Typography>
            <Typography variant={'caption'}>Uruguay</Typography>
            <Typography variant={'caption'}>Brazil</Typography>
        </StyledTd>
        <StyledTd>
            <StyledTh>Club</StyledTh>
            <Typography variant={'caption'}>{props.club}</Typography>
            <Typography variant={'caption'}>{props.club}</Typography>
            <Typography variant={'caption'}>{props.club}</Typography>
            <Typography variant={'caption'}>{props.club}</Typography>
        </StyledTd>
        <StyledTd>
            <StyledTh>Age</StyledTh>
            <Typography variant={'caption'}>31</Typography>
            <Typography variant={'caption'}>31</Typography>
            <Typography variant={'caption'}>24</Typography>
            <Typography variant={'caption'}>30</Typography>
        </StyledTd>
        <StyledTd>
            <StyledTh>Likes</StyledTh>
            <Typography variant={'caption'}><Button onClick={addLike}>{like}</Button></Typography>
            <Typography variant={'caption'}><Button onClick={addLike}>{like}</Button></Typography>
            <Typography variant={'caption'}><Button onClick={addLike}>{like}</Button></Typography>
            <Typography variant={'caption'}><Button onClick={addLike}>{like}</Button></Typography>
        </StyledTd>
        <StyledTd>
            <StyledTh>Watch</StyledTh>
            <Typography variant={'caption'}><Button onClick={addToWatch}><Eye/></Button></Typography>
            <Typography variant={'caption'}><Button onClick={()=> addToWatch}><Eye/></Button></Typography>
            <Typography variant={'caption'}><Button onClick={()=> addToWatch}><Eye/></Button></Typography>
            <Typography variant={'caption'}><Button onClick={()=> addToWatch}><Eye/></Button></Typography>
        </StyledTd>
    </StyledTable>
}


export const FavPlayer = ({player, onAddToFavPlayer}) => {
return (
    <div>
    <h1>Alisson</h1>
    <h2>Liverpool</h2>
        <button onClick={()=> onAddToFavPlayer(player)}>Add to Fav</button>
    </div>
)

}