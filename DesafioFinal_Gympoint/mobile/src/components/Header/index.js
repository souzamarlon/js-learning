import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo_header.svg';

import { StatusBar } from './styles';

export default function Header() {
  return (
    <StatusBar>
      <Image source={logo} />
    </StatusBar>
  );
}
