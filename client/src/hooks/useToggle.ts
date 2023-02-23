import { useState } from "react";

function useToggle(initialValue: boolean): unknown[] {
  const [value, setValue] = useState(initialValue);
  const toggleValue = (value: boolean) => {
    setValue((currentValue: boolean) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };
  return [value, toggleValue];
}

export default useToggle;
