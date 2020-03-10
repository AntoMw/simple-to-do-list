import React from "react";
import "./App.css"

function ListItem() {
    return (
        <article className="listItem">
        <input type="checkbox" id="item1" name="item1" value="item"></input>
        <label for="item1">List Item</label><br/>
        </article>
    )
}
export default ListItem