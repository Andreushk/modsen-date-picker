import { IDatePickerProps } from '@/components/DatePicker/types';

const withWeeksCalendar =
  () =>
  <P extends IDatePickerProps>(
    WrappedComponent: React.FC<P>,
  ): React.FC<Omit<P, 'isWeeksCalendar'>> =>
  (props: Omit<P, 'isWeeksCalendar'>) => <WrappedComponent {...(props as P)} isWeeksCalendar />;

export default withWeeksCalendar;
