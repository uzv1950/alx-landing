import { FC } from 'react';
import BpButton, { BpButtonProps } from '@/components/shared/button/BpButton';

type Props = Omit<BpButtonProps, 'color' | 'variant'>;

const ButtonPrimary: FC<Props> = ({ children, ...props }) => (
  <BpButton
    {...props}
    sx={{
      ...props.sx,
      color: 'primary.50',
      backgroundColor: 'blueBlack.300',
      transition: 'all 0.3s ease',
      '&.Mui-disabled': {
        backgroundColor: 'grey.400',
        '& .MuiButton-icon': {
          color: 'grey.700'
        },
        '& .content': {
          color: 'grey.700'
        }
      },
      '& .content': {
        zIndex: 1
      },
      '@keyframes hover': {
        '0%': {
          opacity: 0,
          transform: 'translate(0%, 0%)'
        },
        '100%': {
          opacity: 1,
          transform: 'translate(0%, 0%)'
        }
      },
      '& .MuiButton-icon': {
        zIndex: 1
      },
      '&:hover': {
        backgroundColor: 'inherit',
        boxShadow: '0px 0px 19.9px -9px #FFFFFF80',
        '&::before': {
          content: '""',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(117.21% 301.7% at 84.97% 39.58%, #116165 8.17%, #101820 73.41%)',
          position: 'absolute',
          top: 0,
          zIndex: 0,
          animation: 'hover 2s ease forwards'
        }
      }
    }}
  >
    <span className="content">{children}</span>
  </BpButton>
);

export default ButtonPrimary;
