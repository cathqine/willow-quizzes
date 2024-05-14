import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const QuizBox = (props) => {
  return (
    <>
      <Link to={props.locate} style={{ textDecoration: 'none' }}>
        <Box className='centre-text pixel-font-subtitle list-format' href={props.locate}>
          {props.text}
        </Box>
      </Link>
    </>
  );
}

export default QuizBox;