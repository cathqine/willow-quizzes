import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Stack, Container } from '@mui/material';
import QuizBox from '../features/QuizBox';
import WITButton from '../features/WITButton';

const SampleQuiz = () => {
  let [loggedAns, setLoggedAns] = useState(-1);
  let [empty, setEmpty] = useState(true);
  let [totalScore, setTotalScore] = useState(0);

  let answers = { // move to a different file -- database related?
    1: "you are a cutie petootie!",
    2: "you are a cutie pie",
    3: "you are a kewl cucumber",
    4: "you are a slaying margarita",
  }

  // should never use 'setInitialRes'
  let [initialRes, setInitialRes] = useState({ // or store in a list instead.
    res1: 0,
    res2: 0,
    res3: 0,
    res4: 0,
  })

  let [finalRes, setFinalRes] = useState(initialRes)

  useEffect(() => {
    console.log(finalRes)
  }, [finalRes])

  // points system.
  const result = (loggedAns) => {
    if (loggedAns == -1) {
      setEmpty(true)
      alert('Please Choose An Answer!')
    }

    let res1 = initialRes["res1"]
    let res2 = initialRes["res2"]
    let res3 = initialRes["res3"]
    let res4 = initialRes["res4"]

    if (loggedAns === 1) {
      res1 += 1
    } else if (loggedAns === 2) {
      res2 += 1
    } else if (loggedAns === 3) {
      res3 += 1
    } else if (loggedAns === 4) {
      res4 += 1
    }
    setEmpty(false)
    return {
      res1: res1,
      res2: res2,
      res3: res3,
      res4: res4
    }
  }

  const handleClick = (id) => {
    if (loggedAns > -1) {
      const oldElem = document.getElementById(loggedAns)
      // replace oldElem className to quiz-answer and centre-text
      oldElem.classList.add('quiz-answer')
      oldElem.classList.remove('quiz-answer-clicked')
    }
    const myElem = document.getElementById(id)
    // replace myElem className to quiz-answer-clicked and centre-text
    myElem.classList.remove('quiz-answer')
    myElem.classList.add('quiz-answer-clicked')

    setLoggedAns(id);
  }

  return (
    <>
      <header className="App-header">
        <div className='pixel-font-title' style={{ marginTop: "2em" }}>T2W1: Sample Quiz</div>
        <div className='quiz-question-title'>What is your favourite colour?</div>
        <Stack spacing={3}>
          <Stack flexDirection="row" spacing={0}>
            <div onClick={() => {
              handleClick(1);
              setFinalRes(result(1));
            }} id="1" className='quiz-answer centre-text' style={{ margin: '0 2em 0 0' }} >orange</div>
            <div onClick={() => {
              handleClick(2);
              setFinalRes(result(2));
            }} id="2" className='quiz-answer centre-text'>pink</div>
          </Stack>
          <Stack flexDirection="row" spacing={0}>
            <div onClick={() => {
              handleClick(3);
              setFinalRes(result(3));
            }} id="3" className='quiz-answer centre-text' style={{ margin: '0 2em 0 0' }} >blue</div>
            <div onClick={() => {
              handleClick(4);
              setFinalRes(result(4));
            }} id="4" className='quiz-answer centre-text'>purple</div>
          </Stack>
        </Stack>
        {/* preferrably Next as in goes to the next question */}
        <WITButton disabled={empty} onClick={() => {
          setFinalRes(result(loggedAns))
        }} results={finalRes} page="/sample-quiz" location="/results-sample-quiz" content="Confirm"> </WITButton>
        {/* Confirm means goes to resulting page -- pull up loading page for UI/UX cuteness */}
      </header>
      <footer>
        <WITButton location="/quizzes" content="Back"> </WITButton>
      </footer>
    </>
  );
}

export default SampleQuiz;