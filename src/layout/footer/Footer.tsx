import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
            <Name>Uladzislau Paskanau</Name>
            <Name>FC Liverpool</Name>
           <Copyright>Ⓒ 2023 All right reserved</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer `
  background-color: #d8f6ef;
  min-height: 20vh;
`

const Name = styled.span `
`

const Copyright = styled.h6 `

`

