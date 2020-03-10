import React from 'react';
import "./Header";
import './App.css';
import Header from './Header';
import ToDoItem1 from "./ToDoItem1";
import ToDoItem2 from "./ToDoItem2";
import ToDoItem3 from "./ToDoItem3";
import ToDoItem4 from "./ToDoItem4";

function App() {

  const styles= {
    padding: "2px 5px",
    color:"cyan",
    fontSize: "12px",
    border: "1px solid blue",
    borderRadius:"4px"
  }
  const dateNow= new Date();
  const hours = dateNow.getHours();
  let timeOfTheDay="";

  if(hours<12){
    timeOfTheDay= "in the Morning...";
  }
  else if (hours>12&&hours<17){
    timeOfTheDay="in the afternoon...";
    styles.color="red";
  }
  else{
    timeOfTheDay="in the evening...";
    
 }

    return(
    <article className="App">
      <Header />
      <i style={styles}>March 9th 2020</i>
    <div className="listBlock">  
      <ToDoItem1 />
      <ToDoItem2 />
      <ToDoItem3 />
      <ToDoItem4 />
    </div> 

    <button class="reset">Start Over</button> 

<small>edited {`${timeOfTheDay}`}</small>

    </article>
    )
};

export default App;
