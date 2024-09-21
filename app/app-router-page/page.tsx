import { Metadata } from 'next/types';
import React from 'react';
import AppRouterPageContainer from '@/containers/app-router-page';

export async function generateMetadata(): Promise<Metadata> {
  // 메타 데이터 생성
  return {
    title: '테스트 제목',
    description: '내용 생성',
  };
}

export default function AppRouterPage() {
  return <AppRouterPageContainer />;
}
