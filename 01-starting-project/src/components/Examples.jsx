import { useState } from "react";
import { EXAMPLES } from "../data";
import { TabeButton } from "./TabButton";
import { TabContent } from "./TabContent";
import { Section } from "./Section";
import { TabContents } from "./TabContents";

export const Examples = () => {
  const [selectedTobic, setSelectedTobic] = useState();
  function handelTobicSelected(selectedButton) {
    setSelectedTobic(selectedButton);
  }
  const tabeContant = !selectedTobic ? (
    <p>please Select Topic.</p>
  ) : (
    <div id="tab-content">
      <TabContent {...EXAMPLES[selectedTobic]} />
    </div>
  );
  return (
    <Section id="examples" title="Examples">
      <TabContents
      ButtonContenar="menu"
        buttons={
          <>
            <TabeButton
              isActive={selectedTobic === "components"}
              onClick={() => handelTobicSelected("components")}
            >
              {EXAMPLES.components.title}
            </TabeButton>
            <TabeButton
              isActive={selectedTobic === "jsx"}
              onClick={() => handelTobicSelected("jsx")}
            >
              {EXAMPLES.jsx.title}
            </TabeButton>
            <TabeButton
              isActive={selectedTobic === "props"}
              onClick={() => handelTobicSelected("props")}
            >
              {EXAMPLES.props.title}
            </TabeButton>
            <TabeButton
              isActive={selectedTobic === "state"}
              onClick={() => handelTobicSelected("state")}
            >
              {EXAMPLES.state.title}
            </TabeButton>
          </>
        }
      >
        {tabeContant}
      </TabContents>
    </Section>
  );
};

//   <menu>

//   </menu>
//   {tabeContant}
