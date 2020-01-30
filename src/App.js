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
      message: 'Hello again',
  },
];

function App() {
  return <CommentList comments={comments} />;
}

export default App;
