import { type IconProps } from "src/types";
import UKSVG from "./uk.svg";

const UKFlag = ({ size = 24 }: IconProps) => {
  const width = size;
  const height = size;
  return <img src={UKSVG} alt="uk" width={width} height={height} />;
};

export default UKFlag;
