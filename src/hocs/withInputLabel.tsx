import { IDatePickerProps } from '@/components/DatePicker/types';

const withInputLabel =
  (label: string) =>
  <P extends IDatePickerProps>(WrappedComponent: React.FC<P>): React.FC<Omit<P, 'inputLabel'>> =>
  (props: Omit<P, 'inputLabel'>) => <WrappedComponent {...(props as P)} inputLabel={label} />;

export default withInputLabel;
