import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProfileInfo() {

    try {
        const response = yield axios.get('/api/profile')
        console.log('SEND TO PROFILEPAGE REDUCER', response.data)

        yield put({ type: 'SET_PROFILE_PAGE', payload: response.data })
    } catch (error) {
        console.log('error in Profile Saga', error)
    }
}



function* ProfileInfoSaga() {

    yield takeLatest('FETCH_PROFILE_INFO', fetchProfileInfo)

}

export default ProfileInfoSaga;