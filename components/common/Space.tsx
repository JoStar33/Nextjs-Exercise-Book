import styled from 'styled-components';

interface Props {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export default function Space({ top, left, bottom, right }: Props) {
  return <S.Space top={top} left={left} bottom={bottom} right={right} />;
}

const S = {
  Space: styled.div<Props>`
    margin-left: ${(props) => props.left};
    margin-top: ${(props) => props.top};
    margin-right: ${(props) => props.right};
    margin-bottom: ${(props) => props.bottom};
  `,
};
