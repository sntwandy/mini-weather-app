import { Card, ForecastIcon } from '../components';
import './forecast.styles.scss'

const dashboard = () => {
  return (
    <div className='forecast-container'>
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
      <div className='forecast-cards-container'>
        <Card weekDay='Mon' iconName='sun' temperature={70} />
        <Card weekDay='Tue' iconName='moon' temperature={50} />
        <Card weekDay='Wed' iconName='cloud' temperature={65} />
      </div>
    </div>
  );
};

export default dashboard;
