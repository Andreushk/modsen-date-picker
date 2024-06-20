import { IDatePickerProps } from '@/components/DatePicker/types';

const withTasks =
  () =>
  <P extends IDatePickerProps>(WrappedComponent: React.FC<P>): React.FC<Omit<P, 'withTasks'>> =>
  (props: Omit<P, 'withTasks'>) => <WrappedComponent {...(props as P)} withTasks />;

export default withTasks;
