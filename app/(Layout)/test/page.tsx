import React from 'react';
import TestContainer from '@/containers/test';

export default function TestPage() {
  // use client는 클라이언트 사이드 요소들이 혼재되어있음을 표시함.
  // 서버와 클라이언트 구성 요소 모듈 사이의 경계라는 의미.
  return <TestContainer />;
}
