import React from 'react';
import Comment from '../Comment/Comment';

function CommentList(props) {
    return (
        <div>
            {props.comments.map((comment) => (
                <Comment
                    key={comment.id}
                    author={comment.author}
                    message={comment.message}
                />
            ))}
        </div>
    );
}

export default CommentList;
