import { useCallback, useEffect, useState } from 'react';

import { OutsideClickHandler } from '@/components';

import { StyledContainer, StyledInput, StyledSaveButton } from './styled';

export const TASK_INPUT_TEST_ID = 'date-picker-add-task-input';
export const SAVE_NEW_TASK_BUTTON_TEST_ID = 'date-picker-save-task-button';
const SAVE_BUTTON_VALUE = 'Save';

interface IComponentProps {
  onClose: () => void;
  onTaskSave: (task: string) => void;
}

const TaskInput: React.FC<IComponentProps> = ({ onClose, onTaskSave }) => {
  const [value, setValue] = useState<string>('');

  const handleKeyup = useCallback(
    (e: KeyboardEvent): void => {
      if (e.code === 'Enter' && value.trim().length > 5) {
        onTaskSave(value.trim());
      }
    },
    [value, onTaskSave],
  );

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup);

    return () => {
      document.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup]);

  const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue: string = e.target.value;
    setValue(newValue);
  };

  const handleSaveClick = (): void => {
    const task: string = value.trim();
    onTaskSave(task);
  };

  return (
    <OutsideClickHandler onOutsideClick={onClose} isWithCapturePhase>
      <StyledContainer>
        <StyledInput
          type="text"
          value={value}
          autoFocus
          onChange={handleInputChanges}
          data-testid={TASK_INPUT_TEST_ID}
        />
        <StyledSaveButton
          disabled={value.trim().length < 6}
          onClick={handleSaveClick}
          data-testid={SAVE_NEW_TASK_BUTTON_TEST_ID}
        >
          {SAVE_BUTTON_VALUE}
        </StyledSaveButton>
      </StyledContainer>
    </OutsideClickHandler>
  );
};

export default TaskInput;
