import { Box } from '@mui/material';

export const a11yProps = (index: number, ariaLabel = 'section-tab') => {
  return {
    id: `${ariaLabel}-${index}`,
    'aria-controls': `${ariaLabel}-${index}`
  };
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number | string;
  value: number | string;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`section-tabpanel-${index}`}
      aria-labelledby={`section-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </Box>
  );
};

export default TabPanel;
