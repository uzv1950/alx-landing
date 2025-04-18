import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';

const BpTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#EAEAF4',
    color: '#2E3092',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12)
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#EAEAF4'
  }
}));

export default BpTooltip;
