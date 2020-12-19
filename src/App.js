import { useEffect, useState } from "react";
import { connect } from "react-redux";
import './App.css';
import { onNameChange , requestRobots} from "./redux/action";


const mapStateToProps= state =>{
  return{
    namefield: state.changename.namefield,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    onNameChange:(event)=> dispatch(onNameChange(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
 
}

function App(props) {

  useEffect(()=>{
     props.onRequestRobots()
  },[])

  const users= props.robots
  console.log(users)

  // const[name,setName]= useState()

  // const onNameChange=(e)=>{
  //   setName(e.target.value)

  return (
    
    <div className="App">
      <input onChange={props.onNameChange}></input>
     <h1>hello{props.namefield}</h1>
    </div>

  );
}

export default  connect(mapStateToProps, mapDispatchToProps)(App);
