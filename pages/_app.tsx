import App, { AppProps } from 'next/app';
import React, { FC, Fragment, CSSProperties } from 'react';

import { useState, useEffect } from "react";
import { Theme } from "components";

export type Props = AppProps

export type ThemeCSSProperties = CSSProperties & any

export const Root: FC<Props> = ({ pageProps, Component }) => {
    const [loading, setLoading] = useState(false);

    return (
      <Theme loading={false}>
          <Component {...pageProps} />
      </Theme>
    );
};

/*Layout.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};*/

export default Root;