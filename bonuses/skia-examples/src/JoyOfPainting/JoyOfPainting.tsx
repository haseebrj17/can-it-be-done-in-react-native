import {
  Canvas,
  Fill,
  LinearGradient,
  rect,
  vec,
} from "@shopify/react-native-skia";
import React from "react";
import { useWindowDimensions } from "react-native";

import { Limmat } from "./Limmat";
import { Sky } from "./Sky";
import { Tree } from "./Tree";

export const JoyOfPainting = () => {
  const { height } = useWindowDimensions();
  return (
    <Canvas style={{ flex: 1 }}>
      <Sky />
      <Limmat />
      <Tree rct={rect(-32, 410, 100, 170)} />
      <Tree rct={rect(50, 420, 100, 150)} />
      <Tree rct={rect(150, 430, 100, 150)} />
    </Canvas>
  );
};
