import { useContext } from "react";
import { ReactSimpleFlagsContext } from "./context";

export const useReactSimpleFlags = (flag: string): boolean => {
  const context = useContext(ReactSimpleFlagsContext);
  if (!context) return false;

  const match = context?.find((f) => f.name === flag);

  if (!match) return false;

  return Boolean(match.enabled);
};
