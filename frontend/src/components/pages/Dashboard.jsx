import React from 'react';
import { useLocation } from 'react-router-dom';
import { Stack, Container } from '@mui/material';
import QuizBox from '../features/QuizBox';
import WITButton from '../features/WITButton';

const Dashboard = () => {
  return (
    <>
      <header className="App-header">
        <div className='pixel-font-title' style={{ marginTop: "2em" }}>Willow Quizzes!</div>
        <Stack spacing={2}>
          <QuizBox text="T2W1: Sample Quiz" locate="/sample-quiz"></QuizBox>
          <QuizBox text="T2W1: Which UNSW Building Are You?" locate="/quiz-01"></QuizBox>
          <QuizBox text="T2W1: What is Your Ideal Tech Role?" locate="/quiz-02"></QuizBox>
          <QuizBox text="T2W1: Your Career Personality" locate="/quiz-03"></QuizBox>
        </Stack>
      </header>
      <footer className='App-footer'>
        <WITButton location="/" content="Back"> </WITButton>
      </footer>
    </>
  );
}

export default Dashboard;