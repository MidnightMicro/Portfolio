import React, { useEffect, useState } from 'react';

export default function ViewComments({ blogId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch(`http://localhost:3001/blogs/${blogId}/comments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then((data) => {
        console.log('List of comments:', data);
        setComments(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false); 
      });
  }, [blogId]);

  if (loading) {
    return <p>Loading comments...</p>;
  }

  return (
<> 
    <div>
        <h1 className='CommentHead'>Comments-</h1>
      <ul className='CommentText'>
        {comments.map((comment, i) => (
          <div key ={i}>        
          <h2>Written by : {comment.author}</h2>
          <p>{comment.text}</p>
          <hr className='comment-dive'></hr>
          </div>
        )
        )}
      </ul> 
    </div>
</>
  )

}
