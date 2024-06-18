import { IDatePickerProps } from '@/components/DatePicker/types';

const withWeekends =
  () =>
  <P extends IDatePickerProps>(
    WrappedComponent: React.FC<P>,
  ): React.FC<Omit<P, 'isWithWeekends'>> =>
  (props: Omit<P, 'isWithWeekends'>) => <WrappedComponent {...(props as P)} isWithWeekends />;

export default withWeekends;
