import React, { useMemo } from 'react';
import { parseISO, subDays, formatDistance } from 'date-fns';
import { useSelector } from 'react-redux';
import { zonedTimeToUtc } from 'date-fns-tz';

import pt from 'date-fns/locale/pt';

import { Container, Info, Name, Time, Avatar } from './styles';

export default function Checkin({ data }) {
  const name = useSelector(state => state.auth.name);

  // const timeDistance = formatDistance(parseISO(data.createdAt), new Date(), {
  //   // addSuffix: true,
  //   locale: pt,
  // });
  const dateTimeUTC = zonedTimeToUtc(new Date(), 'America/Brasília');

  const less7days = subDays(dateTimeUTC, weekDay);

  const dateParsed = useMemo(() => {
    return formatDistance(parseISO(data.createdAt), dateTimeUTC, {
      locale: pt,
      addSuffix: true,
    });
  }, [data.createdAt, dateTimeUTC]);

  const weekDay = parseISO(data.createdAt).getDay();
  console.tron.log(weekDay);

  return (
    <Container>
      <Info>
        <Name>Check-in #{weekDay}</Name>
        <Time>{dateParsed}</Time>
      </Info>
    </Container>
  );
}
