import { IDatePickerProps } from '@/components/DatePicker/types';

const withDefaultIntervalDates =
  (from?: string, to?: string) =>
  <P extends IDatePickerProps>(
    WrappedComponent: React.FC<P>,
  ): React.FC<Omit<P, 'inputDefaultDateValue' | 'toInputDefaultDateValue'>> =>
  (props: Omit<P, 'inputDefaultDateValue' | 'toInputDefaultDateValue'>) => (
    <WrappedComponent {...(props as P)} inputDefaultDateValue={from} toInputDefaultDateValue={to} />
  );

export default withDefaultIntervalDates;
