import { useContext } from "react";
import { FlagsContext } from "./context";

export const useFlags = (flag: string): boolean => {
  const context = useContext(FlagsContext);
  const match = context?.find((f) => f.name === flag);

  if (!match) return false;

  const { enabled } = match;
  return Boolean(enabled);
};
