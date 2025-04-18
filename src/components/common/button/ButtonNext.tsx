import { FC } from 'react';
import SendIcon from '@mui/icons-material/Send';
import BpButton, { BpButtonProps } from '@/components/shared/button/BpButton';

const ButtonNext: FC<BpButtonProps> = props => (
  <BpButton endIcon={<SendIcon />} {...props}>
    Next
  </BpButton>
);
export default ButtonNext;
