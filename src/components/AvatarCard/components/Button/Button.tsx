import React, { CSSProperties, FC } from 'react';
import clsx from 'clsx';
import './Button.scoped.css';

type Props = {
  kind?: 'circle' | 'default' | 'text';
  color?: 'primary' | 'secondary';
  width?: number;
  height?: number;
  label: string;
};

const defaultDrops: Partial<Props> = {
  kind: 'default',
  color: 'primary',
  width: 95,
  height: 32,
};

const Button: FC<Props> = ({ kind, color, width, height, label }: Props) => {
  const styles = {
    '--width': `${width}px`,
    '--height': `${kind === 'circle' ? width : height}px`,
    '--bgColor': color === 'primary' ? '#304FFE' : '#fff',
  } as CSSProperties;

  return (
    <button
      type="button"
      style={styles}
      className={clsx('btn-wrapper', {
        'btn-circle': kind === 'circle',
        'btn-default': kind === 'default',
        'btn-text': kind === 'text',
      })}
    >
      {label}
    </button>
  );
};

Button.defaultProps = defaultDrops;

export default Button;
