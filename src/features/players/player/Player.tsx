import {Typography} from "../../../components/ui/typography";
import {useNavigate} from "react-router-dom";
import {PlayerType} from "./player.slice";
import {StyledTable, StyledTd, StyledTh} from "../../../components/StyledTable";
import {Button} from "../../../components/ui/button";
import {useState} from "react";
import Eye from "../../../assets/icons/eye";
import {Root} from "../../../components/ui/table";
import s from "../../teams/teams.module.scss";
import {Table} from '../../../components/ui/table'
import {useAppDispatch} from "../../../common/components/hooks/useAppDispatch";
import {Card} from "../../../components/ui/card";


export const Player = (props: PlayerType) => {

    const [sort, setSort] = useState({key: "updated", direction: 'asc'})

    const columns  = [
        {key: "Player", sortable: true, title: "Player"},
        {key: "Country", sortable: true, title: "Country"},
        {key: "Club", sortable: false, title: "Club"},
        {key: "Age", sortable: true, title: "Age"},
        {key: "Likes", sortable: true, title: "Likes"},
        {key: "Watch", sortable: false, title: "Watch"},
    ]

    const dispatch = useAppDispatch()

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

    const addToWatch = ({player, onAddPlayerToFavorite}) => {
       onAddPlayerToFavorite(player)
        alert('Succesfully added to favorite players')
    }

    return (
        <div>
            <Card>
<Typography>All players</Typography>
                <Table.Root style={{width: '100%'}}>
                    <Table.Header/>
                    <Table.Body>

                    </Table.Body>
                </Table.Root>
            </Card>
    <StyledTable>
        <StyledTd>
            <StyledTh>Player</StyledTh>
            <div>
                <Typography variant={'subtitle1'} onClick={Virg}>Virgil Van Dijk</Typography>
            </div>
            <div><Typography variant={'subtitle1'} onClick={Virg}>Mohamed Salah</Typography></div>
            <div><Typography variant={'subtitle1'} onClick={Virg}>Darwin Nunez</Typography></div>
            <div><Typography variant={'subtitle1'} onClick={Virg}>Alisson Becker</Typography></div>
        </StyledTd>
        <StyledTd>
            <StyledTh>Country</StyledTh>
            <Typography variant={'subtitle1'}>Netherlands</Typography>
            <Typography variant={'subtitle1'}>Egypt</Typography>
            <Typography variant={'subtitle1'}>Uruguay</Typography>
            <Typography variant={'subtitle1'}>Brazil</Typography>
        </StyledTd>
        <StyledTd>
            <StyledTh>Club</StyledTh>
            <Typography variant={'subtitle1'}>{props.club}</Typography>
            <Typography variant={'subtitle1'}>{props.club}</Typography>
            <Typography variant={'subtitle1'}>{props.club}</Typography>
            <Typography variant={'subtitle1'}>{props.club}</Typography>
        </StyledTd>
        <StyledTd>
            <StyledTh>Age</StyledTh>
            <Typography variant={'subtitle1'}>31</Typography>
            <Typography variant={'subtitle1'}>31</Typography>
            <Typography variant={'subtitle1'}>24</Typography>
            <Typography variant={'subtitle1'}>30</Typography>
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
        {/*<Table.Root style={{ width: '100%' }}>*/}
        {/*    <Table.Header columns={columns} sort={sort} onSort={setSort} />*/}
        {/*    <Table.Body>*/}
        {/*    </Table.Body>*/}
        {/*</Table.Root>*/}
    </StyledTable>
        </div>
    )

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