import styled from 'styled-components';

const S = {
  AppRouterPageLayout: styled.div`
    background-color: white;
    height: 100%;
    .header {
      height: 60px;
      width: 100%;
      background-color: red;
      border-bottom: 1px solid black;
    }
    .body {
      width: 100%;
      height: calc(100dvh - 120px);
    }
    .bottom {
      height: 60px;
      width: 100%;
      border-top: 1px solid black;
    }
  `,
};

export default S;
