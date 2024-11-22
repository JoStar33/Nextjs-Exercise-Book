'use client';

import React from 'react';
import S from './layout.style';

interface Props {
  children: React.ReactNode;
}

export default function AppRouterPageLayout({ children }: Props) {
  return (
    <S.AppRouterPageLayout>
      <div className="header">헤더</div>
      <div className="body">{children}</div>
      <div className="bottom">바텀</div>
    </S.AppRouterPageLayout>
  );
}
