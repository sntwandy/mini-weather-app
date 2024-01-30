import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { forecastIconColor, forecastIcons } from './forecastIcon.directory';
import { FC, ReactElement } from "react";
import './forecastIcon.styles.scss'
import { IForecastIcon } from "@/app/shared/interfaces";

const forecastIcon: FC<IForecastIcon> = ({ iconName }): ReactElement => {
  return (
    <FontAwesomeIcon
      className='light-speed-in'
      style={{
        color: forecastIconColor[iconName],
        width: '50px',
        height: '50px',
      }}
      icon={forecastIcons[iconName]}
    />
  );
}

export default forecastIcon
