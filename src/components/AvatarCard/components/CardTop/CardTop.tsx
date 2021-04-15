import React, { FC } from 'react';
import { Avatar } from './components';
import './CardTop.scoped.css';

const CardTop: FC = () => {
  return (
    <div className="card-top">
      <Avatar />
    </div>
  );
};

export default CardTop;
