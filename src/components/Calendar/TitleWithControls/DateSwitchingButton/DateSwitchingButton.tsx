import { ReactComponent as ControlIcon } from '@/assets/icons/prev.svg';

import StyledButton from './styled';

interface IComponentProps {
  disabled: boolean;
  onClick: () => void;
}

const DateSwitchingButton: React.FC<IComponentProps> = ({ disabled, onClick }) => (
  <StyledButton type="button" onClick={onClick} disabled={disabled}>
    <ControlIcon />
  </StyledButton>
);

export default DateSwitchingButton;
