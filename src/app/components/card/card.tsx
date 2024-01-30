import { FC, ReactElement } from 'react'
import { ForecastIcon } from '..'
import './card.styles.scss'
import { ICard } from '@/app/shared/interfaces';

const Card: FC<ICard> = ({ weekDay, iconName, temperature }): ReactElement => {
  return (
    <div className='card-container zoom-in'>
      <span>{ weekDay }</span>
      <ForecastIcon iconName={iconName} />
      <span>{temperature}°</span>
    </div>
  );
}

export default Card
