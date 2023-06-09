'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import { GlobalStyles } from '../styles/globalStyles';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <React.Fragment>{styles}</React.Fragment>;
  });

  if (typeof window !== 'undefined')
    return <React.Fragment>{children}</React.Fragment>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <GlobalStyles />
      {children}
    </StyleSheetManager>
  );
}
