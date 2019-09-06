import React from 'react';
import { Link } from 'react-router-dom';

const Nomatch = () => (
  <>
    No Match
    <Link to='/'>
      Go Back Home
    </Link>
  </>
)

export default Nomatch;