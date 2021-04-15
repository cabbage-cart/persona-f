import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import Persona from '../../../../assets/persona.svg';
import HardHat from '../../../../assets/hardhat.svg';
import Dungarees from '../../../../assets/dungarees.svg';
import MechanicHat from '../../../../assets/mechanic-hat.svg';
import Verfied from '../../../../assets/verified.svg';
import './Avatar.scoped.css';
import { AvatarState, Professions } from '../../../../../../shared';
import { ProfessionService } from '../../../../../../services';

type Props = {
  avatarStates: AvatarState;
};

const Avatar: FC<Props> = ({ avatarStates: { online, verified } }: Props) => {
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
        <img alt="persona" src={Persona} width="auto" height="360px" />
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
      </div>
    </>
  );
};

export default Avatar;
