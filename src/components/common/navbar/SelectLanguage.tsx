import { MenuItem, Select } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FONT_FAMILY_VARIANT } from '@/theme/baseTheme';
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
      color="primary"
      variant="standard"
      IconComponent={ArrowDropDownIcon}
      disabled={!language}
      sx={{
        minWidth: 70,
        color: 'primary.500',
        fontSize: '13px',
        fontWeight: 600,
        borderRadius: '8px',
        fontFamily: FONT_FAMILY_VARIANT.primary,
        '&:hover': {
          '&:before': {
            borderBottom: 'none !important'
          }
        },
        // :befonre
        '&:before': {
          borderBottom: 'none'
        },
        '&:after': {
          borderBottom: 'none'
        },
        '& .MuiSvgIcon-root': {
          color: 'primary.500'
        }
      }}
    >
      <MenuItem value="es">ESP</MenuItem>
      <MenuItem value="en">ENG</MenuItem>
    </Select>
  );
};

export default SelectLanguage;
