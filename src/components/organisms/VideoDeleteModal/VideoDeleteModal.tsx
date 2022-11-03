import AppButton from '../../atoms/AppButton/AppButton'
import AppModal, {AppModalProps} from '../../atoms/AppModal/AppModal'
import s from './VideoDeleteModal.module.scss'

type Props = AppModalProps & {}

const VideoDeleteModal = ( props: Props ) => {
  return (
    <AppModal {...props}>
      <article className={s.container}>
        <h3>You cannot undo after deleting this content.</h3>
        <ul>
          <li>Video will be deleted</li>
          <li>Comments will be deleted</li>
          <li>All the views that you got will be deleted</li>
        </ul>
      </article>
      <aside className={s.btnBar}>
        <AppButton theme='light' onClick={() => props.setOpen( false )}>Cancel</AppButton>
        <AppButton theme='danger' onClick={() => props.setOpen( false )}>Delete</AppButton>
      </aside>
    </AppModal>
  )
}

export default VideoDeleteModal