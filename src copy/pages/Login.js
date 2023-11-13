import React, { useState } from 'react';
import BlogPost from "../components/BlogPost"
// import SubmitLogin from "../components/Login"

export default function Login() {
  // const [body, setBody ] = useState ("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUser, setIsUser ] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      email,
      password,
    };

    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

 
        if (data.Success) { 
          setIsUser(true);
          console.log("you are real!")
        }
      });
  };

  if (isUser) {
    return (
      <>
      <p>You're real!</p>
      </>
    );
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
          placeholder="Email here"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
          placeholder="Password here"
        />
        <br />

        {/* <SubmitLogin body={body}/> */}
        <button type="submit">Login</button>
      </form>
    </>
  );
}