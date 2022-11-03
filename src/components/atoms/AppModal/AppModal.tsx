import {Dispatch, ReactNode, SetStateAction} from 'react'
import s from './AppModal.module.scss'

export type AppModalProps = {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
  children?: ReactNode
}

const AppModal = ( props: AppModalProps ) => {
  return props.open ? (
    <div className={s.bg} onClick={() => props.setOpen( false )}>
      <div className={s.fg} onClick={( e ) => e.stopPropagation()}>
        <div className={s.container}>
          {props.children}
        </div>
      </div>
    </div>
  ) : <></>
}

export default AppModal