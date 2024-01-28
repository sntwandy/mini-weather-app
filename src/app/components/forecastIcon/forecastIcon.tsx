import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { forecastIcons } from './forecastIcon.directory';
import { FC } from "react";
import { IforecastIcon } from "./interfaces";

const forecastIcon: FC<IforecastIcon> = ({ iconName }) => {
  return <FontAwesomeIcon icon={forecastIcons[iconName]} />
}

export default forecastIcon
