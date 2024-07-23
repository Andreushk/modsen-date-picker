import { IDatePickerProps } from '@/components/DatePicker/types';
import HOCDateFormat from '@/types/hocs';

const NO_RESTRICTIONS_MESSAGE = `You are using the "withDatesRestrictions" decorator, but have not provided it with the necessary information about the restrictions. Pass to it an array with values in the format [[YYYYY, MM, DD], [YYYYY, MM, DD]] `;

const withDatesRestrictions = (fromDates: HOCDateFormat, toDates: HOCDateFormat) => {
  if (!fromDates || !toDates) {
    throw new Error(NO_RESTRICTIONS_MESSAGE);
  }

  return <P extends IDatePickerProps>(WrappedComponent: React.FC<P>): React.FC<P> =>
    (props: P) => {
      const [fromYear, fromMonth, fromDay] = fromDates;
      const [toYear, toMonth, toDay] = toDates;

      return (
        <WrappedComponent
          {...props}
          dateRestrictions={[
            new Date(fromYear, fromMonth - 1, fromDay),
            new Date(toYear, toMonth - 1, toDay),
          ]}
        />
      );
    };
};

export default withDatesRestrictions;
