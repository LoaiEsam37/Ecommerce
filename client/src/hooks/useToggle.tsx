import React, { useState } from "react";

interface Props {
  initialValue: boolean;
}

const useToggle: React.FC<Props> = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);
  const toggleValue: React.FC = (value): void => {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };
  return [value, setValue];
};

export default useToggle;
