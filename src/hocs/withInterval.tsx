import { IDatePickerProps } from '@/components/DatePicker/types';

const withInputPlaceholder =
  (
    fromInputLabel?: string,
    toInputLabel?: string,
    fromInputPlaceholder?: string,
    toInputPlaceholder?: string,
  ) =>
  <P extends IDatePickerProps>(
    WrappedComponent: React.FC<P>,
  ): React.FC<
    Omit<
      P,
      'withInterval' | 'inputLabel' | 'inputPlaceholder' | 'toInputLabel' | 'toInputPlaceholder'
    >
  > =>
  (
    props: Omit<
      P,
      'withInterval' | 'inputLabel' | 'inputPlaceholder' | 'toInputLabel' | 'toInputPlaceholder'
    >,
  ) => (
    <WrappedComponent
      {...(props as P)}
      withInterval
      inputLabel={fromInputLabel}
      inputPlaceholder={fromInputPlaceholder}
      toInputLabel={toInputLabel}
      toInputPlaceholder={toInputPlaceholder}
    />
  );

export default withInputPlaceholder;
