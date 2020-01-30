import React from 'react';
import CommentList from './components/CommentList/CommentList';

const comments = [
  {
      id: '0',
      author: 'Arnaud',
      message: 'Hi',
  },
  {
      id: '1',
      author: 'Mollie',
      message: 'Goodbye',
  },
  {
      id: '2',
      author: 'Vicky',
      message: 'I am an alcoholic. Sorry did i really just say that'
  },
];

function App() {
  return (
    <div>
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
