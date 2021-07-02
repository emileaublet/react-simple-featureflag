import { useContext } from "react";
import { FlagsContext } from "./context";
export const useFlags = (flag) => {
  const context = useContext(FlagsContext);
  if (!context) return false;
  const match = context.find((f) => f.name === flag);
  if (!match) return false;
  const { on, ...rest } = match;
  return on ? { on, ...rest } : false;
};
