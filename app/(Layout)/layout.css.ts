import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

const appLayoutStyle = {
  main: style({
    backgroundColor: vars.color.white,
    height: '100%',
  }),
  header: style({
    height: '60px',
    width: '100%',
    backgroundColor: vars.color.red,
    borderBottom: `1px solid ${vars.color.black}`,
  }),
  body: style({
    width: '100%',
    height: 'calc(100dvh) - 120px',
  }),
  bottom: style({
    height: '60px',
    width: '100%',
    borderTop: `1px solid ${vars.color.black}`,
  }),
};

export default appLayoutStyle;
