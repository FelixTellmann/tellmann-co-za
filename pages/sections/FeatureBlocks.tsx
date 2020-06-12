import React, { FC } from "react";
import './FeatureBlocks.scss';

export type FeatureBlocksProps = {
  content?: string
}

export const FeatureBlocks: FC<FeatureBlocksProps> = ({ content }) => {

  return (
    <div className="feature">
      <h2>We are dedicated in helping <span className="highlight">you</span> develop an attractive, simple to navigate store that will have customers purchasing your goods online.</h2>
    </div>
  );
};