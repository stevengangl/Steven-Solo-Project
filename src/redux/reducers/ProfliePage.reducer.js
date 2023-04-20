 const ProfilePageReducer = (state = [], action) => {
    // console.log('REDUCER STATE:', state);
    switch (action.type) {
      case 'SET_PROFILE_PAGE':
        console.log('REDUCER  in profile reducer STATE:', state);
        return action.payload;
      default:
        return state;
    }
  };

  export default ProfilePageReducer;
