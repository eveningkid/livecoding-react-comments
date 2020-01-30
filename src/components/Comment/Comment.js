import React from 'react';

function Comment(props) {
    return (
        <p>
            <strong>{props.author}</strong> said <em>{props.message}</em>
        </p>
    );
}

export default Comment;
