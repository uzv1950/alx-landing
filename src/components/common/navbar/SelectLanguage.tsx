import { MenuItem, Select } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

type TLanguages = 'es' | 'en' | '';

const SelectLanguage = () => {
  const router = useRouter();

  const [language, setLanguage] = useState<TLanguages>('');

  const handleChange = (event: any) => {
    const newLocale = event.target.value;
    const { pathname, asPath, query } = router;
    setLanguage(event.target.value);
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  useEffect(() => {
    const locale = router.locale as TLanguages;
    if (locale) {
      setLanguage(locale);
    } else {
      setLanguage('es');
    }
  }, [router.isReady, router.locale]);

  return (
    <Select
      value={language}
      onChange={handleChange}
      size="small"
      variant="outlined"
      IconComponent={ChevronDownIcon}
      disabled={!language}
      sx={{
        color: 'grey.50',
        borderRadius: '8px',
        fontSize: '14px',
        '& fieldset': {
          border: theme => `1px solid ${theme.palette.grey[50]}`
        },
        '&:focus': {
          border: theme => `1px solid ${theme.palette.primary[300]}`
        },
        '& .MuiSelect-icon': {
          width: '20px',
          height: '20px',
          color: 'grey.50',
          top: '8px'
        },
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          border: theme => `1px solid ${theme.palette.grey[50]}`
        }
      }}
    >
      <MenuItem value="es">ES</MenuItem>
      <MenuItem value="en">EN</MenuItem>
    </Select>
  );
};

export default SelectLanguage;
