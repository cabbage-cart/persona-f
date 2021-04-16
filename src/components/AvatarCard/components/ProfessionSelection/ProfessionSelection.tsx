import React, { FC } from 'react';
import { Professions } from '../../../../shared';
import Button from '../Button';
import Icon4 from '../../assets/icon4.svg';
import Icon5 from '../../assets/icon5.svg';
import { ProfessionService } from '../../../../services';

type Props = {
  profession: Professions;
};

const ProfessionSelection: FC<Props> = ({ profession }: Props) => {
  const assignProfession = (_profession: Professions) => (event: MouseEvent): void => {
    event.preventDefault();
    const newProfession = _profession === profession ? '' : _profession;
    ProfessionService.setState(newProfession);
  };

  return (
    <>
      <Button
        animation="slideInLeft"
        label={
          <>
            <img width="40px" height="40px" src={Icon4} alt="button-icon" />
          </>
        }
        style={{
          border: profession === 'plumber' ? '1px solid rgba(0,0,0,0)' : '1px solid #ccc',
          backgroundColor: profession === 'plumber' ? 'rgba(243, 82, 68, .5)' : 'unset',
        }}
        onClick={assignProfession('plumber')}
        width={50}
        height={60}
      />
      <Button
        animation="slideInRight"
        label={
          <>
            <img width="40px" height="40px" src={Icon5} alt="button-icon" />
          </>
        }
        style={{
          border: profession === 'mechanic' ? '1px solid rgba(0,0,0,0)' : '1px solid #ccc',
          backgroundColor: profession === 'mechanic' ? 'rgba(10, 74, 98, .5)' : 'unset',
        }}
        onClick={assignProfession('mechanic')}
        width={50}
        height={60}
      />
    </>
  );
};

export default ProfessionSelection;
