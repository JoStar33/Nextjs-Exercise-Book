import { styled } from 'styled-components';

const S = {
  ReactQueryTest: styled.div`
    height: 100vh;
    .card {
      width: 100%;
      display: flex;
      flex-direction: row;
      img {
        width: 300px;
        height: 300px;
        object-fit: fill;
      }
      .card-info__container {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }
  `,
};

export default S;
