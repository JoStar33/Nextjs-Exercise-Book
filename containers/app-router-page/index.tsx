'use client';

import React from 'react';
import AppRouter from '@/components/app-router-page';

export default function AppRouterPageContainer() {
  const [numberState, setNumberState] = React.useState<number[]>([]);

  React.useEffect(function myUseEffect() {
    setNumberState([1248516, 1234, 151325, 124]);
  }, []);

  return <AppRouter numberState={numberState} />;
}
