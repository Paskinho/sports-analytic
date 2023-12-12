import React from 'react';
import styled from "styled-components";
import AppLogo from "../../../src/assets/images/Logo.jpg"

export const Logo = () => {
    return (
        <div>
            <StyledImg src={AppLogo}/>
        </div>
    );
};

const StyledImg = styled.img `
width: 50px;
  height: 50px;
`