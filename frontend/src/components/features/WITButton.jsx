import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const WITButton = (props) => {
  let location = props.page
  if (!props.disabled) {
    location = props.location
  }
  return (
    <div style={{ margin: '1em 0 1em 0' }}>
      <Link to={location} state={{ usersResult: props.results }} style={{ textDecoration: 'none' }}>
        <Button disabled={props.disabled} variant='outlined' color="warning" style={{ backgroundColor: 'aliceblue', fontFamily: 'Pixel Font' }}>
          {props.content}
        </Button>
      </Link>
    </div>
  );
}

export default WITButton;