import Button from '../Button/Button';
import List from './List/List';
import StyledContainer from './styled';
import TitlePart from './TitlePart/TitlePart';

const CLOSE_BUTTON_VALUE = 'Close';

interface IComponentProps {
  date: Date;
  onClose: () => void;
}

const Tasks: React.FC<IComponentProps> = ({ date, onClose }) => (
  <StyledContainer>
    <TitlePart date={date} />
    <List date={date} />
    <Button onClick={onClose}>{CLOSE_BUTTON_VALUE}</Button>
  </StyledContainer>
);

export default Tasks;
