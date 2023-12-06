import s from "./cards.module.scss"
import {z} from "zod";
import {Column} from "../../components/ui/table";
import {useState} from "react";


const newDeckSchema = z.object({
    player: z.string().min(2).max(100),
    country: z.string().min(2).max(50),
    club: z.string().min(2).max(50),
})



type NewCard = z.infer<typeof newDeckSchema>
export const Cards = () => {

    const [sort, setSort] = useState({key:'age', direction:'asc'})
    const sortString = sort ? `${sort.key} - ${sort.direction}` : null

    const columns: Column[] =[
        {key: "player", sortable: true, title: "Player"},
        {key: "country", sortable: true, title: "Country"},
        {key: "club", sortable: true, title: "Club"},
        {key: "age", sortable: true, title: "Age"},
        {key: "likes", sortable: true, title: 'Likes'}
    ]


    return (
        <div className={s.cards}>
            Cards
        </div>
    )

}