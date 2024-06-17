import { IDatePickerProps } from '@/components/DatePicker/types';

const NO_LABEL =
  'You are using the "withInputLabel" decorator, but have not provided the necessary information to it. Pass to it the label value in string format. ';

const withInputLabel = (label: string) => {
  if (!label) {
    throw new Error(NO_LABEL);
  }

  return <P extends IDatePickerProps>(
      WrappedComponent: React.FC<P>,
    ): React.FC<Omit<P, 'inputLabel'>> =>
    (props: Omit<P, 'inputLabel'>) => <WrappedComponent {...(props as P)} inputLabel={label} />;
};

export default withInputLabel;
