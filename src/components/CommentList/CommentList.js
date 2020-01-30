import React from 'react';
import Comment from '../Comment/Comment';

function CommentList(props) {
    return (
        <React.Fragment>
            {props.comments.map((comment) => (
                <Comment
                    key={comment.id}
                    author={comment.author}
                    message={comment.message}
                />
            ))}
        </React.Fragment>
    );
}

export default CommentList;
