import { IDatePickerProps } from '@/components/DatePicker/types';
import HOCDateFormat from '@/types/hocs';
import { formatDateToString } from '@/utils/helpers';

const NO_DEFAULT_DATE =
  'You are using the "withDefaultDate" decorator, but have not provided the necessary date information to it. Pass the date value to it in the format [YYYYY, MM, DD].';

const withDefaultDate = (date: HOCDateFormat) => {
  if (!date) {
    throw new Error(NO_DEFAULT_DATE);
  }

  return <P extends IDatePickerProps>(
    WrappedComponent: React.FC<P>,
  ): React.FC<Omit<P, 'inputDefaultDateValue'>> => {
    const [year, month, day] = date;

    return (props: Omit<P, 'inputDefaultDateValue'>) => (
      <WrappedComponent
        {...(props as P)}
        inputDefaultDateValue={formatDateToString(new Date(year, month - 1, day))}
      />
    );
  };
};

export default withDefaultDate;
