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

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('click', handleClick, isWithCapturePhase);
    return () => {
      document.removeEventListener('click', handleClick, isWithCapturePhase);
    };
  }, [isWithCapturePhase, onOutsideClick]);

  return <div ref={containerRef}>{children}</div>;
};

export default OutsideClickHandler;
