import React from 'react';
import './DetailsItem.scss';

type DetailsItemProps = {
  icon: string;
  value: string;
};

export const DetailsItem: React.FC<DetailsItemProps> = ({ icon, value }) => {
  return (
    <div className='DetailsItem'>
      <i className='material-icons'>{icon}</i>
      <p className='details-value'>{value}</p>
    </div>
  );
};
