/* eslint-disable no-nested-ternary */
import React, { FC, MouseEvent } from 'react';
import clsx from 'clsx';
import './AwardsSelect.scoped.css';
import { AwardsType } from '../../../../shared';
import { AwardsService } from '../../../../services';

type Props = {
  award: AwardsType;
};

const AwardsSelect: FC<Props> = ({ award }: Props) => {
  const assignNewAward = (_award: AwardsType) => (event: MouseEvent): void => {
    event.preventDefault();
    const newAward = _award === award ? '' : _award;
    AwardsService.setAward(newAward);
  };

  return (
    <div className="awards-button-holder">
      <span
        style={
          {
            '--borderColor': award === 'most-hired' ? '#4a3c9a' : award === 'top-rated' ? '#0091ea' : 'unset',
          } as React.CSSProperties
        }
        className={clsx('awards-selected-indicator', {
          'item-selected': Boolean(award),
          'most-hired': award === 'most-hired',
          'top-rated': award === 'top-rated',
        })}
      />
      <button className="awards-button" type="button" onClick={assignNewAward('most-hired')}>
        <div className="awards-most-hired" />
      </button>
      <button className="awards-button" type="button" onClick={assignNewAward('top-rated')}>
        <div className="awards-top-rated" />
      </button>
    </div>
  );
};

export default AwardsSelect;
