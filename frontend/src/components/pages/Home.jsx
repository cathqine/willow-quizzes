import React from 'react';
import WITButton from '../features/WITButton';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className='pixel-font-title'>Willow Quizzes! </div>
        <WITButton location="/quizzes" content="Click here to start!"> </WITButton>
      </header>
    </div>
  )
}

export default Home;