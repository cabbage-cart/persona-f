import React, { FC } from 'react';
import './CardBottom.scoped.css';

type Props = {
  children: React.ReactNode;
};

const CardBottom: FC<Props> = ({ children }: Props) => {
  return <div className="card-bottom">{children}</div>;
};

export default CardBottom;
