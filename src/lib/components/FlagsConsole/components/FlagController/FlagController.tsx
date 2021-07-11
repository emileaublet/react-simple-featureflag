import styled from "styled-components";
import { ReactSimpleFlagProps } from "../../../../context";

const FlagControllerContainer = styled.div`
  display: block;
`;

interface FlagControllerProps {
  flag: ReactSimpleFlagProps;
  handleFlagChange: () => void;
}

export function FlagController({
  flag,
  handleFlagChange,
}: FlagControllerProps) {
  const { name, enabled } = flag;
  return (
    <FlagControllerContainer>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={enabled}
        onChange={handleFlagChange}
      />
      <label htmlFor={name}>{flag.name}</label>
    </FlagControllerContainer>
  );
}
