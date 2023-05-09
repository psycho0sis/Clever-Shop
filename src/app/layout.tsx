import { spartanFont } from '../styles/font';
import StyledComponentsRegistry from './registry';

import './globals.css';

export const metadata = {
  title: 'Clever Shop',
  description: 'Online Store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={spartanFont.className}>
        {' '}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
