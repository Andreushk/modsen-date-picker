import { IDatePickerProps } from '@/components/DatePicker/types';

const withWeekends =
  () =>
  <P extends IDatePickerProps>(WrappedComponent: React.FC<P>): React.FC<P> =>
  (props: P) => <WrappedComponent {...props} isWithWeekends />;

export default withWeekends;
