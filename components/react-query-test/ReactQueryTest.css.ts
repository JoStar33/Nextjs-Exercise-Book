import { style } from '@vanilla-extract/css';

const reactQueryTestStyle = {
  main: style({
    height: '100vh',
  }),
  card: style({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  }),
  cardImage: style({
    width: '300px',
    aspectRatio: 1,
    objectFit: 'fill',
  }),
  cardInfoContainer: style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  }),
};

export default reactQueryTestStyle;
