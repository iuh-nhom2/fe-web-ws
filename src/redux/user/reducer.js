import actionsTypeUser from "./actionTypes";

const initialState = {
  token: '',
  userData: null,
  loading: false,
  error: null
};

const user = (state =initialState, action) => {
  switch(action.type) {
    case actionsTypeUser.LOGIN_SUCCESS: 
    {
      console.log('payload', action.payload);
      const token = action?.payload?.token ? action.payload.token : "";
      const userData = action?.payload;

      return {
        ...state,
        token,
        userData
      }
    }
    default: {
      return state;
    }
  }
}

export default user;