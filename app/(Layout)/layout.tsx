import React from 'react';
import appLayoutStyle from './layout.css';

interface Props {
  children: React.ReactNode;
}

export default function AppRouterPageLayout({ children }: Props) {
  return (
    <div className={appLayoutStyle.main}>
      <div className={appLayoutStyle.header} />
      <div className={appLayoutStyle.body}>{children}</div>
      <div className={appLayoutStyle.bottom} />
    </div>
  );
}
