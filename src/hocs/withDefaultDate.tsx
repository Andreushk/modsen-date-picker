import { IDatePickerProps } from '@/components/DatePicker/types';

const withDefaultDate =
  (dateString: string) =>
  <P extends IDatePickerProps>(
    WrappedComponent: React.FC<P>,
  ): React.FC<Omit<P, 'inputDefaultDateValue'>> =>
  (props: Omit<P, 'inputDefaultDateValue'>) => (
    <WrappedComponent {...(props as P)} inputDefaultDateValue={dateString} />
  );

export default withDefaultDate;
