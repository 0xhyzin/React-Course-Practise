import { EXAMPLES } from "../data";
import { TabeButton } from "./TabButton";

export const TabContents = ({ children, buttons,ButtonContenar="menu" }) => {
  return (
    <>
      <ButtonContenar>{buttons}</ButtonContenar>
      {children}
    </>
  );
};
