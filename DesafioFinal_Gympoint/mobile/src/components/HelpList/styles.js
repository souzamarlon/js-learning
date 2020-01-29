import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 8px;
  height: 46px;
  /* width: 100%; */
  max-width: 350px;
  /* padding: 10px; */
  border-radius: 4px;
  background: #ffff;
  border: 1px solid #eee;
  background-color: ${props => (props.insideInterval ? '#FFF' : '#eee')};
  opacity: ${props => (props.insideInterval ? 1 : 0.4)};
`;

export const Info = styled.View`
  margin-top: 10px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #000;
`;
export const Time = styled.Text`
  align-items: center;

  display: flex;
  color: #999;
  font-size: 13px;
  margin-top: 4px;
  margin-right: 15px;
`;
