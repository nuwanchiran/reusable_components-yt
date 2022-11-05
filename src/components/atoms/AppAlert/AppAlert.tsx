import s from './AppAlert.module.scss'
import {BiError} from 'react-icons/bi';
import {IoWarning} from 'react-icons/io5';
import {TiInfoLarge, TiTick} from 'react-icons/ti';
import {Dispatch, SetStateAction, useEffect} from 'react';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
  theme: 'success' | 'fail' | 'warn' | "info"
  title: string;
  delay?: number;
}

const AppAlert = ( props: Props ) => {
  const {theme,setOpen,delay,open,title} = props

  useEffect( () => {
    const timeout = setTimeout( () => {
      setOpen( false )
    }, delay || 2000 )
    return () => {
      clearTimeout( timeout )
    }
  }, [open,setOpen] )

  return props.open ? (
    <div className={s[theme]}>
      <div className={s.iconContainer}>
        {theme === "success" && <TiTick className={s.icon} />}
        {theme === "info" && <TiInfoLarge className={s.icon} />}
        {theme === "fail" && <BiError className={s.icon} />}
        {theme === "warn" && <IoWarning className={s.icon} />}
      </div>
      <p className={s.title}>{title}</p>
      <span className={s.close} onClick={() => setOpen( false )}>
        &times;
      </span>
    </div>
  ) : <></>
}

export default AppAlert