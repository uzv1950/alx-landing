import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const IconDelete: FC<SvgIconProps> = ({ ...props }) => {
  return (
    <SvgIcon {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.20937 20C6.85938 20 6.55313 19.8667 6.29062 19.6C6.02812 19.3333 5.89687 19.0222 5.89687 18.6667V6H5V4.66667H9.1125V4H14.8875V4.66667H19V6H18.1031V18.6667C18.1031 19.0222 17.9719 19.3333 17.7094 19.6C17.4469 19.8667 17.1406 20 16.7906 20H7.20937ZM9.52812 16.7556H10.8406V7.88889H9.52812V16.7556ZM13.1594 16.7556H14.4719V7.88889H13.1594V16.7556Z"
          fill="currentColor"
        />
      </svg>
    </SvgIcon>
  );
};
export default IconDelete;
