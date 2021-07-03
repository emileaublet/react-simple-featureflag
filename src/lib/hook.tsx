import { useContext } from "react";
import { FlagsContext } from "./context";

export const useFlags = (flag: string): boolean => {
  const context = useContext(FlagsContext);
  if (!context) return false;

  const match = context?.find((f) => f.name === flag);

  if (!match) return false;

  return Boolean(match.enabled);
};
