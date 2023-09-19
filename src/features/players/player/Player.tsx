import {Typography} from "../../../components/ui/typography";
import {useNavigate} from "react-router-dom";
import {PlayerType} from "./player.slice";
import styled from "styled-components";




export const Player = (props: PlayerType) => {

    const navigate = useNavigate()

    const Virg = () => {
        return navigate("/Virgil")
    }

    return <StyledTable>
        <StyledTd>
            <th>Player</th>
        <div>
            <Typography variant={'caption'} onClick={Virg}>Virgil Van Dijk</Typography>
            </div>
        <div><Typography variant={'caption'} onClick={Virg}>Mohamed Salah</Typography></div>
        <div><Typography variant={'caption'} onClick={Virg}>Darwin Nunez</Typography></div>
        <div><Typography variant={'caption'} onClick={Virg}>Alisson Becker</Typography></div>
        </StyledTd>
        <StyledTd>
            <th>Country</th>
            <Typography variant={'caption'}>Netherlands</Typography>
            <Typography variant={'caption'}>Egypt</Typography>
            <Typography variant={'caption'}>Uruguay</Typography>
            <Typography variant={'caption'}>Brazil</Typography>
        </StyledTd>
        <StyledTd>
            <th>Club</th>
            <Typography variant={'caption'}>Liverpool</Typography>
            <Typography variant={'caption'}>Liverpool</Typography>
            <Typography variant={'caption'}>Liverpool</Typography>
            <Typography variant={'caption'}>Liverpool</Typography>
        </StyledTd>
    </StyledTable>
}

const StyledTd = styled.td `
  border: 1px solid black
  //border-width: 50px;
`


const StyledTable = styled.table `
  //background-color: beige;
 
  
`