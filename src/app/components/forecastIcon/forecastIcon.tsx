import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { forecastIconColor, forecastIcons } from './forecastIcon.directory';
import { FC } from "react";
import { IforecastIcon } from "./interfaces";

const forecastIcon: FC<IforecastIcon> = ({ iconName }) => {
  return (
    <FontAwesomeIcon
      style={{ color: forecastIconColor[iconName], width: '50px', height: '50px' }}
      icon={forecastIcons[iconName]}
    />
  );
}

export default forecastIcon
