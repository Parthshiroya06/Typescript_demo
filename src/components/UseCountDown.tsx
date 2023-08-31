import {useEffect, useRef, useState} from 'react';

export function useCountDown(idx: number, intialCount: number) {
  const [countDown, setCountDown] = useState(intialCount);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number>();

  useEffect(() => {
    setIsRunning(true);
    if (idx == -1) {
      return;
    }
    setCountDown(60);
    intervalRef.current = setInterval(() => {
      setCountDown(count => {
        console.log(count);

        return count - 1;
      });
    }, 1000);

    return () => cleanUp();
  }, [idx]);

  useEffect(() => {
    setCountDown(intialCount);
  }, [intialCount]);

  useEffect(() => {
    if (countDown === 0) {
      cleanUp();
    }
  }, [countDown]);

  const cleanUp = () => {
    if (intervalRef.current) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };
  return countDown;
}
