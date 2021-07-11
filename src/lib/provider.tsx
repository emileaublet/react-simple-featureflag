import React, { useState } from "react";
import { FlagsConsole } from "./components";
import { ReactSimpleFlagsContext, ReactSimpleFlagsProps } from "./context";

const dev = process.env.NODE_ENV === "development";
interface Props {
  children: React.ReactNode;
  initialFlags: ReactSimpleFlagsProps;
}

export const ReactSimpleFlagsProvider = ({ children, initialFlags }: Props) => {
  const [flags, setFlags] = useState(initialFlags);
  return (
    <ReactSimpleFlagsContext.Provider value={flags}>
      {dev && <FlagsConsole flags={flags} handleChange={setFlags} />}
      {children}
    </ReactSimpleFlagsContext.Provider>
  );
};
