import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProfileInfo() {

    try {
        const response = yield axios.get('/api/profile')
        // console.log('SEND TO PROFILEPAGE REDUCER', response.data)

        yield put({ type: 'SET_PROFILE_PAGE', payload: response.data })
    } catch (error) {
        console.log('error in Profile Saga', error)
    }
}
function* deleteItem(action) {
    // console.log('hello', action)
    try {
        yield axios.delete(`/api/profile/${action.payload}`);

        yield put({type: 'FETCH_PROFILE_INFO'})
        
    }catch (error) {
        console.log('Error:');

    }
}

function* editShelf(action){
    // console.log('hello', action.payload)

    try{
        yield axios.put(`/api/profile/${action.payload.id}`, action.payload)
        yield put({type: 'FETCH_PROFILE_INFO'})
    }catch(error){
        console.log(error)
    }}

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

function* ProfileInfoSaga() {
    yield takeLatest('FETCH_PROFILE_INFO', fetchProfileInfo)
    yield takeLatest('DELETE_ITEM', deleteItem);
    yield takeLatest('EDIT_SHELF_ITEM', editShelf)
    yield takeLatest('POST_INFO', postItem)


}

export default ProfileInfoSaga;