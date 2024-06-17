import { IDatePickerProps } from '@/components/DatePicker/types';

const withWeeksFromSunday =
  () =>
  <P extends IDatePickerProps>(
    WrappedComponent: React.FC<P>,
  ): React.FC<Omit<P, 'isWeeksStartsFromSunday'>> =>
  (props: Omit<P, 'isWeeksStartsFromSunday'>) => (
    <WrappedComponent {...(props as P)} isWeeksStartsFromSunday />
  );

export default withWeeksFromSunday;
