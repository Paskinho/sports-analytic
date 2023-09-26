import {Typography} from "../../../components/ui/typography";
import {useNavigate} from "react-router-dom";
import {PlayerType} from "./player.slice";
import styled from "styled-components";
import {StyledTable, StyledTd, StyledTh} from "../../../components/StyledTable";


export const Player = (props: PlayerType) => {

    const navigate = useNavigate()

    const Virg = () => {
        return navigate("/Virgil")
    }

    return <StyledTable>
        <StyledTd>
            <StyledTh>Player</StyledTh>
        <div>
            <Typography variant={'caption'} onClick={Virg}>Virgil Van Dijk</Typography>
            </div>
        <div><Typography variant={'caption'} onClick={Virg}>Mohamed Salah</Typography></div>
        <div><Typography variant={'caption'} onClick={Virg}>Darwin Nunez</Typography></div>
        <div><Typography variant={'caption'} onClick={Virg}>Alisson Becker</Typography></div>
        </StyledTd>
        <StyledTd>
            <StyledTh>Country</StyledTh>
            <Typography variant={'caption'}>Netherlands</Typography>
            <Typography variant={'caption'}>Egypt</Typography>
            <Typography variant={'caption'}>Uruguay</Typography>
            <Typography variant={'caption'}>Brazil</Typography>
        </StyledTd>
        <StyledTd>
            <StyledTh>Club</StyledTh>
            <Typography variant={'caption'}>Liverpool</Typography>
            <Typography variant={'caption'}>Liverpool</Typography>
            <Typography variant={'caption'}>Liverpool</Typography>
            <Typography variant={'caption'}>Liverpool</Typography>
        </StyledTd>
        <StyledTd>
            <StyledTh>Age</StyledTh>
            <Typography variant={'caption'}>31</Typography>
            <Typography variant={'caption'}>31</Typography>
            <Typography variant={'caption'}>24</Typography>
            <Typography variant={'caption'}>30</Typography>
        </StyledTd>
    </StyledTable>
}
