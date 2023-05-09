import { spartanFont } from '../styles/font';

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
      <body className={spartanFont.className}>{children}</body>
    </html>
  );
}
