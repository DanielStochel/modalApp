import { useState, useMemo } from "react";

export function useBoolean(defaultValue: boolean) {
  const [value, setValue] = useState<boolean>(defaultValue);

  const setters = useMemo(
    () => ({
      on() {
        setValue(true);
      },
      off() {
        setValue(false);
      },
      toggle() {
        setValue((value) => !value);
      },
    }),
    [setValue]
  );

  return [value, setters] as const;
}
