import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  max-width: 200px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #68bcf5;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? '#32a521' : '#ff5252')};
`;
export const Name = styled.p`
  margin-left: 20px;
  font-size: 24px;
  line-height: 30px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;
