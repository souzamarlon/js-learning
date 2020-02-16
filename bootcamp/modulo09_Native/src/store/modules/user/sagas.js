import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    // Correção do eslint não deu também!
    // const profile = {
    //     name,
    //     email,
    //     ...(rest.oldPassword ? rest : {}),
    // };

    // eslint-disable-next-line prefer-object-spread
    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    );
    console.tron.log(profile);
    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Error', 'Erro ao atualizar os dados!');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
