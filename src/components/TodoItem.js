import React from 'react';


function TodoItem(props) {

    return (
        <div>
            <input type="checkbox" checked={!!props.item.completed} onChange={() => props.handleChange(props.item.id)} />
            <span style={props.item.completed ? { textDecoration: "line-through" } : null}>{props.item.text}</span>
        </div>
    );
}


export default TodoItem;