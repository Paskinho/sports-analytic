import styled from "styled-components";

export const StyledTable = styled.table `
  background-color: #01949A;
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
  background: #004369;
  font-size: 14px;
  border-left: 1px solid #01949A;
  border-right: 1px solid #01949A);
  
  
`

export const StyledTh = styled.th `
  text-align: left;
  border-left: 1px solid #01949A;
  border-right: 1px solid#01949A;
  border-top: 1px solid #01949A;
  border-bottom: 1px solid #01949A;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #E5DDC8;
`

export const StyledTr = styled.tr `
  border-left: none;
  border-right: none;
  //display: flex;
  //justify-content: center;
  //background: #f3f3f3;
  ////border: 5px solid black;
`