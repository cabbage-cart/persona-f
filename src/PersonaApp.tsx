import React, { FC } from 'react';
import './PersonaApp.scoped.css';
import { AvatarCard, Button } from './components';

const PersonApp: FC = () => {
  return (
    <div className="container">
      <h1>Hello World </h1>
      <AvatarCard />
      <Button />
    </div>
  );
};

export default PersonApp;
