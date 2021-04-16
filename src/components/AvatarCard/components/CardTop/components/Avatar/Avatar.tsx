/* eslint-disable no-nested-ternary */
import React, { FC, useEffect, useState, MouseEvent } from 'react';
import clsx from 'clsx';
import HardHat from '../../../../assets/hardhat.svg';
import Dungarees from '../../../../assets/dungarees.svg';
import MechanicHat from '../../../../assets/mechanic-hat.svg';
import Verfied from '../../../../assets/verified.svg';
import Beard from '../../../../assets/beard.svg';
import MostHiredIcon from '../../../../assets/most-hired-icon.svg';
import TopRatedIcon from '../../../../assets/top-rated-icon.svg';
import './Avatar.scoped.css';
import { AvatarState, AwardsType, Professions } from '../../../../../../shared';
import { ProfessionService } from '../../../../../../services';
import AvatarImage from '../AvatarImage';

type Props = {
  avatarStates: AvatarState;
  award: AwardsType;
};

const Avatar: FC<Props> = ({ avatarStates: { online, verified, newUser }, award }: Props) => {
  const [profession, setProfession] = useState<Professions>('');
  const [clicked, setClicked] = useState<boolean>(false);
  const [showAward, setShowAward] = useState<boolean>(false);

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

  const showAwardIcon = (event: MouseEvent): void => {
    event.preventDefault();

    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 900);
    if (showAward) return;
    setShowAward(true);

    setTimeout(() => {
      setShowAward(false);
    }, 1500);
  };

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
        <img
          alt="top-rated"
          src={TopRatedIcon}
          className={clsx('top-rated-award-border', {
            show: showAward && award === 'top-rated',
          })}
        />
        <img
          alt="most-hired"
          src={MostHiredIcon}
          className={clsx('most-hired-award-border', {
            show: showAward && award === 'most-hired',
          })}
        />
        <div
          className={clsx('filter-award', {
            'filter-award-most-hired': showAward && award === 'most-hired',
            'filter-award-top-rated': showAward && award === 'top-rated',
          })}
        />
      </div>
      <button
        onClick={showAwardIcon}
        style={
          {
            '--borderColor': award === 'most-hired' ? '#4a3c9a' : award === 'top-rated' ? '#0091ea' : 'unset',
          } as React.CSSProperties
        }
        className={clsx('award-border', {
          'award-border-show': award,
          'award-border-clicked': clicked,
        })}
        type="button"
      >
        <div />
      </button>
    </>
  );
};

export default Avatar;
