import React, { useMemo } from 'react';

import { parseISO, subDays, formatDistance, isWithinInterval } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import pt from 'date-fns/locale/pt';

import { Container, Info, Name, Time, Avatar } from './styles';

export default function HelpList({ data }) {
  const dateTimeUTC = zonedTimeToUtc(new Date(), 'America/Brasília');

  const dateParsed = useMemo(() => {
    return formatDistance(parseISO(data.created_at), dateTimeUTC, {
      locale: pt,
      addSuffix: true,
    });
  }, [data.created_at, dateTimeUTC]);

  // const weekDay = parseISO(data.createdAt).getDay();

  const insideInterval = isWithinInterval(parseISO(data.created_at), {
    start: subDays(dateTimeUTC, 7),
    end: dateTimeUTC,
  });

  return (
    <Container insideInterval={insideInterval}>
      <Info>
        <Name>{`Check-in # ${data.index}`}</Name>
        <Time>{dateParsed}</Time>
      </Info>
    </Container>
  );
}
