import { useState, Dispatch, SetStateAction } from "react";
import { FlagController } from "./components";
import { ReactSimpleFlagProps, ReactSimpleFlagsProps } from "../../context";
import { FiX, FiFlag } from "react-icons/fi";

import styled from "styled-components";

interface FlagsConsoleProps {
  flags: ReactSimpleFlagsProps;
  handleChange: Dispatch<SetStateAction<ReactSimpleFlagsProps>>;
}

const FlagsConsoleContainer = styled.div`
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
    helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
  box-shadow: 0 4px 14px 0px rgba(0, 0, 0, 0.25),
    0 2px 1px 0px rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  width: 320px;
  position: absolute;
  bottom: calc(24px + env(safe-area-inset-bottom));
  right: 24px;
  z-index: 99;
  background-color: white;
  padding: 24px;
  color: #324156;
  box-sizing: border-box;

  @media (max-width: 600px) {
    bottom: 0;
    right: 0;
    width: 100%;
    padding-bottom: calc(24px + env(safe-area-inset-bottom));
  }
`;

const FlagsConsoleHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const RoundedButton = styled.button`
  border-radius: 100%;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  font-size: 18px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: #2666c620;
  color: #2666c6;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #2666c6;
    color: #fff;
  }
`;

const CloseButton = styled(RoundedButton)`
  &:hover {
    background-color: #2666c6;
    color: #fff;
  }
`;

const ShowButton = styled(RoundedButton)`
  width: 42px;
  height: 42px;
  font-size: 18px;
  position: absolute;
  bottom: calc(24px + env(safe-area-inset-bottom));
  right: 24px;
  z-index: 99;
  box-sizing: border-box;

  box-shadow: 0 4px 14px 0px rgba(0, 0, 0, 0.25),
    0 2px 1px 0px rgba(0, 0, 0, 0.125);
  background-color: white;
`;

const Title = styled.p`
  margin: 0;
`;

export function FlagsConsole({ flags, handleChange }: FlagsConsoleProps) {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? (
        <FlagsConsoleContainer>
          <FlagsConsoleHeader>
            <Title>Flags</Title>
            <CloseButton
              aria-label={`Click to hide console`}
              onClick={() => setShow(!show)}
            >
              <FiX aria-label={`Hide console icon`} />
            </CloseButton>
          </FlagsConsoleHeader>
          {flags?.map((flag) => (
            <FlagController
              key={flag.name}
              flag={flag}
              handleFlagChange={() => handleFlagChange(flag)}
            />
          ))}
        </FlagsConsoleContainer>
      ) : (
        <ShowButton
          aria-label={`Click to show console`}
          onClick={() => setShow(!show)}
        >
          <FiFlag aria-label={`Show console icon`} />
        </ShowButton>
      )}
    </>
  );

  function handleFlagChange(changedFlag: ReactSimpleFlagProps) {
    handleChange(
      flags.map((flag) =>
        flag.name === changedFlag.name
          ? { ...changedFlag, enabled: !changedFlag.enabled }
          : flag
      )
    );
  }
}
