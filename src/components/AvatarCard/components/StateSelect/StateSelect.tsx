import React, { FC, useEffect, MouseEvent } from 'react';
import { AvatarStateService, ButtonService } from '../../../../services';
import { AvatarState } from '../../../../shared';
import Button from '../Button';

type Props = {
  avatarState: AvatarState;
};

const StateSelect: FC<Props> = ({ avatarState }: Props) => {
  const { online, verified } = avatarState;
  useEffect(() => {
    ButtonService.setStaggerOut(false);
  }, []);

  const assignNewVerifiedState = (value: Record<string, boolean>) => (event: MouseEvent): void => {
    event.preventDefault();
    AvatarStateService.setAvatarState({ ...avatarState, ...value });
  };

  return (
    <>
      <Button
        width={65}
        color="secondary"
        kind="neu-circle"
        onClick={assignNewVerifiedState({ verified: !verified })}
        active={!!verified}
        label={
          <>
            <div>V</div>
          </>
        }
        animation="slideInLeft"
      />
      <Button
        width={65}
        color="secondary"
        kind="neu-circle"
        active={!!online}
        onClick={assignNewVerifiedState({ online: !online })}
        label={
          <>
            <div>O</div>
          </>
        }
        animation="slideInRight"
      />
    </>
  );
};

export default StateSelect;
