import usePagination from '../../../hooks/usePagination'
import AppButton from '../AppButton/AppButton'
import s from './AppPagination.module.scss'

type Props = ReturnType<typeof usePagination>

const AppPagination = ( props: Props ) => {
  const {current, prev, next, pages} = props
  return (
    <div className={s.pagination}>
      <AppButton theme='dark' disabled={current <= 1} onClick={prev}>{"<"}</AppButton>
      <span>{current}</span>
      <AppButton theme='dark' disabled={current >= pages} onClick={next}>{">"}</AppButton>
    </div>
  )
}

export default AppPagination