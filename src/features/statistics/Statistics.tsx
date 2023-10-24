import {Checkbox} from "../../components/ui/checkbox/checkbox";
import styled from "styled-components";
import {Modal} from "../../components/ui/modal";
import {useState} from "react";
import {TextField} from "../../components/ui/text-field";
import {Button} from "../../components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

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


    return (
        <StyledDivStatistics>
            GLOBAL STATISTICS
            GLOBAL STATISTICS
            GLOBAL STATISTICS
            <Checkbox>+</Checkbox>
            <Modal open={showModal} onClose={closeModal} title={'Create compare'}>
                <form onSubmit={formCreated}>
                    <TextField label={"Compare player №1"}/>
                    <TextField label={"Compare player №2"}/>
                    <Button type={'submit'}>Add</Button>
                </form>
            </Modal>
        </StyledDivStatistics>
    );
};

const StyledDivStatistics = styled.div`
  display: flex;
  //justify-content: center;
  //align-items: center;
  flex-direction: column;

`