import React, { FC } from 'react';
import { Professions } from '../../../../shared';
import Button from '../Button';
import Icon4 from '../../assets/icon4.svg';
import Icon5 from '../../assets/icon5.svg';
import { ProfessionService } from '../../../../services';

const ProfessionSelection: FC = () => {
  const assignProfession = (_profession: Professions) => (event: MouseEvent): void => {
    event.preventDefault();
    ProfessionService.setState(_profession);
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
        onClick={assignProfession('mechanic')}
        width={50}
        height={60}
      />
    </>
  );
};

export default ProfessionSelection;
