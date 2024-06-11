import { render } from '@testing-library/react';

import Button from './Button';

const TEST_BUTTON_VALUE = 'Test button';

describe('Button component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(<Button>{TEST_BUTTON_VALUE}</Button>);

    expect(getByText(TEST_BUTTON_VALUE)).toBeInTheDocument();
  });
});
