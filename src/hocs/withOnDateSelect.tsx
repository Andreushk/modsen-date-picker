import React from 'react';

import { IDatePickerProps } from '@/components/DatePicker/types';

const NO_CALLBACK =
  'You are using the "withOnDateSelect" decorator, but have not provided the necessary callback function onto it. Pass callback function which will accept date string value.';

const withOnDateSelect = (onDateSelect: (selectedDate: string) => void) => {
  if (!onDateSelect) {
    throw new Error(NO_CALLBACK);
  }

  return <P extends IDatePickerProps>(WrappedComponent: React.FC<P>): React.FC<P> =>
    (props: P) => <WrappedComponent {...props} onDateSelect={onDateSelect} />;
};

export default withOnDateSelect;
