import styled from '@emotion/styled';

export const Container = styled.section`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  background-color: #ffffb2;
  border-radius: 16px;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
  letter-spacing: 0.25px;
  text-transform: uppercase;

  margin-bottom: 25px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
  background-color: #57b5ff;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;
