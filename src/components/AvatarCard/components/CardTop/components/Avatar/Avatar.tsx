import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import HardHat from '../../../../assets/hardhat.svg';
import Dungarees from '../../../../assets/dungarees.svg';
import MechanicHat from '../../../../assets/mechanic-hat.svg';
import Verfied from '../../../../assets/verified.svg';
import Beard from '../../../../assets/beard.svg';
import './Avatar.scoped.css';
import { AvatarState, Professions } from '../../../../../../shared';
import { ProfessionService } from '../../../../../../services';
import AvatarImage from '../AvatarImage';

type Props = {
  avatarStates: AvatarState;
};

const Avatar: FC<Props> = ({ avatarStates: { online, verified, newUser } }: Props) => {
  const [profession, setProfession] = useState<Professions>('');

  useEffect(() => {
    const subscription = ProfessionService.getState().subscribe((res) => {
      setProfession(res);
    });
    return () => {
      if (subscription != null) {
        subscription.unsubscribe();
      }
    };
  }, []);

  const styles = {
    filter: online ? 'grayscale(0)' : 'grayscale(1)',
    backgroundColor: online ? '#5FEE64' : '#434343',
  } as React.CSSProperties;

  return (
    <>
      <img
        src={Verfied}
        alt="verified"
        className={clsx('verified', {
          show: verified,
        })}
      />
      <div style={styles} className="avatar">
        <AvatarImage newUser={newUser} />
        <img
          alt="hardhat"
          src={HardHat}
          className={clsx('hard-hat', {
            show: profession === 'plumber',
          })}
        />
        <img
          alt="dungarees"
          src={Dungarees}
          className={clsx('dungarees', {
            show: profession === 'plumber',
          })}
        />
        <img
          alt="mechanichat"
          src={MechanicHat}
          className={clsx('mechanic-hat', {
            show: profession === 'mechanic',
          })}
        />
        <img
          alt="beard"
          src={Beard}
          className={clsx('beard', {
            show: !newUser,
          })}
        />
      </div>
    </>
  );
};

export default Avatar;
