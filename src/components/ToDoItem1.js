import React from "react";
import "./App.css"

function ToDoItem1() {
    return (
        <article className="listBlock">
        <input type="checkbox" id="item1" name="item1" value="visit"></input>
        <label for="item1">Take a tour</label><br/>
        </article>
    )
}
export default ToDoItem1