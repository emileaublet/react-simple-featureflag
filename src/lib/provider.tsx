import React from "react";
import { ReactSimpleFlagsContext, ReactSimpleFlagsProps } from "./context";
// import { useState } from "react";

/* const dev = process.env.NODE_ENV === "development"; */

interface Props {
  children: React.ReactNode;
  flags: ReactSimpleFlagsProps;
}
export const ReactSimpleFlagsProvider = ({ children, flags }: Props) => {
  // const [flags, setFlags] = useState(initialFlags);
  return (
    <ReactSimpleFlagsContext.Provider value={flags}>
      {/*{dev && <FlagsConsole flags={flags} handleChange={setFlags} />}*/}
      {children}
    </ReactSimpleFlagsContext.Provider>
  );
};

/* const FlagsConsole = ({ flags, handleChange }) => {
  const [show, setShow] = useState(false);
  const count = flags.filter(({ on }) => on === true).length;
  const handleToggleFlag = (flagName) => {
    handleChange(
      flags.map(({ name, on, ...rest }) =>
        name === flagName ? { name, on: !on, ...rest } : { name, on, ...rest }
      )
    );
  };
  return (
    <div
      className={classNames(styles.container, show && styles.container_show)}
    >
      <div className={styles.row}>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide flags" : `Show flags (${count})`}
        </button>
      </div>
      {show &&
        flags.map(({ name, on }) => (
          <div className={styles.row} key={name}>
            <input
              type="checkbox"
              id={name}
              defaultChecked={on}
              onChange={() => handleToggleFlag(name)}
            />
            <label htmlFor={name}>{name}</label>
          </div>
        ))}
    </div>
  );
};
 */
