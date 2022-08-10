const intialstate = {
  data: [],
};
const listReducer = (state = intialstate, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'ADD_DATA':
      return {...state, ...{data: [...payload]}};

    case 'add':
      return {...state, data: [payload, ...state.data]};

    default:
      return {...state};
  }
};
export default listReducer;
