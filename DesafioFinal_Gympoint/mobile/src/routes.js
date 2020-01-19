// import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from './pages/SignIn';

// export default createAppContainer(createSwitchNavigator({ SignIn }));

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator({
      SignIn,
      // Sign: createSwitchNavigator({
      //   ,
      // }),
      initialRouteName: isSigned ? 'SignIn' : 'SignIn',
    })
  );
