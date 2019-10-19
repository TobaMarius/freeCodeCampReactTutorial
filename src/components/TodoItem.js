import React from 'react';


function TodoItem(props) {
    console.log(props)
    return (
        <div>
            <input type="checkbox" checked={props.item.completed} />
            <span>{props.item.text}</span>
        </div>
    );
}


export default TodoItem;