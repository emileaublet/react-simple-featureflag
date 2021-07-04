import React from "react";
export interface ReactSimpleFlagProps {
  name: string;
  enabled: boolean;
}
export type ReactSimpleFlagsProps = ReactSimpleFlagProps[];

export const ReactSimpleFlagsContext =
  React.createContext<ReactSimpleFlagsProps>([]);
