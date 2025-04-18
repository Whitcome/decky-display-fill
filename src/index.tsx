import {
  ToggleField,
  PanelSection,
  PanelSectionRow,
  staticClasses
} from "@decky/ui";
import { definePlugin, routerHook } from "@decky/api";
import { FaShip } from "react-icons/fa";
import { Fill } from "./fill";

function Content() {
  return (
    <PanelSection>
      <PanelSectionRow>
      <ToggleField
        checked={true}
        label={"Enabled"}
        onChange={() => {}}
      />
      </PanelSectionRow>
    </PanelSection>
  );
};

export default definePlugin(() => {
  routerHook.addGlobalComponent("Fill", () => (<Fill />));
  
  return {
    name: "Display Fill",
    titleView: <div className={staticClasses.Title}>Display Fill</div>,
    content: <Content />,
    icon: <FaShip />,
    onDismount() {
      routerHook.removeGlobalComponent("Fill");
    }
  };
});
