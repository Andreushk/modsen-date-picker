import { ReactComponent as FireIcon } from '@/assets/icons/fire.svg';
import { ReactComponent as TrashIcon } from '@/assets/icons/trash.svg';

import { StyledButton, StyledContainer } from './styled';

interface IComponentProps {
  isImportant: boolean;
  onImportantButtonClick: () => void;
  onDeleteButtonClick: () => void;
}

const Controls: React.FC<IComponentProps> = ({
  isImportant,
  onDeleteButtonClick,
  onImportantButtonClick,
}) => (
  <StyledContainer $isImportant={isImportant}>
    <StyledButton type="button" onClick={onImportantButtonClick}>
      <FireIcon />
    </StyledButton>
    <StyledButton type="button" onClick={onDeleteButtonClick}>
      <TrashIcon />
    </StyledButton>
  </StyledContainer>
);

export default Controls;
