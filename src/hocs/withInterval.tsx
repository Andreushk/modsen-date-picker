import { IDatePickerProps } from '@/components/DatePicker/types';

const withInputPlaceholder =
  () =>
  <P extends IDatePickerProps>(WrappedComponent: React.FC<P>): React.FC<Omit<P, 'withInterval'>> =>
  (props: Omit<P, 'withInterval'>) => <WrappedComponent {...(props as P)} withInterval />;

export default withInputPlaceholder;
