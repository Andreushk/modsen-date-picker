const withHolidayHighlight =
  (Component: React.FC): React.FC =>
  (props) => (
    <div style={{ border: '2px solid green' }}>
      <Component {...props} />
    </div>
  );
export default withHolidayHighlight;
