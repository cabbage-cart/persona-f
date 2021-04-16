import React, { FC, useState, useEffect } from 'react';
import './AvatarCard.scoped.css';
import { combineLatest } from 'rxjs';
import { ProfessionSelection, StateSelect, AwardsSelect, ButtonRow, CardBottom, CardTop } from './components';
import { StateService, AvatarStateService, ProfessionService, AwardsService } from '../../services';
import { AvatarState, AwardsType, Professions, States } from '../../shared';

const AvatarCard: FC = () => {
  const [state, setState] = useState<States>('');
  const [profession, setProfession] = useState<Professions>('');
  const [award, setAward] = useState<AwardsType>('');
  const [avatarState, setAvatarState] = useState<AvatarState>({
    online: true,
    verified: false,
    newUser: true,
  });
  useEffect(() => {
    const subscription = combineLatest(
      StateService.getState(),
      ProfessionService.getState(),
      AvatarStateService.getAvatarState(),
      AwardsService.getAward(),
    ).subscribe(([_state, _profession, _avatarState, _award]) => {
      setState(_state);
      setProfession(_profession);
      setAvatarState(_avatarState);
      setAward(_award);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <div className="card-wrapper">
      <CardTop state={state} avatarStates={avatarState} award={award} />
      <CardBottom>
        {state === '' && <ButtonRow />}
        {state === 'profession' && <ProfessionSelection profession={profession} />}
        {state === 'state' && <StateSelect avatarState={avatarState} />}
        {state === 'awards' && <AwardsSelect award={award} />}
      </CardBottom>
    </div>
  );
};

export default AvatarCard;
