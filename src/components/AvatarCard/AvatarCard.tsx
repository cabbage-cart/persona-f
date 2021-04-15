import React, { FC } from 'react';
import './AvatarCard.scoped.css';
import { Button, CardBottom, CardTop } from './components';

const AvatarCard: FC = () => {
  return (
    <div className="card-wrapper">
      <CardTop />
      <CardBottom>
        <Button width={80} height={90} label="Click" kind="text" color="secondary" />
        <Button width={80} height={90} label="Click" kind="text" color="secondary" />
        <Button width={80} height={90} label="Click" kind="text" color="secondary" />
      </CardBottom>
    </div>
  );
};

export default AvatarCard;
