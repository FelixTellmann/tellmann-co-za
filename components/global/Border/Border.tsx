import React, { FC, useState, useEffect } from 'react';
import './Border.scss';

type BorderProps = {
  loading: boolean
  duration: number
  width: string
}

export const Border: FC<BorderProps> = ({ loading, duration, width }) => {
  const [loop, setLoop] = useState(loading ? 'infinite' : 1);
  const style: any = {
    '--border-width': `${width}`,
    '--border-color': `var(--color-accent)`,
    '--border-animation-delay': `${-duration / 2}s`,
    '--border-animation-duration': `${duration}s`,
    '--border-animation-loop': `${loop}`,
  };

  const updateLoadingStopper = (e) => {
    loading || setLoop(e.elapsedTime / duration);
  };

  useEffect(() => setLoop(loading ? 'infinite' : loop));


  return (
    <div style={style} className="border" onAnimationIteration={updateLoadingStopper} />
  );
};