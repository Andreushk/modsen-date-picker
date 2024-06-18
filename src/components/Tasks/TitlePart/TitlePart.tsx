import Title from '@/components/Title/Title';
import { extractDateParts } from '@/utils/helpers';

import StyledContainer from './styled';

interface IComponentProps {
  date: Date;
}

const TitlePart: React.FC<IComponentProps> = ({ date }) => {
  const { year, month, day } = extractDateParts(date);
  return (
    <StyledContainer>
      <Title $variant="medium" $color="dark">
        {`${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}`}
      </Title>
    </StyledContainer>
  );
};

export default TitlePart;
