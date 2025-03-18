import { useEffect, useRef, useState } from "react";

interface UseDebounceProps<T> {
  value: T;
  delay: number;
}

export const useDebounce = <T>({ value, delay }: UseDebounceProps<T>) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setDebouncedValue(value), delay);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
};
