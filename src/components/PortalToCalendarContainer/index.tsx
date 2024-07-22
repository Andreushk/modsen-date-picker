import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const PortalToCalendarContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const container: HTMLElement | null = document.getElementById('date-picker-calendar');

  return (container && createPortal(children, container)) || null;
};

export default PortalToCalendarContainer;
