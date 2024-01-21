import styles from './serverComponent.module.css';
// 참고로 use client를 작성하지않은 컴포넌트는 기본적으로 서버 컴포넌트이다.
// 흥미로운 점은 서버 컴포넌트를 온전히 유지하기 위해서는 css & 테일윈드 & scss를 사용해야 한다는점.
// styled-components와 같은 css-in-js 라이브러리들은 서버컴포넌트 사용이 불가능하다.
export default function ServerComponent() {
  return (
    <div className={styles.server_container}>
      <p className={styles.server_container__text}>서버 컴포넌트</p>
    </div>
  );
}
