import { ReactComponent as FireIcon } from '@/assets/icons/fire.svg';
import { ReactComponent as TrashIcon } from '@/assets/icons/trash.svg';

import { StyledButton, StyledContainer } from './styled';

export const REMOVE_TASK_BUTTON_TEST_ID = 'date-picker-remove-task';
export const PRIORITY_TASK_BUTTON_TEST_ID = 'date-picker-prioritize-task';

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
    <StyledButton
      type="button"
      onClick={onImportantButtonClick}
      data-testid={PRIORITY_TASK_BUTTON_TEST_ID}
    >
      <FireIcon />
    </StyledButton>
    <StyledButton
      type="button"
      onClick={onDeleteButtonClick}
      data-testid={REMOVE_TASK_BUTTON_TEST_ID}
    >
      <TrashIcon />
    </StyledButton>
  </StyledContainer>
);

export default Controls;
