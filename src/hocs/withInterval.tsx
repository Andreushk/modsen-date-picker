import { IDatePickerProps } from '@/components/DatePicker/types';

const withInputPlaceholder =
  (
    fromInputLabel?: string,
    toInputLabel?: string,
    fromInputPlaceholder?: string,
    toInputPlaceholder?: string,
  ) =>
  <P extends IDatePickerProps>(WrappedComponent: React.FC<P>): React.FC<P> =>
  (props) => (
    <WrappedComponent
      {...props}
      withInterval
      inputLabel={fromInputLabel}
      inputPlaceholder={fromInputPlaceholder}
      toInputLabel={toInputLabel}
      toInputPlaceholder={toInputPlaceholder}
    />
  );

export default withInputPlaceholder;
