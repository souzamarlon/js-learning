import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '7.212.4.61' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
