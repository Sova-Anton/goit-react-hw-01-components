import styled from '@emotion/styled';

export const Container = styled.table`
  min-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
`;

export const ColoneName = styled.th`
  height: 40px;
  background-color: #1086f7;
  color: bisque;
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
  letter-spacing: 0.25px;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  background-color: #b4dda5;
`;

export const StylRow = styled.tr`
  text-align: center;
  :nth-of-type(odd) {
    background-color: #cae6ff;
  }
`;

export const Invoice = styled.td`
  padding: 10px;
  text-transform: capitalize;
`;
