import React, { FC } from 'react';
import { Avatar } from './components';
import './CardTop.scoped.css';
import Button from '../Button';
import { AvatarState, States } from '../../../../shared';
import { ButtonService, StateService } from '../../../../services';

type Props = {
  state: States;
  avatarStates: AvatarState;
};

const CardTop: FC<Props> = ({ state, avatarStates }: Props) => {
  return (
    <div className="card-top">
      {state && (
        <Button
          animation="slideInRight"
          onClick={(e) => {
            e.preventDefault();
            StateService.setState('');
            ButtonService.setStaggerOut(false);
          }}
          label="back"
          kind="text"
          style={{
            position: 'absolute',
            top: 0,
            color: 'teal',
          }}
        />
      )}
      <Avatar avatarStates={avatarStates} />
    </div>
  );
};

export default CardTop;
