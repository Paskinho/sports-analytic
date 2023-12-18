import {Typography} from "../../../components/ui/typography";
import {useNavigate} from "react-router-dom";
import {PlayerType} from "./player.slice";
import {StyledTable, StyledTd, StyledTh} from "../../../components/StyledTable";
import {Button} from "../../../components/ui/button";
import {useState} from "react";
import Eye from "../../../assets/icons/eye";
import {Root} from "../../../components/ui/table";
import s from "../../players/player/player.module.scss";
import {Table} from '../../../components/ui/table'
import {useAppDispatch} from "../../../common/components/hooks/useAppDispatch";
import {Card} from "../../../components/ui/card";


export const Player = (props: PlayerType) => {

    const [sort, setSort] = useState({key: "updated", direction: 'asc'})

    const columns = [
        {key: "Player", sortable: true, title: "Player"},
        {key: "Country", sortable: true, title: "Country"},
        {key: "Club", sortable: false, title: "Club"},
        {key: "Age", sortable: true, title: "Age"},
        {key: "Likes", sortable: true, title: "Likes"},
        {key: "Watch", sortable: false, title: "Watch"},
    ]

    const [players, setPlayers] = useState([
        {id: 1, name: 'Virgil Van Dijk', country: "Netherlands", club: "Liverpool", age: 31, likes: 0, watch: false},
        {id: 2, name: 'Mohamed Salah', country: "Egypt", club: "Liverpool", age: 31, likes: 0, watch: false},
        {id: 3, name: 'Darwin Nunez', country: "Uruguay", club: "Liverpool", age: 24, likes: 0, watch: false},
        {id: 4, name: 'Alisson Becker', country: "Brazil", club: "Liverpool", age: 30, likes: 0, watch: false},
    ])


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
            <Card className={s.card}>
                <Typography variant={'h1'}>All players</Typography>
                <Table.Root style={{width: '100%'}}>
                    <Table.Header columns={columns} sort={sort} onSort={setSort}/>
                    <Table.Body>
                     <Table.Row key={1}>
                         <Table.Cell onClick={Virg} className={s.cell}>Virgil Van Dijk</Table.Cell>
                         <Table.Cell className={s.cell}>Netherlands</Table.Cell>
                         <Table.Cell className={s.cell}>Liverpool</Table.Cell>
                         <Table.Cell className={s.cell}>31</Table.Cell>
                         <Table.Cell><Button onClick={addLike}>{like}</Button></Table.Cell>
                         <Table.Cell><Button onClick={addToWatch}><Eye/></Button></Table.Cell>
                     </Table.Row>
                        <Table.Row key={2}>
                            <Table.Cell>Mohamed Salah</Table.Cell>
                            <Table.Cell>Egypt</Table.Cell>
                            <Table.Cell>Liverpool</Table.Cell>
                            <Table.Cell>31</Table.Cell>
                            <Table.Cell><Button onClick={addLike}>{like}</Button></Table.Cell>
                            <Table.Cell><Button onClick={addToWatch}><Eye/></Button></Table.Cell>
                        </Table.Row>
                        <Table.Row key={3}>
                            <Table.Cell>Darwin Nunez</Table.Cell>
                            <Table.Cell>Uruguay</Table.Cell>
                            <Table.Cell>Liverpool</Table.Cell>
                            <Table.Cell>24</Table.Cell>
                            <Table.Cell><Button onClick={addLike}>{like}</Button></Table.Cell>
                            <Table.Cell><Button onClick={addToWatch}><Eye/></Button></Table.Cell>
                        </Table.Row>
                        <Table.Row key={4}>
                            <Table.Cell>Alisson</Table.Cell>
                            <Table.Cell>Brazil</Table.Cell>
                            <Table.Cell>Liverpool</Table.Cell>
                            <Table.Cell>30</Table.Cell>
                            <Table.Cell><Button onClick={addLike}>{like}</Button></Table.Cell>
                            <Table.Cell><Button onClick={addToWatch}><Eye/></Button></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Card>
        </div>
    )

}


export const FavPlayer = ({player, onAddToFavPlayer}) => {
    return (
        <div>
            <h1>Alisson</h1>
            <h2>Liverpool</h2>
            <button onClick={() => onAddToFavPlayer(player)}>Add to Fav</button>
        </div>
    )

}