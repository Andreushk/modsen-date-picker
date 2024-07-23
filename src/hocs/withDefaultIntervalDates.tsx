import { IDatePickerProps } from '@/components/DatePicker/types';
import HOCDateFormat from '@/types/hocs';
import { formatDateToString } from '@/utils/helpers';

const withDefaultIntervalDates =
  (from?: HOCDateFormat, to?: HOCDateFormat) =>
  <P extends IDatePickerProps>(WrappedComponent: React.FC<P>): React.FC<P> =>
  (props) => {
    let fromDateString: string | undefined;
    let toDateString: string | undefined;

    if (from) {
      const [year, month, day] = from;
      fromDateString = formatDateToString(new Date(year, month - 1, day));
    }

    if (to) {
      const [year, month, day] = to;
      toDateString = formatDateToString(new Date(year, month - 1, day));
    }

    return (
      <WrappedComponent
        {...props}
        inputDefaultDateValue={fromDateString}
        toInputDefaultDateValue={toDateString}
      />
    );
  };

export default withDefaultIntervalDates;
