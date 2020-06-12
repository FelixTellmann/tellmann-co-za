import App, { AppProps } from 'next/app';
import React, { FC, Fragment, CSSProperties, useRef } from 'react';
import { Section } from './sections/Section';

import 'styles/reset.scss';
import 'styles/theme.scss';
import 'styles/typography.scss';

import { useState } from "react";
import { Border } from "components";

export type Props = AppProps

export const Root: FC<Props> = ({ pageProps, Component }) => {
  const [loading, setLoading] = useState(false);

  const header = {
    logo: {
      src: '/logo.svg',
      link: '#home',
    },
    navItems: [
      {
        link: '#portfolio',
        title: 'Portfolio',
      },
      {
        link: '#contact',
        title: 'Contact',
      },
    ],
    icons: [
      {
        link: '//wa.me/27763934356?text=Hi%2C%20I%27m%20interested%20in%20your%20product.',
        src: 'IoLogoWhatsapp',
      },
    ],

  };

  return (
    <>
      <Border loading={loading} width="7px" duration={3} />
      <Section>
        <Section.Header border position="sticky" data={header} className="header" />
      </Section>
      <main className="page">
        <Component {...pageProps} />
      </main>
    </>
  );
};

/*Layout.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};*/

export default Root;