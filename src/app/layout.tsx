import type { Metadata } from 'next';

import { Container } from 'components/layout/container';
import { Header } from 'components/layout/header';
import { TopBar } from 'components/layout/header/top-bar';

import { spartanFont } from '../styles/font';
import StyledComponentsRegistry from './registry';

import './globals.css';

export const metadata: Metadata = {
  title: 'Clever Shop',
  description: 'Online Store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={spartanFont.className}>
        <StyledComponentsRegistry>
          <TopBar />
          <Container>
            <Header />
          </Container>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
