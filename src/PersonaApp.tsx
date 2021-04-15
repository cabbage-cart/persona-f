import React, { FC } from 'react';
import './PersonaApp.scoped.css';
import { AvatarCard } from './components';

const PersonApp: FC = () => {
  return (
    <div className="container">
      <AvatarCard />
    </div>
  );
};

export default PersonApp;
