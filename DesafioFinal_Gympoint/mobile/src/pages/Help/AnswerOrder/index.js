import React, { useMemo } from 'react';

import { parseISO, formatDistance } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Info, Name, Time, Text } from './styles';
import Header from '~/components/Header';

export default function Answer({ navigation }) {
  const data = navigation.getParam('data');
  const dateTimeUTC = zonedTimeToUtc(new Date(), 'America/Brasília');

  const dateParsed = useMemo(() => {
    return formatDistance(parseISO(data.created_at), dateTimeUTC, {
      locale: pt,
      addSuffix: true,
    });
  }, [data.created_at, dateTimeUTC]);

  console.tron.log(data);
  return (
    <>
      <Header />
      <Container>
        <Info>
          <Name>PERGUNTA</Name>
          <Time>{dateParsed}</Time>
        </Info>
        <Text>{data.question}</Text>
        <Name>RESPOSTA</Name>
        <Text>{data.answer}</Text>
      </Container>
    </>
  );
}
// Answer.navigationOptions = ({ navigation }) => ({
//   headerLeft: () => (
//     <TouchableOpacity
//       onPress={() => {
//         navigation.goBack();
//       }}
//     >
//       <Icon name="chevron-left" size={30} color="#000" />
//     </TouchableOpacity>
//   ),
// });
