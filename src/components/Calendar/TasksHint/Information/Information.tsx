import { Paragraph, Title } from '@/components';

const TITLE = 'Do you know?';
const MESSAGE = 'You can add a task for some day at the calendar if you press on it for a moment.';

const Information: React.FC = () => (
  <>
    <Title $variant="regular" $color="light">
      {TITLE}
    </Title>
    <Paragraph>{MESSAGE}</Paragraph>
  </>
);

export default Information;
