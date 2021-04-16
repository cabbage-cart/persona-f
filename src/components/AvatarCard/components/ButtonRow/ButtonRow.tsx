import React, { FC, MouseEvent } from 'react';
import { ButtonService, StateService } from '../../../../services';
import Button from '../Button';
import Icon1 from '../../assets/icon1.svg';
import Icon2 from '../../assets/icon2.svg';
import Icon3 from '../../assets/icon3.svg';
import { States } from '../../../../shared';

interface Item {
  key: number;
  value: States;
  tooltip: string;
  icon: string;
}

const items: Array<Item> = [
  {
    key: 1,
    value: 'profession',
    tooltip: 'Select profession',
    icon: Icon3,
  },
  {
    key: 2,
    value: 'state',
    tooltip: 'Select avatar states',
    icon: Icon2,
  },
  {
    key: 3,
    value: 'awards',
    tooltip: 'Select awards',
    icon: Icon1,
  },
];

const ButtonRow: FC = () => {
  const assignNewState = (value: States) => (event: MouseEvent) => {
    event.preventDefault();
    ButtonService.setStaggerOut(true);
    setTimeout(() => {
      ButtonService.setStaggerOut(false);
      StateService.setState(value);
    }, 700);
  };
  return (
    <>
      {items.map(({ key, value, icon, tooltip }) => (
        <span className="tooltip" key={key}>
          <Button
            onClick={assignNewState(value)}
            width={50}
            height={60}
            animation="stagger"
            label={
              <>
                <img width="40px" height="40px" src={icon} alt="button-icon" />
              </>
            }
            kind="neu"
            color="secondary"
            order={key}
          />
          <span className="tooltiptext">{tooltip}</span>
        </span>
      ))}
    </>
  );
};

export default ButtonRow;
