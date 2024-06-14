import { ReactComponent as Icon } from '@/assets/icons/calendar.svg';

interface IComponentProps {
  onClick: () => void;
}

const CalendarIcon: React.FC<IComponentProps> = ({ onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const button = e.target as HTMLButtonElement;
    button.blur();
    onClick();
  };

  return (
    <button type="button" onClick={handleClick}>
      <Icon />
    </button>
  );
};

export default CalendarIcon;
