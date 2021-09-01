import React from 'react';
import './Navbar.scss';

export const Navbar: React.FC = () => {
  return (
    <div className='nav'>
      <i className='small material-icons navMenu'>menu</i>
      <span>Novopolotsk, BLR</span>
      <i className='small material-icons'>question_answer</i>
    </div>
  );
};
