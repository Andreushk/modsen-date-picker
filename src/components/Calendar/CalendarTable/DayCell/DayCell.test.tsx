import { render } from '@testing-library/react';

import { withTheme } from '@/utils/helpers';

import DayCell from './DayCell';

describe('DayCell component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(
      withTheme(
        <DayCell
          date={new Date(2024, 6, 19)}
          variant="default"
          disabled={false}
          isWeekend={false}
          isHoliday={false}
          isWithTasks={false}
        />,
      ),
    );
    expect(getByText('19')).toBeInTheDocument();
  });
});
