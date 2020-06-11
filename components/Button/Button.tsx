import React, { FC } from "react";
import './Button.scss';

type ButtonProps = {
    className: string
}

export const Button: FC<ButtonProps> = ({ children, className = '' }) => {
    return (
      <div className={`button ${className}`}>
          <span className="button__content">
              {children}
          </span>
      </div>
    );
};