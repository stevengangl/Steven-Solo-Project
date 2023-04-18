import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postItem(action) {
    // console.log('inside postinfo saga',action.payload)
    try {
        yield axios.post('/api/profile', action.payload)
        console.log('in post info',action.payload)
        yield put({type: 'FETCH_PROFILE_INFO'})
    }catch(error){
        console.log('error', error)
    }
}




function* postSaga(){//this is what talks to root saga
    yield takeLatest('POST_INFO', postItem)
}

export default postSaga;