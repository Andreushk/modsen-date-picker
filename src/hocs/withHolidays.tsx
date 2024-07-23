import { IDatePickerProps } from '@/components/DatePicker/types';

const NO_COUNTRY_CODE =
  'You did not provide a country code to the "withHolidays" decorator. Example: "US".';

const withHolidays = (countryCode: string) => {
  if (!countryCode) {
    throw new Error(NO_COUNTRY_CODE);
  }

  return <P extends IDatePickerProps>(WrappedComponent: React.FC<P>): React.FC<P> =>
    (props: P) => <WrappedComponent {...props} countryCodeForHolidays={countryCode} />;
};

export default withHolidays;
