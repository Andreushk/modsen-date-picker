import { useEffect, useRef } from 'react';

interface IComponentProps {
  children: React.ReactNode;
  isWithCapturePhase?: boolean;
  onOutsideClick: () => void;
}

const OutsideClickHandler: React.FC<IComponentProps> = ({
  children,
  isWithCapturePhase = false,
  onOutsideClick,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, isWithCapturePhase);
    return () => {
      document.removeEventListener('click', handleClick, isWithCapturePhase);
    };
  });

  return <div ref={containerRef}>{children}</div>;
};

export default OutsideClickHandler;
