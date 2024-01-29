import { ForecastIcon } from '../components';
import './forecast.styles.scss'

const dashboard = () => {
  return (
    <div className="forecast-container">
      <div className='forecast-info-container'>
        <span id='days'>5 days forecast</span>
        <span id='city'>Seattle, Washington</span>
      </div>
      <div className='forecast-today-container'>
        <div className='today-info'>
          <span id='today'>Today</span>
          <span id='temperature'>76</span>
        </div>
        <ForecastIcon iconName='sun' />
      </div>
      <div>
        cards here
      </div>
    </div>
  )
};

export default dashboard;
