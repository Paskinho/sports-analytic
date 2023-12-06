import s from "./cards.module.scss"
import {z} from "zod";
import {Column} from "../../components/ui/table";


const newDeckSchema = z.object({

})


export const Cards = () => {

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