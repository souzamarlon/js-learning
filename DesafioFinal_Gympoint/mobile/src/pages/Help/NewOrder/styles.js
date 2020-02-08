import styled from 'styled-components/native';
import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.View`
  /* margin-top: 2px; */
  /* height: 350px; */
  /* width: 100%; */
  max-width: 335px;
  /* padding-top: 10px; */
  border-radius: 4px;
  /* background: #ffff; */
  /* border: 1px solid #eee; */
  margin: 15px;
`;
export const Form = styled.View`
  /* align-self: stretch; */
  /* margin-top: 50px; */
`;

export const FormInput = styled(Input)`
  margin-bottom: 20px;
  background: #fff;
  height: 300px;
  align-items: flex-start;
  padding-top: 15px;
`;

export const SubmitButton = styled(Button)`
  max-width: 335px;
  /* margin: 0 0px; */
  margin-top: 2px;
`;
