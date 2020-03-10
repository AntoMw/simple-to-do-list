import React from 'react';
import "./Header";
import './App.css';
import Header from './Header';

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
  }
  else{
    timeOfTheDay="in the evening...";
 }

    return(<article className="App">
      <Header />
      <i style={styles}>March 9th 2020</i>
    <div className="listBlock">  
      <input type="checkbox" id="item1" name="item1" value="visitBank"></input>
        <label for="item1">Visit Co-operative Bank</label><br/>
      <input type="checkbox" id="item2" name="item2" value="DoExercise"></input>
        <label for="item2">Go for some Jogging</label><br/>
      <input type="checkbox" id="item3" name="item3" value="paint"></input>
        <label for="item3">Finish Up Painting</label><br/>
        <input type="checkbox" id="item4" name="item4" value="visitjohn"></input>
        <label for="item4">Attend the John Mc Arthy Meeting</label><br/>
      <input type="checkbox" id="item5" name="item5" value="sustainability"></input>
        <label for="item5">Lecture peers on sustainability</label><br/>
      <input type="checkbox" id="item6" name="item6" value="deliver"></input>
        <label for="item6">Deliver the final Software to Mount</label><br/>
    </div> 

    <button class="reset">Start Over</button> 

<small>edited {`${timeOfTheDay}`}</small>

    </article>
    )
};

export default App;
