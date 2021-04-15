import React, { CSSProperties, FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import './Button.scoped.css';
import { ButtonService } from '../../../../services';

type Props = {
  onClick?: (args: any) => void;
  kind?: 'neu' | 'default' | 'text' | 'neu-circle';
  color?: 'primary' | 'secondary';
  width?: number;
  height?: number;
  label: string | React.ReactNode;
  order?: number;
  active?: boolean;
  style?: React.CSSProperties;
  animation?: 'stagger' | 'slideInRight' | 'slideInLeft';
};

const defaultDrops: Partial<Props> = {
  kind: 'default',
  color: 'primary',
  width: 95,
  height: 32,
  order: 1,
  active: false,
  onClick: (args: any) => void 0,
  style: undefined,
  animation: 'stagger',
};

const Button: FC<Props> = ({ kind, color, width, height, label, order, style, onClick, animation, active }: Props) => {
  const [staggerOut, setStaggerOut] = useState(false);

  useEffect(() => {
    const subscription = ButtonService.getStagger().subscribe((res) => {
      if (staggerOut != res) {
        setStaggerOut(res);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [staggerOut]);

  let styles = {
    '--width': `${width}px`,
    '--height': `${kind === 'neu-circle' ? width : height}px`,
    '--bgColor': color === 'primary' ? '#304FFE' : '#fff',
    '--animation-order': `${order}`,
  } as CSSProperties;

  if (style != null) {
    styles = { ...styles, ...style };
  }

  const isStagger = animation === 'stagger';

  return (
    <button
      type="button"
      onClick={onClick}
      style={styles}
      className={clsx('btn-wrapper', {
        'btn-neu': kind === 'neu',
        'btn-neu-circle': kind === 'neu-circle',
        'btn-default': kind === 'default',
        'btn-text': kind === 'text',
        'btn-stagger-in': isStagger && !staggerOut,
        'btn-stagger-out': isStagger && staggerOut,
        'btn-stagger': isStagger,
        active: Boolean(active),
        'btn-slideInLeft': animation === 'slideInLeft',
        'btn-slideInRight': animation === 'slideInRight',
      })}
    >
      {label}
    </button>
  );
};

Button.defaultProps = defaultDrops;

export default Button;
