import { IDatePickerProps } from '@/components/DatePicker/types';

const NO_PLACEHOLDER =
  'You are using the "withInputPlaceholder" decorator, but have not provided the necessary information to it. Pass a value in string format to it. ';

const withInputPlaceholder = (placeholder: string) => {
  if (!placeholder) {
    throw new Error(NO_PLACEHOLDER);
  }

  return <P extends IDatePickerProps>(
      WrappedComponent: React.FC<P>,
    ): React.FC<Omit<P, 'inputPlaceholder'>> =>
    (props: Omit<P, 'inputPlaceholder'>) => (
      <WrappedComponent {...(props as P)} inputPlaceholder={placeholder} />
    );
};

export default withInputPlaceholder;
