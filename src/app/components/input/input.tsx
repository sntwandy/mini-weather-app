import { FC, ReactElement } from "react"
import './input.styles.scss'
import { useRouter } from "next/navigation"
import { IInput } from "@/app/shared/interfaces"

const Input: FC<IInput> = ({ type, placeholder, setCityName, cityList }): ReactElement => {
  const router = useRouter()

  const navigateTo = (lat: number, lon: number) => {
    router.push(`forecast?lat=${lat}&lon=${lon}`)
  }
  return (
    <div className='input-container'>
      <input
        onChange={(event) => setCityName && setCityName(event.target.value)}
        className='input'
        type={type}
        placeholder={placeholder}
      />
      {cityList?.length && (
        <div className='input-result-bar'>
          {cityList.map((city, index) => (
            <li onClick={() => navigateTo(city.lat, city.lon)} key={index}>
              {city.name} - {city.country}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default Input
