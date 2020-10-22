import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z" />
    </Svg>
  );
}

export default SvgComponent;
