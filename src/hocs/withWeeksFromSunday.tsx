import { IDatePickerProps } from '@/components/DatePicker/types';

const withWeeksFromSunday =
  () =>
  <P extends IDatePickerProps>(WrappedComponent: React.FC<P>): React.FC<P> =>
  (props: P) => <WrappedComponent {...props} isWeeksStartsFromSunday />;

export default withWeeksFromSunday;
