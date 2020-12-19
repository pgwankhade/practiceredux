
export const onNameChange =(text)=>({
    type: 'ON_NAME_CHANGE',
    payload:text
})


export const requestRobots = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json() )
      .then(data => dispatch({ type: 'REQUEST_ROBOTS_SUCCESS', payload: data }))
      .catch(error => dispatch({ type: 'REQUEST_ROBOTS_FAILED', payload: error }))
  }