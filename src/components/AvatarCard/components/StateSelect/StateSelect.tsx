import React, { FC, useEffect, MouseEvent } from 'react';
import { AvatarStateService, ButtonService } from '../../../../services';
import { AvatarState } from '../../../../shared';
import CheckMark from '../../assets/checkmark.svg';
import Clock from '../../assets/clock.svg';
import Button from '../Button';

type Props = {
  avatarState: AvatarState;
};

const StateSelect: FC<Props> = ({ avatarState }: Props) => {
  const { online, verified, newUser } = avatarState;
  useEffect(() => {
    ButtonService.setStaggerOut(false);
  }, []);

  const assignNewVerifiedState = (value: Record<string, boolean>) => (event: MouseEvent): void => {
    event.preventDefault();
    AvatarStateService.setAvatarState({ ...avatarState, ...value });
  };

  return (
    <>
      <span className="tooltip">
        <Button
          order={2}
          width={65}
          color="secondary"
          kind="neu-circle"
          onClick={assignNewVerifiedState({ verified: !verified })}
          active={!!verified}
          label={
            <div>
              <img
                style={{
                  filter: `grayscale(${verified ? '0' : '1'})`,
                }}
                src={CheckMark}
                alt="checkmark-icon"
                width="20px"
                height="20px"
              />
            </div>
          }
          animation="bounceIn"
        />
        <span className="tooltiptext">Verified status</span>
      </span>
      <span className="tooltip">
        <Button
          order={1}
          width={65}
          color="secondary"
          kind="neu-circle"
          active={!!online}
          onClick={assignNewVerifiedState({ online: !online })}
          label={
            <div>
              <span
                style={{
                  filter: `grayscale(${online ? '0' : '1'})`,
                  backgroundColor: '#5FEE64',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'block',
                  margin: 0,
                  padding: 0,
                }}
              />
            </div>
          }
          animation="bounceIn"
        />
        <span className="tooltiptext">Online status</span>
      </span>
      <span className="tooltip">
        <Button
          order={3}
          width={65}
          color="secondary"
          kind="neu-circle"
          active={!!newUser}
          onClick={assignNewVerifiedState({ newUser: !newUser })}
          label={
            <div>
              <img
                style={{
                  filter: `grayscale(${newUser ? '0' : '1'})`,
                }}
                src={Clock}
                alt="checkmark-icon"
                width="20px"
                height="20px"
              />
            </div>
          }
          animation="bounceIn"
        />
        <span className="tooltiptext">New user status</span>
      </span>
    </>
  );
};

export default StateSelect;
