import { ReactComponent as ControlIcon } from '@/assets/icons/prev.svg';

import StyledButton from './styled';

export const DATE_SWITCHING_BUTTON_TEST_ID = 'date-picker-date-switching';

interface IComponentProps {
  disabled: boolean;
  onClick: () => void;
}

const DateSwitchingButton: React.FC<IComponentProps> = ({ disabled, onClick }) => (
  <StyledButton
    type="button"
    onClick={onClick}
    disabled={disabled}
    data-testid={DATE_SWITCHING_BUTTON_TEST_ID}
  >
    <ControlIcon />
  </StyledButton>
);

export default DateSwitchingButton;
