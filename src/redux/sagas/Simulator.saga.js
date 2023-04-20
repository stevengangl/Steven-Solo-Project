import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postSim(action) {
    console.log('in post sim',action.payload)
    try {
        yield axios.post('/api/simulator', action.payload)
        console.log('in post info',action.payload)
        yield put({type: 'FETCH_PROFILE_INFO'})
    }catch(error){
        console.log('error', error)
    }
}




function* simSaga(){//this is what talks to root saga
    yield takeLatest('POST_WEIGHT_GOAL', postSim)
}

export default simSaga;