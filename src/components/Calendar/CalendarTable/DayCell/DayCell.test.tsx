import { render } from '@testing-library/react';

import withTheme from '@/utils/helpers/withTheme';

import DayCell from './DayCell';

describe('DayCell component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(withTheme(<DayCell day={5} selected={false} disabled={false} />));
    expect(getByText('5')).toBeInTheDocument();
  });
});
