import React from 'react';


function TodoItem(props) {
    console.log(props)
    return (
        <div>
            <input type="checkbox" checked={props.props.completed} />
            <span>{props.props.text}</span>
        </div>
    );
}


export default TodoItem;