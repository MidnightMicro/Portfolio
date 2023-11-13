import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Home() {
    return (
    <>
      <h1>Home</h1>
        <div>
          <Link to="/blog">Click here to start writing!</Link>
        </div>
</>
    )
}
  export default Home;