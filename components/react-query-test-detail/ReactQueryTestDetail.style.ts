import { styled } from 'styled-components';
import { flexCenter } from '@/styles/mixins';

const S = {
  ReactQueryTestDetail: styled.div`
    ${flexCenter}
    flex-direction: column;
    img {
      object-fit: contain;
    }
  `,
};

export default S;
