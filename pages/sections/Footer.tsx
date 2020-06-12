import React, { FC } from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";

export type FooterProps = {
  data: {
    logo: {
      src: string
      link: string
    },
    navItems: {
      link: string
      title: string
    }[],
    icons: {
      link: string
      src: string
    }[]
  }
}

export const Footer: FC<FooterProps> = ({ data: { logo, navItems, icons } }) => {
  return (
    <footer>
      {/*<Link href={logo.link}>
        <a className="logo">
          <img src={logo.src} alt="logo" />
        </a>
      </Link>*/}
      <nav className="nav">
        {
          navItems.map(navItem => {
            return (
              <Link key={navItem.link} href={navItem.link}>
                <a className="nav__link">{navItem.title}</a>
              </Link>
            );
          })
        }
      </nav>
      <div className="social-icons">
        {
          icons.map(icon => {
            let iconType = icon.src.substr(0, 2).toLowerCase();
            return (
              <Link key={icon.link} href={icon.link}>
                <a className="social-icons__link">
                  {
                    React.createElement(iconType === "io"
                                        ? require("react-icons/io")[icon.src]
                                        : require("react-icons/fa")[icon.src])
                  }
                </a>
              </Link>
            );
          })
        }
      </div>
    </footer>
  );
};