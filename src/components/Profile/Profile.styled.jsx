import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 15px 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 20px;
  background-color: #fbd3d3;
`;

export const Avatar = styled.img`
  max-width: 150px;
  margin-bottom: 30px;
`;

export const Name = styled.p`
  font-size: 30px;
  line-height: 45px;
  font-weight: 600;
  letter-spacing: 0.25px;

  margin-bottom: 10px;
`;

export const Tag = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
  background-color: ivory;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
