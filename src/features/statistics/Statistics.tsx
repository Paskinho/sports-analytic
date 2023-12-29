import {Checkbox} from "../../components/ui/checkbox/checkbox";
import styled from "styled-components";
import {Modal} from "../../components/ui/modal";
import {useState} from "react";
import {TextField} from "../../components/ui/text-field";
import {Button} from "../../components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Table} from '../../components/ui/table'

const newDeckSchema = z.object({
    question: z.string().min(3).max(500),
    answer: z.string().min(3).max(500),
})

type newCompare = z.infer<typeof newDeckSchema>

export const Statistics = () => {

    const [showModal, setShowModal] = useState(true)
    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)


    const {control, handleSubmit} = useForm({
        resolver: zodResolver(newDeckSchema),
        defaultValues: {
            question: "",
            answer: ""
        },
    })

    const formCreated = handleSubmit((args: newCompare) => {
        return alert('Success create')
    })

    const [selectedPlayer, setSelectedPlayer] = useState([])

    const columns = [
        {key: "Player", title: "Player"},
        {key: "Param", title: "Param"},
    ]


    const addPlayerToCompare = () => {

    }


    return (
        <StyledDivStatistics>
            <Checkbox>+</Checkbox>
            <Modal open={showModal} onClose={closeModal} title={'Create compare'}>
                <form onSubmit={formCreated}>
                    <TextField label={"Compare player №1"}/>
                    <TextField label={"Compare player №2"}/>
                    <Button type={'submit'} onClick={addPlayerToCompare}>Add</Button>
                </form>
            </Modal>
            <Table.Root style={{width: "100%"}}>
                <Table.Header columns={columns}/>
                <Table.Body>
                    <Table.Row key={1}>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </StyledDivStatistics>
    );
};

const StyledDivStatistics = styled.div`
  display: flex;
  margin-top: 100px;
  //justify-content: center;
  //align-items: center;
  flex-direction: column;
`