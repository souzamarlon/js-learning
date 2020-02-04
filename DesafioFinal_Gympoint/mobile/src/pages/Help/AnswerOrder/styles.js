import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  /* margin-top: 2px; */
  height: 359px;
  /* width: 100%; */
  max-width: 335px;
  padding-top: 10px;
  border-radius: 4px;
  background: #ffff;
  border: 1px solid #eee;
  margin: 20px;
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
  color: ${props => (props.answer ? '#42CB59' : '#999999')};
  margin-left: 15px;
  margin-top: 4px;
`;
export const Time = styled.Text`
  align-items: center;

  display: flex;
  color: #999;
  font-size: 13px;
  margin-top: 4px;
  margin-right: 15px;
`;

export const Text = styled.Text`
  display: flex;
  margin: 20px;
  font-size: 14px;
  line-height: 26px;
  color: #666666;
`;
