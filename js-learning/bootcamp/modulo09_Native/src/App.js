import React from 'react';

import { useSelector } from 'react-redux';

// import { Container } from './styles';
import createRouter from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);
  return <Routes />;
}
