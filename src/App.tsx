import "@pixi/layout";
import { LayoutContainer, LayoutText } from "@pixi/layout/components";
import { Application, extend } from "@pixi/react";
import { useState } from "react";
import { CustomText } from "./CustomText";
import { LayoutResizer } from "./LayoutResizer";
extend({
  LayoutText,
  LayoutContainer,
});
export function App() {
  const [text, setText] = useState("click me bug here");
  return (
    <Application background={"#1099bb"} resizeTo={window}>
      <LayoutResizer>
        <layoutContainer
          layout={{
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <layoutContainer
            layout={{
              backgroundColor: "#ffffff",
              padding: 10,
            }}
          > */}
          <layoutText
            text={text}
            layout={{
              width: "intrinsic",
              height: "intrinsic",
              backgroundColor: "#ffffff",
            }}
            style={{ fontSize: 20 }}
            onClick={() => {
              setText("changed");
            }}
          />

          <CustomText />
          {/* </layoutContainer> */}
        </layoutContainer>
      </LayoutResizer>
    </Application>
  );
}
