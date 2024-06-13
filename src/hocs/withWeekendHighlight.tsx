const withWeekendHighlight =
  (Component: React.FC): React.FC =>
  (props) => (
    <div style={{ border: '5px solid yellow' }}>
      <Component {...props} />
    </div>
  );
export default withWeekendHighlight;
