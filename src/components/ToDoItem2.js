import React from "react";
import "./App.css"

function ToDoItem2() {
    return (
        <article className="listBlock">
        <input type="checkbox" id="item2" name="item2" value="list"></input>
        <label for="item2">Update my List</label><br/>
        </article>
    )
}
export default ToDoItem2