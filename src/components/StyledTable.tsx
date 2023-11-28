import styled from "styled-components";

export const StyledTable = styled.table `
  background-color: #57081d;
  width: 100%;
  border: none;
  margin-bottom: 20px;
  border-collapse: separate;
 
`

export const StyledTd = styled.td `
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: rgba(231, 182, 228, 0.99);
  font-size: 14px;
  border-left: 1px solid rgb(87, 8, 29);
  border-right: 1px solid rgb(87, 8, 29);
  
  
`

export const StyledTh = styled.th `
  text-align: left;
  border-left: 1px solid rgb(87, 8, 29);
  border-right: 1px solid #57081d;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
  display: flex;
  flex-direction: column;
`

export const StyledTr = styled.tr `
  border-left: none;
  border-right: none;
  //background: #f3f3f3;
  ////border: 5px solid black;
`