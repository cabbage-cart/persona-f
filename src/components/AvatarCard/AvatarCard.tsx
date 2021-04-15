import React, { FC, useState, useEffect } from 'react';
import './AvatarCard.scoped.css';
import { combineLatest } from 'rxjs';
import { ProfessionSelection, ButtonRow, CardBottom, CardTop } from './components';
import { StateService, AvatarStateService } from '../../services';
import { AvatarState, States } from '../../shared';
import StateSelect from './components/StateSelect';

const AvatarCard: FC = () => {
  const [state, setState] = useState<States>('');
  const [avatarState, setAvatarState] = useState<AvatarState>({
    online: true,
    verified: false,
  });
  useEffect(() => {
    const subscription = combineLatest(StateService.getState(), AvatarStateService.getAvatarState()).subscribe(
      ([_state, _avatarState]) => {
        setState(_state);
        setAvatarState(_avatarState);
      },
    );
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <div className="card-wrapper">
      <CardTop state={state} avatarStates={avatarState} />
      <CardBottom>
        {state === '' && <ButtonRow />}
        {state === 'profession' && <ProfessionSelection />}
        {state === 'state' && <StateSelect avatarState={avatarState} />}
      </CardBottom>
    </div>
  );
};

export default AvatarCard;
