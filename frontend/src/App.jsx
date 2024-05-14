import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import SampleQuiz from './components/sample-quiz/SampleQuiz';
import SampleQuizResults from './components/sample-quiz/SampleQuizResults';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/quizzes" element=<Dashboard /> />
        <Route path="/sample-quiz" element=<SampleQuiz /> />
        <Route path="/results-sample-quiz" element=<SampleQuizResults /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
