const SimulatorPageReducer = (state = {}, action) => { // Update default state value to an empty object
    switch (action.type) {
      case 'SET_SIMULATOR_PAGE':
        console.log('SET_SIMULATOR_PAGEr:', action.payload);
        // Assuming action.payload is an object, you can return it directly as the new state
        return action.payload;
      default:
        return state;
    }
  };
  
  export default SimulatorPageReducer;
  