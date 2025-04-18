import type { ReactNode } from 'react';
import { VariantType } from 'notistack';
import { TaskAlt } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';

const NotistackIconVariant: Record<VariantType, ReactNode> = {
  success: <CheckCircleIcon />,
  error: <CancelIcon />,
  warning: <WarningIcon />,
  info: <InfoIcon />,
  default: <TaskAlt />
};

export default NotistackIconVariant;
