import React from 'react';
import './Details.scss';
import { DetailsItem } from './DetailsItem/DetailsItem';

export const Details: React.FC = () => {
  return (
    <div className='Details'>
      <DetailsItem icon='tonality' value='1009 hpa' />
      <DetailsItem icon='opacity' value='74%' />
      <DetailsItem icon='grain' value='4 m/s' />
    </div>
  );
};
