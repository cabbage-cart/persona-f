import React, { FC } from 'react';
import { Avatar } from './components';
import './CardTop.scoped.css';
import Button from '../Button';
import { AvatarState, AwardsType, States } from '../../../../shared';
import { ButtonService, StateService } from '../../../../services';

type Props = {
  state: States;
  avatarStates: AvatarState;
  award: AwardsType;
};

const CardTop: FC<Props> = ({ state, avatarStates, award }: Props) => {
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
          kind="default"
          color="secondary"
          style={{
            height: '40px',
            position: 'absolute',
            top: 0,
            margin: 0
          }}
        />
      )}
      <Avatar avatarStates={avatarStates} award={award} />
    </div>
  );
};

export default CardTop;
