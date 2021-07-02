"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlagsProvider = void 0;

require("core-js/modules/es.regexp.flags.js");

var _context = require("./context");

// import { useState } from "react";

/* const dev = process.env.NODE_ENV === "development"; */
const FlagsProvider = _ref => {
  let {
    children,
    flags
  } = _ref;
  // const [flags, setFlags] = useState(initialFlags);
  return /*#__PURE__*/React.createElement(_context.FlagsContext.Provider, {
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


exports.FlagsProvider = FlagsProvider;