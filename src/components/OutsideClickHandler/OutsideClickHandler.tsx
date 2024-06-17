import { useEffect, useRef } from 'react';

interface IComponentProps {
  children: React.ReactNode;
  onOutsideClick: () => void;
}

const OutsideClickHandler: React.FC<IComponentProps> = ({ children, onOutsideClick }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return <div ref={containerRef}>{children}</div>;
};

export default OutsideClickHandler;
