import React from 'react';

function Comment(props) {
    // props.message
    // props.author
    return (
        <p>
            <strong>{props.author}</strong> said <em>{props.message}</em>
        </p>
    );
}

export default Comment;
