import { IDatePickerProps } from '@/components/DatePicker/types';

const withWeeksCalendar =
  () =>
  <P extends IDatePickerProps>(WrappedComponent: React.FC<P>): React.FC<P> =>
  (props: P) => <WrappedComponent {...props} isWithWeekends />;

export default withWeeksCalendar;
