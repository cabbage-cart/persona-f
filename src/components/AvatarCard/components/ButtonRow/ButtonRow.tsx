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
  icon: string;
}

const items: Array<Item> = [
  {
    key: 1,
    value: 'profession',
    icon: Icon3,
  },
  {
    key: 2,
    value: 'state',
    icon: Icon2,
  },
  {
    key: 3,
    value: 'awards',
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
      {items.map((item) => (
        <Button
          key={item.key}
          onClick={assignNewState(item.value)}
          width={50}
          height={60}
          animation="stagger"
          label={
            <>
              <img width="40px" height="40px" src={item.icon} alt="button-icon" />
            </>
          }
          kind="neu"
          color="secondary"
          order={item.key}
        />
      ))}
    </>
  );
};

export default ButtonRow;
