import { FC, ReactElement } from 'react'
import { ForecastIcon } from '..'
import { ICard } from './interfaces';
import './card.styles.scss'

const Card: FC<ICard> = ({ weekDay, iconName, temperature }): ReactElement => {
  return (
    <div className='card-container'>
      <span>{ weekDay }</span>
      <ForecastIcon iconName={iconName} />
      <span>{temperature}°</span>
    </div>
  );
}

export default Card
