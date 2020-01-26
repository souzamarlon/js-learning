import React from 'react';
import { Text, Image } from 'react-native';

import logo from '~/assets/logo_h.png';

import { StatusBar } from './styles';

export default function Header() {
  return (
    <StatusBar>
      <Image source={logo} />
    </StatusBar>
  );
}
