import { ComplexStyleRule, StyleRule } from '@vanilla-extract/css';

interface Media {
  tablet?: ComplexStyleRule;
  desktop?: ComplexStyleRule;
}

export const responsiveStyle = ({ tablet = {}, desktop = {} }: Media) =>
  ({
    '@media': {
      'screen and (min-width: 768px)': tablet,
      'screen and (min-width: 1024px)': desktop,
    },
  }) as StyleRule;
