import { Header } from "./components/Header";
import { CoreConcenpt } from "./components/CoreConcenpt";
import { TabeButton } from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";
import { TabContent } from "./components/TabContent";

function App() {
  const [selectedTobic, setSelectedTobic] = useState();

  function handelClck(selectedButton) {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((C,I) => (
              <CoreConcenpt key={I} {...C} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabeButton
              isActive={selectedTobic === "components"}
              onClickHandler={() => handelClck("components")}
            >
              {EXAMPLES.components.title}
            </TabeButton>
            <TabeButton
              isActive={selectedTobic === "jsx"}
              onClickHandler={() => handelClck("jsx")}
            >
              {EXAMPLES.jsx.title}
            </TabeButton>
            <TabeButton
              isActive={selectedTobic === "props"}
              onClickHandler={() => handelClck("props")}
            >
              {EXAMPLES.props.title}
            </TabeButton>
            <TabeButton
              isActive={selectedTobic === "state"}
              onClickHandler={() => handelClck("state")}
            >
              {EXAMPLES.state.title}
            </TabeButton>
          </menu>
          {tabeContant}
        </section>
      </main>
    </div>
  );
}

export default App;
