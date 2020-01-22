import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: transparent;
`;

export const SubmitButton = styled(Button)`
  /* width: 200px; */

  margin: 0 30px;
  margin-top: 5px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
