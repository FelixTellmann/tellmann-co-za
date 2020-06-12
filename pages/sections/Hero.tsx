import React, { FC } from "react";
import { Typed } from "components/Typed";
import './Hero.scss';

export type HeroProps = {
  content: string[]
  title: string
}

export const Hero: FC<HeroProps> = ({ content, title }) => {

  return (
    <div className="hero__content">
      <h1 dangerouslySetInnerHTML={{ __html: title }}>
      </h1>
      <h1>
        <Typed content={content}
               typeSpeed={40}
               backSpeed={17}
               backDelay={1850}
               startDelay={1000}
               loop={false}
               cursorChar={'|'} />
      </h1>
    </div>
  );
};