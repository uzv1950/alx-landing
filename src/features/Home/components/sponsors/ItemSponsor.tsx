import { Box } from '@mui/material';

type TProps = {
  description: string;
  image: string;
};

const ItemSponsor = ({ image, description }: TProps) => {
  return (
    <Box
      sx={{
        width: 'fit-content',
        '&:hover': {
          background: 'linear-gradient(360deg, #141719 0%, #1E2225 100%)',
          borderRadius: '16px',
          border: 1,
          borderImageSource: 'linear-gradient(129.1deg, #1ECAD3 1.43%, rgba(30, 202, 211, 0) 72.41%)',
          boxShadow: '0px 0px 20px 0px #1ECAD333'
        },
        padding: 2,
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Box component="img" src={image} width={180} height={80} alt={description} />
    </Box>
  );
};
export default ItemSponsor;
