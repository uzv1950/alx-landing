import { FC } from 'react'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { SnackbarKey, closeSnackbar } from 'notistack'

interface Props {
  key: SnackbarKey
}

const NotistackActionBar: FC<Props> = ({ key }) => {
  return (
    <IconButton
      onClick={() => {
        closeSnackbar(key)
      }}
    >
      <CloseIcon sx={{ color: '#24252D !important' }} />
    </IconButton>
  )
}

export default NotistackActionBar
