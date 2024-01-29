import { ForecastIcon, Input } from '../components'
import './home.styles.scss'

const dashboard = () => {
  return (
    <div className="dashboard-container">
      <ForecastIcon iconName="sun" />
      <h1 className="dashboard-title">Mini Weather App</h1>
      <span className="dashboard-description">View the 5 day forecast for any city</span>
      <Input type='text' placeholder='Enter your city...' />
    </div>
  )
};

export default dashboard;
