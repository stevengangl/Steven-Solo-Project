import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* postSim(action) {
    console.log('in post sim',action.payload)
    try {
        yield axios.post('/api/simulator', action.payload)
        console.log('in post info',action.payload)
        yield put({type: 'FETCH_SIMULATOR_INFO'})
    }catch(error){
        console.log('error', error)
    }
}

function* getSim() {
    // console.log('in get sim',action.payload)

    try {
        const response = yield axios.get('/api/simulator')
        console.log('get sim GET', response.data)

        yield put({ type: 'SET_SIMULATOR_PAGE', payload: response.data })
    } catch (error) {
        console.log('error in Profile Saga', error)
    }
}

// function* editSimData(action){
//     console.log('EDIT action.payload', action.payload)
//     try{
//         yield axios.put(`/api/simulator/${action.payload}`, action.payload)
//         console.log('saga reducer',action.payload )
//         // yield put({type:'SET_USER'})
//     }catch(error){
//       error
//     }
//   }

function* deleteSimItem(action) {
    console.log('delete saga', action)
    try {
        yield axios.delete(`/api/simulator/${action.payload}`);

        yield put({type: 'FETCH_SIMULATOR_INFO'})
        
    }catch (error) {
        console.log('Error:');

    }
}

function* simSaga(){//this is what talks to root saga
    yield takeLatest('POST_WEIGHT_GOAL', postSim)
    yield takeLatest('FETCH_SIMULATOR_INFO', getSim)
    // yield takeLatest('CHANGE_SIMULATOR', editSimData);
    yield takeLatest('DELETE_SIM_ITEM', deleteSimItem);



}

export default simSaga;