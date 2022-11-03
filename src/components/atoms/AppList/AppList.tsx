import usePagination from '../../../hooks/usePagination';
import AppPagination from '../AppPagination/AppPagination';
import s from './AppList.module.scss';

type Props = {
  url: string;
  contentPerPage: number,
}

const AppList = ( props: Props ) => {
  const {contentPerPage, url} = props
  const pagination = usePagination( url, contentPerPage )

  return (
    <div className={s.content}>
      <ul>
        {pagination.data.map( i => <li key={i.id}>{i.title}</li> )}
      </ul>
      <AppPagination {...pagination} />
    </div>
  )
}

export default AppList