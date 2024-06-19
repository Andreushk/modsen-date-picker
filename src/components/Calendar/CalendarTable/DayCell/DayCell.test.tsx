import { render } from '@testing-library/react';

import { withTheme } from '@/utils/helpers';

import DayCell from './DayCell';

describe('DayCell component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(
      withTheme(
        <DayCell
          date={new Date()}
          variant="default"
          disabled={false}
          isWeekend={false}
          isHoliday={false}
        />,
      ),
    );
    expect(getByText('5')).toBeInTheDocument();
  });
});
