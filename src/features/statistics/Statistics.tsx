import {Checkbox} from "../../components/ui/checkbox/checkbox";
import styled from "styled-components";
import {Modal} from "../../components/ui/modal";


export const Statistics = () => {
    return (
        <StyledDivStatistics>
            GLOBAL STATISTICS
            GLOBAL STATISTICS
            GLOBAL STATISTICS
            <Checkbox>+</Checkbox>
            <Modal open={true}> +++++</Modal>
        </StyledDivStatistics>
    );
};

const StyledDivStatistics = styled.div`
  display: flex;
  //justify-content: center;
  //align-items: center;
  flex-direction: column;

`