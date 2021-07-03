import React from "react";
interface FlagsProps {
  name: string;
  enabled: boolean;
}
export const FlagsContext = React.createContext<FlagsProps[]>([]);
