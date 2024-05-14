import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Stack } from '@mui/system';
import WITButton from '../features/WITButton';

const SampleQuizResults = (props) => {
  const [finalResKey, setFinalResKey] = useState("res1");

  // referenced: https://ui.dev/react-router-pass-props-to-link
  const location = useLocation()
  const { usersResult } = location.state


  const [statsList, setStatsList] = useState([])
  useEffect(() => {
    let highestStats = 0 // also consider that if they're all equal, then use the randomiser function
    let stats = []
    for (const key in usersResult) {
      stats.push(usersResult[key])
      setStatsList(stats)

      if (highestStats < usersResult[key]) {
        highestStats = usersResult[key]
        setFinalResKey(key)
        setResults(answers[key])
        setDescript(description[key])
      }
    }

    setAllStats1(stats[0])
    setAllStats2(stats[1])
    setAllStats3(stats[2])
    setAllStats4(stats[3])

  }, [])

  let answers = { // move to a different file -- database related?
    res1: "you are a cutie petootie",
    res2: "you are a cutie pie",
    res3: "you are a kewl cucumber",
    res4: "you are a slaying margarita",
  }

  let description = {
    res1: "you are such a cutie petootie!! we love you so much",
    res2: "omg you are literally the cutiest pi(e)!! literally could eat you 22/7 (hint 3.14...)",
    res3: "who told you to be so kewl?? gimme your sunglasses nom nom nom!",
    res4: "le slaying margarita! who would've known?",
  }

  let [results, setResults] = useState(answers[finalResKey])
  let [descrip, setDescript] = useState(description[finalResKey])

  // all statistics!
  let [allStats1, setAllStats1] = useState(0)
  let [allStats2, setAllStats2] = useState(0)
  let [allStats3, setAllStats3] = useState(0)
  let [allStats4, setAllStats4] = useState(0)

  return (
    <>
      <header className="App-header">
        <div className='pixel-font-title' style={{ marginTop: "2em" }}>T2W1: Sample Quiz Results!</div>
        <div className='quiz-question-title'>♡ {results}</div>
        <div className='description-box'>
          {descrip}
        </div>
        <>
          <div className='quiz-question-title' style={{ marginTop: '2em' }} >Your Results Stats</div>
          {/* include stats if possible */}
          <Stack flexDirection="row">
            <Stack spacing={2} style={{ marginRight: '2em' }}>
              <div className='pixel-font-subtitle'>{answers["res1"]}</div>
              <div className='pixel-font-subtitle'>{answers["res2"]}</div>
              <div className='pixel-font-subtitle'>{answers["res3"]}</div>
              <div className='pixel-font-subtitle'>{answers["res4"]}</div>
            </Stack>
            <Stack spacing={2}>
              <div className='pixel-font-subtitle'>{allStats1}</div>
              <div className='pixel-font-subtitle'>{allStats2}</div>
              <div className='pixel-font-subtitle'>{allStats3}</div>
              <div className='pixel-font-subtitle'>{allStats4}</div>
            </Stack>
          </Stack>
          <div className='quiz-question-title' style={{ marginTop: '2em' }} >All Results</div>
        </>
      </header>
      <footer>
        <WITButton location="/quizzes" content="All Quizzes"> </WITButton>
      </footer>
    </>
  );
}

export default SampleQuizResults;