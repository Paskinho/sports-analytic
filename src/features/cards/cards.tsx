import s from "./cards.module.scss"
import {z} from "zod";
import {Column} from "../../components/ui/table";
import {useState} from "react";
import {Sort} from "../../common/types";
import {useParams} from "react-router-dom";
import {Page} from "../../stories/Page";
import {Typography} from "../../components/ui/typography";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


const newDeckSchema = z.object({
    player: z.string().min(2).max(100),
    country: z.string().min(2).max(50),
    club: z.string().min(2).max(50),
})


type NewCard = z.infer<typeof newDeckSchema>
export const Cards = () => {

    const {deckId} = useParams<{ deckId: string }>()

    const [sort, setSort] = useState<Sort>({key: 'age', direction: 'asc'})
    const sortString = sort ? `${sort.key} - ${sort.direction}` : null

    const [search, serSearch] = useState('')
    const [perPage, setPerPage] = useState(10)
    const [page, setPage] = useState(1)
    // const {data: deck} = useGetDeckByIdQuery(deckId || '')
    // const {data: cards, isLoading} = useGetCardsQuery({
    //     deckId: deckId || '',
    //     orderBy: sortString,
    //     currentPage: page,
    //     itemsPerPge: perPage
    // })

    if (!deckId) return <div>Deck not found</div>

    // if (isLoading) return <div>Loading...</div>

    const columns: Column[] = [
        {key: "player", sortable: true, title: "Player"},
        {key: "country", sortable: true, title: "Country"},
        {key: "club", sortable: true, title: "Club"},
        {key: "age", sortable: true, title: "Age"},
        {key: "likes", sortable: true, title: 'Likes'}
    ]


    return (
        <Page>
            <img src={'https://logowik.com/content/uploads/images/526_liverpoolfc.jpg'} alt={'Logo'}/>
            <Typography variant={'large'}>{"Footbal Players"}</Typography>
            <CreateCardModal deckId={deckId}/>
        </Page>
            )

}

const CreateCardModal = ({deckId}: {deckId: string}) => {

    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)

    const [createCard] = useCardMutation()

    const {control, handleSubmit} = useForm<NewCard>({
        resolver: zodResolver(newDeckSchema),
        defaultValues: {
            player: '',
            country: '',
            club: '',
        }
    })
}