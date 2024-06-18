import { useCallback, useRef, useState } from 'react';

type PressEventType = React.MouseEvent | React.TouchEvent;

const useLongPress = (onLongPress: () => void, pressDuration: number) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const timerIdRef = useRef<NodeJS.Timeout | null>(null);
  const isLongPressRef = useRef<boolean>(false);

  const handleStartPress = useCallback(
    (e: PressEventType): void => {
      e.preventDefault();
      setIsPressed(true);

      isLongPressRef.current = false;
      timerIdRef.current = setTimeout((): void => {
        isLongPressRef.current = true;
        onLongPress();
      }, pressDuration);
    },
    [onLongPress, pressDuration],
  );

  const handleEndPress = useCallback((event: PressEventType) => {
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
      timerIdRef.current = null;
    }

    if (isLongPressRef.current) {
      event.preventDefault();
      event.stopPropagation();
    }

    setIsPressed(false);
  }, []);

  const handleClickPropagation = useCallback(
    (e: PressEventType): void => {
      if (isLongPressRef.current && !isPressed) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [isPressed],
  );

  return {
    onMouseDown: handleStartPress,
    onMouseUp: handleEndPress,
    onTouchStart: handleStartPress,
    onTouchEnd: handleEndPress,
    onClick: handleClickPropagation,
  };
};

export default useLongPress;
