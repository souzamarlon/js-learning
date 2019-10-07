import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // const tron = Reactotron.configure({ host: '7.212.4.61' })
  const tron = Reactotron.configure({ host: '192.168.25.32' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
