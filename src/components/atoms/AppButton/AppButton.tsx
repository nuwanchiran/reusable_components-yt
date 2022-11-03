import React from 'react'
import s from './AppButton.module.scss'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  theme: "light" | "dark" | "danger" | "default"
}

const AppButton = ( props: Props ) => {
  return (
    <button {...props} className={s[props.theme]} />
  )
}

export default AppButton