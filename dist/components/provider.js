import { FlagsContext } from "./context"; // import { useState } from "react";

/* const dev = process.env.NODE_ENV === "development"; */

export const FlagsProvider = ({
  children,
  flags
}) => {
  // const [flags, setFlags] = useState(initialFlags);
  return /*#__PURE__*/React.createElement(FlagsContext.Provider, {
    value: flags
  }, children);
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