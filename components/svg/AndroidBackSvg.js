import * as React from "react";
import Svg, { Path } from "react-native-svg/lib/commonjs/index.js";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z" />
    </Svg>
  );
}

export default SvgComponent;
