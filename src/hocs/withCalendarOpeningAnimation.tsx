import { IDatePickerProps } from '@/components/DatePicker/DatePicker';

const withCalendarOpeningAnimation =
  () =>
  <P extends IDatePickerProps>(
    WrappedComponent: React.FC<P>,
  ): React.FC<Omit<P, 'withCalendarOpeningAnimation'>> =>
  (props: Omit<P, 'withCalendarOpeningAnimation'>) => (
    <WrappedComponent {...(props as P)} withCalendarOpeningAnimation />
  );

export default withCalendarOpeningAnimation;
