import React from 'react';
import styled from "styled-components";

export const Logo = () => {
    return (
        <div>
            <StyledImg src='https://cdn4.vectorstock.com/i/1000x1000/49/18/soccer-and-football-player-man-logo-vector-31364918.jpg'/>
        </div>
    );
};

const StyledImg = styled.img `
width: 50px;
  height: 50px;
`