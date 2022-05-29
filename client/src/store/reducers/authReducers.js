import { authActions } from "../actions/authActions";
const initState={
  userDetails:null
}
// in the reducer we have the intial state and then the action will change
//  state accordingly of the type according work will done.....

const reducer =(state=initState,action)=>{
  switch(action.type){
    case 'authActions.SET_USER_DETAILS':
      return {
        ...state,//Will destructure the current state
        userDetails:action.userDetails,//And now setting the new state
      };
      default:
        return state
  }
}
export default reducer;