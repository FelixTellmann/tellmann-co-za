import React, { FC } from "react";
import './TextBlock.scss';

export type FeatureProps = {
  content?: string
}

export const TextBlock: FC<FeatureProps> = ({ content }) => {

  content = content.replace(/classname/gi, 'class');

  return (
    <div className="text-block" dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default () => <h1>This is the 404 page</h1>