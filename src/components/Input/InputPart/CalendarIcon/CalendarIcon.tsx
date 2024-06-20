import { ReactComponent as Icon } from '@/assets/icons/calendar.svg';

export const CALENDAR_ICON_TEST_ID = 'date-picker-calendar-icon';

interface IComponentProps {
  onClick: () => void;
}

const CalendarIcon: React.FC<IComponentProps> = ({ onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    const button = e.target as HTMLButtonElement;
    button.blur();
    onClick();
  };

  return (
    <button type="button" onClick={handleClick} data-testid={CALENDAR_ICON_TEST_ID}>
      <Icon />
    </button>
  );
};

export default CalendarIcon;
