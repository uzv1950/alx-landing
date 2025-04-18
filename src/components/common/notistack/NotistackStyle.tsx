import { styled } from '@mui/material';
import { MaterialDesignContent } from 'notistack';

const CommonStyle = {
  backgroundColor: '#FFF',
  borderRadius: '14px',
  color: '#000000D9',
  fontWeight: 400
};

const NotistackStyle = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    ...CommonStyle,
    border: '1px solid #A4E239',
    backgroundColor: '#F4FFDE',
    boxShadow: 'none',
    '& #notistack-snackbar svg': {
      color: '#66A010',
      marginRight: '8px'
    },
    '& button svg': {
      color: '#000000D9 !important'
    }
  },
  '&.notistack-MuiContent-error': {
    ...CommonStyle,
    border: '1px solid #F87671',
    backgroundColor: '#FEE3E2',
    boxShadow: 'none',
    '& #notistack-snackbar svg': {
      color: '#DD2C25',
      marginRight: '8px'
    },
    '& button svg': {
      color: '#000000D9 !important'
    }
  },
  '&.notistack-MuiContent-warning': {
    ...CommonStyle,
    border: '1px solid #FFB822',
    backgroundColor: '#FFFAEB',
    boxShadow: 'none',
    '& #notistack-snackbar svg': {
      color: '#EA8707',
      marginRight: '8px'
    },
    '& button svg': {
      color: '#000000D9 !important'
    }
  },
  '&.notistack-MuiContent-info': {
    ...CommonStyle,
    border: '1px solid #606EC6',
    backgroundColor: '#E7E9F7',
    boxShadow: 'none',
    '& #notistack-snackbar svg': {
      color: '#1226AA',
      marginRight: '8px'
    },
    '& button svg': {
      color: '#000000D9 !important'
    }
  }
}));

export default NotistackStyle;
