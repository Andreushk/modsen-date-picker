import { IDatePickerProps } from '@/components/DatePicker/types';

const NO_CALLBACK =
  'You are using the "withOnLastDateSelect" decorator, but have not provided the necessary callback function onto it. Pass callback function which will accept date string value.';

const withOnLastDateSelect = (onLastDateSelect: (selectedDate: string) => void) => {
  if (!onLastDateSelect) {
    throw new Error(NO_CALLBACK);
  }

  return <P extends IDatePickerProps>(WrappedComponent: React.FC<P>): React.FC<P> =>
    (props: P) => <WrappedComponent {...props} onLastDateSelect={onLastDateSelect} />;
};

export default withOnLastDateSelect;
