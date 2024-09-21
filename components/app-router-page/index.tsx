'use client';

import React from 'react';
import styled from 'styled-components';

interface Props {
  numberState: number[];
}

export default function AppRouter({ numberState }: Props) {
  return (
    <S.AppRouter>
      {numberState.map((element) => (
        <p key={element}>{element}</p>
      ))}
    </S.AppRouter>
  );
}

const S = {
  AppRouter: styled.div`
    .item {
      width: 200px;
    }
  `,
};
