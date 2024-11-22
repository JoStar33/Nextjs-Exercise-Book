'use client';

import React from 'react';
import S from './layout.style';

interface Props {
  children: React.ReactNode;
}

export default function AppRouterPageLayout({ children }: Props) {
  return <S.NoLayout>{children}</S.NoLayout>;
}
