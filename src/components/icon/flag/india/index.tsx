import { type IconProps } from "src/types";
import IndiaSVG from "./india.svg";

const IndiaFlag = ({ size = 24 }: IconProps) => {
  const width = size;
  const height = size;
  return <img src={IndiaSVG} alt="india" width={width} height={height} />;
};

export default IndiaFlag;
