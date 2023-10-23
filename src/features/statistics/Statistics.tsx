import {Checkbox} from "../../components/ui/checkbox/checkbox";
import styled from "styled-components";
import {Modal} from "../../components/ui/modal";
import {useState} from "react";
import {TextField} from "../../components/ui/text-field";


export const Statistics = () => {

    const [showModal, setShowModal] = useState(true)
    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)

    return (
        <StyledDivStatistics>
            GLOBAL STATISTICS
            GLOBAL STATISTICS
            GLOBAL STATISTICS
            <Checkbox>+</Checkbox>
            <Modal open={showModal} onClose={closeModal} title={'Create compare'}>
                <form>
                <TextField label={"Compare player №1"}/>
                <TextField label={"Compare player №2"}/>
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