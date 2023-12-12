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
  min-height: 20vh;
  margin-top: 50px;
`

const Name = styled.span `
    color: #004369;
`

const Copyright = styled.h6 `
color:#004369
`

