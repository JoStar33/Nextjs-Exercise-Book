'use client';

import S from './error.style';

// Next 14버전에서는 다음과 같이 error페이지를 별도로 만들면, isError와 같이 직관적이지 못한 선언방식을 거치지 않더라도,
// 에러가 발생했을때 아래 페이지가 노출되게 된다. 이는 loading도 마찬가지.
export default function Error() {
  return <S.Error>Error</S.Error>;
}
