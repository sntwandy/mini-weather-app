import { FC, ReactElement } from "react"
import { IInput } from "./interfaces"
import './input.styles.scss'

const Input: FC<IInput> = ({ type, placeholder }): ReactElement => {
  return (
    <div className="input-container">
      <input className="input" type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input
