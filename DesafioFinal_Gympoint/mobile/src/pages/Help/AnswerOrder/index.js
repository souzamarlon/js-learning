import React, { useMemo } from 'react';

import { parseISO, formatDistance } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import {
  Container,
  Info,
  AnswerText,
  QuestionText,
  Time,
  Text,
} from './styles';
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

  return (
    <>
      <Header />
      <Container>
        <Info>
          <QuestionText>PERGUNTA</QuestionText>
          <Time>{dateParsed}</Time>
        </Info>
        <Text>{data.question}</Text>
        <AnswerText>RESPOSTA</AnswerText>
        <Text>{data.answer}</Text>
      </Container>
    </>
  );
}
