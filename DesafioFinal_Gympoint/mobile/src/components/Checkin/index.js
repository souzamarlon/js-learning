import React, { useMemo } from 'react';
import { parseISO, subDays, formatDistance, isWithinInterval } from 'date-fns';
import { useSelector } from 'react-redux';
import { zonedTimeToUtc } from 'date-fns-tz';

import pt from 'date-fns/locale/pt';

import { Container, Info, Name, Time, Avatar } from './styles';

export default function Checkin({ data }) {
  const dateTimeUTC = zonedTimeToUtc(new Date(), 'America/Brasília');

  // const less7days = subDays(dateTimeUTC, weekDay);

  const dateParsed = useMemo(() => {
    return formatDistance(parseISO(data.createdAt), dateTimeUTC, {
      locale: pt,
      addSuffix: true,
    });
  }, [data.createdAt, dateTimeUTC]);

  const weekDay = parseISO(data.createdAt).getDay();
  // console.tron.log(weekDay);

  const insideInterval = isWithinInterval(parseISO(data.createdAt), {
    start: subDays(dateTimeUTC, 7),
    end: dateTimeUTC,
  });

  return (
    <Container>
      <Info key={data.index}>
        <Name>{`Check-in # ${data.index}`}</Name>
        <Time insideInterval={insideInterval}>{dateParsed}</Time>
      </Info>
    </Container>
  );
}
