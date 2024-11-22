'use client';

import React from 'react';
import S from './layout.style';

interface Props {
  children: React.ReactNode;
}

export default function AppRouterPageLayout({ children }: Props) {
  return (
    <S.AppRouterPageLayout>
      <div className="header" />
      <div className="body">{children}</div>
      <div className="bottom" />
    </S.AppRouterPageLayout>
  );
}
