import React, { FC } from "react";
import './LogoBanner.scss';


type LogoBannerProps = {
  logos: [
    {
      alt?: string
      src: string
    }
  ]
}

export const LogoBanner: FC<LogoBannerProps> = ({ logos }) => {

  return (
    <div className="logo-banner">
      {
        logos.map(({ src, alt }) => {
          return <img className="logo-banner__image" src={src} alt={alt} />;
        })
      }
    </div>
  );
};