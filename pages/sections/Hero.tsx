import React, { FC } from "react";
import { Typed } from "components/Typed";
import './Hero.scss';

export type HeroProps = {
  content: string[]
  heroTitle: string
}

export const Hero: FC<HeroProps> = ({ content, heroTitle }) => {

  return (
    <div className="hero__content">
      <h1 dangerouslySetInnerHTML={{ __html: heroTitle }}>
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

export default () => <h1>This is the 404 page</h1>