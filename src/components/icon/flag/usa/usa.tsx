import { type IconProps } from "src/types";
import USASVG from "./usa.svg";

const USAFlag = ({ size = 24 }: IconProps) => {
  const width = size;
  const height = size;
  return <img src={USASVG} alt="usa" width={width} height={height} />;
};

export default USAFlag;
