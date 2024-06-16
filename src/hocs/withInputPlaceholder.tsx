import { IDatePickerProps } from '@/components/DatePicker/types';

const withInputPlaceholder =
  (placeholder: string) =>
  <P extends IDatePickerProps>(
    WrappedComponent: React.FC<P>,
  ): React.FC<Omit<P, 'inputPlaceholder'>> =>
  (props: Omit<P, 'inputPlaceholder'>) => (
    <WrappedComponent {...(props as P)} inputPlaceholder={placeholder} />
  );

export default withInputPlaceholder;
