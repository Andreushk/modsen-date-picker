import { IDatePickerProps } from '@/components/DatePicker/types';

const NO_COUNTRY_CODE =
  'You did not provide a starna code to the "withHolidays" decorator. Example: "US".';

const withHolidays = (countryCode: string) => {
  if (!countryCode) {
    throw new Error(NO_COUNTRY_CODE);
  }

  return <P extends IDatePickerProps>(
      WrappedComponent: React.FC<P>,
    ): React.FC<Omit<P, 'countryCodeForHolidays'>> =>
    (props: Omit<P, 'countryCodeForHolidays'>) => (
      <WrappedComponent {...(props as P)} countryCodeForHolidays={countryCode} />
    );
};

export default withHolidays;
