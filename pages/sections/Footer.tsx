import { FC } from "react";

export type FooterProps = {
  test?: string
}
export const Footer: FC<FooterProps> = ({ test }) => {
  return <div className="footer">
    footer {test}
  </div>;
};