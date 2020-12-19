const initialState ={
    namefield : ''
}

export const changename = (state=initialState,action={})=>{
    console.log(action.type)
    switch(action.type){
        case 'ON_NAME_CHANGE' :{
            return Object.assign({},state, {namefield : action.payload})
        }
        default :
            return state;
    }
}


const initialStateRobots = {
    robots: []
  }
  
  export const requestRobots = (state=initialStateRobots, action={}) => {
    switch (action.type) {
      case 'REQUEST_ROBOTS_SUCCESS':
        return Object.assign({}, state, {robots: action.payload})
      case 'REQUEST_ROBOTS_FAILED':
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
  }