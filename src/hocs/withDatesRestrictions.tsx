import { IDatePickerProps } from '@/components/DatePicker/types';
import { HOCDateFormat } from '@/types/hocs';

const withDatesRestrictions = (fromDates: HOCDateFormat, toDates: HOCDateFormat) => {
  if (!fromDates || !toDates) {
    throw new Error(
      'Provide the start of the calendar countdown and the end of the countdown to the "withDatesRestrictions" decorator. Format: [YYYYY, MM, DD].',
    );
  }

  return <P extends IDatePickerProps>(
      WrappedComponent: React.FC<P>,
    ): React.FC<Omit<P, 'dateRestrictions'>> =>
    (props: Omit<P, 'dateRestrictions'>) => (
      <WrappedComponent {...(props as P)} dateRestrictions={[fromDates, toDates]} />
    );
};

export default withDatesRestrictions;
