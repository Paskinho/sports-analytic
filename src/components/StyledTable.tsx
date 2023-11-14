import styled from "styled-components";

export const StyledTable = styled.table `
  //background-color: beige;
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
  background: #d8d8d8;
  font-size: 14px;
  border-left: 1px solid rgba(157, 231, 200, 0.99);
  border-right: 1px solid rgba(130, 231, 169, 0.99);
`

export const StyledTh = styled.th `
  text-align: left;
  border-left: 1px solid rgb(231, 231, 231);
  border-right: 1px solid #ddd;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
`

export const StyledTr = styled.tr `
  border-left: none;
  border-right: none;
  background: #f3f3f3;
  //border: 5px solid black;
`