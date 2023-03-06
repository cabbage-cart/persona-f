import React, { FunctionComponent } from 'react';

type TooltipProps = {
  tooltip: string;
  children: React.ReactNode;
};

const Tooltip: FunctionComponent<TooltipProps> = ({ tooltip, children }: TooltipProps) => {
  return <span className="tooltip">
    {children}
    <span className="tooltiptext">{tooltip}</span>
  </span>;
};

export default Tooltip;
