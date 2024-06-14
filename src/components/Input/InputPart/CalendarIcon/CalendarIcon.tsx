import { ReactComponent as Icon } from '@/assets/icons/calendar.svg';

const CalendarIcon: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const button = e.target as HTMLButtonElement;
    button.blur();
  };

  return (
    <button type="button" onClick={handleClick}>
      <Icon />
    </button>
  );
};

export default CalendarIcon;
