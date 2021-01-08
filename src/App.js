import React from 'react';
import './App.css';
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
      <img
          classNme="app__headerImage"
          src="https://www.nicepng.com/png/detail/67-675267_image-result-for-sakura-flower-vector-sakura-flower.png"
          alt="sakura_logo"
          />
      </div>
      <h1> Hey</h1>
      <Post />
    </div>
  );
}

export default App;
