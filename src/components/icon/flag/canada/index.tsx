import { type IconProps } from "src/types";
import CanadaSvg from "./canada.svg";

const CanadaFlag = ({ size = 24 }: IconProps) => {
  const width = size;
  const height = size;
  return <img src={CanadaSvg} alt="canada" width={width} height={height} />;
};

export default CanadaFlag;
