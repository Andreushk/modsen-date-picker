import { IDatePickerProps } from '@/components/DatePicker/types';

const withCalendarOpeningAnimation =
  () =>
  <P extends IDatePickerProps>(WrappedComponent: React.FC<P>): React.FC<P> =>
  (props: P) => <WrappedComponent {...props} withCalendarOpeningAnimation />;

export default withCalendarOpeningAnimation;
