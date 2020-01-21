import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { View } from 'react-native';

import { Container, Left, Info, Name, Time } from './styles';

export default function Checkin({ data }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.createdAt]);
  console.tron.log(dateParsed);

  return (
    <Container>
      <Left>
        <Info>
          {/* <Name>{data.provider.name}</Name> */}
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
    </Container>
  );
}
