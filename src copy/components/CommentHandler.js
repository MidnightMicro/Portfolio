import React, { useState, } from 'react';

function CommentHandler({blogId}) {
  const [commentText, setCommentText] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentChange2 = (e) => {
    setCommentAuthor(e.target.value)
  }

  const handleCommentSubmit = () => {
    const blogPostId = blogId;
    alert("Comment Submitted")
    

    const commentData = {
      author: commentAuthor,
      text: commentText,
      blogPostId: blogPostId,
    };

    // Send a POST request to the API endpoint
    fetch(`http://localhost:3001/blogs/${blogPostId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to create comment');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Comment created:', data);
        setCommentText('');
      })
      .catch((error) => {
        console.error('Error creating comment:', error);
      });
  };

  return (
    <div>
      <form>
        <input type="text" name="author" onChange={handleCommentChange2} placeholder='who are you?'></input>
        <br></br>
        <textarea
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          rows="4"
          cols="50"
        >
        </textarea>
        <br></br>
        <button type="button" onClick={handleCommentSubmit}>
          Submit Comment
        </button>
      </form>
    </div>
  );
}

export default CommentHandler;