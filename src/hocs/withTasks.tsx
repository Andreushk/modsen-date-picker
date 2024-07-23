import { IDatePickerProps } from '@/components/DatePicker/types';

const withTasks =
  () =>
  <P extends IDatePickerProps>(WrappedComponent: React.FC<P>): React.FC<P> =>
  (props: P) => <WrappedComponent {...props} withTasks />;

export default withTasks;
