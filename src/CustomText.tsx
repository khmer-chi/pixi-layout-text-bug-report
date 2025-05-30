import { useState } from "react";
import { LayoutView, Text } from "@pixi/layout/components";
import { extend } from "@pixi/react";
extend({
  LayoutView,
  Text,
});
export const CustomText = () => {
  const [text, setText] = useState("no bug,click me");
  return (
    <layoutView
      layout={{
        width: "intrinsic",
        height: "intrinsic",
        backgroundColor: "#ffffff",
        padding: 0,
        alignItems: "center",
        alignContent: "center",
      }}
      onClick={() => {
        setText("after click,changed");
      }}
    >
      <pixiText text={text} style={{ fontSize: 20, fill: "#000000" }} />
    </layoutView>
  );
};
